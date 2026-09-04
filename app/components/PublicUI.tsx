import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { pricing, formatEuro } from "../lib/pricing";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`inline-flex items-center rounded-full border px-3.5 py-2 text-xs font-extrabold uppercase tracking-[0.16em] ${
        light
          ? "border-white/15 bg-white/10 text-teal-100"
          : "border-teal-200 bg-teal-50 text-teal-800"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow ? <Eyebrow light={light}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`mt-5 text-balance text-3xl font-black leading-[1.08] tracking-[-0.035em] sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mt-5 text-lg leading-8 ${light ? "text-slate-300" : "text-slate-600"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="button-primary">
      <span>{children}</span>
      <span aria-hidden="true" className="button-arrow">→</span>
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link href={href} className={light ? "button-secondary-dark" : "button-secondary"}>
      {children}
    </Link>
  );
}

export function CheckList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className={`flex gap-3 leading-7 ${light ? "text-slate-200" : "text-slate-700"}`}>
          <span
            aria-hidden="true"
            className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-black ${
              light ? "bg-teal-300 text-slate-950" : "bg-teal-100 text-teal-800"
            }`}
          >
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FeatureCard({
  number,
  title,
  children,
  className = "",
}: {
  number?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <article className={`surface-card group p-7 sm:p-8 ${className}`}>
      {number ? (
        <span className="text-sm font-black tracking-[0.2em] text-teal-700">{number}</span>
      ) : null}
      <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-950">{title}</h3>
      <div className="mt-4 leading-7 text-slate-600">{children}</div>
    </article>
  );
}

export function PricingTeaser() {
  const display55 = pricing.displays[55];
  const display65 = pricing.displays[65];

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1fr_1.2fr]">
      {[display55, display65].map((display) => (
        <article key={display.size} className="surface-card p-7">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-teal-700">
            {display.size}
          </p>
          <p className="mt-6 text-5xl font-black tracking-tight text-slate-950">
            {formatEuro(display.price)}
          </p>
          <p className="mt-2 font-semibold text-slate-500">einmalig für die Hardware</p>
        </article>
      ))}

      <article className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white shadow-xl shadow-slate-300/40">
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-teal-400/20 blur-3xl" />
        <p className="relative text-sm font-extrabold uppercase tracking-[0.16em] text-teal-300">
          DokTV Service
        </p>
        <div className="relative mt-6 flex items-end gap-2">
          <p className="text-5xl font-black tracking-tight">{formatEuro(pricing.service.price)}</p>
          <p className="pb-1.5 font-semibold text-slate-300">/ Monat</p>
        </div>
        <p className="relative mt-4 leading-7 text-slate-300">
          Professionelle Werbeinhalte, Ausspielung und laufende Betreuung.
        </p>
        <p className="relative mt-4 text-sm font-bold text-teal-200">
          Optional: Notdienstanzeiger +{formatEuro(pricing.emergencyDisplay.price)} / Monat
        </p>
      </article>
    </div>
  );
}

export function ImagePanel({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`image-panel relative overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover transition duration-700 hover:scale-[1.025]" />
    </div>
  );
}

export function CTASection({
  title = "Bereit für Ihr digitales Schaufenster?",
  text = "Wählen Sie die passende Displaygröße und wir besprechen den Rest persönlich mit Ihnen.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="px-5 py-20 sm:px-6 lg:py-28">
      <Container className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 px-6 py-14 text-center text-white sm:px-10 lg:py-20">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <Eyebrow light>Persönlich beraten</Eyebrow>
          <h2 className="mt-5 text-balance text-3xl font-black tracking-[-0.035em] sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">{text}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryButton href="/kontakt">Kostenlose Beratung</PrimaryButton>
            <SecondaryButton href="/referenzen" light>Referenzen ansehen</SecondaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
