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
import { WebPerformanceBento } from '@/components/ui/service-bento-workbenches';

type Region = 'co' | 'mx' | 'es' | 'us' | 'en';

export default function PaginasWebClient({ region = 'co' }: { region?: Region }) {
  const isEn = region === 'us' || region === 'en';
  const basePrefix =
    region === 'en' ? '/en' : region === 'us' ? '/us' : region === 'es' ? '/es' : '';

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeSpecIndex, setActiveSpecIndex] = useState<number>(0);

  const projectsList = isEn ? PROJECTS_EN : PROJECTS;
  const webProjects = projectsList.filter((p) => p.category === 'Web');

  const whatsappDirectUrl = isEn
    ? 'https://wa.me/573004435894?text=Hello%20Autonomek%2C%20I%20want%20a%20fast%2C%20high-converting%20website%20optimized%20for%20Google%20and%20ChatGPT.'
    : 'https://wa.me/573004435894?text=Hola%20Autonomek%2C%20quiero%20cotizar%20un%20sitio%20web%20r%C3%A1pido%20y%20optimizado%20para%20Google%20y%20ChatGPT.';

  const servicesHref = isEn ? `${basePrefix}/services` : `${basePrefix}/servicios`;
  const projectsHref = isEn ? `${basePrefix}/projects` : `${basePrefix}/proyectos`;

  const engineeringPillars = isEn
    ? [
        {
          num: '01',
          title: 'Sub-second load speed (0.6s LCP) on Next.js & Edge CDN',
          metric: '99/100 Core Web Vitals',
          desc: '53% of mobile visitors abandon websites that take more than 3 seconds to open. We code your site on Next.js without heavy WordPress plugins so every page opens instantaneously.',
          specs: ['0.6s Largest Contentful Paint', 'Global Edge Caching', 'Zero Plugin Vulnerabilities'],
        },
        {
          num: '02',
          title: 'Dual SEO + GEO architecture for Google & ChatGPT',
          metric: 'Google #1 + AI Citations',
          desc: 'Buyers now search on Google and ask ChatGPT, Perplexity, and Gemini for recommendations. We embed JSON-LD Schema.org entities and llms.txt indexing so both engines rank your brand first.',
          specs: ['JSON-LD Entity Graph', 'llms.txt AI Indexing', 'Semantic Heading Hierarchy'],
        },
        {
          num: '03',
          title: 'Bespoke conversion architecture & commercial copywriting',
          metric: '+3.1x Lead Conversion',
          desc: 'Every section is structured to resolve buyer objections, prove authority with real evidence, and guide visitors directly toward a qualified quote or purchase.',
          specs: ['Bespoke UI/UX Design', 'Persuasive B2B/B2C Copy', 'Mobile-First Ergonomics'],
        },
        {
          num: '04',
          title: 'Direct WhatsApp & CRM conversion funnels',
          metric: 'Zero Lead Friction',
          desc: 'Instead of cold contact forms that nobody reads, we connect contextual CTAs, dynamic quoters, and booking flows directly to your WhatsApp and CRM.',
          specs: ['Contextual WhatsApp Routing', 'Meta Pixel & GA4 Events', 'Direct CRM Lead Capture'],
        },
      ]
    : [
        {
          num: '01',
          title: 'Carga instantánea en 0.6 segundos con Next.js y CDN Global',
          metric: '99/100 Core Web Vitals',
          desc: 'El 53% de las visitas en celular abandona una página si tarda más de 3 segundos en abrir. Desarrollamos tu web en código puro (Next.js) sin plantillas pesadas para que abra al instante.',
          specs: ['LCP en 0.6 Segundos', 'Red Edge Mundial', 'Cero Plugins Vulnerables'],
        },
        {
          num: '02',
          title: 'Posicionamiento dual: SEO en Google + GEO en ChatGPT',
          metric: 'Google #1 + Citas en IA',
          desc: 'Hoy tus clientes buscan tanto en Google como en ChatGPT, Perplexity y Gemini. Estructuramos datos semánticos Schema.org y protocolo llms.txt para que tu marca sea la primera recomendada.',
          specs: ['Datos Estructurados JSON-LD', 'Protocolo llms.txt Nativo', 'Arquitectura Semántica'],
        },
        {
          num: '03',
          title: 'Diseño a medida y estructura comercial enfocada en cerrar ventas',
          metric: '+3.1x Conversión',
          desc: 'Nada de plantillas genéricas. Diseñamos cada pantalla a la medida de tu marca para transmitir autoridad inmediata, resolver objeciones y transformar visitantes en clientes reales.',
          specs: ['Diseño UI/UX Exclusivo', 'Redacción Comercial Clara', 'Experiencia Móvil Impecable'],
        },
        {
          num: '04',
          title: 'Embudos de cotización directa a WhatsApp y CRM',
          metric: 'Captura Inmediata',
          desc: 'Reemplazamos los formularios fríos que nadie revisa por flujos interactivos que envían al cliente directo a tu WhatsApp con el servicio o producto de interés ya preseleccionado.',
          specs: ['Rutas Contextuales a WhatsApp', 'Píxel de Meta y Google Ads', 'Conexión Directa a CRM'],
        },
      ];

  const benchmarkRows = isEn
    ? [
        {
          metric: 'Mobile load speed (LCP)',
          template: '4.2s – 6.8s (high bounce rate)',
          agency: '2.8s – 4.0s (WordPress theme)',
          autonomek: '0.6s instant load (Next.js Edge)',
        },
        {
          metric: 'Google PageSpeed & Core Web Vitals',
          template: '38 – 55 / 100',
          agency: '65 – 78 / 100',
          autonomek: '98 – 100 / 100 verified',
        },
        {
          metric: 'Visibility on ChatGPT, Perplexity & Gemini',
          template: 'Invisible to AI crawlers',
          agency: 'Basic meta tags only',
          autonomek: 'Native JSON-LD + llms.txt GEO',
        },
        {
          metric: 'Security & maintenance overhead',
          template: 'Constant broken plugins & updates',
          agency: 'Monthly maintenance fees required',
          autonomek: 'Immutable serverless architecture',
        },
        {
          metric: 'Code & asset ownership',
          template: 'Locked into platform subscription',
          agency: 'Restricted template license',
          autonomek: '100% owned by your company',
        },
      ]
    : [
        {
          metric: 'Velocidad de carga en celular (LCP)',
          template: '4.2s – 6.8s (alto abandono)',
          agency: '2.8s – 4.0s (tema de WordPress)',
          autonomek: '0.6 segundos instantáneo (Next.js)',
        },
        {
          metric: 'Puntaje en Google Core Web Vitals',
          template: '38 – 55 / 100',
          agency: '65 – 78 / 100',
          autonomek: '98 – 100 / 100 verificado',
        },
        {
          metric: 'Visibilidad en ChatGPT, Perplexity y Gemini',
          template: 'Invisible para motores de IA',
          agency: 'Solo etiquetas básicas antiguas',
          autonomek: 'Schema.org JSON-LD + llms.txt',
        },
        {
          metric: 'Seguridad y estabilidad técnica',
          template: 'Plugins lentos y vulnerables',
          agency: 'Requiere mantenimiento constante',
          autonomek: 'Arquitectura blindada sin plugins',
        },
        {
          metric: 'Propiedad del código y plataforma',
          template: 'Alquilado (atado a mensualidad)',
          agency: 'Plantilla compartida por cientos',
          autonomek: '100% propiedad de tu empresa',
        },
      ];

  const guarantees = isEn
    ? [
        'Guaranteed 95+ Google PageSpeed score',
        'Custom design from scratch (no templates)',
        'Technical SEO + ChatGPT (GEO) structure',
        'Direct WhatsApp & CRM lead integration',
        'Launched in 2 to 4 weeks',
        '100% code and domain ownership',
      ]
    : [
        'Puntaje 95+ garantizado en Google PageSpeed',
        'Diseño 100% a medida (cero plantillas)',
        'SEO Técnico + Optimización ChatGPT (GEO)',
        'Integración directa con WhatsApp y CRM',
        'Entrega lista en 2 a 4 semanas',
        'Propiedad total de tu dominio y código',
      ];

  const faqs = isEn
    ? [
        {
          q: 'Why do you build with Next.js instead of WordPress, Wix, or Shopify templates?',
          a: 'Templates load dozens of heavy scripts and third-party plugins that slow down your site to 4+ seconds, hurting both Google rankings and ad conversion rates. With Next.js, your website loads in 0.6 seconds, is immune to plugin hacks, and converts significantly more visitors.',
        },
        {
          q: 'How do you make my company appear on ChatGPT and AI search engines?',
          a: 'We implement Generative Engine Optimization (GEO): clean semantic HTML, complete Schema.org JSON-LD entity graphs (Organization, Service, FAQPage, Product), and an llms.txt index so AI models understand your services, pricing context, and authority.',
        },
        {
          q: 'Can my team edit prices, photos, or blog articles easily?',
          a: 'Yes. We can connect a clean, intuitive administration panel so your team can update catalog items, images, promotions, or articles in seconds without touching a single line of code.',
        },
        {
          q: 'How long does it take to launch our new website?',
          a: 'Between 2 and 4 weeks depending on the number of sections or catalog items. In week 1 we present the visual architecture and copywriting; in weeks 2–3 we code, optimize SEO/GEO, and launch.',
        },
        {
          q: 'Do you include hosting, domain setup, and WhatsApp integration?',
          a: 'Yes. We deliver the complete turnkey solution: domain configuration, SSL security certificate, global CDN deployment, Google Search Console indexing, and direct WhatsApp conversion buttons.',
        },
      ]
    : [
        {
          q: '¿Por qué desarrollan en Next.js en lugar de usar plantillas de WordPress o Wix?',
          a: 'Las plantillas cargan decenas de plugins pesados que hacen que la web tarde más de 4 segundos en abrir, haciendo que pierdas más de la mitad de los clics de tus anuncios. Con Next.js tu web abre en 0.6 segundos, es imposible de hackear por plugins y posiciona mucho mejor en Google.',
        },
        {
          q: '¿Cómo logran que mi empresa aparezca cuando alguien pregunta en ChatGPT?',
          a: 'Aplicamos Ingeniería GEO (Generative Engine Optimization): inyectamos grafos de entidades Schema.org (JSON-LD), jerarquía semántica limpia y archivo llms.txt para que ChatGPT, Perplexity y Google AI citen a tu empresa como la respuesta recomendada.',
        },
        {
          q: '¿Podré cambiar textos, fotos o productos fácilmente después?',
          a: 'Sí. Si tu negocio requiere actualizar catálogo, precios, proyectos o noticias frecuentemente, incluimos un panel autoadministrable súper intuitivo para que hagas cambios en segundos desde tu celular o computador.',
        },
        {
          q: '¿En cuánto tiempo entregan el sitio web funcionando?',
          a: 'Entre 2 y 4 semanas. En la primera semana aprobamos juntos el diseño visual y los textos comerciales; en las semanas siguientes desarrollamos, optimizamos velocidad y SEO, y publicamos en tu dominio.',
        },
        {
          q: '¿El proyecto incluye configuración de dominio, SSL y botón de WhatsApp?',
          a: 'Sí, entregamos todo llave en mano: conexión de tu dominio, certificado de seguridad SSL, despliegue en servidores de alta velocidad, alta en Google Search Console y embudos directos a tu WhatsApp.',
        },
      ];

  return (
    <main className="min-h-screen w-full bg-background text-foreground selection:bg-primary selection:text-primary-ink">
      {/* ================================================================== */}
      {/* 1. HERO + FULL-WIDTH INTERACTIVE WEB PERFORMANCE & GEO BENTO       */}
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
                {isEn ? 'High-Performance Websites' : 'Sitios Web de Alto Rendimiento'}
              </span>
            </nav>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-tight leading-[1.07] text-foreground">
              {isEn ? (
                <>
                  Websites that load in 0.6 seconds{' '}
                  <span className="text-muted font-normal">
                    and rank first on Google and ChatGPT.
                  </span>
                </>
              ) : (
                <>
                  Sitios web que abren en 0.6 segundos{' '}
                  <span className="text-muted font-normal">
                    y lideran en Google y ChatGPT.
                  </span>
                </>
              )}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted">
              {isEn
                ? 'A slow template website costs you clients every single day. We design and code bespoke, ultra-fast websites engineered to turn visitors into qualified WhatsApp conversations and sales.'
                : 'Una página lenta hecha con plantilla te hace perder clientes todos los días. Diseñamos y programamos sitios web a medida, ultrarrápidos y estructurados para convertir visitas en ventas reales por WhatsApp.'}
            </p>

            <div className="mt-8 flex w-full flex-col items-stretch gap-3.5 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-ink px-7 py-3.5 text-sm sm:text-base font-semibold hover:opacity-90 transition"
              >
                {isEn ? 'Quote my website on WhatsApp' : 'Cotizar mi sitio web por WhatsApp'}
              </a>
              <a
                href="#portafolio-web"
                className="inline-flex items-center justify-center rounded-full border border-rule bg-surface text-foreground px-7 py-3.5 text-sm sm:text-base font-semibold hover:bg-card transition"
              >
                {isEn ? 'See live websites we built' : 'Ver sitios web en vivo'}
              </a>
            </div>
          </div>

          {/* Interactive 12-Column Web Performance & AI Search Bento right below Hero */}
          <div className="mt-14">
            <WebPerformanceBento isEn={isEn} />
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 2. INGENIERÍA WEB — Interactive Audit + Hairline Specifications    */}
      {/* ================================================================== */}
      <section
        id="ingenieria"
        className="scroll-mt-24 py-20 md:py-28 bg-surface/40 border-b border-rule"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {isEn ? 'Web & Search Architecture' : 'Arquitectura Web y Posicionamiento'}
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                {isEn
                  ? 'Built from the ground up to rank and convert.'
                  : 'Construidos desde la raíz para posicionar y vender.'}
              </h2>
            </div>
            <p className="text-muted text-base sm:text-lg max-w-md">
              {isEn
                ? 'Inspect the live Core Web Vitals audit on the left and the 4 technical pillars included in every build.'
                : 'Revisa la auditoría de rendimiento en vivo a la izquierda y los 4 pilares técnicos de cada desarrollo.'}
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Left 5 Cols: Interactive Audit MiniApp */}
            <div className="lg:col-span-5 rounded-[28px] border border-rule bg-surface p-5 sm:p-7 flex flex-col justify-between gap-6 shadow-lg shadow-black/20">
              <div className="flex items-center justify-between gap-3 border-b border-rule pb-4">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-primary">
                    {isEn ? 'LIVE TELEMETRY' : 'AUDITORÍA EN VIVO'}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-0.5">
                    {isEn ? 'Speed & Search Benchmark' : 'Velocidad y Visibilidad SEO'}
                  </h3>
                </div>
                <span className="rounded-full bg-primary/15 border border-primary/25 px-3 py-1 font-mono text-xs font-semibold text-primary">
                  0.6s LCP
                </span>
              </div>

              <ServiceMiniApp id="web" isEn={isEn} />

              <div className="grid grid-cols-3 divide-x divide-rule border-t border-rule pt-4 text-center">
                <div className="px-2">
                  <div className="font-mono text-lg sm:text-xl font-semibold text-foreground tabular-nums">
                    99/100
                  </div>
                  <div className="text-[11px] text-muted mt-0.5">PageSpeed</div>
                </div>
                <div className="px-2">
                  <div className="font-mono text-lg sm:text-xl font-semibold text-primary tabular-nums">
                    0.6s
                  </div>
                  <div className="text-[11px] text-muted mt-0.5">
                    {isEn ? 'Mobile load' : 'Carga móvil'}
                  </div>
                </div>
                <div className="px-2">
                  <div className="font-mono text-lg sm:text-xl font-semibold text-foreground tabular-nums">
                    +210%
                  </div>
                  <div className="text-[11px] text-muted mt-0.5">
                    {isEn ? 'Organic traffic' : 'Tráfico orgánico'}
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Hallmark Hairline Rows */}
            <div className="lg:col-span-7 border-t border-rule">
              {engineeringPillars.map((item, idx) => {
                const isActive = activeSpecIndex === idx;
                return (
                  <div
                    key={item.num}
                    onClick={() => setActiveSpecIndex(idx)}
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
                          /{item.num}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-primary shrink-0 pl-8 sm:pl-0">
                        {item.metric}
                      </span>
                    </div>

                    <div className="mt-3 pl-8 sm:pl-9 space-y-4">
                      <p className="text-sm sm:text-base leading-relaxed text-muted">
                        {item.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.specs.map((spec) => (
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
      {/* 3. TABLA COMPARATIVA — Full-Width Hairline Benchmark Table         */}
      {/* ================================================================== */}
      <section className="py-20 md:py-28 border-b border-rule">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {isEn ? 'Technical Comparison' : 'Comparativa Técnica'}
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                {isEn
                  ? 'Custom Next.js engineering vs. generic templates.'
                  : 'Ingeniería web a medida frente a plantillas genéricas.'}
              </h2>
            </div>
            <p className="text-muted text-base sm:text-lg max-w-md">
              {isEn
                ? 'See why high-growth brands migrate away from slow WordPress themes and rented site builders.'
                : 'Descubre por qué las empresas que buscan liderar su sector dejan atrás los constructores lentos de plantillas.'}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="border-b border-rule-strong text-[11px] font-mono uppercase tracking-[0.14em] text-muted">
                  <th className="py-4 pr-6 font-semibold w-[30%]">
                    {isEn ? 'Performance & SEO Metric' : 'Métrica de Rendimiento y SEO'}
                  </th>
                  <th className="py-4 px-6 font-semibold w-[23%]">
                    {isEn ? 'Wix / Squarespace Builder' : 'Constructor Wix / Plantilla'}
                  </th>
                  <th className="py-4 px-6 font-semibold w-[23%]">
                    {isEn ? 'Traditional WordPress' : 'WordPress Tradicional'}
                  </th>
                  <th className="py-4 pl-6 font-semibold text-primary w-[24%]">
                    {isEn ? 'Autonomek Next.js + GEO' : 'Ingeniería Web Autonomek'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rule text-sm sm:text-base">
                {benchmarkRows.map((row) => (
                  <tr key={row.metric} className="hover:bg-surface/40 transition-colors">
                    <td className="py-5 pr-6 font-medium text-foreground">
                      {row.metric}
                    </td>
                    <td className="py-5 px-6 text-muted font-mono text-xs sm:text-sm tabular-nums">
                      {row.template}
                    </td>
                    <td className="py-5 px-6 text-muted font-mono text-xs sm:text-sm tabular-nums">
                      {row.agency}
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
      {/* 4. SITIOS WEB EN PRODUCCIÓN — Real Deployed Web Portfolio          */}
      {/* ================================================================== */}
      <section
        id="portafolio-web"
        className="scroll-mt-24 py-20 md:py-28 bg-surface/40 border-b border-rule"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {isEn ? 'Live Production Websites' : 'Sitios Web en Producción'}
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                {isEn
                  ? 'Explore real websites built and ranked by Autonomek.'
                  : 'Explora sitios web reales diseñados y posicionados por nosotros.'}
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
            {webProjects.map((project) => (
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
                    {isEn ? 'Inspect live site & results' : 'Ver capturas y sitio en vivo'}
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
                  {isEn ? 'How We Build Your Website' : 'Cómo Desarrollamos tu Web'}
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                  {isEn
                    ? 'From strategy to a live, ranking website in 4 steps.'
                    : 'De la estrategia a tu web vendiendo en vivo en 4 pasos.'}
                </h2>
              </div>
              <p className="text-muted text-base sm:text-lg max-w-md">
                {isEn
                  ? 'Clear visual previews, commercial copywriting included, and fixed delivery dates.'
                  : 'Avances visuales claros, redacción comercial persuasiva incluida y fechas de entrega cerradas.'}
              </p>
            </div>

            <ProcessRoadmap isEn={isEn} />

            <div className="mt-12 rounded-[24px] border border-rule bg-surface/60 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary mb-5">
                {isEn
                  ? 'Guaranteed deliverables with every Autonomek website'
                  : 'Garantías incluidas en cada Sitio Web con Autonomek'}
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
                    ? 'Brands growing their sales with our websites.'
                    : 'Empresas que multiplicaron sus clientes con su nueva web.'}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-muted max-w-md">
                {isEn
                  ? 'Measurable impact on organic rankings, brand authority, and WhatsApp lead flow.'
                  : 'Impacto medible en posicionamiento en Google, autoridad de marca y cotizaciones por WhatsApp.'}
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
                ? 'Answers before launching your new website.'
                : 'Respuestas claras sobre tu próximo sitio web.'}
            </h2>
            <p className="mt-4 max-w-md text-base sm:text-lg leading-relaxed text-muted">
              {isEn
                ? 'Want us to audit your current website for free? Send us your link on WhatsApp.'
                : '¿Quieres que auditemos tu página web actual sin costo? Envíanos tu enlace por WhatsApp.'}
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
            {isEn ? '0.6s Load · Google & ChatGPT #1' : 'Carga 0.6s · Posicionamiento Google e IA'}
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground">
            {isEn
              ? 'Ready for a website that actually brings clients?'
              : '¿Listo para tener un sitio web que sí cierre ventas?'}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-muted">
            {isEn
              ? 'Write to us on WhatsApp for a free speed & SEO audit of your current site or a closed proposal for your new project.'
              : 'Escríbenos por WhatsApp para recibir una auditoría gratuita de tu web actual o una propuesta cerrada para tu nuevo proyecto.'}
          </p>
          <div className="mt-9 flex justify-center">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-ink px-8 py-4 text-base font-semibold hover:opacity-90 transition"
            >
              {isEn ? 'Talk with us on WhatsApp — Free Audit' : 'Hablar por WhatsApp — Cotizar Sitio Web'}
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
