import p1 from "@/assets/port1.png";
import p2 from "@/assets/port2.png";
import p3 from "@/assets/tripnest home.png";
import p4 from "@/assets/project-4.jpeg";
import p5 from "@/assets/project.-5.jpeg";

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
    id: "doctor-appointment",
    title: "Prescripto",
    subtitle: "Smart Healthcare Management Platform",
    description:
      "Full-stack healthcare platform with doctor search, appointment booking, and online payments — cutting booking time from ~15 minutes to under 2 minutes. Built 15+ REST APIs with JWT role-based auth for patients, doctors, and admins.",
    image: p1,
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind",
      "Razorpay",
      "Cloudinary",
    ],
    highlights: [
      "Booking time reduced from ~15 mins to under 2 mins",
      "JWT role authentication for patients, doctors & admins",
      "15+ REST APIs with MongoDB, Cloudinary & Razorpay",
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
      "Angular-based tourism platform supporting 100+ destinations with search, filtering, sorting, and pagination — reducing initial page load by 50%. Secured booking routes with Firebase Auth Guards and integrated Razorpay dynamic pricing.",
    image: p3,
    techStack: ["Angular", "TypeScript", "Firebase", "Firestore", "Razorpay", "CSS", "HTML"],
    highlights: [
      "100+ destinations with search, filtering, sorting & pagination",
      "Firebase Auth & Angular Auth Guards securing routes",
      "Razorpay dynamic pricing & 50% faster load time with pagination",
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
  {
    id: "borrower-copilot",
    title: "Borrower Copilot",
    subtitle: "Financial Self-Assessment Engine",
    description:
      "A privacy-first loan assessment tool for Indian borrowers — exposing the gap between what banks sanction vs. what borrowers can safely repay. Features a Newton-Raphson APR solver, dual-shock stress testing, and a printable negotiation card for bank meetings. 100% client-side, zero data collection.",
    image: p5,
    techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS"],
    highlights: [
      "Honest BORROW / BORROW LESS / DON'T BORROW decision engine",
      "Newton-Raphson APR solver & dual-shock stress testing",
      "100% client-side — zero server, zero PII collection",
    ],
    liveUrl: "https://borrower-copilot-seven.vercel.app/",
    githubUrl: "https://github.com/KandatiRanjithKumarReddy/Borrower-Copilot",
    featured: true,
  },
];

/* ── Combined export used by the Projects section (5 cards total) ── */
export const projects: Project[] = [...realProjects, ...tripNestProject, ...additionalProjects];

