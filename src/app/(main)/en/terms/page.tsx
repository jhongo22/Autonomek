import type { Metadata } from 'next';
import { buildSocialMetadata } from '@/lib/seo-metadata';
import TerminosClient from '../../terminos/terminos-client';

export const metadata: Metadata = {
  title: 'Terms & Conditions of Service | Autonomek',
  description: 'Commercial framework, intellectual property transfer, warranty, and technical policies of Autonomek.',
  alternates: {
    canonical: 'https://autonomek.com/en/terms',
    languages: {
      'en': 'https://autonomek.com/en/terms',
      'en-US': 'https://autonomek.com/en/terms',
      'es': 'https://autonomek.com/terminos',
      'es-CO': 'https://autonomek.com/terminos',
      'es-MX': 'https://autonomek.com/terminos',
      'es-ES': 'https://autonomek.com/terminos',
      'x-default': 'https://autonomek.com/terminos',
    },
  },
  ...buildSocialMetadata({
    title: 'Terms & Conditions of Service | Autonomek',
    description: 'Commercial framework, intellectual property transfer, warranty, and technical policies of Autonomek.',
    url: 'https://autonomek.com/en/terms',
    locale: 'en_US',
  }),
};

export default function EnTermsPage() {
  return <TerminosClient isEn={true} basePrefix="/en" />;
}

