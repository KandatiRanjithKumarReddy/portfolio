import p1 from "@/assets/port1.png";
import p2 from "@/assets/port2.png";
import p3 from "@/assets/tripnest home.png";

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

export const projects: Project[] = [
  {
    id: "doctor-appointment",
    title: "Prescripto",
    subtitle: "Smart Healthcare Management Platform",
    description:
      "A full-stack healthcare platform that allows patients to search for doctors, book appointments, and make online payments. I built the React frontend and Node.js/Express backend, implemented JWT-based role authentication for patients, doctors, and admins, and developed 15+ REST APIs with MongoDB. I also integrated Cloudinary for image storage and Razorpay for payments. The booking process was reduced from around 15 minutes to under 2 minutes.",
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
      "A real-time messaging application built for instant user-to-user communication. I used React, Node.js, Express, MongoDB, Socket.IO, and JWT authentication. I implemented secure user sessions, real-time messaging, connection/disconnection tracking, and online/offline status. Messages were delivered in under one second, with communication delays reduced by approximately 40%.",
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
  {
    id: "tripnest",
    title: "TripNest",
    subtitle: "Tourism Booking Platform",
    description:
      "An Angular-based tourism booking platform I developed during my Infosys Springboard internship. It supports 100+ destinations with search, filtering, sorting, and pagination. I implemented Firebase Authentication and Angular Auth Guards to secure booking and payment routes, and integrated Razorpay with dynamic pricing based on traveler count, fees, and taxes. Pagination reduced the initial page load time by 50%.",
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
