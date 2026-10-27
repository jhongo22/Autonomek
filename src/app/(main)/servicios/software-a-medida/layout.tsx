import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Desarrollo de Software a Medida y Plataformas Cloud B2B | Autonomek',
  description: 'Construimos plataformas digitales, CRMs propios, paneles analíticos y sistemas operacionales adaptados a los flujos de tu empresa.',
  alternates: {
    canonical: 'https://www.autonomek.com/servicios/software-a-medida',
    languages: {
      'es': 'https://www.autonomek.com/es/servicios/software-a-medida',
      'es-ES': 'https://www.autonomek.com/es/servicios/software-a-medida',
      'es-CO': 'https://www.autonomek.com/servicios/software-a-medida',
      'en': 'https://www.autonomek.com/en/services/custom-software',
      'en-US': 'https://www.autonomek.com/us/services/custom-software',
      'x-default': 'https://www.autonomek.com/servicios/software-a-medida',
    },
  },
};

export default function SoftwareMedidaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
