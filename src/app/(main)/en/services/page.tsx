import type { Metadata } from 'next';
import ServiciosClient from '../../servicios/servicios-client';

export const metadata: Metadata = {
  title: 'B2B Software, AI Agents & Web Engineering Services | Autonomek',
  description: 'Explore our four B2B engineering pillars: 24/7 WhatsApp AI sales agents, sub-second Next.js websites, n8n process automation, and custom software.',
  alternates: {
    canonical: 'https://autonomek.com/en/services',
    languages: {
      'es': 'https://autonomek.com/servicios',
      'es-CO': 'https://autonomek.com/servicios',
      'es-MX': 'https://autonomek.com/servicios',
      'es-ES': 'https://autonomek.com/servicios',
      'en': 'https://autonomek.com/en/services',
      'en-US': 'https://autonomek.com/en/services',
      'x-default': 'https://autonomek.com/servicios',
    },
  },
};

export default function EnServicesPage() {
  return <ServiciosClient region="en" locale="en" />;
}

