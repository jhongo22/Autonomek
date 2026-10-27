import type { Metadata } from 'next';
import StartPage from '../../start/page';

export const metadata: Metadata = {
  title: 'Consultoría Directa por WhatsApp | Autonomek',
  description: 'Conecta directamente con un Arquitecto de Sistemas de Autonomek vía WhatsApp.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function EsStartPage() {
  return <StartPage />;
}

