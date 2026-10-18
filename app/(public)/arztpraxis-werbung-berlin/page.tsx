import EditorialPage from "@/app/components/EditorialPage";
import { editorialPages } from "@/app/lib/seo/editorial-pages";
import { publicPageMetadata } from "@/app/lib/seo/public-metadata";
const page = editorialPages["/arztpraxis-werbung-berlin"];
export const metadata = publicPageMetadata(page.route, page.metaTitle, page.metaDescription);
export default function ArztpraxisWerbungBerlinPage() { return <EditorialPage page={page} />; }
