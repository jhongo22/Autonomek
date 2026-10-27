import type { Metadata } from 'next';
import SolucionesPageClient from '../../../servicios/software-a-medida/software-client';

export const metadata: Metadata = {
  title: 'Custom B2B Software & Cloud Platforms | Autonomek USA',
  description: 'Proprietary enterprise software, custom CRMs, multi-tenant SaaS, and real-time BI dashboards.',
  alternates: {
    canonical: 'https://www.autonomek.com/us/services/custom-software',
    languages: {
      'en': 'https://www.autonomek.com/en/services/custom-software',
      'en-US': 'https://www.autonomek.com/us/services/custom-software',
      'es': 'https://www.autonomek.com/es/servicios/software-a-medida',
      'es-CO': 'https://www.autonomek.com/servicios/software-a-medida',
      'x-default': 'https://www.autonomek.com/servicios/software-a-medida',
    },
  },
};

export default function CustomSoftwarePageUS() {
  return <SolucionesPageClient locale="en" />;
}
