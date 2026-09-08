import { Metadata } from 'next';
import ServiciosClient from './servicios-client';

export const metadata: Metadata = {
  title: 'Sistemas y soluciones de ingeniería digital | Autonomek',
  description: 'Conoce nuestros sistemas de páginas web de alto rendimiento, agentes de IA 24/7, automatización de procesos y software a medida.',
  alternates: {
    canonical: 'https://autonomek.com/servicios',
    languages: {
      'es-CO': 'https://autonomek.com/servicios',
      'en-US': 'https://autonomek.com/us/services',
      'x-default': 'https://autonomek.com/servicios',
    }
  }
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
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServiciosClient locale="es" />
    </>
  );
}
