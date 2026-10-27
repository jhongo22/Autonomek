import type { Metadata } from 'next';
import AutomatizacionPageClient from '../../../servicios/automatizacion-de-procesos/automatizacion-client';

export const metadata: Metadata = {
  title: 'B2B Process & Workflow Automation (n8n, APIs, CRM) | Autonomek',
  description: 'Eliminate manual data entry and operational bottlenecks. We connect your CRM, ERP, WhatsApp, and billing systems into autonomous real-time workflows.',
  alternates: {
    canonical: 'https://www.autonomek.com/en/services/process-automation',
    languages: {
      'en': 'https://www.autonomek.com/en/services/process-automation',
      'en-US': 'https://www.autonomek.com/us/services/process-automation',
      'es': 'https://www.autonomek.com/es/servicios/automatizacion-de-procesos',
      'es-CO': 'https://www.autonomek.com/servicios/automatizacion-de-procesos',
      'x-default': 'https://www.autonomek.com/servicios/automatizacion-de-procesos',
    },
  },
};

export default function EnAutomationPage() {
  return <AutomatizacionPageClient locale="en" />;
}

