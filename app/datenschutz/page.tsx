import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Datenschutz | DokTV",
  description: "Datenschutzerklärung der DokTv UG (haftungsbeschränkt).",
};

const logFiles = [
  "IP-Adresse",
  "Browserinformationen",
  "Datum und Uhrzeit",
  "Referrer",
  "Betriebssystem",
];

const rights = [
  "Auskunft",
  "Berichtigung",
  "Löschung",
  "Einschränkung der Verarbeitung",
  "Datenübertragbarkeit",
  "Widerspruch",
  "Widerruf einer erteilten Einwilligung",
];

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-4 font-semibold text-blue-600">
          Informationen zum Datenschutz
        </p>

        <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Datenschutzerklärung
        </h1>

        <div className="mt-10 space-y-12 text-lg leading-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-black text-slate-950">
              1. Verantwortlicher
            </h2>
            <div className="mt-4 space-y-1">
              <p className="font-semibold text-slate-900">
                DokTv UG (haftungsbeschränkt)
              </p>
              <p>Mühlenbachring 7</p>
              <p>13591 Berlin</p>
              <p>Deutschland</p>
            </div>
            <div className="mt-4 space-y-1">
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:info@doktv.de"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  info@doktv.de
                </a>
              </p>
              <p>
                Telefon:{" "}
                <a
                  href="tel:+491639400001"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  0163 9400001
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              2. Allgemeine Hinweise
            </h2>
            <p className="mt-4">
              Der Schutz personenbezogener Daten ist uns wichtig. Wir verarbeiten
              personenbezogene Daten ausschließlich im Rahmen der geltenden
              Datenschutzgesetze, insbesondere der Datenschutz-Grundverordnung
              (DSGVO). Diese Datenschutzerklärung informiert darüber, welche
              Daten beim Besuch dieser Website und bei der Nutzung unserer
              Angebote verarbeitet werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">3. Hosting</h2>
            <p className="mt-4">
              Diese Website wird über technische Infrastruktur der folgenden
              Anbieter bereitgestellt:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Vercel Inc.</li>
              <li>STRATO AG</li>
            </ul>
            <p className="mt-4">
              Beim Aufruf der Website können Server-Logfiles verarbeitet werden,
              um einen sicheren und stabilen Betrieb der Website zu ermöglichen.
              Dazu können insbesondere folgende Daten gehören:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              {logFiles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes
              Interesse liegt im sicheren, fehlerfreien und effizienten Betrieb
              dieser Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              4. Kontaktformular
            </h2>
            <p className="mt-4">
              Wenn Sie uns über das Kontaktformular kontaktieren, verarbeiten wir
              die von Ihnen eingegebenen Angaben zur Bearbeitung Ihrer Anfrage
              und für mögliche Anschlussfragen. Die Verarbeitung erfolgt auf
              Grundlage von Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage mit
              der Erfüllung eines Vertrags oder vorvertraglichen Maßnahmen
              zusammenhängt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              5. Google Tag Manager
            </h2>
            <p className="mt-4">
              Wir verwenden den Google Tag Manager, um Website-Tags zentral zu
              verwalten und Dienste wie Analyse- oder Marketingtools technisch
              einzubinden. Der Google Tag Manager selbst erstellt keine
              Nutzerprofile und speichert nach unserem Kenntnisstand keine
              personenbezogenen Daten für eigene Analysezwecke.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              6. Google Analytics
            </h2>
            <p className="mt-4">
              Wir verwenden Google Analytics, um die Nutzung unserer Website zu
              analysieren und unser Angebot zu verbessern. Der Einsatz erfolgt
              nur, soweit Sie hierzu eingewilligt haben. Weitere Informationen
              zur Datenverarbeitung durch Google finden Sie unter{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
              >
                https://policies.google.com/privacy
              </a>
              .
            </p>
            <p className="mt-4">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              7. Google Ads Conversion Tracking
            </h2>
            <p className="mt-4">
              Wir nutzen Google Ads Conversion Tracking, um zu erfassen, ob
              Nutzer nach dem Klick auf eine Anzeige eine bestimmte Aktion auf
              unserer Website ausführen. Dies hilft uns, die Wirksamkeit unserer
              Werbemaßnahmen zu messen und Kampagnen zu optimieren. Die
              Verarbeitung erfolgt nur nach Ihrer Einwilligung.
            </p>
            <p className="mt-4">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">8. Cookies</h2>
            <p className="mt-4">
              Unsere Website kann technisch notwendige Cookies verwenden, die für
              den Betrieb der Website erforderlich sind. Darüber hinaus können
              Analyse- und Marketing-Cookies eingesetzt werden. Nicht notwendige
              Cookies werden erst nach Ihrer Zustimmung geladen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              9. Speicherdauer
            </h2>
            <p className="mt-4">
              Personenbezogene Daten werden nur so lange gespeichert, wie es für
              die jeweiligen Verarbeitungszwecke erforderlich ist oder gesetzliche
              Aufbewahrungspflichten bestehen. Entfällt der Zweck der
              Verarbeitung oder läuft eine gesetzliche Aufbewahrungsfrist ab,
              werden die Daten gelöscht oder gesperrt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              10. Betroffenenrechte
            </h2>
            <p className="mt-4">
              Sie haben im Rahmen der gesetzlichen Voraussetzungen folgende
              Rechte in Bezug auf Ihre personenbezogenen Daten:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              {rights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              11. Beschwerderecht
            </h2>
            <p className="mt-4">
              Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu
              beschweren. Zuständig ist insbesondere:
            </p>
            <div className="mt-4 space-y-1">
              <p>Berliner Beauftragte für Datenschutz und Informationsfreiheit</p>
              <p>Alt-Moabit 59-61</p>
              <p>10555 Berlin</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              12. Änderungen dieser Datenschutzerklärung
            </h2>
            <p className="mt-4">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn
              sich rechtliche Anforderungen, technische Abläufe oder unsere
              Leistungen ändern. Es gilt die jeweils auf dieser Website
              veröffentlichte Fassung.
            </p>
          </section>

          <section className="border-t border-slate-200 pt-8">
            <p>
              Die Anbieterkennzeichnung finden Sie im{" "}
              <Link
                href="/impressum"
                className="font-semibold text-blue-600 underline underline-offset-4"
              >
                Impressum
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
