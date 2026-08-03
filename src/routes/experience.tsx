import { createFileRoute } from "@tanstack/react-router";
import { ExperienceSection } from "@/components/sections/ExperienceSection";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Kandati Ranjith Kumar Reddy" },
      { name: "description", content: "Internships, certifications, achievements, and workshops on Kandati Ranjith Kumar Reddy's developer journey." },
      { property: "og:title", content: "Experience — Kandati Ranjith Kumar Reddy" },
      { property: "og:description", content: "A timeline of work, learning, and milestones." },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperienceSection,
});
