import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HerstellerPage() {
  return (
    <main className="min-h-screen bg-[#f7fafb] text-[#334c59]">
      <Header />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#6fa8b0] shadow-sm">
            Werbung in Apotheken & Arztpraxen
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Werben Sie dort, wo Gesundheitsentscheidungen entstehen.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5d737d]">
            Mit DokTV platzieren Hersteller, Marken und Dienstleister ihre
            Produktwerbung direkt auf digitalen Displays in Apotheken und
            Arztpraxen.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/standorte"
              className="rounded-full bg-[#334c59] px-7 py-4 text-center font-semibold text-white"
            >
              Standorte auswählen
            </a>

            <a
              href="/kontakt"
              className="rounded-full border border-[#334c59]/20 bg-white px-7 py-4 text-center font-semibold text-[#334c59]"
            >
              Kampagne anfragen
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-[#334c59]/10">
          <div className="rounded-[1.5rem] bg-[#334c59] p-8 text-white">
            <p className="text-sm font-semibold text-[#9fd0d6]">
              Gesundheitswerbung
            </p>
            <h2 className="mt-6 text-4xl font-bold">
              Direkt im relevanten Umfeld
            </h2>
            <p className="mt-4 text-white/80">
              Ihre Marke wird sichtbar in Apotheken und Praxen – an Orten mit
              hoher Aufmerksamkeit und Relevanz.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-4xl font-bold tracking-tight">
          Geeignet für diese Branchen
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            "Kosmetikhersteller",
            "Nahrungsergänzungsmittel",
            "OTC-Produkte",
            "Gesundheitsprodukte",
            "Pflegeprodukte",
            "medizinische Dienstleistungen",
            "lokale Unternehmen mit Gesundheitsbezug",
            "Apotheken- und Praxispartner",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white p-5 font-semibold shadow-lg shadow-[#334c59]/5"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}