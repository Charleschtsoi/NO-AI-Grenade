import type { Locale } from "../i18n";
import { en } from "./en";
import { fr } from "./fr";
import { ja } from "./ja";
import { zhCn } from "./zh-cn";
import { zhTw } from "./zh-tw";
import type { Copy } from "./types";

export type { ChatLine, Copy } from "./types";

export const copy: Record<Locale, Copy> = {
  en,
  "zh-cn": zhCn,
  "zh-tw": zhTw,
  ja,
  fr,
};
