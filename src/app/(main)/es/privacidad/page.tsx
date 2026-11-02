import type { Metadata } from 'next';
import PrivacidadClient from '../../privacidad/privacidad-client';

export const metadata: Metadata = {
  title: 'Política de Privacidad y Tratamiento de Datos | Autonomek',
  description: 'Tratamiento de datos personales bajo la Ley 1581 de 2012 (Habeas Data) y RGPD. Cero venta de datos y protección en agentes de IA de Autonomek.',
  alternates: {
    canonical: 'https://www.autonomek.com/es/privacidad',
    languages: {
      'es': 'https://www.autonomek.com/es/privacidad',
      'es-CO': 'https://www.autonomek.com/privacidad',
      'en': 'https://www.autonomek.com/en/privacy',
      'en-US': 'https://www.autonomek.com/us/privacy',
      'x-default': 'https://www.autonomek.com/privacidad',
    },
  },
};

export default function EsPrivacidadPage() {
  return <PrivacidadClient isEn={false} basePrefix="/es" />;
}
