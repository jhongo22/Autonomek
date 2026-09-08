import type { Metadata } from 'next';
import HomeClient from './home-client';

export const metadata: Metadata = {
  title: 'Autonomek: Automatización y desarrollo web en Medellín | Automatización de procesos y posicionamiento Google',
  description: 'Posicionamos tu página web en los primeros resultados de Google y convertimos tus visitas en clientes con automatización de procesos y agentes de IA 24/7.',
  alternates: {
    canonical: 'https://autonomek.com',
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
  return <HomeClient region="co" />;
}
