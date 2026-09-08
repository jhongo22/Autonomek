import type { Metadata } from 'next';
import { Inter, Syne } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const syne = Syne({ subsets: ['latin'], variable: '--font-syne' });

export const metadata: Metadata = {
  metadataBase: new URL('https://autonomek.com'),
  title: 'Autonomek: Automatización y desarrollo web | Posicionamiento SEO & agentes IA',
  description: 'Posicionamos tu página web en los primeros resultados de Google y convertimos tus visitas en clientes con WhatsApp y agentes de IA 24/7. Automatización de procesos comerciales y desarrollo web para tu negocio.',
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
    title: 'Autonomek: Automatización y desarrollo web | Posicionamiento SEO & agentes IA',
    description: 'Posicionamos tu página web en los primeros resultados de Google y convertimos tus visitas en clientes con WhatsApp y agentes de IA 24/7. Automatización de procesos comerciales y desarrollo web para tu negocio.',
    url: 'https://autonomek.com',
    siteName: 'Autonomek',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 401,
        alt: 'Autonomek - Agencia de Automatización de Procesos y Desarrollo Web con IA',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autonomek: Automatización y desarrollo web | Posicionamiento SEO & agentes IA',
    description: 'Posicionamos tu página web en los primeros resultados de Google y convertimos tus visitas en clientes con WhatsApp y agentes de IA 24/7.',
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
      '@id': 'https://autonomek.com/#organization',
      name: 'Autonomek',
      alternateName: ['Autonomek Web & IA', 'Autonomek Automatización', 'Autonomek AI'],
      url: 'https://autonomek.com',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://autonomek.com/#logo',
        url: 'https://autonomek.com/logo.png',
        caption: 'Autonomek - Agencia de Automatización y Agentes IA',
      },
      image: 'https://autonomek.com/logo.png',
      description:
        'Agencia especializada en automatización de procesos comerciales, agentes de Inteligencia Artificial para WhatsApp y Web 24/7, y desarrollo web de alto rendimiento.',
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
        { '@type': 'Country', name: 'Estados Unidos' },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+57-300-4435894',
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
        'Inteligencia Artificial',
        'Agentes IA Conversacionales',
        'WhatsApp Business API',
        'Automatización de Procesos (n8n, RPA)',
        'Desarrollo Web Next.js',
        'Posicionamiento SEO Técnico y GEO (Generative Engine Optimization)',
        'Arquitecturas RAG y Bases Vectoriales',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Ingeniería Autonomek',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Agentes de Inteligencia Artificial 24/7',
              description: 'Asistentes conversacionales inteligentes para WhatsApp y Web que cualifican prospectos, procesan audios y agendan citas en tiempo real.',
              url: 'https://autonomek.com/servicios/agentes-inteligencia-artificial',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Páginas Web de Alto Rendimiento',
              description: 'Sitios web ultrarrápidos construidos en Next.js con Core Web Vitals 95+, optimizados para posicionamiento orgánico en Google y conversión.',
              url: 'https://autonomek.com/servicios/paginas-web-alto-rendimiento',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Automatización de Procesos Comerciales',
              description: 'Integración y orquestación de flujos de trabajo con n8n, APIs, CRMs, ERPs, Google Sheets y Gmail sin intervención manual.',
              url: 'https://autonomek.com/servicios/automatizacion-de-procesos',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Software a Medida',
              description: 'Desarrollo de aplicaciones y paneles de control analíticos personalizados para operaciones empresariales complejas.',
              url: 'https://autonomek.com/servicios/software-a-medida',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://autonomek.com/#website',
      url: 'https://autonomek.com',
      name: 'Autonomek',
      publisher: {
        '@id': 'https://autonomek.com/#organization',
      },
      inLanguage: ['es-CO', 'es-MX', 'es-ES', 'en-US'],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://autonomek.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué servicios ofrece Autonomek?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Autonomek desarrolla páginas web de alto rendimiento con Next.js, agentes de Inteligencia Artificial 24/7 para WhatsApp y Web, automatizaciones de procesos comerciales (n8n, CRM, ERP) y software a medida para empresas en Colombia, México, España y Estados Unidos.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo funciona un agente de Inteligencia Artificial para WhatsApp?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El agente se conecta directamente a la API oficial de WhatsApp Cloud. Comprende texto, transcribe audios de voz y analiza comprobantes de pago mediante visión artificial. Responde al instante, cualifica prospectos, agenda citas en calendarios sincronizados y transfiere conversaciones a asesores humanos cuando se requiere.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo cotiza Autonomek los proyectos de desarrollo y automatización?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Iniciamos con un diagnóstico estratégico de procesos sin costo. Tras evaluar cuellos de botella y ROI esperado, entregamos una propuesta personalizada con precio cerrado y alcances claros, sin tarifas ocultas.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Autonomek trabaja con empresas fuera de Colombia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, contamos con clientes activos e infraestructura operativa para empresas en Colombia, México, España y Estados Unidos.',
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
        <link rel="preconnect" href="https://chatwoot.autonomek.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://chatwoot.autonomek.com" />
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="Autonomek LLM & Agent Documentation" />
        <link rel="alternate" type="text/markdown" href="/llms-full.txt" title="Autonomek Full Context for LLMs" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-hidden selection:bg-accent selection:text-background">
        {children}
      </body>
    </html>
  );
}
