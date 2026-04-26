import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Digital Signage Apotheke: Vorteile, Einsatz & Beispiele | DokTV",
  description:
    "Digital Signage für Apotheken erklärt: Vorteile, Einsatzbereiche und warum digitale Displays die Kundenansprache am Point of Sale verbessern.",
  alternates: {
    canonical: "https://doktv.de/blog/digital-signage-apotheke",
  },
};

export default function BlogDigitalSignageApotheke() {
  return (
    <main className="bg-[#f7fafb] text-[#334c59]">
      <Header />

      <article className="mx-auto max-w-4xl px-6 py-24">
        <p className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#6fa8b0] shadow-sm">
          Digital Signage
        </p>

        <h1 className="text-5xl font-bold leading-tight">
          Digital Signage für Apotheken: Warum digitale Displays wirken
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#5d737d]">
          Digital Signage hilft Apotheken dabei, Kunden moderner zu informieren,
          Angebote sichtbarer zu machen und pharmazeutische Beratung digital zu
          unterstützen.
        </p>

        <h2 className="mt-14 text-3xl font-bold">
          Was bedeutet Digital Signage in der Apotheke?
        </h2>

        <p className="mt-5 leading-8 text-[#5d737d]">
          Digital Signage beschreibt den Einsatz digitaler Bildschirme zur
          Anzeige von Informationen, Angeboten und Kampagnen. In Apotheken
          können solche Displays im Schaufenster, im Verkaufsraum oder im
          Wartebereich eingesetzt werden.
        </p>

        <h2 className="mt-14 text-3xl font-bold">
          Vorteile für Apotheken
        </h2>

        <ul className="mt-5 grid gap-4 leading-8 text-[#5d737d]">
          <li>• bessere Sichtbarkeit im Schaufenster</li>
          <li>• flexible Bewerbung saisonaler Produkte</li>
          <li>• professionelle Darstellung von Gesundheitsinformationen</li>
          <li>• einfache Aktualisierung von Inhalten</li>
          <li>• zusätzliche Werbefläche für Herstellerkampagnen</li>
        </ul>

        <h2 className="mt-14 text-3xl font-bold">
          Warum DokTV?
        </h2>

        <p className="mt-5 leading-8 text-[#5d737d]">
          DokTV entwickelt Digital-Signage-Lösungen speziell für Apotheken,
          Arztpraxen und Pharma-Unternehmen. Dadurch passen Technik, Inhalte und
          Werbeflächen zum Gesundheitsmarkt – statt nur ein allgemeines
          Display-System zu sein.
        </p>

        <div className="mt-12 rounded-3xl bg-white p-8 shadow-lg shadow-[#334c59]/5">
          <h2 className="text-2xl font-bold">
            Interesse an Digital Signage für Ihre Apotheke?
          </h2>

          <p className="mt-4 leading-7 text-[#5d737d]">
            Wir beraten Sie zur passenden Lösung für Standort, Schaufenster und
            Content-Strategie.
          </p>

          <a
            href="/kontakt"
            className="mt-6 inline-block rounded-full bg-[#334c59] px-8 py-4 font-semibold text-white"
          >
            Beratung anfragen
          </a>
        </div>
      </article>

      <Footer />
    </main>
  );
}