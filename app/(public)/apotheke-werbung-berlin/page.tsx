import SeoLanding from "../../components/SeoLanding";
import { publicPageMetadata } from "../../lib/seo/public-metadata";
import { Container } from "../../components/PublicUI";
import Link from "next/link";

export const metadata = publicPageMetadata("/apotheke-werbung-berlin", "Apothekenwerbung in Berlin | Digitale Displays – DokTV", "Digitale Schaufensterwerbung für Berliner Apotheken: echte Installationen in Wedding, Kreuzberg und am Kurfürstendamm ansehen.", "/referenzen/sky-apotheke-kreuzberg-2.jpg");

export default function Page() {
  return <SeoLanding eyebrow="Apothekenwerbung in Berlin" title="Mehr Sichtbarkeit für Berliner Apotheken." intro="Digitale Schaufenster-Displays machen lokale Angebote und Gesundheitsinformationen im Straßenbild sichtbar. DokTV betreut Technik und Inhalte." sectionTitle="Was digitale Apothekenwerbung leistet" sectionText="Für wechselnde Aktionen und eine aktuelle Kommunikation am Standort." items={["Schaufenster-Displays", "Lokale Angebote", "Gesundheitskampagnen", "Notdienst-Hinweise", "Produktwerbung", "Laufende Content-Pflege"]} itemDescriptions={["Inhalte sind vor der Apotheke sichtbar und können ohne Neudruck wechseln.", "Angebote können passend zum Standort und zur Saison gezeigt werden.", "Freigegebene Gesundheitsthemen lassen sich verständlich darstellen.", "Notdienstinformationen können als optionale Zusatzfunktion erscheinen.", "Ausgewählte OTC-, Kosmetik- und Pflegeprodukte können präsentiert werden.", "DokTV übernimmt Gestaltung, Ausspielung und Aktualisierung nach Ihren Vorgaben."]} image={{ src: "/referenzen/sky-apotheke-kreuzberg-2.jpg", alt: "Digitale Apothekenwerbung in Berlin Kreuzberg" }} secondaryHref="/referenzen" secondaryLabel="Berliner Referenzen">
    <section className="bg-[#f7faf9] py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div><p className="text-sm font-black uppercase tracking-[.14em] text-teal-700">Aus der Berliner Praxis</p><h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">Inhalte, die zur Apotheke passen.</h2></div>
        <div className="space-y-5 text-lg leading-8 text-slate-600">
          <p>Eine Schaufensterfläche am Kurfürstendamm hat andere Blickwinkel als ein Eingangsbereich in Kreuzberg. Deshalb werden Botschaften, Schriftgröße und Wechselrhythmus nicht als starre Vorlage geplant. Wichtig ist, was Menschen von außen tatsächlich erfassen können und welche Angebote Ihre Apotheke kommunizieren möchte.</p>
          <p>DokTV zeigt reale Installationen aus Wedding, Kreuzberg und vom Kurfürstendamm. Die <Link className="font-bold text-teal-700 underline underline-offset-4" href="/referenzen">Berliner Referenzen</Link> zeigen die Displays im Einsatz. Für die konkrete Lösung erläutern wir <Link className="font-bold text-teal-700 underline underline-offset-4" href="/apotheken">Technik und Betreuung</Link> sowie die <Link className="font-bold text-teal-700 underline underline-offset-4" href="/preise">Hardware- und Servicekosten</Link> transparent.</p>
        </div>
      </Container>
    </section>
  </SeoLanding>;
}
