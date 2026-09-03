import { SiteFooter, SiteHeader } from "../components/SiteHeader";

const faqGroups = [
  {
    id: "ordering",
    label: "訂購與報價",
    questions: [
      ["準者球衣的訂購流程是什麼？", "先挑選款式及配色，再選擇字體，將需求傳送給 LINE 官方客服。客服會協助確認示意圖與報價，完成付款後安排商品製作，最後包裝出貨。"],
      ["最低訂購數量是多少？", "最低訂購數量會依款式、製作方式與當次需求確認。選好款式後，請將需求傳送給 LINE 官方客服取得正式報價。"],
      ["如何詢問價格與製作時間？", "網站不直接顯示價格與固定交期。完成款式、配色及字體選擇後，請聯繫 LINE 官方客服，客服會依數量、客製內容及預計使用日期提供說明。"],
      ["付款後還能修改數量或印字資料嗎？", "訂單確認並進入製作後，修改可能影響交期或產生額外費用。若需要異動，請儘快提供訂單資訊並聯繫 LINE 官方客服確認。"],
      ["付款方式與發票如何處理？", "付款方式會依正式報價單與客服說明為準。如需公司抬頭、統一編號或報帳資料，請在確認訂單時一併告知客服。"],
    ],
  },
  {
    id: "design",
    label: "設計與客製",
    questions: [
      ["可以製作單面與雙面球衣嗎？", "可以。款式頁會標示可選款式；點選款式後，系統會顯示該款提供的官方配色。"],
      ["可以自訂隊伍名稱、號碼與字體嗎？", "可以。字體頁可輸入隊伍名稱與號碼，並即時比較不同中、英文字體的呈現效果。正式製作內容仍以客服提供的示意圖為準。"],
      ["訂購前會先看到球衣示意圖嗎？", "會。客服收到完整需求後，會依訂購流程提供示意圖與報價內容；請確認款式、配色、文字、號碼及數量無誤後再進行訂購。"],
      ["螢幕上的顏色就是成品顏色嗎？", "網站配色與螢幕預覽僅供挑選參考。實際成品可能因布料、製作方式、環境光線及裝置顯色而有些微差異。"],
    ],
  },
  {
    id: "sizing",
    label: "尺寸與套量",
    questions: [
      ["如何選擇合適的球衣尺寸？", "建議依實際身形、穿著習慣及球衣版型選擇。如團隊需要確認尺寸，可使用網站的套量申請功能，再由客服確認可安排的款式與尺寸。"],
      ["套量服如何申請？", "進入套量申請頁，填寫申請類別、款式、數量、聯絡與寄送資訊後送出。實際庫存、寄送日期與相關安排會由客服另行確認。"],
      ["每一款球衣的版型都完全相同嗎？", "不同款式與製作結構可能有穿著差異。若尺寸選擇較敏感，建議在正式確認訂單前先向客服說明需求或申請套量。"],
    ],
  },
  {
    id: "service",
    label: "配送與售後",
    questions: [
      ["商品完成後如何出貨？", "商品製作完成並通過檢查後會進行包裝出貨。配送方式、運費及預計到貨時間會依訂單與收件地點由客服確認。"],
      ["收到商品後發現問題怎麼辦？", "請先保留商品、包裝與訂單資料，並拍攝可清楚辨識問題的照片，儘快傳送給 LINE 官方客服協助確認。"],
      ["原有款式可以追加訂購嗎？", "如需追加，請提供原訂單編號或原有示意圖給 LINE 官方客服。客服會依款式、布料與當時製作條件確認是否能追加及相關安排。"],
    ],
  },
] as const;

export default function FaqPage() {
  return <main className="site-shell info-page"><SiteHeader active="faq" />
    <section className="info-section faq-section">
      <header className="faq-heading"><span>FAQ</span><h1>常見問題</h1><p>依主題快速查看訂購、設計、套量與售後資訊；實際報價與製作安排以 LINE 官方客服確認為準。</p></header>
      <nav className="faq-categories" aria-label="常見問題分類">{faqGroups.map((group, index) => <a key={group.id} href={`#${group.id}`}><b>{String(index + 1).padStart(2, "0")}</b>{group.label}</a>)}</nav>
      <div className="faq-groups">{faqGroups.map((group, groupIndex) => <section className="faq-group" id={group.id} key={group.id}>
        <header><span>{String(groupIndex + 1).padStart(2, "0")}</span><h2>{group.label}</h2></header>
        <div className="faq-list">{group.questions.map(([question, answer], index) => <details key={question} open={groupIndex === 0 && index === 0}><summary><b>{String(index + 1).padStart(2, "0")}</b><strong>{question}</strong><span>＋</span></summary><p>{answer}</p></details>)}</div>
      </section>)}</div>
    </section>
    <SiteFooter />
  </main>;
}
