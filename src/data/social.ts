import type { SocialLink } from "./types";

// ▶ Fill in `href` and `display` to show a channel; empty entries stay hidden.
//   Examples:
//   email     → href: "mailto:you@example.com",        display: "you@example.com"
//   linkedin  → href: "https://www.linkedin.com/in/…",  display: "linkedin.com/in/…"
//   instagram → href: "https://www.instagram.com/…",   display: "@…"
//   whatsapp  → href: "https://wa.me/20XXXXXXXXXX",    display: "+20 …"
export const socialLinks: SocialLink[] = [
  { kind: "email", label: "Email", href: "", display: "" },
  { kind: "github", label: "GitHub", href: "https://github.com/haymanadel", display: "github.com/haymanadel" },
  { kind: "linkedin", label: "LinkedIn", href: "", display: "" },
  { kind: "instagram", label: "Instagram", href: "", display: "" },
  { kind: "tiktok", label: "TikTok", href: "", display: "" },
  { kind: "whatsapp", label: "WhatsApp", href: "", display: "" },
];

export const activeSocialLinks = socialLinks.filter((link) => link.href.trim() !== "");
export const primaryContact = activeSocialLinks.find((l) => l.kind === "email") ?? activeSocialLinks.find((l) => l.kind === "whatsapp");
