import { Metadata } from 'next';
import AgentesIAPageClient from './agentes-client';

export const metadata: Metadata = {
  title: 'Agentes de IA para WhatsApp 24/7 y Ventas B2B | Autonomek',
  description: 'Vendedores y recepcionistas de IA en WhatsApp que atienden en 1 segundo, responden audios, muestran catálogos y agendan citas en tu calendario sin esperas.',
  alternates: {
    canonical: 'https://www.autonomek.com/servicios/agentes-inteligencia-artificial',
    languages: {
      'es-CO': 'https://www.autonomek.com/servicios/agentes-inteligencia-artificial',
      'es-ES': 'https://www.autonomek.com/es/servicios/agentes-inteligencia-artificial',
      'en-US': 'https://www.autonomek.com/us/services/ai-agents',
      'x-default': 'https://www.autonomek.com/servicios/agentes-inteligencia-artificial',
    },
  },
  openGraph: {
    title: 'Agentes de IA para WhatsApp 24/7 y Ventas B2B | Autonomek',
    description: 'Atención 24/7 en WhatsApp: respuestas en 1.1s, comprensión de notas de voz, validación de pagos y citas en Google Calendar.',
    url: 'https://www.autonomek.com/servicios/agentes-inteligencia-artificial',
    type: 'website',
  },
};

const serviceSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: 'https://www.autonomek.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Servicios',
          item: 'https://www.autonomek.com/servicios',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Vendedor IA en WhatsApp 24/7',
          item: 'https://www.autonomek.com/servicios/agentes-inteligencia-artificial',
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'Vendedor IA en WhatsApp 24/7',
      serviceType: 'Conversational AI & Sales Automation Engineering',
      provider: {
        '@type': 'Organization',
        name: 'Autonomek',
        url: 'https://www.autonomek.com',
      },
      description: 'Agentes de IA conectados a la API oficial de WhatsApp Cloud que atienden en 1 segundo, transcriben audios, recomiendan catálogos y agendan citas en CRM.',
      areaServed: ['CO', 'MX', 'ES', 'US'],
      url: 'https://www.autonomek.com/servicios/agentes-inteligencia-artificial',
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
      <AgentesIAPageClient locale="es" />
    </>
  );
}
