import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title:
    "Schaufenster Display Apotheke: Mehr Kunden durch digitale Werbung",
  description:
    "Warum ein Schaufenster Display für Apotheken der Schlüssel zu mehr Aufmerksamkeit und Laufkundschaft ist.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-900">
      <Header />

      {/* HERO */}
      <section className="bg-slate-950 text-white px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-400 font-semibold mb-4">
            Schaufenster Display Apotheke
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Schaufenster Display für Apotheken: Mehr Sichtbarkeit direkt am Standort
          </h1>

          <p className="mt-6 text-lg text-slate-300 leading-8">
            Das Schaufenster ist die wichtigste Werbefläche jeder Apotheke.
            Mit einem digitalen Display verwandeln Sie diesen Bereich in einen
            echten Blickfang und erreichen mehr Kunden – jeden Tag.
          </p>
        </div>
      </section>

      {/* EINLEITUNG */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-6 text-lg leading-8">
        <p>
          Viele Apotheken unterschätzen das Potenzial ihres Schaufensters.
          Dabei entscheidet sich genau dort, ob ein Kunde stehen bleibt oder
          weitergeht. Klassische Plakate wirken oft statisch und werden schnell
          übersehen.
        </p>

        <p>
          Ein Schaufenster Display hingegen bringt Bewegung, Licht und Dynamik
          ins Spiel. Inhalte wechseln automatisch, Botschaften werden klar
          transportiert und Ihre Apotheke wirkt sofort moderner.
        </p>

        <p>
          Gerade in Städten wie Berlin, wo Konkurrenz und Laufkundschaft hoch
          sind, kann ein digitales Display den entscheidenden Unterschied
          machen.
        </p>
      </section>

      {/* VORTEILE */}
      <section className="bg-slate-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">
            Warum ein Schaufenster Display für Apotheken so effektiv ist
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Maximale Aufmerksamkeit",
                text: "Bewegte Inhalte fallen sofort auf und ziehen Blicke an.",
              },
              {
                title: "Mehr spontane Kunden",
                text: "Ein gutes Display sorgt dafür, dass Passanten Ihre Apotheke betreten.",
              },
              {
                title: "Stärkere Markenwirkung",
                text: "Ihre Apotheke wirkt moderner und professioneller.",
              },
              {
                title: "Flexible Werbung",
                text: "Inhalte können jederzeit geändert werden.",
              },
              {
                title: "Keine Druckkosten",
                text: "Keine Plakate mehr drucken oder austauschen.",
              },
              {
                title: "24/7 sichtbar",
                text: "Werbung läuft auch außerhalb der Öffnungszeiten.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-2xl shadow">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-10 text-lg leading-8">
        <h2 className="text-3xl font-bold">
          Warum das Schaufenster über Erfolg entscheidet
        </h2>

        <p>
          Das Schaufenster ist oft der erste Kontaktpunkt zwischen Apotheke und
          Kunde. Innerhalb weniger Sekunden entsteht ein Eindruck, der darüber
          entscheidet, ob jemand stehen bleibt oder weitergeht.
        </p>

        <p>
          Ein statisches Plakat kann diese Aufmerksamkeit kaum halten. Ein
          digitales Display hingegen sorgt durch Bewegung und wechselnde Inhalte
          dafür, dass Menschen hinschauen.
        </p>

        <h2 className="text-3xl font-bold">
          Welche Inhalte im Schaufenster funktionieren
        </h2>

        <ul className="list-disc pl-6 space-y-3">
          <li>Angebote und Rabatte</li>
          <li>Saisonale Produkte (z. B. Allergie, Erkältung)</li>
          <li>Gesundheitstipps</li>
          <li>Kosmetik & Pflegeprodukte</li>
          <li>Serviceleistungen</li>
        </ul>

        <p>
          Wichtig ist eine klare Struktur. Zu viele Informationen überfordern
          den Betrachter. Wenige, starke Botschaften funktionieren deutlich
          besser.
        </p>

        <h2 className="text-3xl font-bold">
          Schaufenster Display in Berlin: Wettbewerbsvorteil nutzen
        </h2>

        <p>
          In Berlin konkurrieren viele Apotheken um die Aufmerksamkeit der
          Kunden. Wer auffällt, gewinnt. Ein digitales Display sorgt dafür,
          dass Ihre Apotheke sichtbar bleibt.
        </p>

        <p>
          Besonders in stark frequentierten Lagen kann ein Display die
          Kundenfrequenz deutlich erhöhen.
        </p>

        <h2 className="text-3xl font-bold">
          Kombination mit Digital Signage Strategie
        </h2>

        <p>
          Ein einzelnes Display ist gut – eine Strategie ist besser. Kombinieren
          Sie Ihr Schaufenster mit weiteren Maßnahmen:
        </p>

        <ul className="list-disc pl-6 space-y-3">
          <li>Website mit SEO</li>
          <li>Google Unternehmensprofil</li>
          <li>Gezielte Kampagnen</li>
        </ul>

        <p>
          So entsteht eine starke Gesamtwirkung, die Kunden sowohl online als
          auch offline erreicht.
        </p>
      </section>

      {/* INTERNE LINKS */}
      <section className="bg-slate-950 text-white px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Weitere Artikel
          </h2>

          <div className="space-y-4">
            <Link
              href="/blog/digital-signage-apotheke"
              className="block text-blue-400 hover:underline"
            >
              → Digital Signage Apotheke
            </Link>

            <Link
              href="/blog/apotheken-marketing-berlin"
              className="block text-blue-400 hover:underline"
            >
              → Apotheken Marketing Berlin
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-6">
        <h2 className="text-3xl font-bold">
          FAQ Schaufenster Display Apotheke
        </h2>

        <div>
          <h3 className="font-semibold">
            Lohnt sich ein Schaufenster Display?
          </h3>
          <p>
            Ja, da es deutlich mehr Aufmerksamkeit erzeugt als klassische Werbung.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">
            Welche Inhalte sollte ich zeigen?
          </h3>
          <p>
            Angebote, Aktionen und Gesundheitsinformationen funktionieren am besten.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white text-center py-20 px-6">
        <h2 className="text-3xl font-bold">
          Mach dein Schaufenster zum Kundenmagneten
        </h2>

        <p className="mt-4 text-blue-100">
          Lass dich kostenlos beraten und entdecke, wie ein Display deine Apotheke verändert.
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