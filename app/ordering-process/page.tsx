import { SiteFooter, SiteHeader } from "../components/SiteHeader";
import { orderSteps } from "../orderSteps";

export default function OrderingProcessPage() {
  return <main className="site-shell info-page"><SiteHeader active="process" />
    <section className="info-section"><div className="process-grid">{orderSteps.map((step, index) => <article key={step}><span>{String(index + 1).padStart(2, "0")}</span><small>ORDER STEP</small><h2>{step}</h2></article>)}</div><a className="info-primary-link" href="/styles">開始挑選款式 <b>→</b></a></section>
    <SiteFooter />
  </main>;
}
