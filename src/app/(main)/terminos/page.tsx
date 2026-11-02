import type { Metadata } from 'next';
import TerminosClient from './terminos-client';

export const metadata: Metadata = {
  title: 'Términos y Condiciones de Servicio | Autonomek',
  description: 'Marco contractual, propiedad intelectual del código fuente, condiciones de pago, garantías y políticas de Autonomek.',
  alternates: {
    canonical: 'https://www.autonomek.com/terminos',
    languages: {
      'es': 'https://www.autonomek.com/es/terminos',
      'es-CO': 'https://www.autonomek.com/terminos',
      'en': 'https://www.autonomek.com/en/terms',
      'en-US': 'https://www.autonomek.com/us/terms',
      'x-default': 'https://www.autonomek.com/terminos',
    },
  },
};

export default function TerminosPage() {
  return <TerminosClient isEn={false} basePrefix="" />;
}

