import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automatización de procesos empresariales con IA | Autonomek',
  description: 'Conectamos tu web, WhatsApp, CRM y hojas de cálculo para erradicar tareas manuales y errores humanos. Tu operación comercial en piloto automático.',
  alternates: {
    canonical: 'https://autonomek.com/servicios/automatizacion-de-procesos',
  },
};

export default function AutomatizacionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
