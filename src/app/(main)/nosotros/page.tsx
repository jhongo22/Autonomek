import type { Metadata } from 'next';
import NosotrosClient from './nosotros-client';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Autonomek — Ingeniería de Software, Web e IA',
  description: 'Conoce al equipo detrás de Autonomek. Desarrollamos software a medida, sitios web ultrarrápidos y agentes de IA en WhatsApp con código 100% propiedad de tu empresa.',
  alternates: {
    canonical: 'https://autonomek.com/nosotros',
    languages: {
      'es': 'https://autonomek.com/nosotros',
      'es-CO': 'https://autonomek.com/nosotros',
      'es-MX': 'https://autonomek.com/nosotros',
      'es-ES': 'https://autonomek.com/nosotros',
      'en': 'https://autonomek.com/en/about',
      'en-US': 'https://autonomek.com/en/about',
      'x-default': 'https://autonomek.com/nosotros',
    },
  },
};

export default function NosotrosPage() {
  return <NosotrosClient isEn={false} basePrefix="" />;
}

