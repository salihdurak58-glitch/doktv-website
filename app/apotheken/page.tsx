import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ApothekenPage() {
  return (
    <main className="min-h-screen bg-[#f7fafb] text-[#334c59]">
      <Header />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#6fa8b0] shadow-sm">
            Digital Signage für Apotheken
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Machen Sie Ihr Apotheken-Schaufenster digital sichtbar.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5d737d]">
            DokTV installiert moderne Displays im Schaufenster Ihrer Apotheke
            und macht Angebote, Aktionen, Notdienstinformationen und Leistungen
            sichtbar für Laufkundschaft.
          </p>

          <a
            href="/kontakt"
            className="mt-10 inline-flex rounded-full bg-[#334c59] px-7 py-4 font-semibold text-white"
          >
            Beratung anfragen
          </a>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-[#334c59]/10">
          <div className="rounded-[1.5rem] bg-[#334c59] p-8 text-white">
            <p className="text-sm font-semibold text-[#9fd0d6]">
              Schaufenster Display
            </p>
            <h2 className="mt-6 text-4xl font-bold">
              Angebote sichtbar machen
            </h2>
            <p className="mt-4 text-white/80">
              Digital statt Papierplakat: aktuelle Inhalte, modern präsentiert
              und jederzeit austauschbar.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold tracking-tight">
            Warum Digital Signage für Apotheken?
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5d737d]">
            Viele Apotheken haben starke Angebote und wichtige Informationen,
            aber sie werden von außen kaum wahrgenommen. Ein digitales
            Schaufenster-Display sorgt dafür, dass Laufkundschaft Ihre Inhalte
            direkt sieht.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-4xl font-bold tracking-tight">
          Inhalte für Ihr Apotheken-Display
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            "aktuelle Angebote",
            "Aktionen",
            "Notdienstinformationen",
            "saisonale Gesundheitskampagnen",
            "Produktinformationen",
            "Öffnungszeiten",
            "Apothekenleistungen",
            "Herstellerkampagnen",
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