import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agentes de IA para WhatsApp y web 24/7 | Autonomek',
  description: 'Empleados digitales autónomos que entienden audios, leen recibos, cotizan y agendan citas en tiempo real con escalado humano fluido.',
  alternates: {
    canonical: 'https://autonomek.com/servicios/agentes-inteligencia-artificial',
  },
};

export default function AgentesIALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
