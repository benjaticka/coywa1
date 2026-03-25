
export interface NavItem {
  label: string;
  href: string;
}

export interface ComponentItem {
  id: number;
  title: string;
  objective: string;
  activities: string[];
  results: string[];
  icon: string;
  imageUrl: string;
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
