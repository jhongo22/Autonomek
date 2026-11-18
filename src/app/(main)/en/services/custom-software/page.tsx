import type { Metadata } from 'next';
import SolucionesPageClient from '../../../servicios/software-a-medida/software-client';

export const metadata: Metadata = {
  title: 'Custom Enterprise Software Development ($0/Seat) | Autonomek',
  description: 'Bespoke business software, executive dashboards, and client portals built on Next.js & PostgreSQL with 100% IP ownership and $0 monthly per-seat fees.',
  alternates: {
    canonical: 'https://autonomek.com/en/services/custom-software',
    languages: {
      'es': 'https://autonomek.com/servicios/software-a-medida',
      'es-CO': 'https://autonomek.com/servicios/software-a-medida',
      'es-MX': 'https://autonomek.com/servicios/software-a-medida',
      'es-ES': 'https://autonomek.com/servicios/software-a-medida',
      'en': 'https://autonomek.com/en/services/custom-software',
      'en-US': 'https://autonomek.com/en/services/custom-software',
      'x-default': 'https://autonomek.com/servicios/software-a-medida',
    },
  },
};

const enServiceJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      name: 'Custom Enterprise Software',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://autonomek.com/en' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://autonomek.com/en/services' },
        { '@type': 'ListItem', position: 3, name: 'Custom Software', item: 'https://autonomek.com/en/services/custom-software' },
      ],
    },
    {
      '@type': 'Service',
      name: 'Custom Enterprise Software & Web Platforms',
      serviceType: 'Custom Enterprise Software Engineering',
      provider: { '@type': 'Organization', '@id': 'https://autonomek.com/#organization', name: 'Autonomek', url: 'https://autonomek.com' },
      description: 'Proprietary web applications, custom CRMs, client portals, and BI dashboards built with Next.js & PostgreSQL and $0 per-user licensing fees.',
      areaServed: ['US', 'CO', 'MX', 'ES'],
      url: 'https://autonomek.com/en/services/custom-software',
    },
  ],
};

export default function EnCustomSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enServiceJsonLd) }}
      />
      <SolucionesPageClient region="en" locale="en" />
    </>
  );
}

