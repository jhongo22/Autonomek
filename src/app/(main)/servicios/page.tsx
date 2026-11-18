import { Metadata } from 'next';
import { buildSocialMetadata } from '@/lib/seo-metadata';
import ServiciosClient from './servicios-client';

export const metadata: Metadata = {
  title: 'Servicios de Páginas Web, Agentes de IA y Software B2B | Autonomek',
  description: 'Soluciones de desarrollo web Next.js, agentes de IA 24/7 en WhatsApp, automatización de procesos con n8n y software a medida sin licencias por usuario.',
  alternates: {
    canonical: 'https://autonomek.com/servicios',
    languages: {
      'es': 'https://autonomek.com/servicios',
      'es-CO': 'https://autonomek.com/servicios',
      'es-MX': 'https://autonomek.com/servicios',
      'es-ES': 'https://autonomek.com/servicios',
      'en': 'https://autonomek.com/en/services',
      'en-US': 'https://autonomek.com/en/services',
      'x-default': 'https://autonomek.com/servicios',
    },
  },
  ...buildSocialMetadata({
    title: 'Servicios de Páginas Web, Agentes de IA y Software B2B | Autonomek',
    description: 'Páginas web en Next.js, agentes de IA 24/7 en WhatsApp, automatización con n8n y software a medida sin licencias por usuario.',
    url: 'https://autonomek.com/servicios',
  }),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  name: 'Servicios Autonomek',
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
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServiciosClient region="co" locale="es" />
    </>
  );
}
