import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/data/blog';
import ArticleClient from '../../../blog/[slug]/article-client';

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
    title: `${post.titleEn} | Autonomek`,
    description: post.descriptionEn,
    alternates: {
      canonical: `https://www.autonomek.com/us/blog/${slug}`,
      languages: {
        'en': `https://www.autonomek.com/en/blog/${slug}`,
        'en-US': `https://www.autonomek.com/us/blog/${slug}`,
        'es': `https://www.autonomek.com/es/blog/${slug}`,
        'es-CO': `https://www.autonomek.com/blog/${slug}`,
        'x-default': `https://www.autonomek.com/us/blog/${slug}`,
      },
    },
  };
}

export default async function UsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return <ArticleClient post={post} isEn={true} basePrefix="/us" />;
}
