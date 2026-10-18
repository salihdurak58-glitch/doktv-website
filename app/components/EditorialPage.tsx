import Link from "next/link";
import SeoLanding from "./SeoLanding";
import { Container, ImagePanel, SectionHeading } from "./PublicUI";
import type { EditorialPageData } from "@/app/lib/seo/editorial-pages";

/** Server-rendered editorial content: readable without hydration or consent. */
export default function EditorialPage({ page }: { page: EditorialPageData }) {
  return (
    <SeoLanding
      eyebrow={page.eyebrow}
      title={page.title}
      intro={page.intro}
      image={page.image}
      sectionTitle={page.overview.title}
      sectionText={page.overview.text}
      items={page.overview.items.map((item) => item.title)}
      itemDescriptions={page.overview.items.map((item) => item.text)}
      primaryLabel={page.route.startsWith("/hersteller") ? "Kampagne anfragen" : "Kostenlose Beratung"}
      secondaryHref={page.route.startsWith("/hersteller") ? "/standorte" : "/preise"}
      secondaryLabel={page.route.startsWith("/hersteller") ? "Standorte ansehen" : "Preise ansehen"}
    >
      <section className="py-16 sm:py-24" aria-label="Planung und Hintergrund">
        <Container>
          <nav aria-label="Inhalt dieser Seite" className="mb-12 rounded-3xl border border-teal-100 bg-white p-6 sm:p-8">
            <p className="text-sm font-extrabold uppercase tracking-wider text-teal-800">Direkt zum Thema</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              {page.sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="font-semibold text-slate-700 underline decoration-teal-200 underline-offset-4 hover:text-teal-700">{section.title}</a>
              ))}
              <a href="#fragen" className="font-semibold text-slate-700 underline decoration-teal-200 underline-offset-4 hover:text-teal-700">Häufige Fragen</a>
            </div>
          </nav>
          <div className="space-y-16 sm:space-y-20">
            {page.sections.map((section) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="scroll-mt-32 grid gap-6 border-t border-slate-200 pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
                <h2 id={`${section.id}-heading`} className="text-balance text-2xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-3xl">{section.title}</h2>
                <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.image ? <ImagePanel src={section.image.src} alt={section.image.alt} className="mt-6 min-h-[320px]" /> : null}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </section>
      <section id="fragen" className="scroll-mt-32 border-y border-slate-200 bg-white py-16 sm:py-24" aria-labelledby="fragen-heading">
        <Container>
          <h2 id="fragen-heading" className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Häufige Fragen</h2>
          <div className="mt-8 divide-y divide-slate-200">
            {page.faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="cursor-pointer text-lg font-bold leading-7 text-slate-900 marker:text-teal-700">{faq.question}</summary>
                <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-teal-50 py-14 sm:py-20" aria-label="Passende nächste Schritte">
        <Container>
          <SectionHeading eyebrow="Weiterführende Informationen" title="Ihr nächster Schritt" />
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {page.links.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-2xl border border-teal-100 bg-white p-5 font-bold text-teal-800 transition hover:border-teal-400 hover:shadow-sm">{link.label}<span aria-hidden="true"> →</span></Link>
            ))}
          </div>
        </Container>
      </section>
    </SeoLanding>
  );
}
