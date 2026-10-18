import { createSupabaseServerClient } from "@/app/lib/supabase/server";
import { canonicalUrl } from "@/app/lib/seo/site";
import type { MetadataRoute } from "next";

const staticPublicRoutes = [
  "/", "/apotheken", "/apotheken-notdienst-anzeiger", "/wartezimmer-tv-praxen",
  "/arztpraxen", "/hersteller-werbung", "/hersteller", "/werbung-apotheke-display",
  "/referenzen", "/preise", "/ueber-uns", "/kontakt", "/standorte", "/blog",
  "/blog/digital-signage-apotheke", "/blog/schaufenster-display-apotheke",
  "/blog/apotheken-marketing-berlin", "/digital-signage-berlin",
  "/apotheke-werbung-berlin", "/arztpraxis-werbung-berlin", "/impressum", "/datenschutz",
] as const;

// These URLs have permanent redirects and must never be advertised as indexable.
const redirectedRoutes = new Set(["/schaufenster-display-apotheken", "/blog/digital-signage-apotheken"]);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.from("page_seo").select("route, updated_at, noindex, canonical_url");
  if (error) console.error("Sitemap Fehler:", error.message);
  const seoByRoute = new Map(data?.map((page) => [page.route, page]) || []);
  const entries = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const route of staticPublicRoutes) {
    const seo = seoByRoute.get(route);
    if (seo?.noindex || (seo?.canonical_url && canonicalUrl(seo.canonical_url) !== canonicalUrl(route))) continue;
    const url = canonicalUrl(route);
    entries.set(url, { url, lastModified: seo?.updated_at || undefined });
  }
  const { data: posts, error: postsError } = await supabase.from("blog_posts").select("slug, noindex, updated_at");
  if (postsError) {
    console.error("Sitemap Blog Fehler:", postsError.message);
    return [...entries.values()];
  }
  for (const post of posts || []) {
    if (post.noindex || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug)) continue;
    const route = `/blog/${post.slug}`;
    if (redirectedRoutes.has(route) || staticPublicRoutes.some((staticRoute) => staticRoute === route)) continue;
    const url = canonicalUrl(route);
    entries.set(url, { url, lastModified: post.updated_at || undefined });
  }
  return [...entries.values()];
}
