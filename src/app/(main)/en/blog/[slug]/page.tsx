import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/data/blog';
import ArticleClient from '../../../blog/[slug]/article-client';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slugEn,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slugEn === slug || p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.titleEn} | Autonomek`,
    description: post.descriptionEn,
    alternates: {
      canonical: `https://autonomek.com/en/blog/${post.slugEn}`,
      languages: {
        'es': `https://autonomek.com/blog/${post.slug}`,
        'es-CO': `https://autonomek.com/blog/${post.slug}`,
        'es-MX': `https://autonomek.com/blog/${post.slug}`,
        'es-ES': `https://autonomek.com/blog/${post.slug}`,
        'en': `https://autonomek.com/en/blog/${post.slugEn}`,
        'en-US': `https://autonomek.com/en/blog/${post.slugEn}`,
        'x-default': `https://autonomek.com/blog/${post.slug}`,
      },
    },
    openGraph: {
      title: post.titleEn,
      description: post.descriptionEn,
      type: 'article',
      publishedTime: post.date,
      authors: ['Jhonatan González'],
      url: `https://autonomek.com/en/blog/${post.slugEn}`,
    },
  };
}

export default async function EnArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slugEn === slug || p.slug === slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://autonomek.com/en',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://autonomek.com/en/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.titleEn,
            item: `https://autonomek.com/en/blog/${post.slugEn}`,
          },
        ],
      },
      {
        '@type': 'TechArticle',
        headline: post.titleEn,
        description: post.descriptionEn,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: 'en',
        author: {
          '@type': 'Person',
          '@id': 'https://autonomek.com/#founder',
          name: 'Jhonatan González',
          url: 'https://autonomek.com/en/about',
        },
        publisher: {
          '@type': 'Organization',
          '@id': 'https://autonomek.com/#organization',
          name: 'Autonomek',
          url: 'https://autonomek.com',
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://autonomek.com/en/blog/${post.slugEn}`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleClient post={post} isEn={true} basePrefix="/en" />
    </>
  );
}
