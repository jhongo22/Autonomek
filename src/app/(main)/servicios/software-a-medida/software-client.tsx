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
import { ProcessRoadmap } from '@/components/ui/process-roadmap';
import TestimonialMarquee from '@/components/ui/marquee-01';
import { CustomSoftwareWorkbenchBento } from '@/components/ui/service-bento-workbenches';

type Region = 'co' | 'mx' | 'es' | 'us' | 'en';

export default function SoftwareClient({ region = 'co' }: { region?: Region }) {
  const isEn = region === 'us' || region === 'en';
  const basePrefix =
    region === 'en' ? '/en' : region === 'us' ? '/us' : region === 'es' ? '/es' : '';

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeArchIndex, setActiveArchIndex] = useState<number>(0);

  const projectsList = isEn ? PROJECTS_EN : PROJECTS;
  const customProjects = projectsList
    .filter((p) => p.category === 'Web' || p.category === 'Automatización')
    .slice(0, 6);

  const whatsappDirectUrl = isEn
    ? 'https://wa.me/573004435894?text=Hello%20Autonomek%2C%20I%20want%20to%20build%20a%20custom%20software%20platform%20for%20my%20business.'
    : 'https://wa.me/573004435894?text=Hola%20Autonomek%2C%20quiero%20desarrollar%20un%20software%20o%20plataforma%20a%20medida%20para%20mi%20empresa.';

  const servicesHref = isEn ? `${basePrefix}/services` : `${basePrefix}/servicios`;
  const projectsHref = isEn ? `${basePrefix}/projects` : `${basePrefix}/proyectos`;

  const architectures = isEn
    ? [
        {
          num: '01',
          title: 'Executive control panels & custom internal CRMs',
          metric: 'Real-Time Visibility',
          desc: 'Centralize sales pipelines, field staff, commissions, and financial KPIs in one single screen built around your exact commercial process.',
          specs: ['Role-Based Access Control', 'Live Financial & Sales KPIs', 'Audit Logs & Permissions'],
        },
        {
          num: '02',
          title: 'B2B/B2C client portals & self-service platforms',
          metric: '24/7 Self-Service',
          desc: 'Give your customers their own secure login to check order progress, download invoices, upload documents, or approve quotes without calling your office.',
          specs: ['Secure Client Authentication', 'Document & Contract Vault', 'Online Payment Checkout'],
        },
        {
          num: '03',
          title: 'Booking engines, fleet & multi-branch inventory systems',
          metric: 'Zero Double-Bookings',
          desc: 'Real-time reservation calendars, dynamic pricing rules, stock alerts, and warehouse dispatches synchronized across every branch or property.',
          specs: ['Dynamic Pricing Rules', 'Multi-Branch Stock Sync', 'Automated PDF Vouchers'],
        },
        {
          num: '04',
          title: '100% proprietary code with $0 per-user monthly fees',
          metric: '$0/mo Seat Licenses',
          desc: 'Stop paying $45 to $90 per employee every month to rented SaaS platforms. Your company owns the source code and database outright — add 10 or 500 users at zero extra license cost.',
          specs: ['Full IP & Source Code Ownership', 'Unlimited Team Users', 'PostgreSQL Cloud Database'],
        },
      ]
    : [
        {
          num: '01',
          title: 'Paneles de control gerencial y CRMs internos a medida',
          metric: 'Control en Tiempo Real',
          desc: 'Centraliza tus ventas, comisiones, órdenes de trabajo y métricas financieras en una sola pantalla diseñada exactamente como opera tu negocio.',
          specs: ['Permisos por Rol y Sede', 'KPIs Financieros en Vivo', 'Historial de Auditoría'],
        },
        {
          num: '02',
          title: 'Portales privados de clientes y plataformas de autogestión',
          metric: 'Autogestión 24/7',
          desc: 'Brinda a tus clientes un acceso seguro con su usuario para consultar el estado de sus pedidos, descargar certificados, subir documentos o pagar facturas sin llamar a tu oficina.',
          specs: ['Acceso Seguro por Cliente', 'Descarga de Certificados y PDF', 'Pasarela de Pagos Integrada'],
        },
        {
          num: '03',
          title: 'Motores de reservas, inventarios y logística multisede',
          metric: 'Cero Cruces de Datos',
          desc: 'Sistemas de disponibilidad en vivo con tarifas dinámicas, control de bodegas, despacho de rutas y alertas de stock mínimo sincronizadas al segundo.',
          specs: ['Tarifas por Temporada', 'Inventario Multisede', 'Comprobantes Automáticos'],
        },
        {
          num: '04',
          title: 'Código 100% propiedad de tu empresa sin cobros por usuario',
          metric: '$0 Licencias por Usuario',
          desc: 'Deja de pagar entre $30 y $90 USD mensuales por cada empleado en softwares alquilados. Tu empresa es dueña del código y la base de datos: crea 10 o 500 usuarios sin pagar mensualidades.',
          specs: ['Propiedad Intelectual 100% Tuya', 'Usuarios y Sedes Ilimitados', 'Base de Datos PostgreSQL'],
        },
      ];

  const comparisonRows = isEn
    ? [
        {
          dimension: 'Monthly cost as your team grows (15–50 users)',
          excel: '$0 (high cost in human errors)',
          rentedSaas: '$9,000 – $28,000 USD / year in seats',
          autonomek: '$0 per-seat licensing forever',
        },
        {
          dimension: 'Adaptation to your business rules',
          excel: 'Fragile formulas that break easily',
          rentedSaas: 'Rigid (forces you to change how you work)',
          autonomek: '100% tailored to your exact workflow',
        },
        {
          dimension: 'Data security & role permissions',
          excel: 'Anyone can copy or delete rows',
          rentedSaas: 'Data locked on third-party servers',
          autonomek: 'Granular roles + your own cloud database',
        },
        {
          dimension: 'Connection with WhatsApp & local billing',
          excel: '100% manual copy-pasting',
          rentedSaas: 'Expensive add-ons or unsupported',
          autonomek: 'Native API integration included',
        },
        {
          dimension: 'Company valuation & asset ownership',
          excel: 'No technological asset',
          rentedSaas: 'Rented expense (you own nothing)',
          autonomek: 'Proprietary asset owned by your company',
        },
      ]
    : [
        {
          dimension: 'Costo anual al crecer tu equipo (15 a 50 usuarios)',
          excel: '$0 (alto costo en errores humanos)',
          rentedSaas: '$9,000 – $28,000 USD / año en licencias',
          autonomek: '$0 en licencias por usuario para siempre',
        },
        {
          dimension: 'Adaptación a las reglas de tu negocio',
          excel: 'Fórmulas frágiles que se dañan fácil',
          rentedSaas: 'Rígido (te obliga a adaptarte a ellos)',
          autonomek: '100% diseñado a la medida de tu operación',
        },
        {
          dimension: 'Seguridad de datos y permisos por cargo',
          excel: 'Cualquiera puede borrar o copiar todo',
          rentedSaas: 'Datos cautivos en plataforma ajena',
          autonomek: 'Roles por empleado + base de datos propia',
        },
        {
          dimension: 'Conexión con WhatsApp y facturación local',
          excel: '100% digitación manual',
          rentedSaas: 'Cobros extra o sin soporte local',
          autonomek: 'Integración nativa incluida desde el día 1',
        },
        {
          dimension: 'Propiedad intelectual y activo empresarial',
          excel: 'Sin activo tecnológico',
          rentedSaas: 'Gasto perpetuo (nunca eres dueño)',
          autonomek: 'Activo propio que valoriza tu empresa',
        },
      ];

  const guarantees = isEn
    ? [
        '100% source code & database ownership',
        'Unlimited users with $0 seat fees',
        'Bi-weekly functional deliveries',
        'Role-based security & audit logs',
        'Mobile, tablet & desktop responsive',
        'Team training & post-launch warranty',
      ]
    : [
        '100% propiedad del código y base de datos',
        'Usuarios ilimitados ($0 cobro por licencia)',
        'Entregas funcionales cada 2 semanas',
        'Seguridad por roles y registro de auditoría',
        'Funciona en computador, tablet y celular',
        'Capacitación a tu equipo y garantía incluida',
      ];

  const faqs = isEn
    ? [
        {
          q: 'Do we really pay $0 in monthly per-user licensing fees?',
          a: 'Yes. Commercial SaaS platforms charge you for every user seat every month. When we build custom software for you, the platform is 100% your property. You can create 5, 50, or 500 user accounts for your employees and clients without paying per-seat fees.',
        },
        {
          q: 'How do you prevent software projects from taking 8 months?',
          a: 'We work in focused 2-week sprints prioritizing the core operational module first (MVP). Within the first 3 to 6 weeks, your team is already operating the core system while we add secondary modules.',
        },
        {
          q: 'Can you migrate the data we currently have in Excel or another software?',
          a: 'Yes. We clean, structure, and import your historical spreadsheets or legacy database records so your team starts with all existing clients, products, and history intact.',
        },
        {
          q: 'Does the platform work on phones and tablets for staff in the field?',
          a: 'Yes. Every system we build is a modern responsive web application (and can be installed as a PWA on phones and tablets), allowing field technicians, drivers, or advisors to update statuses from anywhere.',
        },
        {
          q: 'What happens if we want to add new modules next year?',
          a: 'Because the architecture is modular and documented (Next.js, TypeScript, PostgreSQL), we can add new modules, reports, or AI capabilities at any time without rebuilding from scratch.',
        },
      ]
    : [
        {
          q: '¿De verdad no tenemos que pagar mensualidades por cada usuario?',
          a: 'Así es. Los softwares comerciales te cobran entre $25 y $90 USD al mes por cada empleado que necesita entrar. Con nosotros el sistema es 100% propiedad de tu empresa: puedes crear 5, 50 o 500 usuarios para tu equipo y tus clientes sin pagar licencias por asiento.',
        },
        {
          q: '¿Cómo evitan que el desarrollo se demore muchos meses?',
          a: 'Trabajamos por entregas funcionales cada 2 semanas priorizando el núcleo operativo de tu negocio. Entre la semana 3 y 6 tu equipo ya está usando el sistema en producción mientras sumamos módulos complementarios.',
        },
        {
          q: '¿Pueden migrar la información que hoy tenemos en Excel o en otro programa?',
          a: 'Sí. Nos encargamos de limpiar, estructurar y migrar tu base de datos actual de clientes, inventario o historial desde Excel u otro software para que arranques sin perder un solo dato.',
        },
        {
          q: '¿El sistema se puede usar desde celulares y tablets fuera de la oficina?',
          a: 'Sí. Desarrollamos aplicaciones web modernas optimizadas tanto para computador de escritorio como para celulares y tablets, ideales para personal en planta, bodega o asesores en calle.',
        },
        {
          q: '¿Qué pasa si más adelante queremos agregar nuevas funciones?',
          a: 'Tu plataforma queda construida con arquitectura modular limpia (Next.js, TypeScript y PostgreSQL). Podemos agregar nuevos módulos, reportes o agentes de IA cuando tu operación crezca.',
        },
      ];

  return (
    <main className="min-h-screen w-full bg-background text-foreground selection:bg-primary selection:text-primary-ink">
      {/* ================================================================== */}
      {/* 1. HERO + FULL-WIDTH INTERACTIVE CUSTOM SOFTWARE WORKBENCH BENTO   */}
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
                {isEn ? 'Custom Business Software' : 'Software y Plataformas a Medida'}
              </span>
            </nav>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-tight leading-[1.07] text-foreground">
              {isEn ? (
                <>
                  Software built around your operation{' '}
                  <span className="text-muted font-normal">
                    with $0 monthly per-user fees.
                  </span>
                </>
              ) : (
                <>
                  Software hecho a la medida de tu operación{' '}
                  <span className="text-muted font-normal">
                    y sin pagar licencias por usuario.
                  </span>
                </>
              )}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted">
              {isEn
                ? 'Replace fragile spreadsheets and expensive rented SaaS platforms. We engineer custom control panels, client portals, booking engines, and internal systems that belong 100% to your company.'
                : 'Reemplaza las hojas de Excel desconectadas y los softwares alquilados que te cobran por cada empleado. Desarrollamos paneles de control, portales de clientes y sistemas internos 100% propiedad de tu empresa.'}
            </p>

            <div className="mt-8 flex w-full flex-col items-stretch gap-3.5 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-ink px-7 py-3.5 text-sm sm:text-base font-semibold hover:opacity-90 transition"
              >
                {isEn ? 'Scope my platform on WhatsApp' : 'Cotizar mi software por WhatsApp'}
              </a>
              <a
                href="#arquitectura-software"
                className="inline-flex items-center justify-center rounded-full border border-rule bg-surface text-foreground px-7 py-3.5 text-sm sm:text-base font-semibold hover:bg-card transition"
              >
                {isEn ? 'Explore modules & ROI' : 'Ver módulos y ahorro en licencias'}
              </a>
            </div>
          </div>

          {/* Interactive 12-Column Custom Software Workbench + License Savings Calculator */}
          <div className="mt-14">
            <CustomSoftwareWorkbenchBento isEn={isEn} />
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 2. MÓDULOS Y ARQUITECTURA — Interactive Panel + Hairline Rows      */}
      {/* ================================================================== */}
      <section
        id="arquitectura-software"
        className="scroll-mt-24 py-20 md:py-28 bg-surface/40 border-b border-rule"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {isEn ? 'Proprietary Architecture' : 'Arquitectura Propia'}
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                {isEn
                  ? 'Systems that adapt to your company, not the other way around.'
                  : 'Sistemas que se adaptan a tu empresa, no al revés.'}
              </h2>
            </div>
            <p className="text-muted text-base sm:text-lg max-w-md">
              {isEn
                ? 'Interact with the control panel preview on the left and review the 4 types of platforms we build.'
                : 'Interactúa con el panel de control a la izquierda y explora las 4 arquitecturas que desarrollamos.'}
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Left 5 Cols: Interactive Software MiniApp */}
            <div className="lg:col-span-5 rounded-[28px] border border-rule bg-surface p-5 sm:p-7 flex flex-col justify-between gap-6 shadow-lg shadow-black/20">
              <div className="flex items-center justify-between gap-3 border-b border-rule pb-4">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-primary">
                    {isEn ? 'LIVE CONTROL PANEL' : 'PANEL OPERATIVO EN VIVO'}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-0.5">
                    {isEn ? 'Executive Operations View' : 'Vista Ejecutiva de Operación'}
                  </h3>
                </div>
                <span className="rounded-full bg-primary/15 border border-primary/25 px-3 py-1 font-mono text-xs font-semibold text-primary">
                  100% IP
                </span>
              </div>

              <ServiceMiniApp id="software" isEn={isEn} />

              <div className="grid grid-cols-3 divide-x divide-rule border-t border-rule pt-4 text-center">
                <div className="px-2">
                  <div className="font-mono text-lg sm:text-xl font-semibold text-primary tabular-nums">
                    $0/mo
                  </div>
                  <div className="text-[11px] text-muted mt-0.5">
                    {isEn ? 'Per-seat fee' : 'Licencia/usuario'}
                  </div>
                </div>
                <div className="px-2">
                  <div className="font-mono text-lg sm:text-xl font-semibold text-foreground tabular-nums">
                    ∞
                  </div>
                  <div className="text-[11px] text-muted mt-0.5">
                    {isEn ? 'Users & roles' : 'Usuarios y roles'}
                  </div>
                </div>
                <div className="px-2">
                  <div className="font-mono text-lg sm:text-xl font-semibold text-foreground tabular-nums">
                    100%
                  </div>
                  <div className="text-[11px] text-muted mt-0.5">
                    {isEn ? 'Your code' : 'Código tuyo'}
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Hallmark Hairline Rows */}
            <div className="lg:col-span-7 border-t border-rule">
              {architectures.map((arch, idx) => {
                const isActive = activeArchIndex === idx;
                return (
                  <div
                    key={arch.num}
                    onClick={() => setActiveArchIndex(idx)}
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
                          /{arch.num}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                          {arch.title}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-primary shrink-0 pl-8 sm:pl-0">
                        {arch.metric}
                      </span>
                    </div>

                    <div className="mt-3 pl-8 sm:pl-9 space-y-4">
                      <p className="text-sm sm:text-base leading-relaxed text-muted">
                        {arch.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {arch.specs.map((spec) => (
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
      {/* 3. TABLA COMPARATIVA — Full-Width Hairline ROI & Ownership Table   */}
      {/* ================================================================== */}
      <section className="py-20 md:py-28 border-b border-rule">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {isEn ? 'Financial & Operational Comparison' : 'Comparativa Financiera y Operativa'}
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                {isEn
                  ? 'Spreadsheets vs. Rented SaaS vs. Your Own Platform.'
                  : 'Excel vs. SaaS Alquilado vs. Tu Propia Plataforma.'}
              </h2>
            </div>
            <p className="text-muted text-base sm:text-lg max-w-md">
              {isEn
                ? 'Why growing teams stop paying recurring per-seat taxes and invest in their own software asset.'
                : 'Por qué las empresas en crecimiento dejan de pagar impuestos mensuales por usuario y construyen su propio activo.'}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="border-b border-rule-strong text-[11px] font-mono uppercase tracking-[0.14em] text-muted">
                  <th className="py-4 pr-6 font-semibold w-[30%]">
                    {isEn ? 'Evaluation Criterion' : 'Criterio de Evaluación'}
                  </th>
                  <th className="py-4 px-6 font-semibold w-[22%]">
                    {isEn ? 'Spreadsheets (Excel)' : 'Hojas de Excel'}
                  </th>
                  <th className="py-4 px-6 font-semibold w-[24%]">
                    {isEn ? 'Rented Per-Seat SaaS' : 'SaaS Alquilado por Usuario'}
                  </th>
                  <th className="py-4 pl-6 font-semibold text-primary w-[24%]">
                    {isEn ? 'Autonomek Custom Platform' : 'Plataforma Propia Autonomek'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rule text-sm sm:text-base">
                {comparisonRows.map((row) => (
                  <tr key={row.dimension} className="hover:bg-surface/40 transition-colors">
                    <td className="py-5 pr-6 font-medium text-foreground">
                      {row.dimension}
                    </td>
                    <td className="py-5 px-6 text-muted font-mono text-xs sm:text-sm tabular-nums">
                      {row.excel}
                    </td>
                    <td className="py-5 px-6 text-muted font-mono text-xs sm:text-sm tabular-nums">
                      {row.rentedSaas}
                    </td>
                    <td className="py-5 pl-6 font-semibold text-foreground">
                      <span className="inline-flex items-center gap-2 text-primary font-mono text-xs sm:text-sm tabular-nums">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {row.autonomek}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 4. PLATAFORMAS EN PRODUCCIÓN — Real Custom Systems Built           */}
      {/* ================================================================== */}
      <section
        id="casos-software"
        className="scroll-mt-24 py-20 md:py-28 bg-surface/40 border-b border-rule"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {isEn ? 'Platforms in Production' : 'Sistemas en Producción'}
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                {isEn
                  ? 'Platforms, booking engines, and systems built by Autonomek.'
                  : 'Plataformas, sistemas de reservas y paneles creados por nosotros.'}
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
            {customProjects.map((project) => (
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
                    {isEn ? 'Inspect platform details' : 'Ver detalles de la plataforma'}
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
                  {isEn ? 'Staged Engineering' : 'Desarrollo por Etapas'}
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                  {isEn
                    ? 'How we build your custom software in 4 connected steps.'
                    : 'Cómo construimos tu plataforma en 4 pasos conectados.'}
                </h2>
              </div>
              <p className="text-muted text-base sm:text-lg max-w-md">
                {isEn
                  ? 'You test functional previews every two weeks with a closed budget and direct engineering support.'
                  : 'Pruebas avances funcionales cada dos semanas con presupuesto cerrado y trato directo con ingeniería.'}
              </p>
            </div>

            <ProcessRoadmap isEn={isEn} />

            <div className="mt-12 rounded-[24px] border border-rule bg-surface/60 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary mb-5">
                {isEn
                  ? 'Included with every Autonomek custom software build'
                  : 'Lo que incluye cada desarrollo de Software con Autonomek'}
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
                    ? 'Companies running their daily operations on our software.'
                    : 'Empresas que hoy operan con plataformas desarrolladas por nosotros.'}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-muted max-w-md">
                {isEn
                  ? 'Order, speed, and zero recurring per-seat license costs.'
                  : 'Orden operativo, rapidez y cero costos mensuales por licencias de usuario.'}
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
                ? 'Clear answers about custom software.'
                : 'Respuestas claras sobre software a medida.'}
            </h2>
            <p className="mt-4 max-w-md text-base sm:text-lg leading-relaxed text-muted">
              {isEn
                ? 'Have a workflow in Excel you want to turn into a web platform? Message us on WhatsApp.'
                : '¿Tienes un proceso en Excel que quieres convertir en plataforma web? Escríbenos por WhatsApp.'}
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
            {isEn ? '100% Owned by You · $0 Per-Seat Fees' : '100% Propiedad Tuya · $0 Licencias por Usuario'}
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground">
            {isEn
              ? 'Ready to centralize your operation in your own platform?'
              : '¿Listo para centralizar tu empresa en tu propia plataforma?'}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-muted">
            {isEn
              ? 'Write to us on WhatsApp and receive a free technical architecture session and fixed-price proposal.'
              : 'Escríbenos por WhatsApp y recibe una sesión de diagnóstico sin costo con el mapa de módulos y presupuesto cerrado.'}
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
