import type { Metadata } from 'next';
import LegalPage from '../../legal/page';

export const metadata: Metadata = {
  title: 'Aviso Legal, Privacidad y Cookies | Autonomek',
  description: 'Términos legales, política de privacidad y uso de cookies de Autonomek Web & IA.',
  alternates: {
    canonical: 'https://www.autonomek.com/es/legal',
    languages: {
      'es': 'https://www.autonomek.com/es/legal',
      'es-ES': 'https://www.autonomek.com/es/legal',
      'es-CO': 'https://www.autonomek.com/legal',
      'en': 'https://www.autonomek.com/en/legal',
      'en-US': 'https://www.autonomek.com/us/legal',
      'x-default': 'https://www.autonomek.com/legal',
    },
  },
};

export default function EsLegalPage() {
  return <LegalPage />;
}

