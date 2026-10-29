'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ExternalLink, Globe, Zap, Search, MessageCircle, ShieldCheck } from 'lucide-react';
import { PROJECTS, PROJECTS_EN, Project } from '@/data/projects';
import ProjectDetailsModal from '@/components/ProjectDetailsModal';

export default function DesarrolloWebPageClient({ locale = 'es' }: { locale?: 'es' | 'en' }) {
  const pathname = usePathname() || '/';
  const isEn = locale === 'en' || pathname.startsWith('/en') || pathname.startsWith('/us');
  const isEsExplicit = pathname.startsWith('/es');
  const isUsExplicit = pathname.startsWith('/us');
  const basePrefix = isEn ? (isUsExplicit ? '/us' : '/en') : isEsExplicit ? '/es' : '';

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
    ? 'https://wa.me/573004435894?text=Hello%20Autonomek%2C%20I%20want%20to%20quote%20a%20High-Performance%20Website%20with%20Google%20%26%20AI%20SEO.'
    : 'https://wa.me/573004435894?text=Hola%20Autonomek%2C%20quiero%20cotizar%20un%20Sitio%20Web%20de%20Alto%20Rendimiento%20con%20SEO%20en%20Google%20e%20IA.';

  const specs = isEn
    ? [
        {
          id: '01',
          title: 'Instant Load Speed (< 0.8s)',
          detail:
            'Your website opens immediately on phones and computers so visitors stay engaged instead of leaving due to slow loading.',
          metric: '0.6s load time',
          icon: Zap,
        },
        {
          id: '02',
          title: 'Top Rankings on Google & ChatGPT',
          detail:
            'Built from the ground up with technical SEO and structured data so your business shows up first on Google and gets recommended by AI tools like ChatGPT.',
          metric: 'Google & AI SEO',
          icon: Search,
        },
        {
          id: '03',
          title: 'Custom Design that Builds Trust',
          detail:
            'Clean, professional interfaces tailored to your brand so potential clients immediately perceive authority and confidence.',
          metric: '100% custom design',
          icon: ShieldCheck,
        },
        {
          id: '04',
          title: 'Built to Convert Visitors on WhatsApp',
          detail:
            'Clear structure and direct calls to action that guide visitors straight to your WhatsApp ready to request a quote or buy.',
          metric: 'More sales inquiries',
          icon: MessageCircle,
        },
      ]
    : [
        {
          id: '01',
          title: 'Velocidad de carga instantánea (< 0.8s)',
          detail:
            'Tu página abre al instante tanto en celulares como en computadores, evitando que tus visitantes se vayan por lentitud.',
          metric: 'Carga en 0.6 seg',
          icon: Zap,
        },
        {
          id: '02',
          title: 'Primeros lugares en Google y ChatGPT',
          detail:
            'Estructuramos tu web con SEO técnico y datos claros para que Google y motores de IA como ChatGPT recomienden a tu empresa primero.',
          metric: 'SEO Google e IA',
          icon: Search,
        },
        {
          id: '03',
          title: 'Diseño a medida que transmite confianza',
          detail:
            'Interfaces limpias, modernas y fáciles de navegar que proyectan profesionalismo inmediato ante tus clientes.',
          metric: 'Diseño 100% propio',
          icon: ShieldCheck,
        },
        {
          id: '04',
          title: 'Pensado para convertir visitas en clientes',
          detail:
            'Textos claros y botones directos a WhatsApp para que cada visitante entienda qué ofreces y te contacte sin fricción.',
          metric: 'Cierre por WhatsApp',
          icon: MessageCircle,
        },
      ];

  return (
    <main className="min-h-screen w-full bg-background text-foreground pt-28 md:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Hero */}
        <header className="pb-16 md:pb-24 border-b border-rule grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <p className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
              {isEn ? 'Web Design & SEO' : 'Diseño y Desarrollo Web'}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
              {isEn
                ? 'Fast, clear websites built to convert and rank #1 on Google & AI.'
                : 'Sitios web rápidos, claros y listos para vender en Google y ChatGPT.'}
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-[60ch]">
              {isEn
                ? 'End-to-end design and custom development focused on speed, clarity for your visitors, and top visibility on Google and AI search engines.'
                : 'Diseñamos y desarrollamos tu sitio web de punta a punta para que se entienda en segundos, cargue al instante y atraiga clientes todos los días desde Google y buscadores con IA.'}
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-ink px-7 py-3.5 text-sm sm:text-base font-semibold hover:opacity-90 transition"
              >
                {isEn ? 'Quote my website on WhatsApp' : 'Cotizar mi sitio web por WhatsApp'}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-rule bg-surface p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-rule pb-3">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Globe size={17} className="text-primary" />
                  {isEn ? 'Performance & SEO Score' : 'Rendimiento y Visibilidad'}
                </span>
                <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                  98 / 100
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-background border border-rule p-4">
                  <p className="text-xs text-muted">{isEn ? 'Load speed' : 'Velocidad'}</p>
                  <p className="text-2xl font-semibold text-foreground mt-1">0.6 seg</p>
                </div>
                <div className="rounded-2xl bg-background border border-rule p-4">
                  <p className="text-xs text-muted">{isEn ? 'Search visibility' : 'Búsquedas'}</p>
                  <p className="text-2xl font-semibold text-primary mt-1">Google + IA</p>
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                {isEn
                  ? 'Custom code with Next.js, mobile-first design, and complete technical SEO included.'
                  : 'Código a medida, adaptable a celulares y con toda la configuración de SEO técnico incluida.'}
              </p>
            </div>
          </div>
        </header>

        {/* 4 Clear Benefits */}
        <section className="py-16 md:py-24 border-b border-rule">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-10">
            {isEn
              ? 'What makes our websites bring real results?'
              : '¿Por qué nuestros sitios web sí generan clientes?'}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {specs.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="rounded-3xl border border-rule bg-surface p-7 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <IconComponent size={20} />
                    </span>
                    <span className="rounded-full bg-background border border-rule px-3 py-1 text-xs font-medium text-primary">
                      {item.metric}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted leading-relaxed">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Deployed Web Platforms */}
        <section className="py-16 md:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              {isEn ? 'Websites we have built.' : 'Sitios web que hemos desarrollado.'}
            </h2>
            <Link
              href={isEn ? `${basePrefix}/projects` : `${basePrefix}/proyectos`}
              className="text-sm font-medium text-primary hover:underline"
            >
              {isEn ? 'View full portfolio →' : 'Ver portafolio completo →'}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => handleOpenDetails(project)}
                className="group rounded-3xl bg-surface border border-rule overflow-hidden flex flex-col justify-between cursor-pointer hover:border-primary transition-colors"
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
                  <div className="p-6 space-y-2.5">
                    <div className="flex items-center justify-between gap-2 text-xs text-muted">
                      <span>{project.client}</span>
                      <span className="text-primary">{project.category}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-5 pt-3 border-t border-rule flex items-center justify-between text-xs text-muted">
                  <span>{isEn ? 'View project details' : 'Ver detalles del proyecto'}</span>
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
