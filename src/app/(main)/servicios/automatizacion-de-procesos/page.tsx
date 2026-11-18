import { Metadata } from 'next';
import AutomatizacionPageClient from './automatizacion-client';

export const metadata: Metadata = {
  title: 'Automatización de Procesos con IA, n8n y ERP | Autonomek',
  description: 'Servicio de automatización de procesos empresariales con IA y n8n. Integramos WhatsApp, CRM y facturación electrónica (Siigo, Alegra, DIAN, ERP).',
  alternates: {
    canonical: 'https://autonomek.com/servicios/automatizacion-de-procesos',
    languages: {
      'es': 'https://autonomek.com/servicios/automatizacion-de-procesos',
      'es-CO': 'https://autonomek.com/servicios/automatizacion-de-procesos',
      'es-MX': 'https://autonomek.com/servicios/automatizacion-de-procesos',
      'es-ES': 'https://autonomek.com/servicios/automatizacion-de-procesos',
      'en': 'https://autonomek.com/en/services/process-automation',
      'en-US': 'https://autonomek.com/en/services/process-automation',
      'x-default': 'https://autonomek.com/servicios/automatizacion-de-procesos',
    },
  },
  openGraph: {
    title: 'Automatización de Procesos con IA, n8n y ERP | Autonomek',
    description: 'Flujos de n8n y APIs de alta disponibilidad: sincronización entre WhatsApp, CRM, pasarelas de pago y facturación electrónica (Alegra, Siigo, DIAN).',
    url: 'https://autonomek.com/servicios/automatizacion-de-procesos',
    type: 'website',
  },
};

const serviceSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      name: 'Automatización de Procesos Empresariales',
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
          name: 'Automatización de Procesos e Integraciones ERP/CRM',
          item: 'https://autonomek.com/servicios/automatizacion-de-procesos',
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'Servicio de Automatización de Procesos Empresariales con IA y n8n',
      serviceType: 'B2B Workflow & Process Automation Engineering',
      provider: {
        '@type': 'Organization',
        '@id': 'https://autonomek.com/#organization',
        name: 'Autonomek',
        url: 'https://autonomek.com',
      },
      description: 'Orquestación de flujos de trabajo con n8n, webhooks y APIs para eliminar la digitación manual entre WhatsApp, CRM, bancos y software contable (Alegra, Siigo, DIAN).',
      areaServed: ['CO', 'MX', 'ES', 'US'],
      url: 'https://autonomek.com/servicios/automatizacion-de-procesos',
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
      <AutomatizacionPageClient region="co" locale="es" />
    </>
  );
}
