export interface PersonalInfo {
  name: string;
  role: string;
  citizenshipNote: string;
  education: string;
  educationMeta: string;
}

export interface ContactItem {
  id: string;
  icon: string;
  label: string;
  href?: string;
  isPlaceholder?: boolean;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  stack: string[];
  projectNote?: string;
  responsibilities?: string;
  achievements: string[];
}

export interface ProjectCard {
  id: string;
  title: string;
  description: string;
  isPlaceholder?: boolean;
}

export interface SkillGroup {
  id: string;
  label: string;
  skills: string[];
}

export interface CourseEntry {
  id: string;
  title: string;
  org: string;
  meta?: string;
}
