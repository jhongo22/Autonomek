import type { Metadata } from 'next';
import HomeClient from '../home-client';

export const metadata: Metadata = {
  title: 'Autonomek Español | Agentes de IA, Automatización B2B y Desarrollo Web',
  description: 'Firma de ingeniería en Inteligencia Artificial B2B, automatización de procesos comerciales y desarrollo web de alta velocidad para España y Latinoamérica.',
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
