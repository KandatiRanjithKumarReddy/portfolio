import { motion } from "motion/react";
import { skillCategories } from "@/data/skills";

const CATEGORY_STYLES: Record<string, string> = {
  Testing:
    "border-emerald-600/30 text-emerald-800 bg-emerald-50/70 hover:border-emerald-500 hover:bg-emerald-100/70 dark:border-emerald-500/40 dark:text-emerald-400 dark:bg-emerald-950/20 dark:hover:border-emerald-400 dark:hover:bg-emerald-900/30",
  Backend:
    "border-amber-600/30 text-amber-800 bg-amber-50/70 hover:border-amber-500 hover:bg-amber-100/70 dark:border-amber-500/40 dark:text-amber-400 dark:bg-amber-950/20 dark:hover:border-amber-400 dark:hover:bg-amber-900/30",
  Frontend:
    "border-rose-600/30 text-rose-800 bg-rose-50/70 hover:border-rose-500 hover:bg-rose-100/70 dark:border-rose-500/40 dark:text-rose-400 dark:bg-rose-950/20 dark:hover:border-rose-400 dark:hover:bg-rose-900/30",
  "Tools & DevOps":
    "border-teal-600/30 text-teal-800 bg-teal-50/70 hover:border-teal-500 hover:bg-teal-100/70 dark:border-teal-500/40 dark:text-teal-400 dark:bg-teal-950/20 dark:hover:border-teal-400 dark:hover:bg-teal-900/30",
  Databases:
    "border-cyan-600/30 text-cyan-800 bg-cyan-50/70 hover:border-cyan-500 hover:bg-cyan-100/70 dark:border-cyan-500/40 dark:text-cyan-400 dark:bg-cyan-950/20 dark:hover:border-cyan-400 dark:hover:bg-cyan-900/30",
  Languages:
    "border-sky-600/30 text-sky-800 bg-sky-50/70 hover:border-sky-500 hover:bg-sky-100/70 dark:border-sky-500/40 dark:text-sky-400 dark:bg-sky-950/20 dark:hover:border-sky-400 dark:hover:bg-sky-900/30",
  "Core Concepts":
    "border-purple-600/30 text-purple-800 bg-purple-50/70 hover:border-purple-500 hover:bg-purple-100/70 dark:border-purple-500/40 dark:text-purple-400 dark:bg-purple-950/20 dark:hover:border-purple-400 dark:hover:bg-purple-900/30",
};

const DEFAULT_STYLE =
  "border-primary/30 text-primary bg-primary/5 hover:border-primary/50 hover:bg-primary/10";

export function SkillsSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-24 pt-6" id="skills" data-section="/skills">
      {/* ─── Top Section Header Matching Reference ─── */}
      <div className="pb-4 border-b border-border/40 dark:border-zinc-800/80">
        <h2 className="font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] text-muted-foreground uppercase">
          SKILLS
        </h2>
      </div>

      {/* ─── Categorized Horizontal Rows ─── */}
      <div className="divide-y divide-border/40 dark:divide-zinc-800/80">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="py-7 sm:py-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-12"
          >
            {/* Left Column: Category Title */}
            <div className="w-full md:w-56 lg:w-64 shrink-0">
              <h3 className="text-base sm:text-lg font-semibold text-foreground tracking-tight leading-snug">
                {category.title}
              </h3>
            </div>

            {/* Right Column: Code/Terminal Style Skill Pills */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 flex-1 items-center">
              {category.skills.map((skill) => {
                const styleClasses = CATEGORY_STYLES[category.title] || DEFAULT_STYLE;
                return (
                  <span
                    key={skill}
                    className={`inline-flex items-center rounded-lg border px-3.5 py-1.5 font-mono text-xs sm:text-sm tracking-wide transition-all duration-200 cursor-default hover:-translate-y-0.5 select-none ${styleClasses}`}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
