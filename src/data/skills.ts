import type { IconType } from "react-icons";
import {
  SiHtml5, SiCss as SiCss3, SiJavascript, SiTypescript, SiReact, SiAngular, SiTailwindcss, SiDaisyui,
  SiNodedotjs, SiExpress, SiSocketdotio,
  SiMongodb, SiFirebase,
  SiGit, SiGithub, SiPostman, SiVercel, SiRender, SiRazorpay,
  SiOpenjdk, SiMysql,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

export type Skill = { name: string; icon: IconType; color: string };
export type SkillCategoryT = { title: string; skills: Skill[] };

export const skillCategories: SkillCategoryT[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "currentColor" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "DaisyUI", icon: SiDaisyui, color: "#5A0EF8" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "currentColor" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Firestore", icon: SiFirebase, color: "#FFCA28" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "currentColor" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Thunder Client", icon: TbApi, color: "#9333EA" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Razorpay", icon: SiRazorpay, color: "#0C2451" },
      { name: "Vercel", icon: SiVercel, color: "currentColor" },
      { name: "Render", icon: SiRender, color: "#46E3B7" },
    ],
  },
];
