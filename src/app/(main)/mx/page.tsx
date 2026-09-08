import type { Metadata } from 'next';
import HomeClient from '../home-client';

export const metadata: Metadata = {
  title: 'Autonomek México | Automatización de procesos y desarrollo web',
  description: 'Sistemas autónomos de ventas por WhatsApp, desarrollo web ultrarrápido e integración de flujos comerciales para empresas en México.',
  alternates: {
    canonical: 'https://autonomek.com/mx',
    languages: {
      'es-CO': 'https://autonomek.com',
      'es-MX': 'https://autonomek.com/mx',
      'es-ES': 'https://autonomek.com/es',
      'en-US': 'https://autonomek.com/us',
      'x-default': 'https://autonomek.com',
    },
  },
};

export default function Page() {
  return <HomeClient region="mx" />;
}
