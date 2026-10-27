'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import { PROJECTS, PROJECTS_EN, Project } from '@/data/projects';
import ProjectDetailsModal from '@/components/ProjectDetailsModal';
import { BlueprintSculptureFigure } from '@/components/widgets/ArchitecturalFigures';

export default function DesarrolloWebPageClient({ locale = 'es' }: { locale?: 'es' | 'en' }) {
  const pathname = usePathname() || '/';
  const isEn = locale === 'en' || pathname.startsWith('/en') || pathname.startsWith('/us');
  const isEsExplicit = pathname.startsWith('/es');
  const isUsExplicit = pathname.startsWith('/us');
  const basePrefix = isEn ? (isUsExplicit ? '/us' : '/en') : (isEsExplicit ? '/es' : '');

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const webProjects = useMemo(() => {
    const list = isEn ? PROJECTS_EN : PROJECTS;
    return list.filter((p) => p.category === 'Web').slice(0, 6);
  }, [isEn]);

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const whatsappUrl = isEn
    ? 'https://wa.me/573004435894?text=Hello%20Autonomek%2C%20I%20want%20to%20quote%20a%20High-Performance%20B2B%20Website%20with%20Technical%20SEO.'
    : 'https://wa.me/573004435894?text=Hola%20Autonomek%2C%20quiero%20cotizar%20una%20P%C3%A1gina%20Web%20de%20Alto%20Rendimiento%20con%20SEO%20T%C3%A9cnico.';

  const specs = isEn
    ? [
        {
          id: '01',
          title: 'Sub-Second Edge Rendering (Next.js App Router)',
          detail: 'Server-side rendering and static edge caching so your pages open in under 800 milliseconds on both mobile and desktop networks.',
          metric: 'LCP < 0.8s',
        },
        {
          id: '02',
          title: 'Technical SEO & Generative Engine Optimization (GEO/AEO)',
          detail: 'Complete Schema.org JSON-LD graphs, reciprocal international hreflang tags, and native llms.txt documentation so your brand is cited by Google, ChatGPT, and Perplexity.',
          metric: '100 / 100 SEO',
        },
        {
          id: '03',
          title: 'Zero Layout Shift & Accessible Architecture',
          detail: 'Explicit media aspect ratios, keyboard focus visibility, and semantic heading hierarchy that meets enterprise accessibility standards.',
          metric: 'CLS 0.00',
        },
        {
          id: '04',
          title: 'Direct-to-WhatsApp Conversion Funnels',
          detail: 'Instead of losing leads in dead-end email forms, every product and service page routes buyer intent directly to your WhatsApp sales pipeline.',
          metric: 'Direct conversion',
        },
      ]
    : [
        {
          id: '01',
          title: 'Carga Instantánea en el Borde (Next.js App Router)',
          detail: 'Renderizado en servidor y distribución en caché Edge para que tu sitio abra en menos de 800 milisegundos tanto en celulares como en escritorio.',
          metric: 'LCP < 0.8s',
        },
        {
          id: '02',
          title: 'SEO Técnico y Optimización para Motores de IA (GEO/AEO)',
          detail: 'Marcado estructurado Schema.org JSON-LD, etiquetas hreflang internacionales y documentación llms.txt para posicionar en Google y ser citado por ChatGPT y Perplexity.',
          metric: '100 / 100 SEO',
        },
        {
          id: '03',
          title: 'Estabilidad Visual Absoluta (Zero CLS)',
          detail: 'Reserva estricta de dimensiones multimedia, contraste verificado y jerarquía semántica que proyecta solvencia corporativa.',
          metric: 'CLS 0.00',
        },
        {
          id: '04',
          title: 'Embudos de Conversión Directa a WhatsApp',
          detail: 'En lugar de perder clientes en formularios de correo que nadie lee, cada sección dirige al comprador directamente a tu canal comercial de WhatsApp.',
          metric: 'Conversión directa',
        },
      ];

  return (
    <main className="min-h-screen w-full bg-background text-foreground pt-28 md:pt-36 pb-20">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Hero */}
        <header className="pb-16 md:pb-24 border-b border-rule grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.04]">
              {isEn
                ? 'High-performance B2B websites engineered for Google and AI search.'
                : 'Páginas web de alto rendimiento diseñadas para Google y motores de IA.'}
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-[60ch]">
              {isEn
                ? 'We do not use slow page builders or generic templates. We engineer custom Next.js platforms that load in under a second and operate as your primary customer acquisition channel.'
                : 'No usamos constructores visuales lentos ni plantillas genéricas. Desarrollamos plataformas a medida en Next.js que cargan en menos de un segundo y convierten visitas en ventas.'}
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-primary text-primary-ink font-medium text-sm sm:text-base hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                {isEn ? 'Quote my website on WhatsApp' : 'Cotizar mi web por WhatsApp'}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <BlueprintSculptureFigure activeIndex={1} isEn={isEn} />
          </div>
        </header>

        {/* Core Web Vitals Specification Ledger */}
        <section className="py-16 md:py-24 border-b border-rule">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
            {isEn ? 'Architectural specifications.' : 'Especificaciones de arquitectura.'}
          </h2>

          <div className="divide-y divide-rule border-y border-rule">
            {specs.map((item) => (
              <div
                key={item.id}
                className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                <div className="lg:col-span-1 font-mono text-sm text-primary tabular-nums pt-1">
                  {item.id}
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                </div>
                <div className="lg:col-span-5 text-sm sm:text-base text-muted leading-relaxed">
                  {item.detail}
                </div>
                <div className="lg:col-span-2 lg:text-right font-mono text-xs text-primary pt-1">
                  {item.metric}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Deployed Web Platforms */}
        <section className="py-16 md:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground">
              {isEn ? 'Web platforms in production.' : 'Plataformas web en producción.'}
            </h2>
            <Link
              href={isEn ? `${basePrefix}/projects` : `${basePrefix}/proyectos`}
              className="text-sm font-medium text-primary hover:underline"
            >
              {isEn ? 'View full portfolio' : 'Ver portafolio completo'}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => handleOpenDetails(project)}
                className="group min-w-0 rounded-2xl bg-surface border border-rule overflow-hidden flex flex-col justify-between cursor-pointer hover:border-rule-strong transition-colors"
              >
                <div>
                  <div className="relative w-full aspect-[16/10] bg-card overflow-hidden border-b border-rule">
                    <img
                      src={`/projects/${project.folder}/${project.images[0]}`}
                      alt={project.title}
                      width={800}
                      height={500}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <span className="text-xs text-muted block">{project.client}</span>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-5 pt-3 border-t border-rule flex items-center justify-between text-xs text-muted">
                  <span>{isEn ? 'Inspect case study' : 'Inspeccionar caso'}</span>
                  {project.url && <ExternalLink size={13} className="text-primary" />}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <ProjectDetailsModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
      />
    </main>
  );
}
