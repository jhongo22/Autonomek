import type { Metadata } from 'next';
import ServiciosClient from '../../servicios/servicios-client';

export const metadata: Metadata = {
  title: 'AI & Software Engineering Services | Autonomek USA',
  description: 'Explore our digital engineering systems: High-performance websites, 24/7 AI Agents, Process Automation, and Custom Enterprise Software.',
  alternates: {
    canonical: 'https://www.autonomek.com/us/services',
    languages: {
      'en': 'https://www.autonomek.com/en/services',
      'en-US': 'https://www.autonomek.com/us/services',
      'es': 'https://www.autonomek.com/es/servicios',
      'es-CO': 'https://www.autonomek.com/servicios',
      'x-default': 'https://www.autonomek.com/servicios',
    },
  },
};

export default function ServicesPageUS() {
  return <ServiciosClient locale="en" />;
}
