import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { doktvReferences } from "../lib/references";

export const metadata: Metadata = {
  title: "Referenzen | DokTV",
  description:
    "Echte Digital-Signage-Installationen von DokTV in Berliner Apotheken.",
};

export default function ReferenzenPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            Referenzen
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
            DokTV im Einsatz
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Echte Schaufenster-Displays in Berliner Apotheken – sichtbar,
            professionell und zentral steuerbar.
          </p>

          <Link
            href="/kontakt"
            className="mt-10 inline-flex rounded-2xl bg-blue-600 px-8 py-4 text-center font-bold text-white shadow-xl shadow-blue-600/30 transition hover:bg-blue-500"
          >
            Ähnliche Lösung anfragen
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-12">
          {doktvReferences.map((reference, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <article
                key={reference.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/70"
              >
                <div className="grid gap-0 lg:grid-cols-2">
                  <div
                    className={`bg-slate-100 p-4 sm:p-6 ${
                      imageFirst ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="grid gap-4">
                      {reference.images.map((image, imageIndex) => (
                        <div
                          key={image.src}
                          className={
                            imageIndex === 0
                              ? "relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200"
                              : "relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-200"
                          }
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                            priority={index === 0 && imageIndex === 0}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`p-7 sm:p-10 ${
                      imageFirst ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <p className="font-semibold text-blue-600">
                      {reference.location}
                    </p>

                    <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                      {reference.title}
                    </h2>

                    <p className="mt-3 font-semibold text-slate-700">
                      {reference.address}
                    </p>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                      {reference.description}
                    </p>

                    <ul className="mt-7 grid gap-3 text-slate-700">
                      {reference.details.map((detail) => (
                        <li
                          key={detail}
                          className="rounded-2xl bg-slate-100 px-5 py-3 font-semibold"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/kontakt"
                      className="mt-8 inline-flex rounded-2xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-500"
                    >
                      Ähnliche Lösung anfragen
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black md:text-5xl">
            Möchten Sie ähnliche Displays für Ihre Apotheke oder Praxis?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Wir prüfen gemeinsam, welche DokTV-Lösung zu Ihrem Standort passt.
          </p>

          <Link
            href="/kontakt"
            className="mt-10 inline-flex rounded-2xl bg-white px-10 py-5 font-black text-blue-700 shadow-2xl transition hover:bg-slate-100"
          >
            Kostenlose Beratung anfragen
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
