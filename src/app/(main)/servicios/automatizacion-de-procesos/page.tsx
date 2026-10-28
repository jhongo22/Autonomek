import { Metadata } from 'next';
import AutomatizacionPageClient from './automatizacion-client';

export const metadata: Metadata = {
  title: 'Automatización de Procesos Empresariales con IA y n8n | Autonomek',
  description: 'Conectamos tu web, WhatsApp, CRM y software contable para erradicar tareas manuales y errores de digitación. Tu facturación y operación en piloto automático.',
  alternates: {
    canonical: 'https://www.autonomek.com/servicios/automatizacion-de-procesos',
    languages: {
      'es-CO': 'https://www.autonomek.com/servicios/automatizacion-de-procesos',
      'es-ES': 'https://www.autonomek.com/es/servicios/automatizacion-de-procesos',
      'en-US': 'https://www.autonomek.com/us/services/process-automation',
      'x-default': 'https://www.autonomek.com/servicios/automatizacion-de-procesos',
    },
  },
  openGraph: {
    title: 'Automatización de Procesos Empresariales con IA y n8n | Autonomek',
    description: 'Flujos de n8n de alta disponibilidad: sincronización entre WhatsApp, CRM, pasarelas de pago y facturación electrónica.',
    url: 'https://www.autonomek.com/servicios/automatizacion-de-procesos',
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
          name: 'Operación y Facturación en Piloto Automático',
          item: 'https://www.autonomek.com/servicios/automatizacion-de-procesos',
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'Operación y Facturación en Piloto Automático',
      serviceType: 'B2B Workflow & Process Automation Engineering',
      provider: {
        '@type': 'Organization',
        name: 'Autonomek',
        url: 'https://www.autonomek.com',
      },
      description: 'Orquestación de flujos de trabajo con n8n, webhooks y APIs para eliminar la digitación manual entre CRM, bancos y ERP contable.',
      areaServed: ['CO', 'MX', 'ES', 'US'],
      url: 'https://www.autonomek.com/servicios/automatizacion-de-procesos',
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
      <AutomatizacionPageClient locale="es" />
    </>
  );
}
