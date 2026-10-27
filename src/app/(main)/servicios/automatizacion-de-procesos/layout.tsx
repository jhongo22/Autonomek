import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automatización de Procesos Empresariales B2B con IA | Autonomek',
  description: 'Conectamos tu web, WhatsApp, CRM y ERP mediante n8n y APIs para erradicar tareas manuales y errores humanos. Tu operación en piloto automático.',
  alternates: {
    canonical: 'https://www.autonomek.com/servicios/automatizacion-de-procesos',
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

export default function AutomatizacionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
