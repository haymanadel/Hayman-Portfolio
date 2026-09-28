import type { Profile } from "./types";

export const profile: Profile = {
  brand: "HAYMAN",
  fullName: "Hayman Adel",
  title: "Full-Stack Web Developer & Software Developer",
  roles: ["Full-Stack Web Developer", "Software Developer", "Websites & Management Systems"],
  tagline:
    "I design and build modern websites, e-commerce platforms, and custom management systems for businesses.",
  builds: ["Websites", "E-commerce platforms", "Management systems", "Custom web applications"],
  location: "Egypt",
  availability: "Open to new projects",

  // Background-removed portrait (transparent WebP). Source files: design/photo/.
  // To replace: export a transparent 4:5 crop to public/images/profile/ and update below.
  photo: {
    src: "/images/profile/hayman-adel-608.webp",
    srcset: "/images/profile/hayman-adel-400.webp 400w, /images/profile/hayman-adel-608.webp 608w",
    alt: "Portrait of Hayman Adel smiling, wearing a black academic gown with a light-blue stole",
    width: 608,
    height: 760,
  },

  // ▶ Add your CV: put the PDF in public/cv/ and replace null with, for example:
  //   { href: "/cv/Hayman-Adel-CV.pdf", fileName: "Hayman-Adel-CV.pdf" }
  cv: null,

  about: {
    lead: "I build digital products that solve real business problems.",
    body: [
      "I work across the whole stack — interface, API, database and deployment — to deliver websites, online stores, management systems and custom web applications that businesses actually run on.",
      "My projects go beyond landing pages: role-based dashboards, payment and order workflows, inventory, reporting and bilingual interfaces, shipped to production and maintained there.",
    ],
    principles: [
      "Clean, focused user experience",
      "Responsive on every screen",
      "Reliable, well-validated backends",
      "Maintainable, typed code",
      "Real business functionality",
      "Production-ready deployment",
    ],
  },
};
