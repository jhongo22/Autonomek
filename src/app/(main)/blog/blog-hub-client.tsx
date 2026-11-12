'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Clock,
  ArrowUpRight,
  Search,
} from 'lucide-react';
import { BLOG_POSTS } from '@/data/blog';

interface BlogHubClientProps {
  isEn?: boolean;
  basePrefix?: string;
}

export default function BlogHubClient({ isEn = false, basePrefix = '' }: BlogHubClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const homeHref = basePrefix || '/';
  const blogBaseHref = `${basePrefix}/blog`;

  /* Categories: strict Spanish sentence case & NO emojis */
  const categories = isEn
    ? [
        { id: 'all', label: 'All articles' },
        { id: 'ia', label: 'Artificial intelligence' },
        { id: 'web', label: 'Web engineering' },
        { id: 'software', label: 'Custom software' },
        { id: 'automatizacion', label: 'Automation' },
      ]
    : [
        { id: 'all', label: 'Todos los artículos' },
        { id: 'ia', label: 'Inteligencia artificial' },
        { id: 'web', label: 'Ingeniería web' },
        { id: 'software', label: 'Software a medida' },
        { id: 'automatizacion', label: 'Automatización' },
      ];

  const sortedPosts = useMemo(() => {
    return [...BLOG_POSTS].sort(
      (a, b) => new Date(b.date + 'T12:00:00Z').getTime() - new Date(a.date + 'T12:00:00Z').getTime()
    );
  }, []);

  const filteredPosts = useMemo(() => {
    return sortedPosts.filter((post) => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const title = isEn ? post.titleEn : post.title;
      const desc = isEn ? post.descriptionEn : post.description;
      const matchesQuery =
        searchQuery.trim() === '' ||
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [sortedPosts, selectedCategory, searchQuery, isEn]);

  const featuredPost = filteredPosts[0];
  const remainingPosts = selectedCategory === 'all' && searchQuery.trim() === ''
    ? filteredPosts.slice(1)
    : filteredPosts;

  const whatsappDirectUrl = isEn
    ? 'https://wa.me/573010147443?text=Hello%20Autonomek%2C%20I%20read%20your%20blog%20and%20would%20like%20to%20consult%20on%20a%20project.'
    : 'https://wa.me/573010147443?text=Hola%20Autonomek%2C%20le%C3%AD%20sus%20art%C3%ADculos%20y%20quiero%20consultar%20sobre%20un%20proyecto.';

  return (
    <main className="min-h-screen w-full bg-background text-foreground pt-28 md:pt-36 pb-24 selection:bg-primary selection:text-primary-ink">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* ================================================================== */}
        {/* 1. CLEAN HEADER                                                    */}
        {/* ================================================================== */}
        <header className="max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-2 text-xs font-mono text-muted">
            <Link href={homeHref} className="hover:text-foreground transition-colors">
              {isEn ? 'Home' : 'Inicio'}
            </Link>
            <span className="text-rule">/</span>
            <span className="text-primary font-medium">Blog</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-foreground leading-[1.1]">
            {isEn ? (
              <>
                Articles and guides on software,{' '}
                <span className="text-muted font-normal">AI agents, and automation.</span>
              </>
            ) : (
              <>
                Artículos y guías sobre software,{' '}
                <span className="text-muted font-normal">agentes de IA y automatización.</span>
              </>
            )}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            {isEn ? (
              <>
                Practical analyses written by our team on{' '}
                <Link
                  href={`${basePrefix}/services/ai-agents`}
                  className="text-foreground underline decoration-primary/60 hover:decoration-primary underline-offset-4"
                >
                  WhatsApp AI agents
                </Link>
                ,{' '}
                <Link
                  href={`${basePrefix}/services/high-performance-websites`}
                  className="text-foreground underline decoration-primary/60 hover:decoration-primary underline-offset-4"
                >
                  fast Next.js websites
                </Link>{' '}
                and{' '}
                <Link
                  href={`${basePrefix}/services/custom-software`}
                  className="text-foreground underline decoration-primary/60 hover:decoration-primary underline-offset-4"
                >
                  custom software
                </Link>
                .
              </>
            ) : (
              <>
                Análisis prácticos escritos por nuestro equipo sobre{' '}
                <Link
                  href={`${basePrefix}/servicios/agentes-inteligencia-artificial`}
                  className="text-foreground underline decoration-primary/60 hover:decoration-primary underline-offset-4"
                >
                  agentes de IA en WhatsApp
                </Link>
                ,{' '}
                <Link
                  href={`${basePrefix}/servicios/paginas-web-alto-rendimiento`}
                  className="text-foreground underline decoration-primary/60 hover:decoration-primary underline-offset-4"
                >
                  sitios web rápidos
                </Link>{' '}
                y{' '}
                <Link
                  href={`${basePrefix}/servicios/software-a-medida`}
                  className="text-foreground underline decoration-primary/60 hover:decoration-primary underline-offset-4"
                >
                  software a medida
                </Link>
                .
              </>
            )}
          </p>
        </header>

        {/* ================================================================== */}
        {/* 2. SIMPLE FILTER & SEARCH BAR (No emojis, sentence case)           */}
        {/* ================================================================== */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-y border-rule py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                    active
                      ? 'bg-primary text-primary-ink font-semibold'
                      : 'text-muted hover:text-foreground hover:bg-surface'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-64 min-w-0">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isEn ? 'Search articles…' : 'Buscar artículos…'}
              className="w-full rounded-lg border border-rule bg-surface pl-9 pr-3.5 py-1.5 text-xs sm:text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* ================================================================== */}
        {/* 3. FEATURED ARTICLE (Only when showing 'all' without search)       */}
        {/* ================================================================== */}
        {selectedCategory === 'all' && searchQuery.trim() === '' && featuredPost && (
          <section className="py-10 border-b border-rule">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="min-w-0 lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted">
                  <span className="text-primary font-semibold">
                    {isEn ? 'Featured article' : 'Artículo destacado'}
                  </span>
                  <span className="text-rule">·</span>
                  <span className="tabular-nums">
                    {new Date(featuredPost.date + 'T00:00:00Z').toLocaleDateString(isEn ? 'en-US' : 'es-CO', {
                      timeZone: 'UTC',
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="text-rule">·</span>
                  <span>{isEn ? featuredPost.categoryLabelEn : featuredPost.categoryLabel}</span>
                  <span className="text-rule">·</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{isEn ? featuredPost.readTimeEn : featuredPost.readTime}</span>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-snug">
                  <Link
                    href={`${blogBaseHref}/${featuredPost.slug}`}
                    className="hover:text-primary underline decoration-rule hover:decoration-primary underline-offset-4 transition-colors"
                  >
                    {isEn ? featuredPost.titleEn : featuredPost.title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  {isEn ? featuredPost.summaryEn : featuredPost.summary}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-6">
                  <Link
                    href={`${blogBaseHref}/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline decoration-primary/60 hover:decoration-primary underline-offset-4"
                  >
                    <span>{isEn ? 'Read complete article' : 'Leer artículo completo'}</span>
                    <ArrowUpRight size={15} />
                  </Link>

                  {featuredPost.sections[0]?.linkedService && (
                    <Link
                      href={
                        isEn
                          ? `${basePrefix}${featuredPost.sections[0].linkedService.hrefEn}`
                          : `${basePrefix}${featuredPost.sections[0].linkedService.href}`
                      }
                      className="text-xs sm:text-sm text-muted hover:text-foreground underline decoration-rule hover:decoration-primary underline-offset-4"
                    >
                      {isEn
                        ? featuredPost.sections[0].linkedService.labelEn
                        : featuredPost.sections[0].linkedService.label}
                    </Link>
                  )}
                </div>
              </div>

              {/* Clean Metric & Topics Box on the right */}
              <div className="min-w-0 lg:col-span-4 rounded-2xl border border-rule bg-surface p-6 space-y-4">
                <div>
                  <span className="text-3xl sm:text-4xl font-semibold font-mono text-primary tabular-nums">
                    {featuredPost.heroMetric.value}
                  </span>
                  <p className="mt-1 text-xs sm:text-sm text-foreground font-medium">
                    {isEn ? featuredPost.heroMetric.labelEn : featuredPost.heroMetric.label}
                  </p>
                </div>

                <div className="pt-3 border-t border-rule space-y-2">
                  <p className="text-xs font-mono text-subtle">
                    {isEn ? 'Inside this guide:' : 'En esta guía:'}
                  </p>
                  <ul className="space-y-1.5">
                    {featuredPost.tableOfContents.slice(0, 3).map((toc) => (
                      <li key={toc.id}>
                        <Link
                          href={`${blogBaseHref}/${featuredPost.slug}#${toc.id}`}
                          className="text-xs text-muted hover:text-foreground underline decoration-rule hover:decoration-primary underline-offset-4 line-clamp-1"
                        >
                          {isEn ? toc.titleEn : toc.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* 4. EDITORIAL LIST OF ARTICLES (Clean, Structured, Easy to Scan)    */}
        {/* ================================================================== */}
        <section className="divide-y divide-rule border-b border-rule">
          {remainingPosts.map((post) => {
            const title = isEn ? post.titleEn : post.title;
            const description = isEn ? post.descriptionEn : post.description;
            const categoryLabel = isEn ? post.categoryLabelEn : post.categoryLabel;
            const readTime = isEn ? post.readTimeEn : post.readTime;
            const articleHref = `${blogBaseHref}/${post.slug}`;
            const serviceLink = post.sections[0]?.linkedService;

            return (
              <article
                key={post.slug}
                className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
              >
                {/* Left Column: Date, Category & Read Time */}
                <div className="min-w-0 md:col-span-3 space-y-1 text-xs font-mono text-muted">
                  <p className="text-primary font-medium">{categoryLabel}</p>
                  <p className="tabular-nums">
                    {new Date(post.date + 'T00:00:00Z').toLocaleDateString(isEn ? 'en-US' : 'es-CO', {
                      timeZone: 'UTC',
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                  <p className="flex items-center gap-1 text-subtle pt-0.5">
                    <Clock size={12} />
                    <span>{readTime}</span>
                  </p>
                </div>

                {/* Middle Column: Title, Description & Underlined Links */}
                <div className="min-w-0 md:col-span-7 space-y-3">
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground leading-snug">
                    <Link
                      href={articleHref}
                      className="hover:text-primary underline decoration-rule hover:decoration-primary underline-offset-4 transition-colors"
                    >
                      {title}
                    </Link>
                  </h2>

                  <p className="text-sm sm:text-base text-muted leading-relaxed">
                    {description}
                  </p>

                  <div className="pt-1 flex flex-wrap items-center gap-5 text-xs sm:text-sm">
                    <Link
                      href={articleHref}
                      className="inline-flex items-center gap-1 font-semibold text-primary underline decoration-primary/60 hover:decoration-primary underline-offset-4"
                    >
                      <span>{isEn ? 'Read article' : 'Leer artículo'}</span>
                      <ArrowUpRight size={14} />
                    </Link>

                    {serviceLink && (
                      <Link
                        href={
                          isEn
                            ? `${basePrefix}${serviceLink.hrefEn}`
                            : `${basePrefix}${serviceLink.href}`
                        }
                        className="text-muted hover:text-foreground underline decoration-rule hover:decoration-primary underline-offset-4"
                      >
                        {isEn ? serviceLink.labelEn : serviceLink.label}
                      </Link>
                    )}
                  </div>
                </div>

                {/* Right Column: Key Metric */}
                <div className="min-w-0 md:col-span-2 md:text-right pt-2 md:pt-0">
                  <span className="inline-block font-mono text-lg sm:text-xl font-semibold text-foreground tabular-nums">
                    {post.heroMetric.value}
                  </span>
                  <p className="text-[11px] text-muted leading-snug">
                    {isEn ? post.heroMetric.deltaEn : post.heroMetric.delta}
                  </p>
                </div>
              </article>
            );
          })}
        </section>

        {filteredPosts.length === 0 && (
          <div className="py-16 text-center text-muted text-sm">
            {isEn
              ? 'No articles found matching your search.'
              : 'No se encontraron artículos con ese criterio de búsqueda.'}
          </div>
        )}

        {/* ================================================================== */}
        {/* 5. SIMPLE CLOSING CTA                                              */}
        {/* ================================================================== */}
        <section className="mt-16 rounded-2xl border border-rule bg-surface p-7 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
              {isEn
                ? 'Want to apply these solutions in your business?'
                : '¿Quieres implementar estas soluciones en tu empresa?'}
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              {isEn
                ? 'Write to us on WhatsApp and receive a free initial diagnosis tailored to your operation.'
                : 'Escríbenos por WhatsApp y recibe un diagnóstico inicial gratuito adaptado a tu operación.'}
            </p>
          </div>
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary text-primary-ink px-6 py-3 text-sm font-semibold hover:opacity-90 transition shrink-0"
          >
            {isEn ? 'Talk on WhatsApp — Free' : 'Hablar por WhatsApp — Gratis'}
          </a>
        </section>
      </div>
    </main>
  );
}
