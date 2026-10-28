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
          title: '24/7 WhatsApp AI Sales & Booking Agent',
          subtitle: 'Instant reply · Voice notes & receipts · Live calendar booking',
          description:
            'An autonomous sales representative that replies in 1.1 seconds around the clock. It answers catalog questions, transcribes voice notes, validates bank transfer receipts, and schedules qualified appointments directly into your calendar without human intervention.',
          features: [
            '24/7 WhatsApp & Instagram customer acquisition with 1.1s latency',
            'Understands voice notes and verifies bank payment receipts with AI vision',
            'Direct calendar and CRM booking (Google Calendar, Outlook, HubSpot)',
            'Seamless human handoff with full executive context when negotiation is needed',
          ],
          href: `${basePrefix}/services/ai-agents`,
          inspectCta: 'See how the WhatsApp AI Agent sells',
          whatsappText: 'Hello Autonomek, I want to quote a 24/7 WhatsApp AI Agent for my company.',
        },
        {
          id: '02',
          title: 'High-Authority Websites that Convert & Rank',
          subtitle: '0.6s load time · #1 on Google · Cited by ChatGPT & Perplexity',
          description:
            'Look authoritative, load in under a second, and dominate search results. We engineer sub-second web platforms optimized to appear #1 on Google and get cited by ChatGPT and Perplexity, converting visitors into qualified leads on WhatsApp.',
          features: [
            'Rank #1 on Google and get cited by ChatGPT and Perplexity',
            'Sub-second load times (<0.8s) that retain 90%+ of visitors',
            'Executive visual design that projects supreme corporate trust',
            'Direct-to-WhatsApp conversion funnels with pre-filled context',
          ],
          href: `${basePrefix}/services/high-performance-websites`,
          inspectCta: 'See how this Web ranks on Google & AI',
          whatsappText: 'Hello Autonomek, I want to quote a High-Converting Website that ranks on Google and ChatGPT.',
        },
        {
          id: '03',
          title: 'Autonomous Operations & Billing Workflows',
          subtitle: 'Zero manual data entry · CRM, ERP & payment sync · n8n engine',
          description:
            'We connect your CRM, payment gateways, accounting software, and WhatsApp so operations execute automatically in milliseconds. Issue invoices, generate contracts, and dispatch order alerts without manual data entry.',
          features: [
            'Mission-critical n8n orchestration eliminating manual data entry',
            'Automatic PDF contract, tax invoice, and order dispatch',
            'Real-time synchronization across payment gateways, CRM, and ERP',
            'Instant WhatsApp operational telemetry and status alerts',
          ],
          href: `${basePrefix}/services/process-automation`,
          inspectCta: 'Explore workflow automations',
          whatsappText: 'Hello Autonomek, I want to audit and automate my company workflows.',
        },
        {
          id: '04',
          title: 'Custom B2B Platforms & Proprietary Software',
          subtitle: 'Proprietary ownership · No per-seat SaaS fees · Custom portals & BI',
          description:
            'When off-the-shelf software limits your operation, we engineer proprietary platforms: custom client portals, booking engines, and real-time executive BI dashboards—owned 100% by you without recurring per-seat fees.',
          features: [
            '100% code ownership: zero recurring per-user software subscriptions',
            'Real-time executive analytics and business performance dashboards',
            'Secure client and booking portals with enterprise role-based access',
            'Scalable cloud infrastructure backed by direct engineering support',
          ],
          href: `${basePrefix}/services/custom-software`,
          inspectCta: 'Inspect custom software systems',
          whatsappText: 'Hello Autonomek, I want to quote a Custom B2B Software platform.',
        },
      ]
    : [
        {
          id: '01',
          title: 'Vendedor IA en WhatsApp 24/7',
          subtitle: 'Atención inmediata · Audios, fotos y cotización · Citas en calendario',
          description:
            'Tu vendedor estrella que atiende en 1 segundo a cualquier hora del día o de la noche. Responde preguntas con tu catálogo actualizado, transcribe audios, valida comprobantes de pago y agenda citas directamente en tu calendario sin intervención humana.',
          features: [
            'Atención 24/7 en WhatsApp e Instagram con respuesta en 1 segundo',
            'Entiende notas de voz y extrae datos de comprobantes de pago',
            'Agendamiento automático en Google Calendar o tu CRM',
            'Transferencia inmediata a un asesor humano ante casos prioritarios',
          ],
          href: `${basePrefix}/servicios/agentes-inteligencia-artificial`,
          inspectCta: 'Ver cómo vende el Agente de WhatsApp',
          whatsappText: 'Hola Autonomek, quiero cotizar un Agente de IA 24/7 en WhatsApp para mi empresa.',
        },
        {
          id: '02',
          title: 'Webs de Autoridad que Venden y Posicionan',
          subtitle: 'Carga en 0.6s · 1er lugar en Google · Recomendado por ChatGPT y Perplexity',
          description:
            'Tu empresa se ve impecable ante clientes corporativos y no pierde prospectos por lentitud. Desarrollamos webs ultrarrápidas estructuradas específicamente para aparecer en los primeros resultados de Google y ser recomendadas por IAs como ChatGPT y Perplexity cuando tus clientes buscan tus servicios.',
          features: [
            'Aparece primero en búsquedas de Google y en respuestas de ChatGPT y Perplexity',
            'Carga instantánea en 0.6s: retiene a más del 90% de los visitantes',
            'Diseño visual que proyecta solvencia y confianza corporativa inmediata',
            'Embudos de alta conversión con contacto directo a WhatsApp',
          ],
          href: `${basePrefix}/servicios/paginas-web-alto-rendimiento`,
          inspectCta: 'Ver cómo posiciona esta Web en Google',
          whatsappText: 'Hola Autonomek, quiero cotizar una Web de Alta Conversión que posicione en Google y ChatGPT.',
        },
        {
          id: '03',
          title: 'Operación y Facturación en Piloto Automático',
          subtitle: 'Cero digitación manual · Conexión CRM, ERP y pagos · Sincronización n8n',
          description:
            'Conectamos WhatsApp, pasarelas de pago, software contable y tu CRM para que la información se mueva sola. Emite contratos, genera facturas electrónicas y notifica a tus clientes al instante sin que tu equipo pierda horas en tareas manuales repetitivas.',
          features: [
            'Workflows de alta disponibilidad que eliminan el trabajo manual repetitivo',
            'Emisión automática de contratos PDF, facturas electrónicas y órdenes',
            'Sincronización en tiempo real entre pasarelas de pago, CRM y contabilidad',
            'Alertas inmediatas en WhatsApp para el control de tu operación',
          ],
          href: `${basePrefix}/servicios/automatizacion-de-procesos`,
          inspectCta: 'Ver flujos de automatización',
          whatsappText: 'Hola Autonomek, quiero auditar y automatizar los procesos de mi empresa.',
        },
        {
          id: '04',
          title: 'Plataformas y Software Propio a Medida',
          subtitle: 'Tu propio sistema · Sin pagar suscripciones SaaS · Portales y analítica',
          description:
            'Cuando los programas genéricos limitan tu crecimiento, diseñamos tu propia plataforma. Portales de clientes, módulos de reservas en tiempo real y paneles de control ejecutivo adaptados a tus procesos, siendo 100% propietario del software sin pagar suscripciones mensuales por usuario.',
          features: [
            'Propiedad absoluta del software: cero pagos mensuales por licencias de usuario',
            'Paneles de control y analítica comercial en tiempo real',
            'Portales de clientes y reservas con acceso seguro por roles',
            'Arquitectura escalable en la nube con soporte directo de ingenieros',
          ],
          href: `${basePrefix}/servicios/software-a-medida`,
          inspectCta: 'Ver sistemas y software a medida',
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
              ? 'Systems engineered to win clients and eliminate manual work.'
              : 'Soluciones diseñadas para vender más y operar sin fricción.'}
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            {isEn
              ? 'Four specialized architectures designed to turn traffic into revenue and run your commercial operations autonomously.'
              : 'Cuatro arquitecturas creadas para convertir el tráfico en clientes reales y automatizar los procesos de tu empresa.'}
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
                    {service.inspectCta}
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
