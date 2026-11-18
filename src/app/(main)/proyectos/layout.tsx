import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Casos de Éxito y Portafolio de Ingeniería IA & Web | Autonomek',
  description: 'Explora nuestro portafolio de proyectos reales: agentes de inteligencia artificial en WhatsApp, automatizaciones de procesos y desarrollo web B2B.',
  alternates: {
    canonical: 'https://autonomek.com/proyectos',
    languages: {
      'es': 'https://autonomek.com/proyectos',
      'es-CO': 'https://autonomek.com/proyectos',
      'es-MX': 'https://autonomek.com/proyectos',
      'es-ES': 'https://autonomek.com/proyectos',
      'en': 'https://autonomek.com/en/projects',
      'en-US': 'https://autonomek.com/en/projects',
      'x-default': 'https://autonomek.com/proyectos',
    },
  },
};

export default function ProyectosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
