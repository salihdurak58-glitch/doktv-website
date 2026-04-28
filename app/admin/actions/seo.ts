"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/app/lib/supabase/server";

export type SeoFormState = {
  success: boolean;
  message: string;
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

export async function getSeoPages() {
  const supabase = await requireAdmin();

  const { data, error } = await supabase
    .from("page_seo")
    .select("*")
    .order("route", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
}

export async function saveSeoPage(
  _prevState: SeoFormState,
  formData: FormData
): Promise<SeoFormState> {
  try {
    const supabase = await requireAdmin();

    const id = String(formData.get("id") || "");
    const route = String(formData.get("route") || "").trim();
    const page_name = String(formData.get("page_name") || "").trim();
    const meta_title = String(formData.get("meta_title") || "").trim();
    const meta_description = String(
      formData.get("meta_description") || ""
    ).trim();

    const og_title = String(formData.get("og_title") || "").trim() || null;
    const og_description =
      String(formData.get("og_description") || "").trim() || null;
    const og_image_url =
      String(formData.get("og_image_url") || "").trim() || null;
    const canonical_url =
      String(formData.get("canonical_url") || "").trim() || null;
    const noindex = formData.get("noindex") === "on";

    if (!route || !page_name || !meta_title || !meta_description) {
      return {
        success: false,
        message: "Route, Seitenname, Meta Title und Description sind Pflicht.",
      };
    }

    const payload = {
      route,
      page_name,
      meta_title,
      meta_description,
      og_title,
      og_description,
      og_image_url,
      canonical_url,
      noindex,
    };

    const { error } = id
      ? await supabase.from("page_seo").update(payload).eq("id", id)
      : await supabase.from("page_seo").insert([payload]);

    if (error) {
      return {
        success: false,
        message: error.message,
      };
    }

    revalidatePath(route);
    revalidatePath("/admin");

    return {
      success: true,
      message: "SEO-Daten gespeichert.",
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Fehler beim Speichern.",
    };
  }
}

export async function deleteSeoPage(id: string, route: string) {
  const supabase = await requireAdmin();

  const { error } = await supabase.from("page_seo").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath(route);
  revalidatePath("/admin");
}