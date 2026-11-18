import type { Metadata } from 'next';
import { buildSocialMetadata } from '@/lib/seo-metadata';
import AutomatizacionPageClient from '../../../servicios/automatizacion-de-procesos/automatizacion-client';

export const metadata: Metadata = {
  title: 'B2B Process Automation Services (n8n, API, ERP) | Autonomek',
  description: 'Enterprise workflow and process automation with n8n, webhooks, and APIs. Connect WhatsApp, CRM, spreadsheets, and ERP billing with zero manual typing.',
  alternates: {
    canonical: 'https://autonomek.com/en/services/process-automation',
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
  ...buildSocialMetadata({
    title: 'B2B Process Automation Services (n8n, API, ERP) | Autonomek',
    description: 'Enterprise workflow and process automation with n8n, webhooks, and APIs. Connect WhatsApp, CRM, spreadsheets, and ERP billing with zero manual typing.',
    url: 'https://autonomek.com/en/services/process-automation',
    locale: 'en_US',
  }),
};

const enServiceJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      name: 'B2B Process Automation',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://autonomek.com/en' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://autonomek.com/en/services' },
        { '@type': 'ListItem', position: 3, name: 'Process Automation', item: 'https://autonomek.com/en/services/process-automation' },
      ],
    },
    {
      '@type': 'Service',
      name: 'B2B Process & Workflow Automation (n8n, APIs, CRM, ERP)',
      serviceType: 'B2B Workflow & Process Automation Engineering',
      provider: { '@type': 'Organization', '@id': 'https://autonomek.com/#organization', name: 'Autonomek', url: 'https://autonomek.com' },
      description: 'High-availability n8n orchestration, webhooks, and API pipelines connecting WhatsApp, CRM, spreadsheets, and ERP billing.',
      areaServed: ['US', 'CO', 'MX', 'ES'],
      url: 'https://autonomek.com/en/services/process-automation',
    },
  ],
};

export default function EnAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enServiceJsonLd) }}
      />
      <AutomatizacionPageClient region="en" locale="en" />
    </>
  );
}

