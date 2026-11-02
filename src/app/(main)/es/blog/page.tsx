import type { Metadata } from 'next';
import BlogHubClient from '../../blog/blog-hub-client';

export const metadata: Metadata = {
  title: 'Blog de ingeniería de software, agentes de IA y automatización | Autonomek',
  description: 'Artículos técnicos, análisis financieros y guías de arquitectura sobre desarrollo web en Next.js, agentes de IA en WhatsApp y automatización de procesos para empresas.',
  alternates: {
    canonical: 'https://www.autonomek.com/es/blog',
    languages: {
      'es': 'https://www.autonomek.com/es/blog',
      'es-CO': 'https://www.autonomek.com/blog',
      'en': 'https://www.autonomek.com/en/blog',
      'en-US': 'https://www.autonomek.com/us/blog',
      'x-default': 'https://www.autonomek.com/blog',
    },
  },
};

export default function EsBlogHubPage() {
  return <BlogHubClient isEn={false} basePrefix="/es" />;
}
