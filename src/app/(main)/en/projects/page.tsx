import type { Metadata } from 'next';
import ProyectosClient from '../../proyectos/proyectos-client';

export const metadata: Metadata = {
  title: 'B2B Case Studies & Engineering Portfolio | Autonomek',
  description: 'Explore our deployed production systems: AI conversational agents, B2B process automations, custom cloud software, and high-conversion web platforms.',
  alternates: {
    canonical: 'https://www.autonomek.com/en/projects',
    languages: {
      'en': 'https://www.autonomek.com/en/projects',
      'en-US': 'https://www.autonomek.com/us/projects',
      'es': 'https://www.autonomek.com/es/proyectos',
      'es-CO': 'https://www.autonomek.com/proyectos',
      'x-default': 'https://www.autonomek.com/proyectos',
    },
  },
};

export default function EnProjectsPage() {
  return <ProyectosClient locale="en" />;
}

