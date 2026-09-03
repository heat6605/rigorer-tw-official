"use client";

import { useEffect, useRef, useState } from "react";
import { SiteFooter, SiteHeader } from "../components/SiteHeader";

type FontCategory = "english" | "chinese";
type FontOption = { id:string; name:string; en:string; family:string; file:string; sample:string; category:FontCategory };

const englishFontNames: Record<number, string> = {
  1:"Athletic", 2:"Impact", 3:"Brush Script", 4:"AR Destine", 5:"Bolt Bold", 6:"Raider Crusader", 7:"Ninja", 8:"Airbus Special", 9:"Kimberley", 10:"Hornets Buzz City",
  11:"MStiff Hei", 12:"虛擬玩家", 13:"騎士精神", 14:"Legend M54", 15:"Long Shot", 16:"宇宙星軌", 17:"鋼鐵之刃", 18:"排球字體",
  20:"原生飛翼", 21:"星塵", 22:"閃電", 23:"點陣漸層", 24:"足球 24", 25:"足球 25", 26:"排球 26", 27:"排球 27", 28:"排球 28",
  29:"Academic M54", 30:"IFC Railroad", 31:"自創字體", 32:"Superion", 33:"Vermin Vibes", 35:"Stencil", 36:"Pulsar", 37:"Black Street", 38:"Throwup",
  39:"Blue Jays Wilson", 40:"Walshes", 41:"College Block", 42:"Chewy", 43:"DV43", 44:"Arya Double", 47:"School", 48:"Jersey Sharp",
};
const englishNumbers = [1,2,4,5,6,7,8,9,10,11,12,14,15,17,20,22,23,24,25,28,29,30,31,33,35,36,37,38,40,41,42,43,44,47,48];
const chineseNumbers = [1,6,7,8];
const fonts: FontOption[] = [
  ...englishNumbers.map((fontNumber) => ({ id:`font-en-${fontNumber}`, name:`英文＆數字字體 ${String(fontNumber).padStart(2,"0")}`, en:englishFontNames[fontNumber], family:`DVFont${fontNumber}`, file:`/fonts/font-${fontNumber}.woff2`, sample:"RIGORER 24", category:"english" as const })),
  ...chineseNumbers.map((fontNumber) => ({ id:`font-zh-${fontNumber}`, name:`中文＆數字字體 ${String(fontNumber).padStart(2,"0")}`, en:`CHINESE ${String(fontNumber).padStart(2,"0")}`, family:`DVChinese${fontNumber}`, file:`/fonts/font-zh-${fontNumber}.woff2`, sample:"準者 24", category:"chinese" as const })),
];
const fontFaceCss = [
  ...englishNumbers.map((fontNumber) => `@font-face{font-family:'DVFont${fontNumber}';src:url('/fonts/font-${fontNumber}.woff2') format('woff2');font-display:swap;font-weight:400;}`),
  ...chineseNumbers.map((fontNumber) => `@font-face{font-family:'DVChinese${fontNumber}';src:url('/fonts/font-zh-${fontNumber}.woff2') format('woff2');font-display:swap;font-weight:400;}`),
].join("\n");
const fontsPerPage = 8;
const categoryLabels: Record<FontCategory, string> = { english:"英文＆數字字體", chinese:"中文＆數字字體" };

type StoredSelection = { side?:string; styleName?:string; code?:string; variantName?:string; image?:string };

