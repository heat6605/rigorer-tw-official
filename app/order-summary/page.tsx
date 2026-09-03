"use client";

import { useEffect, useMemo, useState } from "react";
import { LINE_URL } from "../catalog";
import { SiteFooter, SiteHeader } from "../components/SiteHeader";

type StyleSelection = { side?:string; styleName?:string; variantName?:string; image?:string; secondaryImage?:string };
type FontSelection = { teamName?:string; number?:string; englishFontName?:string; numberFontName?:string; chineseFontName?:string };

export default function OrderSummaryPage() {
  const [style, setStyle] = useState<StyleSelection | null>(null);
  const [font, setFont] = useState<FontSelection | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      setStyle(JSON.parse(localStorage.getItem("rigorerSelection") ?? "null"));
      setFont(JSON.parse(localStorage.getItem("rigorerFontSelection") ?? "null"));
    } catch { /* device-local selection is optional */ }
  }, []);

  const orderMessage = useMemo(() => {
    if (!style?.styleName || !style?.variantName || !font?.teamName || !font?.englishFontName || !font?.numberFontName || !font?.chineseFontName) return "";
    return `您好，我想訂購籃球衣\n款式是：${style.styleName}\n配色是：${style.variantName}\n隊伍名稱是：${font.teamName}\n號碼是：${font.number || "未填寫"}\n英文字體是：${font.englishFontName}\n數字字體是：${font.numberFontName}\n中文字體是：${font.chineseFontName}`;
  }, [style, font]);

  const copyMessage = async () => {
    if (!orderMessage) return;
    await navigator.clipboard.writeText(orderMessage);
    setCopied(true);
  };

  return <main className="site-shell page-soft">
    <SiteHeader active="fonts" />
    <section className="selector-section selector-subpage"><div className="selector-panel">
      {!orderMessage ? <div className="selection-alert"><span>尚未完成款式、配色、隊名與字體選擇</span><a href="/styles">重新開始選擇 →</a></div> : <div className="step-stage order-result">
        <div className="step-heading"><span>FINAL STEP</span><h3>訂購文字已產生</h3><p>複製以下內容，再傳送給 LINE 官方客服。</p></div>
        <div className="order-result-layout">
          <div className={`order-product-image ${style?.image?.startsWith("/products/") ? "uploaded-order-image" : ""} ${style?.secondaryImage ? "variant-pair" : ""}`}>
            {style?.image && <img src={style.image} alt={`${style.styleName} ${style.variantName}上衣`} />}
            {style?.secondaryImage && <img src={style.secondaryImage} alt={`${style.styleName} ${style.variantName}球褲`} />}
          </div>
          <div className="order-message-card"><span>ORDER MESSAGE</span><pre>{orderMessage}</pre>
            <button className={`copy-message-btn ${copied ? "copied" : ""}`} type="button" onClick={copyMessage}>{copied ? "✓ 已複製訂購文字" : "複製訂購文字"}<b>＋</b></button>
            <a className="font-next-btn" href="/member">填寫客戶資料 <b>→</b></a>
            <a className="line-order-link" href={LINE_URL} target="_blank" rel="noreferrer">前往 LINE 官方客服 <b>↗</b></a>
          </div>
        </div>
        <a className="restart-btn" href="/styles">重新選擇款式與配色</a>
      </div>}
    </div></section>
    <SiteFooter />
  </main>;
}
