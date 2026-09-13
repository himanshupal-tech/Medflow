# Live backend flow tests

From the `backend` directory, run:

```powershell
node tests/live-flows.cjs --live
node tests/live-flows.cjs --live --remaining
```

The suite starts the actual Express server on port 15009 and uses the Supabase,
AI, OCR, and speech credentials in `backend/.env`. It makes live provider calls.
It creates a uniquely named synthetic hospital, two doctors, temporary staff and
admin accounts, and two patients. Queue actions operate only on those fixtures.
The fixture IDs are recorded before dependent operations. Cleanup removes only
the tracked fixtures and their associated storage files, then checks for remaining
patient, assessment, doctor, hospital, staff, and admin records.

Results and sanitized backend logs are written under `backend/test-results/`.
An exit code of 1 indicates a failed assertion, provider failure, or setup failure;
consult the report to distinguish them. Provider-dependent checks can fail because
of billing, permissions, quotas, or service availability.

Coverage includes prototype OTP, registration, sessions, staff/admin login, role
and patient ownership, assessment/history/summary persistence, PDF extraction,
local and Google OCR, document storage/download, AI intake, translation, speech,
queue allocation/cancellation, physician review, and finalization.

The second command covers legacy interview and text-analysis flows, legacy patient
creation, demo role login, and additional speech-upload limits.

The successful shared demo reset and demo queue seed paths are intentionally not
invoked: they can alter existing shared demo data. Their anonymous rejection paths
are covered by the second command.
This is a functional integration suite, not a load or exhaustive concurrency test.
