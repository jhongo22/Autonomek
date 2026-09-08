import { Metadata } from 'next';
import SolucionesPageClient from './software-client';

export const metadata: Metadata = {
  title: 'Desarrollo de software a medida y plataformas web | Autonomek',
  description: 'Construimos plataformas digitales, paneles analíticos y sistemas operacionales exclusivos adaptados a los cuellos de botella específicos de tu negocio.',
  alternates: {
    canonical: 'https://autonomek.com/servicios/software-a-medida',
    languages: {
      'es-CO': 'https://autonomek.com/servicios/software-a-medida',
      'en-US': 'https://autonomek.com/us/services/custom-software',
      'x-default': 'https://autonomek.com/servicios/software-a-medida',
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
      name: 'Software a Medida',
      item: 'https://autonomek.com/servicios/software-a-medida',
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
      <SolucionesPageClient locale="es" />
    </>
  );
}
