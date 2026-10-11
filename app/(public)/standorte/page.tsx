import { generatePageMetadata } from "@/app/lib/seo/get-page-seo";
import { getPublicLocations } from "@/app/lib/locations/get-locations";
import StandorteClient from "./StandorteClient";

export async function generateMetadata() {
  return generatePageMetadata("/standorte", {
    title: "DokTV-Standorte | Digitale Werbeflächen ansehen",
    description: "Entdecken Sie verfügbare DokTV-Standorte und fragen Sie passende digitale Werbeflächen in Apotheken und Praxen an.",
  });
}

export default async function StandortePage() {
  const locations = await getPublicLocations();

  return <StandorteClient locations={locations} />;
}
