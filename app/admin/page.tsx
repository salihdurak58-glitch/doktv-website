"use client";

import { useState } from "react";
import SeoTab from "@/components/admin/SeoTab";

const tabs = ["Übersicht", "Startseite", "Bilder", "Leads", "SEO"];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("Übersicht");

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            DokTV Admin Dashboard
          </h1>
          <p className="mt-2 text-gray-600">
            Inhalte, Bilder, Leads und SEO verwalten.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2 rounded-2xl border bg-white p-2 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Übersicht" && (
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Übersicht</h2>
            <p className="mt-2 text-gray-600">
              Willkommen im DokTV Admin Dashboard.
            </p>
          </div>
        )}

        {activeTab === "Startseite" && (
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Startseite</h2>
            <p className="mt-2 text-gray-600">
              Hier bleibt dein bestehendes Startseiten-CMS.
            </p>
          </div>
        )}

        {activeTab === "Bilder" && (
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Bilder</h2>
            <p className="mt-2 text-gray-600">
              Hier bleibt dein bestehender Medien-Upload.
            </p>
          </div>
        )}

        {activeTab === "Leads" && (
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Leads</h2>
            <p className="mt-2 text-gray-600">
              Hier bleibt dein bestehendes Leads Management.
            </p>
          </div>
        )}

        {activeTab === "SEO" && <SeoTab />}
      </div>
    </main>
  );
}