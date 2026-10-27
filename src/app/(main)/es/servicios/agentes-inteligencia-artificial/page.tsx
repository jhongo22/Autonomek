import type { Metadata } from 'next';
import AgentesIAPageClient from '../../../servicios/agentes-inteligencia-artificial/agentes-client';

export const metadata: Metadata = {
  title: 'Agentes de Inteligencia Artificial 24/7 para Ventas y Soporte | Autonomek',
  description: 'Implementamos agentes de IA conversacionales en WhatsApp, Web y CRM entrenados con tus datos (RAG) para calificar prospectos, agendar citas y cerrar ventas 24/7.',
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

