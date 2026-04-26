import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Werbung Apotheke Display | Digitale Displays Apotheke | DokTV",
  description:
    "Werbung mit Displays in Apotheken. Digitale Schaufensterlösungen für mehr Sichtbarkeit und Umsatz.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-[#334c59] px-6 py-20">
      <Header />
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          Werbung in der Apotheke mit Displays
        </h1>

        <p className="mb-6 text-lg">
          Digitale Displays sind die moderne Lösung für Werbung in Apotheken.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Vorteile von Displays
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Hohe Aufmerksamkeit</li>
          <li>Flexible Inhalte</li>
          <li>Mehr Umsatz</li>
        </ul>

      </div>
      <Footer />
    </main>
  );
}