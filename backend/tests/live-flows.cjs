// Opt-in live integration tests. Uses only uniquely named synthetic fixtures.
// Run from backend: node tests/live-flows.cjs --live
// Existing patients, doctors, tokens, migrations, and demo data are never modified.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { randomUUID, randomBytes } = require('node:crypto');
const http = require('node:http');
const { format } = require('node:util');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const db = require('../supabase');
const bcrypt = require('bcryptjs');

if (!process.argv.includes('--live')) throw new Error('Explicit --live flag required.');
const runId = `medx-test-${Date.now()}-${randomUUID().slice(0, 8)}`;
const reportDir = path.join(__dirname, '../test-results', runId);
fs.mkdirSync(reportDir, { recursive: true });
const base = 'http://127.0.0.1:15009';
const results = [];
const owned = { hospital: randomUUID(), doctors: [randomUUID(), randomUUID()], staff: [randomUUID(), randomUUID()], admin: randomUUID(), patients: [], patientNames: [], assessments: [], symptomNames: [], storagePaths: [] };
const secrets = Object.entries(process.env).filter(([key, value]) => /KEY|SECRET|TOKEN|PASSWORD|CREDENTIAL/.test(key) && value?.length > 8).map(([, value]) => value);
const clean = value => secrets.reduce((text, secret) => text.split(secret).join('[REDACTED]'), String(value));
let server;
let logs = '';
const print = console.log.bind(console);
function save() {
  fs.writeFileSync(path.join(reportDir, 'results.json'), JSON.stringify({ runId, results, owned }, null, 2));
}
function record(name, status, detail = '') {
  results.push({ name, status, detail: clean(detail) });
  print(`${status.toUpperCase()} ${name}${detail ? ': ' + clean(detail).slice(0, 320) : ''}`);
  save();
}
async function check(name, fn) {
  try { await fn(); record(name, 'pass'); return true; }
  catch (error) { record(name, 'fail', error.message); return false; }
}
async function query(builder) {
  const { data, error } = await builder.abortSignal(AbortSignal.timeout(20000));
  if (error) throw new Error(`${error.code || 'database'}: ${error.message}`);
  return data;
}
async function api(route, { method = 'GET', body, cookie, headers = {}, timeout = 100000 } = {}) {
  const response = await fetch(base + route, {
    method, headers: { ...(cookie ? { Cookie: cookie } : {}), ...(body && !(body instanceof FormData) ? { 'Content-Type': 'application/json' } : {}), ...headers },
    body: body instanceof FormData ? body : body === undefined ? undefined : JSON.stringify(body),
    signal: AbortSignal.timeout(timeout),
  });
  const bytes = Buffer.from(await response.arrayBuffer());
  let data;
  try { data = JSON.parse(bytes.toString()); } catch { data = null; }
  return { status: response.status, data, bytes, contentType: response.headers.get('content-type'), cookie: response.headers.get('set-cookie')?.split(';')[0] };
}
function expect(response, status) {
  const allowed = Array.isArray(status) ? status : [status];
  assert.ok(allowed.includes(response.status), `expected HTTP ${allowed.join('/')} but received ${response.status}: ${response.data?.error || response.contentType || ''}`);
  if (response.status < 400 && response.data) assert.notEqual(response.data.success, false);
  return response.data;
}
function multipart(field, bytes, mime, name) {
  const data = new FormData(); data.append(field, new Blob([bytes], { type: mime }), name); return data;
}
function makePdf() {
  const content = 'BT /F1 16 Tf 50 760 Td (SYNTHETIC TEST DOCUMENT - NOT A REAL PATIENT) Tj 0 -28 Td (Patient: Synthetic Example. Age: 30.) Tj 0 -28 Td (Reported symptom: mild cough for two days.) Tj 0 -28 Td (Medications: none reported. Allergies: none reported.) Tj ET';
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    `<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}\nendstream`,
  ];
  let out = '%PDF-1.4\n'; const offsets = [0];
  for (let i = 0; i < objects.length; i++) { offsets.push(Buffer.byteLength(out)); out += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`; }
  const xref = Buffer.byteLength(out);
  out += `xref\n0 6\n0000000000 65535 f \n${offsets.slice(1).map(n => String(n).padStart(10, '0') + ' 00000 n \n').join('')}trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return Buffer.from(out);
}
async function cleanup() {
  const failures = [];
  async function attempt(label, fn) { try { await fn(); } catch (e) { failures.push(`${label}: ${e.message}`); } }
  // Recover fixture IDs even if a successful response was lost in transit.
  if (owned.patientNames.length) await attempt('recover fixture patients', async () => {
    const rows = await query(db.from('patients').select('id').in('name', owned.patientNames));
    owned.patients = [...new Set([...owned.patients, ...rows.map(r => r.id)])];
  });
  if (owned.patients.length) await attempt('recover fixture assessments', async () => {
    const rows = await query(db.from('assessments').select('id').in('patient_id', owned.patients));
    owned.assessments = [...new Set([...owned.assessments, ...rows.map(r => r.id)])];
  });
  let docs = [];
  if (owned.assessments.length) await attempt('recover fixture documents', async () => {
    docs = await query(db.from('documents').select('id,storage_path').in('assessment_id', owned.assessments));
  });
  const storagePaths = [...new Set([...owned.storagePaths, ...docs.map(d => d.storage_path)])].filter(p => owned.assessments.some(id => p?.startsWith(`assessments/${id}/documents/`)));
  if (storagePaths.length) await attempt('remove fixture storage', async () => {
    const { error } = await db.storage.from('medical-documents').remove(storagePaths); if (error) throw error;
  });
  if (docs.length) await attempt('remove fixture findings', () => query(db.from('document_findings').delete().in('document_id', docs.map(d => d.id))));
  if (owned.assessments.length) {
    for (const table of ['clinical_reviews', 'tokens', 'documents', 'assessment_symptoms', 'clinical_history', 'clinical_summaries']) {
      await attempt(`remove fixture ${table}`, () => query(db.from(table).delete().in('assessment_id', owned.assessments)));
    }
    await attempt('remove fixture assessments', () => query(db.from('assessments').delete().in('id', owned.assessments)));
  }
  if (owned.patients.length) await attempt('remove fixture patients', () => query(db.from('patients').delete().in('id', owned.patients)));
  if (owned.symptomNames.length) await attempt('remove fixture symptoms', () => query(db.from('symptoms').delete().in('name', owned.symptomNames)));
  for (const [table, ids] of [['staff_users', owned.staff], ['admin_users', [owned.admin]], ['doctor_queues', owned.doctors], ['doctors', owned.doctors], ['hospitals', [owned.hospital]]]) {
    await attempt(`remove fixture ${table}`, () => query(db.from(table).delete().in(table === 'doctor_queues' ? 'doctor_id' : 'id', ids)));
  }
  for (const [table, ids] of [['patients', owned.patients], ['assessments', owned.assessments], ['doctors', owned.doctors], ['hospitals', [owned.hospital]], ['staff_users', owned.staff], ['admin_users', [owned.admin]]]) {
    if (ids.length) await attempt(`verify ${table} cleanup`, async () => assert.equal((await query(db.from(table).select('id').in('id', ids))).length, 0));
  }
  record('Cleanup and verify synthetic fixtures', failures.length ? 'fail' : 'pass', failures.join('; '));
}

