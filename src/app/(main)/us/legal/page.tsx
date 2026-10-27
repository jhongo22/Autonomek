import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal Notice, Privacy & Cookies | Autonomek',
  description: 'Legal terms, privacy policy, and cookie usage of Autonomek Web & AI.',
  alternates: {
    canonical: 'https://www.autonomek.com/us/legal',
    languages: {
      'en': 'https://www.autonomek.com/en/legal',
      'en-US': 'https://www.autonomek.com/us/legal',
      'es': 'https://www.autonomek.com/es/legal',
      'es-CO': 'https://www.autonomek.com/legal',
      'x-default': 'https://www.autonomek.com/en/legal',
    },
  },
};

const sections = [
  {
    id: 'privacy',
    title: 'Privacy policy',
    content: `
      At AUTONOMEK WEB & AI, we treat your personal data with complete transparency and security, complying with the General Data Protection Regulation (GDPR) and applicable international privacy frameworks.

      We collect information such as name, email, and phone number when you contact us through WhatsApp or our live AI assistant. This data is used exclusively to:

      - Respond to your requests for technical information and B2B quotes.
      - Provide our services of web engineering, AI agents, and process automation.
      - Send communications related to your project (billing, SLA support, updates).

      We do not share your personal data with third parties without your explicit consent, except under legal obligation. Your data is stored on secure cloud servers with restricted access.

      You can exercise your rights of access, rectification, cancellation, and opposition by writing to us at contact@autonomek.com.
    `,
  },
  {
    id: 'terms',
    title: 'Terms and conditions',
    content: `
      By contracting the services of AUTONOMEK WEB & AI, you accept the following terms:

      1. Scope of service: Each project is defined in a written technical proposal with agreed scope, deliverables, deadlines, and costs mutually approved before starting.

      2. Intellectual property: Once paid in full, the source code and digital assets developed are the property of the client. AUTONOMEK reserves the right to showcase the architecture in its corporate portfolio.

      3. Payments: A 50% advance payment is required to start projects. The remaining 50% is paid upon delivery. SLA maintenance plans are billed monthly.

      4. Confidentiality: All information shared during the development of the project is kept strictly confidential.

      5. Support: Included technical support covers system defects of the delivered software. It does not include new features outside the initial scope.
    `,
  },
  {
    id: 'cookies',
    title: 'Cookie policy',
    content: `
      This website uses first-party and third-party cookies to improve your browsing experience and analyze traffic.

      Cookies used:

      - Google Analytics (GA4): We use the _ga cookie to analyze how users interact with the site, allowing us to continuously improve performance.

      - Technical cookies: Necessary for basic site operation, language routing, and security.

      You can configure your browser to reject all cookies or indicate when one is sent. By continuing to browse, you accept the use of these cookies.
    `,
  },
];

export default function LegalPage() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground pt-28 md:pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="mb-10">
          <Link href="/en" className="text-sm text-muted hover:text-foreground transition-colors">
            Back to home
          </Link>
        </div>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4 text-foreground">
          Legal framework & privacy
        </h1>
        <p className="text-muted text-base mb-14 max-w-[60ch]">
          Legal notice, privacy policy, and corporate terms of use of Autonomek Web & AI.
        </p>

        <div className="divide-y divide-rule border-y border-rule">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="py-12">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                {section.title}
              </h2>
              <div className="text-muted text-sm sm:text-base leading-relaxed space-y-4">
                {section.content
                  .split('\n')
                  .filter(Boolean)
                  .map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
