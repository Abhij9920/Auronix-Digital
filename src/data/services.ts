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
    fullDesc: 'Brand identities built to stand out — logos, visual systems, and guidelines that define who you are across every touchpoint.',
    included: [],
    projects: projects.filter(p => p.category === 'Design')
  },
  {
    id: 's2',
    name: 'Develop',
    shortDesc: 'Web Development',
    fullDesc: 'Fast, responsive websites built on modern stacks — designed to convert visitors, not just look good.',
    included: [],
    projects: projects.filter(p => p.category === 'Develop')
  },
  {
    id: 's3',
    name: 'Market',
    shortDesc: 'Comprehensive Digital Campaigns',
    fullDesc: 'Full-funnel digital campaigns that connect your brand to the right audience at the right stage of the buying journey.',
    included: [],
    projects: projects.filter(p => p.category === 'Market')
  },
  {
    id: 's4',
    name: 'Scale',
    shortDesc: 'SEO Mastery & Targeted Ads',
    fullDesc: 'Precise audience targeting and technical SEO — built to perform consistently across platforms.',
    included: [],
    projects: projects.filter(p => p.category === 'Scale')
  }
];
