export const FRONTEND_SKILLS = [
  "React",
  "Vite",
  "Next.js",
  "TypeScript",
  "TailwindCSS",
  "JavaScript",
  "HTML5",
  "CSS3",
] as const;

export const BACKEND_SKILLS = [
  "Java Core",
  "Spring Boot",
  "Spring Security",
  "Spring MVC",
  "Lombok",
  "Mockito",
  "RESTful APIs",
  "Hibernate",
] as const;

export const DATA_ENGINEERING_SKILLS = [
  "Python",
  "MySQL",
  "PostgreSQL",
  "Data Modeling",
  "Power Query",
  "Power Pivot",
  "Business Objects Enterprise",
  "Microsoft 365",
  "Power Automate",
  "DAX",
  "Power BI",
  "Excel",
  "Tableau",
] as const;

export const DEVOPS_SKILLS = [
  "Git",
  "CI/CD",
  "Docker",
  "Version Control",
] as const;

export type FrontendSkill = (typeof FRONTEND_SKILLS)[number];
export type BackendSkill = (typeof BACKEND_SKILLS)[number];
export type DataEngineeringSkill = (typeof DATA_ENGINEERING_SKILLS)[number];
export type DevOpsSkill = (typeof DEVOPS_SKILLS)[number];

export type TechSkill =
  | FrontendSkill
  | BackendSkill
  | DataEngineeringSkill
  | DevOpsSkill;

export interface Project {
  title: string;
  description: string;
  techStack: readonly string[];
  repoLink: string;
  demoLink?: string;
}

export const PROJECTS: readonly Project[] = [
  {
    title: "Dallas Learning Center",
    description:
      "A full-stack web application built during a 6-week software engineering cohort. It is designed to improve how tutoring centers manage sessions, track student progress, and retain customers.",
    techStack: [
      "React + Vite + TypeScript",
      "Java + Spring Boot",
      "PostgreSQL",
      "Spring Security",
    ],
    repoLink: "https://github.com/allaboutmike/learning-center-manager",
    demoLink: "https://capable-blini-676354.netlify.app/",
  },
  {
    title: "Sentinel API Dashboard",
    description:
      "A lightweight, self-hosted service uptime monitoring application. Register your external microservices or websites by URL, and Sentinel will automatically track their availability, pinging them on a background thread and reporting their real-time status.",
    techStack: [
      "React + Vite + TypeScript",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Docker",
    ],
    repoLink: "https://github.com/Kareem42/Sentinel",
    // demoLink: "https://capable-blini-676354.netlify.app/",
  },
  {
    title: "Banking Application",
    description:
      "Created a secured banking application that would allow customers to view their balance in real-time, deposit and withdraw funds and solving customer problems related to slow transaction processing and lack of transparent financial reporting.",
    techStack: ["Java", "MySQL", "Postman"],
    repoLink: "https://github.com/Kareem42/BankingApp",
    // demoLink: "https://capable-blini-676354.netlify.app/",
  },
  {
    title: "Wired! Audio & Media, LLC",
    description:
      "A revamped website for a local audio company with a CRM system for better appointment tracking, customer management, and personnel management.",
    techStack: [
      "Next.js + TypeScript",
      "Java Spring Boot",
      "Spring Security",
      "Supabase + PostgreSQL",
      // "Docker",
    ],
    repoLink: "https://github.com/NedTurner613/WiredAV_LLC_FrontEnd",
    // demoLink: "https://capable-blini-676354.netlify.app/",
  },
] as const;
