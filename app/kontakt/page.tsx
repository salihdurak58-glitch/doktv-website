import { generatePageMetadata } from "@/lib/seo/get-page-seo";

export async function generateMetadata() {
  return generatePageMetadata("/kontakt");
}

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-4xl px-4 py-20">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Kontakt aufnehmen
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Interesse an Digital Signage für dein Unternehmen? Schreib uns.
          </p>
        </div>

        <div className="rounded-3xl border bg-gray-50 p-6 shadow-sm md:p-8">
          <form className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="w-full rounded-xl border bg-white px-4 py-3 outline-none focus:border-black"
                  placeholder="Max Mustermann"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  E-Mail
                </label>
                <input
                  name="email"
                  type="email"
                  className="w-full rounded-xl border bg-white px-4 py-3 outline-none focus:border-black"
                  placeholder="mail@beispiel.de"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Telefonnummer
              </label>
              <input
                name="phone"
                type="text"
                className="w-full rounded-xl border bg-white px-4 py-3 outline-none focus:border-black"
                placeholder="+49 ..."
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Nachricht
              </label>
              <textarea
                name="message"
                className="min-h-36 w-full rounded-xl border bg-white px-4 py-3 outline-none focus:border-black"
                placeholder="Worum geht es?"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Anfrage senden
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}