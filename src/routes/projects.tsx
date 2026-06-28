import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Kandati Ranjith Kumar Reddy" },
      { name: "description", content: "Selected projects across frontend, backend, and full stack — built with React, Node.js, and modern tooling." },
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
                programmingLanguage: p.tech,
                keywords: p.tech.join(", "),
                codeRepository: p.github,
                url: p.demo,
                author: { "@id": "/#person" },
              },
            })),
          },
        }),
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects"
        description="A curated set of recent builds that showcase full-stack delivery, real-time systems, and polished frontend experiences."
      />

      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div key={p.id} layout>
            <ProjectCard project={p} i={i} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
