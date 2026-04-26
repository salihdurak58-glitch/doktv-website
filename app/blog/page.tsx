import { generatePageMetadata } from "@/lib/seo/get-page-seo";
import Link from "next/link";

export async function generateMetadata() {
  return generatePageMetadata("/blog");
}

const posts = [
  {
    title: "Warum Digital Signage im Schaufenster funktioniert",
    description:
      "Digitale Displays ziehen Aufmerksamkeit auf sich und machen Angebote sichtbarer.",
    href: "/blog/digital-signage-schaufenster",
  },
  {
    title: "Digital Signage für Apotheken",
    description:
      "So können Apotheken Angebote, Services und Gesundheitsinformationen modern präsentieren.",
    href: "/blog/digital-signage-apotheken",
  },
  {
    title: "Mehr Sichtbarkeit für lokale Unternehmen",
    description:
      "Wie lokale Geschäfte mit digitalen Bildschirmen besser wahrgenommen werden.",
    href: "/blog/lokale-unternehmen-sichtbarkeit",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-12 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            DokTV Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Wissen, Tipps und Ideen rund um Digital Signage,
            Schaufenster-Displays und digitale Kundenkommunikation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.href}
              className="rounded-3xl border bg-gray-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-gray-900">
                {post.title}
              </h2>

              <p className="mt-3 text-gray-600">{post.description}</p>

              <Link
                href={post.href}
                className="mt-6 inline-block text-sm font-semibold text-black underline"
              >
                Artikel lesen
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}