import { Code2, Smartphone, Server, Database } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Web Development",
    description: "Building responsive and modern web applications.",
    icon: Code2,
  },
  {
    title: "Mobile Development",
    description: "Creating cross-platform mobile applications with Flutter.",
    icon: Smartphone,
  },
  {
    title: "Backend & APIs",
    description: "Designing APIs and server-side systems that power applications.",
    icon: Server,
  },
  {
    title: "Database & Systems",
    description: "Working with relational databases and application architecture.",
    icon: Database,
  },
];
