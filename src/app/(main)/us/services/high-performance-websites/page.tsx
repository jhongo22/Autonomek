import type { Metadata } from 'next';
import DesarrolloWebPageClient from '../../../servicios/paginas-web-alto-rendimiento/paginas-web-client';

export const metadata: Metadata = {
  title: 'High-Converting Websites & #1 Rankings on Google & ChatGPT | Autonomek USA',
  description: 'Sub-second Next.js web platforms engineered to project supreme corporate trust, rank #1 on Google, and get cited by ChatGPT and Perplexity.',
  alternates: {
    canonical: 'https://www.autonomek.com/us/services/high-performance-websites',
    languages: {
      'en': 'https://www.autonomek.com/en/services/high-performance-websites',
      'en-US': 'https://www.autonomek.com/us/services/high-performance-websites',
      'es': 'https://www.autonomek.com/es/servicios/paginas-web-alto-rendimiento',
      'es-CO': 'https://www.autonomek.com/servicios/paginas-web-alto-rendimiento',
      'x-default': 'https://www.autonomek.com/servicios/paginas-web-alto-rendimiento',
    },
  },
};

export default function HighPerformanceWebsitesPageUS() {
  return <DesarrolloWebPageClient locale="en" />;
}
