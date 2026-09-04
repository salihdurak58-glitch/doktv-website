import Link from "next/link";

export default function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3 rounded-3xl border border-white/20 bg-slate-950/95 p-3 text-sm font-black text-white shadow-2xl shadow-slate-950/30 backdrop-blur">
        <Link
          href="/kontakt"
          className="rounded-2xl bg-teal-600 px-4 py-3.5 text-center transition hover:bg-teal-500"
        >
          Kostenlose Beratung
        </Link>

        <a
          href="tel:01639400001"
          className="rounded-2xl bg-white px-4 py-3.5 text-center text-[#243a44] transition hover:bg-slate-100"
        >
          Anrufen
        </a>
      </div>
    </div>
  );
}
