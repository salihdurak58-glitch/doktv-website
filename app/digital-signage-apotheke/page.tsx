import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Digital Signage Apotheke – Digitale Displays mit DokTV",
  description:
    "Digital Signage für Apotheken: Angebote, Aktionen, Notdienstinformationen und Gesundheitskampagnen digital im Schaufenster anzeigen.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f7fafb] text-[#334c59]">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          Digital Signage für Apotheken.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5d737d]">
          Mit DokTV zeigen Apotheken Angebote, Aktionen, Notdienstinformationen
          und Gesundheitskampagnen digital im Schaufenster – modern, sichtbar
          und jederzeit aktualisierbar.
        </p>

        <a
          href="/kontakt"
          className="mt-10 inline-flex rounded-full bg-[#334c59] px-8 py-4 font-semibold text-white"
        >
          Beratung anfragen
        </a>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold">
            Warum Digital Signage in der Apotheke sinnvoll ist.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#5d737d]">
            Apotheken haben täglich Kontakt zu Laufkundschaft. Digitale Displays
            helfen dabei, wichtige Inhalte auffällig und professionell sichtbar
            zu machen. Statt statischer Plakate können Inhalte flexibel geändert
            und gezielt ausgespielt werden.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#5d737d]">
            DokTV übernimmt dabei die technische Umsetzung, die Darstellung der
            Inhalte und auf Wunsch auch die kostenlose Erstellung passender
            Werbespots.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold">
          Typische Inhalte auf Apotheken-Displays
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            "aktuelle Angebote",
            "saisonale Aktionen",
            "Notdienstinformationen",
            "Gesundheitshinweise",
            "Produktwerbung",
            "Öffnungszeiten",
            "Apothekenleistungen",
            "Herstellerkampagnen",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white p-6 shadow-lg shadow-[#334c59]/5"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#334c59] py-24 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-4xl font-bold">
            Machen Sie Ihre Apotheke digital sichtbar.
          </h2>

          <p className="mt-6 text-lg text-white/80">
            Lassen Sie sich beraten und erfahren Sie, wie DokTV Ihr
            Apotheken-Schaufenster modernisiert.
          </p>

          <a
            href="/kontakt"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-[#334c59]"
          >
            Jetzt anfragen
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}