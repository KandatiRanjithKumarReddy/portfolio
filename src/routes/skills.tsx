import { createFileRoute } from "@tanstack/react-router";
import { SkillsSection } from "@/components/sections/SkillsSection";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Kandati Ranjith Kumar Reddy" },
      {
        name: "description",
        content:
          "Technologies I use: React, Node.js, TypeScript, Tailwind, PostgreSQL, MongoDB, and more.",
      },
      { property: "og:title", content: "Skills — Kandati Ranjith Kumar Reddy" },
      {
        property: "og:description",
        content: "Frontend, backend, databases, languages, and tools.",
      },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: SkillsSection,
});
