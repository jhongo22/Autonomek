import type { Metadata } from 'next';
import BlogHubClient from '../../blog/blog-hub-client';

export const metadata: Metadata = {
  title: 'Software engineering, AI agents & business automation blog | Autonomek',
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
};

export default function EnBlogHubPage() {
  return <BlogHubClient isEn={true} basePrefix="/en" />;
}

