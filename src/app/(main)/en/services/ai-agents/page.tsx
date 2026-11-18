import type { Metadata } from 'next';
import AgentesIAPageClient from '../../../servicios/agentes-inteligencia-artificial/agentes-client';

export const metadata: Metadata = {
  title: '24/7 WhatsApp AI Sales Agents & Booking Bots | Autonomek',
  description: 'Deploy autonomous 24/7 WhatsApp AI sales agents on official Meta Cloud API with RAG retrieval, voice note transcription, OCR receipts, and CRM booking.',
  alternates: {
    canonical: 'https://autonomek.com/en/services/ai-agents',
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

const enServiceJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      name: 'WhatsApp AI Sales Agents',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://autonomek.com/en' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://autonomek.com/en/services' },
        { '@type': 'ListItem', position: 3, name: '24/7 WhatsApp AI Agents', item: 'https://autonomek.com/en/services/ai-agents' },
      ],
    },
    {
      '@type': 'Service',
      name: '24/7 WhatsApp AI Sales & Booking Agents',
      serviceType: 'Conversational AI & Sales Automation Engineering',
      provider: { '@type': 'Organization', '@id': 'https://autonomek.com/#organization', name: 'Autonomek', url: 'https://autonomek.com' },
      description: 'Autonomous AI agents connected to the official Meta WhatsApp Business Cloud API with RAG retrieval, voice transcription, and CRM booking.',
      areaServed: ['US', 'CO', 'MX', 'ES'],
      url: 'https://autonomek.com/en/services/ai-agents',
    },
  ],
};

export default function EnAiAgentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enServiceJsonLd) }}
      />
      <AgentesIAPageClient region="en" locale="en" />
    </>
  );
}

