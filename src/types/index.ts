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
    repoLink: "https://github.com/Kareem42/Sentinel",
    // demoLink: "https://capable-blini-676354.netlify.app/",
  },
  {
    title: "Banking App",
    description:
      "Created a secured banking application that would allow customers to view their balance in real-time, deposit and withdraw funds and solving customer problems related to slow transaction processing and lack of transparent financial reporting in the terminal.",
    techStack: ["Java", "MySQL", "Postman"],
    repoLink: "https://github.com/Kareem42/BankingApp",
    // demoLink: "https://capable-blini-676354.netlify.app/",
  },
  {
    title: "Wired! Audio & Media, LLC",
    description:
      "A complete revamp of a local company website with an added CRM system for easier tracking with appointments and improvement for website traffic.",
      "A revamped website for a local audio company with a CRM system for better appointment tracking, customer management, and personnel management.",
    techStack: [
      "Next.js + TypeScript",
      "Java Spring Boot",
      "Spring Security",
      "Supabase + PostgreSQL",
      // "Docker",
    ],
    repoLink: "https://github.com/NedTurner613/WiredAV_LLC_FrontEnd",
    repoLink: "https://github.com/NedTurner613/WiredAV_LLC_FrontEnd",
    // demoLink: "https://capable-blini-676354.netlify.app/",
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
