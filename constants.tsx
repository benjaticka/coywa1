
import React from 'react';
import { Lightbulb, Users, Rocket, BarChart3, Globe, ShieldCheck, Heart, Award } from 'lucide-react';
import { ComponentItem, StatItem } from './types';

export const COMPONENTS: ComponentItem[] = [
  {
    id: 1,
    title: "Entrepreneurial Ecosystem Development",
    objective: "Strengthen the regional entrepreneurship and innovation environment.",
    activities: [
      "Assessment of the entrepreneurial ecosystem across the EAC region",
      "Development of regional entrepreneurship strategy and policy guidelines",
      "Establishment of the EAC Youth in Business Alliance"
    ],
    results: [
      "Strengthened regional entrepreneurship policies",
      "Operational regional youth entrepreneurship platform",
      "Improved enabling environment for women and youth"
    ],
    icon: "Globe",
    imageUrl: "https://easteco.org/wp-content/uploads/2024/05/Youth-Innovation-Development-1-1024x421-1.jpg"
  },
  {
    id: 2,
    title: "Capacity Development",
    objective: "Enhance entrepreneurship and innovation skills among women and youth.",
    activities: [
      "Entrepreneurship and innovation training programmes",
      "Development of a digital innovation platform",
      "Establishment of regional incubation hubs in Kigali and Kampala"
    ],
    results: [
      "Improved entrepreneurial and innovation skills",
      "Increased access to mentorship and markets",
      "Strengthened incubation infrastructure"
    ],
    icon: "Users",
    imageUrl: "https://easteco.org/wp-content/uploads/2024/05/agro-processing2.jpg"
  },
  {
    id: 3,
    title: "Innovation Challenge",
    objective: "Promote scalable innovations and entrepreneurial ventures.",
    activities: [
      "Regional innovation challenge calls",
      "Entrepreneurship bootcamps and seed funding",
      "EAC Regional Women and Youth Entrepreneurship Conference"
    ],
    results: [
      "Identification of innovative business solutions",
      "Funding for high-impact ventures",
      "Enhanced regional networking"
    ],
    icon: "Rocket",
    imageUrl: "https://easteco.org/wp-content/uploads/2024/05/bioeconomy-glowna.jpg"
  },
  {
    id: 4,
    title: "Project Management",
    objective: "Ensure effective implementation and coordination.",
    activities: [
      "Project coordination and financial management",
      "Monitoring, evaluation, and reporting",
      "Knowledge sharing and stakeholder engagement"
    ],
    results: [
      "Effective project delivery and accountability",
      "Enhanced stakeholder coordination",
      "Improved visibility and dissemination"
    ],
    icon: "BarChart3",
    imageUrl: "https://easteco.org/wp-content/uploads/2024/05/FhGcmvrX0AACKzM.jpg"
  }
];

export const STATS: StatItem[] = [
  { label: "Entrepreneurs", value: "1,600", description: "Direct women and youth beneficiaries" },
  { label: "Start-ups Funded", value: "16+", description: "Seed funding for scalable ventures" },
  { label: "Incubation Hubs", value: "2", description: "Strategic centers in Kigali & Kampala" },
  { label: "Target Nations", value: "8", description: "EAC Partner States covered" }
];

export const SDGS = [
  { 
    id: 5, 
    name: "Gender Equality", 
    image: "https://www.unoosa.org/images/ourwork/SDGs/E_SDG_goals_icons-individual-rgb-05.png" 
  },
  { 
    id: 8, 
    name: "Decent Work", 
    image: "https://www.unoosa.org/images/ourwork/SDGs/E_SDG_goals_icons-individual-rgb-08.png" 
  },
  { 
    id: 10, 
    name: "Reduced Inequalities", 
    image: "https://www.unoosa.org/images/ourwork/SDGs/E_SDG_goals_icons-individual-rgb-10.png" 
  }
];

export interface Partner {
  name: string;
  logo: string;
}

export const PARTNERS: Partner[] = [
  { name: "EASTECO", logo: "https://www.eac.int/images/Adverts/EASTECO_Logo.png" },
  { name: "EAC", logo: "https://www.eac.int/images/25_Anniversary_web_Banner_2.PNG" },
  { name: "AU", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6IiyFYB5szWTyJqiwYA0aEZZJIeNExx4kSQ&s" },
  { name: "EAYN", logo: "https://ui-avatars.com/api/?name=EAYN&background=f1f5f9&color=334155&bold=true&size=128" },
  { name: "EAWiBP", logo: "https://blogger.googleusercontent.com/img/a/AVvXsEj09Z9XcaCj9DJ5QLUcpK7eTUT95YIVApCuZ0qWbWQSNJYgx6Stw7Hk-NFBYmqBFUjW6M3imVvz42Ko-fF7176_5PPMZ18Xqqj2ZI8A_B7BfYxjX5YGXHFJjk6pkXmJZAZIlweW8Zljg2-B9DM9i1RjaMX_zhmWiFezP9mG6IRPQ-utdxjuAAXd8UBLXw=w400-h188" },
  { name: "COYWA", logo: "https://africa-news-agency.com/wp-content/uploads/2026/01/image-2026-01-29T115351.435.png" }
];
