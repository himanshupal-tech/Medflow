-- MedX realistic fictional demo data
-- Run AFTER alphanumeric_tokens.sql and demo_queue_seed.sql.
-- This file is additive, deterministic, and idempotent. It never deletes,
-- truncates, or changes non-demo records. Documents are intentionally omitted
-- because no safe storage object is created by this database-only seed.

-- Additional fictional hospitals. Existing hospitals are reused untouched.
insert into public.hospitals (name, address)
select v.name, v.address
from (values
  ('MedX Community Hospital', 'Demo Lake Road, Noida'),
  ('MedX Specialty Centre', 'Demo Green Avenue, Faridabad'),
  ('MedX District Hospital', 'Demo Civic Square, Gurugram')
) as v(name, address)
where not exists (select 1 from public.hospitals h where h.name = v.name and h.address = v.address);

-- Each doctor is fictional and is inserted only when the same name is absent
-- at the designated fictional hospital.
insert into public.doctors (hospital_id, name, department, specialization, is_active)
select h.id, v.name, v.department, v.specialization, true
from (values
  ('MedX Community Hospital', 'Dr. Aanya Rao', 'Pediatrics', 'Pediatric Medicine'),
  ('MedX Community Hospital', 'Dr. Kabir Bose', 'ENT', 'Otolaryngology'),
  ('MedX Community Hospital', 'Dr. Meera Das', 'Ophthalmology', 'Ophthalmology'),
  ('MedX Specialty Centre', 'Dr. Ishaan Sen', 'Neurology', 'Neurology'),
  ('MedX Specialty Centre', 'Dr. Naina Kapoor', 'Gynecology', 'Gynecology'),
  ('MedX Specialty Centre', 'Dr. Arjun Malik', 'Pulmonology', 'Pulmonology'),
  ('MedX District Hospital', 'Dr. Riya Nair', 'General Medicine', 'General Physician'),
  ('MedX District Hospital', 'Dr. Vivek Shah', 'Cardiology', 'Cardiology'),
  ('MedX District Hospital', 'Dr. Tara Iyer', 'Dermatology', 'Dermatology'),
  ('MedX District Hospital', 'Dr. Neel Joshi', 'Orthopedics', 'Orthopedic Surgery'),
  ('MedX Community Hospital', 'Dr. Saira Khan', 'General Medicine', 'Internal Medicine'),
  ('MedX Community Hospital', 'Dr. Dev Arora', 'Dentistry', 'General Dentistry'),
  ('MedX Community Hospital', 'Dr. Leena Mathew', 'Physiotherapy', 'Musculoskeletal Rehabilitation'),
  ('MedX Community Hospital', 'Dr. Rohan Pillai', 'Radiology', 'Diagnostic Radiology'),
  ('MedX Community Hospital', 'Dr. Kavya Menon', 'General Surgery', 'General Surgery'),
  ('MedX Specialty Centre', 'Dr. Aditya Kulkarni', 'Gastroenterology', 'Gastroenterology'),
  ('MedX Specialty Centre', 'Dr. Priya Bedi', 'Nephrology', 'Nephrology'),
  ('MedX Specialty Centre', 'Dr. Manav Sethi', 'Urology', 'Urology'),
  ('MedX Specialty Centre', 'Dr. Isha Verma', 'Psychiatry', 'Adult Psychiatry'),
  ('MedX Specialty Centre', 'Dr. Farhan Ali', 'Endocrinology', 'Diabetes and Endocrinology'),
  ('MedX Specialty Centre', 'Dr. Nidhi Chawla', 'Oncology', 'Medical Oncology'),
  ('MedX District Hospital', 'Dr. Aditi Roy', 'Pediatrics', 'Pediatric Medicine'),
  ('MedX District Hospital', 'Dr. Sameer Bhat', 'ENT', 'Otolaryngology'),
  ('MedX District Hospital', 'Dr. Mitali Jain', 'Ophthalmology', 'Ophthalmology'),
  ('MedX District Hospital', 'Dr. Harsh Vora', 'Gynecology', 'Gynecology')
) as v(hospital_name, name, department, specialization)
join public.hospitals h on h.name = v.hospital_name
where not exists (select 1 from public.doctors d where d.hospital_id = h.id and d.name = v.name);

insert into public.doctor_queues (doctor_id, current_token, queue_status)
select d.id, 0, 'active'
from public.doctors d
where d.is_active = true
  and not exists (select 1 from public.doctor_queues q where q.doctor_id = d.id);

-- Structured symptom catalogue, deduplicated by body system + name.
insert into public.symptoms (name, body_system)
select v.name, v.body_system
from (values
  ('fatigue','general'),('fever','general'),('weakness','general'),
  ('cough','lungs'),('shortness of breath','lungs'),('sore throat','lungs'),
  ('chest discomfort','heart'),('palpitations','heart'),('dizziness','heart'),
  ('abdominal discomfort','digestive'),('nausea','digestive'),('vomiting','digestive'),
  ('headache','brain'),('numbness','brain'),('joint pain','muscles'),('back pain','muscles'),
  ('muscle pain','muscles'),('rash','skin'),('itching','skin')
) as v(name, body_system)
where not exists (select 1 from public.symptoms s where lower(s.name) = lower(v.name) and s.body_system = v.body_system);

