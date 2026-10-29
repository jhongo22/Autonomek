'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Check,
  ExternalLink,
  ArrowUpRight,
  MessageSquare,
  Globe,
  Workflow,
  LayoutDashboard,
  Zap,
  Sliders,
  TrendingUp,
  Cpu,
  Search,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
} from 'lucide-react';
import { PROJECTS, PROJECTS_EN, Project } from '@/data/projects';
import ProjectDetailsModal from '@/components/ProjectDetailsModal';
import { AnalyticsBento } from '@/components/ui/analytics-bento';
import InkOrbitFeatures from '@/components/ui/ink-orbit-features';
import { ServiceMiniApp } from '@/components/ui/service-mini-apps';

type Region = 'co' | 'mx' | 'es' | 'us' | 'en';

/* Bell curve helper for 24h Web & WhatsApp AI traffic waves */
const bell = (x: number, m: number, s: number) => Math.exp(-(((x - m) / s) ** 2) / 2);
const hours = Array.from({ length: 25 }, (_, h) => h);
const webHourly = [0, 1, 2].map((w) =>
  hours.map((h) =>
    Math.round(
      1800 *
        (1 - w * 0.15) *
        (bell(h, 11.5 - w * 0.5, 3.5) * 0.92 + bell(h, 19.5, 2.3) * 0.25)
    )
  )
);
const whatsappHourly = [0, 1, 2].map((w) =>
  hours.map((h) =>
    Math.round(
      2200 *
        (1 - w * 0.16) *
        (bell(h, 20 - w * 0.4, 3.2) * 0.95 + bell(h, 9, 2.0) * 0.35)
    )
  )
);
const salesSeriesValues = [
  8420, 8610, 8590, 8780, 8950, 9140, 9320, 9280, 9490, 9660, 9830, 10120, 10340, 10490,
  10610, 10850, 11080, 11310, 11540, 11830, 12090, 12320, 12660, 12930, 13260, 13620,
  13980, 14290, 14560, 14820,
];

