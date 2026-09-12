// This component is no longer used — skills are now rendered as a text-list layout.
// Kept for potential future use.

import { motion } from "motion/react";

type Skill = { name: string; color?: string };

export function SkillCard({ skill, i }: { skill: Skill; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: i * 0.03, duration: 0.35 }}
      whileHover={{ y: -4, scale: 1.04 }}
      className="group relative glass rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center gap-3 min-h-[100px] sm:min-h-[120px] transition-shadow hover:glow"
    >
      <span className="relative text-[11px] sm:text-sm font-medium text-center leading-tight line-clamp-2">
        {skill.name}
      </span>
    </motion.div>
  );
}
