'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import { PROJECTS, PROJECTS_EN, Project } from '@/data/projects';
import ProjectDetailsModal from '@/components/ProjectDetailsModal';
import { BlueprintSculptureFigure } from '@/components/widgets/ArchitecturalFigures';

export default function AutomatizacionPageClient({ locale = 'es' }: { locale?: 'es' | 'en' }) {
  const pathname = usePathname() || '/';
  const isEn = locale === 'en' || pathname.startsWith('/en') || pathname.startsWith('/us');
  const isEsExplicit = pathname.startsWith('/es');
  const isUsExplicit = pathname.startsWith('/us');
  const basePrefix = isEn ? (isUsExplicit ? '/us' : '/en') : (isEsExplicit ? '/es' : '');

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
    ? 'https://wa.me/573004435894?text=Hello%20Autonomek%2C%20I%20want%20to%20audit%20and%20automate%20my%20company%20workflows.'
    : 'https://wa.me/573004435894?text=Hola%20Autonomek%2C%20quiero%20auditar%20y%20automatizar%20los%20procesos%20de%20mi%20empresa.';

  const workflows = isEn
    ? [
        {
          id: '01',
          title: 'CRM, Billing & Accounting Synchronization',
          stack: 'n8n · Stripe · HubSpot · ERP APIs',
          desc: 'When a payment clears or a deal closes in your CRM, the pipeline automatically generates the invoice in your accounting system and updates inventory records.',
          metric: 'Zero manual entry',
        },
        {
          id: '02',
          title: 'Automated Contract Generation & E-Signature Dispatch',
          stack: 'Google Docs API · PDF Engine · Gmail · WhatsApp API',
          desc: 'Generates custom legal contracts populated with client data in seconds and sends them for signature via email and WhatsApp upon commercial approval.',
          metric: 'Execution < 1s',
        },
        {
          id: '03',
          title: 'Multi-Channel Calendar & Inventory Sync',
          stack: 'Supabase · iCal · Google Sheets · Webhooks',
          desc: 'Synchronizes availability across booking platforms, internal databases, and sales channels in real time to prevent double bookings or stock outs.',
          metric: 'Real-time sync',
        },
        {
          id: '04',
          title: 'B2B Outbound Lead Extraction & Enrichment',
          stack: 'Apify · Firecrawl · OpenAI · CRM Webhooks',
          desc: 'Extracts public B2B directories, enriches company profiles, and prepares personalized commercial outreach directly inside your sales pipeline.',
          metric: 'Automated pipeline',
        },
      ]
    : [
        {
          id: '01',
          title: 'Sincronización de CRM, Facturación y Contabilidad',
          stack: 'n8n · Pasarelas de Pago · HubSpot · ERP APIs',
          desc: 'Cuando un cliente realiza un pago o se cierra un negocio en tu CRM, el sistema emite automáticamente la factura contable y actualiza el inventario.',
          metric: 'Cero digitación manual',
        },
        {
          id: '02',
          title: 'Generación Automática de Contratos y Documentos',
          stack: 'Google Docs API · Motor PDF · Gmail · WhatsApp API',
          desc: 'Redacta contratos personalizados con los datos del cliente en segundos y los despacha listos para firma por correo y WhatsApp al cerrar una venta.',
          metric: 'Ejecución < 1s',
        },
        {
          id: '03',
          title: 'Sincronización Multicanal de Agendas e Inventarios',
          stack: 'Supabase · iCal · Google Sheets · Webhooks',
          desc: 'Unifica en tiempo real la disponibilidad de tus equipos, reservas o productos entre tu sitio web, hojas de cálculo y canales comerciales.',
          metric: 'Sincronización continua',
        },
        {
          id: '04',
          title: 'Prospección y Enriquecimiento de Datos B2B',
          stack: 'Apify · Firecrawl · OpenAI · CRM Webhooks',
          desc: 'Extrae y organiza información de empresas objetivo, analiza su perfil comercial y registra oportunidades calificadas directamente en tu embudo.',
          metric: 'Prospección autónoma',
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
                ? 'Autonomous business operations & billing workflows.'
                : 'Operación y facturación en piloto automático con flujos n8n.'}
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-[60ch]">
              {isEn
                ? 'Eliminate manual copy-pasting between WhatsApp, payment gateways, and spreadsheets. We connect your CRM, accounting software, and sales pipelines so contracts, invoices, and alerts execute automatically in milliseconds.'
                : 'Elimina el copiar y pegar entre WhatsApp, pasarelas de pago y hojas de cálculo. Conectamos tu CRM, software contable y canales de venta para que las facturas, contratos y notificaciones se ejecuten en milisegundos con cero errores humanos.'}
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-primary text-primary-ink font-medium text-sm sm:text-base hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                {isEn ? 'Audit my processes on WhatsApp' : 'Auditar mis procesos por WhatsApp'}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <BlueprintSculptureFigure activeIndex={2} isEn={isEn} />
          </div>
        </header>

        {/* Workflow Specifications */}
        <section className="py-16 md:py-24 border-b border-rule">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
            {isEn ? 'Autonomous workflows we engineer for your business.' : 'Flujos de automatización que activamos en tu operación.'}
          </h2>

          <div className="divide-y divide-rule border-y border-rule">
            {workflows.map((wf) => (
              <div
                key={wf.id}
                className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                <div className="lg:col-span-1 font-mono text-sm text-primary tabular-nums pt-1">
                  {wf.id}
                </div>
                <div className="lg:col-span-4 space-y-1.5">
                  <h3 className="text-xl font-semibold text-foreground">{wf.title}</h3>
                  <p className="font-mono text-xs text-subtle">{wf.stack}</p>
                </div>
                <div className="lg:col-span-5 text-sm sm:text-base text-muted leading-relaxed">
                  {wf.desc}
                </div>
                <div className="lg:col-span-2 lg:text-right font-mono text-xs text-primary pt-1">
                  {wf.metric}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Deployed Automations */}
        <section className="py-16 md:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground">
              {isEn ? 'Automations in production.' : 'Automatizaciones en producción.'}
            </h2>
            <Link
              href={isEn ? `${basePrefix}/projects` : `${basePrefix}/proyectos`}
              className="text-sm font-medium text-primary hover:underline"
            >
              {isEn ? 'View full portfolio' : 'Ver portafolio completo'}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {autoProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => handleOpenDetails(project)}
                className="group min-w-0 rounded-2xl bg-surface border border-rule overflow-hidden flex flex-col justify-between cursor-pointer hover:border-rule-strong transition-colors"
              >
                <div>
                  <div className="relative w-full aspect-[16/10] bg-card overflow-hidden border-b border-rule">
                    <img
                      src={`/projects/${project.folder}/${project.images[0]}`}
                      alt={isEn ? `${project.title} — Autonomous Workflow Automation Architecture by Autonomek` : `${project.title} — Flujo de automatización de procesos desarrollado por Autonomek`}
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
                  <span>{isEn ? 'Inspect workflow' : 'Inspeccionar flujo'}</span>
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
