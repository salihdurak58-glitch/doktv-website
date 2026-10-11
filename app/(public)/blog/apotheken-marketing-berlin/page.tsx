import Link from "next/link";
import { publicPageMetadata } from "../../../lib/seo/public-metadata";

export const metadata = publicPageMetadata(
  "/blog/apotheken-marketing-berlin",
  "Apothekenmarketing in Berlin: Online & vor Ort | DokTV",
  "Praktische Ansätze für Berliner Apotheken: lokale Online-Sichtbarkeit, Schaufenster-Kommunikation und digitale Inhalte sinnvoll verbinden.",
  "/referenzen/sky-apotheke-kreuzberg-2.jpg",
  "article",
);

export default function Page() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section className="page-hero px-6 py-20 text-slate-900">
        <div className="max-w-5xl mx-auto">
          <p className="mb-4 font-semibold text-teal-700">
            Apotheken Marketing Berlin
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Apothekenmarketing in Berlin: online und am Standort sichtbar sein
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Der Wettbewerb unter Apotheken in Berlin ist hoch. Wer sichtbar ist,
            kann leichter gefunden werden. Dieser Artikel beleuchtet lokale
            Online-Sichtbarkeit und digitale Kommunikation am Standort.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-6 text-lg leading-8">
        <p>
          Berlin gehört zu den wettbewerbsstärksten Märkten für Apotheken in
          Deutschland. In nahezu jedem Bezirk gibt es mehrere Anbieter, die um
          die Aufmerksamkeit der Kunden konkurrieren.
        </p>

        <p>
          Gleichzeitig hat sich das Verhalten der Kunden verändert. Viele
          informieren sich online, suchen nach Angeboten oder entscheiden
          spontan vor Ort, welche Apotheke sie betreten.
        </p>

        <p>
          Genau deshalb ist modernes Apotheken Marketing heute entscheidend.
          Eine Kombination aus aktuellen Online-Informationen und klarer
          Kommunikation vor Ort hilft Interessierten, Ihre Angebote zu finden
          und einzuordnen.
        </p>
      </section>

      {/* STRATEGIE */}
      <section className="bg-slate-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">
            Die 3 wichtigsten Marketing Hebel für Apotheken in Berlin
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "1. Digital Signage",
                text: "Displays im Schaufenster sorgen für Aufmerksamkeit und mehr Laufkundschaft.",
              },
              {
                title: "2. Google Sichtbarkeit",
                text: "Ein optimiertes Google Profil bringt gezielt lokale Kunden.",
              },
              {
                title: "3. Website & SEO",
                text: "Eine starke Website sorgt für Vertrauen und langfristigen Traffic.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-2xl shadow">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-10 text-lg leading-8">
        <h2 className="text-3xl font-bold">
          Digital Signage für Apotheken in Berlin
        </h2>

        <p>
          Digitale Displays gehören zu den effektivsten Maßnahmen für lokale
          Sichtbarkeit. Besonders in stark frequentierten Straßen sorgt ein
          Display dafür, dass Ihre Apotheke auffällt.
        </p>

        <p>
          Bewegte Inhalte ziehen Blicke an und erhöhen die Wahrscheinlichkeit,
          dass Kunden stehen bleiben und Ihre Apotheke betreten.
        </p>

        <Link
          href="/blog/digital-signage-apotheke"
          className="text-blue-600 font-semibold"
        >
          → Mehr zu Digital Signage für Apotheken
        </Link>

        <h2 className="text-3xl font-bold">
          Google Unternehmensprofil optimieren
        </h2>

        <p>
          Viele Kunden suchen nach „Apotheke in der Nähe“. Wenn Ihr Google
          Profil optimiert ist, werden Sie genau in diesen Momenten gefunden.
        </p>

        <ul className="list-disc pl-6 space-y-3">
          <li>Aktuelle Öffnungszeiten</li>
          <li>Gute Bewertungen</li>
          <li>Regelmäßige Beiträge</li>
        </ul>

        <h2 className="text-3xl font-bold">
          Website & SEO für Apotheken
        </h2>

        <p>
          Eine moderne Website ist die Basis für Vertrauen. Kunden informieren
          sich online und entscheiden oft innerhalb weniger Sekunden.
        </p>

        <p>
          SEO sorgt dafür, dass Ihre Apotheke bei Google gefunden wird – z. B.
          bei Suchanfragen wie „Apotheke Berlin“ oder „Apotheke in der Nähe“.
        </p>

        <h2 className="text-3xl font-bold">
          Lokale Vorteile in Berlin nutzen
        </h2>

        <p>
          Berlin bietet viele Chancen: hohe Laufkundschaft, viele Touristen und
          eine große Nachfrage nach Gesundheitsleistungen.
        </p>

        <p>
          Wer diese Faktoren richtig nutzt, kann sich klar von der Konkurrenz
          abheben.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-[#f4fbf9] px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Digitale Kommunikation für Ihre Apotheke in Berlin
        </h2>

        <p className="mt-4 text-slate-600">
          Lassen Sie uns gemeinsam Ihre Marketingstrategie optimieren.
        </p>

        <a
          href="/kontakt"
          className="mt-8 inline-block rounded-xl bg-teal-700 px-8 py-4 font-semibold text-white hover:bg-teal-800"
        >
          Beratung anfragen
        </a>
      </section>

    </main>
  );
}
