import type { Metadata } from 'next';
import HomeClient from './home-client';

export const metadata: Metadata = {
  title: 'Autonomek | Ingeniería de Agentes IA, Automatización B2B y Desarrollo Web',
  description: 'Arquitectura de software B2B, agentes de Inteligencia Artificial 24/7 en WhatsApp, automatización de procesos y páginas web de alto rendimiento con SEO técnico.',
  alternates: {
    canonical: 'https://www.autonomek.com',
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
  return <HomeClient region="co" />;
}
