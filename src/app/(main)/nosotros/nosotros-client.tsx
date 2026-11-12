'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Code2,
  Cpu,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Check,
  Zap,
  Lock,
  Globe2,
  Users2,
  Sparkles,
  Instagram,
} from 'lucide-react';
import { ProcessRoadmap } from '@/components/ui/process-roadmap';
import TestimonialMarquee from '@/components/ui/marquee-01';

interface NosotrosClientProps {
  isEn?: boolean;
  basePrefix?: string;
}

export default function NosotrosClient({ isEn = false, basePrefix = '' }: NosotrosClientProps) {
  const homeHref = basePrefix || '/';
  const servicesHref = isEn ? `${basePrefix}/services` : `${basePrefix}/servicios`;
  const projectsHref = isEn ? `${basePrefix}/projects` : `${basePrefix}/proyectos`;
  const termsHref = isEn ? `${basePrefix}/terms` : `${basePrefix}/terminos`;
  const privacyHref = isEn ? `${basePrefix}/privacy` : `${basePrefix}/privacidad`;

  const whatsappDirectUrl = isEn
    ? 'https://wa.me/573010147443?text=Hello%20Autonomek%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20team%20and%20engineering%20solutions.'
    : 'https://wa.me/573010147443?text=Hola%20Autonomek%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20su%20equipo%20y%20soluciones%20de%20ingenier%C3%ADa.';

  const pillars = isEn
    ? [
        {
          num: '01',
          title: 'Direct Engineering, No Intermediaries',
          desc: 'When you speak with Autonomek, you talk directly with senior software and AI engineers who understand how databases, APIs, and business operations actually work — not commission-hungry salespeople promising impossible features.',
        },
        {
          num: '02',
          title: '100% Owned by Your Company',
          desc: 'We reject software rent-seeking. When we build your platform or website, the source code and database belong 100% to your company with $0 recurring per-user license fees. You build an asset, not a perpetual expense.',
        },
        {
          num: '03',
          title: 'Strict RAG & Zero-Hallucination Guardrails',
          desc: 'We do not deploy gimmicky chatbots. Our conversational AI agents are anchored to your verified catalog, pricing, and business rules through Retrieval-Augmented Generation (RAG), transcribing voice notes and verifying bank transfers securely.',
        },
        {
          num: '04',
          title: 'Fixed Pricing & Staged Delivery Sprints',
          desc: 'Every project operates with a closed technical scope, defined milestones, and a fixed price without surprise invoices. You inspect functional progress in sandbox environments before launching to production.',
        },
      ]
    : [
        {
          num: '01',
          title: 'Trato Directo con Ingeniería, Cero Intermediarios',
          desc: 'Al hablar con Autonomek conversas directamente con ingenieros de software e IA que entienden bases de datos, APIs y operaciones comerciales reales, no con vendedores que prometen funciones imposibles.',
        },
        {
          num: '02',
          title: 'Código 100% Propiedad de tu Empresa',
          desc: 'Rechazamos el modelo de cobrarte mensualidades por cada empleado que usa el sistema. Cuando construimos tu software o sitio web, el código fuente y la base de datos son tuyos para siempre con $0 licencias por usuario.',
        },
        {
          num: '03',
          title: 'Arquitectura RAG y Cero Respuestas Inventadas',
          desc: 'No creamos bots de juguete. Nuestros agentes de IA en WhatsApp operan anclados a tu catálogo, lista de precios y políticas reales mediante recuperación vectorial (RAG), escuchando audios y validando comprobantes bancarios.',
        },
        {
          num: '04',
          title: 'Presupuesto Cerrado y Entregas por Etapas',
          desc: 'Cada desarrollo cuenta con alcance técnico cerrado, cronograma definido y precio fijo sin costos ocultos. Pruebas avances funcionales cada dos semanas en entornos seguros antes de salir en vivo.',
        },
      ];

  const standards = isEn
    ? [
        {
          label: 'Frontend Speed',
          value: '0.6s LCP',
          detail: 'Next.js 15 pure code on Global Edge CDN without bloated plugins.',
        },
        {
          label: 'Data Sovereignty',
          value: '100% IP',
          detail: 'Full transfer of bespoke source code and encrypted PostgreSQL schemas.',
        },
        {
          label: 'WhatsApp Stability',
          value: 'Meta Official',
          detail: 'Meta WhatsApp Cloud API integration with zero ban risks.',
        },
        {
          label: 'Warranty Commitment',
          value: '30 Days SLA',
          detail: 'Included post-launch defect warranty and direct WhatsApp support.',
        },
      ]
    : [
        {
          label: 'Velocidad de Carga',
          value: '0.6s LCP',
          detail: 'Código puro en Next.js 15 desplegado en CDN global sin plugins lentos.',
        },
        {
          label: 'Propiedad del Código',
          value: '100% Tuya',
          detail: 'Transferencia total del código fuente y base de datos PostgreSQL.',
        },
        {
          label: 'Estabilidad WhatsApp',
          value: 'API Oficial Meta',
          detail: 'Integración sobre Meta Cloud API sin riesgo de bloqueos de línea.',
        },
        {
          label: 'Garantía Incluida',
          value: '30 Días SLA',
          detail: 'Garantía técnica post-lanzamiento y canal directo de ingeniería.',
        },
      ];

  const securityPoints = isEn
    ? [
        'Mutual Non-Disclosure Agreements (NDA) available upon request',
        'AES-256 cloud encryption at rest and TLS 1.3 in transit',
        'Zero training of public AI models on confidential client data',
        'Compliance with Colombian Law 1581 (Habeas Data) & European GDPR',
        'Official Meta WhatsApp Business Cloud API infrastructure',
        '30-day post-launch technical warranty with direct developer contact',
      ]
    : [
        'Acuerdos de Confidencialidad (NDA) mutuos disponibles antes de iniciar',
        'Cifrado en la nube AES-256 en reposo y TLS 1.3 en tránsito',
        'Compromiso de cero entrenamiento de modelos públicos de IA con datos del cliente',
        'Cumplimiento de la Ley 1581 de 2012 (Habeas Data) y RGPD europeo',
        'Infraestructura oficial Meta WhatsApp Business Cloud API',
        'Garantía técnica de 30 días post-lanzamiento con soporte directo de ingeniería',
      ];

  return (
    <main className="min-h-screen w-full bg-background text-foreground selection:bg-primary selection:text-primary-ink">
      {/* ================================================================== */}
      {/* 1. HERO — Who We Are & Our Engineering Philosophy                  */}
      {/* ================================================================== */}
      <section className="relative isolate overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 border-b border-rule">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[420px] w-[min(820px,100%)] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]"
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            {/* Technical breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider text-muted">
              <Link href={homeHref} className="hover:text-foreground transition-colors">
                {isEn ? 'Home' : 'Inicio'}
              </Link>
              <span className="text-rule">/</span>
              <span className="text-primary font-medium flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                {isEn ? 'Engineering Studio' : 'Estudio de Ingeniería'}
              </span>
            </nav>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-tight leading-[1.07] text-foreground">
              {isEn ? (
                <>
                  Engineering technology that{' '}
                  <span className="text-muted font-normal">
                    brings clients and simplifies your operation.
                  </span>
                </>
              ) : (
                <>
                  Ingeniería tecnológica que{' '}
                  <span className="text-muted font-normal">
                    atrae clientes y simplifica tu operación.
                  </span>
                </>
              )}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted">
              {isEn
                ? 'Autonomek is an applied engineering studio. We build sub-second websites that rank #1 on Google and ChatGPT, 24/7 WhatsApp AI sales assistants, custom platforms, and automated pipelines for growing companies across Colombia, Mexico, the US, and Europe.'
                : 'Autonomek es un estudio de ingeniería aplicada. Desarrollamos sitios web ultrarrápidos que lideran en Google y ChatGPT, agentes de IA en WhatsApp 24/7, plataformas a medida y flujos automatizados para empresas que buscan crecer con orden y tecnología real.'}
            </p>

            <div className="mt-8 flex w-full flex-col items-stretch gap-3.5 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-ink px-7 py-3.5 text-sm sm:text-base font-semibold hover:opacity-90 transition"
              >
                {isEn ? 'Talk directly with engineering' : 'Hablar con ingeniería por WhatsApp'}
              </a>
              <Link
                href={projectsHref}
                className="inline-flex items-center justify-center rounded-full border border-rule bg-surface text-foreground px-7 py-3.5 text-sm sm:text-base font-semibold hover:bg-card transition"
              >
                {isEn ? 'Explore real production cases' : 'Ver proyectos en producción'}
              </Link>
            </div>
          </div>

          {/* 4 Technical Standards Bar (Hairline Cards) */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((std, i) => (
              <div
                key={i}
                className="rounded-[24px] border border-rule bg-surface p-6 flex flex-col justify-between gap-4"
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted">
                    {std.label}
                  </span>
                  <div className="mt-2 font-mono text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                    {std.value}
                  </div>
                </div>
                <p className="text-xs text-muted leading-relaxed border-t border-rule pt-3">
                  {std.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 2. PILARES DE INGENIERÍA — Hallmark Hairline Rows                   */}
      {/* ================================================================== */}
      <section className="py-20 md:py-28 bg-surface/40 border-b border-rule">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {isEn ? 'Engineering Principles' : 'Nuestros Principios'}
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                {isEn
                  ? 'Why leading businesses choose Autonomek.'
                  : 'Por qué las empresas eligen trabajar con Autonomek.'}
              </h2>
            </div>
            <p className="text-muted text-base sm:text-lg max-w-md">
              {isEn
                ? 'We prioritize measurable commercial impact, code quality, and intellectual property ownership over agency fluff.'
                : 'Priorizamos el retorno de inversión real, la calidad de ingeniería y la propiedad del código sobre el humo comercial.'}
            </p>
          </div>

          <div className="border-t border-rule divide-y divide-rule">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="py-8 sm:py-10 grid gap-6 md:grid-cols-12 md:items-baseline"
              >
                <div className="min-w-0 md:col-span-4 flex items-baseline gap-4">
                  <span className="font-mono text-xs font-semibold text-primary shrink-0">/{pillar.num}</span>
                  <h3 className="min-w-0 break-words text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                    {pillar.title}
                  </h3>
                </div>
                <div className="min-w-0 md:col-span-8">
                  <p className="text-sm sm:text-base leading-relaxed text-muted max-w-3xl">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 3. SEGURIDAD Y PROTECCIÓN LEGAL — Building Trust & Protecting Both */}
      {/* ================================================================== */}
      <section className="py-20 md:py-28 border-b border-rule">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="rounded-[24px] sm:rounded-[32px] border border-rule bg-surface p-5 sm:p-12 lg:p-14">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span>{isEn ? 'Security, Trust & Legal Compliance' : 'Confianza, Seguridad y Cumplimiento Legal'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                {isEn
                  ? 'Built for enterprise peace of mind.'
                  : 'Seguridad jurídica y técnica para tu tranquilidad.'}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
                {isEn
                  ? 'We understand that technology handles your most critical assets: client conversations, sensitive pricing, and financial records. That is why every Autonomek engagement is backed by rigorous legal and technical safeguards.'
                  : 'Entendemos que la tecnología maneja lo más valioso de tu empresa: conversaciones con clientes, listas de precios y registros comerciales. Por eso cada desarrollo con Autonomek está blindado técnica y jurídicamente.'}
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-8 border-t border-rule">
              {securityPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary mt-0.5">
                    <Check size={13} />
                  </span>
                  <span className="text-sm text-foreground leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-rule flex flex-wrap items-center gap-6 text-xs text-muted font-medium">
              <Link href={termsHref} className="hover:text-primary transition-colors flex items-center gap-1.5">
                <span>{isEn ? 'Review full Terms and Conditions' : 'Consultar Términos y Condiciones completos'}</span>
                <ArrowUpRight size={13} />
              </Link>
              <span className="text-rule">•</span>
              <Link href={privacyHref} className="hover:text-primary transition-colors flex items-center gap-1.5">
                <span>{isEn ? 'Review Data Protection & Habeas Data Policy' : 'Consultar Política de Privacidad y Habeas Data'}</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 4. CÓMO TRABAJAMOS — Minimalist Connected ProcessRoadmap           */}
      {/* ================================================================== */}
      <section className="py-20 md:py-28 bg-surface/40 border-b border-rule">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {isEn ? 'Our Workflow' : 'Metodología Ágil'}
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                {isEn
                  ? 'From initial diagnosis to live production in 4 connected steps.'
                  : 'De tu necesidad a un sistema funcionando en 4 pasos conectados.'}
              </h2>
            </div>
            <p className="text-muted text-base sm:text-lg max-w-md">
              {isEn
                ? 'Continuous validation, zero surprise invoices, and direct WhatsApp engineering communication.'
                : 'Validación continua por etapas, cero costos imprevistos y comunicación directa por WhatsApp.'}
            </p>
          </div>

          <ProcessRoadmap isEn={isEn} />
        </div>
      </section>

      {/* ================================================================== */}
      {/* 5. CASOS REALES — Client Marquee                                   */}
      {/* ================================================================== */}
      <section className="py-20 md:py-28 border-b border-rule">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {isEn ? 'Verified Client Results' : 'Casos Reales'}
              </span>
              <h2 className="mt-2.5 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                {isEn
                  ? 'Companies operating every day on Autonomek technology.'
                  : 'Empresas que hoy operan con tecnología Autonomek.'}
              </h2>
            </div>
            <Link
              href={projectsHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <span>{isEn ? 'Explore all 15 projects' : 'Ver los 15 proyectos realizados'}</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <TestimonialMarquee isEn={isEn} />
        </div>
      </section>

      {/* ================================================================== */}
      {/* 6. CIERRE ATMOSFÉRICO — Direct WhatsApp Contact                    */}
      {/* ================================================================== */}
      <section className="relative isolate scroll-mt-24 overflow-hidden px-5 pb-24 pt-16 sm:px-8 md:pb-32 md:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[380px] w-[min(680px,100%)] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
        />
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {isEn ? 'Let’s Build Together' : 'Conversemos sobre tu proyecto'}
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground">
            {isEn
              ? 'Ready to modernize your operations?'
              : '¿Listo para modernizar la operación de tu empresa?'}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-muted">
            {isEn
              ? 'Write directly to our engineering team on WhatsApp and receive a free initial diagnosis and architecture proposal.'
              : 'Escríbenos directamente por WhatsApp y recibe una sesión de diagnóstico técnico sin costo con una propuesta clara para tu empresa.'}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-ink px-7 sm:px-8 py-4 text-sm sm:text-base font-semibold hover:opacity-90 transition"
            >
              {isEn ? 'Talk with our engineering team' : 'Hablar con ingeniería — Diagnóstico Gratis'}
            </a>
            <a
              href="https://www.instagram.com/autonomek?psln=bzJtYXI0NzhuZW42"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-rule bg-surface text-foreground px-6 py-4 text-sm sm:text-base font-semibold hover:bg-card transition"
            >
              <Instagram size={18} className="text-primary shrink-0" />
              <span>@autonomek</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

