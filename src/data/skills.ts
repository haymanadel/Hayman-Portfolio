import type { SkillGroup } from "./types";

// Only technologies used in the projects listed in projects.ts.
export const skillGroups: SkillGroup[] = [
  { name: "Frontend", items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Vite", "TanStack Query"] },
  { name: "Backend", items: ["Node.js", "Express", "REST APIs", "Zod validation", "Transactional email"] },
  { name: "Database", items: ["PostgreSQL", "Neon", "Drizzle ORM"] },
  { name: "Security", items: ["Authentication (JWT)", "Role-based authorization", "Password hashing", "Input validation"] },
  { name: "Delivery", items: ["Git", "GitHub", "GitHub Actions CI/CD", "Render", "Vercel", "Production deployment"] },
  { name: "Also", items: ["English / Arabic (RTL) interfaces", "Arduino (C++)", "Sensors & I²C displays"] },
];

export const capabilities: string[] = [
  "Full-Stack Development",
  "Web Application Development",
  "E-commerce Development",
  "Management Systems",
  "Admin Dashboards",
  "Responsive Web Design",
];
