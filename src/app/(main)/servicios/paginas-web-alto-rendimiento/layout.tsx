import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Desarrollo y Diseño de Páginas Web B2B Next.js | Autonomek',
  description: 'Diseño y desarrollo de páginas web corporativas en Next.js (0.6s LCP), SEO técnico para Google y GEO para ChatGPT. Convierte visitas en ventas B2B.',
  alternates: {
    canonical: 'https://autonomek.com/servicios/paginas-web-alto-rendimiento',
    languages: {
      'es': 'https://autonomek.com/servicios/paginas-web-alto-rendimiento',
      'es-CO': 'https://autonomek.com/servicios/paginas-web-alto-rendimiento',
      'es-MX': 'https://autonomek.com/servicios/paginas-web-alto-rendimiento',
      'es-ES': 'https://autonomek.com/servicios/paginas-web-alto-rendimiento',
      'en': 'https://autonomek.com/en/services/high-performance-websites',
      'en-US': 'https://autonomek.com/en/services/high-performance-websites',
      'x-default': 'https://autonomek.com/servicios/paginas-web-alto-rendimiento',
    },
  },
};

export default function PaginasWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
