import { Metadata } from 'next';
import AgentesIAPageClient from './agentes-client';

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
  openGraph: {
    title: 'Agentes de IA para WhatsApp 24/7: Ventas y CRM | Autonomek',
    description: 'Atención 24/7 en WhatsApp: respuestas en 1.1s, lectura de notas de voz, validación de pagos y citas en Google Calendar.',
    url: 'https://autonomek.com/servicios/agentes-inteligencia-artificial',
    type: 'website',
  },
};

const serviceSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      name: 'Agentes de IA en WhatsApp',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: 'https://autonomek.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Servicios',
          item: 'https://autonomek.com/servicios',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Agentes de IA en WhatsApp 24/7',
          item: 'https://autonomek.com/servicios/agentes-inteligencia-artificial',
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'Agentes de Inteligencia Artificial para WhatsApp 24/7',
      serviceType: 'Conversational AI & WhatsApp Sales Automation Engineering',
      provider: {
        '@type': 'Organization',
        '@id': 'https://autonomek.com/#organization',
        name: 'Autonomek',
        url: 'https://autonomek.com',
      },
      description: 'Agentes de IA conectados a la API oficial de WhatsApp Cloud que atienden en 1 segundo, transcriben audios, validan comprobantes y agendan citas en CRM.',
      areaServed: ['CO', 'MX', 'ES', 'US'],
      url: 'https://autonomek.com/servicios/agentes-inteligencia-artificial',
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemaJsonLd) }}
      />
      <AgentesIAPageClient region="co" locale="es" />
    </>
  );
}
