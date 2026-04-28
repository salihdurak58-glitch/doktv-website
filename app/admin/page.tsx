"use client";

import { useEffect, useState } from "react";
import SeoTab from "@/app/components/admin/SeoTab";
import { supabase } from "@/app/lib/supabase/supabaseClient";

const tabs = [
  "Übersicht",
  "Startseite",
  "Bilder",
  "Leads",
  "SEO",
  "Einstellungen",
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("Übersicht");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user?.email) {
        setEmail(user.email);
      }
    }

    loadUser();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/admin/login";
  }

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            {email && (
              <p className="mb-3 text-sm font-bold text-blue-600">
                Eingeloggt als {email}
              </p>
            )}

            <h1 className="text-5xl font-extrabold tracking-tight text-slate-950">
              DokTV Dashboard
            </h1>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800"
          >
            Logout
          </button>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-xl px-5 py-3 text-sm font-bold transition ${
                activeTab === tab
                  ? "bg-slate-950 text-white"
                  : "bg-white text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Übersicht" && (
          <section className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-extrabold text-slate-950">
              Übersicht
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Willkommen im DokTV Admin Dashboard.
            </p>
          </section>
        )}

        {activeTab === "Startseite" && (
          <section className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-extrabold text-slate-950">
              Startseite
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Hier bleibt dein bestehendes Startseiten-CMS.
            </p>
          </section>
        )}

        {activeTab === "Bilder" && (
          <section className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-extrabold text-slate-950">Bilder</h2>

            <p className="mt-4 text-lg text-slate-600">
              Hier bleibt dein bestehender Medien-Upload.
            </p>
          </section>
        )}

        {activeTab === "Leads" && (
          <section className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-extrabold text-slate-950">Leads</h2>

            <p className="mt-4 text-lg text-slate-600">
              Hier bleibt dein bestehendes Leads Management.
            </p>
          </section>
        )}

        {activeTab === "SEO" && <SeoTab />}

        {activeTab === "Einstellungen" && (
          <section className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-extrabold text-slate-950">
              Einstellungen
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Admin-Einstellungen, erlaubte Admin-E-Mail und Sicherheit bauen wir
              später ein.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}