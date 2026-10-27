'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Check, ExternalLink } from 'lucide-react';
import { PROJECTS, PROJECTS_EN, Project } from '@/data/projects';
import ProjectDetailsModal from '@/components/ProjectDetailsModal';
import { BlueprintSculptureFigure } from '@/components/widgets/ArchitecturalFigures';

export default function AgentesIAPageClient({ locale = 'es' }: { locale?: 'es' | 'en' }) {
  const pathname = usePathname() || '/';
  const isEn = locale === 'en' || pathname.startsWith('/en') || pathname.startsWith('/us');
  const isEsExplicit = pathname.startsWith('/es');
  const isUsExplicit = pathname.startsWith('/us');
  const basePrefix = isEn ? (isUsExplicit ? '/us' : '/en') : (isEsExplicit ? '/es' : '');

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const aiProjects = useMemo(() => {
    const list = isEn ? PROJECTS_EN : PROJECTS;
    return list.filter((p) => p.category === 'IA').slice(0, 6);
  }, [isEn]);

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const whatsappUrl = isEn
    ? 'https://wa.me/573004435894?text=Hello%20Autonomek%2C%20I%20want%20to%20deploy%20a%2024%2F7%20WhatsApp%20AI%20Agent%20for%20my%20company.'
    : 'https://wa.me/573004435894?text=Hola%20Autonomek%2C%20quiero%20implementar%20un%20Agente%20de%20IA%2024%2F7%20en%20WhatsApp%20para%20mi%20empresa.';

  const blueprints = isEn
    ? [
        {
          id: '01',
          title: 'WhatsApp Sales & Lead Qualification Agent',
          stack: 'WhatsApp Cloud API · OpenAI · CRM Sync',
          desc: 'Responds in 1.1 seconds, understands text and voice notes, filters out non-qualified inquiries, and passes hot buyers to your sales executives with a full conversation summary.',
          metrics: '< 1.2s response · 24/7 operation',
        },
        {
          id: '02',
          title: 'Autonomous Appointment & Calendar Receptionist',
          stack: 'Google Calendar · Outlook · Medical & B2B CRMs',
          desc: 'Checks live calendar availability, books appointments, sends automated reminders 24h and 2h before the meeting, and processes reschedules without human intervention.',
          metrics: 'Up to 90% fewer no-shows',
        },
        {
          id: '03',
          title: 'Enterprise RAG Knowledge & Support Agent',
          stack: 'PostgreSQL pgvector · Supabase · Google Drive API',
          desc: 'Ingests your PDFs, technical manuals, and pricing sheets into a vector database so customers and internal staff receive exact answers with zero hallucinations.',
          metrics: '100% grounded in company docs',
        },
        {
          id: '04',
          title: 'Order & Payment Receipt Verification Agent',
          stack: 'OpenAI Vision · SQL · Telegram / ERP Alerts',
          desc: 'Takes multi-item orders in natural language, reads bank transfer screenshots using computer vision, verifies amounts, and dispatches confirmed orders to operations.',
          metrics: 'Automated receipt verification',
        },
      ]
    : [
        {
          id: '01',
          title: 'Agente de Ventas y Calificación en WhatsApp',
          stack: 'WhatsApp Cloud API · OpenAI · Sincronización CRM',
          desc: 'Responde en 1.1 segundos, comprende texto y notas de voz, filtra prospectos según presupuesto y transfiere clientes listos para compra a tu equipo humano con resumen ejecutivo.',
          metrics: 'Respuesta < 1.2s · Operación 24/7',
        },
        {
          id: '02',
          title: 'Recepcionista IA y Agendamiento de Citas',
          stack: 'Google Calendar · Outlook · CRMs Médicos y B2B',
          desc: 'Consulta disponibilidad real en tu agenda, reserva citas sin cruces de horario, envía recordatorios automáticos 24h y 2h antes y gestiona reprogramaciones.',
          metrics: 'Reducción de inasistencias hasta 90%',
        },
        {
          id: '03',
          title: 'Agente de Soporte con Base de Conocimiento (RAG)',
          stack: 'PostgreSQL pgvector · Supabase · Google Drive API',
          desc: 'Se conecta a tus catálogos, manuales técnicos y políticas en PDF para responder preguntas complejas de clientes o empleados sin inventar información.',
          metrics: '100% basado en tus documentos',
        },
        {
          id: '04',
          title: 'Agente Tomador de Pedidos y Validador de Pagos',
          stack: 'OpenAI Vision · PostgreSQL · Alertas a Cocina/Bodega',
          desc: 'Toma pedidos en lenguaje natural o audio, analiza capturas de transferencias bancarias mediante visión artificial y despacha la orden confirmada a tu operación.',
          metrics: 'Lectura automática de comprobantes',
        },
      ];

  return (
    <main className="min-h-screen w-full bg-background text-foreground pt-28 md:pt-36 pb-20">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Hero */}
        <header className="pb-16 md:pb-24 border-b border-rule grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.04]">
              {isEn
                ? 'Autonomous AI agents for WhatsApp, web, and CRM.'
                : 'Agentes de inteligencia artificial para WhatsApp, web y CRM.'}
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-[60ch]">
              {isEn
                ? 'Unlike rigid button-tree chatbots, our agents understand natural language, transcribe voice notes, inspect payment receipts, and execute actions inside your calendar and database 24/7.'
                : 'A diferencia de los bots rígidos de menú numérico, nuestros agentes entienden lenguaje natural, escuchan notas de voz, leen comprobantes de pago y agendan citas en tu calendario 24/7.'}
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-primary text-primary-ink font-medium text-sm sm:text-base hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                {isEn ? 'Quote an AI agent on WhatsApp' : 'Cotizar agente IA por WhatsApp'}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <BlueprintSculptureFigure activeIndex={0} isEn={isEn} />
          </div>
        </header>

        {/* 4 Production Blueprints */}
        <section className="py-16 md:py-24 border-b border-rule">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
            {isEn
              ? 'Four specialized AI architectures we deploy.'
              : 'Cuatro arquitecturas de agentes IA que implementamos.'}
          </h2>

          <div className="divide-y divide-rule border-y border-rule">
            {blueprints.map((bp) => (
              <div
                key={bp.id}
                className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                <div className="lg:col-span-1 font-mono text-sm text-primary tabular-nums pt-1">
                  {bp.id}
                </div>
                <div className="lg:col-span-4 space-y-1.5">
                  <h3 className="text-xl font-semibold text-foreground">{bp.title}</h3>
                  <p className="font-mono text-xs text-subtle">{bp.stack}</p>
                </div>
                <div className="lg:col-span-5 text-sm sm:text-base text-muted leading-relaxed">
                  {bp.desc}
                </div>
                <div className="lg:col-span-2 lg:text-right font-mono text-xs text-primary pt-1">
                  {bp.metrics}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related AI Case Studies */}
        <section className="py-16 md:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground">
                {isEn ? 'Deployed AI agents in production.' : 'Agentes de IA operando en producción.'}
              </h2>
            </div>
            <Link
              href={isEn ? `${basePrefix}/projects` : `${basePrefix}/proyectos`}
              className="text-sm font-medium text-primary hover:underline"
            >
              {isEn ? 'View all 15 case studies' : 'Ver los 15 casos de estudio'}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => handleOpenDetails(project)}
                className="group min-w-0 rounded-2xl bg-surface border border-rule overflow-hidden flex flex-col justify-between cursor-pointer hover:border-rule-strong transition-colors"
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
                  <div className="p-6 space-y-2">
                    <span className="text-xs text-muted block">{project.client}</span>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-5 pt-3 border-t border-rule flex items-center justify-between text-xs text-muted">
                  <span>{isEn ? 'Inspect architecture' : 'Inspeccionar arquitectura'}</span>
                  {project.url && <ExternalLink size={13} className="text-primary" />}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

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
