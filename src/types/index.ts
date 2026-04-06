export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface TechItem {
  name: string;
  category: string;
}

export interface Screenshot {
  src: string;
  alt: string;
}

export interface AppLink {
  label: string;
  href: string;
  icon?: string;
}
