"use client";

import { FormEvent, useState } from "react";
import { catalog } from "../catalog";
import { SiteFooter, SiteHeader } from "../components/SiteHeader";

const cities = ["臺北市", "新北市", "桃園市", "臺中市", "臺南市", "高雄市", "基隆市", "新竹市", "新竹縣", "苗栗縣", "彰化縣", "南投縣", "雲林縣", "嘉義市", "嘉義縣", "屏東縣", "宜蘭縣", "花蓮縣", "臺東縣", "澎湖縣", "金門縣", "連江縣"];
const sampleImage = catalog.單面[0].variants[0].image;

type Application = Record<string, string>;

export default function FittingRequestPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [application, setApplication] = useState<Application>({});

  function review(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setApplication(Object.fromEntries(new FormData(event.currentTarget)) as Application);
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function finish() {
    setStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return <main className="site-shell fitting-page">
    <SiteHeader active="fitting" />
    <section className="fitting-section">
      <div className="fitting-steps" aria-label="申請進度">{["套量資訊", "確認資訊", "申請完成"].map((label, index) => <div className={step >= index + 1 ? "active" : ""} key={label}><b>0{index + 1}</b><span>{label}</span>{index < 2 && <i />}</div>)}</div>

      {step === 1 && <form className="fitting-form" onSubmit={review}>
        <FormSection number="01" title="套量申請資訊">
          <div className="fitting-product">
            <img src={sampleImage} alt="籃球套量服示意" />
            <div><small>RIGORER SIZING KIT</small><strong>籃球套量服</strong><p>尺寸範圍依實際庫存安排</p></div>
          </div>
          <div className="fitting-fields fitting-product-fields">
            <Field label="申請類別" required><select name="category" defaultValue="" required><option value="" disabled>請選擇類別</option><option>單面</option><option>雙面</option></select></Field>
            <Field label="預計訂購數量" required><select name="quantity" defaultValue="" required><option value="" disabled>請選擇數量</option><option>1–10 套</option><option>11–20 套</option><option>21–30 套</option><option>31–50 套</option><option>50 套以上</option></select></Field>
            <Field label="申請款式" required wide><select name="style" defaultValue="" required><option value="" disabled>選擇欲套量的款式</option>{catalog.單面.map(style => <option key={style.name}>{style.name}</option>)}</select></Field>
          </div>
        </FormSection>

        <FormSection number="02" title="申請人資訊" tone="soft">
          <div className="fitting-fields fitting-person-fields">
            <Field label="姓名" required><input name="name" autoComplete="name" required /></Field>
            <Field label="手機" required><input name="phone" type="tel" autoComplete="tel" required /></Field>
            <Field label="電子信箱"><input name="email" type="email" autoComplete="email" /></Field>
            <Field label="公司／學校"><input name="organization" /></Field>
            <Field label="單位／科系"><input name="department" /></Field>
            <Field label="隊伍組成" required><select name="group" defaultValue="" required><option value="" disabled>選擇族群</option><option>社會組</option><option>大學／大專</option><option>高中</option><option>國中</option><option>國小</option></select></Field>
            <Field label="收件縣市" required><select name="city" defaultValue="" required><option value="" disabled>選擇縣市</option>{cities.map(city => <option key={city}>{city}</option>)}</select></Field>
            <Field label="收件區域" required><input name="district" placeholder="例如：信義區" required /></Field>
            <Field label="收件地址" required wide><input name="address" autoComplete="street-address" required /></Field>
          </div>
        </FormSection>

        <FormSection number="03" title="申請時程及其他資訊">
          <div className="fitting-fields fitting-schedule-fields">
            <Field label="期望到貨時間" required wide><input name="arrivalDate" type="date" required /><small>建議預留寄送與套量時間，實際日期將由客服確認。</small></Field>
            <Field label="預計比賽時間"><input name="gameDate" type="date" /></Field>
            <Field label="賽事名稱"><input name="eventName" /></Field>
            <Field label="如何知道準者"><select name="source" defaultValue=""><option value="" disabled>請選擇</option><option>網路搜尋</option><option>社群平台</option><option>朋友推薦</option><option>學校／球隊推薦</option><option>其他</option></select></Field>
            <Field label="備註" wide><textarea name="note" rows={4} placeholder="如有特殊尺寸或寄送需求，請在此說明。" /></Field>
          </div>
        </FormSection>
        <button className="fitting-primary" type="submit">確認資料・下一步 <span>→</span></button>
      </form>}

      {step === 2 && <div className="fitting-review">
        <div className="fitting-review-heading"><span>STEP 02</span><h2>確認申請資訊</h2><p>送出前請確認以下資料是否正確。</p></div>
        <div className="fitting-review-grid">{[
          ["申請類別", application.category], ["預計訂購數量", application.quantity], ["申請款式", application.style],
          ["申請人", application.name], ["聯絡手機", application.phone], ["電子信箱", application.email || "—"],
          ["公司／學校", application.organization || "—"], ["單位／科系", application.department || "—"], ["隊伍組成", application.group],
          ["收件地址", `${application.city || ""}${application.district || ""}${application.address || ""}`], ["期望到貨時間", application.arrivalDate], ["預計比賽時間", application.gameDate || "—"],
          ["賽事名稱", application.eventName || "—"], ["資訊來源", application.source || "—"], ["備註", application.note || "—"],
        ].map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
        <div className="fitting-actions"><button type="button" onClick={() => setStep(1)}>← 返回修改</button><button className="fitting-primary" type="button" onClick={finish}>送出套量申請 <span>→</span></button></div>
      </div>}

      {step === 3 && <div className="fitting-complete"><b>✓</b><span>APPLICATION RECEIVED</span><h2>套量申請已完成</h2><p>我們已收到您的申請資料，客服將依填寫資訊與您聯繫並確認庫存與寄送日期。</p><a href="/">返回型錄首頁 <strong>→</strong></a></div>}
    </section>
    <SiteFooter />
  </main>;
}

function FormSection({ number, title, tone, children }: { number: string; title: string; tone?: "soft"; children: React.ReactNode }) {
  return <section className={`fitting-form-section ${tone === "soft" ? "soft" : ""}`}><header><span>{number}</span><div><small>APPLICATION FORM</small><h2>{title}</h2></div></header><div className="fitting-form-body">{children}</div></section>;
}

function Field({ label, required, wide, children }: { label: string; required?: boolean; wide?: boolean; children: React.ReactNode }) {
  return <label className={`fitting-field ${wide ? "wide" : ""}`}><span>{label}{required && <b> *</b>}</span>{children}</label>;
}
