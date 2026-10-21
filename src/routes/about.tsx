import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/sections/AboutSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kandati Ranjith Kumar Reddy" },
      {
        name: "description",
        content:
          "Get to know Kandati Ranjith Kumar Reddy: full-stack developer background, education, and technical experience.",
      },
      { property: "og:title", content: "About — Kandati Ranjith Kumar Reddy" },
      { property: "og:description", content: "Full-stack development experience, education, and engineering principles." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: "/about",
          name: "About — Kandati Ranjith Kumar Reddy",
          mainEntity: { "@id": "/#person" },
        }),
      },
    ],
  }),
  component: AboutSection,
});
