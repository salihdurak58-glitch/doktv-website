import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import type { Route } from "next";

export const metadata = {
  title:
    "DokTV | Digital Signage Berlin für Apotheken, Arztpraxen & Geschäfte",
  description:
    "DokTV bietet Digital Signage in Berlin: Schaufenster-Displays, digitale Werbung und moderne Display-Lösungen.",
  alternates: {
    canonical: "https://doktv.de",
  },
};

const benefits = [
  {
    title: "Mehr Aufmerksamkeit",
    text: "Bewegte Inhalte fallen sofort auf und ziehen Blicke an.",
  },
  {
    title: "Mehr Vertrauen",
    text: "Ein modernes Display wirkt professionell und hochwertig.",
  },
  {
    title: "Mehr Kunden",
    text: "Klare Angebote bringen mehr Besucher in dein Geschäft.",
  },
  {
    title: "Mehr Flexibilität",
    text: "Inhalte jederzeit ändern ohne Druckkosten.",
  },
];

const industries = [
  {
    title: "Apotheken",
    text: "Angebote, Aktionen und Gesundheitskampagnen sichtbar machen.",
  },
  {
    title: "Arztpraxen",
    text: "Patienten informieren und Abläufe erklären.",
  },
  {
    title: "Geschäfte",
    text: "Mehr Kunden durch starke Schaufenster-Werbung.",
  },
];

const internalLinks: {
  title: string;
  href: Route;
  text: string;
}[] = [
  {
    title: "Digital Signage Berlin",
    href: "/digital-signage-berlin",
    text: "Unsere Service-Seite für Berlin.",
  },
  {
    title: "Digital Signage Apotheke",
    href: "/blog/digital-signage-apotheke",
    text: "Warum Displays für Apotheken wirken.",
  },
  {
    title: "Schaufenster Display Apotheke",
    href: "/blog/schaufenster-display-apotheke",
    text: "Schaufenster richtig nutzen.",
  },
];

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <Header />

      {/* HERO */}
      <section className="bg-slate-950 text-white px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Mehr Sichtbarkeit. Mehr Kunden. Mehr Umsatz.
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            Digital Signage für Apotheken, Arztpraxen und lokale Geschäfte in
            Berlin. Moderne Displays, die auffallen und verkaufen.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              href="/kontakt"
              className="bg-blue-600 px-8 py-4 rounded-xl font-bold"
            >
              Beratung starten
            </Link>

            <Link
              href="/digital-signage-berlin"
              className="border border-white px-8 py-4 rounded-xl"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg">{b.title}</h3>
              <p className="mt-3 text-slate-600">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {industries.map((i) => (
            <div key={i.title} className="border p-6 rounded-xl">
              <h3 className="font-bold text-xl">{i.title}</h3>
              <p className="mt-4 text-slate-600">{i.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO TEXT */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-lg leading-8 text-slate-700">
        <h2 className="text-3xl font-bold mb-6">
          Digital Signage Berlin – moderne Werbung für lokale Unternehmen
        </h2>

        <p>
          In Berlin reicht es nicht mehr, einfach nur ein Schaufenster zu haben.
          Kunden laufen schnell vorbei und entscheiden in Sekunden. Ein digitales
          Display sorgt dafür, dass Ihre Apotheke oder Ihr Geschäft sichtbar wird.
        </p>

        <p>
          Bewegte Inhalte erzeugen Aufmerksamkeit, vermitteln Professionalität und
          helfen dabei, Angebote besser zu präsentieren.
        </p>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {internalLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="font-bold text-xl">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.text}</p>
              <p className="mt-4 text-blue-600 font-semibold">
                Mehr lesen →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white text-center py-20 px-6">
        <h2 className="text-3xl font-bold">
          Bereit für mehr Kunden?
        </h2>

        <p className="mt-4 text-blue-100">
          Lass dich kostenlos beraten.
        </p>

        <Link
          href="/kontakt"
          className="mt-6 inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold"
        >
          Jetzt starten
        </Link>
      </section>

      <Footer />
    </main>
  );
}