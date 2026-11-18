import type { Metadata } from 'next';

const OG_IMAGE = {
  url: 'https://autonomek.com/logo.png',
  width: 1200,
  height: 401,
  alt: 'Autonomek — Ingeniería de Software, Agentes IA y Automatización B2B',
};

export function buildSocialMetadata({
  title,
  description,
  url,
  locale = 'es_CO',
  type = 'website',
  publishedTime,
  authors,
}: {
  title: string;
  description: string;
  url: string;
  locale?: 'es_CO' | 'en_US';
  type?: 'website' | 'article';
  publishedTime?: string;
  authors?: string[];
}): Pick<Metadata, 'openGraph' | 'twitter'> {
  return {
    openGraph: {
      title,
      description,
      url,
      siteName: 'Autonomek',
      locale,
      alternateLocale:
        locale === 'en_US'
          ? ['es_CO', 'es_MX', 'es_ES']
          : ['es_ES', 'es_MX', 'en_US'],
      type,
      images: [OG_IMAGE],
      ...(publishedTime ? { publishedTime } : {}),
      ...(authors ? { authors } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://autonomek.com/logo.png'],
    },
  };
}
