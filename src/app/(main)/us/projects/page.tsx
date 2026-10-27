import type { Metadata } from 'next';
import ProyectosClient from '../../proyectos/proyectos-client';

export const metadata: Metadata = {
  title: 'B2B Case Studies & Engineering Portfolio | Autonomek USA',
  description: 'Explore our deployed systems: AI conversational agents, process automations, custom cloud software, and high-performance websites.',
  alternates: {
    canonical: 'https://www.autonomek.com/us/projects',
    languages: {
      'en': 'https://www.autonomek.com/en/projects',
      'en-US': 'https://www.autonomek.com/us/projects',
      'es': 'https://www.autonomek.com/es/proyectos',
      'es-CO': 'https://www.autonomek.com/proyectos',
      'x-default': 'https://www.autonomek.com/proyectos',
    },
  },
};

export default function ProjectsPageUS() {
  return <ProyectosClient locale="en" />;
}
