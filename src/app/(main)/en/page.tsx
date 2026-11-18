import type { Metadata } from 'next';
import HomeClient from '../home-client';

export const metadata: Metadata = {
  title: 'Autonomek | Custom Software, WhatsApp AI Agents & B2B Web',
  description: 'Enterprise custom software ($0 seat fees), 24/7 WhatsApp AI sales agents, n8n workflow automation, and 0.6s Next.js websites built to rank on Google & AI.',
  alternates: {
    canonical: 'https://autonomek.com/en',
    languages: {
      'es': 'https://autonomek.com',
      'es-CO': 'https://autonomek.com',
      'es-MX': 'https://autonomek.com',
      'es-ES': 'https://autonomek.com',
      'en': 'https://autonomek.com/en',
      'en-US': 'https://autonomek.com/en',
      'x-default': 'https://autonomek.com',
    },
  },
  openGraph: {
    title: 'Autonomek | Custom Software, WhatsApp AI Agents & B2B Web',
    description: 'Autonomous AI sales infrastructure, custom B2B software ($0 per-seat fees), n8n automation, and 0.6s Next.js websites.',
    url: 'https://autonomek.com/en',
    locale: 'en_US',
    type: 'website',
  },
};

const enHomeFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://autonomek.com/en#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What solutions does Autonomek engineer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Autonomek builds four core solutions: 24/7 WhatsApp AI sales and booking agents on Meta Cloud API, sub-second Next.js websites engineered for Google SEO and AI citations (GEO), custom enterprise software with $0 per-user fees, and n8n/API workflow automation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the 24/7 WhatsApp AI agent avoid hallucinating prices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every agent runs on Retrieval-Augmented Generation (RAG) connected to your verified catalog, stock, and pricing rules, transcribing voice notes and validating payment screenshots while booking straight into Google Calendar or your CRM.',
      },
    },
  ],
};

export default function EnHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enHomeFaqJsonLd) }}
      />
      <HomeClient region="en" />
    </>
  );
}

