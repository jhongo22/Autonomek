import { Metadata } from 'next';
import DesarrolloWebPageClient from './paginas-web-client';

export const metadata: Metadata = {
  title: 'Creación de Páginas Web y Posicionamiento SEO en Google e IA | Autonomek',
  description: 'Diseño de páginas web que cargan en menos de 1 segundo, posicionan primero en Google y búsquedas de IA (ChatGPT, Perplexity) y convierten visitas en clientes por WhatsApp.',
  alternates: {
    canonical: 'https://www.autonomek.com/servicios/paginas-web-alto-rendimiento',
    languages: {
      'es-CO': 'https://www.autonomek.com/servicios/paginas-web-alto-rendimiento',
      'es-ES': 'https://www.autonomek.com/es/servicios/paginas-web-alto-rendimiento',
      'en-US': 'https://www.autonomek.com/us/services/high-performance-websites',
      'x-default': 'https://www.autonomek.com/servicios/paginas-web-alto-rendimiento',
    },
  },
  openGraph: {
    title: 'Creación de Páginas Web y Posicionamiento SEO en Google e IA | Autonomek',
    description: 'Páginas web que cargan en 0.6s, proyectan solvencia corporativa y lideran resultados orgánicos en Google y ChatGPT.',
    url: 'https://www.autonomek.com/servicios/paginas-web-alto-rendimiento',
    type: 'website',
  },
};

const serviceSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: 'https://www.autonomek.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Servicios',
          item: 'https://www.autonomek.com/servicios',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Webs de Autoridad y Posicionamiento SEO en Google e IA',
          item: 'https://www.autonomek.com/servicios/paginas-web-alto-rendimiento',
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'Webs de Autoridad que Venden y Posicionan en Google e IA',
      serviceType: 'Web Development & Technical SEO/GEO Engineering',
      provider: {
        '@type': 'Organization',
        name: 'Autonomek',
        url: 'https://www.autonomek.com',
      },
      description: 'Desarrollo de páginas web corporativas con carga en menos de 1 segundo (Next.js), optimización técnica para primeros lugares en Google y citaciones en ChatGPT y Perplexity.',
      areaServed: ['CO', 'MX', 'ES', 'US'],
      url: 'https://www.autonomek.com/servicios/paginas-web-alto-rendimiento',
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
      <DesarrolloWebPageClient locale="es" />
    </>
  );
}
