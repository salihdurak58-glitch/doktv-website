import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { supabase } from "./lib/supabaseClient";

export const metadata = {
  title: "DokTV | Digital Signage Berlin für Apotheken, Arztpraxen & Geschäfte",
  description:
    "DokTV bietet Digital Signage in Berlin: Schaufenster-Displays, digitale Werbung und moderne Display-Lösungen.",
  alternates: {
    canonical: "https://doktv.de",
  },
};

async function getContent() {
  const { data } = await supabase
    .from("site_content")
    .select("key, value")
    .in("key", [
      "homepage_hero_title",
      "homepage_hero_subtitle",
      "homepage_hero_image",
    ]);

  return {
    heroTitle:
      data?.find((item) => item.key === "homepage_hero_title")?.value ||
      "Mehr Sichtbarkeit. Mehr Kunden. Mehr Umsatz.",
    heroSubtitle:
      data?.find((item) => item.key === "homepage_hero_subtitle")?.value ||
      "Digital Signage für Apotheken, Arztpraxen und lokale Geschäfte in Berlin. Moderne Displays, die auffallen und verkaufen.",
    heroImage:
      data?.find((item) => item.key === "homepage_hero_image")?.value || "",
  };
}

export default async function Home() {
  const { heroTitle, heroSubtitle, heroImage } = await getContent();

  return (
    <main className="bg-white text-slate-900">
      <Header />

      <section className="bg-slate-950 px-6 py-28 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <h1 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              {heroTitle}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {heroSubtitle}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakt"
                className="rounded-xl bg-blue-600 px-8 py-4 text-center font-bold text-white"
              >
                Beratung starten
              </Link>

              <Link
                href="/digital-signage-berlin"
                className="rounded-xl border border-white px-8 py-4 text-center font-bold text-white"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl">
            {heroImage ? (
              <img
                src={heroImage}
                alt="Digital Signage DokTV"
                className="h-[420px] w-full rounded-[1.5rem] object-cover"
              />
            ) : (
              <div className="flex h-[420px] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-blue-100">
                    DokTV Display
                  </p>
                  <h2 className="mt-4 text-4xl font-black">
                    Dein digitales Schaufenster
                  </h2>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4">
          {[
            ["Mehr Aufmerksamkeit", "Bewegte Inhalte fallen sofort auf."],
            ["Mehr Vertrauen", "Ein modernes Display wirkt hochwertig."],
            ["Mehr Kunden", "Angebote werden besser sichtbar."],
            ["Mehr Flexibilität", "Inhalte jederzeit ändern."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-xl bg-white p-6 shadow">
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-3 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-5xl">
            Digital Signage für lokale Unternehmen
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            DokTV hilft Unternehmen in Berlin, mit modernen Displays mehr
            Aufmerksamkeit, Vertrauen und Kundenkontakte zu erzeugen.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              ["Apotheken", "Angebote und Gesundheitskampagnen sichtbar machen."],
              ["Arztpraxen", "Patienten informieren und Abläufe erklären."],
              ["Geschäfte", "Mehr Kunden durch starke Schaufenster-Werbung."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 p-8"
              >
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-black md:text-5xl">
          Bereit für mehr Sichtbarkeit?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          Lass uns kostenlos prüfen, welche Digital-Signage-Lösung zu deinem
          Standort passt.
        </p>

        <Link
          href="/kontakt"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600"
        >
          Jetzt Beratung anfragen
        </Link>
      </section>

      <Footer />
    </main>
  );
}