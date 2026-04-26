import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Digital Signage Apotheke Berlin | DokTV",
  description:
    "DokTV bietet Digital Signage, Schaufenster-Displays und digitale Werbung für Apotheken, Arztpraxen und Pharma-Unternehmen in Berlin.",
  alternates: {
    canonical: "https://doktv.de/digital-signage-apotheke-berlin",
  },
};

export default function DigitalSignageBerlinPage() {
  return (
    <main className="bg-[#f7fafb] text-[#334c59]">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#6fa8b0] shadow-sm">
          Digital Signage Berlin
        </p>

        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          Digital Signage für Apotheken in Berlin
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5d737d]">
          DokTV unterstützt Apotheken, Arztpraxen und Pharma-Unternehmen in
          Berlin mit modernen Schaufenster-Displays, digitaler Werbung und
          zentral steuerbaren Inhalten direkt am Point of Sale.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/kontakt"
            className="rounded-full bg-[#334c59] px-8 py-4 font-semibold text-white"
          >
            Kostenlose Beratung anfragen
          </a>

          <a
            href="/leistungen"
            className="rounded-full bg-white px-8 py-4 font-semibold text-[#334c59] shadow"
          >
            Leistungen ansehen
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-8 shadow-lg shadow-[#334c59]/5">
          <h2 className="text-2xl font-bold">Mehr Sichtbarkeit</h2>
          <p className="mt-4 leading-7 text-[#5d737d]">
            Digitale Schaufenster-Displays machen Ihre Apotheke in Berlin
            sichtbarer – auch außerhalb der Öffnungszeiten.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg shadow-[#334c59]/5">
          <h2 className="text-2xl font-bold">Bessere Kundenansprache</h2>
          <p className="mt-4 leading-7 text-[#5d737d]">
            Informieren Sie Kunden direkt vor Ort über Angebote, Services,
            Gesundheitsaktionen und saisonale Kampagnen.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg shadow-[#334c59]/5">
          <h2 className="text-2xl font-bold">Zentrale Steuerung</h2>
          <p className="mt-4 leading-7 text-[#5d737d]">
            Inhalte können flexibel angepasst werden – ideal für Apothekenketten,
            Einzelapotheken und Herstellerkampagnen.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-4xl font-bold">
          Warum Digital Signage für Berliner Apotheken sinnvoll ist
        </h2>

        <p className="mt-6 leading-8 text-[#5d737d]">
          Berlin ist ein wettbewerbsintensiver Standort für Apotheken,
          Arztpraxen und Gesundheitsdienstleister. Wer lokal sichtbar sein will,
          braucht nicht nur eine gute Website, sondern auch eine starke
          Außenwirkung vor Ort. Genau hier setzt Digital Signage an:
          Schaufenster-Displays ziehen Aufmerksamkeit auf sich, erklären
          Angebote verständlich und bringen digitale Kommunikation direkt an den
          Verkaufsort.
        </p>

        <p className="mt-6 leading-8 text-[#5d737d]">
          DokTV verbindet moderne Display-Technik mit pharmazeutischem
          Verständnis. Dadurch entstehen Lösungen, die nicht nur optisch stark
          wirken, sondern auch zum Alltag in Apotheken passen: wechselnde
          Kampagnen, saisonale Inhalte, Herstelleraktionen und lokale
          Informationen können professionell ausgespielt werden.
        </p>

        <h2 className="mt-14 text-3xl font-bold">
          Typische Einsatzbereiche
        </h2>

        <ul className="mt-6 grid gap-4 text-[#5d737d]">
          <li>• Schaufenster-Werbung für Apotheken in Berlin</li>
          <li>• Digitale Angebotsflächen für OTC-Produkte</li>
          <li>• Kampagnen für Pharma-Hersteller</li>
          <li>• Digitale Patienteninformation in Arztpraxen</li>
          <li>• Content-Steuerung für mehrere Standorte</li>
        </ul>

        <h2 className="mt-14 text-3xl font-bold">
          Externe Ressourcen
        </h2>

        <p className="mt-6 leading-8 text-[#5d737d]">
          Für lokale Sichtbarkeit ist zusätzlich ein gepflegtes Google
          Unternehmensprofil wichtig. Google empfiehlt Unternehmen, ihre
          Standort-, Kontakt- und Unternehmensinformationen aktuell zu halten.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://business.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-6 py-3 font-semibold text-[#334c59] shadow"
          >
            Google Unternehmensprofil
          </a>

          <a
            href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-6 py-3 font-semibold text-[#334c59] shadow"
          >
            Google SEO Starter Guide
          </a>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-center">
        <h2 className="text-4xl font-bold">
          Digital Signage für Ihre Apotheke in Berlin?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#5d737d]">
          Lassen Sie uns gemeinsam prüfen, welche Lösung zu Ihrem Standort,
          Ihrem Schaufenster und Ihren Zielen passt.
        </p>

        <a
          href="/kontakt"
          className="mt-8 inline-block rounded-full bg-[#334c59] px-8 py-4 font-semibold text-white"
        >
          Jetzt Beratung anfragen
        </a>
      </section>

      <Footer />
    </main>
  );
}