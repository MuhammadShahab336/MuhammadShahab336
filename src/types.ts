export interface ProjectDetailedInfo {
  slug: string;
  category: string;
  duration: string;
  role: string;
  status: string;
  overview: {
    problem: string;
    requirements: string[];
    goals: string[];
    scope: string;
  };
  contributions: string[];
  techStackCategories: {
    title: string;
    technologies: string[];
  }[];
  features: {
    title: string;
    description: string;
  }[];
  challenges: {
    challenge: string;
    solution: string;
    result: string;
  }[];
  gallery: string[];
  results: {
    metric: string;
    value: string;
  }[];
  lessonsLearned: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  details?: ProjectDetailedInfo;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
