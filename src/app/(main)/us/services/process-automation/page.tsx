import type { Metadata } from 'next';
import AutomatizacionPageClient from '../../../servicios/automatizacion-de-procesos/automatizacion-client';

export const metadata: Metadata = {
  title: 'B2B Process & Workflow Automation | Autonomek USA',
  description: 'Connect your CRM, ERP, WhatsApp, and billing systems into autonomous real-time workflows with zero human error.',
  alternates: {
    canonical: 'https://www.autonomek.com/us/services/process-automation',
    languages: {
      'en': 'https://www.autonomek.com/en/services/process-automation',
      'en-US': 'https://www.autonomek.com/us/services/process-automation',
      'es': 'https://www.autonomek.com/es/servicios/automatizacion-de-procesos',
      'es-CO': 'https://www.autonomek.com/servicios/automatizacion-de-procesos',
      'x-default': 'https://www.autonomek.com/servicios/automatizacion-de-procesos',
    },
  },
};

export default function ProcessAutomationPageUS() {
  return <AutomatizacionPageClient locale="en" />;
}
