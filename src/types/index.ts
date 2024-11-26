export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  rating: number;
  date: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  image: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  jobTitle: string;
  jobDescription: string;
}

export interface DemoForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  interest: 'ai-assistant' | 'demo';
  promotionalEvents: boolean;
}

export interface User {
  isAuthenticated: boolean;
  role: 'admin' | 'user' | null;
}