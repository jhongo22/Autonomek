'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Check, ExternalLink, MessageSquare, Calendar, FileCheck, Users } from 'lucide-react';
import { PROJECTS, PROJECTS_EN, Project } from '@/data/projects';
import ProjectDetailsModal from '@/components/ProjectDetailsModal';

export default function AgentesIAPageClient({ locale = 'es' }: { locale?: 'es' | 'en' }) {
  const pathname = usePathname() || '/';
  const isEn = locale === 'en' || pathname.startsWith('/en') || pathname.startsWith('/us');
  const isEsExplicit = pathname.startsWith('/es');
  const isUsExplicit = pathname.startsWith('/us');
  const basePrefix = isEn ? (isUsExplicit ? '/us' : '/en') : isEsExplicit ? '/es' : '';

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
          title: 'WhatsApp Sales & Lead Qualification Assistant',
          desc: 'Replies in 1 second, understands text and voice notes, answers product and pricing questions, and transfers qualified buyers to your human sales team with a clear summary.',
          badge: '24/7 operation · 1s reply',
          icon: MessageSquare,
        },
        {
          id: '02',
          title: 'Automatic Appointment & Calendar Booking',
          desc: 'Checks live availability in your calendar, books appointments without double-booking, sends automatic reminders, and handles rescheduling on its own.',
          badge: 'Google Calendar & CRM sync',
          icon: Calendar,
        },
        {
          id: '03',
          title: 'Customer Support Trained on Your Catalog & Docs',
          desc: 'Learns from your PDFs, catalogs, price lists, and company policies so it always gives accurate, helpful answers without making things up.',
          badge: '100% based on your business',
          icon: Users,
        },
        {
          id: '04',
          title: 'Order Taking & Payment Receipt Verification',
          desc: 'Takes full customer orders via text or voice, reads payment transfer screenshots, verifies the amount, and sends the confirmed order to your team.',
          badge: 'Automatic order & receipt check',
          icon: FileCheck,
        },
      ]
    : [
        {
          id: '01',
          title: 'Asistente de Ventas y Atención en WhatsApp',
          desc: 'Responde en 1 segundo, entiende texto y notas de voz, resuelve dudas de precios o productos y pasa los clientes listos para comprar a tu equipo humano con un resumen claro.',
          badge: 'Atención 24/7 · Respuesta en 1 seg',
          icon: MessageSquare,
        },
        {
          id: '02',
          title: 'Recepcionista y Agendamiento de Citas',
          desc: 'Consulta disponibilidad real en tu agenda, reserva citas sin cruces de horario, envía recordatorios automáticos y gestiona reprogramaciones sin quitarle tiempo a tu equipo.',
          badge: 'Conectado a tu calendario y CRM',
          icon: Calendar,
        },
        {
          id: '03',
          title: 'Soporte Entrenado con tu Catálogo y Documentos',
          desc: 'Aprende de tus catálogos, lista de precios y preguntas frecuentes para responder con precisión sobre tu negocio sin inventar información.',
          badge: '100% adaptado a tu empresa',
          icon: Users,
        },
        {
          id: '04',
          title: 'Toma de Pedidos y Validación de Comprobantes',
          desc: 'Recibe pedidos completos por escrito o por audio, revisa fotos de comprobantes de transferencia bancaria y envía la orden lista a tu equipo operativo.',
          badge: 'Lectura de audios y pagos',
          icon: FileCheck,
        },
      ];

  return (
    <main className="min-h-screen w-full bg-background text-foreground pt-28 md:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Hero */}
        <header className="pb-16 md:pb-24 border-b border-rule grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <p className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
              {isEn ? 'Flagship Service' : 'Servicio Estrella'}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
              {isEn
                ? '24/7 WhatsApp AI Sales & Booking Assistants.'
                : 'Agentes de IA en WhatsApp que atienden, cotizan y agendan 24/7.'}
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-[60ch]">
              {isEn
                ? 'Never lose a customer because of a slow reply again. Your virtual assistant answers in 1 second day and night, listens to voice notes, shares your catalog, and schedules appointments in your calendar.'
                : 'No vuelvas a perder un cliente por tardar en responder. Tu asistente virtual atiende en 1 segundo día y noche, escucha notas de voz, comparte tu catálogo y agenda citas directamente en tu calendario.'}
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-ink px-7 py-3.5 text-sm sm:text-base font-semibold hover:opacity-90 transition"
              >
                {isEn ? 'Quote an AI agent on WhatsApp' : 'Cotizar agente IA por WhatsApp'}
              </a>
            </div>
          </div>

          {/* Simple Visual Chat Preview */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-rule bg-surface p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-rule pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <MessageSquare size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {isEn ? 'WhatsApp Business AI' : 'Asistente Comercial IA'}
                    </p>
                    <p className="text-xs text-primary">
                      {isEn ? 'Online · Replies in 1s' : 'En línea · Responde en 1 seg'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="rounded-2xl bg-background border border-rule p-3.5 text-foreground">
                  {isEn
                    ? 'Hi! I need a quote for 12 units next month. Do you have availability?'
                    : '¡Hola! Necesito cotizar 12 equipos para el próximo mes. ¿Tienen disponibilidad?'}
                </div>
                <div className="rounded-2xl bg-card border border-rule-strong p-3.5 text-foreground">
                  {isEn
                    ? 'Hello! Yes, we have stock available and corporate pricing for 12 units. Shall I book a 15-minute call tomorrow at 10:00 AM?'
                    : '¡Hola! Sí tenemos disponibilidad y tarifa especial para 12 unidades. ¿Te agendo una llamada mañana a las 10:00 a. m. para enviarte la cotización formal?'}
                </div>
              </div>
              <div className="rounded-xl bg-primary/10 border border-primary/30 px-4 py-2.5 text-xs text-primary flex items-center gap-2">
                <Check size={14} />
                <span>
                  {isEn
                    ? 'Customer registered in CRM & appointment booked'
                    : 'Cliente registrado y cita agendada automáticamente'}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* 4 Clear Capabilities Grid */}
        <section className="py-16 md:py-24 border-b border-rule">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-10">
            {isEn
              ? 'What can our WhatsApp AI assistant do for your business?'
              : '¿Qué puede hacer este agente de IA por tu negocio?'}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {blueprints.map((bp) => {
              const IconComponent = bp.icon;
              return (
                <div
                  key={bp.id}
                  className="rounded-3xl border border-rule bg-surface p-7 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <IconComponent size={20} />
                    </span>
                    <span className="rounded-full bg-background border border-rule px-3 py-1 text-xs font-medium text-primary">
                      {bp.badge}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                    {bp.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted leading-relaxed">{bp.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Deployed AI Projects */}
        <section className="py-16 md:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              {isEn ? 'Real AI agents working today.' : 'Agentes de IA funcionando en empresas reales.'}
            </h2>
            <Link
              href={isEn ? `${basePrefix}/projects` : `${basePrefix}/proyectos`}
              className="text-sm font-medium text-primary hover:underline"
            >
              {isEn ? 'See all projects →' : 'Ver todos los proyectos →'}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => handleOpenDetails(project)}
                className="group rounded-3xl bg-surface border border-rule overflow-hidden flex flex-col justify-between cursor-pointer hover:border-primary transition-colors"
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
                      <span className="text-primary">{project.category}</span>
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
                  <span>{isEn ? 'View project details' : 'Ver detalles del proyecto'}</span>
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
