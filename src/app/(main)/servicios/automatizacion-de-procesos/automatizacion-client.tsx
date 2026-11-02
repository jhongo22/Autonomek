'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  ExternalLink,
  ArrowUpRight,
} from 'lucide-react';
import { PROJECTS, PROJECTS_EN, Project } from '@/data/projects';
import ProjectDetailsModal from '@/components/ProjectDetailsModal';
import { ServiceMiniApp } from '@/components/ui/service-mini-apps';
import InkOrbitFeatures from '@/components/ui/ink-orbit-features';
import { ProcessRoadmap } from '@/components/ui/process-roadmap';
import TestimonialMarquee from '@/components/ui/marquee-01';
import { AutomationPipelineBento } from '@/components/ui/service-bento-workbenches';

type Region = 'co' | 'mx' | 'es' | 'us' | 'en';

export default function AutomatizacionClient({ region = 'co' }: { region?: Region }) {
  const isEn = region === 'us' || region === 'en';
  const basePrefix =
    region === 'en' ? '/en' : region === 'us' ? '/us' : region === 'es' ? '/es' : '';

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeFlowIndex, setActiveFlowIndex] = useState<number>(0);

  const projectsList = isEn ? PROJECTS_EN : PROJECTS;
  const autoProjects = projectsList
    .filter((p) => p.category === 'Automatización' || p.category === 'IA')
    .slice(0, 6);

  const whatsappDirectUrl = isEn
    ? 'https://wa.me/573004435894?text=Hello%20Autonomek%2C%20I%20want%20to%20automate%20manual%20processes%20and%20connect%20my%20business%20tools.'
    : 'https://wa.me/573004435894?text=Hola%20Autonomek%2C%20quiero%20automatizar%20procesos%20manuales%20y%20conectar%20las%20herramientas%20de%20mi%20empresa.';

  const servicesHref = isEn ? `${basePrefix}/services` : `${basePrefix}/servicios`;
  const projectsHref = isEn ? `${basePrefix}/projects` : `${basePrefix}/proyectos`;

  const workflows = isEn
    ? [
        {
          num: '01',
          title: 'Two-way sync between WhatsApp, CRM & spreadsheets',
          metric: '0.3s Webhook Sync',
          desc: 'Every time a lead writes on WhatsApp or fills out a website form, their profile, commercial tags, and deal stage are created and updated automatically in your CRM and Google Sheets.',
          specs: ['HubSpot / Pipedrive / Zoho', 'Real-Time Lead Deduplication', 'Instant Advisor Alerts'],
        },
        {
          num: '02',
          title: 'Automated PDF quotes, contracts & electronic billing',
          metric: 'Zero Manual Typing',
          desc: 'When a deal closes or a payment is approved, the system automatically generates the branded PDF quote or contract, triggers the electronic invoice in your ERP, and sends it to the client.',
          specs: ['Branded PDF Generation', 'Electronic Invoicing API', 'Automatic Payment Reconciliation'],
        },
        {
          num: '03',
          title: 'Inventory, e-commerce & warehouse dispatch orchestration',
          metric: 'Multi-Channel Stock',
          desc: 'Keep stock levels unified across your website, physical branches, and WhatsApp catalog. When an order is paid, warehouse staff receive the packing slip automatically.',
          specs: ['Unified Stock Deduction', 'Low-Stock WhatsApp Alerts', 'Automated Shipping Labels'],
        },
        {
          num: '04',
          title: 'Scheduled executive digests & financial alerts on WhatsApp',
          metric: 'Daily 7:00 AM Brief',
          desc: 'Receive an automated morning report on your WhatsApp with yesterday’s closed sales, pending collections, and team response metrics without opening a single spreadsheet.',
          specs: ['Automated KPI Consolidation', 'Overdue Invoice Reminders', '24/7 Error Retry Queues'],
        },
      ]
    : [
        {
          num: '01',
          title: 'Sincronización automática entre WhatsApp, CRM y Excel',
          metric: '0.3s Tiempo Real',
          desc: 'Cada vez que un cliente escribe por WhatsApp o llena un formulario en tu web, su ficha, etiquetas comerciales y etapa de venta se crean y actualizan solas en tu CRM y hojas de cálculo.',
          specs: ['HubSpot / Pipedrive / Excel', 'Cero Contactos Duplicados', 'Alertas al Vendedor en Vivo'],
        },
        {
          num: '02',
          title: 'Generación automática de cotizaciones PDF, contratos y facturas',
          metric: 'Cero Digitación Manual',
          desc: 'Al aprobarse un pedido o pago, el sistema genera el contrato o cotización en PDF con tu logo, emite la factura electrónica en tu software contable (Siigo, Alegra, ERP) y la envía al cliente.',
          specs: ['Cotizaciones PDF al Instante', 'Conexión Siigo / Alegra / ERP', 'Conciliación de Pagos'],
        },
        {
          num: '03',
          title: 'Orquestación de inventario, pagos y órdenes de bodega',
          metric: 'Stock Unificado',
          desc: 'Descuenta unidades automáticamente en tu sitio web, catálogo de WhatsApp y bodega física tras cada compra, y envía la orden de alistamiento a logística sin intervención humana.',
          specs: ['Descuento de Stock en Vivo', 'Alertas de Inventario Mínimo', 'Guías de Despacho Automáticas'],
        },
        {
          num: '04',
          title: 'Reportes gerenciales y recordatorios de cartera por WhatsApp',
          metric: 'Resumen Diario 7:00 AM',
          desc: 'Recibe cada mañana en tu WhatsApp el consolidado de ventas del día anterior, cuentas por cobrar y rendimiento del equipo sin tener que pedirle a nadie que arme un Excel.',
          specs: ['Consolidado Financiero Diario', 'Cobro Preventivo de Cartera', 'Monitoreo Activo 24/7'],
        },
      ];

  const guarantees = isEn
    ? [
        'Official API & webhook architecture',
        'Automatic retry queues (zero data loss)',
        'Connects with your current software stack',
        'Saves 15 to 40+ hours per week',
        'Deployed in 1 to 3 weeks',
        'Real-time error alerting & support',
      ]
    : [
        'Integración por APIs y Webhooks oficiales',
        'Colas de reintento (cero pérdida de datos)',
        'Se conecta con los programas que ya usas',
        'Ahorra entre 15 y 40+ horas cada semana',
        'Implementación rápida en 1 a 3 semanas',
        'Monitoreo de estabilidad y soporte incluido',
      ];

  const faqs = isEn
    ? [
        {
          q: 'Do we have to change the software or CRM we already use?',
          a: 'No. The core purpose of process automation is to connect the tools your team already knows (WhatsApp, Google Workspace, Excel, HubSpot, Stripe, accounting ERPs) so they work together automatically.',
        },
        {
          q: 'What happens if one of our external systems goes down temporarily?',
          a: 'We build every integration with durable webhook queues and automatic retries. If your accounting software or CRM has a temporary outage, the data is safely queued and processed the second it comes back online.',
        },
        {
          q: 'How do we know which processes in our company can be automated?',
          a: 'Any task where an employee copies information from one screen and pastes it into another (creating invoices, logging leads, filling templates, sending reminders) can be automated with 100% precision.',
        },
        {
          q: 'How fast do we see a return on investment?',
          a: 'From week one of going live. Eliminating 20+ hours per week of repetitive administrative typing immediately frees your team to focus on closing sales and serving customers.',
        },
      ]
    : [
        {
          q: '¿Tenemos que cambiar los programas o el CRM que ya usamos hoy?',
          a: 'No. Precisamente el objetivo de la automatización es conectar las herramientas que tu empresa ya utiliza (WhatsApp, Excel, Google Calendar, HubSpot, Siigo, Alegra, pasarelas de pago) para que se hablen entre sí automáticamente.',
        },
        {
          q: '¿Qué pasa si alguno de los sistemas externos falla temporalmente?',
          a: 'Diseñamos cada flujo con colas de seguridad y reintentos automáticos. Si tu software contable o CRM está en mantenimiento por unos minutos, la información queda resguardada y se sincroniza apenas vuelve el servicio, sin perder un solo dato.',
        },
        {
          q: '¿Cómo saber qué procesos de mi empresa se pueden automatizar?',
          a: 'Cualquier tarea donde una persona de tu equipo tenga que copiar datos de un lugar y pegarlos en otro (pasar clientes de WhatsApp a Excel, armar cotizaciones en Word, emitir facturas una por una o enviar recordatorios) es 100% automatizable.',
        },
        {
          q: '¿Cuánto tiempo toma dejar una automatización funcionando?',
          a: 'Entre 1 y 3 semanas según la cantidad de sistemas a conectar. Hacemos todas las pruebas en un entorno seguro para no interrumpir tu operación diaria antes de activarla en vivo.',
        },
      ];

  return (
    <main className="min-h-screen w-full bg-background text-foreground selection:bg-primary selection:text-primary-ink">
      {/* ================================================================== */}
      {/* 1. HERO + FULL-WIDTH INTERACTIVE AUTOMATION PIPELINE BENTO         */}
      {/* ================================================================== */}
      <section className="relative isolate overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 border-b border-rule">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[420px] w-[820px] max-w-[120vw] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]"
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            {/* Technical breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider text-muted">
              <Link href={basePrefix || '/'} className="hover:text-foreground transition-colors">
                {isEn ? 'Home' : 'Inicio'}
              </Link>
              <span className="text-rule">/</span>
              <Link href={servicesHref} className="hover:text-foreground transition-colors">
                {isEn ? 'Services' : 'Servicios'}
              </Link>
              <span className="text-rule">/</span>
              <span className="text-primary font-medium flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                {isEn ? 'Process Automation & APIs' : 'Automatización e Integraciones'}
              </span>
            </nav>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-tight leading-[1.07] text-foreground">
              {isEn ? (
                <>
                  Connect your systems{' '}
                  <span className="text-muted font-normal">
                    so data moves without manual typing.
                  </span>
                </>
              ) : (
                <>
                  Conecta tus herramientas{' '}
                  <span className="text-muted font-normal">
                    para que los datos viajen solos sin digitar a mano.
                  </span>
                </>
              )}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted">
              {isEn
                ? 'We integrate your WhatsApp, CRM, spreadsheets, calendar, and billing software so quotes, invoices, and customer records update automatically in 0.3 seconds with zero human errors.'
                : 'Integramos tu WhatsApp, CRM, hojas de Excel, agenda y facturación para que las cotizaciones, facturas y registros de clientes se creen y actualicen solos en 0.3 segundos sin errores humanos.'}
            </p>

            <div className="mt-8 flex w-full flex-col items-stretch gap-3.5 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-ink px-7 py-3.5 text-sm sm:text-base font-semibold hover:opacity-90 transition"
              >
                {isEn ? 'Automate my processes on WhatsApp' : 'Automatizar mi operación por WhatsApp'}
              </a>
              <a
                href="#flujos-automaticos"
                className="inline-flex items-center justify-center rounded-full border border-rule bg-surface text-foreground px-7 py-3.5 text-sm sm:text-base font-semibold hover:bg-card transition"
              >
                {isEn ? 'Explore automated flows' : 'Ver flujos que automatizamos'}
              </a>
            </div>
          </div>

          {/* Interactive 12-Column Live Pipeline Orchestrator Bento right below Hero */}
          <div className="mt-14">
            <AutomationPipelineBento isEn={isEn} />
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 2. FLUJOS AUTOMATIZADOS — Interactive Canvas + Hairline Rows       */}
      {/* ================================================================== */}
      <section
        id="flujos-automaticos"
        className="scroll-mt-24 py-20 md:py-28 bg-surface/40 border-b border-rule"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {isEn ? 'Zero Copy-Pasting' : 'Cero Copiar y Pegar'}
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                {isEn
                  ? 'Four bottlenecks we eliminate from your daily operation.'
                  : 'Cuatro cuellos de botella que eliminamos de tu operación diaria.'}
              </h2>
            </div>
            <p className="text-muted text-base sm:text-lg max-w-md">
              {isEn
                ? 'Trigger a live execution on the left and inspect the 4 most requested enterprise workflows.'
                : 'Ejecuta el flujo en vivo a la izquierda y revisa las 4 automatizaciones más implementadas.'}
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Left 5 Cols: Interactive Automation MiniApp */}
            <div className="lg:col-span-5 rounded-[28px] border border-rule bg-surface p-5 sm:p-7 flex flex-col justify-between gap-6 shadow-lg shadow-black/20">
              <div className="flex items-center justify-between gap-3 border-b border-rule pb-4">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-primary">
                    {isEn ? 'LIVE WEBHOOK ENGINE' : 'MOTOR DE INTEGRACIÓN'}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-0.5">
                    {isEn ? 'Multi-App Execution' : 'Sincronización Multi-Sistema'}
                  </h3>
                </div>
                <span className="rounded-full bg-primary/15 border border-primary/25 px-3 py-1 font-mono text-xs font-semibold text-primary">
                  0.3s Sync
                </span>
              </div>

              <ServiceMiniApp id="automation" isEn={isEn} />

              <div className="grid grid-cols-3 divide-x divide-rule border-t border-rule pt-4 text-center">
                <div className="px-2">
                  <div className="font-mono text-lg sm:text-xl font-semibold text-foreground tabular-nums">
                    -85%
                  </div>
                  <div className="text-[11px] text-muted mt-0.5">
                    {isEn ? 'Manual typing' : 'Carga operativa'}
                  </div>
                </div>
                <div className="px-2">
                  <div className="font-mono text-lg sm:text-xl font-semibold text-primary tabular-nums">
                    0%
                  </div>
                  <div className="text-[11px] text-muted mt-0.5">
                    {isEn ? 'Human errors' : 'Errores digitación'}
                  </div>
                </div>
                <div className="px-2">
                  <div className="font-mono text-lg sm:text-xl font-semibold text-foreground tabular-nums">
                    24/7
                  </div>
                  <div className="text-[11px] text-muted mt-0.5">
                    {isEn ? 'Active sync' : 'Sincronización'}
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Hallmark Hairline Rows */}
            <div className="lg:col-span-7 border-t border-rule">
              {workflows.map((wf, idx) => {
                const isActive = activeFlowIndex === idx;
                return (
                  <div
                    key={wf.num}
                    onClick={() => setActiveFlowIndex(idx)}
                    className={`group border-b border-rule py-6 sm:py-7 px-4 sm:px-6 transition-colors cursor-pointer ${
                      isActive ? 'bg-surface/90' : 'hover:bg-surface/40'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6">
                      <div className="flex items-baseline gap-4">
                        <span
                          className={`font-mono text-xs font-semibold tabular-nums transition-colors ${
                            isActive ? 'text-primary' : 'text-muted group-hover:text-foreground'
                          }`}
                        >
                          /{wf.num}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                          {wf.title}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-primary shrink-0 pl-8 sm:pl-0">
                        {wf.metric}
                      </span>
                    </div>

                    <div className="mt-3 pl-8 sm:pl-9 space-y-4">
                      <p className="text-sm sm:text-base leading-relaxed text-muted">
                        {wf.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {wf.specs.map((spec) => (
                          <span
                            key={spec}
                            className="inline-flex items-center gap-1.5 rounded-full border border-rule bg-background/70 px-3 py-1 font-mono text-[11px] text-foreground"
                          >
                            <span className="h-1 w-1 rounded-full bg-primary" />
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 3. ECOSISTEMA CONECTADO — InkOrbitFeatures Interactive Diagram     */}
      {/* ================================================================== */}
      <section className="py-20 md:py-28 border-b border-rule">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <InkOrbitFeatures
            theme="dark"
            brand="AUTONOMEK"
            tag={isEn ? 'Unified API Hub' : 'Ecosistema Sincronizado'}
            title={
              isEn
                ? 'Your Entire Stack *Connected*\nin Real Time'
                : 'Todas tus Herramientas *Conectadas*\nen Tiempo Real'
            }
            collaboration={{
              title: isEn
                ? 'Instant Trigger Across Departments'
                : 'Disparadores Instantáneos entre Áreas',
              description: isEn
                ? 'When sales closes a deal on WhatsApp, billing, warehouse, and management receive the structured payload simultaneously.'
                : 'Cuando ventas cierra un pedido en WhatsApp, facturación, bodega y gerencia reciben los datos exactos al mismo segundo.',
            }}
            reports={{
              title: isEn
                ? 'Automated PDF Quotes, Invoices & Contracts'
                : 'Cotizaciones, Facturas y Contratos Solos',
              description: isEn
                ? 'Eliminate manual document drafting. Every approved order generates its PDF voucher and official invoice automatically.'
                : 'Olvídate de redactar documentos uno por uno. Cada venta aprobada genera su PDF y factura electrónica sin intervención humana.',
            }}
            integrations={{
              title: isEn ? 'Official APIs & Webhooks' : 'APIs y Webhooks Oficiales',
              description: isEn
                ? 'We bridge WhatsApp Business, HubSpot, Google Sheets, Stripe, and accounting ERPs with zero data loss.'
                : 'Unimos WhatsApp Business, CRM, Excel, Google Calendar y facturación contable sin pérdida de datos.',
              tools: isEn
                ? ['WhatsApp', 'CRM', 'Sheets', 'Billing']
                : ['WhatsApp', 'CRM', 'Excel', 'Facturas'],
            }}
            insights={{
              title: isEn ? 'Hours Saved Every Month' : 'Horas Operativas Ahorradas',
              description: isEn
                ? 'Track how automating repetitive data entry frees up dozens of hours every week for high-value commercial work.'
                : 'Observa cómo eliminar la digitación repetitiva libera decenas de horas cada semana para que tu equipo se enfoque en vender.',
              values: [18, 24, 29, 35, 42, 48, 54, 62, 69, 76, 84, 92],
              forecastFrom: 8,
            }}
            teamLabels={
              isEn
                ? [
                    'Webhook · Payment verified',
                    'CRM · Deal stage updated',
                    'ERP · Invoice #4082 emitted',
                    'Warehouse · Order dispatched',
                    'WhatsApp · Client notified',
                  ]
                : [
                    'Webhook · Pago verificado',
                    'CRM · Etapa actualizada',
                    'Contabilidad · Factura emitida',
                    'Bodega · Orden despachada',
                    'WhatsApp · Cliente notificado',
                  ]
            }
            reportPrefix={isEn ? 'SYNC #' : 'FLUJO #'}
            syncingLabel={isEn ? 'syncing · ' : 'sincronizando · '}
            connectedLabel={isEn ? '4 connected' : '4 conectados'}
            forecastLabel={isEn ? 'EFFICIENCY' : 'EFICIENCIA'}
          />
        </div>
      </section>

      {/* ================================================================== */}
      {/* 4. AUTOMATIZACIONES EN PRODUCCIÓN — Real Case Studies              */}
      {/* ================================================================== */}
      <section
        id="casos-automatizacion"
        className="scroll-mt-24 py-20 md:py-28 bg-surface/40 border-b border-rule"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {isEn ? 'Real Production Workflows' : 'Automatizaciones en Producción'}
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                {isEn
                  ? 'Real workflows saving hours in active companies.'
                  : 'Flujos automáticos que hoy ahorran horas en empresas reales.'}
              </h2>
            </div>
            <Link
              href={projectsHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <span>{isEn ? 'View all 15 projects' : 'Ver los 15 proyectos'}</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {autoProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }}
                className="group rounded-[24px] bg-surface border border-rule overflow-hidden flex flex-col justify-between cursor-pointer hover:border-primary transition-colors"
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
                      <span className="rounded-full bg-background border border-rule px-2.5 py-0.5 text-[11px] text-primary">
                        {project.category}
                      </span>
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
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {isEn ? 'Inspect workflow & results' : 'Ver arquitectura y resultados'}
                  </span>
                  {project.url ? (
                    <ExternalLink size={14} className="text-primary" />
                  ) : (
                    <ArrowUpRight size={14} className="text-primary" />
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 5. PROCESO Y RESULTADOS — Connected 4-Step Roadmap + Marquee       */}
      {/* ================================================================== */}
      <section id="proceso" className="scroll-mt-24 py-20 md:py-28 border-b border-rule">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-20">
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {isEn ? 'Integration Methodology' : 'Cómo Automatizamos tu Operación'}
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                  {isEn
                    ? 'From manual tasks to automated pipelines in 4 steps.'
                    : 'De tareas manuales a flujos automáticos en 4 pasos conectados.'}
                </h2>
              </div>
              <p className="text-muted text-base sm:text-lg max-w-md">
                {isEn
                  ? 'We map your bottlenecks, connect your APIs in a sandbox environment, and launch without interrupting your team.'
                  : 'Mapeamos tus cuellos de botella, conectamos tus sistemas en un entorno seguro y activamos sin interrumpir tu operación.'}
              </p>
            </div>

            <ProcessRoadmap isEn={isEn} />

            <div className="mt-12 rounded-[24px] border border-rule bg-surface/60 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary mb-5">
                {isEn
                  ? 'Included with every Autonomek automation pipeline'
                  : 'Lo que incluye cada Automatización con Autonomek'}
              </p>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {guarantees.map((g) => (
                  <li
                    key={g}
                    className="flex items-center gap-3 text-sm font-medium text-foreground"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check size={13} />
                    </span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-rule">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {isEn ? 'Verified Client Results' : 'Resultados Verificados'}
                </span>
                <h3 className="mt-2.5 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                  {isEn
                    ? 'Teams saving dozens of hours every single week.'
                    : 'Empresas que eliminaron el trabajo manual repetitivo.'}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-muted max-w-md">
                {isEn
                  ? 'Fewer errors, faster invoicing, and immediate operational relief.'
                  : 'Cero errores de digitación, facturación al instante y ahorro operativo medible.'}
              </p>
            </div>

            <TestimonialMarquee isEn={isEn} />
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 6. PREGUNTAS FRECUENTES — Clean 2-Column Hairline FAQ              */}
      {/* ================================================================== */}
      <section
        id="preguntas"
        className="scroll-mt-24 py-20 md:py-28 bg-surface/40 border-b border-rule"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {isEn ? 'FAQ' : 'Preguntas Frecuentes'}
            </span>
            <h2 className="mt-4 max-w-md text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              {isEn
                ? 'Answers about automating your workflows.'
                : 'Respuestas claras sobre automatización.'}
            </h2>
            <p className="mt-4 max-w-md text-base sm:text-lg leading-relaxed text-muted">
              {isEn
                ? 'Not sure if two tools you use can be connected? Ask us on WhatsApp.'
                : '¿Quieres saber si podemos conectar los programas que hoy usas? Escríbenos por WhatsApp.'}
            </p>
          </div>

          <div className="border-t border-rule">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border-b border-rule">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left text-base sm:text-lg font-medium text-foreground transition-colors hover:text-primary"
                  >
                    <span>{item.q}</span>
                    <span
                      className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-rule text-muted transition-transform duration-300 ${
                        isOpen ? 'rotate-45 border-primary text-primary' : ''
                      }`}
                    >
                      <span className="absolute h-3.5 w-px bg-current" />
                      <span className="absolute h-px w-3.5 bg-current" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-5 pr-8 text-sm sm:text-base text-muted leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 7. CONTACTO — Atmospheric Unboxed Closing CTA (Matches Home)       */}
      {/* ================================================================== */}
      <section
        id="contacto"
        className="relative isolate scroll-mt-24 overflow-hidden px-5 pb-24 pt-16 sm:px-8 md:pb-32 md:pt-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[380px] w-[680px] max-w-[120vw] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
        />
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {isEn ? 'Zero Manual Typing · 24/7 Sync' : 'Cero Digitación Manual · Sincronización 24/7'}
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground">
            {isEn
              ? 'Ready to stop copying and pasting data by hand?'
              : '¿Listo para que tu operación fluya sola sin copiar y pegar?'}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-muted">
            {isEn
              ? 'Write to us on WhatsApp and tell us what repetitive tasks take up your team’s time. We will map the automation for free.'
              : 'Escríbenos por WhatsApp, cuéntanos qué tareas repetitivas le quitan tiempo a tu equipo y diseñamos el flujo sin costo.'}
          </p>
          <div className="mt-9 flex justify-center">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-ink px-8 py-4 text-base font-semibold hover:opacity-90 transition"
            >
              {isEn ? 'Talk with us on WhatsApp — Free Diagnosis' : 'Hablar por WhatsApp — Diagnóstico Gratis'}
            </a>
          </div>
        </div>
      </section>

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
