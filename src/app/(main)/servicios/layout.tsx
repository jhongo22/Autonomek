import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sistemas y soluciones de ingeniería digital | Autonomek',
  description: 'Conoce nuestros sistemas de páginas web de alto rendimiento, agentes de IA 24/7, automatización de procesos y software a medida.',
  alternates: {
    canonical: 'https://autonomek.com/servicios',
  },
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
