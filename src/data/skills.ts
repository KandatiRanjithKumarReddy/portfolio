import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss as SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiTailwindcss,
  SiDaisyui,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiRender,
  SiOpenjdk,
  SiMysql,
  SiJsonwebtokens,
} from "react-icons/si";
import {
  TbApi,
  TbBinaryTree2,
  TbChecklist,
  TbCpu,
  TbDeviceDesktopCheck,
  TbNetwork,
  TbRefreshDot,
  TbSettingsAutomation,
  TbTestPipe,
} from "react-icons/tb";
import { HiCubeTransparent } from "react-icons/hi2";
import { BsDatabaseGear } from "react-icons/bs";
import { VscExtensions } from "react-icons/vsc";
import { GoWorkflow } from "react-icons/go";

export type Skill = { name: string; icon: IconType; color: string };
export type SkillCategoryT = { title: string; skills: Skill[] };

export const skillCategories: SkillCategoryT[] = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "Zustand", icon: VscExtensions, color: "#453F39" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "DaisyUI", icon: SiDaisyui, color: "#5A0EF8" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", icon: SiExpress, color: "currentColor" },
      { name: "REST APIs", icon: TbApi, color: "#38BDF8" },
      { name: "JWT Authentication", icon: SiJsonwebtokens, color: "#FB015B" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "currentColor" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB (NoSQL)", icon: SiMongodb, color: "#47A248" },
      { name: "Firestore (NoSQL)", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "Data Structures and Algorithms", icon: TbBinaryTree2, color: "#FF6B6B" },
      { name: "Object-Oriented Programming (OOP)", icon: HiCubeTransparent, color: "#A78BFA" },
      { name: "Database Management Systems (DBMS)", icon: BsDatabaseGear, color: "#38BDF8" },
      { name: "Operating Systems (OS)", icon: TbCpu, color: "#F59E0B" },
      { name: "Computer Networks (CN)", icon: TbNetwork, color: "#34D399" },
      { name: "Software Development Life Cycle (SDLC)", icon: TbRefreshDot, color: "#F472B6" },
    ],
  },
  {
    title: "Testing",
    skills: [
      { name: "Unit Testing", icon: TbChecklist, color: "#22C55E" },
      { name: "API Testing", icon: TbTestPipe, color: "#F97316" },
      { name: "End-to-End (E2E) Testing", icon: TbDeviceDesktopCheck, color: "#3B82F6" },
      { name: "Automated Testing", icon: TbSettingsAutomation, color: "#A855F7" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "currentColor" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Thunder Client", icon: TbApi, color: "#9333EA" },
      { name: "CI/CD", icon: GoWorkflow, color: "#2088FF" },
      { name: "Vercel", icon: SiVercel, color: "currentColor" },
      { name: "Render", icon: SiRender, color: "#46E3B7" },
    ],
  },
];
