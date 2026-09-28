import type { SocialLink } from "./types";

// ▶ Fill in `href` and `display` to show a channel; empty entries stay hidden.
//   Examples:
//   linkedin  → href: "https://www.linkedin.com/in/…",  display: "linkedin.com/in/…"
//   tiktok    → href: "https://www.tiktok.com/@…",      display: "@…"
// Order here is the order shown on the site.
export const socialLinks: SocialLink[] = [
  { kind: "email", label: "Email", href: "mailto:haymanadel@gmail.com", display: "haymanadel@gmail.com" },
  { kind: "whatsapp", label: "WhatsApp", href: "https://wa.me/201090403737", display: "Message on WhatsApp" },
  { kind: "phone", label: "Phone", href: "tel:+201090403737", display: "+20 109 040 3737" },
  { kind: "github", label: "GitHub", href: "https://github.com/haymanadel", display: "github.com/haymanadel" },
  { kind: "linkedin", label: "LinkedIn", href: "", display: "" },
  { kind: "instagram", label: "Instagram", href: "https://www.instagram.com/haymanadel/", display: "@haymanadel" },
  { kind: "facebook", label: "Facebook", href: "https://www.facebook.com/haymanadelll", display: "Hayman Adel" },
  { kind: "tiktok", label: "TikTok", href: "", display: "" },
];

export const activeSocialLinks = socialLinks.filter((link) => link.href.trim() !== "");
export const primaryContact = activeSocialLinks.find((l) => l.kind === "email") ?? activeSocialLinks.find((l) => l.kind === "whatsapp");
export const whatsappContact = activeSocialLinks.find((l) => l.kind === "whatsapp");
