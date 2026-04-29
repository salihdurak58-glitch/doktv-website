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
    <main className="min-h-screen bg-[#f7fafb] text-[#334c59]">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#6fa8b0] shadow-sm">
          Standortfinder
        </p>

        <h1 className="max-w-4xl text-5xl font-bold md:text-7xl">
          Wählen Sie Ihre Werbestandorte in Berlin.
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-[#5d737d]">
          Sehen Sie verfügbare Apotheken und Arztpraxen, vergleichen Sie Preise
          und senden Sie direkt eine Anfrage.
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
                    ? "bg-[#334c59] text-white"
                    : "bg-white text-[#334c59]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mb-8 rounded-[2rem] bg-[#334c59] p-6 text-white">
            <div className="overflow-hidden rounded-[1.5rem] bg-[#6fa8b0]/40">
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
                  className={`rounded-3xl bg-white p-5 shadow ${
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

                  <div className="flex justify-between">
                    <span>{location.type}</span>
                    <span>{location.district}</span>
                  </div>

                  <h2 className="mt-4 text-xl font-bold">{location.name}</h2>

                  <p className="mt-2">{location.description}</p>

                  <div className="mt-4 flex justify-between text-sm">
                    <span>{location.monthlyPrice} €/Monat</span>
                    <span>{location.yearlyPrice} €/Jahr</span>
                  </div>

                  <button
                    onClick={() => toggleLocation(location.id)}
                    className="mt-4 w-full rounded-full bg-[#334c59] py-3 text-white"
                  >
                    {isSelected ? "Auswahl entfernen" : "Standort auswählen"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <aside className="rounded-3xl bg-white p-6 shadow-xl">
          <h2 className="text-xl font-bold">Ihre Auswahl</h2>

          <div className="mt-4 space-y-2">
            {selectedLocations.length === 0 && (
              <p>Keine Standorte ausgewählt.</p>
            )}

            {selectedLocations.map((location) => (
              <div key={location.id}>{location.name}</div>
            ))}
          </div>

          <div className="mt-6">
            <p>Monatlich: {monthlyTotal} €</p>
            <p>Jährlich: {yearlyTotal} €</p>
          </div>

          <a
            href="/kontakt"
            className="mt-6 block w-full rounded-full bg-[#334c59] py-3 text-center text-white"
          >
            Jetzt anfragen
          </a>
        </aside>
      </section>

      <Footer />
    </main>
  );
}
