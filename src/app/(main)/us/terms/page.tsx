import type { Metadata } from 'next';
import TerminosClient from '../../terminos/terminos-client';

export const metadata: Metadata = {
  title: 'Terms & Conditions of Service | Autonomek',
  description: 'Commercial framework, intellectual property transfer, warranty, and technical policies of Autonomek.',
  alternates: {
    canonical: 'https://www.autonomek.com/us/terms',
    languages: {
      'en': 'https://www.autonomek.com/en/terms',
      'en-US': 'https://www.autonomek.com/us/terms',
      'es': 'https://www.autonomek.com/es/terminos',
      'es-CO': 'https://www.autonomek.com/terminos',
      'x-default': 'https://www.autonomek.com/us/terms',
    },
  },
};

export default function UsTermsPage() {
  return <TerminosClient isEn={true} basePrefix="/us" />;
}

