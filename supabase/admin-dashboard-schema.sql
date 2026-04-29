create table if not exists public.site_content (
  key text primary key,
  value text not null default '',
  updated_at timestamptz not null default now()
);

create table if not exists public.locations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  type text not null check (type in ('Apotheke', 'Arztpraxis')),
  district text not null,
  address text not null,
  monthly_price integer not null default 0,
  yearly_price integer not null default 0,
  image text,
  description text not null default '',
  lat double precision not null default 52.52,
  lng double precision not null default 13.405,
  is_active boolean not null default true,
  sort_order integer not null default 100,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.site_content enable row level security;
alter table public.locations enable row level security;

drop policy if exists "site_content_public_read" on public.site_content;
create policy "site_content_public_read"
on public.site_content for select
using (true);

drop policy if exists "site_content_authenticated_write" on public.site_content;
create policy "site_content_authenticated_write"
on public.site_content for all
to authenticated
using (true)
with check (true);

drop policy if exists "locations_public_active_read" on public.locations;
create policy "locations_public_active_read"
on public.locations for select
using (is_active = true or auth.role() = 'authenticated');

drop policy if exists "locations_authenticated_write" on public.locations;
create policy "locations_authenticated_write"
on public.locations for all
to authenticated
using (true)
with check (true);

create index if not exists locations_active_sort_idx
on public.locations (is_active, sort_order, name);

insert into public.locations (
  name,
  type,
  district,
  address,
  monthly_price,
  yearly_price,
  image,
  description,
  lat,
  lng,
  is_active,
  sort_order
)
select
  'Apotheke Mitte',
  'Apotheke',
  'Berlin-Mitte',
  'Alexanderplatz 1, 10178 Berlin',
  199,
  1990,
  '/logo.png',
  'Schaufenster-Display mit hoher Sichtbarkeit für Laufkundschaft.',
  52.521918,
  13.413215,
  true,
  10
where not exists (
  select 1 from public.locations
  where name = 'Apotheke Mitte'
  and address = 'Alexanderplatz 1, 10178 Berlin'
);

insert into public.locations (
  name,
  type,
  district,
  address,
  monthly_price,
  yearly_price,
  image,
  description,
  lat,
  lng,
  is_active,
  sort_order
)
select
  'Arztpraxis Charlottenburg',
  'Arztpraxis',
  'Charlottenburg',
  'Kurfürstendamm 50, 10707 Berlin',
  249,
  2490,
  '/logo.png',
  'Wartezimmer-Display für Patienteninformation und Gesundheitswerbung.',
  52.501247,
  13.312419,
  true,
  20
where not exists (
  select 1 from public.locations
  where name = 'Arztpraxis Charlottenburg'
  and address = 'Kurfürstendamm 50, 10707 Berlin'
);

insert into public.locations (
  name,
  type,
  district,
  address,
  monthly_price,
  yearly_price,
  image,
  description,
  lat,
  lng,
  is_active,
  sort_order
)
select
  'Apotheke Neukölln',
  'Apotheke',
  'Neukölln',
  'Karl-Marx-Straße 80, 12043 Berlin',
  179,
  1790,
  '/logo.png',
  'Digitales Schaufenster in gut erreichbarer Lage.',
  52.481126,
  13.435889,
  true,
  30
where not exists (
  select 1 from public.locations
  where name = 'Apotheke Neukölln'
  and address = 'Karl-Marx-Straße 80, 12043 Berlin'
);

insert into public.site_content (key, value, updated_at)
values (
  'hidden_fallback_locations',
  '["fallback-1","fallback-2","fallback-3"]',
  now()
)
on conflict (key) do update
set value = excluded.value,
    updated_at = excluded.updated_at;
