import { createSupabaseServerClient } from "@/app/lib/supabase/server";
import { canonicalUrl } from "@/app/lib/seo/site";
import type { MetadataRoute } from "next";

const staticPublicRoutes = [
  "/", "/apotheken",
  "/apotheken-notdienst-anzeiger", "/wartezimmer-tv-praxen", "/arztpraxen",
  "/hersteller-werbung", "/hersteller", "/werbung-apotheke-display",
  "/referenzen", "/preise", "/ueber-uns", "/kontakt", "/standorte",
  "/blog", "/blog/digital-signage-apotheke", "/blog/schaufenster-display-apotheke",
  "/blog/apotheken-marketing-berlin", "/digital-signage-berlin",
  "/apotheke-werbung-berlin", "/arztpraxis-werbung-berlin",
  "/impressum", "/datenschutz",
] as const;

const redirectedRoutes = new Set(["/schaufenster-display-apotheken"]);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("page_seo")
    .select("route, updated_at, noindex");

  if (error) {
    console.error("Sitemap Fehler:", error.message);
    return staticPublicRoutes.map((route) => ({ url: canonicalUrl(route) }));
  }

  const excludedRoutes = new Set(data?.filter((page) => page.noindex).map((page) => page.route) || []);
  const entries = new Map<string, MetadataRoute.Sitemap[number]>();

  for (const route of staticPublicRoutes) {
    if (!excludedRoutes.has(route)) entries.set(canonicalUrl(route), { url: canonicalUrl(route) });
  }

  for (const page of data || []) {
    if (page.noindex || redirectedRoutes.has(page.route)) continue;
    const url = canonicalUrl(page.route);
    entries.set(url, { url, lastModified: page.updated_at || undefined });
  }

  return [...entries.values()];
}
