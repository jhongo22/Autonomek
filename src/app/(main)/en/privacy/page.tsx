import type { Metadata } from 'next';
import PrivacidadClient from '../../privacidad/privacidad-client';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Protection | Autonomek',
  description: 'Data protection policies, GDPR & international compliance, encrypted storage, and zero AI public training guarantee by Autonomek.',
  alternates: {
    canonical: 'https://www.autonomek.com/en/privacy',
    languages: {
      'en': 'https://www.autonomek.com/en/privacy',
      'en-US': 'https://www.autonomek.com/us/privacy',
      'es': 'https://www.autonomek.com/es/privacidad',
      'es-CO': 'https://www.autonomek.com/privacidad',
      'x-default': 'https://www.autonomek.com/en/privacy',
    },
  },
};

export default function EnPrivacyPage() {
  return <PrivacidadClient isEn={true} basePrefix="/en" />;
}

