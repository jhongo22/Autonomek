import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios de Ingeniería IA, Automatización y Software B2B | Autonomek',
  description: 'Conoce nuestros sistemas de páginas web de alto rendimiento, agentes de IA 24/7, automatización de procesos y software a medida.',
  alternates: {
    canonical: 'https://www.autonomek.com/servicios',
    languages: {
      'es': 'https://www.autonomek.com/es/servicios',
      'es-ES': 'https://www.autonomek.com/es/servicios',
      'es-CO': 'https://www.autonomek.com/servicios',
      'en': 'https://www.autonomek.com/en/services',
      'en-US': 'https://www.autonomek.com/us/services',
      'x-default': 'https://www.autonomek.com/servicios',
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
