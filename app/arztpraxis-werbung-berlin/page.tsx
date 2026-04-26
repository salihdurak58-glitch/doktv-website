import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Arztpraxis Werbung Berlin | Wartezimmer TV | DokTV",
  description:
    "Digitale Werbung für Arztpraxen in Berlin. Informieren Sie Patienten im Wartezimmer mit modernen Displays.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-[#334c59] px-6 py-20">
      <Header />
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          Werbung für Arztpraxen in Berlin
        </h1>

        <p className="mb-6 text-lg">
          Mit <strong>Wartezimmer TV und Digital Signage</strong> informieren Sie
          Patienten modern und professionell.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Vorteile für Arztpraxen
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Patienten informieren während der Wartezeit</li>
          <li>Leistungen sichtbar machen</li>
          <li>Moderne Praxiswirkung</li>
        </ul>

      </div>
      <Footer />
    </main>
  );
}