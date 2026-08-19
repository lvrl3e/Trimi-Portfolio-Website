export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "React Router", "Recharts"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "Prisma", "SQLite"],
  },
  {
    title: "Mobile",
    skills: ["Flutter", "Dart"],
  },
  {
    title: "Other",
    skills: ["Python", "Streamlit", "Pandas", "Plotly", "Docker", "Git", "GitHub", "Leaflet / Maps"],
  },
];
