'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PROJECTS, PROJECTS_EN, Project } from '@/data/projects';
import ProjectDetailsModal from '@/components/ProjectDetailsModal';
import HeroIsometricGraphic from '@/components/widgets/HeroIsometricGraphic';
import {
  BottleneckPrismFigure,
  PipelineNodesFigure,
  BlueprintSculptureFigure,
  SlaTransceiverFigure,
  MethodologyHelixFigure,
} from '@/components/widgets/ArchitecturalFigures';

type Region = 'co' | 'mx' | 'es' | 'us' | 'en';
type DemoKey = 'whatsapp' | 'web' | 'crm';

export default function HomeClient({ region = 'co' }: { region?: Region }) {
  const isEn = region === 'us' || region === 'en';
  const basePrefix =
    region === 'en' ? '/en' : region === 'us' ? '/us' : region === 'es' ? '/es' : '';

  const [activeCategory, setActiveCategory] = useState<'ALL' | 'IA' | 'Web' | 'Automatización'>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState<DemoKey>('whatsapp');
  const [activeLeak, setActiveLeak] = useState<number>(0);
  const [leakScrollProgress, setLeakScrollProgress] = useState<number>(0);
  const [activeCapability, setActiveCapability] = useState<number>(0);
  const [activeMethodStep, setActiveMethodStep] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const leakSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = leakSectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const stickyOffset = window.innerWidth >= 1024 ? 80 : 64;
      const scrollableDistance = Math.max(1, rect.height - (window.innerHeight - stickyOffset));

      // Start reacting as soon as the section approaches the sticky position (works on both Mobile & PC)
      const rawProgress = Math.max(0, Math.min(1, (stickyOffset + 60 - rect.top) / scrollableDistance));
      setLeakScrollProgress(rawProgress);

      const nextIdx = rawProgress < 0.28 ? 0 : rawProgress < 0.62 ? 1 : 2;
      setActiveLeak((prev) => (prev !== nextIdx ? nextIdx : prev));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectLeak = (idx: number) => {
    setActiveLeak(idx);
    const el = leakSectionRef.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const stickyOffset = window.innerWidth >= 1024 ? 80 : 64;
      const sectionTop = window.scrollY + rect.top - stickyOffset;
      const scrollableDistance = Math.max(1, rect.height - (window.innerHeight - stickyOffset));
      const targetProgress = idx === 0 ? 0.05 : idx === 1 ? 0.45 : 0.82;
      window.scrollTo({
        top: sectionTop + scrollableDistance * targetProgress,
        behavior: 'smooth',
      });
    }
  };

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
    ? 'https://wa.me/573004435894?text=Hello%20Autonomek%2C%20I%20want%20to%20evaluate%20an%20AI%20automation%20or%20web%20engineering%20project.'
    : 'https://wa.me/573004435894?text=Hola%20Autonomek%2C%20quiero%20evaluar%20un%20proyecto%20de%20ingenier%C3%ADa%20web%2C%20agentes%20IA%20o%20automatizaci%C3%B3n.';

  const servicesHref = isEn ? `${basePrefix}/services` : `${basePrefix}/servicios`;
  const projectsHref = isEn ? `${basePrefix}/projects` : `${basePrefix}/proyectos`;

  const demoData: Record<
    DemoKey,
    {
      tab: string;
      channelTitle: string;
      summary: string;
      messages: { role: 'user' | 'agent' | 'system'; text: string; time: string }[];
      metrics: { label: string; value: string }[];
      whatsappCta: string;
      whatsappLink: string;
    }
  > = isEn
    ? {
        whatsapp: {
          tab: 'WhatsApp AI Agent',
          channelTitle: 'WhatsApp Cloud API — Sales & Booking Agent',
          summary:
            'Understands text, voice notes, and payment receipts. Qualifies budget, checks calendar availability, and books appointments in real time.',
          messages: [
            {
              role: 'user',
              text: 'Hi, we need 15 ultrasound machines rented for our clinic in Miami next month. Do you have availability and volume pricing?',
              time: '09:14',
            },
            {
              role: 'agent',
              text: 'Hello! Yes, we have 18 portable Doppler units available for next month. For a 15-unit clinic deployment, the corporate rate is applied. Would you like me to reserve a 15-minute technical call for tomorrow at 10:00 AM?',
              time: '09:14',
            },
            {
              role: 'system',
              text: 'Lead qualified (High Intent) → Synced in HubSpot CRM → Calendar invite dispatched',
              time: '09:14',
            },
          ],
          metrics: [
            { label: 'First response latency', value: '1.1s' },
            { label: 'Availability', value: '24/7' },
            { label: 'CRM sync', value: 'Automatic' },
          ],
          whatsappCta: 'Deploy this WhatsApp agent for my company',
          whatsappLink:
            'https://wa.me/573004435894?text=Hello%20Autonomek%2C%20I%20want%20to%20deploy%20a%2024%2F7%20WhatsApp%20AI%20Sales%20Agent.',
        },
        web: {
          tab: 'Next.js Web & SEO',
          channelTitle: 'High-Performance Web Architecture + Technical SEO/GEO',
          summary:
            'Sub-second Next.js platforms structured with Schema.org JSON-LD, bilingual hreflang, and direct conversion funnels.',
          messages: [
            {
              role: 'system',
              text: 'Organic search query: "B2B industrial equipment supplier + immediate quote"',
              time: '14:02',
            },
            {
              role: 'agent',
              text: 'Page rendered from Edge cache in 380ms (LCP 0.6s, CLS 0.00). Structured product catalog indexed by Google & Perplexity.',
              time: '14:02',
            },
            {
              role: 'user',
              text: 'Visitor selects product specifications and initiates direct WhatsApp quote with pre-filled context.',
              time: '14:03',
            },
          ],
          metrics: [
            { label: 'Largest Contentful Paint', value: '0.6s' },
            { label: 'Core Web Vitals score', value: '98/100' },
            { label: 'Layout shift (CLS)', value: '0.00' },
          ],
          whatsappCta: 'Quote a high-performance website',
          whatsappLink:
            'https://wa.me/573004435894?text=Hello%20Autonomek%2C%20I%20want%20to%20quote%20a%20High-Performance%20Website%20with%20Technical%20SEO.',
        },
        crm: {
          tab: 'n8n & ERP Automation',
          channelTitle: 'Autonomous Back-Office & CRM Orchestration',
          summary:
            'Eliminates manual data entry between payment gateways, accounting software, Google Workspace, and CRM pipelines.',
          messages: [
            {
              role: 'system',
              text: 'Webhook received: Payment confirmed in Stripe / Bancolombia ($4,800 USD)',
              time: '16:40',
            },
            {
              role: 'agent',
              text: 'n8n workflow executed: PDF contract generated, electronic invoice issued in ERP, and client onboarding sent via WhatsApp.',
              time: '16:40',
            },
            {
              role: 'system',
              text: 'Execution completed in 420ms with zero human intervention.',
              time: '16:40',
            },
          ],
          metrics: [
            { label: 'Execution time', value: '420ms' },
            { label: 'Manual data entry', value: '0 hrs' },
            { label: 'Operational error rate', value: '0%' },
          ],
          whatsappCta: 'Audit my company workflows',
          whatsappLink:
            'https://wa.me/573004435894?text=Hello%20Autonomek%2C%20I%20want%20to%20automate%20my%20company%20workflows%20with%20n8n%20and%20APIs.',
        },
      }
    : {
        whatsapp: {
          tab: 'Agente IA en WhatsApp',
          channelTitle: 'WhatsApp Cloud API — Calificación y agendamiento 24/7',
          summary:
            'Comprende texto, notas de voz y comprobantes de pago. Califica presupuesto, consulta disponibilidad en tu calendario y agenda citas sin intervención manual.',
          messages: [
            {
              role: 'user',
              text: 'Hola, necesitamos alquilar 12 ecógrafos para una jornada médica en Bogotá el próximo mes. ¿Tienen disponibilidad y tarifa corporativa?',
              time: '09:14',
            },
            {
              role: 'agent',
              text: '¡Hola! Sí, contamos con 16 equipos Doppler portátiles disponibles en esas fechas. Para 12 unidades aplicamos tarifa institucional con soporte incluido. ¿Te agendo una llamada técnica mañana a las 10:00 a. m. para enviarte el contrato?',
              time: '09:14',
            },
            {
              role: 'system',
              text: 'Prospecto calificado → Registrado en CRM → Cita bloqueada en Google Calendar',
              time: '09:14',
            },
          ],
          metrics: [
            { label: 'Tiempo de respuesta', value: '1.1s' },
            { label: 'Continuidad operativa', value: '24/7' },
            { label: 'Registro en CRM', value: 'Automático' },
          ],
          whatsappCta: 'Implementar este agente en mi empresa',
          whatsappLink:
            'https://wa.me/573004435894?text=Hola%20Autonomek%2C%20quiero%20implementar%20un%20Agente%20de%20IA%20en%20WhatsApp%20para%20mi%20empresa.',
        },
        web: {
          tab: 'Web Next.js y SEO',
          channelTitle: 'Arquitectura Web de Alto Rendimiento + SEO/GEO',
          summary:
            'Plataformas construidas en Next.js con tiempos de carga inferiores a un segundo, datos estructurados Schema.org y embudos directos a WhatsApp.',
          messages: [
            {
              role: 'system',
              text: 'Búsqueda orgánica en Google: "proveedor equipos médicos B2B cotización inmediata"',
              time: '14:02',
            },
            {
              role: 'agent',
              text: 'Página servida desde caché Edge en 380ms (LCP 0.6s, CLS 0.00). Catálogo técnico indexado en Google y motores de IA.',
              time: '14:02',
            },
            {
              role: 'user',
              text: 'El comprador selecciona especificaciones y abre conversación en WhatsApp con el pedido ya estructurado.',
              time: '14:03',
            },
          ],
          metrics: [
            { label: 'Carga principal (LCP)', value: '0.6s' },
            { label: 'Core Web Vitals', value: '98/100' },
            { label: 'Salto visual (CLS)', value: '0.00' },
          ],
          whatsappCta: 'Cotizar plataforma web de alto rendimiento',
          whatsappLink:
            'https://wa.me/573004435894?text=Hola%20Autonomek%2C%20quiero%20cotizar%20una%20P%C3%A1gina%20Web%20de%20Alto%20Rendimiento%20con%20SEO.',
        },
        crm: {
          tab: 'Automatización n8n y ERP',
          channelTitle: 'Orquestación Autónoma de Procesos y Facturación',
          summary:
            'Elimina la digitación manual conectando pasarelas de pago, software contable, inventarios y WhatsApp en un solo flujo.',
          messages: [
            {
              role: 'system',
              text: 'Webhook recibido: Comprobante de pago validado ($4,800 USD)',
              time: '16:40',
            },
            {
              role: 'agent',
              text: 'Flujo n8n ejecutado: Contrato PDF generado, factura emitida en el ERP y notificación enviada al cliente por WhatsApp.',
              time: '16:40',
            },
            {
              role: 'system',
              text: 'Proceso completado en 420ms con cero intervención humana.',
              time: '16:40',
            },
          ],
          metrics: [
            { label: 'Tiempo de ejecución', value: '420ms' },
            { label: 'Digitación manual', value: '0 hrs' },
            { label: 'Errores de transcripción', value: '0%' },
          ],
          whatsappCta: 'Auditar los procesos de mi empresa',
          whatsappLink:
            'https://wa.me/573004435894?text=Hola%20Autonomek%2C%20quiero%20automatizar%20los%20procesos%20operativos%20de%20mi%20empresa.',
        },
      };

  const painPoints = isEn
    ? [
        {
          num: '01',
          title: 'Leads cool down waiting for a human reply',
          desc: 'When a B2B buyer writes on WhatsApp at 7:00 PM or on a weekend and waits four hours for a quote, they have already contacted two competitors.',
          metric: '-68%',
          metricLabel: 'Close rate after 30 min delay',
        },
        {
          num: '02',
          title: 'Senior staff trapped in repetitive data entry',
          desc: 'Copying customer fields from WhatsApp into spreadsheets, generating PDF quotes by hand, and chasing confirmations drains your operational margin.',
          metric: '18 hrs',
          metricLabel: 'Lost weekly per sales rep',
        },
        {
          num: '03',
          title: 'Slow websites invisible on Google and AI search',
          desc: 'Heavy templates that take five seconds to load lose over half of paid and organic traffic before the visitor reads your value proposition.',
          metric: '> 4.2s',
          metricLabel: 'Typical legacy web load time',
        },
      ]
    : [
        {
          num: '01',
          title: 'Tus prospectos se enfrían esperando respuesta',
          desc: 'Cuando un comprador escribe por WhatsApp a las 7:00 p. m. o un fin de semana y espera horas por una cotización, termina comprándole a la competencia.',
          metric: '-68%',
          metricLabel: 'Conversión tras 30 min de espera',
        },
        {
          num: '02',
          title: 'Equipo comercial atrapado en tareas manuales',
          desc: 'Copiar datos del chat al Excel, redactar contratos uno por uno y confirmar citas manualmente consume las horas que tu equipo debería dedicar a cerrar ventas.',
          metric: '18 hrs',
          metricLabel: 'Perdidas por semana en digitación',
        },
        {
          num: '03',
          title: 'Sitios web lentos que no posicionan en Google',
          desc: 'Las páginas pesadas que tardan más de cuatro segundos en abrir pierden la mitad de las visitas antes de mostrar siquiera qué vende tu empresa.',
          metric: '> 4.2s',
          metricLabel: 'Carga promedio en webs tradicionales',
        },
      ];

  const capabilities = isEn
    ? [
        {
          index: '01',
          title: '24/7 AI Sales & Support Agents',
          spec: 'WhatsApp Cloud API · OpenAI RAG · pgvector · Voice & Vision',
          desc: 'Conversational agents trained on your catalogs and procedures that qualify leads, validate payment receipts, and schedule appointments in your CRM.',
          href: `${basePrefix}/services/ai-agents`,
        },
        {
          index: '02',
          title: 'High-Performance Websites & Technical SEO',
          spec: 'Next.js App Router · Core Web Vitals 95+ · Schema.org · GEO/AEO',
          desc: 'Sub-second corporate platforms engineered to rank at the top of Google and get cited by ChatGPT and Perplexity.',
          href: `${basePrefix}/services/high-performance-websites`,
        },
        {
          index: '03',
          title: 'Process & Workflow Automation',
          spec: 'n8n · REST APIs · Webhooks · HubSpot · ERP · Stripe',
          desc: 'Autonomous pipelines that synchronize your sales, billing, inventory, and notifications in milliseconds without human error.',
          href: `${basePrefix}/services/process-automation`,
        },
        {
          index: '04',
          title: 'Custom B2B Software & Cloud Platforms',
          spec: 'TypeScript · Node.js · PostgreSQL · Supabase · BI Dashboards',
          desc: 'Proprietary web applications, multi-tenant platforms, and real-time operational control panels tailored to your company.',
          href: `${basePrefix}/services/custom-software`,
        },
      ]
    : [
        {
          index: '01',
          title: 'Agentes de Inteligencia Artificial 24/7',
          spec: 'WhatsApp Cloud API · OpenAI RAG · pgvector · Audio y Visión',
          desc: 'Asistentes conversacionales entrenados con tus catálogos y procesos que califican prospectos, validan comprobantes y agendan citas en tu calendario.',
          href: `${basePrefix}/servicios/agentes-inteligencia-artificial`,
        },
        {
          index: '02',
          title: 'Páginas Web de Alto Rendimiento y SEO Técnico',
          spec: 'Next.js App Router · Core Web Vitals 95+ · Schema.org · GEO/AEO',
          desc: 'Plataformas corporativas con carga inferior a un segundo, diseñadas para posicionar en Google y ser recomendadas por motores de IA.',
          href: `${basePrefix}/servicios/paginas-web-alto-rendimiento`,
        },
        {
          index: '03',
          title: 'Automatización de Procesos Comerciales',
          spec: 'n8n · REST APIs · Webhooks · HubSpot · ERP · Facturación',
          desc: 'Flujos autónomos que conectan tus ventas, inventarios, contratos y contabilidad en milisegundos sin errores de digitación.',
          href: `${basePrefix}/servicios/automatizacion-de-procesos`,
        },
        {
          index: '04',
          title: 'Software a Medida y Paneles Operativos',
          spec: 'TypeScript · Node.js · PostgreSQL · Supabase · Dashboards BI',
          desc: 'Aplicaciones web propietarias, portales de reservas y paneles de control analítico adaptados a las reglas de tu operación.',
          href: `${basePrefix}/servicios/software-a-medida`,
        },
      ];

  const methodologySteps = isEn
    ? [
        {
          step: '01',
          title: 'Operational Diagnosis',
          timeline: 'Day 1–3 · Free of charge',
          desc: 'We audit your current commercial pipeline, WhatsApp response latency, and manual tasks to pinpoint exact bottlenecks.',
        },
        {
          step: '02',
          title: 'Architecture & Closed Proposal',
          timeline: 'Day 4–5 · Fixed scope',
          desc: 'We deliver a technical blueprint with defined deliverables, closed pricing, and projected return on investment.',
        },
        {
          step: '03',
          title: 'Engineering & API Deployment',
          timeline: 'Week 2–4 · Production sprint',
          desc: 'We build your 0.6s Next.js platform, train your RAG AI agents, and connect n8n workflows directly to your CRM.',
        },
        {
          step: '04',
          title: '24/7 Monitoring & Iteration',
          timeline: 'Continuous SLA · 99.9% Uptime',
          desc: 'We monitor server stability 24/7, refine AI prompts with real customer conversations, and scale your SEO monthly.',
        },
      ]
    : [
        {
          step: '01',
          title: 'Diagnóstico Operativo',
          timeline: 'Día 1–3 · Sin costo',
          desc: 'Analizamos tu proceso comercial actual, tiempos de respuesta en WhatsApp y tareas manuales para detectar cuellos de botella.',
        },
        {
          step: '02',
          title: 'Propuesta y Alcance Cerrado',
          timeline: 'Día 4–5 · Presupuesto fijo',
          desc: 'Te entregamos el diseño de arquitectura con entregables claros, costos cerrados y retorno estimado de inversión.',
        },
        {
          step: '03',
          title: 'Desarrollo e Integración API',
          timeline: 'Semana 2–4 · Paso a producción',
          desc: 'Construimos tu web de alto rendimiento e integramos tus agentes de IA y flujos n8n directamente con tu operación.',
        },
        {
          step: '04',
          title: 'Monitoreo y Optimización 24/7',
          timeline: 'Continuo · SLA 99.9%',
          desc: 'Monitoreamos la estabilidad 24/7, afinamos el entrenamiento de los agentes y escalamos tu posicionamiento SEO mes a mes.',
        },
      ];

  const differentiators = isEn
    ? [
        {
          code: 'INFRA',
          title: 'High-Availability Cloud Infrastructure',
          desc: 'Your AI agents and web platforms run on distributed Edge and cloud servers that scale automatically as your lead volume grows.',
        },
        {
          code: 'SEC',
          title: 'Enterprise Security & Data Privacy',
          desc: 'Strict role-based access control, encrypted API credentials, and isolated databases keep your company records protected.',
        },
        {
          code: 'SLA',
          title: 'Direct Engineering Support',
          desc: 'Zero ticket queues. You communicate directly on WhatsApp with the engineers who built and monitor your architecture.',
        },
      ]
    : [
        {
          code: 'INFRA',
          title: 'Infraestructura Cloud Escalable',
          desc: 'Alojamos tus agentes y plataformas web en servidores de alta disponibilidad que soportan picos de tráfico y ventas sin caídas.',
        },
        {
          code: 'SEC',
          title: 'Seguridad y Privacidad Corporativa',
          desc: 'Diseñamos bajo protocolos estrictos de cifrado y control de acceso por roles para proteger los datos de tus clientes y tu empresa.',
        },
        {
          code: 'SLA',
          title: 'Soporte Directo de Ingeniería',
          desc: 'Sin intermediarios ni tickets lentos. Hablas directamente por WhatsApp con los ingenieros que construyen y monitorean tu sistema.',
        },
      ];

  const testimonials = isEn
    ? [
        {
          quote:
            'We doubled our sales in the first month after launching the website with conversion funnels and WhatsApp integration. Clean and fast engineering process.',
          author: 'Mateo Gómez',
          role: 'Founder · Toxxic',
          initials: 'MG',
          metric: '2x sales in 30 days',
        },
        {
          quote:
            'We used to spend the entire day answering villa availability inquiries. With the automated booking bot, dates are reserved on their own and manual work dropped by 80%.',
          author: 'Carolina Rojas',
          role: 'Operations Manager · Villa Grande La Misia',
          initials: 'CR',
          metric: '-80% manual workload',
        },
        {
          quote:
            'The AI sales agent answers customers and takes full orders automatically at midnight via WhatsApp. We no longer lose a single nighttime order.',
          author: 'Sofía Medina',
          role: 'Manager · Fast Food AI Agent',
          initials: 'SM',
          metric: '24/7 autonomous orders',
        },
      ]
    : [
        {
          quote:
            'Duplicamos nuestras ventas en el primer mes de lanzar el sitio web con embudo e integraciones de WhatsApp. El proceso de ingeniería fue limpio y rápido.',
          author: 'Mateo Gómez',
          role: 'Fundador · Toxxic',
          initials: 'MG',
          metric: '2x ventas en el 1er mes',
        },
        {
          quote:
            'Antes pasábamos el día respondiendo disponibilidades de la finca. Con el agente de reservas, las fechas se agendan solas. Redujimos el trabajo manual un 80%.',
          author: 'Carolina Rojas',
          role: 'Administradora · Villa Grande La Misia',
          initials: 'CR',
          metric: '-80% carga operativa',
        },
        {
          quote:
            'El agente de ventas IA atiende y toma pedidos automáticos a la medianoche por WhatsApp. Ya no perdemos ni un solo cliente fuera de horario.',
          author: 'Sofía Medina',
          role: 'Gerente · Agente IA Comidas Rápidas',
          initials: 'SM',
          metric: 'Pedidos autónomos 24/7',
        },
      ];

  const faqs = isEn
    ? [
        {
          q: 'Do AI agents replace my human sales team?',
          a: 'No. The AI agent handles 80% of repetitive inquiries—answering product questions in 1.1 seconds, qualifying budget, and booking calendar slots. When a high-value buyer requires custom negotiation, the agent transfers the conversation to your human team with a complete summary.',
        },
        {
          q: 'How long does it take to deploy a website or automation system?',
          a: 'High-performance corporate websites and initial WhatsApp AI agents ship to production in 2 to 4 weeks. Complex custom software and multi-system ERP automations are delivered in bi-weekly functional sprints.',
        },
        {
          q: 'How do you price your engineering projects?',
          a: 'We start with a direct technical assessment via WhatsApp at no cost. Once we map your bottlenecks and expected return on investment, we deliver a closed-price technical proposal with defined deliverables and timelines.',
        },
        {
          q: 'Can you integrate with the CRM or software we already use?',
          a: 'Yes. Through n8n, webhooks, and custom REST APIs, we integrate natively with HubSpot, Salesforce, Pipedrive, Google Workspace, Stripe, WhatsApp Official API, and SQL/NoSQL databases.',
        },
      ]
    : [
        {
          q: '¿Los agentes de IA reemplazan a mi equipo comercial humano?',
          a: 'No. El agente de IA absorbe el 80% de la carga operativa repetitiva: responde en 1.1 segundos, filtra curiosos, valida presupuestos y agenda citas. Cuando detecta un negocio corporativo listo para cierre, transfiere el caso a tu ejecutivo humano con el resumen completo.',
        },
        {
          q: '¿Cuánto tiempo toma implementar una web o un sistema de IA?',
          a: 'Las plataformas web de alto rendimiento y los agentes de IA en WhatsApp entran en producción entre 2 y 4 semanas. Los proyectos de software a medida se entregan en módulos funcionales cada dos semanas.',
        },
        {
          q: '¿Cómo cotizan los proyectos y qué garantías ofrecen?',
          a: 'Realizamos un diagnóstico técnico inicial directo por WhatsApp sin costo. Con base en tus cuellos de botella te entregamos una propuesta de alcance claro y precio cerrado, con soporte y monitoreo continuo.',
        },
        {
          q: '¿Pueden conectarse con el CRM o software que ya usamos?',
          a: 'Sí. Mediante n8n, webhooks y APIs conectamos tu operación con HubSpot, Salesforce, Google Sheets, sistemas contables, pasarelas de pago y bases de datos propias.',
        },
      ];

  const currentDemo = demoData[activeDemo];

  return (
    <main className="min-h-screen w-full bg-background text-foreground selection:bg-primary selection:text-primary-ink">
      {/* ------------------------------------------------------------------ */}
      {/* 1. HERO — Hallmark Stage + Interactive 3D Isometric Cube (iso-stack)*/}
      {/* ------------------------------------------------------------------ */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-14 md:pb-20 border-b border-rule">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headline, One Sentence, Actions, Proof Ledger */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-semibold tracking-tight text-foreground leading-[1.04] max-w-[17ch]">
                {isEn
                  ? 'Autonomous web and AI systems for enterprise.'
                  : 'Sistemas web y ventas autónomas con IA.'}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted leading-relaxed max-w-[52ch]">
                {isEn
                  ? 'We engineer 0.6-second Next.js platforms, 24/7 WhatsApp AI agents, and automated CRM workflows that turn traffic into revenue.'
                  : 'Construimos plataformas en Next.js con carga en 0.6 segundos, agentes de IA 24/7 en WhatsApp y automatizaciones conectadas a tu CRM.'}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-primary text-primary-ink font-medium text-sm sm:text-base hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  {isEn ? 'Request technical diagnosis on WhatsApp' : 'Solicitar diagnóstico por WhatsApp'}
                </a>
                <Link
                  href={projectsHref}
                  className="inline-flex items-center justify-center h-12 px-6 rounded-lg border border-rule bg-surface text-foreground font-medium text-sm sm:text-base hover:bg-card transition-colors whitespace-nowrap"
                >
                  {isEn ? 'Inspect 15 deployed systems' : 'Ver 15 sistemas en producción'}
                </Link>
              </div>

              {/* Ledger Foot — Sibling stats separated by hairlines */}
              <dl className="pt-8 border-t border-rule grid grid-cols-3 gap-4 sm:gap-0 sm:divide-x sm:divide-rule">
                <div className="sm:pr-6">
                  <dt className="text-xs text-muted mb-1">
                    {isEn ? 'WhatsApp AI latency' : 'Respuesta en WhatsApp'}
                  </dt>
                  <dd className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground tabular-nums">
                    &lt; 1.2s
                  </dd>
                </div>
                <div className="sm:px-6">
                  <dt className="text-xs text-muted mb-1">
                    {isEn ? 'Core Web Vitals & SEO' : 'Core Web Vitals y SEO'}
                  </dt>
                  <dd className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground tabular-nums">
                    98 / 100
                  </dd>
                </div>
                <div className="sm:pl-6">
                  <dt className="text-xs text-muted mb-1">
                    {isEn ? 'Live in US, LatAm & ES' : 'Operando en 4 países'}
                  </dt>
                  <dd className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground tabular-nums">
                    15+
                  </dd>
                </div>
              </dl>
            </div>

            {/* Right Column: Interactive 3D Isometric Cube Stage */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <HeroIsometricGraphic isEn={isEn} />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. OPERATIONAL DIAGNOSIS — Sticky Scroll-Driven 3D Bar Comparator   */}
      {/* ------------------------------------------------------------------ */}
      <section
        ref={leakSectionRef}
        className="relative h-[165vh] lg:h-[155vh] bg-surface border-b border-rule"
      >
        <div className="sticky top-16 lg:top-20 min-h-[calc(100dvh-4rem)] lg:min-h-[calc(100vh-5rem)] flex items-center py-6 sm:py-10 lg:py-8">
          <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-8 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading + Scroll Progress Bar + 3D Isometric Bar Chart */}
              <div className="lg:col-span-5 space-y-4 sm:space-y-6">
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-primary">
                    <span>
                      {isEn
                        ? `STEP 0${activeLeak + 1} OF 03`
                        : `FUGA OPERATIVA 0${activeLeak + 1} DE 03`}
                    </span>
                    <span className="text-muted">
                      {isEn ? 'Scroll to inspect' : 'Haz scroll para avanzar'}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground leading-tight">
                    {isEn
                      ? 'Three operational leaks that stall B2B growth.'
                      : 'Tres fugas operativas que frenan el crecimiento de una empresa.'}
                  </h2>
                  <p className="text-muted text-xs sm:text-base leading-relaxed">
                    {isEn
                      ? 'As you scroll, watch how the 3D bar model compares manual bottlenecks against an automated architecture.'
                      : 'A medida que bajas con el scroll, observa cómo cambia el gráfico de barras 3D entre una operación manual y nuestra arquitectura.'}
                  </p>

                  {/* Continuous Scroll Progress Bar (Mobile & Desktop) */}
                  <div className="h-1 w-full rounded-full bg-background border border-rule overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-150"
                      style={{
                        width: `${Math.max(15, Math.min(100, leakScrollProgress * 100))}%`,
                      }}
                    />
                  </div>
                </div>

                <BottleneckPrismFigure
                  activeLeak={activeLeak}
                  scrollProgress={leakScrollProgress}
                  onSelectLeak={handleSelectLeak}
                  isEn={isEn}
                />
              </div>

              {/* Right Column: Interactive Leak Cards Driven by Scroll (Mobile & Desktop) */}
              <ol className="lg:col-span-7 space-y-2.5 sm:space-y-4">
                {painPoints.map((item, idx) => {
                  const isSelected = activeLeak === idx;
                  return (
                    <li
                      key={item.num}
                      onClick={() => handleSelectLeak(idx)}
                      className={`p-4 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer grid grid-cols-12 gap-3 sm:gap-4 items-center ${
                        isSelected
                          ? 'bg-background border-primary shadow-[0_14px_34px_rgba(0,0,0,0.35)] opacity-100 sm:scale-[1.01]'
                          : 'bg-background/40 border-rule opacity-60 hover:opacity-85'
                      }`}
                    >
                      <span className="col-span-2 sm:col-span-1 font-mono text-xs sm:text-sm text-primary font-semibold tabular-nums">
                        {item.num}
                      </span>
                      <div className="col-span-7 sm:col-span-8 space-y-1">
                        <h3 className="text-sm sm:text-xl font-semibold text-foreground leading-snug">
                          {item.title}
                        </h3>
                        <p
                          className={`text-muted text-xs sm:text-base leading-relaxed ${
                            isSelected ? 'block' : 'hidden sm:block'
                          }`}
                        >
                          {item.desc}
                        </p>
                      </div>
                      <div className="col-span-3 text-right sm:pl-4 sm:border-l sm:border-rule">
                        <p className="text-base sm:text-2xl font-semibold text-primary tabular-nums">
                          {item.metric}
                        </p>
                        <p className="text-[10px] sm:text-xs text-muted mt-0.5 line-clamp-1 sm:line-clamp-none">
                          {item.metricLabel}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. INTERACTIVE SYSTEM WORKBENCH — 3D Pipeline Topology + Log        */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 md:py-32 bg-background border-b border-rule">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
          <div className="max-w-3xl mb-10 space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              {isEn
                ? 'How the system operates in real time.'
                : 'Cómo opera nuestra arquitectura en tiempo real.'}
            </h2>
            <p className="text-muted text-base sm:text-lg">
              {isEn
                ? 'Select a layer below to inspect its 3D node topology and live execution flow.'
                : 'Selecciona una capa para inspeccionar su topología 3D de nodos y el flujo real de ejecución.'}
            </p>
          </div>

          {/* Tab Selector */}
          <div
            role="tablist"
            aria-label={isEn ? 'System layers' : 'Capas del sistema'}
            className="flex flex-wrap gap-2 mb-8 border-b border-rule pb-4"
          >
            {(['whatsapp', 'web', 'crm'] as DemoKey[]).map((key) => {
              const isSelected = activeDemo === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveDemo(key)}
                  className={`h-11 px-5 rounded-lg text-sm font-medium transition-colors ${
                    isSelected
                      ? 'bg-primary text-primary-ink'
                      : 'bg-surface text-muted hover:text-foreground border border-rule'
                  }`}
                >
                  {demoData[key].tab}
                </button>
              );
            })}
          </div>

          {/* Workbench Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-2xl bg-surface border border-rule p-6 sm:p-10">
            {/* Left: Channel Summary + 3D Isometric Node Pipeline + Metrics */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-foreground">
                  {currentDemo.channelTitle}
                </h3>
                <p className="text-muted text-sm sm:text-base leading-relaxed">
                  {currentDemo.summary}
                </p>
              </div>

              {/* 3D Isometric Pipeline Figure */}
              <PipelineNodesFigure mode={activeDemo} isEn={isEn} />

              <div className="space-y-5">
                <dl className="grid grid-cols-3 gap-4 pt-4 border-t border-rule">
                  {currentDemo.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="text-xs text-muted mb-1">{m.label}</dt>
                      <dd className="text-lg sm:text-xl font-semibold text-foreground tabular-nums">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <a
                  href={currentDemo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 px-5 rounded-lg bg-primary text-primary-ink font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  {currentDemo.whatsappCta}
                </a>
              </div>
            </div>

            {/* Right: Conversation / Execution Log */}
            <div className="lg:col-span-7 rounded-xl bg-background border border-rule p-5 sm:p-7 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                {currentDemo.messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`p-4 sm:p-5 rounded-xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-surface border border-rule text-foreground ml-0 sm:mr-12'
                        : msg.role === 'agent'
                        ? 'bg-card border border-rule-strong text-foreground ml-0 sm:ml-12'
                        : 'bg-surface/80 border border-primary/40 text-primary font-mono text-xs'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs text-muted mb-1.5">
                      <span className="font-medium text-foreground">
                        {msg.role === 'user'
                          ? isEn
                            ? 'Client incoming message'
                            : 'Mensaje entrante del cliente'
                          : msg.role === 'agent'
                          ? 'Autonomek Engine'
                          : 'System Telemetry'}
                      </span>
                      <span className="font-mono tabular-nums">{msg.time}</span>
                    </div>
                    <p>{msg.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. ENGINEERING SPECIFICATION INDEX + 3D ARCHITECTURAL SCULPTURE     */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 md:py-32 bg-surface border-b border-rule">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                {isEn
                  ? 'Four engineering systems built for ROI.'
                  : 'Cuatro sistemas de ingeniería enfocados en retorno de inversión.'}
              </h2>
              <p className="text-muted text-base sm:text-lg">
                {isEn
                  ? 'Hover or select any capability to inspect its 3D architectural blueprint.'
                  : 'Pasa el cursor o selecciona cada sistema para inspeccionar su esquema 3D.'}
              </p>
            </div>
            <Link
              href={servicesHref}
              className="text-sm font-medium text-primary hover:underline whitespace-nowrap"
            >
              {isEn ? 'Compare all service specifications' : 'Ver especificaciones completas de servicios'}
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left: 4 Interactive System Cards */}
            <div className="lg:col-span-7 space-y-4">
              {capabilities.map((cap, idx) => {
                const isSelected = activeCapability === idx;
                return (
                  <div
                    key={cap.index}
                    onMouseEnter={() => setActiveCapability(idx)}
                    onClick={() => setActiveCapability(idx)}
                    className={`p-6 sm:p-7 rounded-2xl border transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-background border-primary'
                        : 'bg-background/60 border-rule hover:border-rule-strong'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="space-y-2 max-w-xl">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs px-2 py-0.5 rounded bg-surface border border-rule text-primary">
                            {cap.index}
                          </span>
                          <span className="font-mono text-xs text-muted">{cap.spec}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                          {cap.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted leading-relaxed">
                          {cap.desc}
                        </p>
                      </div>

                      <Link
                        href={cap.href}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg border border-rule bg-surface text-xs font-medium text-foreground hover:border-primary hover:text-primary transition-colors shrink-0 self-start"
                      >
                        <span>{isEn ? 'Inspect' : 'Ver módulo'}</span>
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right (Top on Mobile): Sticky 3D Blueprint Sculpture */}
            <div className="order-first lg:order-last lg:col-span-5 lg:sticky lg:top-28">
              <BlueprintSculptureFigure
                activeIndex={activeCapability}
                onSelect={setActiveCapability}
                isEn={isEn}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 5. PRODUCTION CASE STUDIES — Real Deployed Systems                  */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 md:py-32 bg-background border-b border-rule">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                {isEn
                  ? 'Systems operating in production.'
                  : 'Sistemas reales operando en producción.'}
              </h2>
              <p className="text-muted text-base sm:text-lg">
                {isEn
                  ? 'Select any case study to inspect its technical architecture, screenshots, and live deployment.'
                  : 'Selecciona cualquier caso de estudio para inspeccionar su arquitectura, capturas reales y enlace en vivo.'}
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {(
                [
                  { id: 'ALL', label: isEn ? 'All systems' : 'Todos' },
                  { id: 'IA', label: isEn ? 'AI Agents' : 'Agentes IA' },
                  { id: 'Web', label: isEn ? 'Web & SEO' : 'Páginas web' },
                  { id: 'Automatización', label: isEn ? 'Automation' : 'Automatización' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`h-10 px-4 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
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

          {/* Portfolio Grid — minmax(0, 1fr) tracks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => handleOpenProject(project)}
                className="group min-w-0 rounded-2xl bg-surface border border-rule overflow-hidden flex flex-col justify-between cursor-pointer hover:border-primary transition-colors"
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
                      <span className="font-mono text-[11px] text-primary">{project.category}</span>
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
                  <span>{isEn ? 'Inspect case study' : 'Inspeccionar caso'}</span>
                  {project.url && <ExternalLink size={13} className="text-primary" />}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href={projectsHref}
              className="inline-flex items-center justify-center h-11 px-6 rounded-lg border border-rule bg-surface text-foreground text-sm font-medium hover:bg-card transition-colors"
            >
              {isEn ? 'Explore all 15 case studies' : 'Explorar los 15 casos de estudio'}
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 6. ENGINEERING METHODOLOGY & INFRASTRUCTURE — Del Caos al Orden     */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 md:py-32 bg-surface border-b border-rule">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Heading + 3D Stepped Pyramid Figure */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-mono text-primary">
                  {isEn ? 'ENGINEERING METHODOLOGY' : 'PROCESO DE INGENIERÍA'}
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                  {isEn
                    ? 'From operational chaos to autonomous order.'
                    : 'Del caos operativo al orden en 4 fases.'}
                </h2>
                <p className="text-muted text-base leading-relaxed">
                  {isEn
                    ? 'We deliver turnkey software and AI architectures without disrupting your current sales team.'
                    : 'Entregamos sistemas llave en mano listos para producir sin interrumpir la operación diaria de tu empresa.'}
                </p>
              </div>

              <MethodologyHelixFigure
                activeStep={activeMethodStep}
                onSelectStep={setActiveMethodStep}
                isEn={isEn}
              />
            </div>

            {/* Right: 4-Stage Roadmap Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {methodologySteps.map((item, idx) => {
                const isSelected = activeMethodStep === idx;
                return (
                  <div
                    key={item.step}
                    onMouseEnter={() => setActiveMethodStep(idx)}
                    onClick={() => setActiveMethodStep(idx)}
                    className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-4 ${
                      isSelected
                        ? 'bg-background border-primary shadow-[0_12px_30px_rgba(0,0,0,0.3)]'
                        : 'bg-background/50 border-rule hover:border-rule-strong'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm font-semibold text-primary">
                          {item.step}
                        </span>
                        <span className="font-mono text-[11px] text-muted">{item.timeline}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Differentiators Ledger Row */}
          <div className="pt-12 border-t border-rule grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((diff) => (
              <div
                key={diff.code}
                className="p-6 rounded-2xl bg-background border border-rule space-y-2.5"
              >
                <span className="inline-block font-mono text-xs px-2.5 py-0.5 rounded bg-surface border border-rule text-primary">
                  {diff.code}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{diff.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 7. VERIFIED CLIENT TESTIMONIALS — Real Production Impact            */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 md:py-32 bg-background border-b border-rule">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
          <div className="max-w-2xl mb-12 space-y-3">
            <p className="text-xs font-mono text-primary">
              {isEn ? 'VERIFIED CLIENT IMPACT' : 'RESULTADOS EN CLIENTES REALES'}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              {isEn
                ? 'Companies scaling with our systems.'
                : 'Testimonios reales de empresas en operación.'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote
                key={t.author}
                className="p-6 sm:p-8 rounded-2xl bg-surface border border-rule flex flex-col justify-between gap-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-rule pb-3">
                    <span className="text-xs font-mono text-primary font-medium">{t.metric}</span>
                    <span className="text-xs text-primary tracking-widest">★★★★★</span>
                  </div>
                  <p className="text-sm sm:text-base text-foreground leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <footer className="flex items-center gap-3.5 pt-4 border-t border-rule">
                  <div className="w-10 h-10 rounded-full bg-card border border-primary/50 flex items-center justify-center font-mono text-xs font-semibold text-primary shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.author}</div>
                    <div className="text-xs font-mono text-muted">{t.role}</div>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 6. FAQ & TECHNICAL CLARITY + 3D SLA TRANSCEIVER FIGURE             */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
                  {isEn
                    ? 'Technical and commercial questions.'
                    : 'Preguntas técnicas y comerciales frecuentes.'}
                </h2>
                <p className="text-muted text-base leading-relaxed">
                  {isEn
                    ? 'Have a specific integration question? Message us directly on WhatsApp and an engineer will answer within minutes.'
                    : '¿Tienes una duda específica sobre tu operación? Escríbenos por WhatsApp y un ingeniero te responderá en minutos.'}
                </p>
              </div>

              {/* 3D Isometric SLA Transceiver Figure */}
              <SlaTransceiverFigure isEn={isEn} />

              <div>
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto h-11 px-6 rounded-lg bg-primary text-primary-ink font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  {isEn ? 'Ask an engineer on WhatsApp' : 'Consultar a un ingeniero en WhatsApp'}
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 divide-y divide-rule border-y border-rule">
              {faqs.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="py-5">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 text-left py-2"
                    >
                      <span className="text-base sm:text-lg font-medium text-foreground">
                        {item.q}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-muted shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-primary' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.18 }}
                          className="pt-3 pb-2 text-sm sm:text-base text-muted leading-relaxed max-w-[65ch]"
                        >
                          {item.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
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
