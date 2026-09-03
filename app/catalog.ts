export type Side = "單面" | "雙面";
export type Variant = { name: string; image: string; secondaryImage?: string; focus?: string };
export type JerseyStyle = { name: string; code?: string; price?: string; thumbnail?: string; variants: Variant[] };

export const LINE_URL = "https://line.me/R/ti/p/@471uklmn";
export const RIGORER_LOGO = "https://media.base44.com/images/public/6a4e51818e5e7fe00b233192/ec9709c5e_.png";

export const uploadedSingleStyles: JerseyStyle[] = [
  { name: "電光", thumbnail: "/products/dianguang.jpg", variants: [
    { name: "黑", image: "/products/dianguang-colors/black-top.jpg", secondaryImage: "/products/dianguang-colors/black-shorts.jpg" },
    { name: "灰", image: "/products/dianguang-colors/gray-top.jpg", secondaryImage: "/products/dianguang-colors/gray-shorts.jpg" },
    { name: "靛", image: "/products/dianguang-colors/indigo-top.jpg", secondaryImage: "/products/dianguang-colors/indigo-shorts.jpg" },
    { name: "紅", image: "/products/dianguang-colors/red-top.jpg", secondaryImage: "/products/dianguang-colors/red-shorts.jpg" },
    { name: "紫", image: "/products/dianguang-colors/purple-top.jpg", secondaryImage: "/products/dianguang-colors/purple-shorts.jpg" },
  ] },
  { name: "極星", thumbnail: "/products/jixing.jpg", variants: [
    { name: "黑", image: "/products/jixing-colors/black-top.jpg", secondaryImage: "/products/jixing-colors/black-shorts.jpg" },
    { name: "紅", image: "/products/jixing-colors/red-top.jpg", secondaryImage: "/products/jixing-colors/red-shorts.jpg" },
    { name: "黃", image: "/products/jixing-colors/yellow-top.jpg", secondaryImage: "/products/jixing-colors/yellow-shorts.jpg" },
    { name: "靛", image: "/products/jixing-colors/indigo-top.jpg", secondaryImage: "/products/jixing-colors/indigo-shorts.jpg" },
    { name: "藍", image: "/products/jixing-colors/blue-top.jpg", secondaryImage: "/products/jixing-colors/blue-shorts.jpg" },
    { name: "紫", image: "/products/jixing-colors/purple-top.jpg", secondaryImage: "/products/jixing-colors/purple-shorts.jpg" },
  ] },
  { name: "破風", thumbnail: "/products/pofeng.jpg", variants: [
    { name: "紅", image: "/products/pofeng-colors/red-top.jpg", secondaryImage: "/products/pofeng-colors/red-shorts.jpg" },
    { name: "黑", image: "/products/pofeng-colors/black-top.jpg", secondaryImage: "/products/pofeng-colors/black-shorts.jpg" },
    { name: "黃", image: "/products/pofeng-colors/yellow-top.jpg", secondaryImage: "/products/pofeng-colors/yellow-shorts.jpg" },
    { name: "靛", image: "/products/pofeng-colors/indigo-top.jpg", secondaryImage: "/products/pofeng-colors/indigo-shorts.jpg" },
    { name: "藍", image: "/products/pofeng-colors/blue-top.jpg", secondaryImage: "/products/pofeng-colors/blue-shorts.jpg" },
    { name: "紫", image: "/products/pofeng-colors/purple-top.jpg", secondaryImage: "/products/pofeng-colors/purple-shorts.jpg" },
  ] },
  { name: "獵鷹", thumbnail: "/products/lieying.jpg", variants: [
    { name: "紅", image: "/products/lieying-colors/red-top.jpg", secondaryImage: "/products/lieying-colors/red-shorts.jpg" },
    { name: "黑", image: "/products/lieying-colors/black-top.jpg", secondaryImage: "/products/lieying-colors/black-shorts.jpg" },
    { name: "靛", image: "/products/lieying-colors/indigo-top.jpg", secondaryImage: "/products/lieying-colors/indigo-shorts.jpg" },
    { name: "紫", image: "/products/lieying-colors/purple-top.jpg", secondaryImage: "/products/lieying-colors/purple-shorts.jpg" },
    { name: "藍", image: "/products/lieying-colors/blue-top.jpg", secondaryImage: "/products/lieying-colors/blue-shorts.jpg" },
    { name: "綠", image: "/products/lieying-colors/green-top.jpg", secondaryImage: "/products/lieying-colors/green-shorts.jpg" },
  ] },
  { name: "天際線", thumbnail: "/products/tianjixian.jpg", variants: [
    { name: "紅", image: "/products/tianjixian-colors/red-top.jpg", secondaryImage: "/products/tianjixian-colors/red-shorts.jpg" },
    { name: "藍", image: "/products/tianjixian-colors/blue-top.jpg", secondaryImage: "/products/tianjixian-colors/blue-shorts.jpg" },
    { name: "金", image: "/products/tianjixian-colors/gold-top.jpg", secondaryImage: "/products/tianjixian-colors/gold-shorts.jpg" },
    { name: "橘", image: "/products/tianjixian-colors/orange-top.jpg", secondaryImage: "/products/tianjixian-colors/orange-shorts.jpg" },
    { name: "綠", image: "/products/tianjixian-colors/green-top.jpg", secondaryImage: "/products/tianjixian-colors/green-shorts.jpg" },
    { name: "紫", image: "/products/tianjixian-colors/purple-top.jpg", secondaryImage: "/products/tianjixian-colors/purple-shorts.jpg" },
  ] },
  { name: "閃電", thumbnail: "/products/shandian.jpg", variants: [
    { name: "藍", image: "/products/shandian-colors/indigo-pink-top.jpg", secondaryImage: "/products/shandian-colors/indigo-pink-shorts.jpg" },
    { name: "紅黑", image: "/products/shandian-colors/red-black-top.jpg", secondaryImage: "/products/shandian-colors/red-black-shorts.jpg" },
    { name: "黃黑", image: "/products/shandian-colors/black-orange-top.jpg", secondaryImage: "/products/shandian-colors/black-orange-shorts.jpg" },
    { name: "紫", image: "/products/shandian-colors/purple-white-top.jpg", secondaryImage: "/products/shandian-colors/purple-white-shorts.jpg" },
    { name: "橘紅", image: "/products/shandian-colors/orange-red-top.jpg", secondaryImage: "/products/shandian-colors/orange-red-shorts.jpg" },
    { name: "綠", image: "/products/shandian-colors/green-orange-top.jpg", secondaryImage: "/products/shandian-colors/green-orange-shorts.jpg" },
  ] },
  { name: "稜線", thumbnail: "/products/lengxian.jpg", variants: [
    { name: "紅", image: "/products/lengxian-colors/red-top.jpg", secondaryImage: "/products/lengxian-colors/red-shorts.jpg" },
    { name: "藍", image: "/products/lengxian-colors/blue-top.jpg", secondaryImage: "/products/lengxian-colors/blue-shorts.jpg" },
    { name: "金", image: "/products/lengxian-colors/gold-top.jpg", secondaryImage: "/products/lengxian-colors/gold-shorts.jpg" },
    { name: "橘", image: "/products/lengxian-colors/orange-top.jpg", secondaryImage: "/products/lengxian-colors/orange-shorts.jpg" },
    { name: "綠", image: "/products/lengxian-colors/green-top.jpg", secondaryImage: "/products/lengxian-colors/green-shorts.jpg" },
    { name: "紫", image: "/products/lengxian-colors/purple-top.jpg", secondaryImage: "/products/lengxian-colors/purple-shorts.jpg" },
  ] },
  { name: "獸牙", thumbnail: "/products/shouya.jpg", variants: [
    { name: "紅", image: "/products/shouya-colors/red-top.jpg", secondaryImage: "/products/shouya-colors/red-shorts.jpg" },
    { name: "黑", image: "/products/shouya-colors/black-top.jpg", secondaryImage: "/products/shouya-colors/black-shorts.jpg" },
    { name: "紫", image: "/products/shouya-colors/purple-top.jpg", secondaryImage: "/products/shouya-colors/purple-shorts.jpg" },
    { name: "黃", image: "/products/shouya-colors/yellow-top.jpg", secondaryImage: "/products/shouya-colors/yellow-shorts.jpg" },
    { name: "藍", image: "/products/shouya-colors/blue-top.jpg", secondaryImage: "/products/shouya-colors/blue-shorts.jpg" },
    { name: "綠", image: "/products/shouya-colors/green-top.jpg", secondaryImage: "/products/shouya-colors/green-shorts.jpg" },
  ] },
  { name: "脈衝", thumbnail: "/products/maichong.jpg", variants: [
    { name: "紅", image: "/products/maichong-colors/red-top.jpg", secondaryImage: "/products/maichong-colors/red-shorts.jpg" },
    { name: "黑", image: "/products/maichong-colors/black-top.jpg", secondaryImage: "/products/maichong-colors/black-shorts.jpg" },
    { name: "靛", image: "/products/maichong-colors/indigo-top.jpg", secondaryImage: "/products/maichong-colors/indigo-shorts.jpg" },
    { name: "橘", image: "/products/maichong-colors/orange-top.jpg", secondaryImage: "/products/maichong-colors/orange-shorts.jpg" },
    { name: "藍", image: "/products/maichong-colors/blue-top.jpg", secondaryImage: "/products/maichong-colors/blue-shorts.jpg" },
    { name: "綠", image: "/products/maichong-colors/green-top.jpg", secondaryImage: "/products/maichong-colors/green-shorts.jpg" },
  ] },
  { name: "菱格", variants: [{ name: "紫黃", image: "/products/lingge.jpg" }] },
  { name: "經典", variants: [{ name: "紅白", image: "/products/jingdian.jpg" }] },
  { name: "先鋒", variants: [{ name: "藍白", image: "/products/xianfeng.jpg" }] },
  { name: "箭矢", thumbnail: "/products/jianshi.jpg", variants: [
    { name: "紫", image: "/products/jianshi-colors/purple-top.jpg", secondaryImage: "/products/jianshi-colors/purple-shorts.jpg" },
    { name: "黑", image: "/products/jianshi-colors/black-top.jpg", secondaryImage: "/products/jianshi-colors/black-shorts.jpg" },
    { name: "紅", image: "/products/jianshi-colors/red-top.jpg", secondaryImage: "/products/jianshi-colors/red-shorts.jpg" },
    { name: "黃", image: "/products/jianshi-colors/yellow-top.jpg", secondaryImage: "/products/jianshi-colors/yellow-shorts.jpg" },
    { name: "藍", image: "/products/jianshi-colors/blue-top.jpg", secondaryImage: "/products/jianshi-colors/blue-shorts.jpg" },
    { name: "綠", image: "/products/jianshi-colors/green-top.jpg", secondaryImage: "/products/jianshi-colors/green-shorts.jpg" },
  ] },
  { name: "賽道", thumbnail: "/products/saidao.jpg", variants: [
    { name: "紅", image: "/products/saidao-colors/red-top.jpg", secondaryImage: "/products/saidao-colors/red-shorts.jpg" },
    { name: "黑", image: "/products/saidao-colors/black-top.jpg", secondaryImage: "/products/saidao-colors/black-shorts.jpg" },
    { name: "紫", image: "/products/saidao-colors/purple-top.jpg", secondaryImage: "/products/saidao-colors/purple-shorts.jpg" },
    { name: "金", image: "/products/saidao-colors/gold-top.jpg", secondaryImage: "/products/saidao-colors/gold-shorts.jpg" },
    { name: "藍", image: "/products/saidao-colors/blue-top.jpg", secondaryImage: "/products/saidao-colors/blue-shorts.jpg" },
    { name: "綠", image: "/products/saidao-colors/green-top.jpg", secondaryImage: "/products/saidao-colors/green-shorts.jpg" },
  ] },
  { name: "山脊", thumbnail: "/products/shanji.jpg", variants: [
    { name: "紅", image: "/products/shanji-colors/red-top.jpg", secondaryImage: "/products/shanji-colors/red-shorts.jpg" },
    { name: "黑", image: "/products/shanji-colors/black-top.jpg", secondaryImage: "/products/shanji-colors/black-shorts.jpg" },
    { name: "紫", image: "/products/shanji-colors/purple-top.jpg", secondaryImage: "/products/shanji-colors/purple-shorts.jpg" },
    { name: "橘", image: "/products/shanji-colors/orange-top.jpg", secondaryImage: "/products/shanji-colors/orange-shorts.jpg" },
    { name: "藍", image: "/products/shanji-colors/blue-top.jpg", secondaryImage: "/products/shanji-colors/blue-shorts.jpg" },
    { name: "綠", image: "/products/shanji-colors/green-top.jpg", secondaryImage: "/products/shanji-colors/green-shorts.jpg" },
  ] },
  { name: "叢林獵手", thumbnail: "/products/conglinlieshou.jpg", variants: [
    { name: "綠", image: "/products/conglinlieshou-colors/green-top.jpg", secondaryImage: "/products/conglinlieshou-colors/green-shorts.jpg" },
    { name: "黑", image: "/products/conglinlieshou-colors/black-top.jpg", secondaryImage: "/products/conglinlieshou-colors/black-shorts.jpg" },
    { name: "紅", image: "/products/conglinlieshou-colors/red-top.jpg", secondaryImage: "/products/conglinlieshou-colors/red-shorts.jpg" },
    { name: "橘", image: "/products/conglinlieshou-colors/orange-top.jpg", secondaryImage: "/products/conglinlieshou-colors/orange-shorts.jpg" },
    { name: "藍", image: "/products/conglinlieshou-colors/blue-top.jpg", secondaryImage: "/products/conglinlieshou-colors/blue-shorts.jpg" },
    { name: "紫", image: "/products/conglinlieshou-colors/purple-top.jpg", secondaryImage: "/products/conglinlieshou-colors/purple-shorts.jpg" },
  ] },
  { name: "地平線", thumbnail: "/products/dipingxian.jpg", variants: [
    { name: "靛", image: "/products/dipingxian-colors/indigo-top.jpg", secondaryImage: "/products/dipingxian-colors/indigo-shorts.jpg" },
    { name: "紅", image: "/products/dipingxian-colors/red-top.jpg", secondaryImage: "/products/dipingxian-colors/red-shorts.jpg" },
    { name: "紫", image: "/products/dipingxian-colors/purple-top.jpg", secondaryImage: "/products/dipingxian-colors/purple-shorts.jpg" },
    { name: "黃", image: "/products/dipingxian-colors/yellow-top.jpg", secondaryImage: "/products/dipingxian-colors/yellow-shorts.jpg" },
    { name: "藍", image: "/products/dipingxian-colors/blue-top.jpg", secondaryImage: "/products/dipingxian-colors/blue-shorts.jpg" },
    { name: "綠", image: "/products/dipingxian-colors/green-top.jpg", secondaryImage: "/products/dipingxian-colors/green-shorts.jpg" },
  ] },
];

