"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function KontaktPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    customer_type: "",
    message: "",
    website: "", // Spam-Schutz Honeypot
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Fehler beim Senden.");
      }

      setSuccess(true);
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        customer_type: "",
        message: "",
        website: "",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unbekannter Fehler.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f7fafb] text-[#334c59]">
      <Header />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#6fa8b0] shadow-sm">
            Kontakt
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Lassen Sie uns über digitale Sichtbarkeit sprechen.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5d737d]">
            Ob Apotheke, Arztpraxis oder Hersteller – wir beraten Sie zur
            passenden DokTV-Lösung.
          </p>

          <div className="mt-10 rounded-3xl bg-white p-6 shadow-lg shadow-[#334c59]/5">
            <p className="font-bold">DokTV UG (haftungsbeschränkt)</p>
            <p className="mt-2 text-[#5d737d]">Berlin, Deutschland</p>
            <p className="mt-2 text-[#5d737d]">E-Mail: info@doktv.de</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] bg-white p-8 shadow-2xl shadow-[#334c59]/10"
        >
          <div className="grid gap-5">
            {/* Unsichtbares Spam-Feld */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="rounded-2xl border border-[#334c59]/10 bg-[#f7fafb] px-5 py-4 outline-none"
              placeholder="Name"
            />

            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              className="rounded-2xl border border-[#334c59]/10 bg-[#f7fafb] px-5 py-4 outline-none"
              placeholder="Firma"
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="rounded-2xl border border-[#334c59]/10 bg-[#f7fafb] px-5 py-4 outline-none"
              placeholder="E-Mail"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="rounded-2xl border border-[#334c59]/10 bg-[#f7fafb] px-5 py-4 outline-none"
              placeholder="Telefonnummer"
            />

            <select
              name="customer_type"
              value={form.customer_type}
              onChange={handleChange}
              required
              className="rounded-2xl border border-[#334c59]/10 bg-[#f7fafb] px-5 py-4 outline-none"
            >
              <option value="">Bitte auswählen</option>
              <option value="Apotheke">Apotheke</option>
              <option value="Arztpraxis">Arztpraxis</option>
              <option value="Hersteller">Hersteller</option>
              <option value="Sonstiges Unternehmen">Sonstiges Unternehmen</option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="rounded-2xl border border-[#334c59]/10 bg-[#f7fafb] px-5 py-4 outline-none"
              placeholder="Nachricht"
            />

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-[#334c59] px-8 py-4 font-semibold text-white disabled:opacity-60"
            >
              {loading ? "Wird gesendet..." : "Anfrage senden"}
            </button>

            {success && (
              <p className="rounded-2xl bg-green-50 p-4 text-sm font-semibold text-green-700">
                Danke! Ihre Anfrage wurde erfolgreich gesendet.
              </p>
            )}

            {error && (
              <p className="rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-700">
                {error}
              </p>
            )}
          </div>
        </form>
      </section>

      <Footer />
    </main>
  );
}