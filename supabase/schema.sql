create type public.user_role as enum ('admin', 'member');
create type public.report_status as enum ('draft', 'submitted', 'reviewed');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  department text,
  role public.user_role not null default 'member',
  created_at timestamptz not null default now()
);

create table public.weekly_reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  week_start date not null,
  achievements text not null,
  plans text not null,
  blockers text,
  status public.report_status not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, week_start)
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger set_weekly_reports_updated_at
before update on public.weekly_reports
for each row execute function public.set_updated_at();

alter table public.profiles enable row level security;
alter table public.weekly_reports enable row level security;

create policy "Profiles are visible to signed-in users"
on public.profiles
for select
to authenticated
using (true);

create policy "Users can update own profile"
on public.profiles
for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);

create policy "Admins can manage profiles"
on public.profiles
for all
to authenticated
using (
  exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  )
)
with check (
  exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  )
);

create policy "Users can read own reports and admins can read all"
on public.weekly_reports
for select
to authenticated
using (
  user_id = auth.uid()
  or exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  )
);

create policy "Users can write own reports"
on public.weekly_reports
for insert
to authenticated
with check (user_id = auth.uid());

create policy "Users can update own drafts and admins can review"
on public.weekly_reports
for update
to authenticated
using (
  user_id = auth.uid()
  or exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  )
)
with check (
  user_id = auth.uid()
  or exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  )
);

-- 계정 생성 후 Supabase SQL Editor에서 아래 예시처럼 프로필을 연결하세요.
-- insert into public.profiles (id, full_name, department, role)
-- values ('auth-user-uuid', '홍길동', '운영팀', 'admin');
