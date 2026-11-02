'use client';

import React from 'react';
import Link from 'next/link';
import {
  Clock,
  ArrowUpRight,
  ChevronLeft,
  CheckCircle2,
  Check,
  X,
} from 'lucide-react';
import { BLOG_POSTS, BlogPost, InlineLinkSpec } from '@/data/blog';

interface ArticleClientProps {
  post: BlogPost;
  isEn?: boolean;
  basePrefix?: string;
}

/**
 * Injects underlined internal SEO links into paragraph text.
 */
function renderParagraphWithInlineLinks(
  text: string,
  inlineLinks: InlineLinkSpec[] | undefined,
  isEn: boolean,
  basePrefix: string
) {
  if (!inlineLinks || inlineLinks.length === 0) {
    return text;
  }

  for (const spec of inlineLinks) {
    const phrase = isEn ? spec.phraseEn : spec.phrase;
    const rawHref = isEn ? spec.hrefEn : spec.href;
    const href = rawHref.startsWith('/en/')
      ? rawHref
      : `${basePrefix}${rawHref}`;

    const index = text.indexOf(phrase);
    if (index !== -1) {
      const before = text.slice(0, index);
      const match = text.slice(index, index + phrase.length);
      const after = text.slice(index + phrase.length);
      return (
        <>
          {before}
          <Link
            href={href}
            className="text-foreground font-medium underline decoration-primary/70 hover:decoration-primary hover:text-primary underline-offset-4 transition-colors"
          >
            {match}
          </Link>
          {after}
        </>
      );
    }
  }

  return text;
}

