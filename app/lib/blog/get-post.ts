import { createSupabaseServerClient } from "@/app/lib/supabase/server";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  content: string | null;
  meta_title: string | null;
  meta_description: string | null;
  og_image_url: string | null;
  noindex: boolean | null;
  created_at: string;
  updated_at: string;
};

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error("Blog Fehler:", error.message);
    return null;
  }

  return data as BlogPost | null;
}