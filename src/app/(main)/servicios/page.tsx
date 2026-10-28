import { Metadata } from 'next';
import ServiciosClient from './servicios-client';

export const metadata: Metadata = {
  title: 'Servicios de Páginas Web, Agentes de IA y Automatización B2B | Autonomek',
  description: 'Soluciones de páginas web que lideran Google y ChatGPT, vendedores de IA 24/7 en WhatsApp, automatización con n8n y software a medida para empresas.',
  alternates: {
    canonical: 'https://www.autonomek.com/servicios',
    languages: {
      'es-CO': 'https://www.autonomek.com/servicios',
      'es-ES': 'https://www.autonomek.com/es/servicios',
      'en-US': 'https://www.autonomek.com/us/services',
      'x-default': 'https://www.autonomek.com/servicios',
    },
  },
  openGraph: {
    title: 'Servicios de Páginas Web, Agentes de IA y Automatización B2B | Autonomek',
    description: 'Páginas web que convierten, vendedores de IA 24/7 en WhatsApp y automatización de procesos operativos.',
    url: 'https://www.autonomek.com/servicios',
    type: 'website',
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
      item: 'https://www.autonomek.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Servicios',
      item: 'https://www.autonomek.com/servicios',
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
      <ServiciosClient locale="es" />
    </>
  );
}
