import { SiteFooter, SiteHeader } from "../components/SiteHeader";
import { RAGIC_ADMIN_URL } from "../ragic-config";

export default function AdminPage() {
  return <main className="site-shell member-page">
    <SiteHeader active="member" />
    <section className="ragic-admin-handoff">
      <h1>管理後台</h1>
      {RAGIC_ADMIN_URL && <a href={RAGIC_ADMIN_URL} target="_blank" rel="noreferrer">開啟管理後台 <b>↗</b></a>}
    </section>
    <SiteFooter />
  </main>;
}
