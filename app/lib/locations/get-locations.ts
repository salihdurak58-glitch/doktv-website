import { createSupabaseServerClient } from "@/app/lib/supabase/server";
import {
  locations as fallbackLocations,
  type Location,
} from "@/app/standorte/locations";

type LocationRow = {
  id: string | number;
  name: string;
  type: Location["type"];
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

async function getHiddenFallbackIds(): Promise<string[]> {
  try {
    const supabase = await createSupabaseServerClient();

    const { data, error } = await supabase
      .from("site_content")
      .select("value")
      .eq("key", "hidden_fallback_locations")
      .maybeSingle();

    if (error || !data?.value) return [];

    const parsed = JSON.parse(String(data.value));
    return Array.isArray(parsed) ? parsed.filter(Boolean).map(String) : [];
  } catch {
    return [];
  }
}

async function getVisibleFallbackLocations() {
  const hiddenIds = await getHiddenFallbackIds();

  return fallbackLocations.filter((location) => !hiddenIds.includes(location.id));
}

export async function getPublicLocations(): Promise<Location[]> {
  try {
    const supabase = await createSupabaseServerClient();

    const { data, error } = await supabase
      .from("locations")
      .select("*")
      .eq("is_active", true)
      .order("sort_order", { ascending: true })
      .order("name", { ascending: true });

    if (error) {
      return getVisibleFallbackLocations();
    }

    const dbLocations = ((data || []) as LocationRow[]).map(toLocation);
    const visibleFallbackLocations = await getVisibleFallbackLocations();

    return [...dbLocations, ...visibleFallbackLocations].sort(
      (firstLocation, secondLocation) =>
        (firstLocation.sortOrder ?? 100) - (secondLocation.sortOrder ?? 100)
    );
  } catch {
    return getVisibleFallbackLocations();
  }
}
