export type Category = 
  | 'All' 
  | 'Restaurant & Food' 
  | 'Product Photography' 
  | 'Cinematography' 
  | 'Brand Campaigns' 
  | 'Social Media Content';

export interface Project {
  id: string;
  title: string;
  brand: string;
  category: Category;
  year: string;
  image: string;
  secondaryImages?: string[];
  aspectRatio?: 'landscape' | 'portrait' | 'square' | 'wide';
  featured?: boolean;
  tagline: string;
  description: string;
  deliverables: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  videoUrl?: string;
}

export interface BrandItem {
  name: string;
  category: 'restaurant' | 'consumer';
  tagline?: string;
  accentColor?: string;
  logoText?: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  shortDesc: string;
  details: string[];
  image: string;
  tags: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  brand: string;
  category: string;
}
