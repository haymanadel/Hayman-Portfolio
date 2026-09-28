// Every visible string, per language. en.ts and ar.ts must satisfy this shape,
// so a missing translation is a type error, not a blank on the page.
export type Lang = "en" | "ar";

export interface Copy {
  meta: { title: string; description: string; ogImageAlt: string; locale: string };
  a11y: { skip: string; menuOpen: string; menuClose: string; themeToDark: string; themeToLight: string; language: string; newTab: string; primaryNav: string; mobileNav: string };
  nav: { home: string; work: string; about: string; contact: string };
  hero: { status: string; location: string; role: string; title: string; tagline: string; ctaWork: string; ctaContact: string; scroll: string; portraitAlt: string; badge: string };
  work: {
    eyebrow: string;
    title: string;
    view: string;
    projects: Record<"olympic-gym" | "katakito-store", { category: string; summary: string }>;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    educationLabel: string;
    degree: string;
    institution: string;
    toolkitLabel: string;
    cv: string;
  };
  contact: { eyebrow: string; title: string; titleMuted: string; lead: string; email: string; whatsapp: string; elsewhere: string };
  footer: { backToTop: string };
  notFound: { title: string; body: string; cta: string };
}
