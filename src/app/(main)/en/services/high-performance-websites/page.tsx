import type { Metadata } from 'next';
import DesarrolloWebPageClient from '../../../servicios/paginas-web-alto-rendimiento/paginas-web-client';

export const metadata: Metadata = {
  title: 'High-Performance B2B Websites & Technical SEO | Autonomek',
  description: 'Sub-second Next.js web platforms engineered for Core Web Vitals, Google SEO, and AI Answer Engines (GEO/AEO) to maximize enterprise B2B conversion.',
  alternates: {
    canonical: 'https://www.autonomek.com/en/services/high-performance-websites',
    languages: {
      'en': 'https://www.autonomek.com/en/services/high-performance-websites',
      'en-US': 'https://www.autonomek.com/us/services/high-performance-websites',
      'es': 'https://www.autonomek.com/es/servicios/paginas-web-alto-rendimiento',
      'es-CO': 'https://www.autonomek.com/servicios/paginas-web-alto-rendimiento',
      'x-default': 'https://www.autonomek.com/servicios/paginas-web-alto-rendimiento',
    },
  },
};

export default function EnWebsitesPage() {
  return <DesarrolloWebPageClient locale="en" />;
}

