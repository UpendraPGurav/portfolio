import type { IconType } from 'react-icons';

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export interface Skill {
  name: string;
  level: number; // 0-100, used for animated skill bars
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  // startDate: string;
  endDate: string;
  description?: string;
}
