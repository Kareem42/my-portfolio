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
