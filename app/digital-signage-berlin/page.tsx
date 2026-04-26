import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Digital Signage Berlin | Mehr Kunden durch Displays – DokTV",
  description:
    "Digital Signage in Berlin für Apotheken, Arztpraxen und Geschäfte. Mehr Sichtbarkeit, mehr Kunden und moderne Schaufenster-Displays von DokTV.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-900">
      <Header />

      {/* HERO */}
      <section className="bg-slate-950 text-white px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Digital Signage Berlin
          </h1>

          <p className="mt-6 text-xl text-slate-300 max-w-2xl">
            Mehr Sichtbarkeit für Apotheken, Arztpraxen und lokale Geschäfte in
            Berlin durch moderne Displays im Schaufenster und Innenbereich.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              href="/kontakt"
              className="bg-blue-600 px-8 py-4 rounded-xl font-bold"
            >
              Beratung starten
            </Link>

            <Link
              href="/preise"
              className="border border-white px-8 py-4 rounded-xl"
            >
              Preise ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* SEO TEXT */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto space-y-8 text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-bold">
            Warum Digital Signage in Berlin so wichtig ist
          </h2>

          <p>
            In einer Stadt wie Berlin entscheidet oft der erste Eindruck darüber,
            ob ein Kunde stehen bleibt oder weitergeht. Gerade Apotheken,
            Arztpraxen und lokale Geschäfte kämpfen täglich um Aufmerksamkeit.
          </p>

          <p>
            Mit Digital Signage wird dein Standort sichtbar. Ein modernes
            Display im Schaufenster zeigt Angebote, Leistungen und Informationen
            klar und auffällig.
          </p>

          <p>
            Bewegte Inhalte ziehen Blicke an, erhöhen die Verweildauer und sorgen
            dafür, dass dein Geschäft nicht übersehen wird.
          </p>

          <h2 className="text-3xl font-bold mt-12">
            Für wen eignet sich Digital Signage?
          </h2>

          <p>
            Besonders effektiv ist Digital Signage für Apotheken,
            Arztpraxen, Kosmetikstudios, Friseure und lokale Geschäfte mit
            Laufkundschaft.
          </p>

          <p>
            Überall dort, wo Menschen vorbeilaufen oder warten, kann ein Display
            gezielt Aufmerksamkeit erzeugen und Angebote sichtbar machen.
          </p>

          <h2 className="text-3xl font-bold mt-12">
            Vorteile von Digital Signage
          </h2>

          <ul className="space-y-3">
            <li>• Mehr Aufmerksamkeit durch Bewegung</li>
            <li>• Moderne und professionelle Außenwirkung</li>
            <li>• Inhalte jederzeit anpassbar</li>
            <li>• Keine Druckkosten</li>
            <li>• Mehr Kundenkontakte</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12">
            Digital Signage für Apotheken in Berlin
          </h2>

          <p>
            Apotheken profitieren besonders von Digital Signage. Angebote,
            Kosmetikprodukte, Gesundheitskampagnen und Notdienst-Hinweise können
            direkt im Schaufenster präsentiert werden.
          </p>

          <p>
            Dadurch entsteht mehr Sichtbarkeit und Vertrauen bei Kunden.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white text-center py-20 px-6">
        <h2 className="text-4xl font-bold">
          Bereit für mehr Kunden in Berlin?
        </h2>

        <p className="mt-4 text-blue-100">
          Lass dich kostenlos beraten und finde die passende Lösung.
        </p>

        <Link
          href="/kontakt"
          className="mt-6 inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold"
        >
          Jetzt starten
        </Link>
      </section>

      <Footer />
    </main>
  );
}