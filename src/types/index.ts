import type { PhotoId } from "@/content/photos";

export const FRONTEND_SKILLS = [
  "React 19",
  "Vite",
  "Next.js 21",
  "TypeScript",
  "TailwindCSS",
  "JavaScript",
  "HTML5",
  "CSS3",
] as const;

export const BACKEND_SKILLS = [
  "Java Core",
  "Spring Boot 6",
  "Spring Security",
  "Spring MVC",
  "Lombok",
  "Flyway",
  "OpenAPI 3.0",
  "Mockito",
  "RESTful APIs",
  "Hibernate",
] as const;

export const DATA_ENGINEERING_SKILLS = [
  "SQL",
  "PostgreSQL",
  "Data Modeling",
  "Power Query",
  "Power Pivot",
  "Business Objects Enterprise",
  "Power Automate",
  "DAX",
  "Power BI",
  "Advanced Excel",
  "Tableau",
] as const;

export const DEVOPS_SKILLS = [
  "AI Orchestration",
  "CI/CD",
  "Docker Containerization",
  "Version Control (Git)",
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
  focus: string;
  description: string;
  techStack: readonly string[];
  repoLink: string;
  demoLink?: string;
  photoId: PhotoId;
}

export const PROJECTS: readonly Project[] = [
  {
    title: "Agentic Property Billing",
    focus: "Finance · Property Management",
    description:
      "A financial automation platform designed for property management portfolios to intake, parse, match, validate, approve, and execute payments for vendor invoices across multiple properties.",
    techStack: [
      "Java Spring Boot",
      "OpenAI",
      "React + TypeScript",
      "OpenAPI",
      "Docker",
    ],
    repoLink:
      "https://github.com/Kareem42/cohort-team-2026-the-declared-royalty",
    photoId: "project-banking",
  },
  {
    title: "Dallas Learning Center",
    focus: "Education · Session management",
    description:
      "A team-built full-stack app from a six-week software engineering cohort. It gives tutoring centers one place to manage sessions, follow student progress, and support customer retention.",
    techStack: [
      "React + Vite + TypeScript",
      "Java + Spring Boot",
      "PostgreSQL",
      "Spring Security",
      "Docker",
    ],
    repoLink: "https://github.com/allaboutmike/learning-center-manager",
    demoLink: "https://capable-blini-676354.netlify.app/",
    photoId: "project-learning-center",
  },
  {
    title: "Wired! Audio & Media, LLC",
    focus: "Small business · Website and CRM",
    description:
      "A website and CRM revamp for a local audio and media company, bringing its public presence and appointment tracking into one connected project.",
    techStack: [
      "Next.js + TypeScript",
      "Java Spring Boot",
      "Spring Security",
      "Supabase + PostgreSQL",
      // "Docker",
    ],
    repoLink: "https://github.com/NedTurner613/WiredAV_LLC_FrontEnd",
    photoId: "project-wired",
  },
  {
    title: "Sentinel API Dashboard",
    focus: "Reliability · Service monitoring",
    description:
      "A self-hosted dashboard for monitoring websites and microservices. It runs scheduled health checks, reports service status and response time, and keeps check history scoped to each user.",
    techStack: [
      "React + Vite + TypeScript",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Docker",
    ],
    repoLink: "https://github.com/Kareem42/Sentinel",
    photoId: "project-sentinel",
  },
] as const;

export interface Achievements {
  title: string;
  dateAchieved: readonly string[];
  certLink: string;
}

export const ACHIEVEMENTS: readonly Achievements[] = [
  {
    title: "The Business Intelligence Analyst Course 2024",
    dateAchieved: ["Completion Date: Aug 27, 2024"],
    certLink: "https://coursera.org/share/6e96cae70bf481144bec846c0445bd2b",
  },
  {
    title: "Introduction to Software Engineering",
    dateAchieved: ["Completion Date: May 29, 2025"],
    certLink: "https://coursera.org/share/0c3ce4f4cc907336fed8d70732c720ed",
  },
  {
    title: "Designing User Interfaces and Experiences - UI/UX",
    dateAchieved: ["Completion Date: Jun 2, 2025"],
    certLink: "https://coursera.org/share/c8127e95127a80179fd5186004e1dc11",
  },
  {
    title: "Introduction to HTML, CSS, & Javascript",
    dateAchieved: ["Completion Date: Jun 6, 2025"],
    certLink: "https://coursera.org/share/e0c7b6388ae0623e3055f767ce02a94a",
  },
  {
    title: "Developing Websites & Frontend with Bootstrap",
    dateAchieved: ["Completion Date: Jun 10, 2025"],
    certLink: "https://coursera.org/share/38a609b1bbd1d146b7e6b44a4ba29510",
  },
  {
    title: "Developing Front-end Applications with React",
    dateAchieved: ["Completion Date: Jun 24, 2025"],
    certLink: "https://coursera.org/share/cdce4013c1f0a4559d14a91eabedd4db",
  },
  {
    title: "Intermediate Web and Front-end Development",
    dateAchieved: ["Completion Date: Jun 24, 2025"],
    certLink: "https://coursera.org/share/51afdb504cc1742e7a9ddf774883be15",
  },
  {
    title: "Spring Boot 4, Spring 6, Hibernate",
    dateAchieved: ["Completion Date: Dec 24, 2025"],
    certLink: "https://coursera.org/share/51afdb504cc1742e7a9ddf774883be15",
  },
];
