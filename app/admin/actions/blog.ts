"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/app/lib/supabase/server";

export async function getBlogPosts() {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
}

export async function saveBlogPost(formData: FormData) {
  const supabase = await createSupabaseServerClient();

  const id = String(formData.get("id") || "");
  const slug = String(formData.get("slug") || "").trim();
  const title = String(formData.get("title") || "").trim();
  const content = String(formData.get("content") || "").trim();
  const meta_title = String(formData.get("meta_title") || "").trim();
  const meta_description = String(
    formData.get("meta_description") || ""
  ).trim();
  const og_image_url = String(formData.get("og_image_url") || "").trim();
  const noindex = formData.get("noindex") === "on";

  const payload = {
    slug,
    title,
    content,
    meta_title,
    meta_description,
    og_image_url: og_image_url || null,
    noindex,
  };

  if (id) {
    const { error } = await supabase
      .from("blog_posts")
      .update(payload)
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    }
  } else {
    const { error } = await supabase.from("blog_posts").insert(payload);

    if (error) {
      throw new Error(error.message);
    }
  }

  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/admin/dashboard");
}

export async function deleteBlogPost(id: string) {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.from("blog_posts").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/blog");
  revalidatePath("/admin/dashboard");
}