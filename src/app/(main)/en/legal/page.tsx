import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal Notice, Privacy & Cookies | Autonomek',
  description: 'Legal terms, privacy policy, and cookie usage of Autonomek Web & AI.',
  alternates: {
    canonical: 'https://autonomek.com/en/legal',
    languages: {
      'en': 'https://autonomek.com/en/legal',
      'en-US': 'https://autonomek.com/en/legal',
      'es': 'https://autonomek.com/legal',
      'es-CO': 'https://autonomek.com/legal',
      'es-MX': 'https://autonomek.com/legal',
      'es-ES': 'https://autonomek.com/legal',
      'x-default': 'https://autonomek.com/legal',
    },
  },
};

export default function EnLegalPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 md:py-32">
      <div className="mb-10">
        <Link
          href="/en"
          className="text-sm font-medium text-primary underline decoration-primary/70 underline-offset-4 hover:opacity-80"
        >
          ← Back to Autonomek Home
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Legal Notice, Privacy &amp; Cookies
        </h1>
        <p className="mt-3 text-base text-muted">
          Official governance, data handling, and service terms for Autonomek Web &amp; AI.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Link
          href="/en/terms"
          className="rounded-xl border border-rule bg-surface p-6 transition-colors hover:border-primary"
        >
          <h2 className="text-lg font-semibold text-foreground underline decoration-primary/70 underline-offset-4">
            Terms of Service
          </h2>
          <p className="mt-2 text-sm text-muted">
            Contractual conditions for custom web platforms, process automation, and AI systems.
          </p>
        </Link>

        <Link
          href="/en/privacy"
          className="rounded-xl border border-rule bg-surface p-6 transition-colors hover:border-primary"
        >
          <h2 className="text-lg font-semibold text-foreground underline decoration-primary/70 underline-offset-4">
            Privacy Policy
          </h2>
          <p className="mt-2 text-sm text-muted">
            How we collect, protect, and process business inquiry data and telemetry.
          </p>
        </Link>
      </div>

      <p className="mt-10 text-sm text-muted">
        Need direct information about our engineering team and compliance standards? Visit{' '}
        <Link
          href="/en/about"
          className="text-primary underline decoration-primary/70 underline-offset-4 hover:opacity-80"
        >
          About Autonomek
        </Link>
        .
      </p>
    </main>
  );
}

