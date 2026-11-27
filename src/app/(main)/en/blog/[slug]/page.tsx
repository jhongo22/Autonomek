import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/data/blog';
import { buildSocialMetadata } from '@/lib/seo-metadata';
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
    title: `${post.seoTitleEn} | Autonomek`,
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
    ...buildSocialMetadata({
      title: post.seoTitleEn,
      description: post.descriptionEn,
      url: `https://autonomek.com/en/blog/${post.slugEn}`,
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: ['Jhonatan González'],
    }),
  };
}

export default async function EnArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slugEn === slug || p.slug === slug);
  if (!post) notFound();

  const faqSchema =
    post.faq && post.faq.length > 0
      ? [
          {
            '@type': 'FAQPage',
            '@id': `https://autonomek.com/en/blog/${post.slugEn}#faq`,
            mainEntity: post.faq.map((item) => ({
              '@type': 'Question',
              name: item.qEn,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.aEn,
              },
            })),
          },
        ]
      : [];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        name: post.seoTitleEn,
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
            name: post.seoTitleEn,
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
        articleSection: post.categoryLabelEn,
        keywords: post.stackTags.join(', '),
        image: {
          '@type': 'ImageObject',
          url: 'https://autonomek.com/logo.png',
          width: 1200,
          height: 401,
        },
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
          logo: {
            '@type': 'ImageObject',
            url: 'https://autonomek.com/logo.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://autonomek.com/en/blog/${post.slugEn}`,
        },
      },
      ...faqSchema,
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
