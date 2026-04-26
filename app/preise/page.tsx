import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PreisePage() {
  return (
    <main className="min-h-screen bg-[#f7fafb] text-[#334c59]">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#6fa8b0] shadow-sm">
          Preise & Buchung
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Flexible Preise nach Standort und Laufzeit.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5d737d]">
          Bei DokTV wählen Sie gezielt die Standorte aus, an denen Ihre Werbung
          laufen soll. Die Preise sehen Sie direkt im Standortfinder.
        </p>

        <a
          href="/standorte"
          className="mt-10 inline-flex rounded-full bg-[#334c59] px-8 py-4 font-semibold text-white"
        >
          Standortfinder öffnen
        </a>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
          <div className="rounded-3xl bg-[#f7fafb] p-8">
            <h2 className="text-2xl font-bold">Monatlich buchen</h2>
            <p className="mt-4 text-[#5d737d]">
              Ideal für Kampagnen, Tests oder flexible Werbeaktionen.
            </p>
          </div>

          <div className="rounded-3xl bg-[#f7fafb] p-8">
            <h2 className="text-2xl font-bold">Jährlich buchen</h2>
            <p className="mt-4 text-[#5d737d]">
              Ideal für langfristige Sichtbarkeit im Gesundheitsumfeld.
            </p>
          </div>

          <div className="rounded-3xl bg-[#f7fafb] p-8">
            <h2 className="text-2xl font-bold">Standortabhängig</h2>
            <p className="mt-4 text-[#5d737d]">
              Preise richten sich nach Standort, Sichtbarkeit und Werbeplatz.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}