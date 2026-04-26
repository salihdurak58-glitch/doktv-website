"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { useMemo, useState } from "react";

const locations = [
  {
    id: 1,
    name: "Apotheke Mitte",
    type: "Apotheke",
    district: "Berlin-Mitte",
    monthlyPrice: 199,
    yearlyPrice: 1990,
    image: "/logo.png",
    description:
      "Schaufenster-Display mit hoher Sichtbarkeit für Laufkundschaft.",
  },
  {
    id: 2,
    name: "Arztpraxis Charlottenburg",
    type: "Arztpraxis",
    district: "Charlottenburg",
    monthlyPrice: 249,
    yearlyPrice: 2490,
    image: "/logo.png",
    description:
      "Wartezimmer-Display für Patienteninformation und Gesundheitswerbung.",
  },
  {
    id: 3,
    name: "Apotheke Neukölln",
    type: "Apotheke",
    district: "Neukölln",
    monthlyPrice: 179,
    yearlyPrice: 1790,
    image: "/logo.png",
    description: "Digitales Schaufenster in gut erreichbarer Lage.",
  },
];

export default function StandortePage() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [filter, setFilter] = useState("Alle");

  const filteredLocations =
    filter === "Alle"
      ? locations
      : locations.filter((location) => location.type === filter);

  const selectedLocations = locations.filter((location) =>
    selectedIds.includes(location.id)
  );

  const monthlyTotal = useMemo(
    () =>
      selectedLocations.reduce(
        (sum, location) => sum + location.monthlyPrice,
        0
      ),
    [selectedLocations]
  );

  const yearlyTotal = useMemo(
    () =>
      selectedLocations.reduce(
        (sum, location) => sum + location.yearlyPrice,
        0
      ),
    [selectedLocations]
  );

  function toggleLocation(id: number) {
    setSelectedIds((current) =>
      current.includes(id)
        ? current.filter((locationId) => locationId !== id)
        : [...current, id]
    );
  }

  return (
    <main className="min-h-screen bg-[#f7fafb] text-[#334c59]">
      <Header />

      {/* HEADER TEXT */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#6fa8b0] shadow-sm">
          Standortfinder
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Wählen Sie Ihre Werbestandorte in Berlin.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5d737d]">
          Sehen Sie verfügbare Apotheken und Arztpraxen, vergleichen Sie Preise
          und senden Sie direkt eine Anfrage für Ihre ausgewählten Standorte.
        </p>
      </section>

      {/* MAIN */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-24 lg:grid-cols-[1fr_380px]">
        
        {/* LEFT SIDE */}
        <div>
          {/* FILTER */}
          <div className="mb-6 flex flex-wrap gap-3">
            {["Alle", "Apotheke", "Arztpraxis"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-full px-5 py-3 text-sm font-semibold ${
                  filter === item
                    ? "bg-[#334c59] text-white"
                    : "bg-white text-[#334c59]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* MAP PLACEHOLDER */}
          <div className="mb-8 rounded-[2rem] bg-[#334c59] p-6 text-white">
            <div className="flex h-[360px] items-center justify-center rounded-[1.5rem] bg-[#6fa8b0]/40 text-center">
              <div>
                <p className="text-3xl font-bold">Karte kommt hier rein</p>
                <p className="mt-3 text-white/80">
                  Später verbinden wir Google Maps.
                </p>
              </div>
            </div>
          </div>

          {/* LOCATIONS */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredLocations.map((location) => {
              const isSelected = selectedIds.includes(location.id);

              return (
                <div
                  key={location.id}
                  className={`rounded-3xl bg-white p-5 shadow-lg shadow-[#334c59]/5 ${
                    isSelected ? "ring-2 ring-[#6fa8b0]" : ""
                  }`}
                >
                  <div className="mb-5 flex h-40 items-center justify-center rounded-2xl bg-[#f7fafb]">
                    <Image
                      src={location.image}
                      alt={location.name}
                      width={160}
                      height={70}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#e8f4f5] px-3 py-1 text-xs font-bold text-[#6fa8b0]">
                      {location.type}
                    </span>
                    <span className="text-sm text-[#5d737d]">
                      {location.district}
                    </span>
                  </div>

                  <h2 className="mt-4 text-xl font-bold">{location.name}</h2>

                  <p className="mt-2 text-[#5d737d]">
                    {location.description}
                  </p>

                  <div className="mt-4 flex justify-between text-sm">
                    <span>{location.monthlyPrice} €/Monat</span>
                    <span>{location.yearlyPrice} €/Jahr</span>
                  </div>

                  <button
                    onClick={() => toggleLocation(location.id)}
                    className={`mt-4 w-full rounded-full px-6 py-3 font-semibold ${
                      isSelected
                        ? "bg-[#6fa8b0] text-white"
                        : "bg-[#334c59] text-white"
                    }`}
                  >
                    {isSelected
                      ? "Auswahl entfernen"
                      : "Standort auswählen"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <aside className="h-fit rounded-3xl bg-white p-6 shadow-xl">
          <h2 className="text-xl font-bold">Ihre Auswahl</h2>

          <div className="mt-4 space-y-3">
            {selectedLocations.length === 0 && (
              <p className="text-sm text-[#5d737d]">
                Keine Standorte ausgewählt.
              </p>
            )}

            {selectedLocations.map((location) => (
              <div key={location.id} className="text-sm">
                {location.name}
              </div>
            ))}
          </div>

          <div className="mt-6 text-sm">
            <p>Monatlich: {monthlyTotal} €</p>
            <p>Jährlich: {yearlyTotal} €</p>
          </div>

          <a
            href="/kontakt"
            className="mt-6 block w-full rounded-full bg-[#334c59] px-6 py-3 text-center font-semibold text-white"
          >
            Jetzt anfragen
          </a>
        </aside>
      </section>

      <Footer />
    </main>
  );
}