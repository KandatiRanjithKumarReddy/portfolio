import type { ComponentType } from "react";
import { useState } from "react";
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
  SiMysql,
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

export type SkillMeta = {
  icon: ComponentType<{ className?: string }>;
  color: string;
  category: string;
  tag: string;
};

export const SKILL_METADATA: Record<string, SkillMeta> = {
  // Languages
  Java: { icon: FaJava, color: "#ED8B00", category: "Languages", tag: "Core OOP Language" },
  "JavaScript (ES6+)": {
    icon: SiJavascript,
    color: "#F7DF1E",
    category: "Languages",
    tag: "Modern Web Standard",
  },
  TypeScript: {
    icon: SiTypescript,
    color: "#3178C6",
    category: "Languages",
    tag: "Type-Safe JavaScript",
  },
  SQL: { icon: TbSql, color: "#00758F", category: "Languages", tag: "Relational Queries" },

  // Frontend
  React: { icon: SiReact, color: "#61DAFB", category: "Frontend", tag: "Modern Component UI" },
  Angular: {
    icon: SiAngular,
    color: "#DD0031",
    category: "Frontend",
    tag: "Enterprise Web Framework",
  },
  "Next.js": {
    icon: SiNextdotjs,
    color: "currentColor",
    category: "Frontend",
    tag: "React Framework",
  },
  Zustand: { icon: ZustandIcon, color: "#8E6F56", category: "Frontend", tag: "State Management" },
  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "#06B6D4",
    category: "Frontend",
    tag: "Utility-First CSS",
  },
  DaisyUI: {
    icon: SiDaisyui,
    color: "#1AD1A5",
    category: "Frontend",
    tag: "Tailwind Component UI",
  },
  HTML: { icon: SiHtml5, color: "#E34F26", category: "Frontend", tag: "Semantic Markup" },
  CSS: { icon: SiCss, color: "#1572B6", category: "Frontend", tag: "Responsive Styling" },
  "Framer Motion": {
    icon: SiFramer,
    color: "#0055FF",
    category: "Frontend",
    tag: "Motion & Animations",
  },

  // Backend
  "Node.js": {
    icon: SiNodedotjs,
    color: "#5FA04E",
    category: "Backend",
    tag: "JavaScript Runtime",
  },
  Express: {
    icon: SiExpress,
    color: "currentColor",
    category: "Backend",
    tag: "REST Server Framework",
  },
  "REST APIs": {
    icon: TbApi,
    color: "#38BDF8",
    category: "Backend",
    tag: "Scalable Architecture",
  },
  "JWT Authentication": {
    icon: SiJsonwebtokens,
    color: "#D63AFF",
    category: "Backend",
    tag: "Token Session Auth",
  },
  "Socket.IO": {
    icon: SiSocketdotio,
    color: "currentColor",
    category: "Backend",
    tag: "Real-Time WebSockets",
  },

  // Databases
  MongoDB: { icon: SiMongodb, color: "#47A248", category: "Databases", tag: "NoSQL Document DB" },
  "MongoDB (NoSQL)": {
    icon: SiMongodb,
    color: "#47A248",
    category: "Databases",
    tag: "NoSQL Document DB",
  },
  Firestore: {
    icon: SiFirebase,
    color: "#FFCA28",
    category: "Databases",
    tag: "Real-Time Cloud DB",
  },
  "Firestore (NoSQL)": {
    icon: SiFirebase,
    color: "#FFCA28",
    category: "Databases",
    tag: "Real-Time Cloud DB",
  },
  MySQL: { icon: SiMysql, color: "#4479A1", category: "Databases", tag: "Relational SQL DB" },

  // Core Concepts
  "Data Structures and Algorithms": {
    icon: TbBinaryTree,
    color: "#60A5FA",
    category: "Core Concepts",
    tag: "Algorithmic Efficiency",
  },
  "Object-Oriented Programming": {
    icon: Boxes,
    color: "#A78BFA",
    category: "Core Concepts",
    tag: "Design Principles",
  },
  OOP: { icon: Boxes, color: "#A78BFA", category: "Core Concepts", tag: "Object-Oriented Design" },
  DBMS: {
    icon: Database,
    color: "#34D399",
    category: "Core Concepts",
    tag: "Database Management",
  },
  "Operating Systems": {
    icon: Cpu,
    color: "#F472B6",
    category: "Core Concepts",
    tag: "Process & Concurrency",
  },
  OS: { icon: Cpu, color: "#F472B6", category: "Core Concepts", tag: "Operating System Concepts" },
  "Computer Networks": {
    icon: Network,
    color: "#38BDF8",
    category: "Core Concepts",
    tag: "Protocols & Routing",
  },
  CN: { icon: Network, color: "#38BDF8", category: "Core Concepts", tag: "Networking & Protocols" },
  SDLC: {
    icon: Workflow,
    color: "#FBBF24",
    category: "Core Concepts",
    tag: "Software Lifecycle",
  },

  // Tools & DevOps
  Git: { icon: SiGit, color: "#F05032", category: "Tools & DevOps", tag: "Version Control" },
  GitHub: {
    icon: SiGithub,
    color: "currentColor",
    category: "Tools & DevOps",
    tag: "Collaboration & CI",
  },
  Postman: {
    icon: SiPostman,
    color: "#FF6C37",
    category: "Tools & DevOps",
    tag: "API Testing & Docs",
  },
  "CI/CD": {
    icon: TbInfinity,
    color: "#22C55E",
    category: "Tools & DevOps",
    tag: "Automated Deployments",
  },
  Vercel: {
    icon: SiVercel,
    color: "currentColor",
    category: "Tools & DevOps",
    tag: "Serverless Hosting",
  },
  Render: {
    icon: SiRender,
    color: "#46E3B7",
    category: "Tools & DevOps",
    tag: "Cloud Web Services",
  },
  Cursor: {
    icon: TbCursorText,
    color: "#818CF8",
    category: "Tools & DevOps",
    tag: "AI Code Editor",
  },
  Lovable: {
    icon: Sparkles,
    color: "#EC4899",
    category: "Tools & DevOps",
    tag: "Full-Stack Builder",
  },
  Antigravity: {
    icon: Rocket,
    color: "#6366F1",
    category: "Tools & DevOps",
    tag: "Agentic Engineering",
  },
  Claude: {
    icon: SiAnthropic,
    color: "#D97706",
    category: "Tools & DevOps",
    tag: "AI Assistant",
  },

  // Testing
  "Unit Testing": {
    icon: TestTube2,
    color: "#38BDF8",
    category: "Testing",
    tag: "Logic & Component Tests",
  },
  "API Testing": {
    icon: CheckCheck,
    color: "#34D399",
    category: "Testing",
    tag: "Endpoint Verification",
  },
  "End-to-End (E2E) Testing": {
    icon: MonitorCheck,
    color: "#A78BFA",
    category: "Testing",
    tag: "User Journey Tests",
  },
  "Automated Testing": {
    icon: Bot,
    color: "#F59E0B",
    category: "Testing",
    tag: "Continuous Test Suites",
  },
};

