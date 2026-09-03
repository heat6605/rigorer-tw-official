import { SiteFooter, SiteHeader } from "../components/SiteHeader";
import { RagicPortal } from "./RagicPortal";

export default function MemberPage() {
  return <main className="site-shell member-page">
    <SiteHeader active="member" />
    <RagicPortal />
    <SiteFooter />
  </main>;
}
