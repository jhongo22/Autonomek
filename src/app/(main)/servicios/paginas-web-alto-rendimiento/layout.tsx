import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creación y posicionamiento de páginas web & posicionamiento web | Autonomek',
  description: 'Sitios web ultrarrápidos diseñados para posicionar en los primeros lugares de Google y convertir visitas en clientes reales con embudos y chat IA integrados.',
  alternates: {
    canonical: 'https://autonomek.com/servicios/paginas-web-alto-rendimiento',
  },
};

export default function PaginasWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
