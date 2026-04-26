import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Arztpraxis Werbung Berlin – Wartezimmer TV mit DokTV",
  description:
    "Digitale Werbung für Arztpraxen in Berlin. Informieren Sie Patienten modern im Wartezimmer mit DokTV Displays.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f7fafb] text-[#334c59]">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-5xl font-bold md:text-7xl leading-tight">
          Werbung für Arztpraxen in Berlin neu gedacht.
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-[#5d737d]">
          Mit DokTV nutzen Arztpraxen in Berlin digitale Displays im
          Wartezimmer, um Patienten gezielt zu informieren – modern,
          verständlich und effektiv.
        </p>

        <a
          href="/kontakt"
          className="mt-10 inline-flex rounded-full bg-[#334c59] px-8 py-4 font-semibold text-white"
        >
          Beratung anfragen
        </a>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Warum Wartezimmer TV für Arztpraxen?
        </h2>

        <p className="mt-6 text-lg leading-8 text-[#5d737d]">
          Patienten verbringen Zeit im Wartezimmer. Diese Zeit kann genutzt
          werden, um wichtige Informationen zu vermitteln: Leistungen,
          Impfungen, Abläufe oder Hinweise.
        </p>

        <p className="mt-6 text-lg leading-8 text-[#5d737d]">
          Mit DokTV präsentieren Sie Inhalte digital und professionell –
          statt Zettel oder Poster.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold">
          Vorteile für Arztpraxen
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            "Bessere Patientenaufklärung",
            "Moderne Praxiswirkung",
            "Weniger Rückfragen",
            "Aktuelle Informationen jederzeit änderbar",
            "Professionelle Darstellung",
            "Kostenlose Erstellung der Inhalte",
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

      <section className="bg-[#334c59] py-24 text-white text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-4xl font-bold">
            Jetzt Arztpraxis modernisieren.
          </h2>

          <p className="mt-6 text-lg text-white/80">
            Nutzen Sie digitale Displays im Wartezimmer und verbessern Sie
            Ihre Patientenkommunikation.
          </p>

          <a
            href="/kontakt"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-[#334c59]"
          >
            Jetzt starten
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}