import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CheckList, Container, CTASection, Eyebrow } from "../components/PublicUI";
import { doktvReferences } from "../lib/references";

export const metadata: Metadata = {
  title: "Referenzen | Echte DokTV Installationen in Berlin",
  description: "Echte Digital-Signage-Installationen von DokTV in Berliner Apotheken – Wedding, Kudamm und Kreuzberg.",
  alternates: { canonical: "https://doktv.de/referenzen" },
};

export default function ReferenzenPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <Header />

      <section className="page-hero py-18 sm:py-24 lg:py-28">
        <Container className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>Echte Installationen</Eyebrow>
            <h1 className="mt-6 text-balance text-5xl font-black leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">DokTV im echten Einsatz.</h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-600">Drei Berliner Apotheken. Große Bilder. Echte Schaufenster-Displays – keine Renderings und keine Stockfotos.</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {doktvReferences.map((reference, index) => (
              <div key={reference.title} className={`relative overflow-hidden rounded-2xl ${index === 1 ? "mt-8 aspect-[3/4]" : "aspect-[3/4]"}`}>
                <Image src={reference.images[1].src} alt={reference.images[1].alt} fill priority={index === 0} sizes="(max-width: 1024px) 33vw, 18vw" className="object-cover" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20 lg:pb-28">
        <Container className="space-y-16 lg:space-y-24">
          {doktvReferences.map((reference, index) => (
            <article key={reference.title} id={reference.location.toLowerCase()} className="grid items-center gap-7 lg:grid-cols-12 lg:gap-10">
              <div className={`grid gap-4 sm:grid-cols-5 lg:col-span-7 ${index % 2 ? "lg:order-2" : ""}`}>
                <div className="relative min-h-[27rem] overflow-hidden rounded-[2rem] sm:col-span-3 lg:min-h-[37rem]">
                  <Image src={reference.images[0].src} alt={reference.images[0].alt} fill sizes="(max-width: 1024px) 60vw, 40vw" className="object-cover" priority={index === 0} />
                </div>
                <div className="relative min-h-[20rem] overflow-hidden rounded-[2rem] sm:col-span-2 sm:mt-12 lg:min-h-[31rem]">
                  <Image src={reference.images[1].src} alt={reference.images[1].alt} fill sizes="(max-width: 1024px) 40vw, 25vw" className="object-cover" />
                </div>
              </div>

              <div className={`lg:col-span-5 ${index % 2 ? "lg:order-1" : ""}`}>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">{reference.location}</p>
                <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 lg:text-5xl">{reference.title}</h2>
                <p className="mt-4 font-bold text-slate-700">{reference.address}</p>
                <p className="mt-6 text-lg leading-8 text-slate-600">{reference.description}</p>
                <div className="mt-7"><CheckList items={reference.details} /></div>
                <Link href="/kontakt" className="button-primary mt-8">Ähnliche Lösung anfragen <span aria-hidden="true">→</span></Link>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-[#f6f9f8] py-18 lg:py-24">
        <Container className="text-center">
          <Eyebrow>Berlin vor Ort</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-balance text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-5xl">Technik wird überzeugend, wenn man sie im Alltag sieht.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">Unsere Referenzen zeigen, wie digitale Inhalte im Schaufenster sichtbar werden. Welche Lösung zu Ihrem Standort passt, besprechen wir persönlich.</p>
        </Container>
      </section>

      <CTASection title="Soll Ihr Standort die nächste Referenz werden?" text="Wir prüfen gemeinsam, welche Displaygröße und welcher Einsatzort zu Ihrer Apotheke oder Praxis passen." />
      <Footer />
    </main>
  );
}
