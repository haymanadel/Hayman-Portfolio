import type { Project } from "./types";

// Screenshots are real captures of the live sites (public/images/projects/).
const shots = (slug: string) => ({
  desktop: { src: `/images/projects/${slug}-1440.webp`, srcset: `/images/projects/${slug}-800.webp 800w, /images/projects/${slug}-1440.webp 1440w`, width: 1440, height: 900 },
  mobile: { src: `/images/projects/${slug}-mobile.webp`, width: 360, height: 779 },
});

export const projects: Project[] = [
  { slug: "olympic-gym", name: "Olympic Gym", url: "https://olympic-gym.com", domain: "olympic-gym.com", year: "2026", shots: shots("olympic-gym") },
  {
    slug: "katakito-store",
    name: "Katakito Store",
    url: "https://katakito-store.onrender.com",
    domain: "katakito-store.onrender.com",
    year: "2026",
    shots: shots("katakito-store"),
  },
];