/**
 * Premium Interactive Skill Card with dynamic glow & hover lift
 */
export function SkillCard({ name, category }: { name: string; category?: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const meta = SKILL_METADATA[name] || {
    icon: Code2,
    color: "currentColor",
    category: category || "General",
    tag: "Technology",
  };
  const Icon = meta.icon;
  const isColorCurrent = meta.color === "currentColor";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex items-center gap-3.5 rounded-2xl border border-border/80 bg-card/60 p-3.5 sm:p-4 backdrop-blur-md transition-all duration-300 hover:bg-card hover:border-primary/40 hover:shadow-lg overflow-hidden cursor-default"
      style={{
        boxShadow: isHovered && !isColorCurrent ? `0 8px 24px -6px ${meta.color}25` : undefined,
      }}
    >
      {/* Dynamic ambient background glow */}
      <div
        className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 pointer-events-none group-hover:opacity-20"
        style={{ backgroundColor: isColorCurrent ? "var(--color-primary)" : meta.color }}
        aria-hidden="true"
      />

      {/* Icon Squircle Container */}
      <div
        className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted/80 border border-border/60 transition-transform duration-300 group-hover:scale-110 shadow-sm"
        style={{
          borderColor: isHovered && !isColorCurrent ? `${meta.color}40` : undefined,
          backgroundColor: isHovered && !isColorCurrent ? `${meta.color}10` : undefined,
        }}
      >
        <span style={{ color: isColorCurrent ? undefined : meta.color }}>
          <Icon className="h-5 w-5" />
        </span>
      </div>

      {/* Text Details */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-1">
          <h4 className="font-display font-semibold text-sm sm:text-base text-foreground tracking-tight truncate group-hover:text-primary transition-colors">
            {name}
          </h4>
        </div>
        <p className="text-xs text-muted-foreground truncate mt-0.5 font-medium">{meta.tag}</p>
      </div>

      {/* Subtle hover indicator dot */}
      <div
        className="h-1.5 w-1.5 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 shrink-0"
        style={{ backgroundColor: isColorCurrent ? "var(--color-primary)" : meta.color }}
        aria-hidden="true"
      />
    </motion.div>
  );
}

/**
 * Compact pill for backwards compatibility
 */
export function SkillBadge({ name }: { name: string }) {
  const meta = SKILL_METADATA[name] || {
    icon: Code2,
    color: "currentColor",
    category: "General",
    tag: "Technology",
  };
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
