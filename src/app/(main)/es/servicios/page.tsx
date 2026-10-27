import type { Metadata } from 'next';
import ServiciosClient from '../../servicios/servicios-client';

export const metadata: Metadata = {
  title: 'Servicios de Ingeniería IA, Automatización y Software B2B | Autonomek',
  description: 'Conoce nuestros pilares de ingeniería B2B: Agentes de IA 24/7 en WhatsApp, Automatización de Procesos (n8n/APIs), Software a Medida y Desarrollo Web SEO.',
  alternates: {
    canonical: 'https://www.autonomek.com/es/servicios',
    languages: {
      'es': 'https://www.autonomek.com/es/servicios',
      'es-ES': 'https://www.autonomek.com/es/servicios',
      'es-CO': 'https://www.autonomek.com/servicios',
      'en': 'https://www.autonomek.com/en/services',
      'en-US': 'https://www.autonomek.com/us/services',
      'x-default': 'https://www.autonomek.com/servicios',
    },
  },
};

export default function EsServiciosPage() {
  return <ServiciosClient locale="es" />;
}

