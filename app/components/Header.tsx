import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          DokTV
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

          <Link href="/" className="hover:text-blue-600">
            Start
          </Link>

          <Link
            href="/digital-signage-berlin"
            className="hover:text-blue-600"
          >
            Digital Signage Berlin
          </Link>

          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>

          <Link href="/kontakt" className="hover:text-blue-600">
            Kontakt
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/kontakt"
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-500 transition"
        >
          Beratung
        </Link>
      </div>
    </header>
  );
}