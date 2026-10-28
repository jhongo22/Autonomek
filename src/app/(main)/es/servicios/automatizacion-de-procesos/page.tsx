import type { Metadata } from 'next';
import AutomatizacionPageClient from '../../../servicios/automatizacion-de-procesos/automatizacion-client';

export const metadata: Metadata = {
  title: 'Operación y Facturación en Piloto Automático con n8n y CRM | Autonomek',
  description: 'Conectamos tu web, WhatsApp, CRM y facturación para eliminar tareas manuales repetitivas y errores de digitación en tu empresa.',
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

