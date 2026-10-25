import type { Project } from '../types';
import { projects } from './projects';

export interface Service {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  included: string[];
  projects: Project[];
}

export const services: Service[] = [
  {
    id: 's1',
    name: 'Design',
    shortDesc: 'Brand & Creative',
    fullDesc: 'We build brand identities that resonate in the Australian market — logos, visual systems, and brand guidelines that define who you are and how you stand out locally.',
    included: [],
    projects: projects.filter(p => p.category === 'Design')
  },
  {
    id: 's2',
    name: 'Develop',
    shortDesc: 'Web Development',
    fullDesc: 'We build fast, responsive, and conversion-optimised websites for Australian businesses — from local service providers to national e-commerce brands.',
    included: [],
    projects: projects.filter(p => p.category === 'Develop')
  },
  {
    id: 's3',
    name: 'Market',
    shortDesc: 'Comprehensive Digital Campaigns',
    fullDesc: 'We create full-funnel digital marketing campaigns tailored to Australian audiences — connecting your brand to the right people at the right time across the right channels.',
    included: [],
    projects: projects.filter(p => p.category === 'Market')
  },
  {
    id: 's4',
    name: 'Scale',
    shortDesc: 'SEO Mastery & Targeted Ads',
    fullDesc: 'We help Australian businesses grow their organic reach and paid performance — through local SEO, Google Business optimisation, and precision ad targeting across Google, Meta, and LinkedIn.',
    included: [],
    projects: projects.filter(p => p.category === 'Scale')
  }
];
