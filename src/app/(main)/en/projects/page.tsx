import type { Metadata } from 'next';
import { buildSocialMetadata } from '@/lib/seo-metadata';
import ProyectosClient from '../../proyectos/proyectos-client';

export const metadata: Metadata = {
  title: 'B2B Case Studies & Engineering Portfolio | Autonomek',
  description: 'Explore our deployed production systems: AI conversational agents, B2B process automations, custom cloud software, and high-conversion web platforms.',
  alternates: {
    canonical: 'https://autonomek.com/en/projects',
    languages: {
      'en': 'https://autonomek.com/en/projects',
      'en-US': 'https://autonomek.com/en/projects',
      'es': 'https://autonomek.com/proyectos',
      'es-CO': 'https://autonomek.com/proyectos',
      'es-MX': 'https://autonomek.com/proyectos',
      'es-ES': 'https://autonomek.com/proyectos',
      'x-default': 'https://autonomek.com/proyectos',
    },
  },
  ...buildSocialMetadata({
    title: 'B2B Case Studies & Engineering Portfolio | Autonomek',
    description: 'Explore our deployed production systems: AI conversational agents, B2B process automations, custom cloud software, and high-conversion web platforms.',
    url: 'https://autonomek.com/en/projects',
    locale: 'en_US',
  }),
};

export default function EnProjectsPage() {
  return <ProyectosClient locale="en" />;
}

