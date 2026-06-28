import { HiBriefcase, HiAcademicCap } from "react-icons/hi2";
import type { IconType } from "react-icons";

export type TimelineKind = "internship" | "certification" | "achievement" | "workshop";

export type TimelineEntry = {
  kind: TimelineKind;
  title: string;
  org: string;
  period: string;
  location?: string;
  description: string;
  icon: IconType;
};

export const experience: TimelineEntry[] = [
  {
    kind: "internship",
    title: "Software Intern",
    org: "Infosys Springboard",
    period: "Feb 2026 — Apr 2026",
    location: "Remote",
    description:
      "Designed and developed TripNest, a scalable travel booking platform supporting 50+ destinations. Leveraged Angular, Firebase, and Razorpay to create a secure and responsive booking experience while improving application performance by 50%.",
    icon: HiBriefcase,
  },
  {
    kind: "certification",
    title: "The Complete Full-Stack Web Development Bootcamp",
    org: "Udemy",
    period: "2026",
    description:
      "Completed hands-on training in modern web development, covering both frontend and backend technologies. Built full-stack applications using React, Node.js, Express, and MongoDB while strengthening API design, database management, and deployment skills.",
    icon: HiAcademicCap,
  },
  {
    kind: "certification",
    title: "Java DSA — Master the Fundamentals and Beyond",
    org: "Scaler",
    period: "2026",
    description:
      "Strengthened core computer science fundamentals through structured learning and coding practice. Applied data structures and algorithms to solve complex problems efficiently and improve technical interview readiness..",
    icon: HiAcademicCap,
  },
];


export const education = [
  {
    title: "B.Tech in Computer Science",
    org: "Sri Venkateswara College of Engineering, Tirupati",
    period: "Sept 2022 — Apr 2026",
    description:"GPA: 9.1 / 10. Focus on full-stack web development, DSA, and software engineering.",
  },
];

export const interests = [
  "Full-stack engineering",
  "Real-time systems",
  "Payment integrations",
  "Clean UI design",
  "DSA in Java",
  "Open source",
];
export const currentlyLearning = ["Next.js", "TypeScript at scale", "System design", "Advanced DSA"];
