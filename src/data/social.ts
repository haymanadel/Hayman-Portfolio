import type { SocialKind, SocialLink } from "./types";

// ▶ Fill in `href` and `display` to show a channel; empty entries stay hidden.
//   linkedin → href: "https://www.linkedin.com/in/…", display: "linkedin.com/in/…"
export const socialLinks: SocialLink[] = [
  { kind: "email", label: "Email", href: "mailto:haymanadel@gmail.com", display: "haymanadel@gmail.com" },
  { kind: "whatsapp", label: "WhatsApp", href: "https://wa.me/201090403737", display: "+20 109 040 3737" },
  { kind: "phone", label: "Phone", href: "tel:+201090403737", display: "+20 109 040 3737" },
  { kind: "github", label: "GitHub", href: "https://github.com/haymanadel", display: "github.com/haymanadel" },
  { kind: "linkedin", label: "LinkedIn", href: "", display: "" },
  { kind: "instagram", label: "Instagram", href: "https://www.instagram.com/haymanadel/", display: "@haymanadel" },
  { kind: "facebook", label: "Facebook", href: "https://www.facebook.com/haymanadelll", display: "Hayman Adel" },
  { kind: "tiktok", label: "TikTok", href: "", display: "" },
];

export const activeSocialLinks = socialLinks.filter((link) => link.href.trim() !== "");
const byKind = (kind: SocialKind) => activeSocialLinks.find((l) => l.kind === kind);

export const emailLink = byKind("email");
export const whatsappLink = byKind("whatsapp");

/** Profiles shown as icons on the page (kept short on purpose). */
const VISIBLE_PROFILES: SocialKind[] = ["github", "linkedin", "instagram"];
export const profileLinks = activeSocialLinks.filter((l) => VISIBLE_PROFILES.includes(l.kind));
