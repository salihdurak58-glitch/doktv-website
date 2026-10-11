import Link from "next/link";
import { publicPageMetadata } from "../../../lib/seo/public-metadata";

export const metadata = publicPageMetadata(
  "/blog/digital-signage-apotheke",
  "Digital Signage in der Apotheke: Einsatz & Inhalte | DokTV",
  "Wie Apotheken digitale Displays für Schaufenster, Angebote und Informationen nutzen können – mit Hinweisen zu Inhalten, Platzierung und Betreuung.",
  "/referenzen/sky-apotheke-wedding-2.jpg",
  "article",
);

export default function Page() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section className="page-hero px-6 py-20 text-slate-900">
        <div className="max-w-5xl mx-auto">
          <p className="mb-4 font-semibold text-teal-700">
            Digital Signage Apotheke Berlin
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Digital Signage für Apotheken: Displays sinnvoll einsetzen
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Moderne Apotheken setzen auf Digital Signage, um mehr Aufmerksamkeit
            zu erzeugen, Kunden gezielt anzusprechen und sich von der Konkurrenz
            abzuheben. Ein digitales Schaufenster-Display verwandelt Ihr Geschäft
            in einen echten Blickfang – rund um die Uhr.
          </p>
        </div>
      </section>

      {/* EINLEITUNG */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-6 text-lg leading-8">
        <p>
          In einer Stadt wie Berlin reicht es nicht mehr aus, einfach nur eine
          gute Lage zu haben. Kunden entscheiden oft innerhalb weniger Sekunden,
          ob sie ein Geschäft betreten oder weitergehen. Genau hier spielt das
          Schaufenster eine entscheidende Rolle.
        </p>

        <p>
          Klassische Plakate wirken schnell veraltet und werden häufig
          übersehen. Ein digitales Display hingegen zieht automatisch Blicke an,
          vermittelt Professionalität und zeigt Inhalte, die sich jederzeit
          anpassen lassen.
        </p>

        <p>
          Digital Signage kann die Kommunikation am Standort ergänzen.
          Entscheidend sind eine passende Platzierung, gut lesbare Inhalte und
          eine verlässliche Betreuung im laufenden Betrieb.
        </p>
      </section>

      {/* VORTEILE */}
      <section className="bg-slate-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">
            Vorteile von Digital Signage für Apotheken
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Mehr Aufmerksamkeit im Schaufenster",
                text: "Bewegte Inhalte ziehen deutlich mehr Aufmerksamkeit auf sich als statische Werbung.",
              },
              {
                title: "Mehr Laufkundschaft",
                text: "Ein auffälliges Display erhöht die Wahrscheinlichkeit, dass Kunden Ihre Apotheke betreten.",
              },
              {
                title: "Moderne Außenwirkung",
                text: "Digitale Displays vermitteln Qualität und Professionalität.",
              },
              {
                title: "Flexible Inhalte",
                text: "Angebote und Aktionen können jederzeit angepasst werden.",
              },
              {
                title: "Werbung 24/7",
                text: "Auch außerhalb der Öffnungszeiten bleibt Ihr Geschäft sichtbar.",
              },
              {
                title: "Stärkere Kaufimpulse",
                text: "Gezielte Inhalte fördern spontane Kaufentscheidungen.",
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
          Warum Digital Signage in Apotheken so gut funktioniert
        </h2>

        <p>
          Menschen reagieren stark auf Bewegung und visuelle Reize. Genau
          deshalb funktionieren digitale Displays so gut. Während klassische
          Plakate oft ignoriert werden, sorgt ein Bildschirm automatisch dafür,
          dass Passanten hinschauen.
        </p>

        <p>
          Für Apotheken kann das Schaufenster damit mehr Raum für wechselnde
          Angebote und Informationen bieten. Wie gut das funktioniert, hängt
          vom Standort, der Gestaltung und den Inhalten ab.
        </p>

        <h2 className="text-3xl font-bold">
          Die besten Inhalte für ein Apotheken Display
        </h2>

        <ul className="list-disc pl-6 space-y-3">
          <li>Angebote und Rabattaktionen</li>
          <li>Gesundheitstipps und Kampagnen</li>
          <li>Saisonale Produkte</li>
          <li>Kosmetik und Pflegeprodukte</li>
          <li>Serviceleistungen (z. B. Impfungen, Beratung)</li>
        </ul>

        <p>
          Wichtig ist, dass Inhalte regelmäßig aktualisiert werden. Nur so
          bleibt das Display interessant und wirkt lebendig.
        </p>

        <h2 className="text-3xl font-bold">
          Digital Signage in Berlin: Wettbewerbsvorteil für Apotheken
        </h2>

        <p>
          In Berlin gibt es eine hohe Dichte an Apotheken. Wer hier auffallen
          möchte, braucht mehr als nur gute Produkte. Ein modernes
          Schaufenster-Display kann den entscheidenden Unterschied machen.
        </p>

        <p>
          Kunden nehmen Ihre Apotheke als moderner, professioneller und
          vertrauenswürdiger wahr. Das wirkt sich direkt auf die
          Kaufentscheidung aus.
        </p>

        <h2 className="text-3xl font-bold">
          Kombination mit Online Marketing
        </h2>

        <p>
          Die besten Ergebnisse erzielen Apotheken, die Digital Signage mit
          einer starken Online-Präsenz kombinieren.
        </p>

        <ul className="list-disc pl-6 space-y-3">
          <li>Google Unternehmensprofil</li>
          <li>SEO optimierte Website</li>
          <li>Lokale Suchmaschinenoptimierung</li>
        </ul>

        <p>
          Dadurch entsteht eine durchgängige Sichtbarkeit – online und offline.
        </p>
      </section>

      {/* INTERNE LINKS */}
      <section className="bg-[#e9f9f6] px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Weitere Themen rund um Apotheken Marketing
          </h2>

          <div className="space-y-4">
            <Link href="/apotheken" className="block font-semibold text-teal-700 hover:underline">
              → DokTV-Lösung: Digital Signage für Apotheken
            </Link>
            <Link
              href="/blog/schaufenster-display-apotheke"
              className="block text-teal-700 hover:underline"
            >
              → Schaufenster Display Apotheke
            </Link>

            <Link
              href="/blog/apotheken-marketing-berlin"
              className="block text-teal-700 hover:underline"
            >
              → Apotheken Marketing Berlin
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-6">
        <h2 className="text-3xl font-bold">
          Häufige Fragen zu Digital Signage Apotheken
        </h2>

        <div>
          <h3 className="font-semibold">
            Was kostet ein Display für Apotheken?
          </h3>
          <p>
            Die Kosten hängen von Größe, Standort und Anforderungen ab.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">
            Lohnt sich Digital Signage wirklich?
          </h3>
          <p>
            Ja, da es die Aufmerksamkeit und Kundenfrequenz deutlich erhöht.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f4fbf9] px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Jetzt Digital Signage für Ihre Apotheke starten
        </h2>

        <p className="mt-4 text-slate-600">
          Lassen Sie sich kostenlos zu Platzierung, Inhalten und Betreuung beraten.
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