async function startBackend() {
  // Do not reuse or stop another backend process.
  const net = require('node:net');
  await new Promise((resolve, reject) => { const probe = net.createServer(); probe.once('error', reject); probe.listen(15009, '127.0.0.1', () => probe.close(resolve)); });
  process.env.PORT = '15009';
  for (const level of ['log', 'warn', 'error', 'info']) console[level] = (...args) => { logs = (logs + clean(format(...args)) + '\n').slice(-300000); };
  const originalListen = http.Server.prototype.listen;
  http.Server.prototype.listen = function (...args) { server = this; return originalListen.apply(this, args); };
  try { require('../server'); } finally { http.Server.prototype.listen = originalListen; }
  for (let i = 0; i < 40; i++) { try { expect(await api('/', { timeout: 1000 }), 200); break; } catch { if (i === 39) throw new Error('Isolated backend did not start'); await new Promise(r => setTimeout(r, 250)); } }
}

async function remainingFlows() {
  await startBackend();
  await check('Legacy health route', async () => expect(await api('/test'), 200));
  await check('Legacy live interview next question', async () => {
    const data = expect(await api('/api/history/next-question', { method: 'POST', body: { patient: { name: 'Synthetic Example', age: 30 }, answers: { chiefComplaint: 'Mild cough for two days' }, questionCount: 1 } }), 200);
    assert.ok(data.question); assert.ok(['text', 'mcq'].includes(data.type));
  });
  await check('Legacy summary rejects missing history', async () => expect(await api('/api/history/generate-summary', { method: 'POST', body: { history: [] } }), 400));
  await check('Legacy live interview summary', async () => {
    const data = expect(await api('/api/history/generate-summary', { method: 'POST', body: { patient: { name: 'Synthetic Example', age: 30 }, history: [{ question: 'What symptoms do you have?', answer: 'Mild cough for two days. Synthetic test only.' }] } }), 200);
    assert.ok(data.summary && typeof data.summary === 'object');
  });
  await check('Text document analysis rejects empty text', async () => expect(await api('/api/documents/analyze', { method: 'POST', body: {} }), 400));
  await check('Live text document analysis', async () => {
    const data = expect(await api('/api/documents/analyze', { method: 'POST', body: { text: 'SYNTHETIC TEST DOCUMENT. Patient: Synthetic Example. Age: 30. Symptoms: mild cough. No medications reported.' } }), 200);
    assert.ok(data.data && typeof data.data === 'object');
  });
  await check('Legacy patient creation', async () => {
    const name = `${runId}-legacy-patient`; owned.patientNames.push(name); save();
    const data = expect(await api('/api/patients', { method: 'POST', body: { name, age: 30, gender: 'Other', language: 'English' } }), 200);
    assert.ok(data.patient?.id); owned.patients.push(data.patient.id); save();
  });
  await check('Demo role login validation', async () => expect(await api('/api/auth/role-login', { method: 'POST', body: { role: 'unsupported', demo: true } }), 400));
  await check('Demo admin session creation (read-only check)', async () => {
    const r = await api('/api/auth/role-login', { method: 'POST', body: { role: 'admin', demo: true } }); expect(r, 200);
    assert.equal(expect(await api('/api/auth/session', { cookie: r.cookie }), 200).session.role, 'admin');
  });
  await check('Anonymous demo reset rejected', async () => expect(await api('/api/demo/reset', { method: 'POST' }), 403));
  await check('Anonymous demo seed rejected', async () => expect(await api('/api/admin/demo-queue-seed', { method: 'POST' }), 401));
  await check('Oversized speech recording rejected', async () => expect(await api('/api/sarvam/stt', { method: 'POST', body: multipart('audio', Buffer.alloc(5 * 1024 * 1024 + 1), 'audio/webm', 'synthetic-large.webm') }), 413));
  await check('Unsupported speech format rejected', async () => expect(await api('/api/sarvam/stt', { method: 'POST', body: multipart('audio', Buffer.from('synthetic'), 'text/plain', 'synthetic.txt') }), 400));
}

