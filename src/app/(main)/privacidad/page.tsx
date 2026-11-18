import type { Metadata } from 'next';
import PrivacidadClient from './privacidad-client';

export const metadata: Metadata = {
  title: 'Política de Privacidad y Tratamiento de Datos | Autonomek',
  description: 'Tratamiento de datos personales bajo la Ley 1581 de 2012 (Habeas Data) y RGPD. Cero venta de datos y protección en agentes de IA de Autonomek.',
  alternates: {
    canonical: 'https://autonomek.com/privacidad',
    languages: {
      'es': 'https://autonomek.com/privacidad',
      'es-CO': 'https://autonomek.com/privacidad',
      'es-MX': 'https://autonomek.com/privacidad',
      'es-ES': 'https://autonomek.com/privacidad',
      'en': 'https://autonomek.com/en/privacy',
      'en-US': 'https://autonomek.com/en/privacy',
      'x-default': 'https://autonomek.com/privacidad',
    },
  },
};

export default function PrivacidadPage() {
  return <PrivacidadClient isEn={false} basePrefix="" />;
}

