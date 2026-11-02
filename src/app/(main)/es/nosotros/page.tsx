import type { Metadata } from 'next';
import NosotrosClient from '../../nosotros/nosotros-client';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Autonomek — Ingeniería de Software, Web e IA',
  description: 'Conoce al equipo detrás de Autonomek. Desarrollamos software a medida, sitios web ultrarrápidos y agentes de IA en WhatsApp con código 100% propiedad de tu empresa.',
  alternates: {
    canonical: 'https://www.autonomek.com/es/nosotros',
    languages: {
      'es': 'https://www.autonomek.com/es/nosotros',
      'es-CO': 'https://www.autonomek.com/nosotros',
      'en': 'https://www.autonomek.com/en/about',
      'en-US': 'https://www.autonomek.com/us/about',
      'x-default': 'https://www.autonomek.com/nosotros',
    },
  },
};

export default function EsNosotrosPage() {
  return <NosotrosClient isEn={false} basePrefix="/es" />;
}
