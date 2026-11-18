import type { Metadata } from 'next';
import { buildSocialMetadata } from '@/lib/seo-metadata';
import DesarrolloWebPageClient from '../../../servicios/paginas-web-alto-rendimiento/paginas-web-client';

export const metadata: Metadata = {
  title: 'High-Performance Next.js Web Development & SEO | Autonomek',
  description: 'Custom Next.js websites engineered to load in 0.6s, rank #1 on Google and ChatGPT (GEO), and convert B2B traffic into qualified WhatsApp sales.',
  alternates: {
    canonical: 'https://autonomek.com/en/services/high-performance-websites',
    languages: {
      'es': 'https://autonomek.com/servicios/paginas-web-alto-rendimiento',
      'es-CO': 'https://autonomek.com/servicios/paginas-web-alto-rendimiento',
      'es-MX': 'https://autonomek.com/servicios/paginas-web-alto-rendimiento',
      'es-ES': 'https://autonomek.com/servicios/paginas-web-alto-rendimiento',
      'en': 'https://autonomek.com/en/services/high-performance-websites',
      'en-US': 'https://autonomek.com/en/services/high-performance-websites',
      'x-default': 'https://autonomek.com/servicios/paginas-web-alto-rendimiento',
    },
  },
  ...buildSocialMetadata({
    title: 'High-Performance Next.js Web Development & SEO | Autonomek',
    description: 'Custom Next.js websites engineered to load in 0.6s, rank #1 on Google and ChatGPT (GEO), and convert B2B traffic into qualified WhatsApp sales.',
    url: 'https://autonomek.com/en/services/high-performance-websites',
    locale: 'en_US',
  }),
};

const enServiceJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      name: 'Next.js Web Development & SEO',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://autonomek.com/en' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://autonomek.com/en/services' },
        { '@type': 'ListItem', position: 3, name: 'High-Performance Websites', item: 'https://autonomek.com/en/services/high-performance-websites' },
      ],
    },
    {
      '@type': 'Service',
      name: 'High-Performance Next.js Web Development & Technical SEO/GEO',
      serviceType: 'Web Development & Technical SEO/GEO Engineering',
      provider: { '@type': 'Organization', '@id': 'https://autonomek.com/#organization', name: 'Autonomek', url: 'https://autonomek.com' },
      description: 'Sub-second Next.js corporate websites engineered for Core Web Vitals, Google SEO, and AI search citations.',
      areaServed: ['US', 'CO', 'MX', 'ES'],
      url: 'https://autonomek.com/en/services/high-performance-websites',
    },
  ],
};

export default function EnWebsitesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enServiceJsonLd) }}
      />
      <DesarrolloWebPageClient region="en" locale="en" />
    </>
  );
}

