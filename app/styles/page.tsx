"use client";

import { useEffect, useMemo, useState } from "react";
import { allStyles, type JerseyStyle, type Side, type Variant } from "../catalog";
import { SiteFooter, SiteHeader } from "../components/SiteHeader";

type Step = 1 | 2;
type StyleWithSide = JerseyStyle & { side: Side };

export default function StylesPage() {
  const [step, setStep] = useState<Step>(1);
  const [activeSide, setActiveSide] = useState<Side>("單面");
  const [styleKey, setStyleKey] = useState<string | null>(null);
  const [variantName, setVariantName] = useState<string | null>(null);
  const visibleStyles = useMemo(() => allStyles.filter((item) => item.side === activeSide), [activeSide]);
  const selectedStyle = useMemo<StyleWithSide | null>(() => allStyles.find((item) => `${item.side}-${item.name}` === styleKey) ?? null, [styleKey]);
  const selectedVariant: Variant | null = selectedStyle?.variants.find((item) => item.name === variantName) ?? null;

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const requestedStyle = params.get("style");
      const requestedCategory = params.get("category");
      if (requestedCategory === "double") setActiveSide("雙面");
      if (requestedCategory === "single") setActiveSide("單面");
      if (requestedStyle) {
        const match = allStyles.find((item) => item.name === requestedStyle);
        if (match) {
          setActiveSide(match.side);
          setStyleKey(`${match.side}-${match.name}`);
        }
      }
      const stored = JSON.parse(localStorage.getItem("rigorerSelection") ?? "null");
      if (!requestedStyle && stored?.side && stored?.styleName) {
        setStyleKey(`${stored.side}-${stored.styleName}`);
        setVariantName(stored.variantName ?? null);
      }
    } catch { /* device-local selection is optional */ }
  }, []);

  const goTo = (next: Step) => { setStep(next); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const chooseStyle = (key: string) => { setStyleKey(key); setVariantName(null); goTo(2); };
  const saveSelection = () => {
    if (!selectedStyle || !selectedVariant) return;
    localStorage.setItem("rigorerSelection", JSON.stringify({ side: selectedStyle.side, styleName: selectedStyle.name, code: selectedStyle.code, variantName: selectedVariant.name, image: selectedVariant.image, secondaryImage: selectedVariant.secondaryImage }));
  };
  const goToFonts = () => {
    saveSelection();
    localStorage.removeItem("rigorerFontSelection");
    window.location.href = "/fonts";
  };

  return <main className="site-shell page-soft">
    <SiteHeader active="styles" />
    <section className="selector-section selector-subpage"><div className="selector-panel">
      <div className="progress-row">{([1, 2] as const).map((item, index) => <div className="progress-fragment" key={item}>
        <button className={`progress-item ${step >= item ? "active" : ""}`} type="button" disabled={item >= step} onClick={() => item < step && goTo(item)}><b>0{item}</b><span>{["選擇款式", "選擇配色"][index]}</span></button>
        {item < 2 && <div className={`progress-line ${step > item ? "filled" : ""}`} />}
      </div>)}</div>

      {step === 1 && <div className="step-stage">
        <nav className="style-category-tabs" aria-label="球衣款式分類">
          <a className={activeSide === "單面" ? "active" : ""} href="/styles?category=single"><small>BASKETBALL</small><strong>籃球－單面</strong></a>
          <a className={activeSide === "雙面" ? "active" : ""} href="/styles?category=double"><small>BASKETBALL</small><strong>籃球－雙面</strong></a>
        </nav>
        {visibleStyles.length > 0 ? <div className="product-grid style-grid direct-style-grid">{visibleStyles.map((item) => {
          const key = `${item.side}-${item.name}`;
          const thumbnail = item.thumbnail ?? item.variants[0].image;
          return <button className={`product-card ${styleKey === key ? "selected" : ""}`} key={key} type="button" onClick={() => chooseStyle(key)} aria-label={`選擇 ${item.name} 並進入配色`}>
            <span className={`image-wrap ${thumbnail.startsWith("/products/") ? "uploaded-image" : ""}`}><img src={thumbnail} alt={item.name} style={{ objectPosition: item.variants[0].focus }} /></span>
            <span className="product-meta"><small>{item.side}籃球服套裝</small><strong>{item.name}</strong>{(item.code || item.price) && <em>{[item.code, item.price].filter(Boolean).join("・")}</em>}<i>{styleKey === key ? "✓" : "+"}</i></span>
          </button>;
        })}</div> : <div className="style-category-empty"><span>COMING SOON</span><h2>籃球－雙面款式準備中</h2><p>雙面球衣款式將於整理完成後上架，請先瀏覽單面款式。</p><a href="/styles?category=single">查看籃球－單面款式 <b>→</b></a></div>}
      </div>}

      {step === 2 && selectedStyle && <div className="step-stage"><StepHeading number="02" title={`為「${selectedStyle.name}」挑選配色`} description="只顯示這個款式可選的官方配色，螢幕顏色僅供參考。" />
        <div className="selected-style-strip"><span>{selectedStyle.side}</span><strong>{selectedStyle.name}</strong>{selectedStyle.code && <small>{selectedStyle.code}</small>}</div>
        <div className="product-grid color-grid">{selectedStyle.variants.map((variant) => <VariantCard
          key={variant.name}
          styleName={selectedStyle.name}
          styleCode={selectedStyle.code}
          variant={variant}
          selected={variantName === variant.name}
          onSelect={() => setVariantName(variant.name)}
        />)}</div>
        <div className="actions"><button className="back-btn" type="button" onClick={() => goTo(1)}>← 返回選款式</button><ActionButton disabled={!selectedVariant} onClick={goToFonts}>下一步・填寫隊名與選擇字體</ActionButton></div>
      </div>}
    </div></section>
    <SiteFooter />
  </main>;
}

