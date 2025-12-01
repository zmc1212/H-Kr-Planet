import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: ReactNode;
  tags: string[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}