"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { supabase } from "@/app/lib/supabase/supabaseClient";
import {
  locations as fallbackLocations,
  type Location,
} from "@/app/standorte/locations";

type LocationRow = {
  id: string | number;
  name: string;
  type: Location["type"];
  district: string;
  address: string;
  monthly_price: number;
  yearly_price: number;
  image: string | null;
  description: string;
  lat: number;
  lng: number;
  is_active: boolean | null;
  sort_order: number | null;
};

const emptyLocation: Partial<Location> = {
  id: "",
  name: "",
  type: "Apotheke",
  district: "",
  address: "",
  monthlyPrice: 199,
  yearlyPrice: 1990,
  image: "/logo.png",
  description: "",
  lat: 52.52,
  lng: 13.405,
  isActive: true,
  sortOrder: 100,
};

type LocationsTabProps = {
  onPickImage?: (callback: (url: string) => void) => void;
};

function toLocation(row: LocationRow): Location {
  return {
    id: String(row.id),
    name: row.name,
    type: row.type,
    district: row.district,
    address: row.address,
    monthlyPrice: Number(row.monthly_price || 0),
    yearlyPrice: Number(row.yearly_price || 0),
    image: row.image || "/logo.png",
    description: row.description,
    lat: Number(row.lat || 52.52),
    lng: Number(row.lng || 13.405),
    isActive: row.is_active ?? true,
    sortOrder: row.sort_order ?? 100,
  };
}

function parseNumber(value: FormDataEntryValue | null, fallback = 0) {
  const normalized = String(value ?? "")
    .trim()
    .replace(",", ".");
  const parsed = Number(normalized);

  return Number.isFinite(parsed) ? parsed : fallback;
}