export default function FontsPage() {
  const [category, setCategory] = useState<FontCategory>("chinese");
  const [fontPage, setFontPage] = useState(0);
  const [playerName, setPlayerName] = useState("");
  const [number, setNumber] = useState("24");
  const [selectedFontId, setSelectedFontId] = useState("");
  const [selection, setSelection] = useState<StoredSelection | null>(null);
  const [previewFit, setPreviewFit] = useState({ nameSize:56, nameOffset:0, numberSize:125, numberOffset:0 });
  const [completionWarning, setCompletionWarning] = useState("");
  const previewTypeRef = useRef<HTMLDivElement>(null);
  const visibleFonts = fonts.filter((font) => font.category === category);
  const selectedFont = fonts.find((font) => font.id === selectedFontId);
  const previewFont = selectedFont ?? visibleFonts[0];
  const pageCount = Math.ceil(visibleFonts.length / fontsPerPage);
  const pagedFonts = visibleFonts.slice(fontPage * fontsPerPage, (fontPage + 1) * fontsPerPage);

  useEffect(() => {
    try {
      setSelection(JSON.parse(localStorage.getItem("rigorerSelection") ?? "null"));
      const storedFont = JSON.parse(localStorage.getItem("rigorerFontSelection") ?? "null");
      if (storedFont?.teamName) setPlayerName(storedFont.teamName);
      if (storedFont?.number) setNumber(storedFont.number);
      const restored = storedFont?.fontId ?? storedFont?.englishFontId ?? storedFont?.chineseFontId ?? "";
      if (fonts.some((font) => font.id === restored)) {
        setSelectedFontId(restored);
        setCategory(fonts.find((font) => font.id === restored)!.category);
      }
    } catch { setSelection(null); }
  }, []);

  useEffect(() => {
    let cancelled = false;
    const fitPreviewText = async () => {
      const container = previewTypeRef.current;
      if (!container) return;
      const previewScale = Math.min(1, container.clientWidth / 500);
      const nameBaseSize = 56 * previewScale;
      const numberBaseSize = 125 * previewScale;
      const displayName = playerName || "TEAM NAME";
      const displayNumber = number || "00";
      await Promise.all([
        document.fonts.load(`400 ${nameBaseSize}px "DVFont1"`, "RIGORER"),
        document.fonts.load(`400 ${nameBaseSize}px "${previewFont.family}"`, displayName),
        document.fonts.load(`400 ${numberBaseSize}px "DVFont1"`, "24"),
        document.fonts.load(`400 ${numberBaseSize}px "${previewFont.family}"`, displayNumber),
      ]);
      if (cancelled) return;
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (!context) return;
      const measure = (text: string, family: string, size: number) => {
        context.font = `400 ${size}px "${family}"`;
        const metrics = context.measureText(text);
        const left = metrics.actualBoundingBoxLeft || 0;
        const right = metrics.actualBoundingBoxRight || metrics.width;
        return { advance:metrics.width, left, right, visualWidth:Math.max(1, left + right) };
      };
      const fitToReference = (referenceText: string, currentText: string, baseSize: number, family: string) => {
        const reference = measure(referenceText, "DVFont1", baseSize);
        const current = measure(currentText, family, baseSize);
        const targetWidth = Math.min(container.clientWidth * .96, reference.visualWidth);
        const scale = Math.min(1, targetWidth / current.visualWidth);
        const size = baseSize * scale;
        const offset = (current.advance - current.right + current.left) * scale / 2;
        return { size:Math.round(size * 10) / 10, offset:Math.round(offset * 10) / 10 };
      };
      const fittedName = fitToReference("RIGORER", displayName, nameBaseSize, previewFont.family);
      const fittedNumber = fitToReference("24", displayNumber, numberBaseSize, previewFont.family);
      setPreviewFit({ nameSize:fittedName.size, nameOffset:fittedName.offset, numberSize:fittedNumber.size, numberOffset:fittedNumber.offset });
    };
    fitPreviewText();
    window.addEventListener("resize", fitPreviewText);
    return () => { cancelled = true; window.removeEventListener("resize", fitPreviewText); };
  }, [previewFont.family, playerName, number]);

  const changeCategory = (nextCategory: FontCategory) => {
    setCategory(nextCategory);
    setFontPage(0);
  };

  const chooseFont = (font: FontOption) => {
    if (!playerName.trim()) return;
    setSelectedFontId(font.id);
    setCompletionWarning("");
  };

  const goToOrderSummary = () => {
    if (!playerName.trim()) {
      setCompletionWarning("請先填寫隊伍名稱，並選擇一款中文或英文字體。");
      return;
    }
    if (!selectedFont) {
      setCompletionWarning("中文＆數字字體或英文＆數字字體擇一，挑選一款後即可進入下一步。");
      return;
    }
    setCompletionWarning("");
    try { localStorage.setItem("rigorerFontSelection", JSON.stringify({
      teamName:playerName.trim(), number,
      fontId:selectedFont.id, fontName:selectedFont.name, fontCategory:selectedFont.category,
    })); }
    catch { /* device-local selection is optional */ }
    window.location.href = "/order-summary";
  };

  return <main className="site-shell page-soft"><style>{fontFaceCss}</style>
    <SiteHeader active="fonts" />
    <section className="font-section">
      {!selection?.styleName && <div className="selection-alert"><span>尚未完成款式選擇</span><a href="/styles">先去挑選款式 →</a></div>}
      <div className="font-layout">
        <div className="font-controls">
          <div className="input-row"><label>隊伍名稱 <b className="required-mark">必填</b><input value={playerName} maxLength={12} onChange={(event) => setPlayerName(event.target.value.toUpperCase())} placeholder="請輸入隊伍名稱" required /></label><label>號碼<input value={number} maxLength={2} inputMode="numeric" onChange={(event) => setNumber(event.target.value.replace(/\D/g,""))} placeholder="23" /></label></div>
          {!playerName.trim() && <p className="font-name-required">請先填寫隊伍名稱，再從中文或英文字體中擇一挑選。</p>}
          <div className="font-heading"><span>FONT COLLECTION</span><h2>挑選字體</h2></div>
          <div className="font-category-tabs" role="tablist" aria-label="字體分類">
            <button className={category === "chinese" ? "active" : ""} type="button" onClick={() => changeCategory("chinese")}>選中文＆數字字體</button>
            <button className={category === "english" ? "active" : ""} type="button" onClick={() => changeCategory("english")}>選英文＆數字字體</button>
          </div>
          <div className="font-page-status"><span>{categoryLabels[category]}・擇一選擇</span><strong>第 {fontPage + 1} 頁，共 {pageCount} 頁</strong></div>
          <div className="font-grid">{pagedFonts.map((font) => <button className={`font-card ${selectedFontId === font.id ? "selected" : ""}`} type="button" key={font.id} disabled={!playerName.trim()} onClick={() => chooseFont(font)}>
            <span className="font-sample" style={{ fontFamily:font.family }}>{font.sample}</span><span className="font-meta"><small>{font.en}</small><strong>{font.name}</strong><i>{selectedFontId === font.id ? "✓" : "+"}</i></span>
          </button>)}</div>
          <nav className="font-pagination" aria-label="字體分頁">
            <button type="button" className="font-page-arrow" disabled={fontPage === 0} onClick={() => setFontPage((page) => page - 1)}>← 上一頁</button>
            <div>{Array.from({ length: pageCount }, (_, page) => <button type="button" className={page === fontPage ? "active" : ""} aria-current={page === fontPage ? "page" : undefined} onClick={() => setFontPage(page)} key={page}>{page + 1}</button>)}</div>
            <button type="button" className="font-page-arrow" disabled={fontPage === pageCount - 1} onClick={() => setFontPage((page) => page + 1)}>下一頁 →</button>
          </nav>
          <button className="continue-btn font-complete-action" type="button" onClick={goToOrderSummary}>下一步・產生訂購文字<span>→</span></button>
          {completionWarning && <p className="font-completion-warning" role="alert" aria-live="polite">{completionWarning}</p>}
        </div>

        <aside className="jersey-preview-panel">
          <div className="preview-title-row"><span className="preview-label">LIVE PREVIEW</span></div>
          <div className="jersey-preview-art" aria-live="polite"><img src="/jersey-font-preview.png" alt="準者白色籃球衣字體展示" /><div className="preview-type" ref={previewTypeRef} key={selectedFontId}><span className="preview-name" style={{ fontFamily:previewFont.family, fontSize:previewFit.nameSize, left:`calc(50% + ${previewFit.nameOffset}px)` }}>{playerName || "TEAM NAME"}</span><strong className="preview-number" style={{ fontFamily:previewFont.family, fontSize:previewFit.numberSize, left:`calc(50% + ${previewFit.numberOffset}px)` }}>{number || "00"}</strong></div></div>
          <div className="preview-summary">
            <div><span>選擇字體</span><strong>{selectedFont?.name ?? "尚未選擇"}</strong></div>
          </div>
        </aside>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
