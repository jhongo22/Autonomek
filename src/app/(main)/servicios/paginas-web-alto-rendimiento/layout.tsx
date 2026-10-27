import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Desarrollo de Páginas Web de Alto Rendimiento & SEO Técnico | Autonomek',
  description: 'Sitios web ultrarrápidos en Next.js diseñados para posicionar en Google y motores de IA (GEO/AEO) y convertir visitas en clientes B2B.',
  alternates: {
    canonical: 'https://www.autonomek.com/servicios/paginas-web-alto-rendimiento',
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

export default function PaginasWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
