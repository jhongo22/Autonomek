import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/data/blog';
import { buildSocialMetadata } from '@/lib/seo-metadata';
import ArticleClient from './article-client';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Autonomek`,
    description: post.description,
    alternates: {
      canonical: `https://autonomek.com/blog/${post.slug}`,
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
    ...buildSocialMetadata({
      title: post.title,
      description: post.description,
      url: `https://autonomek.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Jhonatan González'],
    }),
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
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
            name: 'Inicio',
            item: 'https://autonomek.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://autonomek.com/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: `https://autonomek.com/blog/${post.slug}`,
          },
        ],
      },
      {
        '@type': 'TechArticle',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: 'es',
        author: {
          '@type': 'Person',
          '@id': 'https://autonomek.com/#founder',
          name: 'Jhonatan González',
          url: 'https://autonomek.com/nosotros',
        },
        publisher: {
          '@type': 'Organization',
          '@id': 'https://autonomek.com/#organization',
          name: 'Autonomek',
          url: 'https://autonomek.com',
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://autonomek.com/blog/${post.slug}`,
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
      <ArticleClient post={post} isEn={false} basePrefix="" />
    </>
  );
}

