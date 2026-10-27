import type { Metadata } from 'next';
import SolucionesPageClient from '../../../servicios/software-a-medida/software-client';

export const metadata: Metadata = {
  title: 'Software a Medida y Plataformas Cloud B2B | Autonomek',
  description: 'Ingeniería de software empresarial a medida: CRMs propios, plataformas SaaS multi-tenant, portales operativos y dashboards de inteligencia de negocios.',
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

