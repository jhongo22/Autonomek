import type { Metadata } from 'next';
import BlogHubClient from '../../blog/blog-hub-client';

export const metadata: Metadata = {
  title: 'Software engineering, AI agents & business automation blog | Autonomek',
  description: 'Technical breakdowns, financial analyses, and architectural guides on Next.js web development, 24/7 WhatsApp AI agents, and process automation for modern companies.',
  alternates: {
    canonical: 'https://www.autonomek.com/en/blog',
    languages: {
      'en': 'https://www.autonomek.com/en/blog',
      'en-US': 'https://www.autonomek.com/us/blog',
      'es': 'https://www.autonomek.com/es/blog',
      'es-CO': 'https://www.autonomek.com/blog',
      'x-default': 'https://www.autonomek.com/en/blog',
    },
  },
};

export default function EnBlogHubPage() {
  return <BlogHubClient isEn={true} basePrefix="/en" />;
}

