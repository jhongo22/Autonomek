import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agentes de IA para WhatsApp y Web 24/7 | Autonomek',
  description: 'Agentes de Inteligencia Artificial autónomos que entienden audios, califican leads, cotizan y agendan citas en tiempo real con conexión a tu CRM.',
  alternates: {
    canonical: 'https://www.autonomek.com/servicios/agentes-inteligencia-artificial',
    languages: {
      'es': 'https://www.autonomek.com/es/servicios/agentes-inteligencia-artificial',
      'es-ES': 'https://www.autonomek.com/es/servicios/agentes-inteligencia-artificial',
      'es-CO': 'https://www.autonomek.com/servicios/agentes-inteligencia-artificial',
      'en': 'https://www.autonomek.com/en/services/ai-agents',
      'en-US': 'https://www.autonomek.com/us/services/ai-agents',
      'x-default': 'https://www.autonomek.com/servicios/agentes-inteligencia-artificial',
    },
  },
};

export default function AgentesIALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
