import EditorialPage from "@/app/components/EditorialPage";
import { editorialPages } from "@/app/lib/seo/editorial-pages";
import { generatePageMetadata } from "@/app/lib/seo/get-page-seo";
const page = editorialPages["/digital-signage-berlin"];
export async function generateMetadata() { return generatePageMetadata(page.route, { title: page.metaTitle, description: page.metaDescription, image: page.image.src }); }
export default function DigitalSignageBerlinPage() { return <EditorialPage page={page} />; }
