import type { Metadata } from 'next';
import LegalPage from '../../us/legal/page';

export const metadata: Metadata = {
  title: 'Legal Notice, Privacy & Cookies | Autonomek',
  description: 'Legal terms, privacy policy, and cookie usage of Autonomek Web & AI.',
  alternates: {
    canonical: 'https://www.autonomek.com/en/legal',
    languages: {
      'en': 'https://www.autonomek.com/en/legal',
      'en-US': 'https://www.autonomek.com/us/legal',
      'es': 'https://www.autonomek.com/es/legal',
      'es-CO': 'https://www.autonomek.com/legal',
      'x-default': 'https://www.autonomek.com/legal',
    },
  },
};

export default function EnLegalPage() {
  return <LegalPage />;
}

