import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agentes de IA para WhatsApp 24/7: Ventas y CRM | Autonomek',
  description: 'Implementamos agentes de inteligencia artificial para WhatsApp 24/7 con API oficial de Meta. Atienden en 1s, leen audios y pagos, y agendan en CRM.',
  alternates: {
    canonical: 'https://autonomek.com/servicios/agentes-inteligencia-artificial',
    languages: {
      'es': 'https://autonomek.com/servicios/agentes-inteligencia-artificial',
      'es-CO': 'https://autonomek.com/servicios/agentes-inteligencia-artificial',
      'es-MX': 'https://autonomek.com/servicios/agentes-inteligencia-artificial',
      'es-ES': 'https://autonomek.com/servicios/agentes-inteligencia-artificial',
      'en': 'https://autonomek.com/en/services/ai-agents',
      'en-US': 'https://autonomek.com/en/services/ai-agents',
      'x-default': 'https://autonomek.com/servicios/agentes-inteligencia-artificial',
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
