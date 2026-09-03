import { LINE_URL, RIGORER_LOGO } from "../catalog";

export function SiteHeader({ active }: { active: "catalog" | "styles" | "fonts" | "fitting" | "faq" | "process" | "showcase" | "member" }) {
  return <header className="site-header">
    <a className="brand" href="/" aria-label="準者球衣型錄首頁"><img className="brand-logo" src={RIGORER_LOGO} alt="RIGORER 準者" /></a>
    <nav className="main-nav" aria-label="主要導覽">
      <span className="nav-group">
        <a className={active === "catalog" ? "active" : ""} href="/">首頁</a>
        <details className={`nav-dropdown ${active === "styles" ? "active" : ""}`}>
          <summary>款式</summary>
          <div className="nav-submenu">
            <a href="/styles?category=single">籃球－單面</a>
            <a href="/styles?category=double">籃球－雙面</a>
          </div>
        </details>
        <a className={active === "fonts" ? "active" : ""} href="/fonts">字體</a>
      </span>
      <span className="nav-group">
        <a className={active === "faq" ? "active" : ""} href="/faq">常見問題</a>
      </span>
      <span className="nav-group">
        <a className={active === "member" ? "active" : ""} href="/member">客戶資料</a>
      </span>
    </nav>
    <a className="header-line" href={LINE_URL} target="_blank" rel="noreferrer">LINE 客服 <span>↗</span></a>
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="site-footer-main">
      <section className="site-footer-brand" aria-label="品牌資訊">
        <img src={RIGORER_LOGO} alt="RIGORER 準者" />
        <strong>準者 RIGORER<br />台灣獨家代理</strong>
        <p>我們是準者 RIGORER 台灣獨家代理商，提供專業籃球服、團體球衣及客製化服務。從款式、配色、字體到成品製作，協助你打造專屬球隊形象。</p>
      </section>

      <nav className="site-footer-links" aria-label="頁尾快速連結">
        <h2>快速連結</h2>
        <div>
          <a href="/">首頁</a>
          <a href="/styles">款式</a>
          <a href="/fonts">字體</a>
          <a href="/faq">常見問題</a>
          <a href="/member">客戶資料</a>
        </div>
      </nav>

      <section className="site-footer-service">
        <h2>客服諮詢</h2>
        <p>需要了解款式、配色、套量或團體訂購資訊嗎？歡迎加入 LINE 官方帳號，由客服人員協助確認需求與後續製作流程。</p>
        <a href={LINE_URL} target="_blank" rel="noreferrer">加入 LINE 官方客服 <span>↗</span></a>
      </section>
    </div>

    <div className="site-footer-legal">
      <p><strong>斯藍運動股份有限公司</strong><span>統一編號：00220872</span></p>
      <small>© 2026 斯藍運動股份有限公司｜All rights reserved.</small>
    </div>
  </footer>;
}