export const catalog: Record<Side, JerseyStyle[]> = {
  單面: uploadedSingleStyles,
  雙面: [
    { name: "菱格", thumbnail: "/products/lingge-double-colors/yellow-black-top.jpg", variants: [
      { name: "黃黑", image: "/products/lingge-double-colors/yellow-black-top.jpg", secondaryImage: "/products/lingge-double-colors/yellow-black-shorts.jpg" },
      { name: "黑紅", image: "/products/lingge-double-colors/black-red-top.jpg", secondaryImage: "/products/lingge-double-colors/black-red-shorts.jpg" },
      { name: "紅黑", image: "/products/lingge-double-colors/red-black-top.jpg", secondaryImage: "/products/lingge-double-colors/red-black-shorts.jpg" },
      { name: "紫黃", image: "/products/lingge-double-colors/purple-yellow-top.jpg", secondaryImage: "/products/lingge-double-colors/purple-yellow-shorts.jpg" },
      { name: "綠靛", image: "/products/lingge-double-colors/green-navy-top.jpg", secondaryImage: "/products/lingge-double-colors/green-navy-shorts.jpg" },
      { name: "藍黃", image: "/products/lingge-double-colors/blue-yellow-top.jpg", secondaryImage: "/products/lingge-double-colors/blue-yellow-shorts.jpg" },
      { name: "靛藍綠", image: "/products/lingge-double-colors/navy-aqua-top.jpg", secondaryImage: "/products/lingge-double-colors/navy-aqua-shorts.jpg" },
    ] },
    { name: "山脊", thumbnail: "/products/shanji-double-colors/black-gold-top.jpg", variants: [
      { name: "黑金", image: "/products/shanji-double-colors/black-gold-top.jpg", secondaryImage: "/products/shanji-double-colors/black-gold-shorts.jpg" },
      { name: "紅白", image: "/products/shanji-double-colors/red-white-top.jpg", secondaryImage: "/products/shanji-double-colors/red-white-shorts.jpg" },
      { name: "綠白", image: "/products/shanji-double-colors/green-white-top.jpg", secondaryImage: "/products/shanji-double-colors/green-white-shorts.jpg" },
      { name: "藍白", image: "/products/shanji-double-colors/blue-white-top.jpg", secondaryImage: "/products/shanji-double-colors/blue-white-shorts.jpg" },
      { name: "紫白", image: "/products/shanji-double-colors/purple-white-top.jpg", secondaryImage: "/products/shanji-double-colors/purple-white-shorts.jpg" },
      { name: "橘白", image: "/products/shanji-double-colors/orange-white-top.jpg", secondaryImage: "/products/shanji-double-colors/orange-white-shorts.jpg" },
    ] },
  ],
};

export const allStyles = (["單面", "雙面"] as Side[]).flatMap((side) => catalog[side].map((style) => ({ ...style, side })));
