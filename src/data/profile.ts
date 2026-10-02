import type { Profile } from "./types";

export const profile: Profile = {
  brand: "HAYMAN",
  fullName: "Hayman Adel",

  // Background-removed portrait (transparent WebP). Source files: design/photo/.
  photo: {
    src: "/images/profile/hayman-adel-608.webp",
    srcset: "/images/profile/hayman-adel-400.webp 400w, /images/profile/hayman-adel-608.webp 608w",
    width: 608,
    height: 760,
  },

  // ▶ Add your CV: put the PDF in public/cv/ and replace null with, for example:
  //   { href: "/cv/Hayman-Adel-CV.pdf", fileName: "Hayman-Adel-CV.pdf" }
  cv: null,
};
