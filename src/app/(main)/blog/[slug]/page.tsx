import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/data/blog';
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
      canonical: `https://www.autonomek.com/blog/${slug}`,
      languages: {
        'es': `https://www.autonomek.com/es/blog/${slug}`,
        'es-CO': `https://www.autonomek.com/blog/${slug}`,
        'en': `https://www.autonomek.com/en/blog/${slug}`,
        'en-US': `https://www.autonomek.com/us/blog/${slug}`,
        'x-default': `https://www.autonomek.com/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Autonomek Engineering'],
      url: `https://www.autonomek.com/blog/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Autonomek',
      url: 'https://www.autonomek.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Autonomek',
      url: 'https://www.autonomek.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.autonomek.com/blog/${slug}`,
    },
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

