import { motion } from "motion/react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/SectionHeading";

export function SkillsSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24" id="skills" data-section="/skills">
      <SectionHeading
        eyebrow="Toolkit"
        title="Skills & technologies"
        description="The stack I reach for to ship production-grade products quickly without compromising on quality."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16"
      >
        <div className="glass rounded-2xl p-6 sm:p-8 md:p-10 space-y-5">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: ci * 0.06, duration: 0.4 }}
              className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-0 group"
            >
              <span className="font-display text-base sm:text-lg font-bold text-foreground shrink-0 sm:min-w-[200px] md:min-w-[230px]">
                {cat.title}:
              </span>
              <span className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                {cat.skills.join(", ")}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
