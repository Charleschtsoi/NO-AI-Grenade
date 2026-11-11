export const locales = ["en", "zh-cn"] as const;

export type Locale = (typeof locales)[number];

export function pathFor(locale: Locale): string {
  return locale === "en" ? "/" : "/zh-cn";
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
