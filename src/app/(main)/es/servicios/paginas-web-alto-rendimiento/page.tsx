import type { Metadata } from 'next';
import DesarrolloWebPageClient from '../../../servicios/paginas-web-alto-rendimiento/paginas-web-client';

export const metadata: Metadata = {
  title: 'Creación de Páginas Web y Posicionamiento SEO en Google e IA | Autonomek',
  description: 'Desarrollo de páginas web que cargan en menos de 1 segundo, proyectan máxima autoridad y posicionan en los primeros lugares de Google y ChatGPT.',
  alternates: {
    canonical: 'https://www.autonomek.com/es/servicios/paginas-web-alto-rendimiento',
    languages: {
      'es': 'https://www.autonomek.com/es/servicios/paginas-web-alto-rendimiento',
      'es-ES': 'https://www.autonomek.com/es/servicios/paginas-web-alto-rendimiento',
      'es-CO': 'https://www.autonomek.com/servicios/paginas-web-alto-rendimiento',
      'en': 'https://www.autonomek.com/en/services/high-performance-websites',
      'en-US': 'https://www.autonomek.com/us/services/high-performance-websites',
      'x-default': 'https://www.autonomek.com/servicios/paginas-web-alto-rendimiento',
    },
  },
};

export default function EsPaginasWebPage() {
  return <DesarrolloWebPageClient locale="es" />;
}

