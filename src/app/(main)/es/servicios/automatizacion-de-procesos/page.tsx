import type { Metadata } from 'next';
import AutomatizacionPageClient from '../../../servicios/automatizacion-de-procesos/automatizacion-client';

export const metadata: Metadata = {
  title: 'Automatización de Procesos B2B (n8n, APIs, CRM, WhatsApp) | Autonomek',
  description: 'Elimina las tareas manuales repetitivas de tu empresa. Conectamos tu CRM, ERP, WhatsApp y facturación mediante flujos de trabajo autónomos en tiempo real.',
  alternates: {
    canonical: 'https://www.autonomek.com/es/servicios/automatizacion-de-procesos',
    languages: {
      'es': 'https://www.autonomek.com/es/servicios/automatizacion-de-procesos',
      'es-ES': 'https://www.autonomek.com/es/servicios/automatizacion-de-procesos',
      'es-CO': 'https://www.autonomek.com/servicios/automatizacion-de-procesos',
      'en': 'https://www.autonomek.com/en/services/process-automation',
      'en-US': 'https://www.autonomek.com/us/services/process-automation',
      'x-default': 'https://www.autonomek.com/servicios/automatizacion-de-procesos',
    },
  },
};

export default function EsAutomatizacionPage() {
  return <AutomatizacionPageClient locale="es" />;
}

