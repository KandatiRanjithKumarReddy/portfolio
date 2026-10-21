import p1 from "@/assets/port1.webp";
import p2 from "@/assets/port2.webp";
import p3 from "@/assets/tripnest-home.webp";
import p4 from "@/assets/project-4.webp";
import p5 from "@/assets/project-5.webp";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  techStack: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  // Backwards compatibility aliases
  tech?: string[];
  features?: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

/* ══════════════════════════════════════════════════════════════════════
 *  REAL PROJECTS — Your actual portfolio work
 * ══════════════════════════════════════════════════════════════════════ */
export const realProjects: Project[] = [
  {
    id: "borrower-copilot",
    title: "Borrower Copilot",
    subtitle: "AI-Powered Loan Advisor",
    description:
      "Full-stack AI loan assessment platform helping borrowers evaluate safe debt limits across 3 employment profiles. Engineered a financial rules engine calculating tiered FOIR limits (25%–55%), stress-testing loan affordability under 15% income drops, and integrated Google Gemini AI with an automated 3-model fallback strategy.",
    image: p5,
    techStack: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Express",
      "MySQL",
      "Google Gemini AI",
      "Tailwind CSS",
      "JWT",
      "Vercel",
    ],
    highlights: [
      "Tiered FOIR limit calculation (25%–55%) & loan stress-testing under 15% income drops",
      "Google Gemini AI integration with automated 3-model fallback strategy",
      "REST APIs across 5 MySQL tables on Aiven Cloud, secured with JWT & Google OAuth 2.0",
    ],
    liveUrl: "https://borrower-copilot-pi.vercel.app/",
    githubUrl: "https://github.com/KandatiRanjithKumarReddy/Borrower-Copilot",
    featured: true,
  },
  {
    id: "doctor-appointment",
    title: "Prescripto",
    subtitle: "Smart Healthcare Management Platform",
    description:
      "Full-stack healthcare platform cutting appointment booking time from 15 minutes to under 2 minutes. Built 15+ REST APIs with JWT role-based auth for patient, doctor, and admin portals, with Cloudinary image storage and Razorpay online payments.",
    image: p1,
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Cloudinary",
      "Razorpay",
      "Vercel",
    ],
    highlights: [
      "Booking time reduced from ~15 mins to under 2 mins",
      "15+ REST APIs with JWT role authentication for patient, doctor & admin roles",
      "Cloudinary image storage & Razorpay payments across 6 medical specialties",
    ],
    liveUrl: "https://doctor-frontend-eosin.vercel.app/",
    githubUrl: "https://github.com/KandatiRanjithKumarReddy/doctor-frontend",
    featured: true,
  },
  {
    id: "realtime-chat",
    title: "Chatty",
    subtitle: "Real-Time Communication Platform",
    description:
      "Real-time messaging app delivering sub-second message delivery with ~40% latency reduction. Features Socket.IO-powered live connection tracking, online/offline status, and secure JWT-authenticated user sessions.",
    image: p2,
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT", "Tailwind"],
    highlights: [
      "Sub-second message delivery with ~40% delay reduction",
      "Socket.IO connection tracking & real-time online/offline status",
      "Secure user sessions with JWT authentication & MongoDB",
    ],
    liveUrl: "https://chatapplication-8q6x.onrender.com/",
    githubUrl: "https://github.com/KandatiRanjithKumarReddy/ChatApplication",
    featured: true,
  },
];

/* ── TripNest (existing project) ── */
export const tripNestProject: Project[] = [
  {
    id: "tripnest",
    title: "TripNest",
    subtitle: "Tourism Booking Platform",
    description:
      "Angular 21 tourism booking platform supporting 120+ destinations across 26 countries. Secured booking flows with Firebase Authentication and Angular Auth Guards, real-time Cloud Firestore booking tracking, and Razorpay online trip checkout.",
    image: p3,
    techStack: [
      "Angular 21",
      "TypeScript",
      "Firebase Auth",
      "Cloud Firestore",
      "Razorpay",
      "HTML5",
      "CSS3",
      "Git",
    ],
    highlights: [
      "120+ destinations across 26 countries with real-time Cloud Firestore services",
      "Firebase Auth & Angular Auth Guards securing Google OAuth & email sessions",
      "Razorpay checkout with persistent dark/light themes & dynamic filtering",
    ],
    liveUrl: "",
  },
];

/* ══════════════════════════════════════════════════════════════════════
 *  ADDITIONAL PROJECTS
 * ══════════════════════════════════════════════════════════════════════ */
export const additionalProjects: Project[] = [
  {
    id: "github-user-finder",
    title: "GitHub User Finder",
    subtitle: "React Testing Reference Implementation",
    description:
      "A modern React 19 + TypeScript app to search GitHub users, view profiles, and browse repositories — doubling as a comprehensive testing reference with 9 Playwright E2E tests, 4 RTL component suites, and custom hook lifecycle tests achieving high coverage.",
    image: p4,
    techStack: ["React 19", "TypeScript", "Vite", "Vitest", "Testing Library", "Playwright"],
    highlights: [
      "9 automated Playwright E2E test cases covering all user flows",
      "Multi-layer testing: unit, hook, component & browser E2E",
      "Full code coverage pipeline with @vitest/coverage-v8",
    ],
    liveUrl: "https://testing-react-sigma.vercel.app/",
    githubUrl: "https://github.com/KandatiRanjithKumarReddy/testing-react",
    featured: true,
  },
];

/* ── Combined export used by the Projects section (5 cards total) ── */
export const projects: Project[] = [...realProjects, ...tripNestProject, ...additionalProjects];
