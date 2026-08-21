export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST API"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "SQLite"],
  },
  {
    title: "Mobile",
    skills: ["Flutter", "Dart"],
  },
  {
    title: "Other",
    skills: ["Python", "Streamlit", "Pandas", "Plotly", "Leaflet", "Git", "GitHub"],
  },
];
