import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title:
    "Schaufenster Display Apotheke | Digital Signage Apotheke – DokTV",
  description:
    "Digitale Schaufenster Displays für Apotheken. Mehr Sichtbarkeit, mehr Kunden und moderne Werbung im Gesundheitsbereich.",
};

const benefits = [
  "Mehr Aufmerksamkeit im Schaufenster",
  "Angebote und Aktionen besser sichtbar",
  "Moderne Außenwirkung für Apotheken",
  "Flexible Inhalte ohne Druckkosten",
  "Gezielte Kundenansprache bei Laufkundschaft",
  "Perfekt für stark frequentierte Standorte",
];

const useCases = [
  "Angebote und Aktionen",
  "Kosmetikprodukte",
  "OTC-Produkte",
  "Saisonale Kampagnen",
  "Notdienst-Hinweise",
  "Gesundheitsinformationen",
];

export default function SchaufensterDisplayPage() {
  return (
    <main className="bg-white text-slate-900">
      <Header />

      {/* HERO */}
      <section className="bg-slate-950 px-6 py-28 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 inline-flex rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            Digital Signage für Apotheken
          </p>

          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Schaufenster Displays für Apotheken – mehr Sichtbarkeit im Alltag
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Digitale Schaufenster Displays helfen Apotheken dabei, Angebote,
            Aktionen und Gesundheitsinformationen sichtbar zu machen. Bewegte
            Inhalte ziehen die Aufmerksamkeit von Passanten auf sich und sorgen
            dafür, dass Ihre Apotheke nicht übersehen wird.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              href="/kontakt"
              className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white"
            >
              Beratung anfragen
            </Link>

            <Link
              href="/preise"
              className="rounded-xl border border-white px-8 py-4 font-bold"
            >
              Preise ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-8 text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-bold">
            Warum Schaufenster Displays für Apotheken entscheidend sind
          </h2>

          <p>
            In vielen Städten entscheiden Sekunden darüber, ob ein Kunde stehen
            bleibt oder weitergeht. Klassische Plakate oder statische Werbung
            werden häufig übersehen. Digitale Displays hingegen bewegen sich,
            wechseln Inhalte und erzeugen automatisch mehr Aufmerksamkeit.
          </p>

          <p>
            Für Apotheken bedeutet das: Angebote, Aktionen und wichtige
            Informationen werden deutlich besser wahrgenommen. Gerade im
            Schaufenster entsteht eine direkte Verbindung zu Passanten, noch
            bevor diese die Apotheke betreten.
          </p>

          <p>
            Mehr dazu finden Sie auf unserer SEO-Seite{" "}
            <Link
              href="/werbung-apotheke-display"
              className="font-bold text-blue-600 underline"
            >
              Werbung Apotheke Display
            </Link>
            .
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-10">
            Vorteile von Schaufenster Displays
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((item) => (
              <div key={item} className="rounded-2xl bg-white p-6 shadow">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-10">
            Typische Inhalte für Apotheken Displays
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((item) => (
              <div key={item} className="rounded-2xl border p-6">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO BLOCK */}
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl space-y-7 text-lg leading-9 text-slate-300">
          <h2 className="text-3xl font-bold text-white">
            Schaufenster Display Apotheke in Berlin und Deutschland
          </h2>

          <p>
            Besonders in Berlin ist der Wettbewerb zwischen Apotheken hoch.
            Viele Standorte befinden sich in stark frequentierten Lagen mit
            viel Laufkundschaft. Ein digitales Schaufenster Display kann hier
            den entscheidenden Unterschied machen.
          </p>

          <p>
            Ergänzend dazu finden Sie unsere lokale Seite zu{" "}
            <Link
              href="/digital-signage-berlin"
              className="font-bold underline"
            >
              Digital Signage Berlin
            </Link>
            .
          </p>

          <p>
            Einen Überblick über Preise erhalten Sie auf unserer Seite{" "}
            <Link
              href="/preise"
              className="font-bold underline"
            >
              Preise
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-bold">
          Mehr Kunden durch bessere Sichtbarkeit
        </h2>

        <p className="mt-4">
          Lassen Sie sich kostenlos beraten und finden Sie die passende Lösung.
        </p>

        <Link
          href="/kontakt"
          className="mt-6 inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold"
        >
          Jetzt anfragen
        </Link>
      </section>

      <Footer />
    </main>
  );
}