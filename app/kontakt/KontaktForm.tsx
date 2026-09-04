"use client";

import { useState } from "react";

const solutionOptions = [
  "55-Zoll-Display für Apotheke",
  "65-Zoll-Display für Apotheke",
  "Notdienstanzeiger",
  "Schaufenster Display Apotheke",
  "Digital Signage Apotheke",
  "Wartezimmer TV",
  "Hersteller Werbung",
  "Individuelle Anfrage",
];

const displaySelection: Record<string, string> = {
  "55": "55-Zoll-Display für Apotheke",
  "65": "65-Zoll-Display für Apotheke",
  notdienst: "Notdienstanzeiger",
};

export default function KontaktForm({ initialDisplay }: { initialDisplay?: string }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const industry = String(formData.get("industry") || "");
    const location = String(formData.get("location") || "");
    const desiredSolution = String(formData.get("desired_solution") || "");
    const message = String(formData.get("message") || "");
    const privacyAccepted = formData.get("privacy_accepted") === "on";

    if (!privacyAccepted) {
      setStatus({
        type: "error",
        message:
          "Bitte bestätigen Sie die Datenschutzhinweise, bevor Sie die Anfrage senden.",
      });
      setLoading(false);
      return;
    }

    const payload = {
      name: String(formData.get("name") || ""),
      company: String(formData.get("company") || ""),
      industry,
      location,
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      desired_solution: desiredSolution,
      message,
      privacy_accepted: privacyAccepted,
      website: String(formData.get("website") || ""),
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus({
          type: "error",
          message: data.error || "Fehler beim Senden.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: data.message || "Anfrage erfolgreich gesendet.",
      });

      form.reset();
    } catch {
      setStatus({
        type: "error",
        message: "Serverfehler. Bitte später erneut versuchen.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      id="anfrage"
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/80 md:p-8"
    >
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-100 blur-3xl" />

      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="relative mb-8">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-700">
          Anfrageformular
        </p>

        <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
          Projekt anfragen
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Füllen Sie die wichtigsten Angaben aus. Danach melden wir uns mit
          einer passenden Einschätzung zu Lösung, Umsetzung und nächsten
          Schritten.
        </p>
      </div>

      <div className="relative space-y-8">
        <section>
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
              1
            </span>
            <div>
              <h4 className="font-black text-slate-950">Kontaktdaten</h4>
              <p className="text-sm text-slate-500">
                Damit wir Sie sauber zuordnen und erreichen können.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-800">
                Name *
              </label>
              <input
                name="name"
                type="text"
                required
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                placeholder="Ihr Name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-800">
                Firma
              </label>
              <input
                name="company"
                type="text"
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                placeholder="Name Ihres Unternehmens"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-800">
                  Branche *
                </label>
                <input
                  name="industry"
                  type="text"
                  required
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  placeholder="z. B. Apotheke, Praxis, Hersteller"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-800">
                  Standort *
                </label>
                <input
                  name="location"
                  type="text"
                  required
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  placeholder="Ort, Bezirk oder Adresse"
                />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-800">
                  Telefonnummer *
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  placeholder="+49 ..."
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-800">
                  E-Mail *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  placeholder="name@email.de"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">
              2
            </span>
            <div>
              <h4 className="font-black text-slate-950">Projektbereich</h4>
              <p className="text-sm text-slate-500">
                Worum geht es bei Ihrer Anfrage?
              </p>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-800">
              Gewünschte Lösung *
            </label>
            <select
              name="desired_solution"
              required
              defaultValue={displaySelection[initialDisplay ?? ""] ?? ""}
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 text-slate-950 outline-none transition focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-100"
            >
              <option value="" disabled>
                Bitte auswählen
              </option>
              {solutionOptions.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </section>

        <section>
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
              3
            </span>
            <div>
              <h4 className="font-black text-slate-950">Nachricht</h4>
              <p className="text-sm text-slate-500">
                Standort, Ziel, Anzahl Displays oder Kampagnenidee helfen uns.
              </p>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-800">
              Nachricht *
            </label>
            <textarea
              name="message"
              required
              className="min-h-44 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
              placeholder="Worum geht es? Standort, gewünschte Lösung, Anzahl Displays, Zeitraum..."
            />
          </div>
        </section>

        <label className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
          <input
            name="privacy_accepted"
            type="checkbox"
            required
            className="mt-1 h-5 w-5 shrink-0 accent-blue-600"
          />
          <span>
            Ich habe die Datenschutzhinweise gelesen und bin damit
            einverstanden, dass meine Angaben zur Bearbeitung der Anfrage
            verarbeitet werden. *
          </span>
        </label>

        {status && (
          <div
            className={`rounded-2xl border p-4 text-sm font-bold ${
              status.type === "success"
                ? "border-green-200 bg-green-50 text-green-700"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            {status.message}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-teal-600 px-7 py-4 font-black text-white shadow-xl shadow-teal-200/70 transition hover:-translate-y-0.5 hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
        >
          {loading ? "Wird gesendet..." : "Anfrage senden"}
        </button>

        <p className="text-sm leading-6 text-slate-500">
          Pflichtfelder sind mit * markiert. Ihre Anfrage wird an DokTV
          übermittelt und für die Bearbeitung gespeichert.
        </p>
      </div>
    </form>
  );
}
