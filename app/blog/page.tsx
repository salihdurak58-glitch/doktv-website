import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "DokTV Blog | Digital Signage, Apotheken-Marketing & Sichtbarkeit",
  description:
    "Wissen rund um Digital Signage, Apotheken-Marketing, Schaufenster-Displays und lokale Sichtbarkeit für Apotheken und Arztpraxen.",
  alternates: {
    canonical: "https://doktv.de/blog",
  },
};

const posts = [
  {
    title: "Digital Signage für Apotheken: Warum digitale Displays wirken",
    slug: "digital-signage-apotheke",
    description:
      "Wie Apotheken mit digitalen Displays mehr Aufmerksamkeit, bessere Kundeninformation und stärkere Sichtbarkeit erreichen.",
  },
  {
    title: "Schaufenster-Display Apotheke: Mehr Sichtbarkeit am Standort",
    slug: "schaufenster-display-apotheke",
    description:
      "Warum das Apothekenschaufenster eine der wichtigsten Werbeflächen für lokale Kunden ist.",
  },
  {
    title: "Apotheken-Marketing in Berlin: Lokal sichtbar werden",
    slug: "apotheken-marketing-berlin",
    description:
      "Wie Berliner Apotheken mit Website, Google Unternehmensprofil und Digital Signage mehr Anfragen gewinnen.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-[#f7fafb] text-[#334c59]">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#6fa8b0] shadow-sm">
          DokTV Blog
        </p>

        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          Digital Signage, Apotheken-Marketing & lokale Sichtbarkeit
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5d737d]">
          Praxisnahe Beiträge für Apotheken, Arztpraxen und Pharma-Unternehmen,
          die digital sichtbarer werden und Kunden vor Ort besser erreichen
          möchten.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-24 md:grid-cols-3">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-3xl bg-white p-8 shadow-lg shadow-[#334c59]/5 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="mt-4 leading-7 text-[#5d737d]">
              {post.description}
            </p>

            <p className="mt-6 font-semibold text-[#6fa8b0]">
              Beitrag lesen →
            </p>
          </a>
        ))}
      </section>

      <Footer />
    </main>
  );
}