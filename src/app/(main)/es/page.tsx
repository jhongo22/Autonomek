import type { Metadata } from 'next';
import HomeClient from '../home-client';

export const metadata: Metadata = {
  title: 'Autonomek España | Agentes de IA y automatización de procesos comerciales',
  description: 'Optimiza la captación y atención de tu empresa con agentes de IA en WhatsApp y desarrollo web de alta conversión. Cero tareas repetitivas.',
  alternates: {
    canonical: 'https://autonomek.com/es',
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
  return <HomeClient region="es" />;
}
