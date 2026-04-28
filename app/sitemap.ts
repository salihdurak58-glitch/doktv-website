import { createSupabaseServerClient } from "@/app/lib/supabase/server";

export default async function sitemap() {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("page_seo")
    .select("route, updated_at, noindex");

  if (error) {
    console.error("Sitemap Fehler:", error.message);
    return [];
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://doktv.de";

  return (
    data
      ?.filter((page) => !page.noindex)
      .map((page) => ({
        url: `${baseUrl}${page.route}`,
        lastModified: page.updated_at || new Date().toISOString(),
      })) || []
  );
}