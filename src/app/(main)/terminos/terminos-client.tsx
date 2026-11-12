'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  FileText,
  Lock,
  Scale,
  Mail,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Sparkles,
} from 'lucide-react';

interface TerminosClientProps {
  isEn?: boolean;
  basePrefix?: string;
}

export default function TerminosClient({ isEn = false, basePrefix = '' }: TerminosClientProps) {
  const [activeSection, setActiveSection] = useState('alcance');

  const homeHref = basePrefix || '/';
  const privacyHref = isEn ? `${basePrefix}/privacy` : `${basePrefix}/privacidad`;
  const aboutHref = isEn ? `${basePrefix}/about` : `${basePrefix}/nosotros`;

  const sections = isEn
    ? [
        {
          id: 'acceptance',
          num: '01',
          title: 'Acceptance of Terms & Purpose',
          summary: 'Legal framework applicable to software engineering, AI deployment, and cloud integrations.',
          content: [
            'By accessing the website of AUTONOMEK (hereinafter "Autonomek", "we", or "the Company") or entering into a service agreement for custom software, high-performance websites, WhatsApp AI sales agents, or automated workflows, you ("the Client" or "User") agree to be bound by these Terms and Conditions.',
            'If you do not accept these terms in their entirety, you must refrain from contracting our engineering services or utilizing our proprietary platform tooling.',
            'Any customized technical scope, proposal, statement of work (SOW), or commercial quote approved via email, digital signature, or certified WhatsApp conversation forms an indivisible addendum to these general terms.',
          ],
        },
        {
          id: 'scope',
          num: '02',
          title: 'Scope of Engineering & Deliverables',
          summary: 'Written contracts, phased milestones, and change-request management.',
          content: [
            'Every engineering engagement is governed by a technical scope document outlining specific deliverables, milestone stages, technological stack, and acceptance criteria.',
            'Autonomek develops bespoke digital solutions adhering to modern industry standards (Next.js, TypeScript, PostgreSQL, Meta Cloud API, secure webhooks). Deliverables are validated against functional specifications agreed upon before kickoff.',
            'Change requests or modifications exceeding the signed scope document will be evaluated independently and billed via a supplemental technical addendum, preventing project creep and safeguarding delivery dates.',
          ],
        },
        {
          id: 'ip',
          num: '03',
          title: 'Intellectual Property & Code Ownership',
          summary: '100% transfer of custom source code upon complete financial settlement.',
          content: [
            'Custom Source Code: Upon 100% payment settlement of the project balance, Autonomek transfers full, perpetual, and unencumbered ownership of the bespoke source code, database schemas, and digital assets crafted exclusively for the Client.',
            'Proprietary Core Libraries: Pre-existing software libraries, developer utilities, boilerplate scaffolds, and internal AI orchestration harnesses developed independently by Autonomek remain the intellectual property of Autonomek. The Client receives a worldwide, royalty-free, perpetual license to use, adapt, and run these components within their deployed solution.',
            'Third-Party Services: External APIs (including OpenAI, Meta WhatsApp Cloud API, Vercel, Supabase, Google Cloud) remain subject to their respective vendor licenses and commercial terms.',
            'Showcase Rights: Unless a specific Mutual Non-Disclosure Agreement (NDA) with strict publicity embargoes has been signed, Autonomek reserves the right to showcase screenshots, technical benchmarks, and anonymized performance metrics in its public engineering portfolio.',
          ],
        },
        {
          id: 'payment',
          num: '04',
          title: 'Payment Terms, Deposits & Invoicing',
          summary: 'Clear 50/50 milestone billing, currency settlement, and no hidden subscriptions.',
          content: [
            'Fixed-Price Projects: Standard software and AI implementations require an initial 50% deposit before engineering kickoff, with the remaining 50% due upon functional delivery and sandbox approval prior to production domain transfer.',
            'SaaS & Maintenance Agreements: Continuous optimization, vector database maintenance, or dedicated SLA support plans are billed monthly or annually in advance.',
            'Taxes & Currencies: Invoices are issued in Colombian Pesos (COP) for Colombia, Mexican Pesos (MXN) for Mexico, and US Dollars (USD) or Euros (EUR) for international engagements, including all mandatory statutory invoices.',
            'Late Payments: Suspension of staging environments or API bridges may occur if invoices remain outstanding for more than 15 calendar days following written notification.',
          ],
        },
        {
          id: 'warranty',
          num: '05',
          title: 'Post-Launch Warranty & SLAs',
          summary: '30-day bug warranty included + clear boundary on third-party outages.',
          content: [
            'Warranty Period: Autonomek provides a 30-day post-launch technical warranty covering reproducible bugs, layout defects, or code anomalies directly attributable to the delivered scope.',
            'Warranty Exclusions: The warranty does not cover: (a) code or database alterations performed by unauthorized third parties or Client personnel; (b) unexpected breaking API changes, deprecations, or outages by third-party platforms (e.g., Meta, OpenAI, WhatsApp API, Google); (c) server suspensions caused by unpaid vendor bills of the Client.',
            'Dedicated Maintenance (SLA): Clients requiring 99.9% uptime monitoring, ongoing vector embeddings tuning, or 24/7 incident response may subscribe to our ongoing enterprise engineering retainers.',
          ],
        },
        {
          id: 'ai-disclaimer',
          num: '06',
          title: 'AI Models, Meta API & Hallucination Guardrails',
          summary: 'Strict RAG boundaries, zero liability for model downtime, and safe human handoff.',
          content: [
            'Guardrails & RAG Architecture: Autonomek configures strict Retrieval-Augmented Generation (RAG) vector pipelines and commercial boundaries to anchor conversational AI agents to the Client’s verified catalog, pricing, and rules.',
            'Probabilistic Nature of LLMs: The Client understands that large language models are probabilistic by design. While Autonomek engineers rigorous validation rules and automated human handoff escalations, Autonomek cannot warrant that an AI model will never generate an inaccurate phrase under adversarial user manipulation.',
            'Meta WhatsApp Policies: The Client agrees to comply with the WhatsApp Business Policy and Meta Commerce Policy. The Client shall not utilize WhatsApp AI agents to broadcast unsolicited spam, deceptive claims, or prohibited goods.',
          ],
        },
        {
          id: 'liability',
          num: '07',
          title: 'Limitation of Liability',
          summary: 'Capped liability proportionate to service fees, protecting both parties.',
          content: [
            'To the maximum extent permitted by applicable law in Colombia, Mexico, the United States, and the European Union, Autonomek shall not be liable for indirect, incidental, punitive, or consequential damages, including loss of profits, loss of data, or operational interruptions resulting from third-party vendor downtime.',
            'Autonomek’s total cumulative liability under any claim arising out of or related to these terms shall be capped at the total amount actually paid by the Client to Autonomek for the specific project during the three (3) months preceding the incident.',
          ],
        },
        {
          id: 'jurisdiction',
          num: '08',
          title: 'Governing Law & Dispute Resolution',
          summary: 'Direct conciliation first, legal framework, and commercial arbitration.',
          content: [
            'For engagements originating in Latin America, these terms are governed by the laws of the Republic of Colombia.',
            'For international engagements in North America and Europe, disputes shall be resolved primarily through good-faith direct executive negotiation within thirty (30) business days.',
            'If an amicable agreement cannot be reached, disputes shall be submitted to the competent commercial courts or binding arbitration in accordance with applicable rules.',
          ],
        },
      ]
    : [
        {
          id: 'aceptacion',
          num: '01',
          title: 'Aceptación de los Términos y Objeto',
          summary: 'Marco legal aplicable a desarrollo de software, agentes de IA e integraciones.',
          content: [
            'Al acceder al sitio web de AUTONOMEK (en adelante, "Autonomek", "nosotros" o "la Empresa") o contratar nuestros servicios de software a medida, sitios web de alto rendimiento, agentes de inteligencia artificial en WhatsApp o automatización de procesos, usted ("el Cliente" o "Usuario") acepta quedar vinculado por los presentes Términos y Condiciones.',
            'Si no está de acuerdo con la totalidad de estas cláusulas, deberá abstenerse de contratar nuestros servicios o utilizar la plataforma.',
            'Cualquier propuesta técnica, cotización formal, orden de servicio o alcance acordado por escrito (correo electrónico, firma digital o WhatsApp corporativo) forma parte integral e indivisible de estos términos.',
          ],
        },
        {
          id: 'alcance',
          num: '02',
          title: 'Alcance del Servicio y Entregables',
          summary: 'Propuestas escritas, hitos de entrega y gestión de cambios de alcance.',
          content: [
            'Cada proyecto de desarrollo se rige por un documento de alcance técnico que detalla las funcionalidades, pantallas, integraciones, cronograma por etapas y criterios de aceptación acordados antes de iniciar.',
            'Autonomek desarrolla soluciones bajo estándares de ingeniería modernos (Next.js, TypeScript, PostgreSQL, Meta Cloud API, webhooks seguros). La entrega se valida en un entorno de pruebas (sandbox/staging) con el Cliente antes del paso a producción.',
            'Cualquier solicitud de modificación o funcionalidad no contemplada en el alcance inicial será cotizada de manera independiente como un anexo técnico, garantizando el cumplimiento de los tiempos de entrega pactados.',
          ],
        },
        {
          id: 'propiedad',
          num: '03',
          title: 'Propiedad Intelectual y Titularidad del Código',
          summary: 'Transferencia total del código desarrollado una vez pagado el proyecto al 100%.',
          content: [
            'Código a Medida: Una vez cancelado el 100% del valor total acordado para el proyecto, Autonomek transfiere al Cliente la propiedad patrimonial total y exclusiva sobre el código fuente a medida, bases de datos y piezas gráficas creadas específicamente para su plataforma.',
            'Librerías Base y Scaffolds: Los componentes base, arquitecturas preexistentes y herramientas internas de orquestación desarrolladas previamente por Autonomek continúan bajo titularidad de Autonomek, otorgándose al Cliente una licencia perpetua, mundial y no exclusiva para ejecutarlas, modificarlas y utilizarlas en su solución.',
            'Servicios de Terceros: Las APIs externas (OpenAI, Meta Cloud API, Vercel, Supabase, Google) se rigen bajo los términos de sus respectivos proveedores.',
            'Derecho a Portafolio: Salvo que medie un Acuerdo de Confidencialidad (NDA) explícito que indique lo contrario, Autonomek se reserva el derecho de exhibir capturas, resultados y métricas del proyecto en su portafolio corporativo.',
          ],
        },
        {
          id: 'pagos',
          num: '04',
          title: 'Condiciones de Pago, Anticipos y Facturación',
          summary: 'Esquema transparente 50% anticipo y 50% contra entrega funcional.',
          content: [
            'Proyectos por Proyecto: Como regla general, se requiere un anticipo del 50% para dar inicio a los trabajos de diseño y desarrollo, y el 50% restante se cancela contra entrega funcional y visto bueno en entorno de pruebas, previo al despliegue en el dominio definitivo.',
            'Mantenimiento y Soporte: Los servicios de soporte continuo, monitoreo o actualización de agentes IA se facturan de forma mensual o anual por adelantado.',
            'Monedas y Facturación: Emitimos factura formal en Pesos Colombianos (COP) para Colombia, Pesos Mexicanos (MXN) para México, y Dólares (USD) o Euros (EUR) para clientes internacionales.',
            'Mora: La falta de pago de saldos pendientes tras 15 días calendario de notificación escrita facultará a Autonomek para suspender temporalmente el acceso a servidores de staging o integraciones activas.',
          ],
        },
        {
          id: 'garantia',
          num: '05',
          title: 'Garantía Técnica Post-Lanzamiento y SLA',
          summary: 'Garantía de 30 días para corrección de bugs atribuibles al desarrollo.',
          content: [
            'Plazo de Garantía: Autonomek otorga una garantía de 30 días calendario tras el lanzamiento en vivo para resolver sin costo cualquier error o fallo funcional atribuible directamente al código desarrollado.',
            'Exclusiones de Garantía: No están cubiertos por la garantía: (a) modificaciones realizadas al código o base de datos por parte del Cliente o terceros no autorizados; (b) caídas o cambios en APIs de terceros (Meta, WhatsApp, OpenAI, pasarelas de pago); (c) problemas derivados de la falta de pago de servidores o dominios contratados directamente por el Cliente.',
            'SLA y Soporte Extendido: Las empresas que requieran soporte 24/7, monitoreo de disponibilidad y evolución continua pueden contratar un plan de soporte mensualizado.',
          ],
        },
        {
          id: 'ia-meta',
          num: '06',
          title: 'Uso de Agentes de IA, Meta API y Candados de Seguridad',
          summary: 'Arquitectura RAG para evitar alucinaciones y cumplimiento de políticas de Meta.',
          content: [
            'Candados RAG: En los proyectos de Agentes de IA implementamos arquitectura RAG (Retrieval-Augmented Generation) y directivas estrictas para limitar las respuestas del agente al catálogo, tarifas y políticas provistas por el Cliente.',
            'Naturaleza de los Modelos de Lenguaje: El Cliente reconoce que los modelos de lenguaje son probabilísticos. Aunque Autonomek implementa filtros rigurosos y derivación a asesores humanos, no es posible garantizar infalibilidad absoluta ante intentos maliciosos de manipulación ("jailbreaks") por parte de usuarios externos.',
            'Políticas de WhatsApp y Meta: El Cliente se compromete a usar las soluciones de mensajería conforme a las Políticas de WhatsApp Business, absteniéndose de enviar spam masivo, mensajes no solicitados o comercializar productos prohibidos.',
          ],
        },
        {
          id: 'responsabilidad',
          num: '07',
          title: 'Limitación de Responsabilidad',
          summary: 'Tope razonable equivalente a los montos efectivamente pagados.',
          content: [
            'En la máxima medida permitida por la ley aplicable, Autonomek no será responsable por daños indirectos, lucro cesante, pérdida de datos o pérdidas comerciales derivadas de interrupciones de proveedores externos en la nube (ej. Meta, OpenAI, AWS, Google Cloud).',
            'La responsabilidad total acumulada de Autonomek frente al Cliente por cualquier reclamación vinculada a los servicios prestados estará limitada al monto efectivamente pagado por el Cliente durante los tres (3) meses anteriores al hecho causante.',
          ],
        },
        {
          id: 'jurisdiccion',
          num: '08',
          title: 'Ley Aplicable, Conciliación y Jurisdicción',
          summary: 'Arreglo directo prioritario y marco legal de la República de Colombia.',
          content: [
            'Para clientes en Colombia y Latinoamérica, estos términos se interpretan y rigen conforme a las leyes de la República de Colombia.',
            'Cualquier discrepancia o desacuerdo se buscará resolver en primer lugar mediante arreglo directo y de buena fe entre las partes en un término no mayor a treinta (30) días hábiles.',
            'De persistir la diferencia, se acudirá a los centros de conciliación legalmente constituidos o a la jurisdicción ordinaria competente.',
          ],
        },
      ];

  return (
    <main className="min-h-screen w-full bg-background text-foreground pt-28 md:pt-36 pb-28 selection:bg-primary selection:text-primary-ink">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-4xl">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-xs text-muted">
            <Link href={homeHref} className="hover:text-foreground transition-colors">
              {isEn ? 'Home' : 'Inicio'}
            </Link>
            <span>/</span>
            <span className="text-primary font-medium">
              {isEn ? 'Terms & Conditions' : 'Términos y Condiciones'}
            </span>
          </div>

          <div className="mb-4 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span>{isEn ? 'Commercial & Technical Framework' : 'Marco Contractual y Operativo'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.08]">
            {isEn ? 'Terms & Conditions' : 'Términos y Condiciones'}
          </h1>

          <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-3xl">
            {isEn
              ? 'Transparent engineering commitments, intellectual property transfer, milestone billing, and operational boundaries for software, high-performance websites, and 24/7 AI agents.'
              : 'Compromisos claros de ingeniería, entrega total de código fuente, reglas de garantía post-lanzamiento y delimitación de responsabilidad para proteger a tu empresa y a Autonomek.'}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-muted font-mono border-y border-rule py-3.5">
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-primary" />
              {isEn ? 'Last updated: November 2026' : 'Última actualización: Noviembre 2026'}
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-primary" />
              {isEn ? '100% Source Code Transfer' : 'Propiedad 100% de tu Código'}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-primary" />
              {isEn ? '30-Day Technical Warranty' : 'Garantía 30 Días Incluida'}
            </span>
          </div>
        </div>

        {/* Layout: Sidebar + Sections */}
        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Quick Jump Sidebar */}
          <aside className="min-w-0 lg:col-span-4 rounded-[24px] border border-rule bg-surface p-5 sm:p-6 lg:sticky lg:top-28 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              {isEn ? 'Contents' : 'Índice de Cláusulas'}
            </p>
            <nav className="min-w-0 space-y-1">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={() => setActiveSection(sec.id)}
                  className={`flex min-w-0 items-baseline justify-between gap-3 px-3 py-2 rounded-xl text-xs sm:text-sm transition-colors ${
                    activeSection === sec.id
                      ? 'bg-primary/15 text-primary font-semibold'
                      : 'text-muted hover:text-foreground hover:bg-card'
                  }`}
                >
                  <span className="min-w-0 truncate">{sec.title}</span>
                  <span className="shrink-0 font-mono text-[11px] opacity-60">/{sec.num}</span>
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-rule space-y-2">
              <Link
                href={privacyHref}
                className="flex items-center justify-between text-xs text-muted hover:text-primary transition-colors py-1"
              >
                <span>{isEn ? 'Privacy Policy' : 'Política de Privacidad'}</span>
                <ArrowUpRight size={13} />
              </Link>
              <Link
                href={aboutHref}
                className="flex items-center justify-between text-xs text-muted hover:text-primary transition-colors py-1"
              >
                <span>{isEn ? 'About Autonomek' : 'Sobre Nosotros'}</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </aside>

          {/* Clauses Content */}
          <div className="min-w-0 lg:col-span-8 divide-y divide-rule border-t border-rule">
            {sections.map((sec) => (
              <section key={sec.id} id={sec.id} className="py-10 scroll-mt-28 space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs font-semibold text-primary">/{sec.num}</span>
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                    {sec.title}
                  </h2>
                </div>

                <div className="rounded-xl bg-surface/50 border border-rule px-4 py-2.5 text-xs text-muted font-medium">
                  {sec.summary}
                </div>

                <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-muted pt-1">
                  {sec.content.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Contact Banner */}
        <div className="mt-16 rounded-[28px] border border-rule bg-surface p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
              {isEn ? 'Need a specific NDA or corporate contract?' : '¿Requieres un NDA o contrato corporativo específico?'}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {isEn
                ? 'We sign mutual NDAs and integrate compliance frameworks for enterprises and agencies across the Americas and Europe.'
                : 'Firmamos acuerdos mutuos de confidencialidad (NDA) y ajustamos contratos marco para empresas medianas y corporativos.'}
            </p>
          </div>
          <a
            href="mailto:contacto@autonomek.com"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-ink px-6 py-3 text-sm font-semibold hover:opacity-90 transition shrink-0"
          >
            <Mail size={16} />
            <span>contacto@autonomek.com</span>
          </a>
        </div>
      </div>
    </main>
  );
}

