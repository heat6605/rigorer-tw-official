import { SiteFooter, SiteHeader } from "../components/SiteHeader";

export default function ShowcasePage() {
  return <main className="site-shell info-page"><SiteHeader active="showcase" />
    <section className="info-section showcase-intro"><div><span>COMING SOON</span><h2>成品案例整理中</h2><a className="info-primary-link" href="/">先瀏覽款式型錄 <b>→</b></a></div><div className="showcase-placeholder" aria-label="成品展示預留區"><span>01</span><span>02</span><span>03</span><span>04</span></div></section>
    <SiteFooter />
  </main>;
}
