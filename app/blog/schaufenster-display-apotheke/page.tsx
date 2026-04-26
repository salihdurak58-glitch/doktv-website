import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Schaufenster Display Apotheke: Mehr Sichtbarkeit | DokTV",
  description:
    "Ein Schaufenster-Display macht Apotheken sichtbarer, moderner und aufmerksamkeitsstärker. DokTV erklärt Vorteile und Einsatzbereiche.",
  alternates: {
    canonical: "https://doktv.de/blog/schaufenster-display-apotheke",
  },
};

export default function BlogSchaufensterDisplayApotheke() {
  return (
    <main className="bg-[#f7fafb] text-[#334c59]">
      <Header />

      <article className="mx-auto max-w-4xl px-6 py-24">
        <p className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#6fa8b0] shadow-sm">
          Schaufenster Display
        </p>

        <h1 className="text-5xl font-bold leading-tight">
          Schaufenster-Display für Apotheken: Mehr Sichtbarkeit am Standort
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#5d737d]">
          Das Apothekenschaufenster ist eine der wichtigsten lokalen
          Werbeflächen. Mit einem digitalen Display wird es flexibler,
          auffälliger und wirtschaftlicher nutzbar.
        </p>

        <h2 className="mt-14 text-3xl font-bold">
          Warum das Schaufenster so wichtig ist
        </h2>

        <p className="mt-5 leading-8 text-[#5d737d]">
          Viele potenzielle Kunden laufen täglich an Apotheken vorbei, ohne den
          Verkaufsraum zu betreten. Ein digitales Schaufenster-Display kann
          diese Aufmerksamkeit nutzen und gezielt auf Angebote, Services oder
          Gesundheitsaktionen hinweisen.
        </p>

        <h2 className="mt-14 text-3xl font-bold">
          Einsatzmöglichkeiten
        </h2>

        <ul className="mt-5 grid gap-4 leading-8 text-[#5d737d]">
          <li>• Bewerbung saisonaler Produkte</li>
          <li>• Hinweise auf Impfaktionen oder Services</li>
          <li>• Herstellerkampagnen im Sichtbereich der Kunden</li>
          <li>• Notdienst- und Serviceinformationen</li>
          <li>• Image-Kommunikation für moderne Apotheken</li>
        </ul>

        <h2 className="mt-14 text-3xl font-bold">
          Vorteile gegenüber Plakaten
        </h2>

        <p className="mt-5 leading-8 text-[#5d737d]">
          Klassische Plakate müssen gedruckt, geliefert und ausgetauscht werden.
          Digitale Displays lassen sich schneller aktualisieren und können
          mehrere Inhalte nacheinander anzeigen. Das spart Aufwand und schafft
          mehr Flexibilität.
        </p>

        <div className="mt-12 rounded-3xl bg-white p-8 shadow-lg shadow-[#334c59]/5">
          <h2 className="text-2xl font-bold">
            Schaufenster digitalisieren?
          </h2>

          <p className="mt-4 leading-7 text-[#5d737d]">
            DokTV berät Sie zu Display-Größe, Standort, Content und technischer
            Umsetzung.
          </p>

          <a
            href="/kontakt"
            className="mt-6 inline-block rounded-full bg-[#334c59] px-8 py-4 font-semibold text-white"
          >
            Jetzt Kontakt aufnehmen
          </a>
        </div>
      </article>

      <Footer />
    </main>
  );
}