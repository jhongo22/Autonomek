import type { Metadata } from 'next';
import HomeClient from '../home-client';

export const metadata: Metadata = {
  title: 'Autonomek USA | B2B AI Automation & High-Performance Web Engineering',
  description: 'Enterprise AI agents, autonomous CRM/WhatsApp workflows, and sub-second Next.js web development engineered for B2B conversion and SEO authority.',
  alternates: {
    canonical: 'https://www.autonomek.com/us',
    languages: {
      'es': 'https://www.autonomek.com/es',
      'es-ES': 'https://www.autonomek.com/es',
      'es-CO': 'https://www.autonomek.com',
      'es-MX': 'https://www.autonomek.com/mx',
      'en': 'https://www.autonomek.com/en',
      'en-US': 'https://www.autonomek.com/us',
      'x-default': 'https://www.autonomek.com',
    },
  },
};

export default function Page() {
  return <HomeClient region="us" />;
}
