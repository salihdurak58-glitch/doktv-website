import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DigitalSignageBerlinPage() {
  return (
    <main className="bg-white text-slate-900">
      <Header />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-5xl font-black">Digital Signage Berlin</h1>
          <p className="mt-6 text-xl text-slate-600">
            Diese Seite funktioniert.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}