import type { Metadata } from 'next';
import { buildSocialMetadata } from '@/lib/seo-metadata';
import ProyectosClient from './proyectos-client';

export const metadata: Metadata = {
  title: 'Casos técnicos y arquitecturas en operación | Autonomek',
  description: 'Descubre cómo nuestras plataformas web, automatizaciones y agentes de IA resuelven retos reales de ventas, reservas y operación empresarial.',
  alternates: {
    canonical: 'https://autonomek.com/proyectos',
    languages: {
      'es': 'https://autonomek.com/proyectos',
      'es-CO': 'https://autonomek.com/proyectos',
      'es-MX': 'https://autonomek.com/proyectos',
      'es-ES': 'https://autonomek.com/proyectos',
      'en': 'https://autonomek.com/en/projects',
      'en-US': 'https://autonomek.com/en/projects',
      'x-default': 'https://autonomek.com/proyectos',
    },
  },
  ...buildSocialMetadata({
    title: 'Casos técnicos y arquitecturas en operación | Autonomek',
    description: 'Descubre cómo nuestras plataformas web, automatizaciones y agentes de IA resuelven retos reales de ventas, reservas y operación empresarial.',
    url: 'https://autonomek.com/proyectos',
  }),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  name: 'Casos de Éxito — Autonomek',
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
      name: 'Casos de Éxito',
      item: 'https://autonomek.com/proyectos',
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
      <ProyectosClient locale="es" />
    </>
  );
}
