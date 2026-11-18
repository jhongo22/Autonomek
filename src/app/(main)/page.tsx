import type { Metadata } from 'next';
import { buildSocialMetadata } from '@/lib/seo-metadata';
import HomeClient from './home-client';

export const metadata: Metadata = {
  title: 'Autonomek | Software a Medida, Agentes IA WhatsApp y Web',
  description: 'Ingeniería de software a medida, agentes de IA en WhatsApp 24/7, automatización de procesos con n8n y desarrollo web Next.js con SEO/GEO para empresas.',
  alternates: {
    canonical: 'https://autonomek.com',
    languages: {
      'es': 'https://autonomek.com',
      'es-CO': 'https://autonomek.com',
      'es-MX': 'https://autonomek.com',
      'es-ES': 'https://autonomek.com',
      'en': 'https://autonomek.com/en',
      'en-US': 'https://autonomek.com/en',
      'x-default': 'https://autonomek.com',
    },
  },
  ...buildSocialMetadata({
    title: 'Autonomek | Software a Medida, Agentes IA WhatsApp y Web',
    description: 'Páginas web Next.js (0.6s LCP) que posicionan en Google y ChatGPT, agentes de IA en WhatsApp 24/7, software a medida y automatización B2B.',
    url: 'https://autonomek.com',
  }),
};

const homeFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://autonomek.com/#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué tipo de soluciones desarrollan en Autonomek?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desarrollamos cuatro soluciones principales: agentes de IA en WhatsApp que atienden y agendan citas 24/7, sitios web rápidos en Next.js optimizados para liderar en Google y ChatGPT, software a medida (paneles de control, portales y reservas sin licencias por usuario) y automatizaciones entre tus sistemas con n8n y APIs.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo funciona un agente de Inteligencia Artificial para WhatsApp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El agente se conecta a la API oficial de WhatsApp Cloud y a tu base de conocimiento (RAG). Comprende texto, transcribe audios de voz, valida comprobantes de pago con visión artificial, califica prospectos, agenda citas en tu CRM y transfiere a ejecutivos humanos cuando se requiere.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se inicia un proyecto o cotización en Autonomek?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Toda la atención comercial y diagnóstico técnico se realiza directamente vía WhatsApp (+57 301 014 7443) sin formularios lentos, entregando una hoja de ruta técnica con alcance y presupuesto cerrado.',
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />
      <HomeClient region="co" />
    </>
  );
}
