'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import { PROJECTS, PROJECTS_EN, Project } from '@/data/projects';
import ProjectDetailsModal from '@/components/ProjectDetailsModal';
import { BlueprintSculptureFigure } from '@/components/widgets/ArchitecturalFigures';

export default function SolucionesPageClient({ locale = 'es' }: { locale?: 'es' | 'en' }) {
  const pathname = usePathname() || '/';
  const isEn = locale === 'en' || pathname.startsWith('/en') || pathname.startsWith('/us');
  const isEsExplicit = pathname.startsWith('/es');
  const isUsExplicit = pathname.startsWith('/us');
  const basePrefix = isEn ? (isUsExplicit ? '/us' : '/en') : (isEsExplicit ? '/es' : '');

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
    ? 'https://wa.me/573004435894?text=Hello%20Autonomek%2C%20I%20want%20to%20quote%20a%20Custom%20B2B%20Software%20platform.'
    : 'https://wa.me/573004435894?text=Hola%20Autonomek%2C%20quiero%20cotizar%20un%20Software%20a%20Medida%20para%20mi%20empresa.';

  const modules = isEn
    ? [
        {
          id: '01',
          title: 'Proprietary CRMs & Operations Portals',
          stack: 'Next.js · TypeScript · PostgreSQL · Supabase',
          desc: 'Centralized web applications tailored to your exact business rules, with role-based permissions and zero per-seat SaaS licensing fees.',
        },
        {
          id: '02',
          title: 'Real-Time Booking & Inventory Engines',
          stack: 'Node.js · Relational DBs · Calendar & Payment APIs',
          desc: 'Custom reservation, rental, and fleet-management platforms with live stock validation and automated customer notifications.',
        },
        {
          id: '03',
          title: 'Executive BI & AI Telemetry Dashboards',
          stack: 'Chart.js · Real-time WebSockets · SQL Aggregations',
          desc: 'Control panels that consolidate financial metrics, sales conversion rates, and AI agent performance in one screen.',
        },
        {
          id: '04',
          title: 'API Gateways & Legacy System Bridges',
          stack: 'REST · GraphQL · Webhooks · Cloud Workers',
          desc: 'Secure middleware layers that connect your existing databases and ERPs with modern web and mobile interfaces.',
        },
      ]
    : [
        {
          id: '01',
          title: 'CRMs Propios y Portales de Gestión Operativa',
          stack: 'Next.js · TypeScript · PostgreSQL · Supabase',
          desc: 'Aplicaciones web centralizadas diseñadas según las reglas exactas de tu empresa, con control de acceso por roles y sin cobros mensuales por usuario.',
        },
        {
          id: '02',
          title: 'Motores de Reservas, Alquiler e Inventario en Vivo',
          stack: 'Node.js · Bases Relacionales · Pasarelas de Pago',
          desc: 'Plataformas transaccionales para renta de equipos, agendamiento o comercio mayorista con validación de disponibilidad en tiempo real.',
        },
        {
          id: '03',
          title: 'Dashboards Ejecutivos y Telemetría de Negocio',
          stack: 'Chart.js · Tiempo Real · Consultas SQL Optimizadas',
          desc: 'Paneles de control que consolidan tus indicadores financieros, embudos comerciales y rendimiento de agentes IA en una sola pantalla.',
        },
        {
          id: '04',
          title: 'APIs e Integración con Sistemas Existentes',
          stack: 'REST · Webhooks · Seguridad en la Nube',
          desc: 'Capas de conexión seguras para que tu software actual se comunique con nuevas aplicaciones web, móviles o flujos de WhatsApp.',
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
                ? 'Custom B2B software and proprietary cloud platforms.'
                : 'Software a medida y plataformas en la nube para empresas.'}
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-[60ch]">
              {isEn
                ? 'When commercial software forces your team into workarounds, we design and build proprietary web applications, dashboards, and internal tools owned 100% by your company.'
                : 'Cuando el software comercial genérico obliga a tu equipo a trabajar con parches, construimos plataformas web, paneles analíticos y sistemas internos 100% propiedad de tu empresa.'}
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-primary text-primary-ink font-medium text-sm sm:text-base hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                {isEn ? 'Quote custom software on WhatsApp' : 'Cotizar software por WhatsApp'}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <BlueprintSculptureFigure activeIndex={3} isEn={isEn} />
          </div>
        </header>

        {/* Capabilities Ledger */}
        <section className="py-16 md:py-24 border-b border-rule">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
            {isEn ? 'What we engineer.' : 'Qué construimos.'}
          </h2>

          <div className="divide-y divide-rule border-y border-rule">
            {modules.map((mod) => (
              <div
                key={mod.id}
                className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                <div className="lg:col-span-1 font-mono text-sm text-primary tabular-nums pt-1">
                  {mod.id}
                </div>
                <div className="lg:col-span-4 space-y-1.5">
                  <h3 className="text-xl font-semibold text-foreground">{mod.title}</h3>
                  <p className="font-mono text-xs text-subtle">{mod.stack}</p>
                </div>
                <div className="lg:col-span-7 text-sm sm:text-base text-muted leading-relaxed">
                  {mod.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Deployed Custom Software */}
        <section className="py-16 md:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground">
              {isEn ? 'Custom software in production.' : 'Software propio en producción.'}
            </h2>
            <Link
              href={isEn ? `${basePrefix}/projects` : `${basePrefix}/proyectos`}
              className="text-sm font-medium text-primary hover:underline"
            >
              {isEn ? 'View full portfolio' : 'Ver portafolio completo'}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customProjects.map((project) => (
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
                  <span>{isEn ? 'Inspect platform' : 'Inspeccionar plataforma'}</span>
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
