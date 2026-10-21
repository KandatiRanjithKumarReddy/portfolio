import { useState } from "react";
import type { ComponentType } from "react";
import { motion, AnimatePresence } from "motion/react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillCard } from "@/components/SkillCard";
import {
  HiCodeBracket,
  HiWindow,
  HiServer,
  HiCircleStack,
  HiCpuChip,
  HiWrenchScrewdriver,
  HiCheckBadge,
} from "react-icons/hi2";
import { Layers } from "lucide-react";

const CATEGORY_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  Languages: HiCodeBracket,
  Frontend: HiWindow,
  Backend: HiServer,
  Databases: HiCircleStack,
  "Core Concepts": HiCpuChip,
  "Tools & DevOps": HiWrenchScrewdriver,
  Testing: HiCheckBadge,
};

// Spotlight primary core stack for fast recruiter scanning
export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const totalSkillCount = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  // Selected category data when not "All"
  const selectedCategory = skillCategories.find((cat) => cat.title === activeTab);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-24" id="skills" data-section="/skills">
      <SectionHeading
        eyebrow="Expertise & Toolkit"
        title="Skills & Technologies"
        description="A structured overview of the programming languages, full-stack frameworks, databases, and developer tools I build with."
      />

      {/* ─── Category Filter Navigation ─── */}
      <div className="mt-10">
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-2 max-w-full no-scrollbar">
          <button
            onClick={() => setActiveTab("All")}
            className={`relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
              activeTab === "All"
                ? "text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
            }`}
          >
            {activeTab === "All" && (
              <motion.span
                layoutId="active-skill-tab"
                className="absolute inset-0 rounded-xl gradient-bg -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <Layers className="h-3.5 w-3.5" />
            <span>All Categories</span>
            <span
              className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                activeTab === "All" ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
              }`}
            >
              {totalSkillCount}
            </span>
          </button>

          {skillCategories.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.title] || HiCodeBracket;
            const isActive = activeTab === cat.title;

            return (
              <button
                key={cat.title}
                onClick={() => setActiveTab(cat.title)}
                className={`relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? "text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-skill-tab"
                    className="absolute inset-0 rounded-xl gradient-bg -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="h-3.5 w-3.5" />
                <span>{cat.title}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── Main Skills Content Area ─── */}
      <div className="mt-8">
        {/* State A: Categorized Bento Grid (When viewing "All") */}
        {activeTab === "All" ? (
          <div className="space-y-10">
            {skillCategories.map((category, catIdx) => {
              const Icon = CATEGORY_ICONS[category.title] || HiCodeBracket;

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: catIdx * 0.05, duration: 0.35 }}
                  className="rounded-3xl border border-border/70 bg-card/40 p-5 sm:p-6 backdrop-blur-md shadow-sm"
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/50">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl gradient-bg text-primary-foreground shadow-sm">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <h3 className="font-display text-base sm:text-lg font-bold text-foreground">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                    <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      {category.skills.length} {category.skills.length === 1 ? "skill" : "skills"}
                    </span>
                  </div>

                  {/* Skills Grid for this Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                    {category.skills.map((skillName) => (
                      <SkillCard
                        key={skillName}
                        name={skillName}
                        category={category.title}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* State B: Focused Grid View (When a specific category tab is selected) */
          <div>
            {selectedCategory && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Category summary header */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-card/50 border border-border/70">
                  <div className="flex items-center gap-3">
                    {(() => {
                      const Icon = CATEGORY_ICONS[selectedCategory.title] || HiCodeBracket;
                      return (
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl gradient-bg text-primary-foreground shadow-sm">
                          <Icon className="h-5 w-5" />
                        </span>
                      );
                    })()}
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {selectedCategory.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {selectedCategory.skills.length} specialized skills in this domain
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab("All")}
                    className="text-xs font-semibold text-primary hover:underline cursor-pointer"
                  >
                    View All Categories
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                  <AnimatePresence mode="popLayout">
                    {selectedCategory.skills.map((skillName) => (
                      <SkillCard
                        key={skillName}
                        name={skillName}
                        category={selectedCategory.title}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
