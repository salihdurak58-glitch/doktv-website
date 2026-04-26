import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title:
    "Apotheken Marketing Berlin: Mehr Kunden durch Digital Signage & lokale Sichtbarkeit",
  description:
    "Strategien für Apotheken in Berlin: Mehr Kunden durch Digital Signage, Google Optimierung und lokale Sichtbarkeit.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-900">
      <Header />

      {/* HERO */}
      <section className="bg-slate-950 text-white px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-400 font-semibold mb-4">
            Apotheken Marketing Berlin
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Apotheken Marketing in Berlin: So gewinnen Sie mehr Kunden vor Ort
          </h1>

          <p className="mt-6 text-lg text-slate-300 leading-8">
            Der Wettbewerb unter Apotheken in Berlin ist hoch. Wer sichtbar ist,
            gewinnt. In diesem Artikel zeigen wir, wie Sie mit Digital Signage,
            Google Optimierung und modernen Marketingstrategien mehr Kunden
            erreichen.
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
          Eine Kombination aus Online-Sichtbarkeit und starker Präsenz vor Ort
          sorgt dafür, dass Sie mehr Kunden erreichen und langfristig wachsen.
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
      <section className="bg-blue-600 text-white text-center py-20 px-6">
        <h2 className="text-3xl font-bold">
          Mehr Kunden für Ihre Apotheke in Berlin
        </h2>

        <p className="mt-4 text-blue-100">
          Lassen Sie uns gemeinsam Ihre Marketingstrategie optimieren.
        </p>

        <a
          href="/kontakt"
          className="mt-8 inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold"
        >
          Beratung anfragen
        </a>
      </section>

      <Footer />
    </main>
  );
}