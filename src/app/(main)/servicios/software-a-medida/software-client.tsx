'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ExternalLink, LayoutDashboard, Calendar, BarChart3, Layers } from 'lucide-react';
import { PROJECTS, PROJECTS_EN, Project } from '@/data/projects';
import ProjectDetailsModal from '@/components/ProjectDetailsModal';

export default function SolucionesPageClient({ locale = 'es' }: { locale?: 'es' | 'en' }) {
  const pathname = usePathname() || '/';
  const isEn = locale === 'en' || pathname.startsWith('/en') || pathname.startsWith('/us');
  const isEsExplicit = pathname.startsWith('/es');
  const isUsExplicit = pathname.startsWith('/us');
  const basePrefix = isEn ? (isUsExplicit ? '/us' : '/en') : isEsExplicit ? '/es' : '';

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const customProjects = useMemo(() => {
    const list = isEn ? PROJECTS_EN : PROJECTS;
    return list.filter((p) => [1, 3, 5, 10, 14].includes(p.id));
  }, [isEn]);

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const whatsappUrl = isEn
    ? 'https://wa.me/573004435894?text=Hello%20Autonomek%2C%20I%20want%20to%20quote%20a%20Custom%20Software%20project.'
    : 'https://wa.me/573004435894?text=Hola%20Autonomek%2C%20quiero%20cotizar%20un%20Software%20a%20Medida%20para%20mi%20empresa.';

  const modules = isEn
    ? [
        {
          id: '01',
          title: 'Internal Management & Client Portals',
          desc: 'Web applications built around your exact business rules, with user permissions for your team and zero monthly per-user licensing fees.',
          icon: LayoutDashboard,
        },
        {
          id: '02',
          title: 'Booking, Rental & Inventory Systems',
          desc: 'Custom platforms to manage reservations, equipment rentals, or wholesale orders with real-time availability and automatic alerts.',
          icon: Calendar,
        },
        {
          id: '03',
          title: 'Executive Control Panels & Reports',
          desc: 'Clear dashboards that consolidate your sales, operations, and team performance on a single screen so you can make fast decisions.',
          icon: BarChart3,
        },
        {
          id: '04',
          title: 'Connections with Your Existing Tools',
          desc: 'We connect your custom software with WhatsApp, payment gateways, spreadsheets, or accounting software so everything works together.',
          icon: Layers,
        },
      ]
    : [
        {
          id: '01',
          title: 'Sistemas de Gestión y Portales de Clientes',
          desc: 'Aplicaciones web diseñadas según las reglas exactas de tu negocio, con accesos para tu equipo y sin cobros mensuales por cada usuario.',
          icon: LayoutDashboard,
        },
        {
          id: '02',
          title: 'Sistemas de Reservas, Alquiler e Inventario',
          desc: 'Plataformas hechas a tu medida para gestionar citas, alquiler de equipos o pedidos mayoristas con disponibilidad en tiempo real.',
          icon: Calendar,
        },
        {
          id: '03',
          title: 'Paneles de Control y Reportes Claros',
          desc: 'Pantallas intuitivas que reúnen tus ventas, tareas pendientes y métricas clave en un solo lugar para tomar mejores decisiones.',
          icon: BarChart3,
        },
        {
          id: '04',
          title: 'Integración con tus Herramientas Actuales',
          desc: 'Conectamos tu nuevo software con WhatsApp, pasarelas de pago o tu contabilidad para que no tengas que digitar lo mismo dos veces.',
          icon: Layers,
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
              {isEn ? 'Flagship Service' : 'Servicio Estrella'}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
              {isEn
                ? 'Custom software built around how your business works.'
                : 'Software a medida construido alrededor de cómo trabaja tu negocio.'}
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-[60ch]">
              {isEn
                ? 'Stop adapting your team to rigid templates or paying expensive monthly fees per user. We design and build platforms, control panels, and internal systems owned 100% by your company.'
                : 'Deja de forzar a tu equipo a usar plantillas complicadas o pagar costosas mensualidades por cada usuario. Diseñamos plataformas, paneles de control y sistemas internos fáciles de usar y 100% propiedad de tu empresa.'}
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-ink px-7 py-3.5 text-sm sm:text-base font-semibold hover:opacity-90 transition"
              >
                {isEn ? 'Quote custom software on WhatsApp' : 'Cotizar software por WhatsApp'}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-rule bg-surface p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-rule pb-3">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                  <LayoutDashboard size={17} className="text-primary" />
                  {isEn ? 'Your Own Platform' : 'Tu Propia Plataforma'}
                </span>
                <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                  {isEn ? '100% Yours' : '100% Tuya'}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-background border border-rule p-4">
                  <p className="text-xs text-muted">
                    {isEn ? 'Monthly license fees' : 'Mensualidades por usuario'}
                  </p>
                  <p className="text-2xl font-semibold text-foreground mt-1">$0</p>
                </div>
                <div className="rounded-2xl bg-background border border-rule p-4">
                  <p className="text-xs text-muted">{isEn ? 'Tailored to you' : 'Adaptado a ti'}</p>
                  <p className="text-2xl font-semibold text-primary mt-1">100%</p>
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                {isEn
                  ? 'Includes interface design, staged development, team training, and post-launch warranty.'
                  : 'Incluye diseño de pantallas claras, entregas por etapas, capacitación a tu equipo y garantía.'}
              </p>
            </div>
          </div>
        </header>

        {/* 4 Modules Grid */}
        <section className="py-16 md:py-24 border-b border-rule">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-10">
            {isEn
              ? 'Types of custom software we build.'
              : '¿Qué tipo de software desarrollamos para tu empresa?'}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {modules.map((mod) => {
              const IconComponent = mod.icon;
              return (
                <div
                  key={mod.id}
                  className="rounded-3xl border border-rule bg-surface p-7 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <IconComponent size={20} />
                    </span>
                    <span className="font-mono text-xs text-muted">{mod.id}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                    {mod.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted leading-relaxed">{mod.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Deployed Custom Software */}
        <section className="py-16 md:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              {isEn ? 'Custom software working today.' : 'Software a medida en funcionamiento.'}
            </h2>
            <Link
              href={isEn ? `${basePrefix}/projects` : `${basePrefix}/proyectos`}
              className="text-sm font-medium text-primary hover:underline"
            >
              {isEn ? 'View full portfolio →' : 'Ver portafolio completo →'}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customProjects.map((project) => (
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
