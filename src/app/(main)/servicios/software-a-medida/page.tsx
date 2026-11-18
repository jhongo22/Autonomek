import { Metadata } from 'next';
import { buildSocialMetadata } from '@/lib/seo-metadata';
import SolucionesPageClient from './software-client';

export const metadata: Metadata = {
  title: 'Desarrollo de Software a Medida para Empresas | Autonomek',
  description: 'Empresa de desarrollo de software a medida, portales de clientes y paneles BI propios con $0 en licencias mensuales por usuario. 100% código tuyo.',
  alternates: {
    canonical: 'https://autonomek.com/servicios/software-a-medida',
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
  ...buildSocialMetadata({
    title: 'Desarrollo de Software a Medida para Empresas | Autonomek',
    description: 'Sistemas web propietarios, CRMs exclusivos y paneles BI en tiempo real con $0 en licencias mensuales por usuario.',
    url: 'https://autonomek.com/servicios/software-a-medida',
  }),
};

const serviceSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      name: 'Desarrollo de Software a Medida',
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
          name: 'Desarrollo de Software a Medida',
          item: 'https://autonomek.com/servicios/software-a-medida',
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'Desarrollo de Software a Medida y Plataformas Web Empresariales',
      serviceType: 'Custom Enterprise Software Engineering',
      provider: {
        '@type': 'Organization',
        '@id': 'https://autonomek.com/#organization',
        name: 'Autonomek',
        url: 'https://autonomek.com',
      },
      description: 'Ingeniería full-stack de portales comerciales, herramientas internas y dashboards analíticos con arquitectura cloud escalable y propiedad total del código.',
      areaServed: ['CO', 'MX', 'ES', 'US'],
      url: 'https://autonomek.com/servicios/software-a-medida',
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
      <SolucionesPageClient region="co" locale="es" />
    </>
  );
}
