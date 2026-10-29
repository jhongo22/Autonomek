'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ExternalLink, Workflow, FileText, RefreshCw, Database } from 'lucide-react';
import { PROJECTS, PROJECTS_EN, Project } from '@/data/projects';
import ProjectDetailsModal from '@/components/ProjectDetailsModal';

export default function AutomatizacionPageClient({ locale = 'es' }: { locale?: 'es' | 'en' }) {
  const pathname = usePathname() || '/';
  const isEn = locale === 'en' || pathname.startsWith('/en') || pathname.startsWith('/us');
  const isEsExplicit = pathname.startsWith('/es');
  const isUsExplicit = pathname.startsWith('/us');
  const basePrefix = isEn ? (isUsExplicit ? '/us' : '/en') : isEsExplicit ? '/es' : '';

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const autoProjects = useMemo(() => {
    const list = isEn ? PROJECTS_EN : PROJECTS;
    return list.filter((p) => p.category === 'Automatización').slice(0, 6);
  }, [isEn]);

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const whatsappUrl = isEn
    ? 'https://wa.me/573004435894?text=Hello%20Autonomek%2C%20I%20want%20to%20automate%20and%20connect%20my%20company%20processes.'
    : 'https://wa.me/573004435894?text=Hola%20Autonomek%2C%20quiero%20conectar%20y%20automatizar%20los%20procesos%20de%20mi%20empresa.';

  const workflows = isEn
    ? [
        {
          id: '01',
          title: 'CRM, Billing & Accounting Connection',
          desc: 'When a client pays or a sale closes, the system automatically creates the invoice in your accounting software and updates customer records.',
          metric: 'Zero manual typing',
          icon: RefreshCw,
        },
        {
          id: '02',
          title: 'Automatic Contracts, Quotes & Emails',
          desc: 'Generates personalized PDF contracts or quotes with client data in seconds and sends them via email and WhatsApp automatically.',
          metric: 'Ready in seconds',
          icon: FileText,
        },
        {
          id: '03',
          title: 'Calendar & Inventory Synchronization',
          desc: 'Keeps availability unified across your website, spreadsheets, and sales channels in real time so you never double-book or run out of stock.',
          metric: 'Real-time sync',
          icon: Database,
        },
        {
          id: '04',
          title: 'Automatic Lead Capture & Alerts',
          desc: 'Organizes every new inquiry from your website, ads, or WhatsApp directly in your CRM and notifies your team immediately.',
          metric: 'Instant alerts',
          icon: Workflow,
        },
      ]
    : [
        {
          id: '01',
          title: 'Conexión de Ventas, Facturación y Contabilidad',
          desc: 'Cuando un cliente realiza un pago o se cierra una venta, el sistema genera la factura automáticamente y actualiza tu registro sin digitar a mano.',
          metric: 'Cero digitación manual',
          icon: RefreshCw,
        },
        {
          id: '02',
          title: 'Envío Automático de Contratos y Cotizaciones',
          desc: 'Crea contratos o cotizaciones en PDF con los datos del cliente en segundos y los envía por correo y WhatsApp sin demoras.',
          metric: 'Listo en segundos',
          icon: FileText,
        },
        {
          id: '03',
          title: 'Sincronización de Agendas e Inventarios',
          desc: 'Mantiene al día la disponibilidad de tus servicios, reservas o productos entre tu sitio web, hojas de Excel y canales de venta.',
          metric: 'Siempre actualizado',
          icon: Database,
        },
        {
          id: '04',
          title: 'Registro de Clientes y Alertas al Equipo',
          desc: 'Guarda cada nuevo prospecto que llega por tu web o WhatsApp directamente en tu panel y avisa a tu equipo al instante.',
          metric: 'Control en tiempo real',
          icon: Workflow,
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
              {isEn ? 'System Integration' : 'Integración y Automatización'}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
              {isEn
                ? 'Connect your platforms and eliminate repetitive manual tasks.'
                : 'Conectamos tus sistemas para eliminar el trabajo manual repetitivo.'}
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-[60ch]">
              {isEn
                ? 'Stop copying and pasting data between WhatsApp, spreadsheets, and billing software. We connect your tools so information flows automatically and without human errors.'
                : 'Deja de copiar y pegar datos entre WhatsApp, Excel y tu sistema de facturación. Conectamos tus herramientas para que la información fluya sola entre áreas, ahorres horas cada semana y trabajes con datos claros.'}
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-ink px-7 py-3.5 text-sm sm:text-base font-semibold hover:opacity-90 transition"
              >
                {isEn ? 'Automate my processes on WhatsApp' : 'Automatizar mis procesos por WhatsApp'}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-rule bg-surface p-6 shadow-xl space-y-4">
              <p className="text-sm font-semibold text-foreground">
                {isEn ? 'How automatic integration works' : 'Cómo funciona una integración automática'}
              </p>
              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="rounded-2xl bg-background border border-rule p-3.5 flex items-center justify-between">
                  <span>1. {isEn ? 'Payment or order received' : 'Cliente confirma pedido o pago'}</span>
                  <span className="text-primary font-medium">WhatsApp / Web</span>
                </div>
                <div className="rounded-2xl bg-background border border-rule p-3.5 flex items-center justify-between">
                  <span>2. {isEn ? 'Invoice & contract created' : 'Se genera factura y contrato'}</span>
                  <span className="text-primary font-medium">Automático</span>
                </div>
                <div className="rounded-2xl bg-background border border-rule p-3.5 flex items-center justify-between">
                  <span>3. {isEn ? 'CRM & team notified' : 'Se actualiza tu panel y agenda'}</span>
                  <span className="text-primary font-medium">En 1 segundo</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* 4 Workflows Grid */}
        <section className="py-16 md:py-24 border-b border-rule">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-10">
            {isEn
              ? 'Processes you can put on autopilot.'
              : 'Tareas que podemos automatizar en tu empresa.'}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {workflows.map((wf) => {
              const IconComponent = wf.icon;
              return (
                <div
                  key={wf.id}
                  className="rounded-3xl border border-rule bg-surface p-7 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <IconComponent size={20} />
                    </span>
                    <span className="rounded-full bg-background border border-rule px-3 py-1 text-xs font-medium text-primary">
                      {wf.metric}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                    {wf.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted leading-relaxed">{wf.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Deployed Automations */}
        <section className="py-16 md:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              {isEn ? 'Automation projects in action.' : 'Automatizaciones reales en marcha.'}
            </h2>
            <Link
              href={isEn ? `${basePrefix}/projects` : `${basePrefix}/proyectos`}
              className="text-sm font-medium text-primary hover:underline"
            >
              {isEn ? 'View full portfolio →' : 'Ver portafolio completo →'}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {autoProjects.map((project) => (
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
