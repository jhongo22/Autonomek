import type { Metadata } from 'next';
import { Inter, Syne } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const syne = Syne({ subsets: ['latin'], variable: '--font-syne', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.autonomek.com'),
  title: 'Autonomek | Ingeniería de Agentes IA, Automatización B2B y Desarrollo Web',
  description: 'Arquitectura de software B2B, agentes de Inteligencia Artificial 24/7 en WhatsApp, automatización de procesos y páginas web de alto rendimiento con SEO técnico.',
  icons: {
    icon: [
      {
        url: '/logo_pestaña.png',
        sizes: '96x96',
        type: 'image/png',
      }
    ],
    shortcut: '/logo_pestaña.png',
    apple: '/logo_pestaña.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Autonomek | Ingeniería de Agentes IA, Automatización B2B y Desarrollo Web',
    description: 'Transformamos la operación de tu empresa con agentes de IA 24/7 en WhatsApp, automatización de procesos B2B y plataformas web ultrarrápidas en Next.js.',
    url: 'https://www.autonomek.com',
    siteName: 'Autonomek',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 401,
        alt: 'Autonomek - Ingeniería de Automatización de Procesos, Software B2B y Agentes IA',
      },
    ],
    locale: 'es_CO',
    alternateLocale: ['es_ES', 'es_MX', 'en_US'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autonomek | Ingeniería de Agentes IA, Automatización B2B y Desarrollo Web',
    description: 'Agentes de IA 24/7 en WhatsApp, automatización de procesos B2B y desarrollo web de alto rendimiento con SEO técnico.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': 'https://www.autonomek.com/#organization',
      name: 'Autonomek',
      alternateName: ['Autonomek Web & IA', 'Autonomek AI Engineering', 'Autonomek Automatización B2B'],
      url: 'https://www.autonomek.com',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://www.autonomek.com/#logo',
        url: 'https://www.autonomek.com/logo.png',
        caption: 'Autonomek - B2B AI Agents, Process Automation & Web Engineering',
      },
      image: 'https://www.autonomek.com/logo.png',
      description:
        'Firma de ingeniería especializada en agentes de Inteligencia Artificial 24/7 para WhatsApp y Web, automatización de procesos comerciales B2B (n8n, CRM, ERP), software a medida y desarrollo web de alto rendimiento.',
      founder: {
        '@type': 'Person',
        name: 'Jhonatan González',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Medellín',
        addressRegion: 'Antioquia',
        addressCountry: 'CO',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 6.2442,
        longitude: -75.5812,
      },
      areaServed: [
        { '@type': 'Country', name: 'Colombia' },
        { '@type': 'Country', name: 'México' },
        { '@type': 'Country', name: 'España' },
        { '@type': 'Country', name: 'United States' },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+57-300-4435894',
          url: 'https://wa.me/573004435894',
          contactType: 'sales',
          availableLanguage: ['Spanish', 'English'],
          areaServed: ['CO', 'MX', 'ES', 'US'],
        },
        {
          '@type': 'ContactPoint',
          email: 'contacto@autonomek.com',
          contactType: 'customer support',
          availableLanguage: ['Spanish', 'English'],
        },
      ],
      sameAs: [
        'https://www.instagram.com/autonomek',
        'https://github.com/jhongo22',
      ],
      knowsAbout: [
        'Artificial Intelligence Agents',
        'Agentes IA Conversacionales',
        'WhatsApp Business Cloud API',
        'B2B Workflow Automation (n8n, RPA, Webhooks)',
        'Next.js High-Performance Web Engineering',
        'Technical SEO, AEO & GEO (Generative Engine Optimization)',
        'Enterprise RAG Architectures & Vector Databases',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Autonomek B2B Engineering Services / Servicios de Ingeniería B2B',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Agentes de Inteligencia Artificial 24/7 / 24/7 AI Sales Agents',
              description: 'Asistentes conversacionales multimodales para WhatsApp, Web y CRM que califican prospectos, procesan audios y agendan citas en tiempo real.',
              url: 'https://www.autonomek.com/es/servicios/agentes-inteligencia-artificial',
              sameAs: 'https://www.autonomek.com/en/services/ai-agents',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Páginas Web de Alto Rendimiento / High-Performance B2B Websites',
              description: 'Plataformas web ultrarrápidas en Next.js con Core Web Vitals óptimos, diseñadas para posicionamiento SEO/GEO y conversión B2B.',
              url: 'https://www.autonomek.com/es/servicios/paginas-web-alto-rendimiento',
              sameAs: 'https://www.autonomek.com/en/services/high-performance-websites',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Automatización de Procesos B2B / Process & Workflow Automation',
              description: 'Orquestación de flujos de trabajo autónomos con n8n, APIs, CRMs, ERPs y pasarelas de pago sin intervención manual.',
              url: 'https://www.autonomek.com/es/servicios/automatizacion-de-procesos',
              sameAs: 'https://www.autonomek.com/en/services/process-automation',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Software a Medida / Custom Enterprise Software',
              description: 'Desarrollo de plataformas cloud, CRMs propios y dashboards de inteligencia de negocios para operaciones empresariales.',
              url: 'https://www.autonomek.com/es/servicios/software-a-medida',
              sameAs: 'https://www.autonomek.com/en/services/custom-software',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.autonomek.com/#website',
      url: 'https://www.autonomek.com',
      name: 'Autonomek',
      publisher: {
        '@id': 'https://www.autonomek.com/#organization',
      },
      inLanguage: ['es', 'es-CO', 'es-MX', 'es-ES', 'en', 'en-US'],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.autonomek.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué servicios ofrece Autonomek? / What services does Autonomek provide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Autonomek engineers high-performance Next.js websites, 24/7 AI sales and support agents for WhatsApp & Web, B2B workflow automations (n8n, CRM, ERP), and custom cloud software for companies in Colombia, Mexico, Spain, and the United States.',
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
            text: 'Toda la atención comercial y diagnóstico técnico se realiza directamente vía WhatsApp (+57 300 443 5894) sin formularios lentos, entregando una hoja de ruta técnica con alcance y presupuesto cerrado.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${syne.variable} bg-background text-foreground antialiased`}>
      <head>
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="Autonomek LLM & Agent Documentation (ES/EN)" />
        <link rel="alternate" type="text/markdown" href="/llms-full.txt" title="Autonomek Full Context for LLMs (ES/EN)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-hidden selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
