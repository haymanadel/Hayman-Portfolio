// Language-neutral content. All wording lives in src/i18n/{en,ar}.ts.

export interface Image {
  /** Path under /public, e.g. "/images/profile/hayman.webp". */
  src: string;
  width: number;
  height: number;
  /** Optional responsive sources, e.g. "/a-400.webp 400w, /a-608.webp 608w". */
  srcset?: string;
}

export interface SiteSettings {
  /** Final public origin, e.g. "https://yourdomain.com" — no trailing slash. Empty = not decided yet. */
  url: string;
  /** Social preview images (1200×630) per language, under /public. */
  ogImage: { en: string; ar: string; width: number; height: number };
  themeColor: { light: string; dark: string };
}

export interface Profile {
  /** Short brand mark used in the header. */
  brand: string;
  fullName: string;
  /** Background-removed portrait (transparent WebP). */
  photo: Image;
  /** null until a CV file is added to /public/cv. The Download CV button only appears once set. */
  cv: { href: string; fileName: string } | null;
  /** Technologies used in the projects shown on the site. */
  toolkit: string[];
}

export interface Project {
  slug: "olympic-gym" | "katakito-store" | "agently-saas";
  name: string;
  url: string;
  /** Domain shown in the browser-frame preview. */
  domain: string;
  year: string;
  /** Real screenshots of the live site (desktop 16:10 and mobile). */
  shots: { desktop: Image; mobile: Image };
}

export type SocialKind = "email" | "whatsapp" | "phone" | "github" | "linkedin" | "instagram" | "facebook" | "tiktok";

export interface SocialLink {
  kind: SocialKind;
  label: string;
  /** Leave empty to hide the channel everywhere. */
  href: string;
  /** Visible handle/value, e.g. "github.com/haymanadel". */
  display: string;
}
