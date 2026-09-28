import { en } from "./en";
import { ar } from "./ar";
import type { Copy, Lang } from "./types";

export type { Copy, Lang };

export const LANGS: Record<Lang, { copy: Copy; dir: "ltr" | "rtl"; path: string; label: string; short: string }> = {
  en: { copy: en, dir: "ltr", path: "/", label: "English", short: "EN" },
  ar: { copy: ar, dir: "rtl", path: "/ar/", label: "العربية", short: "ع" },
};

export const otherLang = (lang: Lang): Lang => (lang === "en" ? "ar" : "en");
