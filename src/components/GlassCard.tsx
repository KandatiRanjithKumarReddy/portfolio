import { motion } from "motion/react";
import type { ReactNode } from "react";

export function GlassCard({
  children,
  className = "",
  hover = true,
}: { children: ReactNode; className?: string; hover?: boolean }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`glass rounded-2xl p-6 shadow-elegant ${hover ? "hover:glow transition-shadow" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}
