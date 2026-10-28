import { Metadata } from 'next';
import SolucionesPageClient from './software-client';

export const metadata: Metadata = {
  title: 'Desarrollo de Software a Medida y Plataformas Web Propias | Autonomek',
  description: 'Construimos plataformas digitales, portales de clientes y paneles analíticos exclusivos 100% propiedad de tu empresa, sin pagar licencias mensuales por usuario.',
  alternates: {
    canonical: 'https://www.autonomek.com/servicios/software-a-medida',
    languages: {
      'es-CO': 'https://www.autonomek.com/servicios/software-a-medida',
      'es-ES': 'https://www.autonomek.com/es/servicios/software-a-medida',
      'en-US': 'https://www.autonomek.com/us/services/custom-software',
      'x-default': 'https://www.autonomek.com/servicios/software-a-medida',
    },
  },
  openGraph: {
    title: 'Desarrollo de Software a Medida y Plataformas Web Propias | Autonomek',
    description: 'Sistemas web propietarios, CRMs exclusivos y paneles BI en tiempo real sin costes de suscripción SaaS.',
    url: 'https://www.autonomek.com/servicios/software-a-medida',
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
          name: 'Plataformas y Software Propio a Medida',
          item: 'https://www.autonomek.com/servicios/software-a-medida',
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'Plataformas y Software Propio a Medida',
      serviceType: 'Custom Enterprise Software Engineering',
      provider: {
        '@type': 'Organization',
        name: 'Autonomek',
        url: 'https://www.autonomek.com',
      },
      description: 'Ingeniería full-stack de portales comerciales, herramientas internas y dashboards analíticos con arquitectura cloud escalable y propiedad total del código.',
      areaServed: ['CO', 'MX', 'ES', 'US'],
      url: 'https://www.autonomek.com/servicios/software-a-medida',
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
      <SolucionesPageClient locale="es" />
    </>
  );
}
