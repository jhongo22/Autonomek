import type { Metadata } from 'next';
import AgentesIAPageClient from '../../../servicios/agentes-inteligencia-artificial/agentes-client';

export const metadata: Metadata = {
  title: 'Vendedor IA en WhatsApp 24/7 y Agentes Conversacionales B2B | Autonomek',
  description: 'Vendedores y recepcionistas de IA en WhatsApp que atienden en 1 segundo, responden audios, muestran catálogos y agendan citas en tu calendario sin esperas.',
  alternates: {
    canonical: 'https://www.autonomek.com/es/servicios/agentes-inteligencia-artificial',
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

export default function EsAgentesIAPage() {
  return <AgentesIAPageClient locale="es" />;
}

