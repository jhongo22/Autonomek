import { Metadata } from 'next';
import { buildSocialMetadata } from '@/lib/seo-metadata';
import DesarrolloWebPageClient from './paginas-web-client';

export const metadata: Metadata = {
  title: 'Desarrollo y Diseño de Páginas Web B2B Next.js | Autonomek',
  description: 'Diseño y desarrollo de páginas web corporativas en Next.js (0.6s LCP), SEO técnico para Google y GEO para ChatGPT. Convierte visitas en ventas B2B.',
  alternates: {
    canonical: 'https://autonomek.com/servicios/paginas-web-alto-rendimiento',
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
    title: 'Desarrollo y Diseño de Páginas Web B2B Next.js | Autonomek',
    description: 'Páginas web Next.js que cargan en 0.6s, proyectan solvencia corporativa y lideran en Google y ChatGPT.',
    url: 'https://autonomek.com/servicios/paginas-web-alto-rendimiento',
  }),
};

const serviceSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      name: 'Desarrollo de Páginas Web Next.js',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: 'https://autonomek.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Servicios',
          item: 'https://autonomek.com/servicios',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Desarrollo de Páginas Web B2B Next.js',
          item: 'https://autonomek.com/servicios/paginas-web-alto-rendimiento',
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'Desarrollo y Diseño de Páginas Web B2B en Next.js',
      serviceType: 'Web Development & Technical SEO/GEO Engineering',
      provider: {
        '@type': 'Organization',
        '@id': 'https://autonomek.com/#organization',
        name: 'Autonomek',
        url: 'https://autonomek.com',
      },
      description: 'Desarrollo de páginas web corporativas con carga en 0.6s (Next.js), SEO técnico para Google y citaciones GEO en ChatGPT y Perplexity.',
      areaServed: ['CO', 'MX', 'ES', 'US'],
      url: 'https://autonomek.com/servicios/paginas-web-alto-rendimiento',
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemaJsonLd) }}
      />
      <DesarrolloWebPageClient region="co" locale="es" />
    </>
  );
}
