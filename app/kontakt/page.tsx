import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#f7fafb] text-[#334c59]">

      <Header />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          Digital Signage für Apotheken & Arztpraxen
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-[#5d737d]">
          Mit DokTV steigern Sie Ihre Sichtbarkeit, informieren Kunden digital
          und erhöhen Ihren Umsatz direkt am Point of Sale – durch moderne
          Schaufenster-Displays und gezieltes Pharma Marketing.
        </p>

        <div className="mt-10">
          <a
            href="/kontakt"
            className="rounded-full bg-[#334c59] px-8 py-4 text-white font-semibold"
          >
            Jetzt Beratung anfragen
          </a>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-6 py-20 grid gap-10 md:grid-cols-3">
        <div className="bg-white p-8 rounded-2xl shadow">
          <h3 className="text-xl font-bold">Mehr Umsatz</h3>
          <p className="mt-4 text-[#5d737d]">
            Digitale Displays steigern nachweislich Kaufentscheidungen direkt im
            Verkaufsraum und erhöhen die Aufmerksamkeit für Produkte.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow">
          <h3 className="text-xl font-bold">Moderne Kundenansprache</h3>
          <p className="mt-4 text-[#5d737d]">
            Kunden informieren sich heute digital – auch in der Apotheke. Nutzen
            Sie moderne Kommunikationswege direkt vor Ort.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow">
          <h3 className="text-xl font-bold">Zentrale Steuerung</h3>
          <p className="mt-4 text-[#5d737d]">
            Inhalte können zentral verwaltet und jederzeit angepasst werden –
            ohne zusätzlichen Aufwand im Alltag.
          </p>
        </div>
      </section>

      {/* SEO TEXT BLOCK */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-bold">
          Digital Signage Lösungen für Apotheken in Deutschland
        </h2>

        <p className="mt-6 text-[#5d737d] leading-7">
          Die Digitalisierung im Gesundheitswesen verändert das Verhalten von
          Patienten und Kunden. Immer mehr Menschen informieren sich online über
          Medikamente, Symptome und Angebote, bevor sie eine Apotheke betreten.
          Eine starke digitale Präsenz ist daher entscheidend, um langfristig
          wettbewerbsfähig zu bleiben. :contentReference[oaicite:1]{index=1}
        </p>

        <p className="mt-6 text-[#5d737d] leading-7">
          Mit Digital Signage für Apotheken schaffen Sie eine direkte Verbindung
          zwischen Online-Information und dem Point of Sale. Moderne Displays
          ermöglichen es, Produkte, Angebote und Informationen genau im richtigen
          Moment zu präsentieren – direkt im Blickfeld Ihrer Kunden. :contentReference[oaicite:2]{index=2}
        </p>

        <p className="mt-6 text-[#5d737d] leading-7">
          Gleichzeitig verbessert eine optimierte Website mit den richtigen
          Keywords wie „Apotheke Werbung“, „Digital Signage Apotheke“ oder
          „Schaufenster Display Apotheke“ Ihre Auffindbarkeit bei Google und sorgt
          für mehr Anfragen und Kundenkontakte.
        </p>
      </section>

      {/* LEISTUNGEN */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          Unsere Leistungen
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="font-bold">Schaufenster Displays</h3>
            <p className="mt-4 text-[#5d737d]">
              Hochauflösende Displays für maximale Sichtbarkeit – auch bei
              Sonnenlicht.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="font-bold">Content Management</h3>
            <p className="mt-4 text-[#5d737d]">
              Zentrale Steuerung aller Inhalte für maximale Effizienz.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="font-bold">Pharma Marketing</h3>
            <p className="mt-4 text-[#5d737d]">
              Zielgerichtete Kampagnen für Hersteller und Apotheken.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-white">
        <h2 className="text-3xl font-bold">
          Bereit für mehr Sichtbarkeit?
        </h2>

        <p className="mt-4 text-[#5d737d]">
          Lassen Sie uns gemeinsam Ihre Apotheke digital nach vorne bringen.
        </p>

        <a
          href="/kontakt"
          className="inline-block mt-8 rounded-full bg-[#334c59] px-8 py-4 text-white font-semibold"
        >
          Jetzt unverbindlich anfragen
        </a>
      </section>

      <Footer />
    </main>
  );
}