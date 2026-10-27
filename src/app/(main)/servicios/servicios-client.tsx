'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Check } from 'lucide-react';
import { BlueprintSculptureFigure } from '@/components/widgets/ArchitecturalFigures';

export default function ServiciosClient({ locale = 'es' }: { locale?: 'es' | 'en' }) {
  const pathname = usePathname() || '/';
  const isEn = locale === 'en' || pathname.startsWith('/en') || pathname.startsWith('/us');
  const isEsExplicit = pathname.startsWith('/es');
  const isUsExplicit = pathname.startsWith('/us');
  const basePrefix = isEn ? (isUsExplicit ? '/us' : '/en') : (isEsExplicit ? '/es' : '');

  const services = isEn
    ? [
        {
          id: '01',
          title: '24/7 AI Sales & Support Agents',
          subtitle: 'WhatsApp Cloud API · OpenAI RAG · pgvector',
          description:
            'Autonomous conversational agents trained on your company documentation, catalogs, and policies. They answer in 1.1 seconds, process voice notes and payment receipts, qualify buyers, and schedule appointments in your CRM.',
          features: [
            'Multimodal processing (text, voice notes, receipt images)',
            'Zero-hallucination RAG connected to your knowledge base',
            'Real-time Google Calendar and CRM booking',
            'Seamless human handoff when complex negotiation is needed',
          ],
          href: `${basePrefix}/services/ai-agents`,
          whatsappText: 'Hello Autonomek, I want to quote a 24/7 WhatsApp AI Agent for my company.',
        },
        {
          id: '02',
          title: 'High-Performance Websites & Technical SEO',
          subtitle: 'Next.js App Router · Core Web Vitals 95+ · GEO/AEO',
          description:
            'Corporate web platforms engineered for sub-second load times, semantic Schema.org structured data, and bilingual indexing to rank on Google and get cited by ChatGPT and Perplexity.',
          features: [
            'Sub-second Largest Contentful Paint (< 0.8s)',
            'Reciprocal international hreflang and JSON-LD schema',
            'Zero Cumulative Layout Shift (CLS 0.00)',
            'Frictionless conversion funnels directly to WhatsApp',
          ],
          href: `${basePrefix}/services/high-performance-websites`,
          whatsappText: 'Hello Autonomek, I want to quote a High-Performance B2B Website with Technical SEO.',
        },
        {
          id: '03',
          title: 'Process & Workflow Automation',
          subtitle: 'n8n · REST APIs · Webhooks · ERP & Billing',
          description:
            'We connect your CRM, payment gateways, accounting software, and communication channels so data flows automatically in milliseconds without manual entry.',
          features: [
            'High-availability n8n workflow orchestration',
            'Automatic invoice, contract, and order generation',
            'Real-time synchronization across HubSpot, Salesforce, and SQL',
            'Instant operational alerts on WhatsApp, Slack, or Telegram',
          ],
          href: `${basePrefix}/services/process-automation`,
          whatsappText: 'Hello Autonomek, I want to audit and automate my company workflows.',
        },
        {
          id: '04',
          title: 'Custom B2B Software & Cloud Platforms',
          subtitle: 'TypeScript · Node.js · PostgreSQL · Supabase',
          description:
            'When off-the-shelf software limits your operation, we engineer proprietary platforms: custom CRMs, booking portals, multi-tenant SaaS, and real-time BI dashboards.',
          features: [
            'Role-based access control and enterprise encryption',
            'Real-time executive analytics and financial telemetry',
            'Modular cloud architecture built to scale',
            'Bi-weekly agile production sprints and ongoing support',
          ],
          href: `${basePrefix}/services/custom-software`,
          whatsappText: 'Hello Autonomek, I want to quote a Custom B2B Software platform.',
        },
      ]
    : [
        {
          id: '01',
          title: 'Agentes de Inteligencia Artificial 24/7',
          subtitle: 'WhatsApp Cloud API · OpenAI RAG · pgvector',
          description:
            'Asistentes conversacionales autónomos entrenados con tus catálogos, precios y políticas. Responden en 1.1 segundos, transcriben notas de voz, validan comprobantes de pago y agendan citas en tu calendario.',
          features: [
            'Procesamiento multimodal (texto, notas de voz y comprobantes)',
            'Respuestas exactas fundamentadas en tus documentos (RAG)',
            'Agendamiento en tiempo real en Google Calendar y CRM',
            'Transferencia inteligente a asesores humanos cuando se requiere',
          ],
          href: `${basePrefix}/servicios/agentes-inteligencia-artificial`,
          whatsappText: 'Hola Autonomek, quiero cotizar un Agente de IA 24/7 en WhatsApp para mi empresa.',
        },
        {
          id: '02',
          title: 'Páginas Web de Alto Rendimiento y SEO Técnico',
          subtitle: 'Next.js App Router · Core Web Vitals 95+ · GEO/AEO',
          description:
            'Plataformas corporativas diseñadas para cargar en menos de un segundo, con datos estructurados Schema.org e indexación internacional para posicionar en Google y motores de respuesta con IA.',
          features: [
            'Tiempo de carga principal inferior a 0.8 segundos',
            'Arquitectura SEO y GEO lista para Google, ChatGPT y Perplexity',
            'Cero salto visual (CLS 0.00) y diseño ejecutivo adaptable',
            'Embudos de conversión directa a WhatsApp sin fricción',
          ],
          href: `${basePrefix}/servicios/paginas-web-alto-rendimiento`,
          whatsappText: 'Hola Autonomek, quiero cotizar una Página Web de Alto Rendimiento con SEO Técnico.',
        },
        {
          id: '03',
          title: 'Automatización de Procesos Comerciales',
          subtitle: 'n8n · REST APIs · Webhooks · ERP y Facturación',
          description:
            'Conectamos tu CRM, pasarelas de pago, software contable y WhatsApp para que la información fluya en milisegundos sin digitación manual ni errores humanos.',
          features: [
            'Orquestación de flujos de alta disponibilidad con n8n',
            'Generación automática de contratos PDF, facturas y pedidos',
            'Sincronización bidireccional con HubSpot, Salesforce y bases de datos',
            'Alertas operativas en tiempo real para tu equipo',
          ],
          href: `${basePrefix}/servicios/automatizacion-de-procesos`,
          whatsappText: 'Hola Autonomek, quiero auditar y automatizar los procesos de mi empresa.',
        },
        {
          id: '04',
          title: 'Software a Medida y Plataformas Cloud',
          subtitle: 'TypeScript · Node.js · PostgreSQL · Supabase',
          description:
            'Cuando el software comercial genérico queda corto, construimos plataformas propias: CRMs a medida, sistemas de reservas en tiempo real y paneles de control ejecutivo.',
          features: [
            'Control de acceso por roles y seguridad de datos corporativa',
            'Paneles de analítica y métricas operativas en tiempo real',
            'Arquitectura modular escalable en la nube',
            'Entregas iterativas cada dos semanas y soporte continuo',
          ],
          href: `${basePrefix}/servicios/software-a-medida`,
          whatsappText: 'Hola Autonomek, quiero cotizar un proyecto de Software a Medida.',
        },
      ];

  return (
    <main className="min-h-screen w-full bg-background text-foreground pt-28 md:pt-36 pb-20">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Header */}
        <header className="max-w-3xl pb-16 border-b border-rule space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
            {isEn
              ? 'Engineering systems built for measurable return.'
              : 'Sistemas de ingeniería diseñados para retorno medible.'}
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            {isEn
              ? 'Four specialized architectures that eliminate manual bottlenecks and turn your digital channels into an autonomous sales operation.'
              : 'Cuatro arquitecturas especializadas que eliminan el trabajo manual repetitivo y convierten tus canales digitales en una operación comercial autónoma.'}
          </p>
        </header>

        {/* Services Ledger */}
        <div className="divide-y divide-rule border-b border-rule">
          {services.map((service, sIdx) => (
            <section
              key={service.id}
              className="py-14 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-2">
                  <span className="font-mono text-sm text-primary tabular-nums block">
                    {service.id}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                    {service.title}
                  </h2>
                  <p className="font-mono text-xs text-subtle">{service.subtitle}</p>
                </div>

                <BlueprintSculptureFigure activeIndex={sIdx} isEn={isEn} />
              </div>

              <div className="lg:col-span-7 space-y-6">
                <p className="text-muted text-base leading-relaxed max-w-[62ch]">
                  {service.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-foreground bg-surface border border-rule rounded-lg p-3.5"
                    >
                      <Check size={15} className="text-primary mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/573004435894?text=${encodeURIComponent(service.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-11 px-5 rounded-lg bg-primary text-primary-ink font-medium text-sm hover:opacity-90 transition-opacity"
                  >
                    {isEn ? 'Quote this system on WhatsApp' : 'Cotizar este sistema por WhatsApp'}
                  </a>
                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center h-11 px-5 rounded-lg border border-rule bg-surface text-foreground font-medium text-sm hover:bg-card transition-colors"
                  >
                    {isEn ? 'Inspect technical specification' : 'Ver especificación técnica'}
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
