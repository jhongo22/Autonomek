import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Desarrollo de software a medida y plataformas web | Autonomek',
  description: 'Construimos plataformas digitales, paneles analíticos y sistemas operacionales exclusivos adaptados a los cuellos de botella específicos de tu negocio.',
  alternates: {
    canonical: 'https://autonomek.com/servicios/software-a-medida',
  },
};

export default function SoftwareMedidaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
