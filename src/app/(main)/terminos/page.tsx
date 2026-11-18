import type { Metadata } from 'next';
import TerminosClient from './terminos-client';

export const metadata: Metadata = {
  title: 'Términos y Condiciones de Servicio | Autonomek',
  description: 'Marco contractual, propiedad intelectual del código fuente, condiciones de pago, garantías y políticas de Autonomek.',
  alternates: {
    canonical: 'https://autonomek.com/terminos',
    languages: {
      'es': 'https://autonomek.com/terminos',
      'es-CO': 'https://autonomek.com/terminos',
      'es-MX': 'https://autonomek.com/terminos',
      'es-ES': 'https://autonomek.com/terminos',
      'en': 'https://autonomek.com/en/terms',
      'en-US': 'https://autonomek.com/en/terms',
      'x-default': 'https://autonomek.com/terminos',
    },
  },
};

export default function TerminosPage() {
  return <TerminosClient isEn={false} basePrefix="" />;
}

