import type { Metadata } from 'next';

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
};

export default function AutomatizacionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
