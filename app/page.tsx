import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7fafb] text-[#334c59]">
      <Header />

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#6fa8b0] shadow-sm">
            Digital Signage für den Gesundheitsbereich
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Digitale Sichtbarkeit für Apotheken, Arztpraxen und Hersteller.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5d737d]">
            DokTV bringt Angebote, Praxisinformationen und Produktwerbung auf
            moderne Displays – genau dort, wo Menschen Gesundheitsentscheidungen
            treffen.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/standorte"
              className="rounded-full bg-[#334c59] px-7 py-4 text-center font-semibold text-white"
            >
              Standortfinder öffnen
            </a>

            <a
              href="/kontakt"
              className="rounded-full border border-[#334c59]/20 bg-white px-7 py-4 text-center font-semibold text-[#334c59]"
            >
              Beratung anfragen
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-[#334c59]/10">
          <div className="rounded-[1.5rem] bg-[#334c59] p-6 text-white">
            <div className="mb-6 h-64 rounded-2xl bg-[#6fa8b0] p-6">
              <div className="flex h-full flex-col justify-between rounded-xl bg-white/15 p-5">
                <span className="text-sm font-semibold">Apotheke Berlin</span>
                <div>
                  <p className="text-3xl font-bold">Angebot der Woche</p>
                  <p className="mt-2 text-white/80">
                    Sichtbar im Schaufenster – digital, modern, aktuell.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-white/70">
              Schaufenster-Displays, Wartezimmer-TV und Werbeflächen für
              Hersteller.
            </p>
          </div>
        </div>
      </section>

      {/* WAS IST DOKTV */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Was ist DokTV?</h2>

        <p className="mt-6 text-lg leading-8 text-[#5d737d]">
          DokTV ist ein digitales Werbenetzwerk im Gesundheitsbereich. Wir
          installieren Displays in Apotheken und Arztpraxen und spielen dort
          Angebote, Informationen und Werbung aus – genau dort, wo Menschen
          Entscheidungen treffen.
        </p>
      </section>

      {/* ZIELGRUPPEN */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 md:grid-cols-3">
        <a
          href="/apotheken"
          className="rounded-2xl bg-white p-8 shadow-lg shadow-[#334c59]/5"
        >
          <h3 className="text-xl font-bold">Für Apotheken</h3>
          <p className="mt-4 text-[#5d737d]">
            Zeigen Sie Angebote und Aktionen direkt im Schaufenster und
            erreichen Ihre Laufkundschaft digital und sichtbar.
          </p>
        </a>

        <a
          href="/arztpraxen"
          className="rounded-2xl bg-white p-8 shadow-lg shadow-[#334c59]/5"
        >
          <h3 className="text-xl font-bold">Für Arztpraxen</h3>
          <p className="mt-4 text-[#5d737d]">
            Informieren Sie Patienten im Wartezimmer über Leistungen,
            Öffnungszeiten und wichtige Hinweise.
          </p>
        </a>

        <a
          href="/hersteller"
          className="rounded-2xl bg-white p-8 shadow-lg shadow-[#334c59]/5"
        >
          <h3 className="text-xl font-bold">Für Hersteller</h3>
          <p className="mt-4 text-[#5d737d]">
            Bewerben Sie Ihre Produkte gezielt in Apotheken und Arztpraxen –
            genau dort, wo Kaufentscheidungen entstehen.
          </p>
        </a>
      </section>

      {/* SEO INTERNE LINKS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Lösungen für Apotheken & Arztpraxen in Berlin
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-[#5d737d]">
          DokTV bietet digitale Werbelösungen für Apotheken, Arztpraxen und
          Hersteller. Entdecken Sie unsere spezialisierten Lösungen für mehr
          Sichtbarkeit im Gesundheitsbereich.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <a
            href="/apotheke-werbung-berlin"
            className="rounded-2xl bg-white p-6 shadow-lg shadow-[#334c59]/5"
          >
            <h3 className="text-xl font-bold">Apotheken Werbung Berlin</h3>
            <p className="mt-3 text-[#5d737d]">
              Digitale Displays für Apotheken in Berlin – mehr Sichtbarkeit für
              Laufkundschaft.
            </p>
          </a>

          <a
            href="/arztpraxis-werbung-berlin"
            className="rounded-2xl bg-white p-6 shadow-lg shadow-[#334c59]/5"
          >
            <h3 className="text-xl font-bold">Arztpraxis Werbung Berlin</h3>
            <p className="mt-3 text-[#5d737d]">
              Wartezimmer-TV für moderne Patienteninformation in Berlin.
            </p>
          </a>

          <a
            href="/digital-signage-apotheke"
            className="rounded-2xl bg-white p-6 shadow-lg shadow-[#334c59]/5"
          >
            <h3 className="text-xl font-bold">Digital Signage Apotheke</h3>
            <p className="mt-3 text-[#5d737d]">
              Moderne Displays für Apotheken – Angebote und Aktionen digital
              zeigen.
            </p>
          </a>

          <a
            href="/werbung-apotheke-display"
            className="rounded-2xl bg-white p-6 shadow-lg shadow-[#334c59]/5"
          >
            <h3 className="text-xl font-bold">Werbung Apotheke Display</h3>
            <p className="mt-3 text-[#5d737d]">
              Werbung direkt im Apotheken-Schaufenster – sichtbar für
              Laufkundschaft.
            </p>
          </a>
        </div>
      </section>

      {/* SO FUNKTIONIERT */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            So funktioniert DokTV.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              [
                "1",
                "Standort auswählen",
                "Wählen Sie passende Apotheken und Arztpraxen über den Standortfinder aus.",
              ],
              [
                "2",
                "Spot erstellen lassen",
                "Wir erstellen Ihren Werbespot kostenlos.",
              ],
              [
                "3",
                "Kampagne starten",
                "Ihre Inhalte laufen auf den Displays.",
              ],
            ].map(([number, title, text]) => (
              <div key={number} className="rounded-3xl bg-[#f7fafb] p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#334c59] text-lg font-bold text-white">
                  {number}
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-4 text-[#5d737d]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Bereit für digitale Sichtbarkeit?
        </h2>

        <p className="mt-6 text-lg leading-8 text-[#5d737d]">
          Starten Sie mit DokTV und erreichen Sie Menschen dort, wo
          Aufmerksamkeit zählt.
        </p>

        <a
          href="/kontakt"
          className="mt-10 inline-flex rounded-full bg-[#334c59] px-8 py-4 font-semibold text-white"
        >
          Jetzt Kontakt aufnehmen
        </a>
      </section>

      <Footer />
    </main>
  );
}