import p1 from "@/assets/port1.png";
import p2 from "@/assets/port2.png";
import p3 from "@/assets/tripnest home.png";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl: string;
  // Backwards compatibility aliases
  tech?: string[];
  features?: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "doctor-appointment",
    title: "Prescripto - Smart Healthcare Management Platform",
    description:
      "Full-stack healthcare platform for booking appointments, payments, and doctor management.",
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
      "Reduced booking time by 87%",
      "Role-based authentication",
      "Secure online payments",
    ],
    liveUrl: "https://doctor-frontend-eosin.vercel.app/",
    githubUrl: "https://github.com/KandatiRanjithKumarReddy/doctor-frontend",
    featured: true,
  },
  {
    id: "realtime-chat",
    title: "Chatty – Real Time Communication Platform",
    description:
      "Real-time messaging app with sub-second delivery, online presence, and JWT-secured sessions powered by Socket.IO.",
    image: p2,
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Tailwind",
    ],
    highlights: [
      "Reduced message delivery time by 40%",
      "Event-driven Socket.IO architecture",
      "Real-time online/offline presence",
    ],
    liveUrl: "https://chatapplication-8q6x.onrender.com/",
    githubUrl: "https://github.com/KandatiRanjithKumarReddy/ChatApplication",
    featured: true,
  },
  {
    id: "tripnest",
    title: "TripNest — Tourism Web App",
    description:
      "Responsive Angular SPA for exploring 50+ destinations with end-to-end booking, dynamic search and Razorpay checkout.",
    image: p3,
    techStack: [
      "Angular",
      "TypeScript",
      "Firebase",
      "Firestore",
      "Razorpay",
      "Tailwind",
    ],
    highlights: [
      "Dynamic filters, sorting & pagination (50% faster loads)",
      "Firebase Auth with Angular Auth Guards",
      "Razorpay multi-method checkout with live pricing",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/KandatiRanjithKumarReddy/TripNest",
  },
];
