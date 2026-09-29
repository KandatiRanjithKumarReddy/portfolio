export type SkillCategoryT = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategoryT[] = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript (ES6+)", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Angular",
      "Zustand",
      "Tailwind CSS",
      "DaisyUI",
      "HTML",
      "CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "JWT Authentication", "Socket.IO"],
  },
  {
    title: "Databases",
    skills: ["MongoDB (NoSQL)", "Firestore (NoSQL)"],
  },
  {
    title: "Core Concepts",
    skills: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "SDLC",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "CI/CD",
      "Vercel",
      "Render",
      "Cursor",
      "Lovable",
      "Antigravity",
      "Claude",
    ],
  },
  {
    title: "Testing",
    skills: ["Unit Testing", "API Testing", "End-to-End (E2E) Testing", "Automated Testing"],
  },
];
