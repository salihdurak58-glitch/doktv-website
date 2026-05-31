import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Impressum | DokTV",
  description: "Impressum der DokTv UG (haftungsbeschränkt).",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-4 font-semibold text-blue-600">Rechtliche Angaben</p>

        <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Impressum
        </h1>

        <div className="mt-10 space-y-10 text-lg leading-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-black text-slate-950">
              Angaben gemäß § 5 TMG
            </h2>
            <div className="mt-4 space-y-1">
              <p className="font-semibold text-slate-900">
                DokTv UG (haftungsbeschränkt)
              </p>
              <p>Mühlenbachring 7</p>
              <p>13591 Berlin</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              Vertreten durch
            </h2>
            <p className="mt-4">Mustafa Ölmez</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">Kontakt</h2>
            <div className="mt-4 space-y-1">
              <p>
                Telefon:{" "}
                <a
                  href="tel:+491639400001"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  0163 9400001
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:info@doktv.de"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  info@doktv.de
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              Handelsregister
            </h2>
            <div className="mt-4 space-y-1">
              <p>Amtsgericht Charlottenburg (Berlin)</p>
              <p>HRB 267773 B</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              Umsatzsteuer-ID
            </h2>
            <p className="mt-4">DE451489853</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <div className="mt-4 space-y-1">
              <p>Mustafa Ölmez</p>
              <p>Mühlenbachring 7</p>
              <p>13591 Berlin</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              EU-Streitschlichtung
            </h2>
            <p className="mt-4">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              Verbraucherstreitbeilegung
            </h2>
            <p className="mt-4">
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>

          <section className="border-t border-slate-200 pt-8">
            <p>
              Informationen zum Umgang mit personenbezogenen Daten finden Sie in
              unserer{" "}
              <Link
                href="/datenschutz"
                className="font-semibold text-blue-600 underline underline-offset-4"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
