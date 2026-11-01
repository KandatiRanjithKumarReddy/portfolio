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
    skills: ["React", "Angular", "Tailwind CSS", "DaisyUI", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Firestore", "MySQL"],
  },
  {
    title: "Core Concepts",
    skills: [
      "Data Structures and Algorithms",
      "OOP",
      "DBMS",
      "OS",
      "CN",
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
      "Cursor",
      "Lovable",
      "Antigravity",
      "Claude",
    ],
  },
  {
    title: "AI & LLM",
    skills: ["Gemini AI", "LLM Integration", "Groq AI"],
  },
];
