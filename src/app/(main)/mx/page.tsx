import type { Metadata } from 'next';
import HomeClient from '../home-client';

export const metadata: Metadata = {
  title: 'Autonomek México | Automatización de Procesos B2B y Desarrollo Web',
  description: 'Sistemas autónomos de ventas por WhatsApp, desarrollo web ultrarrápido e integración de flujos comerciales con IA para empresas en México.',
  alternates: {
    canonical: 'https://www.autonomek.com/mx',
    languages: {
      'es': 'https://www.autonomek.com/es',
      'es-ES': 'https://www.autonomek.com/es',
      'es-CO': 'https://www.autonomek.com',
      'es-MX': 'https://www.autonomek.com/mx',
      'en': 'https://www.autonomek.com/en',
      'en-US': 'https://www.autonomek.com/us',
      'x-default': 'https://www.autonomek.com',
    },
  },
};

export default function Page() {
  return <HomeClient region="mx" />;
}
