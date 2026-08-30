// Types for the portfolio

export interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  metrics: Metric[];
}

export interface Metric {
  label: string;
  value: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  highlights: string[];
}

export interface Skill {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  color: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
  color?: string;
}
