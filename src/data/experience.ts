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

/* ── Work Experience ── */
export const experiences: TimelineEntry[] = [
  {
    kind: "internship",
    title: "Software Engineer Intern",
    org: "Infosys",
    period: "Feb 2026 — Apr 2026",
    location: "Remote",
    description:
      "Developed TripNest using Angular 21 and Firebase for 120+ destinations across 26 countries. Secured booking routes with Firebase Auth Guards, engineered real-time Cloud Firestore services with Cloud Functions, and integrated Razorpay payments with dark/light themes.",
    icon: HiBriefcase,
  },
];

/* ── Certifications & Achievements ── */
export const certifications: TimelineEntry[] = [
  {
    kind: "certification",
    title: "AWS Cloud Practitioner Essentials",
    org: "Amazon Web Services (AWS)",
    period: "2026",
    description:
      "Earned official accreditation covering AWS core cloud infrastructure, security, architecture, compute, networking, and cloud storage best practices.",
    icon: HiAcademicCap,
  },
  {
    kind: "certification",
    title: "The Complete Full-Stack Web Development Bootcamp",
    org: "Udemy",
    period: "2026",
    description:
      "Hands-on training building full-stack applications with React, Node.js, Express, and MongoDB while mastering API design and deployment.",
    icon: HiAcademicCap,
  },
];

/* ── Legacy combined export (backwards-compat) ── */
export const experience: TimelineEntry[] = [...experiences, ...certifications];

export const education = [
  {
    title: "B.Tech in Computer Science",
    org: "Sri Venkateswara College of Engineering, Tirupati",
    period: "Sept 2022 — Apr 2026",
    description:
      "GPA: 9.1 / 10. Focus on full-stack web development, DSA, and software engineering.",
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
export const currentlyLearning = [
  "Next.js",
  "TypeScript at scale",
  "System design",
  "Advanced DSA",
];
