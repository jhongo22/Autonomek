import type { Metadata } from 'next';
import StartPage from '../../start/page';

export const metadata: Metadata = {
  title: 'Direct WhatsApp Advisory | Autonomek',
  description: 'Connect directly with a Senior Systems Architect at Autonomek via WhatsApp.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function EnStartPage() {
  return <StartPage />;
}

