import type { Metadata } from 'next';
import ProyectosClient from '../../proyectos/proyectos-client';

export const metadata: Metadata = {
  title: 'Portafolio y Casos de Éxito B2B | Autonomek',
  description: 'Explora nuestros sistemas desplegados en producción: agentes de IA conversacionales, automatizaciones empresariales, software a medida y plataformas web.',
  alternates: {
    canonical: 'https://www.autonomek.com/es/proyectos',
    languages: {
      'es': 'https://www.autonomek.com/es/proyectos',
      'es-ES': 'https://www.autonomek.com/es/proyectos',
      'es-CO': 'https://www.autonomek.com/proyectos',
      'en': 'https://www.autonomek.com/en/projects',
      'en-US': 'https://www.autonomek.com/us/projects',
      'x-default': 'https://www.autonomek.com/proyectos',
    },
  },
};

export default function EsProyectosPage() {
  return <ProyectosClient locale="es" />;
}

