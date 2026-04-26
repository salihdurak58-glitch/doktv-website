import { generatePageMetadata } from "@/lib/seo/get-page-seo";
import Link from "next/link";

export async function generateMetadata() {
  return generatePageMetadata("/");
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full bg-black px-4 py-2 text-sm font-medium text-white">
              Digital Signage für lokale Unternehmen
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Mach dein Schaufenster digital sichtbar.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              DokTV bringt moderne Schaufenster-Displays, digitale Inhalte und
              einfache Verwaltung in Apotheken, Praxen und lokale Geschäfte.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/kontakt"
                className="rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
              >
                Beratung anfragen
              </Link>

              <Link
                href="/blog"
                className="rounded-xl border px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border bg-gray-50 p-8 shadow-sm">
            <div className="aspect-video rounded-2xl bg-black p-6 text-white">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-300">DokTV Display</p>
                  <h2 className="mt-4 text-3xl font-bold">
                    Angebote, News und Aktionen direkt im Schaufenster.
                  </h2>
                </div>

                <p className="text-sm text-gray-300">
                  Zentral steuerbar. Modern. Sichtbar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Für Apotheken
            </h3>
            <p className="mt-3 text-gray-600">
              Digitale Angebote, Gesundheitsinfos und Aktionen professionell
              präsentieren.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Für Praxen
            </h3>
            <p className="mt-3 text-gray-600">
              Patienteninformationen, Leistungen und Hinweise modern anzeigen.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Für Geschäfte
            </h3>
            <p className="mt-3 text-gray-600">
              Mehr Aufmerksamkeit durch digitale Schaufensterwerbung.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}