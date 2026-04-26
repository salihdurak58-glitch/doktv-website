import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Apotheken Werbung Berlin – Digital Signage mit DokTV",
  description:
    "Moderne Werbung für Apotheken in Berlin. Mit DokTV erreichen Sie Ihre Laufkundschaft über digitale Displays im Schaufenster.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f7fafb] text-[#334c59]">
      <Header />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          Apotheken Werbung in Berlin sichtbar machen.
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-[#5d737d]">
          Mit DokTV nutzen Apotheken in Berlin digitale Displays im
          Schaufenster, um Angebote, Aktionen und Notdienste sichtbar zu
          machen – direkt für Laufkundschaft.
        </p>

        <a
          href="/kontakt"
          className="mt-10 inline-flex rounded-full bg-[#334c59] px-8 py-4 font-semibold text-white"
        >
          Beratung anfragen
        </a>
      </section>

      {/* SEO TEXT */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Warum digitale Werbung für Apotheken in Berlin?
        </h2>

        <p className="mt-6 text-lg leading-8 text-[#5d737d]">
          In Berlin ist die Konkurrenz unter Apotheken hoch. Klassische
          Schaufensterwerbung wird oft übersehen. Mit Digital Signage erreichen
          Sie Ihre Kunden direkt – modern, auffällig und jederzeit aktuell.
        </p>

        <p className="mt-6 text-lg leading-8 text-[#5d737d]">
          DokTV installiert Displays im Schaufensterbereich Ihrer Apotheke und
          spielt gezielt Inhalte aus: Angebote, Aktionen,
          Gesundheitsinformationen und Notdienste.
        </p>
      </section>

      {/* VORTEILE */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold">
          Vorteile von DokTV für Apotheken
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            "Mehr Sichtbarkeit für Laufkundschaft",
            "Digitale statt statische Werbung",
            "Inhalte jederzeit änderbar",
            "Moderne Präsentation Ihrer Apotheke",
            "Integration von Notdienst-Anzeigen",
            "Kostenlose Erstellung der Werbespots",
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

      {/* CTA */}
      <section className="bg-[#334c59] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Jetzt Apotheken Werbung in Berlin starten.
          </h2>

          <p className="mt-6 text-lg text-white/80">
            Lassen Sie sich kostenlos beraten und machen Sie Ihre Apotheke
            sichtbar.
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