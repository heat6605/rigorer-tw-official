"use client";

import { useState } from "react";
import { SiteFooter, SiteHeader } from "./components/SiteHeader";
import { orderSteps } from "./orderSteps";

const catalogPages = [
  { src: "/catalog/260826_電光_A4.jpg", title: "電光", description: "單面籃球服・尺寸 S–5XL" },
  { src: "/catalog/260826_極星_A4.jpg", title: "極星", description: "單面籃球服・尺寸 S–5XL" },
  { src: "/catalog/260826_破風_A4.jpg", title: "破風", description: "單面籃球服・尺寸 S–5XL" },
  { src: "/catalog/260826_獵鷹_A4.jpg", title: "獵鷹", description: "單面籃球服・尺寸 S–5XL" },
  { src: "/catalog/260826_天際線_A4.jpg", title: "天際線", description: "單面籃球服・尺寸 S–5XL" },
  { src: "/catalog/260826_閃電_A4.jpg", title: "閃電", description: "單面籃球服・尺寸 S–5XL" },
  { src: "/catalog/260826_稜線_A4.jpg", title: "稜線", description: "單面籃球服・尺寸 S–5XL" },
  { src: "/catalog/260826_獸牙_A4.jpg", title: "獸牙", description: "單面籃球服・尺寸 S–5XL" },
  { src: "/catalog/260826_脈衝_A4.jpg", title: "脈衝", description: "單面籃球服・尺寸 S–5XL" },
  { src: "/catalog/260826_菱格_A4.jpg", title: "菱格", description: "單面籃球服・尺寸 S–5XL" },
  { src: "/catalog/260826_經典_A4.jpg", title: "經典", description: "單面籃球服・尺寸 S–5XL" },
  { src: "/catalog/260826_先鋒_A4.jpg", title: "先鋒", description: "單面籃球服・尺寸 S–5XL" },
  { src: "/catalog/260826_箭矢_A4.jpg", title: "箭矢", description: "單面籃球服・尺寸 S–5XL" },
  { src: "/catalog/260826_賽道_A4.jpg", title: "賽道", description: "單面籃球服・尺寸 S–5XL" },
  { src: "/catalog/260826_山脊_A4.jpg", title: "山脊", description: "單面籃球服・尺寸 S–5XL" },
  { src: "/catalog/260826_叢林獵手_A4.jpg", title: "叢林獵手", description: "單面籃球服・尺寸 S–5XL" },
  { src: "/catalog/260826_地平線_A4.jpg", title: "地平線", description: "單面籃球服・尺寸 S–5XL" },
];

export default function CatalogPage() {
  const [pageIndex, setPageIndex] = useState(0);
  const [turnDirection, setTurnDirection] = useState<-1 | 1>(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const nextPageIndex = (pageIndex + 1) % catalogPages.length;
  const activePages = [
    { ...catalogPages[pageIndex], index: pageIndex },
    { ...catalogPages[nextPageIndex], index: nextPageIndex },
  ];
  const turnPage = (direction: -1 | 1) => {
    setTurnDirection(direction);
    setPageIndex((current) => (current + direction + catalogPages.length) % catalogPages.length);
  };
  const selectPage = (index: number) => {
    if (index === pageIndex) return;
    setTurnDirection(index > pageIndex ? 1 : -1);
    setPageIndex(index);
  };

  return <main className="site-shell catalog-document-page">
    <SiteHeader active="catalog" />
    <section className="home-banner" aria-label="準者品牌形象">
      <img src="/banner/home-banner.jpg" alt="準者 RIGORER 品牌形象代言人奧斯汀・里夫斯" />
    </section>

    <section className="a4-catalog-section" id="catalog-pages">
      <div className="a4-catalog-heading">
        <div><span>FULL CATALOG</span><h2>推薦款式型錄</h2></div>
      </div>
      <div className="catalog-carousel" tabIndex={0} aria-label="球衣型錄翻頁展示" onKeyDown={(event) => { if (event.key === "ArrowLeft") turnPage(-1); if (event.key === "ArrowRight") turnPage(1); }} onTouchStart={(event) => setTouchStart(event.touches[0].clientX)} onTouchEnd={(event) => { if (touchStart === null) return; const distance = event.changedTouches[0].clientX - touchStart; if (Math.abs(distance) > 45) turnPage(distance > 0 ? -1 : 1); setTouchStart(null); }}>
        <button className="catalog-turn prev" type="button" onClick={() => turnPage(-1)} aria-label="上一頁型錄"><span>←</span><small>PREV</small></button>
        <div className={`catalog-spread ${turnDirection === 1 ? "turn-next" : "turn-prev"}`} key={`${pageIndex}-${nextPageIndex}`}>
          {activePages.map((page) => <article className="catalog-active-page" key={page.src}>
            <a href={page.src} target="_blank" rel="noreferrer" aria-label={`放大查看 ${page.title} 型錄`}><img src={page.src} alt={`${page.title} A4 款式型錄`} /><span>點擊放大 ↗</span></a>
            <div><small>PAGE {String(page.index + 1).padStart(2, "0")}</small><strong>{page.title}</strong><p>{page.description}</p></div>
          </article>)}
        </div>
        <button className="catalog-turn next" type="button" onClick={() => turnPage(1)} aria-label="下一頁型錄"><small>NEXT</small><span>→</span></button>
      </div>
      <div className="catalog-page-tabs" aria-label="選擇型錄頁面"><span>{String(pageIndex + 1).padStart(2, "0")}–{String(nextPageIndex + 1).padStart(2, "0")} / {String(catalogPages.length).padStart(2, "0")}</span><div>{catalogPages.map((page, index) => <button className={index === pageIndex || index === nextPageIndex ? "active" : ""} type="button" onClick={() => selectPage(index)} key={page.src} aria-current={index === pageIndex ? "page" : undefined}><i>{String(index + 1).padStart(2, "0")}</i>{page.title}</button>)}</div></div>
      <p className="catalog-swipe-hint">使用左右按鈕、鍵盤方向鍵，手機可直接左右滑動翻頁。</p>
    </section>

    <section className="home-process-section" id="ordering-process">
      <header><span>HOW TO ORDER</span><h2>訂購流程</h2></header>
      <div className="process-grid home-process-grid">{orderSteps.map((step, index) => <article key={step}><span>{String(index + 1).padStart(2, "0")}</span><small>ORDER STEP</small><h2>{step}</h2></article>)}</div>
    </section>

    <SiteFooter />
  </main>;
}
