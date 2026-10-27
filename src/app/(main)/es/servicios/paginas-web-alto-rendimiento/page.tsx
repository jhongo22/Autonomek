import type { Metadata } from 'next';
import DesarrolloWebPageClient from '../../../servicios/paginas-web-alto-rendimiento/paginas-web-client';

export const metadata: Metadata = {
  title: 'Páginas Web de Alto Rendimiento y SEO Técnico B2B | Autonomek',
  description: 'Desarrollo de plataformas web ultra rápidas en Next.js optimizadas para Core Web Vitals, posicionamiento en Google (SEO) y motores de IA (GEO/AEO).',
  alternates: {
    canonical: 'https://www.autonomek.com/es/servicios/paginas-web-alto-rendimiento',
    languages: {
      'es': 'https://www.autonomek.com/es/servicios/paginas-web-alto-rendimiento',
      'es-ES': 'https://www.autonomek.com/es/servicios/paginas-web-alto-rendimiento',
      'es-CO': 'https://www.autonomek.com/servicios/paginas-web-alto-rendimiento',
      'en': 'https://www.autonomek.com/en/services/high-performance-websites',
      'en-US': 'https://www.autonomek.com/us/services/high-performance-websites',
      'x-default': 'https://www.autonomek.com/servicios/paginas-web-alto-rendimiento',
    },
  },
};

export default function EsPaginasWebPage() {
  return <DesarrolloWebPageClient locale="es" />;
}

