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
import { WhatsAppAiWorkbenchBento } from '@/components/ui/service-bento-workbenches';

type Region = 'co' | 'mx' | 'es' | 'us' | 'en';

export default function AgentesClient({ region = 'co' }: { region?: Region }) {
  const isEn = region === 'us' || region === 'en';
  const basePrefix =
    region === 'en' ? '/en' : region === 'us' ? '/us' : region === 'es' ? '/es' : '';

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeCapIndex, setActiveCapIndex] = useState<number>(0);

  const projectsList = isEn ? PROJECTS_EN : PROJECTS;
  const aiProjects = projectsList.filter((p) => p.category === 'IA');

  const whatsappDirectUrl = isEn
    ? 'https://wa.me/573004435894?text=Hello%20Autonomek%2C%20I%20want%20a%2024%2F7%20WhatsApp%20AI%20agent%20for%20my%20business.'
    : 'https://wa.me/573004435894?text=Hola%20Autonomek%2C%20quiero%20un%20agente%20de%20IA%20en%20WhatsApp%2024%2F7%20para%20mi%20empresa.';

  const servicesHref = isEn ? `${basePrefix}/services` : `${basePrefix}/servicios`;
  const projectsHref = isEn ? `${basePrefix}/projects` : `${basePrefix}/proyectos`;

  const capabilities = isEn
    ? [
        {
          num: '01',
          title: 'Trained on your real catalog, PDFs & pricing rules',
          metric: '0% Hallucinations',
          desc: 'Your assistant never invents prices or policies. It queries your real inventory, service menu, and business rules in milliseconds using RAG retrieval before sending any message.',
          specs: ['Live Price Lists & Stock', 'Custom Business Guardrails', 'Natural Brand Tone'],
        },
        {
          num: '02',
          title: 'Understands voice notes & verifies payment receipts',
          metric: 'Multimodal AI',
          desc: 'Customers in Latin America and the US send audio messages and screenshots of bank transfers. Your agent transcribes voice notes and extracts receipt numbers and amounts automatically.',
          specs: ['Voice Note Transcription', 'OCR Receipt Validation', 'Product Photo Recognition'],
        },
        {
          num: '03',
          title: 'Direct calendar booking & CRM pipeline sync',
          metric: 'Google Calendar + CRM',
          desc: 'Instead of saying "an advisor will contact you later", the agent checks your real availability, locks the appointment slot, sends reminders, and logs the deal in your CRM.',
          specs: ['Real-Time Slot Locking', 'Automated WhatsApp Reminders', 'HubSpot / Sheets Sync'],
        },
        {
          num: '04',
          title: 'Smart handoff to human advisors with full context',
          metric: 'Instant Escalation',
          desc: 'When a high-ticket client requests custom negotiation or human assistance, the AI notifies your advisor on WhatsApp with a structured summary of the conversation.',
          specs: ['Executive Lead Summary', 'VIP Priority Routing', 'Zero Context Lost'],
        },
      ]
    : [
        {
          num: '01',
          title: 'Entrenado con tu catálogo, precios y políticas reales',
          metric: '0% Alucinaciones',
          desc: 'Tu agente nunca inventa precios ni promociones. Consulta en milisegundos tu inventario, lista de precios y reglas de negocio mediante arquitectura RAG antes de responder cada mensaje.',
          specs: ['Catálogo y Stock en Vivo', 'Reglas Comerciales Estrictas', 'Tono Natural y Cercano'],
        },
        {
          num: '02',
          title: 'Escucha notas de voz y valida comprobantes de pago',
          metric: 'IA Multimodal',
          desc: 'Tus clientes envían audios largos y capturas de transferencias (Nequi, Bancolombia, Zelle). El agente transcribe notas de voz al instante y verifica montos y referencias por visión artificial.',
          specs: ['Transcripción de Audios', 'Lectura OCR de Comprobantes', 'Reconocimiento de Fotos'],
        },
        {
          num: '03',
          title: 'Agendamiento directo en tu calendario y registro en CRM',
          metric: 'Google Calendar + CRM',
          desc: 'En lugar de decir "un asesor te escribirá mañana", el agente consulta tu disponibilidad real, bloquea el horario en tu agenda, envía recordatorios y registra el cliente en tu CRM.',
          specs: ['Bloqueo de Horarios en Vivo', 'Recordatorios Automáticos', 'Sincronización CRM / Excel'],
        },
        {
          num: '04',
          title: 'Transferencia inteligente a tu equipo humano con resumen',
          metric: 'Escalado sin Fricción',
          desc: 'Cuando un cliente calificado requiere una negociación especial, el agente notifica a tu vendedor en WhatsApp entregándole el resumen ejecutivo de todo lo conversado.',
          specs: ['Resumen Ejecutivo del Lead', 'Enrutamiento por Especialista', 'Cero Pérdida de Contexto'],
        },
      ];

  const comparisonRows = isEn
    ? [
        {
          criterion: 'Average first response time',
          manual: '15 min to 4 hours',
          bot: 'Instant (rigid menu)',
          autonomek: '1.1 seconds (natural language)',
        },
        {
          criterion: 'Nights, weekends & holidays coverage',
          manual: 'Offline (leads go to competitors)',
          bot: 'Leaves customers stuck in loops',
          autonomek: 'Closes orders & books 24/7/365',
        },
        {
          criterion: 'Voice notes & payment screenshots',
          manual: 'Slow manual review',
          bot: 'Cannot process audio or images',
          autonomek: 'Transcribes audio & verifies receipts',
        },
        {
          criterion: 'Appointment booking & CRM entry',
          manual: 'Manual copy-pasting across tabs',
          bot: 'Sends external link only',
          autonomek: 'Books directly inside WhatsApp chat',
        },
        {
          criterion: 'Simultaneous conversations capacity',
          manual: '3 to 5 chats per person',
          bot: 'Unlimited (high drop-off rate)',
          autonomek: '500+ concurrent chats with 0 wait',
        },
      ]
    : [
        {
          criterion: 'Tiempo promedio de primera respuesta',
          manual: '15 min a 4 horas',
          bot: 'Inmediato (menú rígido)',
          autonomek: '1.1 segundos (conversación natural)',
        },
        {
          criterion: 'Atención noches, domingos y festivos',
          manual: 'Sin atención (ventas perdidas)',
          bot: 'Deja al cliente atrapado en opciones',
          autonomek: 'Cotiza, agenda y vende 24/7/365',
        },
        {
          criterion: 'Notas de voz y comprobantes de pago',
          manual: 'Revisión manual lenta',
          bot: 'No entiende audios ni imágenes',
          autonomek: 'Escucha audios y valida transferencias',
        },
        {
          criterion: 'Agendamiento en calendario y CRM',
          manual: 'Digitación manual entre pestañas',
          bot: 'Solo envía un link externo',
          autonomek: 'Agenda en vivo dentro de WhatsApp',
        },
        {
          criterion: 'Capacidad de chats simultáneos',
          manual: '3 a 5 chats por asesor',
          bot: 'Ilimitado (alto abandono)',
          autonomek: '+500 conversaciones al mismo tiempo',
        },
      ];

  const guarantees = isEn
    ? [
        'Official Meta WhatsApp Business API',
        'Zero hallucination guardrails',
        'Voice note & receipt vision included',
        'Direct Google Calendar & CRM sync',
        'Deployed in 2 to 3 weeks',
        '100% custom trained on your business',
      ]
    : [
        'API Oficial de WhatsApp Business (Meta)',
        'Candados contra respuestas inventadas',
        'Lectura de audios y comprobantes incluida',
        'Conexión directa con Agenda y CRM',
        'Implementación en 2 a 3 semanas',
        'Entrenado 100% a la medida de tu negocio',
      ];

  const faqs = isEn
    ? [
        {
          q: 'Is this a traditional button chatbot ("Press 1 for sales")?',
          a: 'No. Traditional bots frustrate customers with rigid numbered menus. We build conversational AI agents that understand natural text, listen to voice notes, analyze payment receipts, and hold fluid sales conversations like your best advisor.',
        },
        {
          q: 'How do you prevent the AI from inventing prices or policies?',
          a: 'We use Retrieval-Augmented Generation (RAG) with strict guardrails. The agent only answers using your official catalog, pricing tables, and approved guidelines. If a client asks something outside its scope, it escalates the chat to your human team.',
        },
        {
          q: 'Can my human sales team intervene in the same WhatsApp number?',
          a: 'Yes. Your team can view conversations in real time, receive automatic summaries when a buyer is qualified, and take over any chat whenever they want without changing your company WhatsApp number.',
        },
        {
          q: 'How long does it take to train and launch our WhatsApp AI agent?',
          a: 'Between 2 and 3 weeks. In week 1 we map your catalog and sales flow; in week 2 we train the agent and connect your calendar/CRM; and after testing with you in a sandbox environment, we launch to production.',
        },
        {
          q: 'Is my WhatsApp number safe from bans?',
          a: 'Yes. We integrate through the official Meta WhatsApp Cloud API, ensuring enterprise stability, end-to-end security, and zero risk of number blocks.',
        },
      ]
    : [
        {
          q: '¿Es un chatbot tradicional de botones ("Marque 1 para ventas")?',
          a: 'No. Los bots de botones frustran a los clientes cuando hacen una pregunta específica. Nuestros agentes de IA comprenden lenguaje natural, escuchan notas de voz, leen comprobantes de pago y conversan con la fluidez de tu mejor asesor comercial.',
        },
        {
          q: '¿Cómo garantizan que la IA no invente precios ni información falsa?',
          a: 'Implementamos arquitectura RAG con candados estrictos. El agente consulta únicamente tu catálogo oficial, tarifas y reglas autorizadas antes de responder. Si alguien pregunta algo fuera de alcance, transfiere el chat a un humano.',
        },
        {
          q: '¿Mi equipo humano puede intervenir en el mismo número de WhatsApp?',
          a: 'Sí. Tu equipo comercial puede ver las conversaciones en tiempo real, recibir alertas con el resumen del cliente listo para cerrar y tomar el control de cualquier chat cuando lo desee.',
        },
        {
          q: '¿Cuánto tiempo toma tener nuestro agente de IA funcionando?',
          a: 'Entre 2 y 3 semanas. En la primera semana estructuramos tu catálogo y flujo comercial; en la segunda entrenamos el agente y conectamos tu agenda o CRM; haces pruebas reales con nosotros y salimos en vivo.',
        },
        {
          q: '¿Existe algún riesgo de bloqueo para nuestra línea de WhatsApp?',
          a: 'Ninguno. Trabajamos sobre la API Oficial de WhatsApp Business (Meta Cloud API), lo que garantiza estabilidad empresarial y cumplimiento total con las normas de Meta.',
        },
      ];

  return (
    <main className="min-h-screen w-full bg-background text-foreground selection:bg-primary selection:text-primary-ink">
      {/* ================================================================== */}
      {/* 1. HERO + FULL-WIDTH INTERACTIVE WHATSAPP AI WORKBENCH BENTO       */}
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
                {isEn ? 'WhatsApp AI Agents' : 'Agentes de IA en WhatsApp'}
              </span>
            </nav>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-tight leading-[1.07] text-foreground">
              {isEn ? (
                <>
                  Your AI sales advisor on WhatsApp{' '}
                  <span className="text-muted font-normal">
                    that replies, quotes, and books in 1 second.
                  </span>
                </>
              ) : (
                <>
                  Tu asesor de IA en WhatsApp{' '}
                  <span className="text-muted font-normal">
                    que responde, cotiza y agenda citas en 1 segundo.
                  </span>
                </>
              )}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted">
              {isEn
                ? 'Stop losing buyers who message at night or on weekends. We train an AI agent with your catalog that listens to voice notes, verifies payment receipts, and schedules appointments in your calendar 24/7.'
                : 'Deja de perder clientes por tardar horas en contestar o no atender de noche. Entrenamos un agente con tu catálogo real que escucha audios, valida comprobantes de pago y agenda citas en tu calendario 24/7.'}
            </p>

            <div className="mt-8 flex w-full flex-col items-stretch gap-3.5 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-ink px-7 py-3.5 text-sm sm:text-base font-semibold hover:opacity-90 transition"
              >
                {isEn ? 'Request a live demo on WhatsApp' : 'Solicitar demo en mi WhatsApp'}
              </a>
              <a
                href="#arquitectura"
                className="inline-flex items-center justify-center rounded-full border border-rule bg-surface text-foreground px-7 py-3.5 text-sm sm:text-base font-semibold hover:bg-card transition"
              >
                {isEn ? 'See how it works' : 'Ver cómo funciona en vivo'}
              </a>
            </div>
          </div>

          {/* Interactive 12-Column WhatsApp AI Workbench Bento right below Hero */}
          <div className="mt-14">
            <WhatsAppAiWorkbenchBento isEn={isEn} />
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 2. ARQUITECTURA EN VIVO — Interactive Simulator + Hairline Index   */}
      {/* ================================================================== */}
      <section
        id="arquitectura"
        className="scroll-mt-24 py-20 md:py-28 bg-surface/40 border-b border-rule"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {isEn ? 'Conversational Engineering' : 'Ingeniería Conversacional'}
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                {isEn
                  ? 'More than chat: an agent connected to your operation.'
                  : 'Mucho más que responder mensajes: un agente conectado a tu operación.'}
              </h2>
            </div>
            <p className="text-muted text-base sm:text-lg max-w-md">
              {isEn
                ? 'Test the interactive simulator on the left and inspect the 4 engineering layers that power every conversation.'
                : 'Prueba el simulador en vivo a la izquierda y explora las 4 capas técnicas que respaldan cada conversación.'}
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Left 5 Cols: Interactive Mini App + Quick Metric Ledger */}
            <div className="lg:col-span-5 rounded-[28px] border border-rule bg-surface p-5 sm:p-7 flex flex-col justify-between gap-6 shadow-lg shadow-black/20">
              <div className="flex items-center justify-between gap-3 border-b border-rule pb-4">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-primary">
                    {isEn ? 'INTERACTIVE SANDBOX' : 'SIMULADOR INTERACTIVO'}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-0.5">
                    {isEn ? 'Live WhatsApp Flow' : 'Flujo en Vivo de WhatsApp'}
                  </h3>
                </div>
                <span className="rounded-full bg-primary/15 border border-primary/25 px-3 py-1 font-mono text-xs font-semibold text-primary">
                  1.1s · 24/7
                </span>
              </div>

              <ServiceMiniApp id="agents" isEn={isEn} />

              <div className="grid grid-cols-3 divide-x divide-rule border-t border-rule pt-4 text-center">
                <div className="px-2">
                  <div className="font-mono text-lg sm:text-xl font-semibold text-foreground tabular-nums">
                    99.4%
                  </div>
                  <div className="text-[11px] text-muted mt-0.5">
                    {isEn ? 'Catalog accuracy' : 'Precisión catálogo'}
                  </div>
                </div>
                <div className="px-2">
                  <div className="font-mono text-lg sm:text-xl font-semibold text-primary tabular-nums">
                    +3.4x
                  </div>
                  <div className="text-[11px] text-muted mt-0.5">
                    {isEn ? 'Lead conversion' : 'Cierre de citas'}
                  </div>
                </div>
                <div className="px-2">
                  <div className="font-mono text-lg sm:text-xl font-semibold text-foreground tabular-nums">
                    24/7
                  </div>
                  <div className="text-[11px] text-muted mt-0.5">
                    {isEn ? 'Active coverage' : 'Cobertura activa'}
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Hallmark Hairline Index Rows (No boxy icon grids) */}
            <div className="lg:col-span-7 border-t border-rule">
              {capabilities.map((cap, idx) => {
                const isActive = activeCapIndex === idx;
                return (
                  <div
                    key={cap.num}
                    onClick={() => setActiveCapIndex(idx)}
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
                          /{cap.num}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                          {cap.title}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-primary shrink-0 pl-8 sm:pl-0">
                        {cap.metric}
                      </span>
                    </div>

                    <div className="mt-3 pl-8 sm:pl-9 space-y-4">
                      <p className="text-sm sm:text-base leading-relaxed text-muted">
                        {cap.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cap.specs.map((spec) => (
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
                {isEn ? 'Operational Benchmark' : 'Comparativa Operativa'}
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                {isEn
                  ? 'Why companies replace rigid bots and slow manual replies.'
                  : 'Por qué las empresas reemplazan los bots de botones y la atención lenta.'}
              </h2>
            </div>
            <p className="text-muted text-base sm:text-lg max-w-md">
              {isEn
                ? '78% of buyers purchase from the first business that answers clearly. Compare how each channel performs.'
                : 'El 78% de los clientes le compra a la primera empresa que le responde con claridad. Compara la diferencia real.'}
            </p>
          </div>

          {/* Full-width hairline table — horizontal rules only, no outer card box */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="border-b border-rule-strong text-[11px] font-mono uppercase tracking-[0.14em] text-muted">
                  <th className="py-4 pr-6 font-semibold w-[32%]">
                    {isEn ? 'Operational Dimension' : 'Dimensión Operativa'}
                  </th>
                  <th className="py-4 px-6 font-semibold w-[22%]">
                    {isEn ? 'Manual Human Reply' : 'Atención Manual'}
                  </th>
                  <th className="py-4 px-6 font-semibold w-[22%]">
                    {isEn ? 'Button Chatbot' : 'Chatbot de Botones'}
                  </th>
                  <th className="py-4 pl-6 font-semibold text-primary w-[24%]">
                    {isEn ? 'Autonomek AI Agent' : 'Agente IA Autonomek'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rule text-sm sm:text-base">
                {comparisonRows.map((row) => (
                  <tr key={row.criterion} className="hover:bg-surface/40 transition-colors">
                    <td className="py-5 pr-6 font-medium text-foreground">
                      {row.criterion}
                    </td>
                    <td className="py-5 px-6 text-muted font-mono text-xs sm:text-sm tabular-nums">
                      {row.manual}
                    </td>
                    <td className="py-5 px-6 text-muted font-mono text-xs sm:text-sm tabular-nums">
                      {row.bot}
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
      {/* 4. PROYECTOS REALES DE IA — Deployed WhatsApp AI Case Studies      */}
      {/* ================================================================== */}
      <section
        id="casos"
        className="scroll-mt-24 py-20 md:py-28 bg-surface/40 border-b border-rule"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {isEn ? 'Agents in Production' : 'Agentes en Producción'}
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                {isEn
                  ? 'WhatsApp AI agents already selling and booking today.'
                  : 'Agentes de IA que ya están atendiendo y vendiendo hoy.'}
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
            {aiProjects.map((project) => (
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
                    {isEn ? 'View architecture & results' : 'Ver arquitectura y resultados'}
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
                  {isEn ? 'Deployment Process' : 'Proceso de Implementación'}
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                  {isEn
                    ? 'From your catalog to an active AI agent in 4 connected steps.'
                    : 'De tu catálogo a un agente vendiendo en 4 pasos conectados.'}
                </h2>
              </div>
              <p className="text-muted text-base sm:text-lg max-w-md">
                {isEn
                  ? 'We handle all prompt engineering, RAG indexing, and Meta Cloud API configuration for your team.'
                  : 'Nos encargamos del entrenamiento con tus documentos, conexión al calendario y configuración oficial de Meta.'}
              </p>
            </div>

            <ProcessRoadmap isEn={isEn} />

            <div className="mt-12 rounded-[24px] border border-rule bg-surface/60 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary mb-5">
                {isEn
                  ? 'Included with every Autonomek WhatsApp AI Agent'
                  : 'Lo que incluye cada Agente de IA con Autonomek'}
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
                    ? 'Companies already automating sales with us.'
                    : 'Lo que dicen las empresas que ya automatizaron su atención.'}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-muted max-w-md">
                {isEn
                  ? 'Immediate impact on response speed, booked appointments, and nighttime orders.'
                  : 'Impacto inmediato en velocidad de respuesta, citas agendadas y ventas nocturnas.'}
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
                ? 'Clear answers about WhatsApp AI.'
                : 'Respuestas claras sobre Agentes de IA.'}
            </h2>
            <p className="mt-4 max-w-md text-base sm:text-lg leading-relaxed text-muted">
              {isEn
                ? 'Want to see how an agent would answer your specific clients? Message us on WhatsApp.'
                : '¿Quieres ver cómo respondería un agente a los clientes de tu negocio? Escríbenos por WhatsApp.'}
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
            {isEn ? '24/7 WhatsApp Sales & Booking' : 'Ventas y Agendamiento 24/7'}
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground">
            {isEn
              ? 'Ready to reply to every client in 1 second?'
              : '¿Listo para atender a cada cliente en 1 segundo?'}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-muted">
            {isEn
              ? 'Write to us on WhatsApp and receive a free diagnosis and live demo tailored to your catalog and calendar.'
              : 'Escríbenos por WhatsApp y recibe un diagnóstico sin costo con una demostración adaptada a tu catálogo y calendario.'}
          </p>
          <div className="mt-9 flex justify-center">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-ink px-8 py-4 text-base font-semibold hover:opacity-90 transition"
            >
              {isEn ? 'Talk with us on WhatsApp — Free Demo' : 'Hablar por WhatsApp — Solicitar Demo'}
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
