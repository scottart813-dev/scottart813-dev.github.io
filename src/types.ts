export interface Project {
  id: string;
  title: string;
  category: 'branding' | 'editorial' | 'concept' | 'uiux';
  categoryLabel: string;
  description: string;
  longDescription: string;
  client: string;
  year: string;
  image: string;
  tags: string[];
  colorPalette: string[]; // hex codes representing color scheme
  tools: string[];
  role: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  estimatedDays: number;
}

export interface PlannerConfig {
  selectedServices: string[];
  complexity: 'standard' | 'advanced' | 'premium';
  timeline: number; // multiplier or percentage scale
}
