import p1 from "@/assets/port1.png";
import p2 from "@/assets/port2.png";
import p3 from "@/assets/tripnest home.png";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  github: string;
  demo: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "doctor-appointment",
    title: "Doctor Appointment Booking System",
    description:
      "Full-stack platform for doctor discovery, appointment booking, and secure online payments.",
    image: p1,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Cloudinary", "Razorpay"],
    features: [
      "Role-based authentication for patients, doctors & admins using JWT",
      "Reduced booking time from 15 min to under 2 min",
      "Cloudinary image storage & Razorpay payments",
      "3 portals across 6 medical specialties",
    ],
    github: "https://github.com/",
    demo: "https://doctor-frontend-eosin.vercel.app/",
    featured: true,
  },
  {
    id: "realtime-chat",
    title: "Real-Time Chat Application",
    description:
      "Real-time messaging app with sub-second delivery, online presence, and JWT-secured sessions powered by Socket.IO.",
    image: p2,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT", "Tailwind CSS"],
    features: [
      "Reduced message delivery time by 40%",
      "Event-driven Socket.IO architecture",
      "Real-time online/offline presence",
      "Supports 30+ Themes",
    ],
    github: "https://github.com/",
    demo: "https://chatapplication-8q6x.onrender.com/",
    featured: true,
  },
  {
    id: "tripnest",
    title: "TripNest — Tourism Web App",
    description:
      "Responsive Angular SPA for exploring 50+ destinations with end-to-end booking, dynamic search and Razorpay checkout.",
    image: p3,
    tech: ["Angular", "TypeScript", "Firebase", "Firestore", "Razorpay", "HTML", "CSS"],
    features: [
      "Dynamic filters, sorting & pagination (50% faster loads)",
      "Firebase Auth with Angular Auth Guards",
      "Razorpay multi-method checkout with live pricing",
      "Persistent sessions across refreshes",
    ],
    github: "https://github.com/",
    demo: "https://github.com/KandatiRanjithKumarReddy/TripNest",
  },
];
