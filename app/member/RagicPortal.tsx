"use client";

import { useEffect, useMemo, useState } from "react";
import { addRagicPrefill, RAGIC_ORDER_LOOKUP_URL, RAGIC_PUBLIC_FORM_URL } from "../ragic-config";

type SavedDesign = { side?: string; styleName?: string; variantName?: string; fontName?: string; teamName?: string; number?: string };

export function RagicPortal() {
  const [design, setDesign] = useState<SavedDesign>({});

  useEffect(() => {
    try {
      const style = JSON.parse(localStorage.getItem("rigorerSelection") ?? "{}");
      const font = JSON.parse(localStorage.getItem("rigorerFontSelection") ?? "{}");
      setDesign({ ...style, ...font });
    } catch { setDesign({}); }
  }, []);

  const formUrl = useMemo(() => addRagicPrefill(RAGIC_PUBLIC_FORM_URL, {
    side: design.side, style: design.styleName, color: design.variantName, font: design.fontName, teamName: design.teamName, number: design.number,
  }), [design]);
  const connected = Boolean(RAGIC_PUBLIC_FORM_URL);
  const hasDesign = Boolean(design.styleName || design.fontName);

  return <section className="ragic-portal">
    <div className="ragic-order-intro">
      <header><span>CUSTOMER FORM</span><h1>客戶訂購資料</h1><p>請在此完成資料填寫，送出後再前往 LINE 官方客服接續詢價與訂購流程。</p></header>
      {hasDesign && <div className="ragic-design-summary"><span>已帶入的選擇</span><dl>
        <div><dt>類別</dt><dd>{design.side || "尚未選擇"}</dd></div><div><dt>款式</dt><dd>{design.styleName || "尚未選擇"}</dd></div><div><dt>配色</dt><dd>{design.variantName || "尚未選擇"}</dd></div>
        <div><dt>字體</dt><dd>{design.fontName || "尚未選擇"}</dd></div><div><dt>隊伍名稱</dt><dd>{design.teamName || "尚未填寫"}</dd></div><div><dt>號碼</dt><dd>{design.number || "尚未填寫"}</dd></div>
      </dl></div>}
    </div>
    <div className="ragic-action-panel">
      {connected ? <div className="ragic-embed-wrap">
        <iframe className="ragic-embed" src={formUrl} title="客戶訂購資料表單" loading="eager" referrerPolicy="strict-origin-when-cross-origin" />
        <p>若表單沒有正常顯示，請<a href={formUrl} target="_blank" rel="noreferrer">另開視窗填寫 <span>↗</span></a></p>
      </div> : <div className="ragic-not-connected" role="status"><strong>表單目前無法顯示，請稍後再試。</strong></div>}
      <div className="ragic-secondary-actions"><a href="/styles">挑選款式與配色 <span>→</span></a>{RAGIC_ORDER_LOOKUP_URL && <a href={RAGIC_ORDER_LOOKUP_URL} target="_blank" rel="noreferrer">查詢訂單紀錄 <span>↗</span></a>}</div>
    </div>
  </section>;
}
