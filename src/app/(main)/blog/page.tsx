import type { Metadata } from 'next';
import { buildSocialMetadata } from '@/lib/seo-metadata';
import BlogHubClient from './blog-hub-client';

export const metadata: Metadata = {
  title: 'Blog de ingeniería de software, agentes de IA y automatización | Autonomek',
  description: 'Artículos técnicos, análisis financieros y guías de arquitectura sobre desarrollo web en Next.js, agentes de IA en WhatsApp y automatización de procesos para empresas.',
  alternates: {
    canonical: 'https://autonomek.com/blog',
    languages: {
      'es': 'https://autonomek.com/blog',
      'es-CO': 'https://autonomek.com/blog',
      'es-MX': 'https://autonomek.com/blog',
      'es-ES': 'https://autonomek.com/blog',
      'en': 'https://autonomek.com/en/blog',
      'en-US': 'https://autonomek.com/en/blog',
      'x-default': 'https://autonomek.com/blog',
    },
  },
  ...buildSocialMetadata({
    title: 'Blog de ingeniería de software, agentes de IA y automatización | Autonomek',
    description: 'Artículos técnicos, análisis financieros y guías de arquitectura sobre desarrollo web en Next.js, agentes de IA en WhatsApp y automatización de procesos para empresas.',
    url: 'https://autonomek.com/blog',
  }),
};

export default function BlogHubPage() {
  return <BlogHubClient isEn={false} basePrefix="" />;
}

