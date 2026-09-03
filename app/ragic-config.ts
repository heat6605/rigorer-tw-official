const DEFAULT_RAGIC_PUBLIC_FORM_URL = "https://ap16.ragic.com/sgbtest/sgb/2?ragic-web-embed=true&webaction=form&ver=new&version=2";

export const RAGIC_PUBLIC_FORM_URL = process.env.NEXT_PUBLIC_RAGIC_PUBLIC_FORM_URL?.trim() || DEFAULT_RAGIC_PUBLIC_FORM_URL;
export const RAGIC_ORDER_LOOKUP_URL = process.env.NEXT_PUBLIC_RAGIC_ORDER_LOOKUP_URL?.trim() ?? "";
export const RAGIC_ADMIN_URL = process.env.NEXT_PUBLIC_RAGIC_ADMIN_URL?.trim() ?? "";

export const RAGIC_FIELD_IDS = {
  side: process.env.NEXT_PUBLIC_RAGIC_FIELD_SIDE?.trim() ?? "",
  style: process.env.NEXT_PUBLIC_RAGIC_FIELD_STYLE?.trim() ?? "",
  color: process.env.NEXT_PUBLIC_RAGIC_FIELD_COLOR?.trim() ?? "",
  font: process.env.NEXT_PUBLIC_RAGIC_FIELD_FONT?.trim() ?? "",
  teamName: process.env.NEXT_PUBLIC_RAGIC_FIELD_TEAM_NAME?.trim() ?? "",
  number: process.env.NEXT_PUBLIC_RAGIC_FIELD_NUMBER?.trim() ?? "",
} as const;

export function addRagicPrefill(baseUrl: string, values: Record<keyof typeof RAGIC_FIELD_IDS, string | undefined>) {
  if (!baseUrl) return "";
  const url = new URL(baseUrl);
  for (const [key, fieldId] of Object.entries(RAGIC_FIELD_IDS)) {
    const value = values[key as keyof typeof RAGIC_FIELD_IDS];
    if (fieldId && value) url.searchParams.set(`pfv${fieldId}`, value);
  }
  return url.toString();
}
