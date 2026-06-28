import { motion } from "motion/react";
import type { Skill } from "@/data/skills";

export function SkillCard({ skill, i }: { skill: Skill; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: i * 0.03, duration: 0.35 }}
      whileHover={{ y: -4, scale: 1.04 }}
      className="group relative glass rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center gap-3 aspect-square transition-shadow hover:glow"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `radial-gradient(circle at 50% 0%, ${skill.color}33, transparent 70%)` }}
        aria-hidden
      />
      <skill.icon
        className="relative h-9 w-9 sm:h-10 sm:w-10 transition-transform group-hover:scale-110"
        style={{ color: skill.color }}
      />
      <span className="relative text-xs sm:text-sm font-medium text-center">{skill.name}</span>
    </motion.div>
  );
}
