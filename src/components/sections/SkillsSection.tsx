import type { ComponentType } from "react";
import { motion } from "motion/react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillBadge } from "@/components/SkillCard";
import {
  HiCodeBracket,
  HiWindow,
  HiServer,
  HiCircleStack,
  HiCpuChip,
  HiWrenchScrewdriver,
  HiCheckBadge,
} from "react-icons/hi2";

const CATEGORY_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  Languages: HiCodeBracket,
  Frontend: HiWindow,
  Backend: HiServer,
  Databases: HiCircleStack,
  "Core Concepts": HiCpuChip,
  "Tools & DevOps": HiWrenchScrewdriver,
  Testing: HiCheckBadge,
};

export function SkillsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24" id="skills" data-section="/skills">
      <SectionHeading
        eyebrow="Toolkit"
        title="Skills & technologies"
        description="A comprehensive showcase of the languages, frameworks, developer tools, and engineering concepts I use to ship robust software."
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => {
          const CategoryIcon = CATEGORY_ICONS[cat.title] || HiCodeBracket;
          // Span 2 columns on desktop for larger categories (Frontend & Tools & DevOps)
          const isLarge = cat.title === "Frontend" || cat.title === "Tools & DevOps";

          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: idx * 0.05,
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`glass rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-primary/30 hover:shadow-elegant ${
                isLarge ? "md:col-span-2 lg:col-span-2" : "col-span-1"
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-border/50">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg gradient-bg text-primary-foreground shadow-sm">
                      <CategoryIcon className="h-4 w-4" />
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-bold tracking-tight text-foreground">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {cat.skills.length} {cat.skills.length === 1 ? "skill" : "skills"}
                  </span>
                </div>

                {/* Skill Badges List */}
                <ul
                  role="list"
                  aria-label={`${cat.title} skills`}
                  className="flex flex-wrap gap-2 pt-4"
                >
                  {cat.skills.map((skill) => (
                    <SkillBadge key={skill} name={skill} />
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
