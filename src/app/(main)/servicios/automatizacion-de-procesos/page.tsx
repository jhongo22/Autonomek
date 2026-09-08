import { Metadata } from 'next';
import AutomatizacionPageClient from './automatizacion-client';

export const metadata: Metadata = {
  title: 'Automatización de procesos empresariales con IA | Autonomek',
  description: 'Conectamos tu web, WhatsApp, CRM y hojas de cálculo para erradicar tareas manuales y errores humanos. Tu operación comercial en piloto automático.',
  alternates: {
    canonical: 'https://autonomek.com/servicios/automatizacion-de-procesos',
    languages: {
      'es-CO': 'https://autonomek.com/servicios/automatizacion-de-procesos',
      'en-US': 'https://autonomek.com/us/services/process-automation',
      'x-default': 'https://autonomek.com/servicios/automatizacion-de-procesos',
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
      name: 'Automatización de Procesos Comerciales',
      item: 'https://autonomek.com/servicios/automatizacion-de-procesos',
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
      <AutomatizacionPageClient locale="es" />
    </>
  );
}
