import type { Metadata } from 'next';
import NosotrosClient from '../../nosotros/nosotros-client';

export const metadata: Metadata = {
  title: 'About Us | Autonomek — Software, Web & AI Engineering',
  description: 'Meet the engineering team behind Autonomek. We build custom software, 0.6s websites, and WhatsApp AI agents with 100% code ownership and fixed pricing.',
  alternates: {
    canonical: 'https://www.autonomek.com/us/about',
    languages: {
      'en': 'https://www.autonomek.com/en/about',
      'en-US': 'https://www.autonomek.com/us/about',
      'es': 'https://www.autonomek.com/es/nosotros',
      'es-CO': 'https://www.autonomek.com/nosotros',
      'x-default': 'https://www.autonomek.com/us/about',
    },
  },
};

export default function UsAboutPage() {
  return <NosotrosClient isEn={true} basePrefix="/us" />;
}

