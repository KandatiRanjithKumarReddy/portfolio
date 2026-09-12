export type SkillCategoryT = { title: string; skills: string[] };

export const skillCategories: SkillCategoryT[] = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript (ES6+)", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Angular", "Zustand", "TailwindCSS", "DaisyUI", "HTML", "CSS"],
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
    skills: ["Data Structures and Algorithms", "OOP", "DBMS", "OS", "CN", "SDLC"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Postman", "Thunder Client", "CI/CD", "Vercel", "Render"],
  },
  {
    title: "Testing",
    skills: ["Unit Testing", "API Testing", "End-to-End (E2E) Testing", "Automated Testing"],
  },
];