export default function ArticleClient({ post, isEn = false, basePrefix = '' }: ArticleClientProps) {
  const homeHref = basePrefix || '/';
  const blogBaseHref = `${basePrefix}/blog`;

  const title = isEn ? post.titleEn : post.title;
  const description = isEn ? post.descriptionEn : post.description;
  const categoryLabel = isEn ? post.categoryLabelEn : post.categoryLabel;
  const readTime = isEn ? post.readTimeEn : post.readTime;
  const summary = isEn ? post.summaryEn : post.summary;

  const relatedPosts = BLOG_POSTS.filter((p) => post.relatedSlugs.includes(p.slug));

  const whatsappDirectUrl = isEn
    ? `https://wa.me/573004435894?text=Hello%20Autonomek%2C%20I%20read%20your%20article%20%22${encodeURIComponent(
        title
      )}%22%20and%20would%20like%20to%20consult%20on%20implementing%20it.`
    : `https://wa.me/573004435894?text=Hola%20Autonomek%2C%20le%C3%AD%20su%20art%C3%ADculo%20%22${encodeURIComponent(
        title
      )}%22%20y%20quiero%20consultar%20sobre%20su%20implementaci%C3%B3n.`;

  return (
    <main className="min-h-screen w-full bg-background text-foreground pt-28 md:pt-36 pb-24 selection:bg-primary selection:text-primary-ink">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* ================================================================== */}
        {/* 1. CLEAN ARTICLE HEADER                                            */}
        {/* ================================================================== */}
        <header className="max-w-4xl border-b border-rule pb-8">
          <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-xs font-mono text-muted">
            <Link href={homeHref} className="hover:text-foreground transition-colors">
              {isEn ? 'Home' : 'Inicio'}
            </Link>
            <span className="text-rule">/</span>
            <Link
              href={blogBaseHref}
              className="hover:text-foreground underline decoration-rule hover:decoration-primary underline-offset-4 transition-colors"
            >
              Blog
            </Link>
            <span className="text-rule">/</span>
            <span className="text-primary font-medium">{categoryLabel}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted mb-4">
            <span>
              {new Date(post.date + 'T00:00:00Z').toLocaleDateString(isEn ? 'en-US' : 'es-CO', {
                timeZone: 'UTC',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="text-rule">·</span>
            <span className="flex items-center gap-1">
              <Clock size={12} className="text-primary" />
              <span>{readTime}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.12]">
            {title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            {description}
          </p>
        </header>

        {/* ================================================================== */}
        {/* 2. TWO-COLUMN EDITORIAL LAYOUT (Sticky Sidebar + Main Article)     */}
        {/* ================================================================== */}
        <div className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 border-b border-rule">
          {/* LEFT SIDEBAR: Sticky Table of Contents & Service Link */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="rounded-xl border border-rule bg-surface p-5 space-y-3">
                <p className="text-xs font-mono text-primary font-semibold">
                  {isEn ? 'Table of contents' : 'Índice del artículo'}
                </p>
                <nav className="space-y-2 text-xs sm:text-sm">
                  {post.tableOfContents.map((item, idx) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-baseline gap-2 text-muted hover:text-foreground transition-colors"
                    >
                      <span className="font-mono text-xs text-primary shrink-0 tabular-nums">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <span className="underline decoration-rule hover:decoration-primary underline-offset-4 leading-snug">
                        {isEn ? item.titleEn : item.title}
                      </span>
                    </a>
                  ))}
                  <a
                    href="#comparativa"
                    className="flex items-baseline gap-2 text-muted hover:text-foreground transition-colors"
                  >
                    <span className="font-mono text-xs text-primary shrink-0 tabular-nums">
                      0{post.tableOfContents.length + 1}.
                    </span>
                    <span className="underline decoration-rule hover:decoration-primary underline-offset-4 leading-snug">
                      {isEn ? 'Comparison table' : 'Tabla comparativa'}
                    </span>
                  </a>
                </nav>
              </div>

              {/* Simple Service Card */}
              {post.sections[0]?.linkedService && (
                <div className="rounded-xl border border-rule bg-surface p-5 space-y-2.5">
                  <p className="text-xs font-mono text-muted">
                    {isEn ? 'Related service' : 'Servicio relacionado'}
                  </p>
                  <Link
                    href={
                      isEn
                        ? `${basePrefix}${post.sections[0].linkedService.hrefEn}`
                        : `${basePrefix}${post.sections[0].linkedService.href}`
                    }
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline decoration-primary/60 hover:decoration-primary underline-offset-4"
                  >
                    <span>
                      {isEn
                        ? post.sections[0].linkedService.labelEn
                        : post.sections[0].linkedService.label}
                    </span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              )}
            </div>
          </aside>

          {/* MAIN ARTICLE CONTENT */}
          <article className="lg:col-span-8 space-y-10">
            {/* Executive Summary Box */}
            <div className="rounded-xl border border-rule border-l-4 border-l-primary bg-surface p-5 sm:p-6">
              <span className="font-mono text-xs text-primary font-semibold block mb-1.5">
                {isEn ? 'Key takeaway' : 'Resumen ejecutivo'}
              </span>
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                {summary}
              </p>
            </div>

            {/* Sections */}
            <div className="divide-y divide-rule border-b border-rule">
              {post.sections.map((section) => {
                const heading = isEn ? section.headingEn : section.heading;
                const paragraphs = isEn ? section.paragraphsEn : section.paragraphs;
                const keyTakeaway = isEn ? section.keyTakeawayEn : section.keyTakeaway;
                const linkedService = section.linkedService;

                return (
                  <section key={section.id} id={section.id} className="py-8 scroll-mt-28 space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground leading-snug">
                      {heading}
                    </h2>

                    <div className="space-y-4 text-base leading-relaxed text-muted">
                      {paragraphs.map((p, pIdx) => (
                        <p key={pIdx} className="leading-relaxed">
                          {renderParagraphWithInlineLinks(p, section.inlineLinks, isEn, basePrefix)}
                        </p>
                      ))}
                    </div>

                    {keyTakeaway && (
                      <div className="rounded-xl border border-primary/25 bg-primary/10 p-4 text-sm text-foreground flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                        <p className="leading-relaxed font-medium">{keyTakeaway}</p>
                      </div>
                    )}

                    {linkedService && (
                      <div className="pt-1">
                        <Link
                          href={
                            isEn
                              ? `${basePrefix}${linkedService.hrefEn}`
                              : `${basePrefix}${linkedService.href}`
                          }
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline decoration-primary/60 hover:decoration-primary underline-offset-4"
                        >
                          <span>{isEn ? linkedService.labelEn : linkedService.label}</span>
                          <ArrowUpRight size={15} />
                        </Link>
                      </div>
                    )}
                  </section>
                );
              })}
            </div>

            {/* Clean Comparison Table */}
            <section id="comparativa" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                {isEn ? post.comparisonTable.titleEn : post.comparisonTable.title}
              </h2>

              <div className="overflow-x-auto rounded-xl border border-rule bg-surface">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-rule text-xs font-mono text-muted">
                      <th className="p-4 font-medium">
                        {isEn ? 'Criterion' : 'Criterio'}
                      </th>
                      <th className="p-4 font-medium border-l border-rule">
                        {isEn ? post.comparisonTable.legacyColumnEn : post.comparisonTable.legacyColumn}
                      </th>
                      <th className="p-4 font-semibold text-primary border-l border-rule">
                        {isEn ? post.comparisonTable.autonomekColumnEn : post.comparisonTable.autonomekColumn}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-rule">
                    {post.comparisonTable.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="align-top">
                        <td className="p-4 font-medium text-foreground">
                          {isEn ? row.criterionEn : row.criterion}
                        </td>
                        <td className="p-4 text-muted border-l border-rule">
                          <span className="inline-flex items-start gap-2">
                            <X size={14} className="text-subtle shrink-0 mt-0.5" />
                            <span>{isEn ? row.legacyEn : row.legacy}</span>
                          </span>
                        </td>
                        <td className="p-4 text-foreground font-medium border-l border-rule">
                          <span className="inline-flex items-start gap-2">
                            <Check size={14} className="text-primary shrink-0 mt-0.5" />
                            <span>{isEn ? row.autonomekEn : row.autonomek}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ Section */}
            {post.faq && post.faq.length > 0 && (
              <section className="pt-4 space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                  {isEn ? 'Frequently asked questions' : 'Preguntas frecuentes'}
                </h2>

                <div className="space-y-4">
                  {post.faq.map((item, fIdx) => (
                    <div key={fIdx} className="rounded-xl border border-rule bg-surface p-5 space-y-1.5">
                      <h3 className="text-base font-semibold text-foreground">
                        {isEn ? item.qEn : item.q}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {isEn ? item.aEn : item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </article>
        </div>

        {/* ================================================================== */}
        {/* 3. RELATED ARTICLES + SIMPLE CTA                                   */}
        {/* ================================================================== */}
        {relatedPosts.length > 0 && (
          <section className="py-10 border-b border-rule space-y-5">
            <h2 className="text-lg sm:text-xl font-semibold text-foreground">
              {isEn ? 'Related articles' : 'Artículos relacionados'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => {
                const relHref = `${blogBaseHref}/${rel.slug}`;
                return (
                  <div key={rel.slug} className="rounded-xl border border-rule bg-surface p-6 space-y-2.5">
                    <p className="text-xs font-mono text-primary">
                      {isEn ? rel.categoryLabelEn : rel.categoryLabel}
                    </p>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground leading-snug">
                      <Link
                        href={relHref}
                        className="hover:text-primary underline decoration-rule hover:decoration-primary underline-offset-4"
                      >
                        {isEn ? rel.titleEn : rel.title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-muted line-clamp-2">
                      {isEn ? rel.descriptionEn : rel.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Simple Closing CTA */}
        <section className="mt-12 rounded-2xl border border-rule bg-surface p-7 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
              {isEn
                ? 'Ready to implement this solution in your company?'
                : '¿Listo para implementar esta solución en tu empresa?'}
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              {isEn
                ? 'Talk directly with our team on WhatsApp for a free initial diagnosis.'
                : 'Habla directamente con nuestro equipo por WhatsApp para recibir un diagnóstico inicial sin costo.'}
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

        <div className="mt-8">
          <Link
            href={blogBaseHref}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-foreground underline decoration-rule hover:decoration-primary underline-offset-4"
          >
            <ChevronLeft size={14} />
            <span>{isEn ? 'Back to all articles' : 'Volver a todos los artículos'}</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
