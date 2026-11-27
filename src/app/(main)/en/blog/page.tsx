import type { Metadata } from 'next';
import { buildSocialMetadata } from '@/lib/seo-metadata';
import BlogHubClient from '../../blog/blog-hub-client';

export const metadata: Metadata = {
  title: 'Custom Software, AI Agents & Automation Blog | Autonomek',
  description: 'Technical breakdowns, financial analyses, and architectural guides on Next.js web development, 24/7 WhatsApp AI agents, and process automation for modern companies.',
  alternates: {
    canonical: 'https://autonomek.com/en/blog',
    languages: {
      'en': 'https://autonomek.com/en/blog',
      'en-US': 'https://autonomek.com/en/blog',
      'es': 'https://autonomek.com/blog',
      'es-CO': 'https://autonomek.com/blog',
      'es-MX': 'https://autonomek.com/blog',
      'es-ES': 'https://autonomek.com/blog',
      'x-default': 'https://autonomek.com/blog',
    },
  },
  ...buildSocialMetadata({
    title: 'Custom Software, AI Agents & Automation Blog | Autonomek',
    description: 'Technical breakdowns, financial analyses, and architectural guides on Next.js web development, 24/7 WhatsApp AI agents, and process automation for modern companies.',
    url: 'https://autonomek.com/en/blog',
    locale: 'en_US',
  }),
};

export default function EnBlogHubPage() {
  return <BlogHubClient isEn={true} basePrefix="/en" />;
}

