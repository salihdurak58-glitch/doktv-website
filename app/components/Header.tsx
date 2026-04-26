import Link from "next/link";

const navItems = [
  { label: "Start", href: "/" },
  { label: "Digital Signage Berlin", href: "/digital-signage-berlin" },
  { label: "Apotheken", href: "/apotheken" },
  { label: "Arztpraxen", href: "/arztpraxen" },
  { label: "Preise", href: "/preise" },
  { label: "Standorte", href: "/standorte" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-black text-blue-600">
          DokTV
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-900 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-blue-600">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/kontakt"
          className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-500"
        >
          Beratung
        </Link>
      </div>
    </header>
  );
}