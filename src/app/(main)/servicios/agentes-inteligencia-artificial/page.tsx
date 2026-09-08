import { Metadata } from 'next';
import AgentesIAPageClient from './agentes-client';

export const metadata: Metadata = {
  title: 'Agentes de IA para WhatsApp y web 24/7 | Autonomek',
  description: 'Empleados digitales autónomos que entienden audios, leen recibos, cotizan y agendan citas en tiempo real con escalado humano fluido.',
  alternates: {
    canonical: 'https://autonomek.com/servicios/agentes-inteligencia-artificial',
    languages: {
      'es-CO': 'https://autonomek.com/servicios/agentes-inteligencia-artificial',
      'en-US': 'https://autonomek.com/us/services/ai-agents',
      'x-default': 'https://autonomek.com/servicios/agentes-inteligencia-artificial',
    },
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
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
      name: 'Agentes de Inteligencia Artificial',
      item: 'https://autonomek.com/servicios/agentes-inteligencia-artificial',
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AgentesIAPageClient locale="es" />
    </>
  );
}
