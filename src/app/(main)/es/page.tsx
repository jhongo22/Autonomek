import type { Metadata } from 'next';
import HomeClient from '../home-client';

export const metadata: Metadata = {
  title: 'Autonomek | Webs que Venden, Vendedor IA en WhatsApp y Automatización B2B',
  description: 'Plataformas web que lideran Google y ChatGPT, agentes de ventas 24/7 en WhatsApp y automatización de procesos comerciales para España y Latinoamérica.',
  alternates: {
    canonical: 'https://www.autonomek.com/es',
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
  return <HomeClient region="es" />;
}
