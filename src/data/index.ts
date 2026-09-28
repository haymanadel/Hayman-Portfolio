// Single import point for all editable content.
export { site } from "./site";
export { profile } from "./profile";
export { services } from "./services";
export { skillGroups, capabilities } from "./skills";
export { projects } from "./projects";
export { journey, journeyNote } from "./journey";
export { education } from "./education";
export { processSteps } from "./process";
export { socialLinks, activeSocialLinks, primaryContact, whatsappContact } from "./social";

/** In-page sections, in order — drives the header navigation. */
export const sections = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
] as const;
