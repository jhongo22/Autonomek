import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Casos de Éxito y Portafolio de Ingeniería IA & Web | Autonomek',
  description: 'Explora nuestro portafolio de proyectos reales: agentes de inteligencia artificial en WhatsApp, automatizaciones de procesos y desarrollo web B2B.',
  alternates: {
    canonical: 'https://www.autonomek.com/proyectos',
    languages: {
      'es': 'https://www.autonomek.com/es/proyectos',
      'es-ES': 'https://www.autonomek.com/es/proyectos',
      'es-CO': 'https://www.autonomek.com/proyectos',
      'en': 'https://www.autonomek.com/en/projects',
      'en-US': 'https://www.autonomek.com/us/projects',
      'x-default': 'https://www.autonomek.com/proyectos',
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
