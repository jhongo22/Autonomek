import type { Metadata } from 'next';
import { buildSocialMetadata } from '@/lib/seo-metadata';
import NosotrosClient from '../../nosotros/nosotros-client';

export const metadata: Metadata = {
  title: 'About Us | Autonomek — Software, Web & AI Engineering',
  description: 'Meet the engineering team behind Autonomek. We build custom software, 0.6s websites, and WhatsApp AI agents with 100% code ownership and fixed pricing.',
  alternates: {
    canonical: 'https://autonomek.com/en/about',
    languages: {
      'en': 'https://autonomek.com/en/about',
      'en-US': 'https://autonomek.com/en/about',
      'es': 'https://autonomek.com/nosotros',
      'es-CO': 'https://autonomek.com/nosotros',
      'es-MX': 'https://autonomek.com/nosotros',
      'es-ES': 'https://autonomek.com/nosotros',
      'x-default': 'https://autonomek.com/nosotros',
    },
  },
  ...buildSocialMetadata({
    title: 'About Us | Autonomek — Software, Web & AI Engineering',
    description: 'Meet the engineering team behind Autonomek. We build custom software, 0.6s websites, and WhatsApp AI agents with 100% code ownership and fixed pricing.',
    url: 'https://autonomek.com/en/about',
    locale: 'en_US',
  }),
};

export default function EnAboutPage() {
  return <NosotrosClient isEn={true} basePrefix="/en" />;
}

