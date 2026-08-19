export interface Project {
  name: string;
  description: string;
  tech: string[];
  featured?: boolean;
  githubUrl: string;
  liveUrl?: string;
  liveLabel?: string;
  image: string;
}

export const projects: Project[] = [
  {
    name: "Ghost City",
    description:
      "An AI-powered urban simulation platform that visualizes traffic, mobility, disasters, and hypothetical city scenarios — helping users explore what could happen before it happens.",
    tech: [],
    featured: true,
    githubUrl: "https://github.com/lvrl3e/ghost-city",
    liveUrl: "https://ghost-city-ochre.vercel.app",
    image: "/images/covers/ghost-city-cover.svg",
  },
  {
    name: "GEXIS",
    description:
      "A professional options-market analytics dashboard for Gamma Exposure (GEX), dealer positioning, gamma walls, and market structure, with live data for select symbols.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express"],
    githubUrl: "https://github.com/lvrl3e/gexis",
    liveUrl: "https://gexis-two.vercel.app",
    image: "/images/covers/gexis-cover.svg",
  },
  {
    name: "ManibelApp Admin Website",
    description:
      "Admin dashboard and management platform for ManibelApp, featuring authentication, maps, user management, monitoring, reports, and API integration.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Leaflet", "REST API"],
    githubUrl: "https://github.com/lvrl3e/ManibelApp-Admin-Website",
    liveUrl: "https://manibela.vercel.app",
    liveLabel: "Visit Website",
    image: "/images/covers/manibelapp-admin-cover.svg",
  },
  {
    name: "ManibelApp Mobile App",
    description: "Mobile companion app for ManibelApp, built with Flutter.",
    tech: ["Flutter", "Dart"],
    githubUrl: "https://github.com/lvrl3e/ManibelApp-App",
    liveUrl: "https://manibela.vercel.app",
    liveLabel: "Visit Website",
    image: "/images/covers/manibelapp-mobile-cover.svg",
  },
  {
    name: "P&Loom",
    description:
      "A trading performance journal for prop-firm and funded-account traders — track multiple accounts, log daily P&L, review performance through a calendar and analytics, and keep notes and screenshots for every trading day.",
    tech: ["Python", "Streamlit", "SQLite", "Plotly", "Pandas"],
    githubUrl: "https://github.com/lvrl3e/p-and-loom",
    liveUrl: "https://p-and-loom.streamlit.app",
    image: "/images/covers/ploom-cover.svg",
  },
  {
    name: "Bloom",
    description:
      "A personal finance and financial goals app that tracks accounts, income and expense transactions, and savings goals — all stored locally with SQLite, no bank credentials required.",
    tech: ["Flutter", "Dart", "SQLite"],
    githubUrl: "https://github.com/lvrl3e/bloom",
    liveUrl: "https://bloom-beta-seven.vercel.app",
    image: "/images/covers/bloom-cover.svg",
  },
];
