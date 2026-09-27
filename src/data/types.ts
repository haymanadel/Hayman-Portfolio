// Shapes for every piece of editable content. Components only read these
// types, so content changes never require touching markup.

export interface Image {
  /** Path under /public, e.g. "/images/profile/hayman.webp". */
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface SiteSettings {
  /** Final public origin, e.g. "https://hayman.dev" — no trailing slash. Empty = not decided yet. */
  url: string;
  lang: "en";
  dir: "ltr" | "rtl";
  title: string;
  description: string;
  /** Social preview image under /public (1200×630). */
  ogImage: Image;
  themeColor: { light: string; dark: string };
}

export interface Profile {
  /** Short brand mark used in the header and hero. */
  brand: string;
  fullName: string;
  title: string;
  roles: string[];
  tagline: string;
  /** What visitors can hire you to build — shown as a compact list in the hero. */
  builds: string[];
  location: string;
  availability: string;
  /** null until a real photo is added to /public/images/profile. */
  photo: Image | null;
  /** null until a CV file is added to /public/cv. The Download CV button only appears once set. */
  cv: { href: string; fileName: string } | null;
  about: { lead: string; body: string[]; principles: string[] };
}

export interface Service {
  title: string;
  description: string;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  year: string;
  summary: string;
  role: string;
  /** Concrete things built — keep each item short and factual. */
  highlights: string[];
  technologies: string[];
  links: ProjectLink[];
  /** Real screenshot under /public/images/projects; null renders a styled preview instead. */
  image: Image | null;
  /** Label shown in the generated preview, e.g. the live domain. */
  previewLabel: string;
  /** Set when the write-up is still being prepared (no invented details). */
  note?: string;
  featured: boolean;
}

export interface JourneyStep {
  period: string;
  title: string;
  description: string;
  project?: string;
}

export interface Education {
  institution: string;
  shortName: string;
  /** Exactly as written on your certificate; null until confirmed. */
  degree: string | null;
  specialization: string | null;
  period: string | null;
  summary: string;
  certificate: Image | null;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export type SocialKind = "email" | "github" | "linkedin" | "instagram" | "tiktok" | "whatsapp";

export interface SocialLink {
  kind: SocialKind;
  label: string;
  /** Leave empty to hide the channel everywhere. */
  href: string;
  /** Visible handle/value, e.g. "github.com/haymanadel". */
  display: string;
}