export default function LocationsTab({ onPickImage }: LocationsTabProps) {
  const [locations, setLocations] = useState<Location[]>([]);
  const [selected, setSelected] = useState<Partial<Location>>(emptyLocation);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [query, setQuery] = useState("");

  const getHiddenFallbackIds = useCallback(async () => {
    const { data } = await supabase
      .from("site_content")
      .select("value")
      .eq("key", "hidden_fallback_locations")
      .maybeSingle();

    if (!data?.value) return [];

    try {
      const parsed = JSON.parse(String(data.value));
      return Array.isArray(parsed) ? parsed.filter(Boolean).map(String) : [];
    } catch {
      return [];
    }
  }, []);

  const loadLocations = useCallback(async () => {
    setLoading(true);
    setMessage("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setMessage("Nicht eingeloggt.");
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("locations")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("name", { ascending: true });

    if (error) {
      setMessage(`Standorte konnten nicht geladen werden: ${error.message}`);
      setLocations([]);
      setLoading(false);
      return;
    }

    const hiddenFallbackIds = await getHiddenFallbackIds();
    const visibleFallbackLocations = fallbackLocations.filter(
      (location) => !hiddenFallbackIds.includes(location.id)
    );
    const dbLocations = ((data || []) as LocationRow[]).map(toLocation);

    setLocations([...dbLocations, ...visibleFallbackLocations]);
    setLoading(false);
  }, [getHiddenFallbackIds]);

  async function hideFallbackLocation(id: string) {
    const hiddenIds = await getHiddenFallbackIds();
    const nextHiddenIds = Array.from(new Set([...hiddenIds, id]));
    const { error } = await supabase.from("site_content").upsert(
      [
        {
          key: "hidden_fallback_locations",
          value: JSON.stringify(nextHiddenIds),
          updated_at: new Date().toISOString(),
        },
      ],
      { onConflict: "key" }
    );

    if (error) {
      throw new Error(error.message);
    }
  }

  useEffect(() => {
    void Promise.resolve().then(loadLocations);
  }, [loadLocations]);

  const filteredLocations = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return locations;

    return locations.filter((location) =>
      [location.name, location.district, location.address, location.type]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [locations, query]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    try {
      const formData = new FormData(event.currentTarget);
      const id = String(formData.get("id") || "");
      const isFallbackLocation = id.startsWith("fallback-");
      const payload = {
        name: String(formData.get("name") || "").trim(),
        type: String(formData.get("type") || "Apotheke") as Location["type"],
        district: String(formData.get("district") || "").trim(),
        address: String(formData.get("address") || "").trim(),
        monthly_price: parseNumber(formData.get("monthlyPrice"), 0),
        yearly_price: parseNumber(formData.get("yearlyPrice"), 0),
        image: String(formData.get("image") || "").trim() || "/logo.png",
        description: String(formData.get("description") || "").trim(),
        lat: parseNumber(formData.get("lat"), 52.52),
        lng: parseNumber(formData.get("lng"), 13.405),
        is_active: formData.get("isActive") === "on",
        sort_order: parseNumber(formData.get("sortOrder"), 100),
      };

      if (!payload.name || !payload.district || !payload.address) {
        throw new Error("Name, Bezirk und Adresse sind Pflichtfelder.");
      }

      const { error } =
        id && !isFallbackLocation
          ? await supabase.from("locations").update(payload).eq("id", id)
          : await supabase.from("locations").insert([payload]);

      if (error) {
        throw new Error(error.message);
      }

      if (isFallbackLocation) {
        await hideFallbackLocation(id);
      }

      setMessage("Standort gespeichert und öffentliche Standortseite aktualisiert.");
      setSelected(emptyLocation);
      await loadLocations();
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Standort konnte nicht gespeichert werden."
      );
    }
  }

  async function handleDelete() {
    if (!selected.id) return;

    const ok = window.confirm("Standort wirklich löschen?");
    if (!ok) return;

    try {
      const id = String(selected.id);

      if (id.startsWith("fallback-")) {
        await hideFallbackLocation(id);
      } else {
        const { error } = await supabase.from("locations").delete().eq("id", id);

        if (error) {
          throw new Error(error.message);
        }
      }

      setMessage("Standort gelöscht.");
      setSelected(emptyLocation);
      await loadLocations();
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Standort konnte nicht gelöscht werden."
      );
    }
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[380px_1fr]">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-black text-slate-950">Standorte</h2>
            <p className="mt-1 text-sm text-slate-500">
              Apotheken, Praxen, Preise und Kartenpunkte.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setSelected(emptyLocation);
              setMessage("");
            }}
            className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-bold text-white"
          >
            Neu
          </button>
        </div>

        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Suchen..."
          className="mt-5 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-950"
        />

        {message && (
          <p className="mt-4 rounded-xl bg-slate-100 p-3 text-sm font-semibold text-slate-700">
            {message}
          </p>
        )}

        <div className="mt-5 space-y-3">
          {loading && <p className="text-sm text-slate-500">Lade Standorte...</p>}

          {!loading &&
            filteredLocations.map((location) => (
              <button
                key={location.id}
                type="button"
                onClick={() => {
                  setSelected(location);
                  setMessage("");
                }}
                className={`w-full rounded-xl border p-4 text-left transition ${
                  selected.id === location.id
                    ? "border-slate-950 bg-slate-50"
                    : "border-slate-200 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-black text-slate-950">{location.name}</p>
                  <div className="flex shrink-0 gap-2">
                    {location.id.startsWith("fallback-") && (
                      <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-bold text-amber-700">
                        Basis
                      </span>
                    )}
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-bold ${
                        location.isActive === false
                          ? "bg-slate-200 text-slate-600"
                          : "bg-emerald-100 text-emerald-700"
                      }`}
                    >
                      {location.isActive === false ? "inaktiv" : "live"}
                    </span>
                  </div>
                </div>
                <p className="mt-1 text-sm text-slate-500">
                  {location.type} · {location.district}
                </p>
              </button>
            ))}

          {!loading && filteredLocations.length === 0 && (
            <p className="rounded-xl bg-slate-50 p-4 text-sm text-slate-500">
              Keine Standorte gefunden. Wenn hier eine Tabellen-Fehlermeldung
              erscheint, muss in Supabase die Tabelle `locations` angelegt werden.
            </p>
          )}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl font-black text-slate-950">
              Standort bearbeiten
            </h2>
            {selected.id?.startsWith("fallback-") && (
              <p className="mt-2 max-w-2xl text-sm font-semibold text-amber-700">
                Alter Basis-Standort: Speichern übernimmt ihn als echten
                Datenbank-Standort. Löschen entfernt nur diesen einen Standort.
              </p>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <input type="hidden" name="id" value={selected.id || ""} />

          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Name">
              <input
                name="name"
                value={selected.name || ""}
                onChange={(event) =>
                  setSelected({ ...selected, name: event.target.value })
                }
                className="admin-input"
                required
              />
            </Field>

            <Field label="Typ">
              <select
                name="type"
                value={selected.type || "Apotheke"}
                onChange={(event) =>
                  setSelected({
                    ...selected,
                    type: event.target.value as Location["type"],
                  })
                }
                className="admin-input"
              >
                <option value="Apotheke">Apotheke</option>
                <option value="Arztpraxis">Arztpraxis</option>
              </select>
            </Field>

            <Field label="Bezirk">
              <input
                name="district"
                value={selected.district || ""}
                onChange={(event) =>
                  setSelected({ ...selected, district: event.target.value })
                }
                className="admin-input"
                required
              />
            </Field>

            <Field label="Adresse">
              <input
                name="address"
                value={selected.address || ""}
                onChange={(event) =>
                  setSelected({ ...selected, address: event.target.value })
                }
                className="admin-input"
                required
              />
            </Field>
          </div>

          <Field label="Beschreibung">
            <textarea
              name="description"
              value={selected.description || ""}
              onChange={(event) =>
                setSelected({ ...selected, description: event.target.value })
              }
              className="admin-input min-h-28"
            />
          </Field>

          <div className="grid gap-4 md:grid-cols-4">
            <Field label="Monatspreis">
              <input
                type="number"
                name="monthlyPrice"
                value={selected.monthlyPrice || 0}
                onChange={(event) =>
                  setSelected({
                    ...selected,
                    monthlyPrice: Number(event.target.value),
                  })
                }
                className="admin-input"
              />
            </Field>

            <Field label="Jahrespreis">
              <input
                type="number"
                name="yearlyPrice"
                value={selected.yearlyPrice || 0}
                onChange={(event) =>
                  setSelected({
                    ...selected,
                    yearlyPrice: Number(event.target.value),
                  })
                }
                className="admin-input"
              />
            </Field>

            <Field label="Latitude">
              <input
                type="number"
                step="0.000001"
                name="lat"
                value={selected.lat || 0}
                onChange={(event) =>
                  setSelected({ ...selected, lat: Number(event.target.value) })
                }
                className="admin-input"
              />
            </Field>

            <Field label="Longitude">
              <input
                type="number"
                step="0.000001"
                name="lng"
                value={selected.lng || 0}
                onChange={(event) =>
                  setSelected({ ...selected, lng: Number(event.target.value) })
                }
                className="admin-input"
              />
            </Field>
          </div>

          <Field label="Bild URL">
            <div className="flex gap-3">
              <input
                name="image"
                value={selected.image || ""}
                onChange={(event) =>
                  setSelected({ ...selected, image: event.target.value })
                }
                className="admin-input"
              />
              {onPickImage && (
                <button
                  type="button"
                  onClick={() =>
                    onPickImage((url) => setSelected({ ...selected, image: url }))
                  }
                  className="rounded-xl border border-slate-300 px-4 py-3 text-sm font-bold text-slate-700"
                >
                  Bild
                </button>
              )}
            </div>
          </Field>

          {selected.image && (
            <img
              src={selected.image}
              alt=""
              className="h-56 w-full rounded-2xl border border-slate-200 object-cover"
            />
          )}

          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Sortierung">
              <input
                type="number"
                name="sortOrder"
                value={selected.sortOrder || 100}
                onChange={(event) =>
                  setSelected({
                    ...selected,
                    sortOrder: Number(event.target.value),
                  })
                }
                className="admin-input"
              />
            </Field>

            <label className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 text-sm font-bold text-slate-700">
              <input
                type="checkbox"
                name="isActive"
                checked={selected.isActive !== false}
                onChange={(event) =>
                  setSelected({ ...selected, isActive: event.target.checked })
                }
              />
              Auf der Standortseite anzeigen
            </label>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white"
            >
              {selected.id?.startsWith("fallback-")
                ? "Standort übernehmen"
                : "Standort speichern"}
            </button>

            {selected.id && (
              <button
                type="button"
                onClick={handleDelete}
                className="rounded-xl border border-red-300 px-5 py-3 text-sm font-bold text-red-600"
              >
                Löschen
              </button>
            )}
          </div>
        </form>
      </section>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-slate-700">
        {label}
      </span>
      {children}
    </label>
  );
}
