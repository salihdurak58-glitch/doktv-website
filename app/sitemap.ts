import { createSupabaseServerClient } from "@/app/lib/supabase/server";
import { canonicalUrl, SITE_URL } from "@/app/lib/seo/site";

export default async function sitemap() {
  const notdienstPage = {
    url: `${SITE_URL}/apotheken-notdienst-anzeiger`,
    lastModified: new Date().toISOString(),
  };
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("page_seo")
    .select("route, updated_at, noindex");

  if (error) {
    console.error("Sitemap Fehler:", error.message);
    return [notdienstPage];
  }

  const dynamicPages =
    data
      ?.filter((page) => !page.noindex)
      .map((page) => ({
        url: canonicalUrl(page.route),
        lastModified: page.updated_at || new Date().toISOString(),
      })) || [];

  return [
    ...dynamicPages.filter((page) => page.url !== notdienstPage.url),
    notdienstPage,
  ];
}
