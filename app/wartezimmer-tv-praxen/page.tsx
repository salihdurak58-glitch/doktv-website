import Header from "../components/Header";
import Footer from "../components/Footer";
import { CheckList, Container, CTASection, Eyebrow, FeatureCard, PrimaryButton, SecondaryButton, SectionHeading } from "../components/PublicUI";

export const metadata = {
  title: "Wartezimmer TV Arztpraxis | Digital Signage für Praxen – DokTV",
  description: "Wartezimmer TV für Arztpraxen: Patienten informieren, Praxisleistungen zeigen und Inhalte professionell betreuen lassen.",
};

const practiceTypes = ["Haus- und Facharztpraxen", "Zahnarztpraxen", "Kinderarztpraxen", "MVZ und Gesundheitszentren", "Physiotherapien", "Privatpraxen"];
const content = ["Praxisleistungen und Behandlungen", "Vorsorge- und Präventionsangebote", "Gesundheitstipps und Saisonthemen", "Organisatorische Hinweise", "Praxisvorstellung und Team", "Individuelle Patienteninformationen"];

export default function WartezimmerTvPraxenPage() {
  return (
    <main className="bg-[#f7faf9] text-slate-900">
      <Header />
      <section className="page-hero overflow-hidden pb-28 pt-16 sm:pb-32 sm:pt-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <Eyebrow>Digital Signage für Praxen</Eyebrow>
              <h1 className="mt-6 text-balance text-4xl font-black leading-[1.03] tracking-[-0.045em] text-slate-950 sm:text-6xl">Wartezeit wird zu guter Patienteninformation.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Wartezimmer TV erklärt Leistungen, Vorsorge und Abläufe ruhig und verständlich. DokTV übernimmt Gestaltung, Ausspielung und laufende Pflege.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><PrimaryButton href="/kontakt">Kostenlose Beratung</PrimaryButton><SecondaryButton href="/preise">Preise ansehen</SecondaryButton></div>
            </div>
            <div className="rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl shadow-teal-200/30 sm:p-10">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-300">Ihre Praxis. Ihr Programm.</p>
              <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">Ruhige Inhalte statt überfüllter Aushänge.</h2>
              <div className="mt-8"><CheckList light items={["Lesbar und patientengerecht gestaltet", "Auf Ihre Leistungen abgestimmt", "Von DokTV regelmäßig aktualisiert"]} /></div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Ein ruhiger Kommunikationskanal" title="Informationen, die im Praxisalltag ankommen" text="Statt überfüllter Aushänge erhalten Ihre Patienten gut lesbare Inhalte, während Ihr Team weniger wiederkehrende Fragen beantworten muss." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <FeatureCard number="01" title="Verständlich">Gesundheitsthemen und Praxisleistungen klar aufbereitet.</FeatureCard>
            <FeatureCard number="02" title="Aktuell">Hinweise lassen sich ohne neue Ausdrucke flexibel wechseln.</FeatureCard>
            <FeatureCard number="03" title="Passend">Inhalte und Taktung werden auf Ihre Praxis abgestimmt.</FeatureCard>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div><SectionHeading eyebrow="Was läuft auf dem Bildschirm?" title="Ihr Programm für den Wartebereich" text="Sie entscheiden über Themen und Schwerpunkte. DokTV macht daraus ein professionelles, gut lesbares Programm." /><div className="mt-8"><CheckList items={content} /></div></div>
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white sm:p-10">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-300">Geeignet für</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">{practiceTypes.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 font-semibold text-slate-200">{item}</div>)}</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-teal-50 py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Von der Idee bis zum Betrieb" title="DokTV hält den Aufwand für Ihr Team klein" align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {["Praxis und Ziele besprechen", "Display einrichten", "Inhalte laufend betreuen"].map((item, index) => <FeatureCard key={item} number={`0${index + 1}`} title={item}>Ein klarer Schritt mit einem festen Ansprechpartner.</FeatureCard>)}
          </div>
        </Container>
      </section>

      <CTASection title="Wie könnte Wartezimmer TV in Ihrer Praxis aussehen?" text="Wir beraten Sie kostenlos zu Einsatz, Inhalten und Technik." />
      <Footer />
    </main>
  );
}
