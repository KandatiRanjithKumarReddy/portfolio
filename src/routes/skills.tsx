import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillCard } from "@/components/SkillCard";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Kandati Ranjith Kumar Reddy" },
      { name: "description", content: "Technologies I use: React, Node.js, TypeScript, Tailwind, PostgreSQL, MongoDB, and more." },
      { property: "og:title", content: "Skills — Kandati Ranjith Kumar Reddy" },
      { property: "og:description", content: "Frontend, backend, databases, languages, and tools." },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24">
      <SectionHeading
        eyebrow="Toolkit"
        title="Skills & technologies"
        description="The stack I reach for to ship production-grade products quickly without compromising on quality."
      />

      <div className="mt-16 space-y-14">
        {skillCategories.map((cat, ci) => (
          <motion.section
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: ci * 0.05 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-1.5 w-8 rounded-full gradient-bg" />
              <h3 className="font-display text-xl sm:text-2xl font-semibold">{cat.title}</h3>
              <span className="text-xs text-muted-foreground">{cat.skills.length}</span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
              {cat.skills.map((s, i) => (
                <SkillCard key={`${cat.title}-${s.name}`} skill={s} i={i} />
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
