import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Werbung Apotheke Display – Digitale Schaufensterwerbung | DokTV",
  description:
    "Digitale Display-Werbung für Apotheken. Angebote, Aktionen und Produktwerbung sichtbar im Apotheken-Schaufenster präsentieren.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f7fafb] text-[#334c59]">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          Werbung auf Displays in Apotheken.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5d737d]">
          Mit DokTV wird Werbung in Apotheken digital sichtbar. Angebote,
          Aktionen und Herstellerkampagnen erscheinen auf modernen Displays im
          Schaufenster oder im Innenbereich.
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
            Warum Display-Werbung in Apotheken funktioniert.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#5d737d]">
            Apotheken sind Orte mit hoher Aufmerksamkeit und Vertrauen.
            Menschen beschäftigen sich dort mit Gesundheit, Pflege und
            Prävention. Digitale Displays machen Werbung sichtbar, modern und
            flexibel.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#5d737d]">
            DokTV verbindet Apotheken, Arztpraxen und Hersteller über ein
            digitales Werbenetzwerk im Gesundheitsbereich.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold">
          Geeignet für Apotheken und Hersteller
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            "Angebote im Apotheken-Schaufenster",
            "Produktwerbung von Herstellern",
            "saisonale Kampagnen",
            "Kosmetik- und Pflegeprodukte",
            "Nahrungsergänzungsmittel",
            "Gesundheitsaktionen",
            "Notdienstinformationen",
            "digitale Kundenansprache",
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
            Starten Sie digitale Apothekenwerbung mit DokTV.
          </h2>

          <p className="mt-6 text-lg text-white/80">
            Lassen Sie sich beraten und erfahren Sie, welche Display-Lösung zu
            Ihrer Apotheke oder Kampagne passt.
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