import Link from "next/link";
import { generatePageMetadata } from "@/app/lib/seo/get-page-seo";
import { getPublicLocations } from "@/app/lib/locations/get-locations";
import StandorteClient from "./StandorteClient";

export async function generateMetadata() {
  return generatePageMetadata("/standorte", {
    title: "DokTV-Standorte in Berlin: Werbeflächen anfragen",
    description: "DokTV-Standorte entdecken und digitale Werbeflächen in Berlin anfragen. Referenzen, Standortauswahl und aktuelle Verfügbarkeit richtig einordnen.",
  });
}

export default async function StandortePage() {
  const locations = await getPublicLocations();
  return (
    <StandorteClient locations={locations}>
      <section className="border-t border-slate-200 bg-white py-16 sm:py-20" aria-labelledby="standortplanung-heading">
        <div className="mx-auto max-w-7xl px-6">
          <h2 id="standortplanung-heading" className="text-3xl font-extrabold tracking-tight text-slate-950">So planen Sie Ihre Standortanfrage</h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 leading-8 text-slate-600">
              <h3 className="text-xl font-bold text-slate-900">Referenz und Werbeverfügbarkeit sind nicht dasselbe</h3>
              <p>Eine dokumentierte Installation zeigt, wie ein DokTV-Display vor Ort eingesetzt wird. Ob an diesem Standort aktuell eine Herstellerkampagne möglich ist, wird gesondert geprüft. Standortfreigabe, Zeitraum und Konditionen müssen vor einer Buchung bestätigt werden.</p>
              <p>Unsere Referenzseite zeigt reale Installationen in der Sky Apotheke Wedding, der Sky Apotheke Kudamm und der Sky Apotheke Kreuzberg. Diese Beispiele sind keine Zusage für zusätzliche Apotheken, Arztpraxen oder eine bestimmte Reichweite.</p>
              <Link href="/referenzen" className="inline-block font-bold text-teal-800 underline underline-offset-4">Dokumentierte Installationen ansehen</Link>
            </div>
            <div className="space-y-5 leading-8 text-slate-600">
              <h3 className="text-xl font-bold text-slate-900">Welche Angaben für ein passendes Angebot helfen</h3>
              <p>Nennen Sie die gewünschte Region, Marke oder Kampagnenbotschaft und den geplanten Zeitraum. Liegen bereits freigegebene Motive vor, vermerken Sie das in Ihrer Anfrage. Mit diesen Angaben lässt sich eine geeignete Auswahl konkreter abstimmen als mit einer pauschalen Anfrage nach möglichst vielen Displays.</p>
              <p>Herstellerkampagnen werden individuell angeboten. Die Hardware- und Content-Service-Preise für eine eigene Displayinstallation sind keine pauschalen Werbeflächenpreise. Lassen Sie vor dem Start festhalten, welche Standorte, Laufzeiten und Leistungen vereinbart sind.</p>
              <Link href="/hersteller-werbung" className="inline-block font-bold text-teal-800 underline underline-offset-4">Herstellerkampagne Schritt für Schritt planen</Link>
            </div>
          </div>
          <div className="mt-10 rounded-3xl bg-teal-50 p-7 leading-8 text-slate-700"><h3 className="text-xl font-bold text-slate-900">Sie möchten Ihren eigenen Standort ausstatten?</h3><p className="mt-4">Für ein eigenes Schaufenster- oder Wartezimmer-Display helfen Fotos des Einsatzorts und eine Beschreibung der gewünschten Inhalte. Auf den Leistungsseiten finden Sie die passende Orientierung zu <Link href="/apotheken" className="font-bold text-teal-800 underline underline-offset-4">Apotheken-Displays</Link> und <Link href="/wartezimmer-tv-praxen" className="font-bold text-teal-800 underline underline-offset-4">Wartezimmer-TV für Praxen</Link>.</p></div>
        </div>
      </section>
    </StandorteClient>
  );
}
