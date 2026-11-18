import type { Metadata } from 'next';
import { Inter, Syne } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const syne = Syne({ subsets: ['latin'], variable: '--font-syne', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://autonomek.com'),
  title: 'Autonomek | Software a Medida, Agentes IA WhatsApp y Web',
  description: 'Ingeniería de software a medida, agentes de IA en WhatsApp 24/7, automatización de procesos con n8n y desarrollo web Next.js con SEO/GEO para empresas.',
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
    title: 'Autonomek | Software a Medida, Agentes IA WhatsApp y Web',
    description: 'Páginas web Next.js (0.6s LCP) que posicionan en Google y ChatGPT, agentes de IA en WhatsApp 24/7, software a medida y automatización B2B.',
    url: 'https://autonomek.com',
    siteName: 'Autonomek',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 401,
        alt: 'Autonomek - Ingeniería de Software a Medida, Automatización de Procesos y Agentes IA',
      },
    ],
    locale: 'es_CO',
    alternateLocale: ['es_ES', 'es_MX', 'en_US'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autonomek | Software a Medida, Agentes IA WhatsApp y Web',
    description: 'Páginas web Next.js (0.6s LCP), agentes de IA 24/7 en WhatsApp, software a medida y automatización de procesos B2B.',
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
      '@type': 'Person',
      '@id': 'https://autonomek.com/#founder',
      name: 'Jhonatan González',
      jobTitle: 'Founder & Lead Systems Architect',
      url: 'https://autonomek.com/nosotros',
      worksFor: {
        '@id': 'https://autonomek.com/#organization',
      },
      sameAs: [
        'https://github.com/jhongo22',
      ],
    },
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': 'https://autonomek.com/#organization',
      name: 'Autonomek',
      alternateName: ['Autonomek Web & IA', 'Autonomek AI Engineering', 'Autonomek Automatización B2B'],
      url: 'https://autonomek.com',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://autonomek.com/#logo',
        url: 'https://autonomek.com/logo.png',
        caption: 'Autonomek - B2B AI Agents, Process Automation, Custom Software & Web Engineering',
      },
      image: 'https://autonomek.com/logo.png',
      description:
        'Firma de ingeniería especializada en software a medida sin licencias por usuario, agentes de Inteligencia Artificial 24/7 para WhatsApp, automatización de procesos B2B (n8n, CRM, ERP) y desarrollo web Next.js con SEO y GEO.',
      founder: {
        '@id': 'https://autonomek.com/#founder',
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
          telephone: '+57-301-0147443',
          url: 'https://wa.me/573010147443',
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
        'https://www.instagram.com/autonomek?psln=bzJtYXI0NzhuZW42',
        'https://github.com/jhongo22',
      ],
      knowsAbout: [
        'Artificial Intelligence Agents',
        'Agentes de Inteligencia Artificial para WhatsApp',
        'WhatsApp Business Cloud API',
        'B2B Workflow Automation (n8n, Siigo, Alegra, DIAN, ERP)',
        'Custom Enterprise Software Engineering',
        'Next.js High-Performance Web Development',
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
              name: 'Agentes de Inteligencia Artificial para WhatsApp 24/7 / 24/7 WhatsApp AI Sales Agents',
              description: 'Agentes conversacionales autónomos para WhatsApp Business Cloud API y CRM que atienden en 1 segundo, transcriben audios, validan comprobantes y agendan citas 24/7.',
              url: 'https://autonomek.com/servicios/agentes-inteligencia-artificial',
              sameAs: 'https://autonomek.com/en/services/ai-agents',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Desarrollo de Páginas Web B2B en Next.js / High-Performance Web Development & SEO',
              description: 'Desarrollo y diseño de páginas web corporativas en Next.js con carga en 0.6s, SEO técnico para Google y optimización GEO para ChatGPT y Perplexity.',
              url: 'https://autonomek.com/servicios/paginas-web-alto-rendimiento',
              sameAs: 'https://autonomek.com/en/services/high-performance-websites',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Automatización de Procesos Empresariales (n8n, API, ERP) / B2B Process Automation',
              description: 'Orquestación de flujos de trabajo autónomos con n8n, webhooks, APIs, CRM y facturación electrónica (Alegra, Siigo, DIAN, ERP) sin digitación manual.',
              url: 'https://autonomek.com/servicios/automatizacion-de-procesos',
              sameAs: 'https://autonomek.com/en/services/process-automation',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Desarrollo de Software a Medida ($0 Licencias) / Custom Enterprise Software',
              description: 'Desarrollo de aplicaciones web propietarias, portales de clientes, motores de reserva y dashboards analíticos con 100% propiedad intelectual y $0 en licencias por usuario.',
              url: 'https://autonomek.com/servicios/software-a-medida',
              sameAs: 'https://autonomek.com/en/services/custom-software',
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
      inLanguage: ['es', 'es-CO', 'es-MX', 'es-ES', 'en', 'en-US'],
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
      <body className="min-h-screen flex flex-col overflow-x-clip selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
