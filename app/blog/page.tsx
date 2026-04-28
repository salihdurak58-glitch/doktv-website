import { generatePageMetadata } from "@/app/lib/seo/get-page-seo";
import Link from "next/link";

export async function generateMetadata() {
  return generatePageMetadata("/blog");
}

const posts = [
  {
    title: "Digital Signage für Apotheken",
    description:
      "Wie Apotheken mit digitalen Displays Angebote, Services und Gesundheitsinformationen sichtbar machen.",
    href: "/blog/digital-signage-apotheken",
  },
  {
    title: "Digital Signage im Schaufenster",
    description:
      "Warum digitale Schaufensterwerbung mehr Aufmerksamkeit erzeugt als klassische Plakate.",
    href: "/blog/digital-signage-schaufenster",
  },
  {
    title: "Mehr Sichtbarkeit für lokale Unternehmen",
    description:
      "Wie lokale Unternehmen mit DokTV professioneller und moderner auftreten.",
    href: "/blog/lokale-unternehmen-sichtbarkeit",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-950">
          DokTV Blog
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Tipps, Wissen und Ideen rund um Digital Signage, Schaufenster-Displays
          und digitale Kundenkommunikation.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.href}
              className="rounded-3xl border bg-slate-50 p-6 shadow-sm"
            >
              <h2 className="text-xl font-extrabold text-slate-950">
                {post.title}
              </h2>

              <p className="mt-4 text-slate-600">{post.description}</p>

              <Link
                href={post.href}
                className="mt-6 inline-block text-sm font-bold text-blue-600 hover:underline"
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