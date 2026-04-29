"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/app/lib/supabase/server";
import { locations as fallbackLocations } from "@/app/standorte/locations";
import type { Location, LocationType } from "@/app/standorte/locations";

type LocationRow = {
  id: string | number;
  name: string;
  type: LocationType;
  district: string;
  address: string;
  monthly_price: number;
  yearly_price: number;
  image: string | null;
  description: string;
  lat: number;
  lng: number;
  is_active: boolean | null;
  sort_order: number | null;
};

async function requireAdmin() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    throw new Error("Nicht eingeloggt.");
  }

  return supabase;
}

function toLocation(row: LocationRow): Location {
  return {
    id: String(row.id),
    name: row.name,
    type: row.type,
    district: row.district,
    address: row.address,
    monthlyPrice: Number(row.monthly_price || 0),
    yearlyPrice: Number(row.yearly_price || 0),
    image: row.image || "/logo.png",
    description: row.description,
    lat: Number(row.lat || 52.52),
    lng: Number(row.lng || 13.405),
    isActive: row.is_active ?? true,
    sortOrder: row.sort_order ?? 100,
  };
}

async function getHiddenFallbackIds(
  supabase: Awaited<ReturnType<typeof requireAdmin>>
) {
  const { data, error } = await supabase
    .from("site_content")
    .select("value")
    .eq("key", "hidden_fallback_locations")
    .maybeSingle();

  if (error || !data?.value) return [];

  try {
    const parsed = JSON.parse(String(data.value));
    return Array.isArray(parsed) ? parsed.filter(Boolean).map(String) : [];
  } catch {
    return [];
  }
}

async function hideFallbackLocation(
  supabase: Awaited<ReturnType<typeof requireAdmin>>,
  id: string
) {
  const hiddenIds = await getHiddenFallbackIds(supabase);
  const nextHiddenIds = Array.from(new Set([...hiddenIds, id]));

  const { error } = await supabase.from("site_content").upsert(
    [
      {
        key: "hidden_fallback_locations",
        value: JSON.stringify(nextHiddenIds),
        updated_at: new Date().toISOString(),
      },
    ],
    { onConflict: "key" }
  );

  if (error) {
    throw new Error(error.message);
  }
}

export async function getAdminLocations() {
  const supabase = await requireAdmin();

  const { data, error } = await supabase
    .from("locations")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  const dbLocations = ((data || []) as LocationRow[]).map(toLocation);
  const hiddenFallbackIds = await getHiddenFallbackIds(supabase);
  const visibleFallbackLocations = fallbackLocations.filter(
    (location) => !hiddenFallbackIds.includes(location.id)
  );

  return [...dbLocations, ...visibleFallbackLocations];
}

export async function saveLocation(formData: FormData) {
  const supabase = await requireAdmin();

  const id = String(formData.get("id") || "");
  const type = String(formData.get("type") || "Apotheke") as LocationType;
  const payload = {
    name: String(formData.get("name") || "").trim(),
    type,
    district: String(formData.get("district") || "").trim(),
    address: String(formData.get("address") || "").trim(),
    monthly_price: Number(formData.get("monthlyPrice") || 0),
    yearly_price: Number(formData.get("yearlyPrice") || 0),
    image: String(formData.get("image") || "").trim() || "/logo.png",
    description: String(formData.get("description") || "").trim(),
    lat: Number(formData.get("lat") || 52.52),
    lng: Number(formData.get("lng") || 13.405),
    is_active: formData.get("isActive") === "on",
    sort_order: Number(formData.get("sortOrder") || 100),
  };

  if (!payload.name || !payload.district || !payload.address) {
    throw new Error("Name, Bezirk und Adresse sind Pflichtfelder.");
  }

  const isFallbackLocation = id.startsWith("fallback-");
  const { error } = id && !isFallbackLocation
    ? await supabase.from("locations").update(payload).eq("id", id)
    : await supabase.from("locations").insert([payload]);

  if (error) {
    throw new Error(error.message);
  }

  if (isFallbackLocation) {
    await hideFallbackLocation(supabase, id);
  }

  revalidatePath("/standorte");
  revalidatePath("/admin/dashboard");
}

export async function deleteLocation(id: string) {
  const supabase = await requireAdmin();

  if (id.startsWith("fallback-")) {
    await hideFallbackLocation(supabase, id);
    revalidatePath("/standorte");
    revalidatePath("/admin/dashboard");
    return;
  }

  const { error } = await supabase.from("locations").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/standorte");
  revalidatePath("/admin/dashboard");
}