function StepHeading({ number, title, description }: { number: string; title?: string; description: string }) {
  return <div className="step-heading"><span>STEP {number}</span>{title && <h3>{title}</h3>}<p>{description}</p></div>;
}
function ActionButton({ children, disabled, onClick }: { children: React.ReactNode; disabled: boolean; onClick: () => void }) {
  return <button className="continue-btn" type="button" disabled={disabled} onClick={onClick}>{children}<span>→</span></button>;
}

function VariantCard({ styleName, styleCode, variant, selected, onSelect }: { styleName: string; styleCode?: string; variant: Variant; selected: boolean; onSelect: () => void }) {
  const images = variant.secondaryImage ? [variant.image, variant.secondaryImage] : [variant.image];
  const [slide, setSlide] = useState(0);
  const showPrevious = () => setSlide((current) => (current - 1 + images.length) % images.length);
  const showNext = () => setSlide((current) => (current + 1) % images.length);
  const imageLabel = slide === 0 ? "上衣" : "球褲";

  return <article className={`product-card color-carousel-card ${selected ? "selected" : ""}`}>
    <div className={`image-wrap color-carousel ${variant.image.startsWith("/products/") ? "uploaded-image" : ""}`}>
      <button className="color-carousel-select" type="button" onClick={onSelect} aria-label={`選擇 ${styleName} ${variant.name}，目前顯示${imageLabel}`}>
        <img src={images[slide]} alt={`${styleName} ${variant.name}${imageLabel}`} style={{ objectPosition: variant.focus }} />
      </button>
      {images.length > 1 && <>
        <span className="color-carousel-count">{slide + 1}/{images.length}</span>
        <button className="color-carousel-arrow previous" type="button" onClick={showPrevious} aria-label="上一張圖片">‹</button>
        <button className="color-carousel-arrow next" type="button" onClick={showNext} aria-label="下一張圖片">›</button>
        <span className="color-carousel-label">{variant.name}・{imageLabel}</span>
      </>}
    </div>
    <button className="product-meta color-select-meta" type="button" onClick={onSelect}>
      <small>COLOR</small><strong>{variant.name}</strong>{styleCode && <em>{styleCode}</em>}<i>{selected ? "✓" : "+"}</i>
    </button>
  </article>;
}
