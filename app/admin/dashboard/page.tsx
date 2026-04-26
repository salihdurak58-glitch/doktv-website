"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

const cards = [
  {
    title: "Inhalte",
    text: "Texte und Seiteninhalte später bearbeiten.",
  },
  {
    title: "Bilder",
    text: "Bilder hochladen und Medien verwalten.",
  },
  {
    title: "Blog",
    text: "SEO-Artikel erstellen und bearbeiten.",
  },
  {
    title: "Leads",
    text: "Kontaktanfragen und Kundenanfragen sehen.",
  },
  {
    title: "Statistik",
    text: "Besucherzahlen und Seitenaufrufe auswerten.",
  },
  {
    title: "SEO",
    text: "Titel, Beschreibungen und Keywords verwalten.",
  },
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    async function checkUser() {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/admin/login");
        return;
      }

      setEmail(data.user.email ?? null);
      setChecking(false);
    }

    checkUser();
  }, [router]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/admin/login");
  }

  if (checking) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p>Dashboard wird geladen...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-sm font-semibold text-blue-600">DokTV Admin</p>
            <h1 className="text-2xl font-black">Dashboard</h1>
          </div>

          <div className="flex items-center gap-4">
            <p className="hidden text-sm text-slate-500 sm:block">{email}</p>
            <button
              onClick={handleLogout}
              className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-blue-600"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl bg-slate-950 p-8 text-white">
          <p className="text-sm font-semibold text-blue-300">
            Willkommen zurück
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Dein DokTV Kontrollzentrum
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            Hier verwaltest du später Inhalte, Bilder, Blogartikel,
            Kontaktanfragen, SEO-Daten und Besucherstatistiken deiner Webseite.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-black">{card.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{card.text}</p>

              <button
                disabled
                className="mt-6 rounded-xl bg-slate-200 px-5 py-3 text-sm font-bold text-slate-500"
              >
                Kommt in Step 2
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}