import type { Metadata } from 'next';
import ServiciosClient from '../../servicios/servicios-client';

export const metadata: Metadata = {
  title: 'B2B AI & Software Engineering Services | Autonomek',
  description: 'Explore our B2B engineering pillars: 24/7 AI Sales Agents, Process Automation (n8n/APIs), Custom Enterprise Software, and High-Performance SEO Websites.',
  alternates: {
    canonical: 'https://www.autonomek.com/en/services',
    languages: {
      'en': 'https://www.autonomek.com/en/services',
      'en-US': 'https://www.autonomek.com/us/services',
      'es': 'https://www.autonomek.com/es/servicios',
      'es-CO': 'https://www.autonomek.com/servicios',
      'x-default': 'https://www.autonomek.com/servicios',
    },
  },
};

export default function EnServicesPage() {
  return <ServiciosClient locale="en" />;
}

