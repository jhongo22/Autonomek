import type { Metadata } from 'next';
import { buildSocialMetadata } from '@/lib/seo-metadata';
import PrivacidadClient from '../../privacidad/privacidad-client';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Protection | Autonomek',
  description: 'Data protection policies, GDPR & international compliance, encrypted storage, and zero AI public training guarantee by Autonomek.',
  alternates: {
    canonical: 'https://autonomek.com/en/privacy',
    languages: {
      'en': 'https://autonomek.com/en/privacy',
      'en-US': 'https://autonomek.com/en/privacy',
      'es': 'https://autonomek.com/privacidad',
      'es-CO': 'https://autonomek.com/privacidad',
      'es-MX': 'https://autonomek.com/privacidad',
      'es-ES': 'https://autonomek.com/privacidad',
      'x-default': 'https://autonomek.com/privacidad',
    },
  },
  ...buildSocialMetadata({
    title: 'Privacy Policy & Data Protection | Autonomek',
    description: 'Data protection policies, GDPR & international compliance, encrypted storage, and zero AI public training guarantee by Autonomek.',
    url: 'https://autonomek.com/en/privacy',
    locale: 'en_US',
  }),
};

export default function EnPrivacyPage() {
  return <PrivacidadClient isEn={true} basePrefix="/en" />;
}

