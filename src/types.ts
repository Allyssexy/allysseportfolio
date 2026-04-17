export type Category = 'All' | 'Graphic Design' | 'Photography' | 'Motion Graphics' | 'Web Design';

export interface Project {
  id: string;
  title: string;
  category: Category;
  description: string;
  tools: string[];
  concept: string;
  image: string;
  gallery?: string[];
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string; // Will use Lucide icon names or just keep it simple
}
