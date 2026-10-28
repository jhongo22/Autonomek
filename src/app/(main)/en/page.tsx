import type { Metadata } from 'next';
import HomeClient from '../home-client';

export const metadata: Metadata = {
  title: 'Autonomek | High-Converting Websites, 24/7 AI Sales Agents & B2B Automation',
  description: 'We engineer sub-second platforms that rank #1 on Google and ChatGPT, autonomous WhatsApp sales agents, and automated CRM/billing workflows for enterprise.',
  alternates: {
    canonical: 'https://www.autonomek.com/en',
    languages: {
      'en': 'https://www.autonomek.com/en',
      'en-US': 'https://www.autonomek.com/us',
      'es': 'https://www.autonomek.com/es',
      'es-ES': 'https://www.autonomek.com/es',
      'es-CO': 'https://www.autonomek.com',
      'es-MX': 'https://www.autonomek.com/mx',
      'x-default': 'https://www.autonomek.com',
    },
  },
  openGraph: {
    title: 'Autonomek | B2B AI Agents, Process Automation & Web Engineering',
    description: 'Autonomous AI sales infrastructure, custom B2B software, and high-performance Next.js platforms.',
    url: 'https://www.autonomek.com/en',
    locale: 'en_US',
    type: 'website',
  },
};

export default function EnHomePage() {
  return <HomeClient region="en" />;
}

