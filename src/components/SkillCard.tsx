import type { ComponentType } from "react";
import { motion } from "motion/react";
import { FaJava } from "react-icons/fa6";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiNextdotjs,
  SiTailwindcss,
  SiDaisyui,
  SiHtml5,
  SiCss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiSocketdotio,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiRender,
  SiAnthropic,
} from "react-icons/si";
import { TbSql, TbApi, TbBinaryTree, TbInfinity, TbCursorText } from "react-icons/tb";
import {
  Boxes,
  Database,
  Cpu,
  Network,
  Workflow,
  TestTube2,
  CheckCheck,
  MonitorCheck,
  Bot,
  Sparkles,
  Rocket,
  Code2,
} from "lucide-react";

function ZustandIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.5 9.5a3 3 0 0 1 3-3c.4 0 .78.08 1.13.23A6.97 6.97 0 0 1 12 5.5c1.2 0 2.33.31 3.37.85.35-.22.76-.35 1.2-.35a3 3 0 0 1 3 3c0 .87-.37 1.65-.96 2.19.25.9.39 1.84.39 2.81 0 4.97-3.13 9-7 9s-7-4.03-7-9c0-.97.14-1.91.39-2.81A2.99 2.99 0 0 1 4.5 9.5zM8.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-3.5 3c1.38 0 2.5-.67 2.5-1.5S13.38 13 12 13s-2.5.67-2.5 1.5 1.12 1.5 2.5 1.5z" />
    </svg>
  );
}

type SkillMeta = {
  icon: ComponentType<{ className?: string }>;
  color: string;
};

const SKILL_METADATA: Record<string, SkillMeta> = {
  // Languages
  Java: { icon: FaJava, color: "#ED8B00" },
  "JavaScript (ES6+)": { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  SQL: { icon: TbSql, color: "#00758F" },

  // Frontend
  React: { icon: SiReact, color: "#61DAFB" },
  Angular: { icon: SiAngular, color: "#DD0031" },
  "Next.js": { icon: SiNextdotjs, color: "currentColor" },
  Zustand: { icon: ZustandIcon, color: "#8E6F56" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  DaisyUI: { icon: SiDaisyui, color: "#1AD1A5" },
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss, color: "#1572B6" },
  "Framer Motion": { icon: SiFramer, color: "#0055FF" },

  // Backend
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  Express: { icon: SiExpress, color: "currentColor" },
  "REST APIs": { icon: TbApi, color: "#38BDF8" },
  "JWT Authentication": { icon: SiJsonwebtokens, color: "#D63AFF" },
  "Socket.IO": { icon: SiSocketdotio, color: "currentColor" },

  // Databases
  "MongoDB (NoSQL)": { icon: SiMongodb, color: "#47A248" },
  "Firestore (NoSQL)": { icon: SiFirebase, color: "#FFCA28" },

  // Core Concepts
  "Data Structures and Algorithms": { icon: TbBinaryTree, color: "#60A5FA" },
  "Object-Oriented Programming": { icon: Boxes, color: "#A78BFA" },
  DBMS: { icon: Database, color: "#34D399" },
  "Operating Systems": { icon: Cpu, color: "#F472B6" },
  "Computer Networks": { icon: Network, color: "#38BDF8" },
  SDLC: { icon: Workflow, color: "#FBBF24" },

  // Tools & DevOps
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "currentColor" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  "CI/CD": { icon: TbInfinity, color: "#22C55E" },
  Vercel: { icon: SiVercel, color: "currentColor" },
  Render: { icon: SiRender, color: "#46E3B7" },
  Cursor: { icon: TbCursorText, color: "#818CF8" },
  Lovable: { icon: Sparkles, color: "#EC4899" },
  Antigravity: { icon: Rocket, color: "#6366F1" },
  Claude: { icon: SiAnthropic, color: "#D97706" },

  // Testing
  "Unit Testing": { icon: TestTube2, color: "#38BDF8" },
  "API Testing": { icon: CheckCheck, color: "#34D399" },
  "End-to-End (E2E) Testing": { icon: MonitorCheck, color: "#A78BFA" },
  "Automated Testing": { icon: Bot, color: "#F59E0B" },
};

export function SkillBadge({ name }: { name: string }) {
  const meta = SKILL_METADATA[name] || { icon: Code2, color: "currentColor" };
  const Icon = meta.icon;

  return (
    <motion.li
      role="listitem"
      aria-label={name}
      whileHover={{ y: -2, scale: 1.02 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="group/badge relative inline-flex items-center gap-2.5 rounded-xl border border-border/70 bg-card/60 px-3.5 py-2 text-xs sm:text-sm font-medium text-foreground/90 backdrop-blur-sm transition-all duration-200 hover:border-primary/40 hover:bg-card hover:text-foreground hover:shadow-sm"
    >
      <span
        className="flex h-5 w-5 shrink-0 items-center justify-center transition-transform duration-200 group-hover/badge:scale-110"
        style={{ color: meta.color === "currentColor" ? undefined : meta.color }}
        aria-hidden="true"
      >
        <Icon className="h-4 w-4" />
      </span>
      <span className="truncate">{name}</span>
    </motion.li>
  );
}
