import type { Metadata } from 'next';
import HomeClient from '../home-client';

export const metadata: Metadata = {
  title: 'Autonomek USA | High-Converting Websites, 24/7 AI Sales Agents & Automation',
  description: 'Enterprise 24/7 AI sales agents, sub-second Next.js platforms that rank #1 on Google and ChatGPT, and automated business operations without manual tasks.',
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
