import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Apotheke Werbung Berlin | Digitale Werbung für Apotheken | DokTV",
  description:
    "Digitale Werbung für Apotheken in Berlin. Steigern Sie Ihre Sichtbarkeit mit modernen Displays und gezieltem Apotheken-Marketing.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-[#334c59] px-6 py-20">
      <Header />
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          Apotheke Werbung Berlin – Mehr Sichtbarkeit für Ihre Apotheke
        </h1>

        <p className="mb-6 text-lg">
          Mit moderner <strong>Apotheken Werbung in Berlin</strong> erreichen Sie Kunden direkt vor Ort.
          Digitale Displays sorgen für Aufmerksamkeit und steigern Ihren Umsatz.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Warum Werbung in Apotheken wichtig ist
        </h2>

        <p>
          Viele Kunden treffen ihre Kaufentscheidung direkt in der Apotheke.
          Mit gezielter Werbung können Sie Produkte sichtbar machen und Ihre
          Kunden besser informieren.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Lösungen von DokTV
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Digitale Schaufenster Displays</li>
          <li>Produktwerbung am POS</li>
          <li>Moderne Kundenkommunikation</li>
        </ul>

      </div>
      <Footer />
    </main>
  );
}