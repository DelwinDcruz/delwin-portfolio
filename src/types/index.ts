export interface NavLink {
  label: string;
  href: string;
}

export interface TechBadge {
  name: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  summary: string;
  frontend?: string[];
  backend?: string[];
  extras?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  items: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period?: string;
  detail?: string;
  points?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
}

export interface SoftSkillItem {
  id: string;
  title: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
}