-- 24 deterministic, clearly fictional demo patients. The stable user_id and
-- "MedX Synthetic Patient" marker make repeat runs safe without touching the
-- reusable MedX demo patient or any pre-existing patient record.
with demo_people(n, name, age, gender, language) as (
  values
  (1,'MedX Synthetic Patient Aria One',29,'Female','English'),(2,'MedX Synthetic Patient Rohan Two',42,'Male','Hindi'),
  (3,'MedX Synthetic Patient Kavya Three',36,'Female','English'),(4,'MedX Synthetic Patient Dev Four',51,'Male','Hindi'),
  (5,'MedX Synthetic Patient Isha Five',24,'Female','English'),(6,'MedX Synthetic Patient Aman Six',47,'Male','Hindi'),
  (7,'MedX Synthetic Patient Nila Seven',33,'Female','English'),(8,'MedX Synthetic Patient Ritesh Eight',58,'Male','Hindi'),
  (9,'MedX Synthetic Patient Sana Nine',40,'Female','English'),(10,'MedX Synthetic Patient Kunal Ten',31,'Male','Hindi'),
  (11,'MedX Synthetic Patient Piya Eleven',46,'Female','English'),(12,'MedX Synthetic Patient Jay Twelve',38,'Male','Hindi'),
  (13,'MedX Synthetic Patient Mira Thirteen',27,'Female','English'),(14,'MedX Synthetic Patient Om Fourteen',55,'Male','Hindi'),
  (15,'MedX Synthetic Patient Leela Fifteen',44,'Female','English'),(16,'MedX Synthetic Patient Arav Sixteen',35,'Male','Hindi'),
  (17,'MedX Synthetic Patient Tara Seventeen',30,'Female','English'),(18,'MedX Synthetic Patient Vihaan Eighteen',49,'Male','Hindi'),
  (19,'MedX Synthetic Patient Anya Nineteen',41,'Female','English'),(20,'MedX Synthetic Patient Rey Twenty',34,'Male','Hindi'),
  (21,'MedX Synthetic Patient Diya TwentyOne',26,'Female','English'),(22,'MedX Synthetic Patient Sid TwentyTwo',53,'Male','Hindi'),
  (23,'MedX Synthetic Patient Ira TwentyThree',39,'Female','English'),(24,'MedX Synthetic Patient Neil TwentyFour',45,'Male','Hindi')
)
insert into public.patients (user_id, name, age, gender, language)
select (
  substr(md5('medx-demo-patient:' || n::text),1,8) || '-' || substr(md5('medx-demo-patient:' || n::text),9,4) ||
  '-4' || substr(md5('medx-demo-patient:' || n::text),14,3) || '-8' || substr(md5('medx-demo-patient:' || n::text),18,3) || '-' || substr(md5('medx-demo-patient:' || n::text),21,12)
)::uuid, name, age, gender, language
from demo_people
where not exists (select 1 from public.patients p where p.user_id = (
  substr(md5('medx-demo-patient:' || n::text),1,8) || '-' || substr(md5('medx-demo-patient:' || n::text),9,4) || '-4' || substr(md5('medx-demo-patient:' || n::text),14,3) || '-8' || substr(md5('medx-demo-patient:' || n::text),18,3) || '-' || substr(md5('medx-demo-patient:' || n::text),21,12)
)::uuid);

-- One completed assessment per seeded person, spread over the last 24 days.
with seeded_patients as (
  select p.id, p.user_id, row_number() over (order by p.user_id) as n
  from public.patients p where p.name like 'MedX Synthetic Patient %'
)
insert into public.assessments (patient_id, body_system, severity, duration, progression, status, created_at, updated_at)
select id,
  (array['general','lungs','heart','digestive','brain','muscles','skin'])[1 + ((n - 1) % 7)],
  3 + ((n - 1) % 6),
  (array['1_3d','4_7d','1_2w','over_2w'])[1 + ((n - 1) % 4)],
  (array['improving','stable','getting_worse'])[1 + ((n - 1) % 3)],
  'completed', now() - (n || ' days')::interval, now() - (n || ' days')::interval
from seeded_patients
where not exists (select 1 from public.assessments a where a.patient_id = seeded_patients.id and a.status = 'completed');

insert into public.assessment_symptoms (assessment_id, symptom_id)
select a.id, s.id
from public.assessments a
join public.patients p on p.id = a.patient_id and p.name like 'MedX Synthetic Patient %'
join lateral (select id from public.symptoms where body_system = a.body_system order by id limit 2) s on true
where a.status = 'completed'
  and not exists (select 1 from public.assessment_symptoms x where x.assessment_id = a.id and x.symptom_id = s.id);

