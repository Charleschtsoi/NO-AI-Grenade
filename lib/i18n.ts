export const SITE_URL = "https://noaigrenade.vercel.app";

export const localeMeta = [
  {
    id: "en",
    path: "/",
    label: "English",
    htmlLang: "en",
    hreflang: "en",
    og: "en",
  },
  {
    id: "zh-cn",
    path: "/zh-cn",
    label: "简体中文",
    htmlLang: "zh-CN",
    hreflang: "zh-CN",
    og: "zh_CN",
  },
  {
    id: "zh-tw",
    path: "/zh-tw",
    label: "繁體中文",
    htmlLang: "zh-TW",
    hreflang: "zh-TW",
    og: "zh_TW",
  },
  {
    id: "ja",
    path: "/ja",
    label: "日本語",
    htmlLang: "ja",
    hreflang: "ja",
    og: "ja_JP",
  },
  {
    id: "fr",
    path: "/fr",
    label: "Français",
    htmlLang: "fr",
    hreflang: "fr",
    og: "fr_FR",
  },
] as const;

export type Locale = (typeof localeMeta)[number]["id"];

export const locales: Locale[] = localeMeta.map((item) => item.id);

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function pathFor(locale: Locale): string {
  const found = localeMeta.find((item) => item.id === locale);
  return found?.path ?? "/";
}

export function languageAlternates(): Record<string, string> {
  const languages: Record<string, string> = { "x-default": "/" };
  for (const item of localeMeta) {
    languages[item.hreflang] = item.path;
  }
  return languages;
}
