import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Kandati Ranjith Kumar Reddy" },
      {
        name: "description",
        content:
          "Selected projects across frontend, backend, and full stack — built with React, Node.js, and modern tooling.",
      },
      { property: "og:title", content: "Projects — Kandati Ranjith Kumar Reddy" },
      { property: "og:description", content: "Selected work: dashboards, commerce, AI, and more." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Projects — Kandati Ranjith Kumar Reddy",
          url: "/projects",
          author: { "@id": "/#person" },
          mainEntity: {
            "@type": "ItemList",
            itemListOrder: "https://schema.org/ItemListOrderDescending",
            numberOfItems: projects.length,
            itemListElement: projects.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "SoftwareSourceCode",
                "@id": `/projects#${p.id}`,
                name: p.title,
                description: p.description,
                programmingLanguage: p.techStack || p.tech || [],
                keywords: (p.techStack || p.tech || []).join(", "),
                codeRepository: p.githubUrl || p.github || "",
                url: p.liveUrl || p.demo || "",
                author: { "@id": "/#person" },
              },
            })),
          },
        }),
      },
    ],
  }),
  component: ProjectsSection,
});