insert into public.clinical_history (assessment_id, existing_conditions, medications, allergies, previous_similar_symptoms, previous_injury_surgery, additional_remarks)
select a.id, 'No chronic conditions reported', 'No regular medications reported', 'No known allergies reported', 'No previous similar episode reported', 'No previous injury or surgery reported', 'Synthetic MedX demo record for interface testing.'
from public.assessments a join public.patients p on p.id = a.patient_id
where p.name like 'MedX Synthetic Patient %' and a.status = 'completed'
  and not exists (select 1 from public.clinical_history ch where ch.assessment_id = a.id);

insert into public.clinical_summaries (assessment_id, english_summary, hindi_summary)
select a.id,
  jsonb_build_object('chiefComplaint','Synthetic patient-reported symptoms for MedX interface testing.','historyOfPresentingComplaint','Symptoms were reported during a structured intake.','symptoms',jsonb_build_array('Patient-reported symptom'),'severity','Moderate','duration','Recent','progression','Stable','associatedSymptoms',jsonb_build_array(),'pastMedicalHistory',jsonb_build_array('No chronic conditions reported'),'medications',jsonb_build_array('No regular medications reported'),'allergies',jsonb_build_array('No known allergies reported'),'previousSimilarEpisodes','Not reported','relevantDocumentFindings',jsonb_build_array(),'additionalRemarks','Synthetic demo data; clinician review required.','missingInformation',jsonb_build_array()),
  jsonb_build_object('chiefComplaint','MedX इंटरफ़ेस परीक्षण के लिए कृत्रिम रोगी-रिपोर्टेड लक्षण।','historyOfPresentingComplaint','लक्षण संरचित इंटेक के दौरान दर्ज किए गए।','symptoms',jsonb_build_array('रोगी-रिपोर्टेड लक्षण'),'severity','मध्यम','duration','हाल का','progression','स्थिर','associatedSymptoms',jsonb_build_array(),'pastMedicalHistory',jsonb_build_array('कोई पुरानी स्थिति दर्ज नहीं'),'medications',jsonb_build_array('कोई नियमित दवा दर्ज नहीं'),'allergies',jsonb_build_array('कोई ज्ञात एलर्जी दर्ज नहीं'),'previousSimilarEpisodes','दर्ज नहीं','relevantDocumentFindings',jsonb_build_array(),'additionalRemarks','कृत्रिम डेमो डेटा; चिकित्सकीय समीक्षा आवश्यक है।','missingInformation',jsonb_build_array())
from public.assessments a join public.patients p on p.id = a.patient_id
where p.name like 'MedX Synthetic Patient %' and a.status = 'completed'
  and not exists (select 1 from public.clinical_summaries cs where cs.assessment_id = a.id);

-- Populate called/waiting demo queues only where a queue has no active token.
-- The function is idempotent and creates generic identities, no medical content.
select public.seed_demo_queue_data();

-- A small, database-backed operational history for reporting views. These are
-- completed/cancelled only and never affect active waiting counts.
do $$
declare
  d record;
  p public.patients;
  a public.assessments;
  next_number integer;
  prefix text;
  slot integer := 0;
begin
  for d in select id, hospital_id, department from public.doctors where is_active = true order by id limit 8 loop
    slot := slot + 1;
    select * into p from public.patients where name like 'MedX Synthetic Patient %' order by user_id offset (slot - 1) limit 1;
    select * into a from public.assessments where patient_id = p.id and status = 'completed' order by created_at desc limit 1;
    prefix := coalesce(nullif(left(regexp_replace(upper(d.department), '[^A-Z]', '', 'g'),1),''),'M');
    select coalesce(max(token_number), 0) + 1 into next_number from public.tokens where doctor_id = d.id;
    if not exists (select 1 from public.tokens where doctor_id = d.id and patient_id = p.id and assessment_id = a.id and status = 'completed') then
      insert into public.tokens(patient_id, assessment_id, hospital_id, doctor_id, token_prefix, token_number, status, created_at, called_at, completed_at)
      values(p.id, a.id, d.hospital_id, d.id, prefix, next_number, 'completed', now() - (slot || ' days')::interval, now() - (slot || ' days')::interval + interval '10 minutes', now() - (slot || ' days')::interval + interval '25 minutes');
    end if;
    if not exists (select 1 from public.tokens where doctor_id = d.id and patient_id = p.id and assessment_id = a.id and status = 'cancelled') then
      insert into public.tokens(patient_id, assessment_id, hospital_id, doctor_id, token_prefix, token_number, status, created_at)
      values(p.id, a.id, d.hospital_id, d.id, prefix, next_number + 1, 'cancelled', now() - ((slot + 2) || ' days')::interval);
    end if;
  end loop;
end;
$$;
