'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Check,
  ArrowUpRight,
  LayoutDashboard,
  Globe,
  MessageSquare,
  Workflow,
} from 'lucide-react';
import { ServiceMiniApp } from '@/components/ui/service-mini-apps';

export default function ServiciosClient({ locale = 'es' }: { locale?: 'es' | 'en' }) {
  const pathname = usePathname() || '/';
  const isEn = locale === 'en' || pathname.startsWith('/en') || pathname.startsWith('/us');
  const isEsExplicit = pathname.startsWith('/es');
  const isUsExplicit = pathname.startsWith('/us');
  const basePrefix = isEn ? (isUsExplicit ? '/us' : '/en') : isEsExplicit ? '/es' : '';

  const services = isEn
    ? [
        {
          id: '01',
          badge: 'Flagship service',
          title: 'Custom Software',
          subtitle: 'Platforms, panels, and internal systems tailored to your team',
          description:
            'When generic tools limit how your company operates, we design and build your own platform: client portals, real-time booking systems, and executive control panels owned 100% by your company with zero monthly per-user fees.',
          features: [
            'Web applications and custom control panels',
            'Client portals and real-time reservation or inventory systems',
            'Integrations with the tools you already use',
            '100% ownership with zero recurring per-seat licensing fees',
          ],
          href: `${basePrefix}/services/custom-software`,
          inspectCta: 'Explore Custom Software',
          whatsappText: 'Hello Autonomek, I want to quote a Custom Software project.',
          icon: LayoutDashboard,
        },
        {
          id: '02',
          badge: 'Service',
          title: 'Websites that Convert & Rank',
          subtitle: 'Fast, clear websites built for Google and AI search (ChatGPT)',
          description:
            'Fast, clear websites ready to convert visitors into clients. We handle design and custom code end-to-end, focusing on sub-second speed, corporate trust, and top rankings on Google and AI answer engines like ChatGPT.',
          features: [
            'Corporate websites, catalogs, and high-converting landing pages',
            'Custom interface design that builds instant trust',
            'Technical SEO to rank on Google and get cited by ChatGPT',
            'Direct WhatsApp conversion funnels',
          ],
          href: `${basePrefix}/services/high-performance-websites`,
          inspectCta: 'Explore Websites & SEO',
          whatsappText:
            'Hello Autonomek, I want to quote a Website that ranks on Google and ChatGPT.',
          icon: Globe,
        },
        {
          id: '03',
          badge: 'Flagship service',
          title: '24/7 WhatsApp AI Sales & Booking Agents',
          subtitle: 'Instant customer care, quotes, and calendar scheduling',
          description:
            'Your virtual sales assistant that replies in 1 second day and night. It answers questions using your catalog, understands voice notes, checks payment receipts, and schedules appointments directly in your calendar.',
          features: [
            '24/7 instant replies on WhatsApp and Instagram',
            'Understands text, voice notes, and payment receipts',
            'Automatic appointment booking in Google Calendar or CRM',
            'Smooth handoff to a human advisor whenever needed',
          ],
          href: `${basePrefix}/services/ai-agents`,
          inspectCta: 'Explore WhatsApp AI Agents',
          whatsappText:
            'Hello Autonomek, I want to quote a 24/7 WhatsApp AI Agent for my company.',
          icon: MessageSquare,
        },
        {
          id: '04',
          badge: 'Service',
          title: 'System Integration & Process Automation',
          subtitle: 'Connect your platforms and eliminate repetitive manual work',
          description:
            'We connect your CRM, WhatsApp, spreadsheets, and billing software so information moves on its own. Issue contracts, generate invoices, and notify your team automatically without typing errors.',
          features: [
            'Connection between systems via APIs and automated workflows',
            'Real-time data synchronization across platforms',
            'Automatic generation of contracts, quotes, and invoices',
            'Ongoing support, maintenance, and improvements',
          ],
          href: `${basePrefix}/services/process-automation`,
          inspectCta: 'Explore Process Automation',
          whatsappText: 'Hello Autonomek, I want to automate my company workflows.',
          icon: Workflow,
        },
      ]
    : [
        {
          id: '01',
          badge: 'Servicio estrella',
          title: 'Software a medida',
          subtitle: 'Plataformas, paneles y sistemas internos hechos para tu operación',
          description:
            'Plataformas, paneles de control y sistemas internos construidos alrededor de cómo trabaja tu equipo, no de cómo lo exige una plantilla. Portales de clientes, reservas e inventarios 100% propiedad de tu empresa sin pagar mensualidades por usuario.',
          features: [
            'Aplicaciones web y paneles de control a la medida',
            'Portales de clientes, reservas y control de inventario en vivo',
            'Integraciones con tus herramientas actuales',
            'Propiedad 100% tuya sin cobros mensuales por licencias de usuario',
          ],
          href: `${basePrefix}/servicios/software-a-medida`,
          inspectCta: 'Conocer más sobre Software a medida',
          whatsappText: 'Hola Autonomek, quiero cotizar un proyecto de Software a Medida.',
          icon: LayoutDashboard,
        },
        {
          id: '02',
          badge: 'Servicio',
          title: 'Sitios web que venden y posicionan',
          subtitle: 'Sitios rápidos, claros y listos para liderar en Google y ChatGPT',
          description:
            'Sitios rápidos, claros y listos para convertir visitantes en clientes. Diseño y desarrollo de punta a punta, con foco en velocidad, SEO técnico en Google y visibilidad en motores de IA como ChatGPT.',
          features: [
            'Sitios corporativos, catálogos y landings de alta conversión',
            'Diseño de interfaz a medida que transmite confianza inmediata',
            'Rendimiento y posicionamiento SEO en Google y ChatGPT',
            'Contacto directo a WhatsApp listo para cerrar ventas',
          ],
          href: `${basePrefix}/servicios/paginas-web-alto-rendimiento`,
          inspectCta: 'Conocer más sobre Sitios web',
          whatsappText:
            'Hola Autonomek, quiero cotizar un Sitio Web optimizado para Google y ChatGPT.',
          icon: Globe,
        },
        {
          id: '03',
          badge: 'Servicio estrella',
          title: 'Agentes de IA en WhatsApp 24/7',
          subtitle: 'Atención inmediata, cotizaciones y citas en tu calendario',
          description:
            'Tu asistente de ventas que atiende en 1 segundo a cualquier hora del día o de la noche. Responde preguntas con tu catálogo, escucha notas de voz, valida comprobantes de pago y agenda citas directamente en tu calendario.',
          features: [
            'Atención 24/7 en WhatsApp e Instagram con respuesta en 1 segundo',
            'Entiende notas de voz y valida comprobantes de pago',
            'Agendamiento automático en Google Calendar o tu CRM',
            'Transferencia inmediata a un asesor humano cuando se requiere',
          ],
          href: `${basePrefix}/servicios/agentes-inteligencia-artificial`,
          inspectCta: 'Conocer más sobre Agentes de IA',
          whatsappText:
            'Hola Autonomek, quiero cotizar un Agente de IA 24/7 en WhatsApp para mi empresa.',
          icon: MessageSquare,
        },
        {
          id: '04',
          badge: 'Servicio',
          title: 'Integración de sistemas y automatización',
          subtitle: 'Conectamos tus herramientas para eliminar tareas manuales',
          description:
            'Conectamos tus plataformas (WhatsApp, pasarelas de pago, Excel, software contable y CRM) para que la información fluya sola entre áreas, reduzcas tareas manuales repetitivas y trabajes sin errores de digitación.',
          features: [
            'Conexión entre sistemas mediante APIs y flujos automáticos',
            'Sincronización de datos e inventarios entre plataformas',
            'Emisión automática de contratos PDF, facturas y alertas',
            'Acompañamiento, soporte y evolución continua',
          ],
          href: `${basePrefix}/servicios/automatizacion-de-procesos`,
          inspectCta: 'Conocer más sobre Automatización',
          whatsappText:
            'Hola Autonomek, quiero automatizar e integrar los procesos de mi empresa.',
          icon: Workflow,
        },
      ];

  return (
    <main className="min-h-screen w-full bg-background text-foreground pt-28 md:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <header className="max-w-3xl pb-14 space-y-4">
          <p className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
            {isEn ? 'Our Services' : 'Nuestros Servicios'}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.06]">
            {isEn
              ? 'Solutions that connect and grow your business.'
              : 'Soluciones que conectan y hacen crecer tu negocio.'}
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            {isEn
              ? 'We design, build, and connect your tools. One team to build your solution cleanly and support you after launch.'
              : 'Diseñamos, desarrollamos y conectamos tus herramientas. Un solo equipo para construir tu solución y acompañarte después de la entrega.'}
          </p>
        </header>

        {/* 2x2 Grid of Services */}
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <article
                key={service.id}
                className="rounded-3xl border border-rule bg-surface p-5 sm:p-8 flex flex-col justify-between gap-6 sm:gap-8"
              >
                <div className="flex flex-1 flex-col gap-5">
                  <div className="flex items-center justify-between pt-1">
                    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-primary">
                      <IconComponent size={16} />
                      {service.badge}
                    </span>
                    <span className="font-mono text-xs text-muted">{service.id}</span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-primary font-medium">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-muted text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="grid gap-3 pt-2">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-foreground">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <Check size={13} />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Interactive mini app (live product preview) */}
                  <div className="mt-auto pt-2">
                    <ServiceMiniApp id={service.id} isEn={isEn} />
                  </div>
                </div>

                <div className="pt-5 border-t border-rule flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/573004435894?text=${encodeURIComponent(
                      service.whatsappText
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-primary text-primary-ink px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
                  >
                    {isEn ? 'Quote on WhatsApp' : 'Cotizar por WhatsApp'}
                  </a>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-rule bg-background text-foreground px-5 py-3 text-sm font-medium hover:bg-card transition"
                  >
                    <span>{service.inspectCta}</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
