export interface SkillItem {
  name: string;
  stage: 'Building' | 'Learning' | 'Exploring' | 'Active Daily';
  stageColor?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  items: SkillItem[];
  footer: string;
}

export interface ProjectWork {
  id: string;
  projectNumber: string;
  categoryTag: string;
  title: string;
  emoji: string;
  description: string;
  featurePills: string[];
  foundationsTitle: string;
  foundations: string[];
  statusLabel: string;
  githubUrl?: string;
}

export interface EducationCourse {
  title: string;
  icon: string;
  description: string;
}

export interface CertificationItem {
  id: string;
  badge: string;
  badgeType: 'verified' | 'academic';
  title: string;
  description: string;
  meta: string;
}
