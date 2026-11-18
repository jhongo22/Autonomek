import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios de Páginas Web, Agentes de IA y Software B2B | Autonomek',
  description: 'Soluciones de desarrollo web Next.js, agentes de IA 24/7 en WhatsApp, automatización de procesos con n8n y software a medida sin licencias por usuario.',
  alternates: {
    canonical: 'https://autonomek.com/servicios',
    languages: {
      'es': 'https://autonomek.com/servicios',
      'es-CO': 'https://autonomek.com/servicios',
      'es-MX': 'https://autonomek.com/servicios',
      'es-ES': 'https://autonomek.com/servicios',
      'en': 'https://autonomek.com/en/services',
      'en-US': 'https://autonomek.com/en/services',
      'x-default': 'https://autonomek.com/servicios',
    },
  },
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