export default function HomeClient({ region = 'co' }: { region?: Region }) {
  const isEn = region === 'us' || region === 'en';
  const basePrefix =
    region === 'en' ? '/en' : region === 'us' ? '/us' : region === 'es' ? '/es' : '';

  const [activeCategory, setActiveCategory] = useState<'ALL' | 'IA' | 'Web' | 'Automatización'>(
    'ALL'
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const projectsList = isEn ? PROJECTS_EN : PROJECTS;

  const filteredProjects = useMemo(() => {
    const list =
      activeCategory === 'ALL'
        ? projectsList
        : projectsList.filter((p) => p.category === activeCategory);
    return list.slice(0, 6);
  }, [activeCategory, projectsList]);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const whatsappDirectUrl = isEn
    ? 'https://wa.me/573004435894?text=Hello%20Autonomek%2C%20I%20would%20like%20to%20talk%20about%20a%20website%2C%20WhatsApp%20AI%20agent%2C%20or%20custom%20software%20project.'
    : 'https://wa.me/573004435894?text=Hola%20Autonomek%2C%20quiero%20conversar%20sobre%20un%20proyecto%20de%20sitio%20web%2C%20agente%20de%20IA%20en%20WhatsApp%20o%20software%20a%20medida.';

  const projectsHref = isEn ? `${basePrefix}/projects` : `${basePrefix}/proyectos`;

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
          cta: 'See how the WhatsApp AI works',
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
          cta: 'See how our websites rank',
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
          cta: 'Explore custom software',
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
          cta: 'Explore process automations',
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
          cta: 'Ver cómo vende el Agente IA',
          icon: MessageSquare,
          highlight: 'Respuesta en 1 seg · 24/7',
        },
        {
          id: 'web',
          badge: 'Posicionamiento Google e IA',
          title: 'Sitios Web que Venden',
          desc: 'Páginas web rápidas, claras y diseñadas para convertir visitas en clientes. Desarrolladas a medida para abrir en menos de un segundo y aparecer primero en Google y ChatGPT.',
          bullets: [
            'Sitios corporativos, catálogos y páginas de alta conversión',
            'Carga instantánea (0.6s) para no perder visitantes',
            'SEO técnico optimizado para liderar en Google y ChatGPT',
            'Embudos de contacto directo a WhatsApp listos para cotizar',
          ],
          href: `${basePrefix}/servicios/paginas-web-alto-rendimiento`,
          cta: 'Ver sitios web y SEO',
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
          cta: 'Ver software a medida',
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
          cta: 'Ver automatización de procesos',
          icon: Workflow,
          highlight: 'Sin trabajo repetitivo',
        },
      ];

  const processSteps = isEn
    ? [
        {
          num: '01',
          title: 'Free initial diagnosis',
          desc: 'We review how your business operates today, identify what takes up your time, and define the exact solution you need.',
          icon: Search,
        },
        {
          num: '02',
          title: 'Clear plan & closed price',
          desc: 'We present the visual design, prioritized features, delivery timeline, and a fixed budget with zero hidden fees.',
          icon: PenTool,
        },
        {
          num: '03',
          title: 'Fast staged development',
          desc: 'We build your website, AI agent, or platform showing you functional progress every week so you can test and give feedback.',
          icon: Code2,
        },
        {
          num: '04',
          title: 'Testing & launch with support',
          desc: 'We verify speed and security, launch to production, train your team, and accompany you with direct engineering support.',
          icon: Rocket,
        },
      ]
    : [
        {
          num: '01',
          title: 'Diagnóstico inicial gratis',
          desc: 'Conversamos sobre cómo opera tu negocio hoy, identificamos qué te quita tiempo y definimos qué necesita tu proyecto.',
          icon: Search,
        },
        {
          num: '02',
          title: 'Propuesta clara y precio fijo',
          desc: 'Te entregamos el plan de trabajo con pantallas claras, tiempos de entrega definidos y presupuesto cerrado sin sorpresas.',
          icon: PenTool,
        },
        {
          num: '03',
          title: 'Desarrollo ágil por etapas',
          desc: 'Construimos tu web, agente de IA o software mostrándote avances reales para que los pruebes antes del lanzamiento.',
          icon: Code2,
        },
        {
          num: '04',
          title: 'Puesta en marcha y respaldo',
          desc: 'Lanzamos tu solución en vivo, capacitamos a tu equipo para usarla con facilidad y te acompañamos con soporte directo.',
          icon: Rocket,
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

  const testimonials = isEn
    ? [
        {
          quote:
            'We doubled our sales in the first month after launching the website with WhatsApp integration. The entire process was clear and fast.',
          author: 'Mateo Gómez',
          role: 'Founder · Toxxic',
          initials: 'MG',
          metric: '2x sales in 30 days',
        },
        {
          quote:
            'We used to spend all day answering availability inquiries. With the automated booking assistant, dates are reserved on their own and manual work dropped by 80%.',
          author: 'Carolina Rojas',
          role: 'Manager · Villa Grande La Misia',
          initials: 'CR',
          metric: '-80% manual workload',
        },
        {
          quote:
            'The WhatsApp AI assistant replies to customers and takes full orders at midnight automatically. We no longer lose a single nighttime sale.',
          author: 'Sofía Medina',
          role: 'Manager · Fast Food AI Agent',
          initials: 'SM',
          metric: '24/7 automatic orders',
        },
      ]
    : [
        {
          quote:
            'Duplicamos nuestras ventas en el primer mes de lanzar el sitio web con integración a WhatsApp. Todo el proceso fue súper claro y rápido.',
          author: 'Mateo Gómez',
          role: 'Fundador · Toxxic',
          initials: 'MG',
          metric: '2x ventas en el 1er mes',
        },
        {
          quote:
            'Antes pasábamos el día respondiendo disponibilidades de la finca. Con el asistente de reservas, las fechas se agendan solas y redujimos el trabajo manual un 80%.',
          author: 'Carolina Rojas',
          role: 'Administradora · Villa Grande La Misia',
          initials: 'CR',
          metric: '-80% carga manual',
        },
        {
          quote:
            'El agente de ventas en WhatsApp atiende y toma pedidos automáticos a la medianoche. Ya no perdemos ni un solo cliente fuera de horario.',
          author: 'Sofía Medina',
          role: 'Gerente · Agente IA Comidas Rápidas',
          initials: 'SM',
          metric: 'Pedidos 24/7 en WhatsApp',
        },
      ];

  const faqs = isEn
    ? [
        {
          q: 'What types of solutions do you build?',
          a: 'We build four main solutions: 24/7 WhatsApp AI assistants for sales and appointment booking, fast websites optimized to rank on Google and ChatGPT, custom software (control panels, client portals, booking systems), and automations that connect your tools.',
        },
        {
          q: 'What if I have an idea or problem, but I am not sure where to start?',
          a: 'You do not need technical knowledge. In a short WhatsApp conversation, we listen to how your business works today and advise you in plain language on the most practical solution.',
        },
        {
          q: 'Does the WhatsApp AI assistant replace my human sales team?',
          a: 'No. It supports your team by answering repetitive questions in 1 second, qualifying leads, and booking appointments 24/7. When a customer is ready for custom negotiation, it passes the conversation to your human advisor with a full summary.',
        },
        {
          q: 'How much does a website, AI agent, or custom software project cost?',
          a: 'Every project is quoted based on its real scope so you only pay for what your business needs. After a free initial diagnosis, we give you a clear proposal with closed pricing and zero hidden costs.',
        },
        {
          q: 'How long does it take to have my project live?',
          a: 'High-converting websites and WhatsApp AI assistants launch in 2 to 4 weeks. Custom software platforms are delivered in bi-weekly stages so you can see and test progress from the beginning.',
        },
        {
          q: 'Can you connect with the CRM or tools we already use?',
          a: 'Yes. We connect with WhatsApp Business, Google Calendar, HubSpot, Salesforce, Google Sheets, payment gateways, and accounting or inventory systems.',
        },
      ]
    : [
        {
          q: '¿Qué tipo de soluciones desarrollan en Autonomek?',
          a: 'Desarrollamos cuatro soluciones principales: agentes de IA en WhatsApp que atienden y agendan citas 24/7, sitios web rápidos optimizados para liderar en Google y ChatGPT, software a medida (paneles de control, portales y reservas) y automatizaciones entre tus sistemas.',
        },
        {
          q: '¿Qué pasa si tengo una idea o un problema, pero no sé por dónde empezar?',
          a: 'No necesitas conocimientos técnicos. En una conversación corta por WhatsApp analizamos cómo funciona tu negocio hoy y te explicamos en palabras sencillas cuál es la mejor opción para ti.',
        },
        {
          q: '¿El agente de IA en WhatsApp reemplaza a mi equipo comercial?',
          a: 'No, le quita la carga repetitiva. El agente responde dudas en 1 segundo, envía catálogos y agenda citas 24/7. Cuando detecta un cliente listo para negociación especial, transfiere el chat a tu asesor humano con el resumen completo.',
        },
        {
          q: '¿Cuánto cuesta desarrollar un sitio web, agente de IA o software a medida?',
          a: 'Cada proyecto se cotiza a la medida de lo que realmente necesitas. Tras un diagnóstico inicial sin costo, te entregamos una propuesta clara con alcance definido y precio cerrado.',
        },
        {
          q: '¿Cuánto tiempo toma tener mi proyecto funcionando?',
          a: 'Los sitios web y los agentes de IA en WhatsApp quedan listos entre 2 y 4 semanas. Los proyectos de software a medida se entregan por etapas cada dos semanas para que veas avances reales desde el inicio.',
        },
        {
          q: '¿Pueden conectarse con las herramientas que ya usamos en la empresa?',
          a: 'Sí. Conectamos tu solución con WhatsApp, Google Calendar, CRMs (HubSpot, Pipedrive, etc.), hojas de Excel, pasarelas de pago y software contable.',
        },
      ];

  return (
    <main className="min-h-screen w-full bg-background text-foreground selection:bg-primary selection:text-primary-ink">
      {/* ================================================================== */}
      {/* 1. HERO + LIVE INTERACTIVE ANALYTICS BENTO                         */}
      {/* ================================================================== */}
      <section
        id="inicio"
        className="relative isolate overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 border-b border-rule"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[420px] w-[820px] max-w-[120vw] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]"
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Clean, high-impact Hero copy with crisp sans-serif typography */}
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-rule-strong bg-surface/80 px-4 py-1.5 text-xs font-medium text-primary mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {isEn
                ? 'Websites · WhatsApp AI Agents 24/7 · Custom Software'
                : 'Sitios Web · Agentes de IA en WhatsApp 24/7 · Software a Medida'}
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-tight leading-[1.07] text-foreground">
              {isEn ? (
                <>
                  Technology that brings you clients{' '}
                  <span className="text-muted font-normal">
                    and runs your operation without friction.
                  </span>
                </>
              ) : (
                <>
                  Tecnología que atrae más clientes{' '}
                  <span className="text-muted font-normal">
                    y ordena tu operación sin complicarte.
                  </span>
                </>
              )}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted">
              {isEn
                ? 'We build fast websites that rank #1 on Google and ChatGPT, WhatsApp AI assistants that reply and book appointments in 1 second, and custom software tailored to your team.'
                : 'Desarrollamos páginas web que aparecen primero en Google y ChatGPT, asistentes de ventas en WhatsApp que atienden y agendan citas 24/7, y software hecho a la medida de tu negocio.'}
            </p>

            <div className="mt-8 flex w-full flex-col items-stretch gap-3.5 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-ink px-7 py-3.5 text-sm sm:text-base font-semibold hover:opacity-90 transition"
              >
                {isEn ? 'Talk with us on WhatsApp' : 'Hablar por WhatsApp'}
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-full border border-rule bg-surface text-foreground px-7 py-3.5 text-sm sm:text-base font-semibold hover:bg-card transition"
              >
                {isEn ? 'Explore our solutions' : 'Ver nuestras soluciones'}
              </a>
            </div>
          </div>

          {/* Interactive Analytics Bento right below Hero */}
          <div className="mt-14">
            <AnalyticsBento
              currency="$"
              credit={false}
              colors={{
                revenue: ['var(--accent)', 'var(--primary)'],
                desktop: ['var(--primary)', 'var(--accent)'],
                mobile: ['#f59e0b', 'var(--primary)'],
                radar: 'var(--primary)',
              }}
              revenue={{
                label: isEn ? 'Monthly sales generated' : 'Ventas mensuales generadas',
                value: 14820,
                delta: '28.4%',
                note: isEn ? (
                  <>
                    Avg. response <span className="text-foreground font-medium">1.1 seg</span>
                  </>
                ) : (
                  <>
                    Respuesta prom. <span className="text-foreground font-medium">1.1 seg</span>
                  </>
                ),
                caption: isEn ? 'Last 30 days (Web + WhatsApp AI)' : 'Últimos 30 días (Web + IA)',
                series: salesSeriesValues.map((value, i) => ({
                  value,
                  label: new Date(2026, 8, 22 + i).toLocaleDateString(
                    isEn ? 'en-US' : 'es-CO',
                    { month: 'short', day: 'numeric' }
                  ),
                })),
              }}
              sessions={{
                label: isEn
                  ? 'Leads & chats handled 24/7'
                  : 'Visitas y chats atendidos 24/7',
                value: 48210,
                delta: '19.8%',
                note: isEn
                  ? 'Activity by hour, last 3 weeks'
                  : 'Actividad por hora, últimas 3 semanas',
                desktop: webHourly,
                mobile: whatsappHourly,
                labels: {
                  desktop: isEn ? 'Web & Google SEO' : 'Web y Google SEO',
                  mobile: isEn ? 'WhatsApp AI 24/7' : 'WhatsApp IA 24/7',
                  prior: isEn ? 'Prior weeks' : 'Semanas previas',
                  current: isEn ? 'this week' : 'esta semana',
                },
              }}
              categories={{
                title: isEn
                  ? 'Business impact by solution'
                  : 'Impacto comercial por solución',
                groups: [
                  { id: 'ia', name: isEn ? 'WhatsApp AI' : 'Agentes IA', color: 'var(--primary)', ink: 'dark' },
                  { id: 'web', name: isEn ? 'Web & SEO' : 'Web y SEO', color: 'var(--accent)', ink: 'dark' },
                  { id: 'soft', name: isEn ? 'Software' : 'Software', color: '#f59e0b', ink: 'dark' },
                  { id: 'auto', name: isEn ? 'Automation' : 'Automatización', color: 'var(--secondary)', ink: 'light' },
                ],
                periods: isEn
                  ? [
                      { label: 'Weekly', total: 3420, delta: '21.4%', compare: 'vs $2,810 last week' },
                      { label: 'Monthly', total: 14820, delta: '28.4%', compare: 'vs $11,540 last month' },
                      { label: 'Yearly', total: 168400, delta: '34%', compare: 'vs $125,600 last year' },
                    ]
                  : [
                      { label: 'Semanal', total: 3420, delta: '21.4%', compare: 'vs $2,810 sem. anterior' },
                      { label: 'Mensual', total: 14820, delta: '28.4%', compare: 'vs $11,540 mes anterior' },
                      { label: 'Anual', total: 168400, delta: '34%', compare: 'vs $125,600 año anterior' },
                    ],
                items: isEn
                  ? [
                      { name: 'WhatsApp Sales', group: 'ia', values: [920, 4120, 48500] },
                      { name: '24/7 Bookings', group: 'ia', values: [640, 2840, 33200] },
                      { name: 'Google #1 SEO', group: 'web', values: [580, 2590, 29800] },
                      { name: 'ChatGPT Rank', group: 'web', values: [430, 1920, 22400] },
                      { name: 'Control Panels', group: 'soft', values: [510, 2190, 25900] },
                      { name: 'Client Portals', group: 'soft', values: [390, 1680, 19800] },
                      { name: 'CRM & Billing', group: 'auto', values: [460, 1980, 23100] },
                      { name: 'Auto Quotes', group: 'auto', values: [340, 1490, 17400] },
                    ]
                  : [
                      { name: 'Ventas WhatsApp', group: 'ia', values: [920, 4120, 48500] },
                      { name: 'Citas 24/7', group: 'ia', values: [640, 2840, 33200] },
                      { name: 'SEO Google #1', group: 'web', values: [580, 2590, 29800] },
                      { name: 'Visibilidad IA', group: 'web', values: [430, 1920, 22400] },
                      { name: 'Paneles Control', group: 'soft', values: [510, 2190, 25900] },
                      { name: 'Portales Web', group: 'soft', values: [390, 1680, 19800] },
                      { name: 'CRM y Facturas', group: 'auto', values: [460, 1980, 23100] },
                      { name: 'Cotizaciones', group: 'auto', values: [340, 1490, 17400] },
                    ],
                table: isEn
                  ? {
                      columns: ['Region', 'Weekly', 'Monthly', 'Yearly'],
                      rows: [
                        { label: 'Colombia & LatAm', values: ['$14,200', '$58,400', '$690,000'] },
                        { label: 'United States', values: ['$19,800', '$82,100', '$960,000'] },
                        { label: 'Spain', values: ['$11,400', '$46,900', '$540,000'] },
                      ],
                    }
                  : {
                      columns: ['Mercado', 'Semanal', 'Mensual', 'Anual'],
                      rows: [
                        { label: 'Colombia y LatAm', values: ['$14,200', '$58,400', '$690,000'] },
                        { label: 'Estados Unidos', values: ['$19,800', '$82,100', '$960,000'] },
                        { label: 'España', values: ['$11,400', '$46,900', '$540,000'] },
                      ],
                    },
              }}
              seasonality={{
                title: isEn ? 'Annual growth rhythm' : 'Crecimiento mes a mes',
                axis: isEn
                  ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  : ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                years: [
                  {
                    label: '2026',
                    values: [
                      16120, 20540, 24440, 19460, 28080, 23580, 21160, 26740, 30160, 27880,
                      33240, 35660,
                    ],
                    stats: isEn
                      ? [
                          { label: 'Monthly average', value: 14820, delta: '28.4%', note: '2,450 leads/mo' },
                          { label: 'Annual projection', value: 168400, delta: '34.0%', note: '99.9% uptime' },
                        ]
                      : [
                          { label: 'Promedio mensual', value: 14820, delta: '28.4%', note: '2,450 citas/mes' },
                          { label: 'Proyección anual', value: 168400, delta: '34.0%', note: 'Operación 24/7' },
                        ],
                    rows: isEn
                      ? [
                          { label: 'WhatsApp AI response time', value: '1.1 seg' },
                          { label: 'Website load speed (LCP)', value: '0.6 seg' },
                          { label: 'Manual tasks eliminated', value: '85%' },
                        ]
                      : [
                          { label: 'Respuesta en WhatsApp IA', value: '1.1 seg' },
                          { label: 'Velocidad de carga web', value: '0.6 seg' },
                          { label: 'Ahorro en tareas manuales', value: '85%' },
                        ],
                  },
                  {
                    label: '2025',
                    values: [
                      12260, 14640, 16720, 18360, 19020, 16860, 15560, 18240, 21920, 23260,
                      22140, 20760,
                    ],
                    stats: isEn
                      ? [
                          { label: 'Monthly average', value: 11540, delta: '14.2%', note: '1,680 leads/mo' },
                          { label: 'Annual total', value: 125600, delta: '18.5%', note: '99.9% uptime' },
                        ]
                      : [
                          { label: 'Promedio mensual', value: 11540, delta: '14.2%', note: '1,680 citas/mes' },
                          { label: 'Total anual', value: 125600, delta: '18.5%', note: 'Operación 24/7' },
                        ],
                    rows: isEn
                      ? [
                          { label: 'WhatsApp AI response time', value: '1.4 seg' },
                          { label: 'Website load speed (LCP)', value: '0.8 seg' },
                          { label: 'Manual tasks eliminated', value: '75%' },
                        ]
                      : [
                          { label: 'Respuesta en WhatsApp IA', value: '1.4 seg' },
                          { label: 'Velocidad de carga web', value: '0.8 seg' },
                          { label: 'Ahorro en tareas manuales', value: '75%' },
                        ],
                  },
                ],
              }}
            />
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 2. SERVICIOS — 4 Clear Solutions Built for Real Business Impact    */}
      {/* ================================================================== */}
      <section
        id="servicios"
        className="scroll-mt-24 py-20 md:py-28 bg-surface/40 border-b border-rule"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {isEn ? 'Our Solutions' : 'Nuestras Soluciones'}
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                {isEn
                  ? 'Four pillars to sell more and simplify your daily work.'
                  : 'Cuatro pilares para vender más y simplificar tu operación.'}
              </h2>
            </div>
            <p className="text-muted text-base sm:text-lg max-w-md">
              {isEn
                ? 'Choose a single solution or connect all four into one unified system for your company.'
                : 'Puedes implementar una sola solución o conectar las cuatro en un mismo sistema para tu empresa.'}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((srv) => {
              const IconComponent = srv.icon;
              return (
                <article
                  key={srv.id}
                  className="group rounded-[28px] border border-rule bg-surface p-5 sm:p-8 flex flex-col justify-between gap-6 sm:gap-7 hover:border-rule-strong transition-colors shadow-lg shadow-black/20"
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

                      <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
                        {srv.title}
                      </h3>

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

                    {/* Interactive mini app (live product preview) */}
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
      {/* 3. FLUJOS EN TIEMPO REAL — InkOrbitFeatures Interactive Diagrams   */}
      {/* ================================================================== */}
      <section id="flujos" className="scroll-mt-24 py-20 md:py-28 border-b border-rule">
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
      {/* 4. PROYECTOS REALES — Clean, Easy-to-Browse Portfolio              */}
      {/* ================================================================== */}
      <section
        id="proyectos"
        className="scroll-mt-24 py-20 md:py-28 bg-surface/40 border-b border-rule"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {isEn ? 'Real Case Studies' : 'Casos de Éxito Reales'}
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                {isEn
                  ? 'Systems already operating in real companies.'
                  : 'Proyectos reales funcionando hoy en empresas.'}
              </h2>
              <p className="mt-3 text-base sm:text-lg text-muted">
                {isEn
                  ? 'Select any project to view real screenshots, live links, and results.'
                  : 'Toca cualquier proyecto para ver capturas reales, enlaces en vivo y resultados.'}
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {(
                [
                  { id: 'ALL', label: isEn ? 'All' : 'Todos' },
                  { id: 'IA', label: isEn ? 'WhatsApp AI' : 'Agentes IA' },
                  { id: 'Web', label: isEn ? 'Websites' : 'Sitios web' },
                  { id: 'Automatización', label: isEn ? 'Automation' : 'Automatización' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${
                    activeCategory === tab.id
                      ? 'bg-primary text-primary-ink'
                      : 'bg-surface text-muted hover:text-foreground border border-rule'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => handleOpenProject(project)}
                className="group rounded-[24px] bg-surface border border-rule overflow-hidden flex flex-col justify-between cursor-pointer hover:border-primary transition-colors"
              >
                <div>
                  <div className="relative w-full aspect-[16/10] bg-card overflow-hidden border-b border-rule">
                    <img
                      src={`/projects/${project.folder}/${project.images[0]}`}
                      alt={
                        isEn
                          ? `${project.title} — ${project.category} project by Autonomek`
                          : `${project.title} — Proyecto de ${project.category} desarrollado por Autonomek`
                      }
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
                    {isEn ? 'View project details' : 'Ver detalles del proyecto'}
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

          <div className="mt-10 flex justify-center">
            <Link
              href={projectsHref}
              className="inline-flex items-center justify-center rounded-full border border-rule bg-surface text-foreground px-7 py-3 text-sm font-semibold hover:bg-card transition-colors"
            >
              {isEn ? 'Explore all 15 projects' : 'Ver los 15 proyectos en producción'}
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 5. PROCESO Y GARANTÍAS — Clear 4-Step Roadmap + Client Results     */}
      {/* ================================================================== */}
      <section id="proceso" className="scroll-mt-24 py-20 md:py-28 border-b border-rule">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-20">
          <div>
            <div className="max-w-2xl mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {isEn ? 'How We Work' : 'Cómo Trabajamos'}
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                {isEn
                  ? 'From your idea to a working system in 4 simple steps.'
                  : 'De tu idea a un sistema funcionando en 4 pasos simples.'}
              </h2>
            </div>

            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <li
                    key={step.num}
                    className="rounded-[24px] border border-rule bg-surface p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/25">
                          <IconComponent size={20} />
                        </span>
                        <span className="font-mono text-xs font-semibold text-primary">
                          {step.num}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted">{step.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ol>

            {/* Guarantees Bar */}
            <div className="mt-10 rounded-[24px] border border-rule bg-surface/60 p-6 sm:p-8">
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

          {/* Client Testimonials */}
          <div className="pt-12 border-t border-rule">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-8">
              {isEn
                ? 'What our clients say after launching.'
                : 'Lo que dicen las empresas que ya operan con nosotros.'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <blockquote
                  key={t.author}
                  className="p-6 sm:p-7 rounded-[24px] bg-surface border border-rule flex flex-col justify-between gap-6"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                        {t.metric}
                      </span>
                      <span className="text-xs text-primary tracking-widest">★★★★★</span>
                    </div>
                    <p className="text-sm sm:text-base text-foreground leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <footer className="flex items-center gap-3 pt-4 border-t border-rule">
                    <div className="w-9 h-9 rounded-full bg-card border border-primary/40 flex items-center justify-center text-xs font-semibold text-primary shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{t.author}</div>
                      <div className="text-xs text-muted">{t.role}</div>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 6. PREGUNTAS FRECUENTES — Clear 2-Column FAQ                       */}
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
      {/* 7. CONTACTO — Direct Call to Action                                */}
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
