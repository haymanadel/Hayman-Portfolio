// Single import point for language-neutral content (wording lives in src/i18n/).
export { site } from "./site";
export { profile } from "./profile";
export { projects } from "./projects";
export { socialLinks, activeSocialLinks, emailLink, whatsappLink, profileLinks } from "./social";

/** In-page sections, in order — drives the header navigation. */
export const sections = ["home", "work", "about", "contact"] as const;
export type SectionId = (typeof sections)[number];
