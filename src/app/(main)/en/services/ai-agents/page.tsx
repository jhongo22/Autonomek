import type { Metadata } from 'next';
import AgentesIAPageClient from '../../../servicios/agentes-inteligencia-artificial/agentes-client';

export const metadata: Metadata = {
  title: '24/7 B2B AI Sales & Support Agents | Autonomek',
  description: 'Deploy autonomous AI agents on WhatsApp, web, and CRM trained on your proprietary knowledge base (RAG) to qualify leads, book meetings, and close sales 24/7.',
  alternates: {
    canonical: 'https://www.autonomek.com/en/services/ai-agents',
    languages: {
      'en': 'https://www.autonomek.com/en/services/ai-agents',
      'en-US': 'https://www.autonomek.com/us/services/ai-agents',
      'es': 'https://www.autonomek.com/es/servicios/agentes-inteligencia-artificial',
      'es-CO': 'https://www.autonomek.com/servicios/agentes-inteligencia-artificial',
      'x-default': 'https://www.autonomek.com/servicios/agentes-inteligencia-artificial',
    },
  },
};

export default function EnAiAgentsPage() {
  return <AgentesIAPageClient locale="en" />;
}

