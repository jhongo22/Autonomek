import type { Metadata } from 'next';

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
};

export default function SoftwareMedidaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
