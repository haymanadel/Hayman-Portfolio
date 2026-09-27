import type { JourneyStep } from "./types";

// Project-based experience — independent work, not formal employment.
export const journeyNote = "Independent, project-based work — not formal employment.";

export const journey: JourneyStep[] = [
  {
    period: "2026",
    title: "Embedded systems & IoT",
    description: "Built Arduino prototypes that combine sensors, hardware interrupts and small displays into responsive monitoring devices.",
    project: "Smart Home Monitor",
  },
  {
    period: "2026",
    title: "Full-stack business systems",
    description:
      "Delivered a gym website and management system: member, admin and super-admin roles, subscriptions, payments, attendance, reports and automated production deploys.",
    project: "Olympic Gym",
  },
  {
    period: "2026",
    title: "E-commerce platforms",
    description:
      "Built a bilingual online store with its own admin system — catalog, inventory, orders, payment verification and shipping — and hardened it for production.",
    project: "Katakito Store",
  },
  {
    period: "Now",
    title: "Websites & systems for businesses",
    description:
      "Taking on websites, e-commerce and management-system projects, and shaping proven builds into reusable products that can serve more than one client.",
  },
];
