-- Run once in the Supabase SQL Editor. This adds physician-review records
-- without changing existing assessments, summaries, queues, or tokens.
create table if not exists public.clinical_reviews (
  id uuid primary key default gen_random_uuid(),
  assessment_id uuid not null references public.assessments(id) on delete restrict,
  doctor_id uuid not null references public.doctors(id) on delete restrict,
  original_summary_snapshot jsonb not null,
  reviewed_summary jsonb not null,
  status text not null default 'draft' check (status in ('draft', 'finalized')),
  finalized_at timestamptz null,
  finalized_by uuid null references public.doctors(id) on delete restrict,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (assessment_id)
);

create index if not exists clinical_reviews_doctor_id_idx on public.clinical_reviews(doctor_id);
