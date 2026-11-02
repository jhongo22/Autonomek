'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  ArrowUpRight,
  MessageSquare,
  Globe,
  Workflow,
  LayoutDashboard,
} from 'lucide-react';
import { ServiceMiniApp } from '@/components/ui/service-mini-apps';
import InkOrbitFeatures from '@/components/ui/ink-orbit-features';
import { ProcessRoadmap } from '@/components/ui/process-roadmap';
import TestimonialMarquee from '@/components/ui/marquee-01';

type Region = 'co' | 'mx' | 'es' | 'us' | 'en';

export default function ServiciosClient({ region = 'co' }: { region?: Region }) {
  const isEn = region === 'us' || region === 'en';
  const basePrefix =
    region === 'en' ? '/en' : region === 'us' ? '/us' : region === 'es' ? '/es' : '';

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const whatsappDirectUrl = isEn
    ? 'https://wa.me/573004435894?text=Hello%20Autonomek%2C%20I%20would%20like%20to%20talk%20about%20a%20website%2C%20WhatsApp%20AI%20agent%2C%20or%20custom%20software%20project.'
    : 'https://wa.me/573004435894?text=Hola%20Autonomek%2C%20quiero%20conversar%20sobre%20un%20proyecto%20de%20sitio%20web%2C%20agente%20de%20IA%20en%20WhatsApp%20o%20software%20a%20medida.';

  const services = isEn
    ? [
        {
          id: 'agents',
          badge: '24/7 Sales & Booking',
          title: 'WhatsApp AI Sales Assistants',
          desc: 'Your virtual advisor on WhatsApp that replies in 1 second day and night. It answers questions using your catalog, listens to voice notes, verifies payment receipts, and schedules appointments in your calendar.',
          bullets: [
            'Instant 1-second replies 24/7 on WhatsApp and Instagram',
            'Understands text, voice notes, and payment receipts',
            'Automatic appointment booking in Google Calendar or CRM',
            'Transfers qualified buyers to your human team with a summary',
          ],
          href: `${basePrefix}/services/ai-agents`,
          cta: 'Explore WhatsApp AI Agents',
          icon: MessageSquare,
          highlight: '1.1s reply · 24/7',
        },
        {
          id: 'web',
          badge: 'Google & AI Search #1',
          title: 'High-Converting Websites',
          desc: 'Fast, clear websites built to turn visitors into clients. Designed and coded from scratch to load in under a second and appear first on Google and AI search engines like ChatGPT.',
          bullets: [
            'Corporate websites, catalogs, and high-converting landing pages',
            'Sub-second load speed (0.6s) that retains visitors',
            'Technical SEO structured for Google, ChatGPT, and Perplexity',
            'Direct WhatsApp conversion funnels ready to close sales',
          ],
          href: `${basePrefix}/services/high-performance-websites`,
          cta: 'Explore Websites & SEO',
          icon: Globe,
          highlight: '0.6s load · 98/100 SEO',
        },
        {
          id: 'software',
          badge: '100% Owned by You',
          title: 'Custom Business Software',
          desc: 'Web platforms, control panels, and internal systems built around how your business actually runs, without rigid templates or recurring monthly per-user licensing fees.',
          bullets: [
            'Custom web applications and executive control panels',
            'Client portals, real-time booking engines, and inventory control',
            'Role-based access and real-time business analytics',
            '100% your property with $0 monthly per-seat fees',
          ],
          href: `${basePrefix}/services/custom-software`,
          cta: 'Explore Custom Software',
          icon: LayoutDashboard,
          highlight: '$0 monthly license fees',
        },
        {
          id: 'automation',
          badge: 'Zero Manual Typing',
          title: 'Process Automation & Integrations',
          desc: 'We connect your CRM, WhatsApp, spreadsheets, and billing software so data moves automatically across your company without repetitive manual copy-pasting.',
          bullets: [
            'Direct connection between WhatsApp, CRM, Excel, and billing',
            'Automatic generation of PDF quotes, contracts, and invoices',
            'Real-time synchronization of calendars, payments, and stock',
            'Saves hours of administrative work every single week',
          ],
          href: `${basePrefix}/services/process-automation`,
          cta: 'Explore Process Automation',
          icon: Workflow,
          highlight: 'Zero manual errors',
        },
      ]
    : [
        {
          id: 'agents',
          badge: 'Ventas y Citas 24/7',
          title: 'Agentes de IA en WhatsApp',
          desc: 'Tu asesor comercial virtual que responde en 1 segundo día y noche. Resuelve dudas con tu catálogo, escucha notas de voz, valida comprobantes de pago y agenda citas en tu calendario.',
          bullets: [
            'Atención inmediata 24/7 en WhatsApp e Instagram',
            'Comprende texto, audios de voz y comprobantes de pago',
            'Agendamiento automático de citas en Google Calendar o CRM',
            'Transfiere clientes listos para comprar a tu equipo humano',
          ],
          href: `${basePrefix}/servicios/agentes-inteligencia-artificial`,
          cta: 'Explorar Agentes de IA en WhatsApp',
          icon: MessageSquare,
          highlight: 'Respuesta en 1 seg · 24/7',
        },
        {
          id: 'web',
          badge: 'Posicionamiento Google e IA',
          title: 'Sitios Web de Alto Rendimiento',
          desc: 'Páginas web rápidas, claras y diseñadas para convertir visitas en clientes. Desarrolladas a medida para abrir en menos de un segundo y aparecer primero en Google y ChatGPT.',
          bullets: [
            'Sitios corporativos, catálogos y páginas de alta conversión',
            'Carga instantánea (0.6s) para no perder visitantes',
            'SEO técnico optimizado para liderar en Google y ChatGPT',
            'Embudos de contacto directo a WhatsApp listos para cotizar',
          ],
          href: `${basePrefix}/servicios/paginas-web-alto-rendimiento`,
          cta: 'Explorar Sitios Web y SEO',
          icon: Globe,
          highlight: 'Carga 0.6s · 98/100 SEO',
        },
        {
          id: 'software',
          badge: '100% Propiedad de tu Empresa',
          title: 'Software y Plataformas a Medida',
          desc: 'Sistemas web, paneles de control y portales internos construidos alrededor de cómo trabaja tu equipo, sin depender de plantillas rígidas ni pagar mensualidades por cada usuario.',
          bullets: [
            'Aplicaciones web, CRMs propios y paneles de control',
            'Portales de clientes, motores de reservas e inventarios en vivo',
            'Reportes claros y métricas de tu negocio en tiempo real',
            'Código 100% tuyo sin cobros mensuales por licencias de usuario',
          ],
          href: `${basePrefix}/servicios/software-a-medida`,
          cta: 'Explorar Software a Medida',
          icon: LayoutDashboard,
          highlight: '$0 licencias mensuales',
        },
        {
          id: 'automation',
          badge: 'Cero Digitación Manual',
          title: 'Automatización e Integraciones',
          desc: 'Conectamos tus herramientas (WhatsApp, facturación, CRM, Excel y agenda) para que la información viaje sola entre áreas y tu equipo deje de perder horas copiando y pegando datos.',
          bullets: [
            'Conexión automática entre WhatsApp, CRM, Excel y contabilidad',
            'Creación y envío automático de cotizaciones, contratos y facturas',
            'Sincronización de inventarios, pagos y agendas en tiempo real',
            'Ahorro inmediato de horas operativas cada semana',
          ],
          href: `${basePrefix}/servicios/automatizacion-de-procesos`,
          cta: 'Explorar Automatización de Procesos',
          icon: Workflow,
          highlight: 'Sin trabajo repetitivo',
        },
      ];

  const decisionRows = isEn
    ? [
        {
          need: 'We lose sales because we take too long to reply on WhatsApp or cannot answer at night.',
          solution: 'WhatsApp AI Sales Agent 24/7',
          timeline: '2 – 3 weeks',
          href: `${basePrefix}/services/ai-agents`,
        },
        {
          need: 'Our website is slow, looks outdated, or does not appear on Google and ChatGPT.',
          solution: 'High-Performance Website (Next.js + GEO)',
          timeline: '2 – 4 weeks',
          href: `${basePrefix}/services/high-performance-websites`,
        },
        {
          need: 'We run our company on fragile spreadsheets or pay too much for rented per-seat software.',
          solution: 'Custom Business Software & Portals',
          timeline: 'Staged sprints',
          href: `${basePrefix}/services/custom-software`,
        },
        {
          need: 'Our team wastes hours copying data between WhatsApp, Excel, CRM, and billing.',
          solution: 'API & Process Automation',
          timeline: '1 – 3 weeks',
          href: `${basePrefix}/services/process-automation`,
        },
      ]
    : [
        {
          need: 'Perdemos clientes por demorarnos en responder WhatsApp o no atender fuera de horario.',
          solution: 'Agente de IA en WhatsApp 24/7',
          timeline: '2 – 3 semanas',
          href: `${basePrefix}/servicios/agentes-inteligencia-artificial`,
        },
        {
          need: 'Nuestra web es lenta, no transmite autoridad o no aparece primero en Google y ChatGPT.',
          solution: 'Sitio Web de Alto Rendimiento (Next.js + GEO)',
          timeline: '2 – 4 semanas',
          href: `${basePrefix}/servicios/paginas-web-alto-rendimiento`,
        },
        {
          need: 'Operamos en hojas de Excel sueltas o pagamos demasiado en licencias por usuario.',
          solution: 'Software y Plataformas a Medida',
          timeline: 'Sprints quincenales',
          href: `${basePrefix}/servicios/software-a-medida`,
        },
        {
          need: 'Mi equipo pierde horas copiando datos a mano entre WhatsApp, Excel, CRM y facturación.',
          solution: 'Automatización de Procesos e Integraciones',
          timeline: '1 – 3 semanas',
          href: `${basePrefix}/servicios/automatizacion-de-procesos`,
        },
      ];

  const guarantees = isEn
    ? [
        'Closed scope & fixed pricing',
        'Direct communication on WhatsApp',
        'Fast delivery in 2 to 4 weeks',
        'Team training & onboarding',
        'Post-launch warranty included',
        '100% ownership of your code & data',
      ]
    : [
        'Alcance y presupuesto cerrado',
        'Trato directo por WhatsApp',
        'Entregas rápidas en 2 a 4 semanas',
        'Capacitación para tu equipo',
        'Garantía y soporte postlanzamiento',
        'Propiedad total de tu plataforma',
      ];

  const faqs = isEn
    ? [
        {
          q: 'Can we start with one service and connect the others later?',
          a: 'Yes. Many clients start with a high-converting website or a 24/7 WhatsApp AI agent, and once sales increase, we connect their CRM or build their custom internal platform.',
        },
        {
          q: 'How do I know which of the 4 services my business needs first?',
          a: 'In a short, free diagnosis call or WhatsApp chat, we review where your main bottleneck is today (attracting leads, replying fast on WhatsApp, or organizing internal operations) and recommend the highest-ROI starting point.',
        },
        {
          q: 'Do you work with fixed prices and closed timelines?',
          a: 'Always. Before writing a single line of code, you receive a clear scope document with every deliverable, milestone date, and a fixed budget without surprise fees.',
        },
        {
          q: 'Do you provide support after the project launches?',
          a: 'Yes. Every project includes team training, documentation, post-launch warranty, and direct engineering support on WhatsApp.',
        },
      ]
    : [
        {
          q: '¿Podemos empezar con una sola solución y conectar las demás después?',
          a: 'Sí. Muchas empresas comienzan lanzando su Sitio Web de Alto Rendimiento o su Agente de IA en WhatsApp, y a medida que crecen sus ventas integramos sus sistemas internos o su software a medida.',
        },
        {
          q: '¿Cómo saber por cuál de los 4 servicios debería empezar mi empresa?',
          a: 'En un diagnóstico gratuito por WhatsApp analizamos dónde está tu principal cuello de botella hoy (captar más clientes en Google, responder rápido en WhatsApp o eliminar el desorden operativo) y te recomendamos el paso de mayor retorno.',
        },
        {
          q: '¿Trabajan con presupuesto cerrado y fechas de entrega fijas?',
          a: 'Siempre. Antes de iniciar te entregamos una propuesta clara con el alcance exacto, cronograma de entregas y precio fijo sin costos ocultos.',
        },
        {
          q: '¿Dan acompañamiento y soporte después de entregar el proyecto?',
          a: 'Sí. Todos nuestros desarrollos incluyen capacitación para tu equipo, garantía de funcionamiento y soporte directo por WhatsApp.',
        },
      ];

  return (
    <main className="min-h-screen w-full bg-background text-foreground selection:bg-primary selection:text-primary-ink">
      {/* ================================================================== */}
      {/* 1. HERO + 4 INTERACTIVE SOLUTIONS                                  */}
      {/* ================================================================== */}
      <section className="relative isolate overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 border-b border-rule">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[420px] w-[820px] max-w-[120vw] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]"
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="mb-6 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span>
                {isEn
                  ? 'Engineering Solutions · Staged Delivery'
                  : 'Soluciones de Ingeniería · Entrega por Etapas'}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-tight leading-[1.07] text-foreground">
              {isEn ? (
                <>
                  Four technological pillars{' '}
                  <span className="text-muted font-normal">
                    to attract clients and automate your company.
                  </span>
                </>
              ) : (
                <>
                  Cuatro pilares tecnológicos{' '}
                  <span className="text-muted font-normal">
                    para atraer clientes y automatizar tu empresa.
                  </span>
                </>
              )}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted">
              {isEn
                ? 'Test each interactive module below and enter the solution your business needs today — or connect all four into one unified ecosystem.'
                : 'Prueba cada módulo interactivo a continuación y entra a la solución que tu negocio necesita hoy, o conecta las cuatro en un mismo sistema.'}
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {services.map((srv) => {
              const IconComponent = srv.icon;
              return (
                <article
                  key={srv.id}
                  className="group rounded-[24px] sm:rounded-[28px] border border-rule bg-surface p-3.5 sm:p-7 md:p-8 flex flex-col justify-between gap-5 sm:gap-7 hover:border-rule-strong transition-colors shadow-lg shadow-black/20"
                >
                  <div className="flex flex-1 flex-col gap-7">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 border border-primary/25 px-3.5 py-1 text-xs font-semibold text-primary">
                          <IconComponent size={14} />
                          {srv.badge}
                        </span>
                        <span className="font-mono text-xs text-muted">{srv.highlight}</span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
                        {srv.title}
                      </h2>

                      <p className="text-sm sm:text-base leading-relaxed text-muted">
                        {srv.desc}
                      </p>

                      <ul className="grid gap-3 pt-1">
                        {srv.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-sm text-foreground"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                              <Check size={13} />
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <ServiceMiniApp id={srv.id} isEn={isEn} />
                    </div>
                  </div>

                  <div className="pt-5 border-t border-rule flex items-center justify-between">
                    <Link
                      href={srv.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                    >
                      <span>{srv.cta}</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 2. MATRIZ DE DECISIÓN — Full-Width Hairline Diagnostic Table       */}
      {/* ================================================================== */}
      <section className="py-20 md:py-28 bg-surface/40 border-b border-rule">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {isEn ? 'Quick Diagnostic Guide' : 'Guía Rápida de Elección'}
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                {isEn
                  ? 'Which solution should you implement first?'
                  : '¿Qué solución necesita tu empresa primero?'}
              </h2>
            </div>
            <p className="text-muted text-base sm:text-lg max-w-md">
              {isEn
                ? 'Identify your main operational bottleneck below to go directly to the recommended engineering architecture.'
                : 'Identifica tu principal cuello de botella hoy para ir directo a la solución recomendada.'}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="border-b border-rule-strong text-[11px] font-mono uppercase tracking-[0.14em] text-muted">
                  <th className="py-4 pr-6 font-semibold w-[44%]">
                    {isEn ? 'Current Bottleneck in Your Business' : 'Situación Actual en tu Negocio'}
                  </th>
                  <th className="py-4 px-6 font-semibold w-[30%]">
                    {isEn ? 'Recommended Solution' : 'Solución Recomendada'}
                  </th>
                  <th className="py-4 px-6 font-semibold w-[14%]">
                    {isEn ? 'Timeline' : 'Entrega'}
                  </th>
                  <th className="py-4 pl-6 font-semibold text-right w-[12%]">
                    {isEn ? 'Details' : 'Detalle'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rule text-sm sm:text-base">
                {decisionRows.map((row) => (
                  <tr key={row.solution} className="hover:bg-surface/60 transition-colors">
                    <td className="py-5 pr-6 text-foreground">{row.need}</td>
                    <td className="py-5 px-6 font-semibold text-primary">{row.solution}</td>
                    <td className="py-5 px-6 font-mono text-xs sm:text-sm text-muted tabular-nums">
                      {row.timeline}
                    </td>
                    <td className="py-5 pl-6 text-right">
                      <Link
                        href={row.href}
                        className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        <span>{isEn ? 'Open' : 'Ver'}</span>
                        <ArrowUpRight size={15} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 3. ECOSISTEMA CONECTADO — InkOrbitFeatures                         */}
      {/* ================================================================== */}
      <section className="py-20 md:py-28 border-b border-rule">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <InkOrbitFeatures
            theme="dark"
            brand="AUTONOMEK"
            tag={isEn ? 'Connected Workflows' : 'Flujos Conectados'}
            title={
              isEn
                ? 'How *Autonomek* Connects\nYour Entire Operation'
                : 'Cómo se *Conecta* Todo\nen tu Negocio'
            }
            collaboration={{
              title: isEn
                ? 'Clients & Team in Real Time'
                : 'Clientes y Equipo en Tiempo Real',
              description: isEn
                ? 'Messages from WhatsApp, website leads, and your sales team stay aligned in one central hub without losing a single inquiry.'
                : 'Las consultas de WhatsApp, visitas de tu web y tu equipo comercial fluyen por un mismo núcleo sin perder ningún cliente.',
            }}
            reports={{
              title: isEn
                ? 'Auto-Generated Quotes, Bookings & Invoices'
                : 'Cotizaciones, Citas y Facturas Automáticas',
              description: isEn
                ? 'Every qualified conversation automatically generates calendar bookings, PDF quotes, and clean reports with zero manual typing.'
                : 'Cada conversación calificada agenda citas en tu calendario, crea cotizaciones PDF y actualiza tus reportes sin digitar a mano.',
            }}
            integrations={{
              title: isEn ? 'Unified Integrations Hub' : 'Hub de Integraciones',
              description: isEn
                ? 'We connect the tools you already use — WhatsApp, CRM, Google Calendar, and Billing — so data stays synced 24/7.'
                : 'Conectamos las herramientas que ya usas — WhatsApp, CRM, Google Calendar y Facturación — para que todo se sincronice solo.',
              tools: isEn
                ? ['WhatsApp', 'CRM', 'Calendar', 'Billing']
                : ['WhatsApp', 'CRM', 'Agenda', 'Facturas'],
            }}
            insights={{
              title: isEn ? 'Predictable Sales Growth' : 'Crecimiento Comercial Medible',
              description: isEn
                ? 'Track how instant 1-second replies and Google/AI SEO multiply your booked appointments and monthly sales.'
                : 'Visualiza semana a semana cómo la atención en 1 segundo y el posicionamiento en Google e IA multiplican tus ventas.',
              values: [24, 28, 27, 34, 33, 41, 40, 48, 47, 56, 63, 72],
              forecastFrom: 8,
            }}
            teamLabels={
              isEn
                ? [
                    'Client · asking on WhatsApp',
                    'Sofia · checking catalog',
                    'Mateo · booking meeting',
                    'Carolina · quote sent',
                    'Advisor · notified',
                  ]
                : [
                    'Cliente · consulta en WhatsApp',
                    'Sofía · revisando catálogo',
                    'Mateo · agendando cita',
                    'Carolina · cotización lista',
                    'Asesor · notificado',
                  ]
            }
            reportPrefix={isEn ? 'ORDER #' : 'ORDEN #'}
            syncingLabel={isEn ? 'syncing · ' : 'sincronizando · '}
            connectedLabel={isEn ? '4 connected' : '4 conectados'}
            forecastLabel={isEn ? 'FORECAST' : 'PROYECCIÓN'}
          />
        </div>
      </section>

      {/* ================================================================== */}
      {/* 4. PROCESO Y RESULTADOS — Connected 4-Step Roadmap + Marquee       */}
      {/* ================================================================== */}
      <section id="proceso" className="scroll-mt-24 py-20 md:py-28 bg-surface/40 border-b border-rule">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-20">
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {isEn ? 'How We Work' : 'Cómo Trabajamos'}
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                  {isEn
                    ? 'From your idea to a working system in 4 connected steps.'
                    : 'De tu idea a un sistema funcionando en 4 pasos conectados.'}
                </h2>
              </div>
              <p className="text-muted text-base sm:text-lg max-w-md">
                {isEn
                  ? 'Every stage flows into the next with clear deliverables, fixed timelines, and direct WhatsApp communication.'
                  : 'Cada etapa se conecta con la siguiente con entregables claros, tiempos fijos y comunicación directa por WhatsApp.'}
              </p>
            </div>

            <ProcessRoadmap isEn={isEn} />

            <div className="mt-12 rounded-[24px] border border-rule bg-surface p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary mb-5">
                {isEn
                  ? 'What every project with Autonomek includes'
                  : 'Lo que incluye cada proyecto con Autonomek'}
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
                    ? 'What our clients say after launching.'
                    : 'Lo que dicen las empresas que ya operan con nosotros.'}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-muted max-w-md">
                {isEn
                  ? 'Real impact on sales, response times, and daily operations across Colombia, Mexico, and the US.'
                  : 'Impacto real en ventas, velocidad de atención y ahorro operativo en empresas reales.'}
              </p>
            </div>

            <TestimonialMarquee isEn={isEn} />
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 5. PREGUNTAS FRECUENTES — Clean 2-Column Hairline FAQ              */}
      {/* ================================================================== */}
      <section
        id="preguntas"
        className="scroll-mt-24 py-20 md:py-28 border-b border-rule"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {isEn ? 'FAQ' : 'Preguntas Frecuentes'}
            </span>
            <h2 className="mt-4 max-w-md text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              {isEn
                ? 'Clear answers before we start.'
                : 'Respuestas claras antes de empezar.'}
            </h2>
            <p className="mt-4 max-w-md text-base sm:text-lg leading-relaxed text-muted">
              {isEn
                ? 'Have a specific question about your business? Message us on WhatsApp and we will guide you directly.'
                : '¿Tienes una duda específica sobre tu empresa? Escríbenos por WhatsApp y te orientamos de inmediato.'}
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
      {/* 6. CONTACTO — Atmospheric Unboxed Closing CTA                      */}
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
            {isEn ? 'Start Today' : 'Hablemos de tu proyecto'}
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground">
            {isEn
              ? 'Ready to modernize your business?'
              : '¿Listo para llevar tu negocio al siguiente nivel?'}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-muted">
            {isEn
              ? 'Write to us on WhatsApp and receive a free initial diagnosis with a clear proposal for your company.'
              : 'Escríbenos por WhatsApp y recibe un diagnóstico inicial sin costo con una propuesta clara para tu empresa.'}
          </p>
          <div className="mt-9 flex justify-center">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-ink px-8 py-4 text-base font-semibold hover:opacity-90 transition"
            >
              {isEn ? 'Talk with us on WhatsApp — Free' : 'Hablar por WhatsApp — Diagnóstico Gratis'}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
