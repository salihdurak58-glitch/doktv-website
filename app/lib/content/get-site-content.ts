import { createSupabaseServerClient } from "@/app/lib/supabase/server";

export type SiteContentMap = Record<string, string>;

export async function getSiteContent(keys: string[]): Promise<SiteContentMap> {
  try {
    const supabase = await createSupabaseServerClient();

    const { data, error } = await supabase
      .from("site_content")
      .select("key, value")
      .in("key", keys);

    if (error) {
      return {};
    }

    return Object.fromEntries(
      (data || []).map((item) => [String(item.key), String(item.value || "")])
    );
  } catch {
    return {};
  }
}
