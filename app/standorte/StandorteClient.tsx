"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { useMemo, useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";
import type { Location } from "./locations";

const mapContainerStyle = {
  width: "100%",
  height: "360px",
  borderRadius: "1.5rem",
};

const mapCenter = {
  lat: 52.52,
  lng: 13.405,
};

type StandorteClientProps = {
  locations: Location[];
};

export default function StandorteClient({ locations }: StandorteClientProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [filter, setFilter] = useState("Alle");
  const [activeLocationId, setActiveLocationId] = useState<string | null>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const filteredLocations: Location[] =
    filter === "Alle"
      ? locations
      : locations.filter((location) => location.type === filter);

  const selectedLocations: Location[] = locations.filter((location) =>
    selectedIds.includes(location.id)
  );

  const activeLocation = locations.find(
    (location) => location.id === activeLocationId
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

  function toggleLocation(id: string) {
    setSelectedIds((current) =>
      current.includes(id)
        ? current.filter((locationId) => locationId !== id)
        : [...current, id]
    );
  }

  function selectLocationFromMap(id: string) {
    setActiveLocationId(id);
    setSelectedIds((current) => (current.includes(id) ? current : [...current, id]));
  }

  return (
    <main className="min-h-screen bg-[#f7faf9] text-slate-900">
      <Header />

      <section className="page-hero mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <p className="mb-5 inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.16em] text-teal-800">
          Reale Standorte
        </p>

        <h1 className="max-w-4xl text-4xl font-black tracking-[-0.045em] sm:text-6xl lg:text-7xl">
          DokTV Standorte in Berlin.
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-[#5d737d]">
          Entdecken Sie reale Installationen und fragen Sie passende Werbeflächen direkt bei uns an. Verfügbarkeit und Konditionen klären wir persönlich.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-24 lg:grid-cols-[1fr_380px]">
        <div>
          <div className="mb-6 flex gap-3">
            {["Alle", "Apotheke", "Arztpraxis"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-full px-5 py-3 text-sm font-semibold ${
                  filter === item
                    ? "bg-teal-600 text-white"
                    : "border border-slate-200 bg-white text-slate-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mb-8 rounded-[2rem] bg-slate-950 p-4 text-white sm:p-6">
            <div className="overflow-hidden rounded-[1.5rem] bg-teal-900/40">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  zoom={11}
                  center={mapCenter}
                >
                  {filteredLocations.map((location) => (
                    <Marker
                      key={location.id}
                      position={{
                        lat: location.lat,
                        lng: location.lng,
                      }}
                      onClick={() => selectLocationFromMap(location.id)}
                    />
                  ))}

                  {activeLocation && (
                    <InfoWindow
                      position={{
                        lat: activeLocation.lat,
                        lng: activeLocation.lng,
                      }}
                      onCloseClick={() => setActiveLocationId(null)}
                    >
                      <div className="text-[#334c59]">
                        <p className="font-bold">{activeLocation.name}</p>
                        <p className="text-sm">{activeLocation.address}</p>
                      </div>
                    </InfoWindow>
                  )}
                </GoogleMap>
              ) : (
                <div className="flex h-[360px] items-center justify-center">
                  Karte lädt...
                </div>
              )}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredLocations.map((location) => {
              const isSelected = selectedIds.includes(location.id);

              return (
                <div
                  key={location.id}
                  className={`overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm ${
                    isSelected ? "ring-2 ring-teal-500" : ""
                  }`}
                >
                  <div className="relative mb-5 h-52 overflow-hidden rounded-2xl bg-slate-100">
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex justify-between">
                    <span>{location.type}</span>
                    <span>{location.district}</span>
                  </div>

                  <h2 className="mt-4 text-xl font-bold">{location.name}</h2>

                  <p className="mt-2">{location.description}</p>

                  <p className="mt-4 text-sm font-bold text-teal-700">Konditionen und Verfügbarkeit auf Anfrage</p>

                  <button
                    onClick={() => toggleLocation(location.id)}
                    className="mt-4 w-full rounded-full bg-slate-950 py-3 font-bold text-white transition hover:bg-teal-700"
                  >
                    {isSelected ? "Auswahl entfernen" : "Standort auswählen"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-xl lg:sticky lg:top-28">
          <h2 className="text-xl font-bold">Ihre Auswahl</h2>

          <div className="mt-4 space-y-2">
            {selectedLocations.length === 0 && (
              <p>Keine Standorte ausgewählt.</p>
            )}

            {selectedLocations.map((location) => (
              <div key={location.id}>{location.name}</div>
            ))}
          </div>

          {monthlyTotal > 0 || yearlyTotal > 0 ? (
            <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm">
              {monthlyTotal > 0 ? <p>Monatlich: {monthlyTotal} €</p> : null}
              {yearlyTotal > 0 ? <p>Jährlich: {yearlyTotal} €</p> : null}
            </div>
          ) : null}

          <a
            href="/kontakt"
            className="mt-6 block w-full rounded-full bg-teal-600 py-3 text-center font-bold text-white transition hover:bg-teal-700"
          >
            Jetzt anfragen
          </a>
        </aside>
      </section>

      <Footer />
    </main>
  );
}
