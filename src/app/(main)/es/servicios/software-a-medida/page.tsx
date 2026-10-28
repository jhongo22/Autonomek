import type { Metadata } from 'next';
import SolucionesPageClient from '../../../servicios/software-a-medida/software-client';

export const metadata: Metadata = {
  title: 'Plataformas y Software Propio a Medida sin Costes SaaS | Autonomek',
  description: 'Construimos plataformas digitales, portales de clientes y paneles analíticos exclusivos 100% propiedad de tu empresa, sin pagar licencias mensuales por usuario.',
  alternates: {
    canonical: 'https://www.autonomek.com/es/servicios/software-a-medida',
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

export default function EsSoftwareMedidaPage() {
  return <SolucionesPageClient locale="es" />;
}