async function main() {
  await startBackend();
  await check('Backend health', async () => expect(await api('/'), 200));
  await check('Anonymous session rejected', async () => expect(await api('/api/auth/session'), 401));
  await check('Anonymous assessment creation rejected', async () => expect(await api('/api/assessments', { method: 'POST', body: {} }), 401));
  await check('Anonymous staff dashboard rejected', async () => expect(await api('/api/staff/dashboard'), 403));
  await check('Anonymous admin overview rejected', async () => expect(await api('/api/admin/overview'), 401));
  await check('Malformed cookie handled as unauthenticated', async () => expect(await api('/api/auth/session', { cookie: 'medx_session=%ZZ' }), [400, 401]));
  await check('Disallowed CORS origin rejected', async () => { const r = await api('/', { headers: { Origin: 'https://untrusted.example' } }); assert.ok(r.status >= 400); });
  await check('Invalid OTP phone rejected', async () => expect(await api('/api/auth/send-otp', { method: 'POST', body: { mobile: '123' } }), 400));
  const otp = expect(await api('/api/auth/send-otp', { method: 'POST', body: { mobile: '9000000000' } }), 200);
  await check('Incorrect OTP rejected', async () => expect(await api('/api/auth/verify-otp', { method: 'POST', body: { sessionId: otp.sessionId, otp: '000000' } }), 400));
  await check('Prototype OTP accepted', async () => expect(await api('/api/auth/verify-otp', { method: 'POST', body: { sessionId: otp.sessionId, otp: '123456' } }), 200));
  await check('OTP replay rejected', async () => expect(await api('/api/auth/verify-otp', { method: 'POST', body: { sessionId: otp.sessionId, otp: '123456' } }), 400));

  print('PHASE: isolated database fixtures');
  await query(db.from('hospitals').insert({ id: owned.hospital, name: runId, address: 'Synthetic integration test hospital' }));
  await query(db.from('doctors').insert(owned.doctors.map((id, i) => ({ id, hospital_id: owned.hospital, name: `${runId}-doctor-${i}`, department: 'General Medicine', specialization: 'Synthetic test fixture', is_active: true }))));
  await query(db.from('doctor_queues').insert(owned.doctors.map(id => ({ doctor_id: id, current_token: 0, queue_status: 'active' }))));
  const password = randomBytes(24).toString('hex'); secrets.push(password);
  const hash = await bcrypt.hash(password, 10);
  await query(db.from('staff_users').insert(owned.staff.map((id, i) => ({ id, login_id: `${runId}-staff-${i}`, password_hash: hash, role: 'staff', doctor_id: owned.doctors[i], hospital_id: owned.hospital, is_active: true }))));
  await query(db.from('admin_users').insert({ id: owned.admin, login_id: `${runId}-admin`, password_hash: hash, role: 'admin', is_active: true }));
  record('Create isolated hospital, doctors, queues, staff and admin fixtures', 'pass');
  const staffLogin = await api('/api/auth/staff-login', { method: 'POST', body: { loginId: `${runId}-staff-0`, password } }); expect(staffLogin, 200); const staff = staffLogin.cookie;
  const staffOtherLogin = await api('/api/auth/staff-login', { method: 'POST', body: { loginId: `${runId}-staff-1`, password } }); expect(staffOtherLogin, 200); const otherStaff = staffOtherLogin.cookie;
  const adminLogin = await api('/api/auth/admin-login', { method: 'POST', body: { loginId: `${runId}-admin`, password } }); expect(adminLogin, 200); const admin = adminLogin.cookie;
  record('Staff and admin credential login', 'pass');
  await check('Incorrect staff password rejected', async () => expect(await api('/api/auth/staff-login', { method: 'POST', body: { loginId: `${runId}-staff-0`, password: 'wrong' } }), 401));
  await check('Incorrect admin password rejected', async () => expect(await api('/api/auth/admin-login', { method: 'POST', body: { loginId: `${runId}-admin`, password: 'wrong' } }), 401));
  const patients = [];
  for (let i = 0; i < 2; i++) {
    const name = `${runId}-patient-${i}`; owned.patientNames.push(name); save();
    const response = await api('/api/auth/register', { method: 'POST', body: { name, abhaId: `${runId}-${i}`, mobileVerified: true, gender: 'Other', language: 'English' } });
    expect(response, 201); const id = response.data.patientId; assert.ok(id); owned.patients.push(id); patients.push({ id, cookie: response.cookie }); save();
    record(i === 0 ? 'Patient registration after prototype OTP' : 'Registration requires server-side OTP proof', i === 0 ? 'pass' : 'fail', i === 0 ? '' : 'HTTP 201 accepted mobileVerified:true without an OTP session for this profile.');
  }
  const [p, other] = patients;
  await check('Patient session restoration', async () => assert.equal(expect(await api('/api/auth/session', { cookie: p.cookie }), 200).session.patientId, p.id));
  await check('Wrong patient password rejected', async () => expect(await api('/api/auth/login', { method: 'POST', body: { identityType: 'abha', identity: `${runId}-0`, password: 'wrong-password' } }), 401));
  await check('Patient cannot read admin overview', async () => expect(await api('/api/admin/overview', { cookie: p.cookie }), 403));
  await check('Patient cannot read staff dashboard', async () => expect(await api('/api/staff/dashboard', { cookie: p.cookie }), 403));
  for (const endpoint of ['overview', 'doctors', 'hospitals', 'queues', 'patients']) await check(`Admin ${endpoint}`, async () => expect(await api(`/api/admin/${endpoint}`, { cookie: admin }), 200));
  await check('Admin can disable and restore only the test doctor', async () => {
    expect(await api(`/api/admin/doctors/${owned.doctors[1]}`, { method: 'PATCH', cookie: admin, body: { isActive: false } }), 200);
    assert.equal((await query(db.from('doctors').select('is_active').eq('id', owned.doctors[1]).single())).is_active, false);
    expect(await api(`/api/admin/doctors/${owned.doctors[1]}`, { method: 'PATCH', cookie: admin, body: { isActive: true } }), 200);
  });
  await check('Hospital and doctor discovery', async () => {
    assert.ok(expect(await api('/api/hospitals'), 200).hospitals.some(h => h.id === owned.hospital));
    assert.equal(expect(await api(`/api/hospitals/${owned.hospital}/doctors`), 200).doctors.length, 2);
  });
  await check('Assessment severity validation', async () => expect(await api('/api/assessments', { method: 'POST', cookie: p.cookie, body: { patientId: p.id, severity: 11 } }), 400));
  await check('Cannot create assessment for another patient', async () => expect(await api('/api/assessments', { method: 'POST', cookie: p.cookie, body: { patientId: other.id } }), 403));
  const createAssessment = async patient => {
    const data = expect(await api('/api/assessments', { method: 'POST', cookie: patient.cookie, body: { patientId: patient.id, bodySystem: 'respiratory', severity: 3, duration: 'two days', progression: 'stable' } }), 201);
    owned.assessments.push(data.assessment.id); save(); return data.assessment.id;
  };
  const assessment = await createAssessment(p); const otherAssessment = await createAssessment(other);
  record('Create patient assessments', 'pass');
  await check('Update assessment', async () => assert.equal(expect(await api(`/api/assessments/${assessment}`, { method: 'PATCH', cookie: p.cookie, body: { severity: 4 } }), 200).assessment.severity, 4));
  await check('Cross-patient assessment update rejected', async () => expect(await api(`/api/assessments/${assessment}`, { method: 'PATCH', cookie: other.cookie, body: { severity: 8 } }), 403));
  await check('Malformed assessment ID returns client error', async () => expect(await api('/api/assessments/not-a-uuid', { method: 'PATCH', cookie: p.cookie, body: { severity: 3 } }), [400, 404]));
  const symptom = `${runId}-cough`; owned.symptomNames.push(symptom); save();
  await check('Save and replace symptoms without duplicates', async () => {
    const route = `/api/assessments/${assessment}/symptoms`;
    expect(await api(route, { method: 'PUT', cookie: p.cookie, body: { symptomIds: [symptom, symptom] } }), 200);
    expect(await api(route, { method: 'PUT', cookie: p.cookie, body: { symptomIds: [symptom] } }), 200);
    assert.equal((await query(db.from('assessment_symptoms').select('symptom_id').eq('assessment_id', assessment))).length, 1);
  });
  const history = { medicalConditionsHas: 'no', medicalConditionsText: '', medicationsHas: 'no', medicationsText: '', allergiesHas: 'no', allergiesText: '', previousSimilar: 'no', recentInjuryHas: 'no', recentInjuryText: '', additionalInformation: 'Synthetic integration test only.' };
  await check('Clinical history create and update', async () => {
    const route = `/api/assessments/${assessment}/clinical-history`;
    expect(await api(route, { method: 'PUT', cookie: p.cookie, body: history }), 200);
    expect(await api(route, { method: 'PUT', cookie: p.cookie, body: { ...history, additionalInformation: 'Updated synthetic history.' } }), 200);
    const rows = await query(db.from('clinical_history').select('additional_remarks').eq('assessment_id', assessment));
    assert.equal(rows.length, 1); assert.equal(rows[0].additional_remarks, 'Updated synthetic history.');
  });
  await check('Clinical history rejects invalid answer types', async () => expect(await api(`/api/assessments/${assessment}/clinical-history`, { method: 'PUT', cookie: p.cookie, body: { ...history, allergiesText: {} } }), 400));

  print('PHASE: live document, AI, translation and speech providers');
  const pdf = makePdf();
  await check('PDF text extraction', async () => assert.match(expect(await api('/api/documents/extract', { method: 'POST', body: multipart('pdf', pdf, 'application/pdf', 'synthetic.pdf') }), 200).text, /SYNTHETIC TEST/));
  await check('PDF page counting', async () => assert.equal(expect(await api('/api/documents/pdf-pages', { method: 'POST', body: multipart('pdf', pdf, 'application/pdf', 'synthetic.pdf') }), 200).pages, 1));
  await check('Unsupported upload rejected', async () => expect(await api('/api/documents/extract', { method: 'POST', body: multipart('pdf', Buffer.from('test'), 'text/plain', 'test.txt') }), 400));
  await check('Oversized PDF rejected', async () => expect(await api('/api/documents/extract', { method: 'POST', body: multipart('pdf', Buffer.alloc(10 * 1024 * 1024 + 1), 'application/pdf', 'too-large.pdf') }), 413));
  await check('Missing PDF rejected', async () => expect(await api('/api/documents/extract', { method: 'POST', body: new FormData() }), 400));
  let extracted = null;
  await check('PDF analysis through live Groq', async () => { extracted = expect(await api('/api/documents/analyze-pdf', { method: 'POST', body: multipart('pdf', pdf, 'application/pdf', 'synthetic.pdf') }), 200); assert.ok(extracted.data); });
  const { createCanvas } = require('@napi-rs/canvas');
  const canvas = createCanvas(1200, 240); const ctx = canvas.getContext('2d'); ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, 1200, 240); ctx.fillStyle = '#000000'; ctx.font = '28px Arial';
  ctx.fillText('SYNTHETIC TEST DOCUMENT', 30, 60); ctx.fillText('Patient: Synthetic Example. Age: 30.', 30, 115); ctx.fillText('Reported symptom: mild cough for two days.', 30, 170);
  const png = canvas.toBuffer('image/png');
  await check('Local image OCR', async () => assert.match(expect(await api('/api/documents/ocr-local', { method: 'POST', body: multipart('image', png, 'image/png', 'synthetic.png') }), 200).text, /SYNTHETIC/i));
  await check('Image OCR plus live AI analysis', async () => { const data = expect(await api('/api/documents/ocr-analyze', { method: 'POST', body: multipart('image', png, 'image/png', 'synthetic.png') }), 200); assert.ok(data.data); });
  await check('Google Cloud Vision OCR', async () => assert.match(expect(await api('/api/documents/ocr', { method: 'POST', body: multipart('image', png, 'image/png', 'synthetic.png') }), 200).text, /SYNTHETIC/i));
  const documentPayload = { fileName: `${runId}.pdf`, fileType: 'application/pdf', fileSize: pdf.length, extractedText: extracted?.extractedText || 'SYNTHETIC TEST. Mild cough for two days.', extractionMethod: 'pdf-text', findings: extracted?.data || { symptoms: ['Mild cough'] }, originalFileBase64: pdf.toString('base64') };
  let documentId;
  await check('Persist original document, findings and idempotent retry', async () => {
    const route = `/api/assessments/${assessment}/documents`;
    const saved = expect(await api(route, { method: 'POST', cookie: p.cookie, body: documentPayload }), 201);
    documentId = saved.document.id; owned.storagePaths.push(saved.storagePath); save();
    assert.equal(expect(await api(route, { method: 'POST', cookie: p.cookie, body: documentPayload }), 200).document.id, documentId);
  });
  await check('Cross-patient document persistence rejected', async () => expect(await api(`/api/assessments/${assessment}/documents`, { method: 'POST', cookie: other.cookie, body: documentPayload }), 403));
  let generated;
  const intake = { patient: { name: 'Synthetic Example', age: 30, language: 'English' }, bodySystem: 'Respiratory', symptoms: ['Mild cough'], severity: 3, duration: 'Two days', progression: 'Stable', medicalConditions: 'None reported', medications: 'None reported', allergies: 'None reported', previousSimilarSymptoms: 'No', recentInjuryOrSurgery: 'No', additionalInformation: 'Synthetic test data only.', documents: [] };
  await check('AI intake rejects empty input', async () => expect(await api('/api/history/analyze-intake', { method: 'POST', body: {} }), 400));
  await check('Live bilingual AI intake generation', async () => { generated = expect(await api('/api/history/analyze-intake', { method: 'POST', cookie: p.cookie, body: intake, timeout: 150000 }), 200).summary; assert.ok(generated?.bilingual_summary?.english); assert.ok(generated?.bilingual_summary?.hindi); });
  // Independent persistence can still be checked if a provider is unavailable.
  const english = generated?.bilingual_summary?.english || { chiefComplaint: 'Synthetic test: mild cough', symptoms: ['Mild cough'], duration: 'Two days' };
  const hindi = generated?.bilingual_summary?.hindi || { chiefComplaint: 'कृत्रिम परीक्षण: हल्की खांसी', symptoms: ['हल्की खांसी'], duration: 'दो दिन' };
  await check(`Persist bilingual clinical summary${generated ? '' : ' (synthetic fallback fixture)'}`, async () => {
    expect(await api(`/api/assessments/${assessment}/clinical-summary`, { method: 'PUT', cookie: p.cookie, body: { englishSummary: english, hindiSummary: hindi } }), [200, 201]);
    const rows = await query(db.from('clinical_summaries').select('english_summary').eq('assessment_id', assessment)); assert.equal(rows.length, 1); assert.deepEqual(rows[0].english_summary, english);
  });
  await check('Read saved English and Hindi summaries', async () => { for (const languageCode of ['en-IN', 'hi-IN']) expect(await api(`/api/assessments/${assessment}/clinical-summary/translation?languageCode=${languageCode}`, { cookie: p.cookie }), 200); });
  await check('Live Bengali summary translation', async () => { const data = expect(await api(`/api/assessments/${assessment}/clinical-summary/translation?languageCode=bn-IN`, { cookie: p.cookie, timeout: 150000 }), 200); assert.deepEqual(Object.keys(data.summary).sort(), Object.keys(english).sort()); assert.match(JSON.stringify(data.summary), /[\u0980-\u09ff]/); });
  await check('History question limit', async () => assert.equal(expect(await api('/api/history/next-question', { method: 'POST', body: { questionCount: 8 } }), 200).completed, true));
  let speech;
  await check('Live text-to-speech', async () => { const data = expect(await api('/api/sarvam/tts', { method: 'POST', cookie: p.cookie, body: { text: 'This is a synthetic integration test. I have a mild cough.', languageCode: 'en-IN' } }), 200); speech = Buffer.from(data.audioBase64, 'base64'); assert.ok(speech.length > 100); });
  if (speech) await check('Live speech-to-text round trip', async () => { const body = multipart('audio', speech, 'audio/mpeg', 'synthetic.mp3'); body.append('language', 'English'); const data = expect(await api('/api/sarvam/stt', { method: 'POST', cookie: p.cookie, body }), 200); assert.match(data.transcript, /cough/i); });
  else record('Live speech-to-text round trip', 'blocked', 'Text-to-speech did not provide synthetic speech audio.');
  await check('Missing speech input rejected', async () => expect(await api('/api/sarvam/stt', { method: 'POST', body: new FormData() }), 400));
  await check('Unsupported TTS language rejected', async () => expect(await api('/api/sarvam/tts', { method: 'POST', cookie: p.cookie, body: { text: 'Test', languageCode: 'xx-XX' } }), 400));

  print('PHASE: queue and physician-review lifecycle');
  const tokenPayload = { patientId: p.id, assessmentId: assessment, hospitalId: owned.hospital, doctorId: owned.doctors[0] };
  let token;
  await check('Allocate alphanumeric queue token', async () => { token = expect(await api('/api/tokens', { method: 'POST', cookie: p.cookie, body: tokenPayload }), 201).token; assert.match(token.displayToken, /^G\d+$/); });
  if (!token?.id) { record('Queue and review dependent tests', 'blocked', 'Token allocation failed.'); return; }
  await check('Duplicate active token rejected', async () => expect(await api('/api/tokens', { method: 'POST', cookie: p.cookie, body: tokenPayload }), 409));
  await check('Patient reads active token', async () => assert.equal(expect(await api(`/api/patients/${p.id}/active-token`, { cookie: p.cookie }), 200).token.id, token.id));
  await check('Other patient cannot read token', async () => expect(await api(`/api/tokens/${token.id}`, { cookie: other.cookie }), 403));
  await check('Other doctor cannot read token', async () => expect(await api(`/api/tokens/${token.id}`, { cookie: otherStaff }), 403));
  await check('Public QR queue exposes no clinical or patient fields', async () => {
    const data = expect(await api(`/api/public/queue-status/${token.id}`), 200).queue;
    assert.ok(data.displayToken); for (const field of ['patientId', 'patient_id', 'patientName', 'assessmentId', 'clinicalSummary']) assert.equal(field in data, false);
  });
  await check('Staff dashboard and hospital queues', async () => { expect(await api('/api/staff/dashboard', { cookie: staff }), 200); expect(await api(`/api/staff/hospitals/${owned.hospital}/queues`, { cookie: staff }), 200); });
  await check('Other doctor cannot call queue', async () => expect(await api(`/api/queues/${owned.doctors[0]}/call-next`, { method: 'POST', cookie: otherStaff }), 403));
  await check('Cannot start waiting token', async () => expect(await api(`/api/staff/tokens/${token.id}/start`, { method: 'POST', cookie: staff }), 409));
  await check('Call next patient', async () => assert.equal(expect(await api(`/api/queues/${owned.doctors[0]}/call-next`, { method: 'POST', cookie: staff }), 200).token.id, token.id));
  await check('Start consultation', async () => assert.equal(expect(await api(`/api/staff/tokens/${token.id}/start`, { method: 'POST', cookie: staff }), 200).token.status, 'in_consultation'));
  await check('Doctor reads persisted assessment and documents', async () => {
    const data = expect(await api(`/api/staff/tokens/${token.id}/assessment`, { cookie: staff }), 200);
    assert.equal(data.assessment.id, assessment); assert.equal(data.clinicalHistory.additional_remarks, 'Updated synthetic history.'); if (documentId) assert.ok(data.documents.some(d => d.id === documentId));
  });
  if (documentId) {
    await check('Doctor downloads byte-identical original document', async () => { const r = await api(`/api/staff/tokens/${token.id}/documents/${documentId}/view`, { cookie: staff }); expect(r, 200); assert.ok(r.bytes.equals(pdf)); });
    await check('Other doctor cannot download document', async () => expect(await api(`/api/staff/tokens/${token.id}/documents/${documentId}/view`, { cookie: otherStaff }), 403));
  }
  const reviewRoute = `/api/staff/tokens/${token.id}/review`;
  await check('Save physician review draft', async () => assert.equal(expect(await api(reviewRoute, { method: 'PUT', cookie: staff, body: { reviewedSummary: english } }), 200).review.status, 'draft'));
  await check('Patient sees draft status without unpublished content', async () => { const data = expect(await api(`/api/patient/assessments/${assessment}/clinical-review`, { cookie: p.cookie }), 200).review; assert.equal(data.status, 'draft'); assert.equal(data.reviewedSummary, undefined); });
  await check('Other doctor cannot edit review', async () => expect(await api(reviewRoute, { method: 'PUT', cookie: otherStaff, body: { reviewedSummary: english } }), 403));
  await check('Finalize review and complete consultation', async () => { const data = expect(await api(reviewRoute + '/finalize', { method: 'POST', cookie: staff }), 200); assert.equal(data.review.status, 'finalized'); assert.equal(data.token.status, 'completed'); });
  await check('Finalized review is read-only', async () => expect(await api(reviewRoute, { method: 'PUT', cookie: staff, body: { reviewedSummary: { chiefComplaint: 'Should be rejected' } } }), 409));
  await check('Repeated finalization rejected', async () => expect(await api(reviewRoute + '/finalize', { method: 'POST', cookie: staff }), 409));
  await check('Patient reads finalized latest review', async () => { const data = expect(await api('/api/patient/clinical-review', { cookie: p.cookie }), 200).review; assert.equal(data.status, 'finalized'); assert.deepEqual(data.reviewedSummary, english); });
  await check('Other patient cannot read finalized review', async () => expect(await api(`/api/patient/assessments/${assessment}/clinical-review`, { cookie: other.cookie }), 403));
  await check('Completed token no longer active', async () => assert.equal(expect(await api(`/api/patients/${p.id}/active-token`, { cookie: p.cookie }), 200).token, null));
  await check('Finalized review translation', async () => { const data = expect(await api(`/api/patient/assessments/${assessment}/clinical-review/translation?languageCode=hi-IN`, { cookie: p.cookie, timeout: 150000 }), 200); assert.match(JSON.stringify(data.summary), /[\u0900-\u097f]/); });
  let cancelToken;
  await check('Second patient token allocation', async () => { cancelToken = expect(await api('/api/tokens', { method: 'POST', cookie: other.cookie, body: { patientId: other.id, assessmentId: otherAssessment, hospitalId: owned.hospital, doctorId: owned.doctors[0] } }), 201).token; });
  if (cancelToken) {
    await check('Cross-patient cancellation rejected', async () => expect(await api(`/api/tokens/${cancelToken.id}/cancel`, { method: 'POST', cookie: p.cookie, body: { patientId: p.id } }), 400));
    await check('Patient cancels waiting token', async () => { expect(await api(`/api/tokens/${cancelToken.id}/cancel`, { method: 'POST', cookie: other.cookie, body: { patientId: other.id } }), 200); assert.equal(expect(await api(`/api/tokens/${cancelToken.id}`, { cookie: other.cookie }), 200).token.status, 'cancelled'); });
  }
  await check('Logout expires browser cookie', async () => { const r = await api('/api/auth/logout', { method: 'POST', cookie: p.cookie }); expect(r, 200); assert.equal(r.cookie, 'medx_session='); expect(await api('/api/auth/session', { cookie: r.cookie }), 401); });
}

(async () => {
  try { await (process.argv.includes('--remaining') ? remainingFlows() : main()); } catch (e) { record('Flow setup or execution', 'fail', e.message); }
  finally {
    if (server) { server.closeAllConnections(); await new Promise(r => server.close(r)); }
    await cleanup();
    fs.writeFileSync(path.join(reportDir, 'backend.log'), clean(logs));
    const totals = results.reduce((out, r) => ({ ...out, [r.status]: (out[r.status] || 0) + 1 }), {});
    const lines = [`# Live backend integration results`, '', `Run: ${runId}`, '', `Counts: ${JSON.stringify(totals)}`, '', 'Only synthetic fixtures were used for mutations. Provider requests contained synthetic data.', '', '| Check | Result | Detail |', '| --- | --- | --- |', ...results.map(r => `| ${r.name} | ${r.status.toUpperCase()} | ${r.detail.replace(/\|/g, '/').replace(/\r?\n/g, ' ')} |`)];
    fs.writeFileSync(path.join(reportDir, 'report.md'), lines.join('\n'));
    print('RESULTS', JSON.stringify(totals)); print('REPORT', path.join(reportDir, 'report.md'));
    process.exitCode = results.some(r => r.status === 'fail') ? 1 : 0;
  }
})();
