import { Metadata } from 'next';
import DesarrolloWebPageClient from './paginas-web-client';

export const metadata: Metadata = {
  title: 'Creación y posicionamiento de páginas web & posicionamiento web | Autonomek',
  description: 'Sitios web ultrarrápidos diseñados para posicionar en los primeros lugares de Google y convertir visitas en clientes reales con embudos y chat IA integrados.',
  alternates: {
    canonical: 'https://autonomek.com/servicios/paginas-web-alto-rendimiento',
    languages: {
      'es-CO': 'https://autonomek.com/servicios/paginas-web-alto-rendimiento',
      'en-US': 'https://autonomek.com/us/services/high-performance-websites',
      'x-default': 'https://autonomek.com/servicios/paginas-web-alto-rendimiento',
    },
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
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
      name: 'Páginas Web de Alto Rendimiento',
      item: 'https://autonomek.com/servicios/paginas-web-alto-rendimiento',
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <DesarrolloWebPageClient locale="es" />
    </>
  );
}
