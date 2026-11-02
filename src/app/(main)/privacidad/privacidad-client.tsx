'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  Eye,
  FileCheck,
  Mail,
  ArrowUpRight,
  Database,
  UserCheck,
  CheckCircle2,
  Clock,
} from 'lucide-react';

interface PrivacidadClientProps {
  isEn?: boolean;
  basePrefix?: string;
}

export default function PrivacidadClient({ isEn = false, basePrefix = '' }: PrivacidadClientProps) {
  const [activeSection, setActiveSection] = useState('responsable');

  const homeHref = basePrefix || '/';
  const termsHref = isEn ? `${basePrefix}/terms` : `${basePrefix}/terminos`;
  const aboutHref = isEn ? `${basePrefix}/about` : `${basePrefix}/nosotros`;

  const sections = isEn
    ? [
        {
          id: 'controller',
          num: '01',
          title: 'Data Controller & Contact Information',
          summary: 'Identification of Autonomek and direct Data Protection Officer contact.',
          content: [
            'AUTONOMEK (hereinafter "Autonomek", "we", "us", or "our") operates as the data controller responsible for the processing of personal data collected through this website, our official WhatsApp channels, customer relationship management systems, and proprietary software platforms.',
            'Data Protection Contact: For any privacy inquiries, exercising statutory rights, or requesting data erasure, you may contact our engineering and legal team directly at privacidad@autonomek.com or contacto@autonomek.com.',
            'Legal Framework: We process personal information in strict compliance with the statutory principles of legality, purpose limitation, transparency, and security under Colombian Law 1581 of 2012 (Habeas Data), the European Union General Data Protection Regulation (GDPR - Regulation EU 2016/679), and relevant state privacy laws across the United States.',
          ],
        },
        {
          id: 'data-collected',
          num: '02',
          title: 'Information We Collect',
          summary: 'Contact data, commercial requirements, and technical telemetry.',
          content: [
            'Voluntarily Provided Data: When you contact us via WhatsApp, request a diagnostic audit, book an engineering consultation, or contract a project, we collect: full name, business email address, corporate telephone number, company name, geographical location, and project requirements.',
            'Client Operational Data: During custom software or AI agent development, you may provide service menus, catalog prices, organizational policies, or workflow credentials under strict mutual confidentiality.',
            'Automated Technical Data: When browsing our website, we collect anonymized technical telemetry including IP address, browser type, operating system, referrer URL, and interaction timestamps via privacy-preserving analytics.',
          ],
        },
        {
          id: 'purpose',
          num: '03',
          title: 'Purposes of Data Processing',
          summary: 'Service delivery, technical scoping, and direct commercial communication.',
          content: [
            'Technical & Commercial Diagnosis: Evaluating your business requirements to prepare closed-price engineering proposals, architecture roadmaps, and return-on-investment projections.',
            'Project Execution & Deployment: Building, testing in sandbox staging environments, and deploying your websites, AI agents, database architectures, and automated pipelines.',
            'Operational Support & SLA: Delivering post-launch warranties, technical monitoring, critical updates, and customer support via authorized WhatsApp channels.',
            'Legal & Invoicing Obligations: Issuing commercial tax invoices, maintaining accounting records, and complying with statutory fiscal requirements.',
            'No Data Commercialization: Autonomek NEVER sells, rents, leases, or trades your personal data or your company’s customer records to data brokers, advertising networks, or third-party marketers.',
          ],
        },
        {
          id: 'ai-processing',
          num: '04',
          title: 'WhatsApp AI Processing & Zero Training Pledge',
          summary: 'Client enterprise data is never used to train public foundational AI models.',
          content: [
            'API Data Privacy: Conversations processed through our WhatsApp AI agents utilize enterprise-grade APIs (Meta Cloud API, OpenAI API). Under enterprise API licensing agreements, your confidential business prompts and customer dialogues are NOT used to train, retrain, or improve public foundational AI models.',
            'Ephemeral Vector Retrieval: Knowledge base documents and catalogs indexed into Retrieval-Augmented Generation (RAG) vector stores remain in isolated, encrypted cloud databases assigned solely to your project.',
            'Multimodal Vision & Voice Notes: Voice notes transcribed and payment screenshots parsed by OCR are processed transiently in memory to perform the requested workflow action and are not retained for unauthorized secondary purposes.',
          ],
        },
        {
          id: 'sharing',
          num: '05',
          title: 'Subprocessors & Cloud Infrastructure',
          summary: 'Encrypted tier-1 cloud providers with SOC 2 / ISO 27001 compliance.',
          content: [
            'To ensure sub-second global speed, 99.9% uptime, and end-to-end security, Autonomek engages vetted enterprise subprocessors:',
            '• Hosting & Edge Infrastructure: Vercel Inc. and Google Cloud Platform (global edge networks, automated SSL, SOC 2 Type II certified).',
            '• Database & Authentication: Supabase / PostgreSQL (AES-256 encrypted at rest, TLS 1.3 in transit).',
            '• Official Messaging: Meta Platforms Ireland Ltd. / Meta WhatsApp Cloud API (end-to-end transport encryption).',
            '• Analytics: Google Analytics 4 (configured with IP anonymization and zero cross-device ad targeting).',
          ],
        },
        {
          id: 'rights',
          num: '06',
          title: 'Your Statutory Rights (Habeas Data & GDPR)',
          summary: 'Access, rectification, erasure, portability, and consent withdrawal.',
          content: [
            'Regardless of your geographical residence, Autonomek guarantees your right to:',
            '1. Access & Know: Request a full copy of the personal data we hold about you and understand how it is being processed.',
            '2. Rectification: Request the correction of inaccurate, incomplete, or outdated information.',
            '3. Erasure (Right to be Forgotten): Request the deletion of your personal records from our databases when they are no longer necessary for the contracted service or statutory tax retention.',
            '4. Consent Revocation: Revoke at any time the authorization granted for optional communications.',
            'To exercise any right, submit an email with the subject "Habeas Data Request" to privacidad@autonomek.com. We respond within a maximum of ten (10) business days.',
          ],
        },
        {
          id: 'cookies',
          num: '07',
          title: 'Cookies & Tracking Technologies',
          summary: 'Essential cookies and privacy-respecting performance analytics.',
          content: [
            'We use minimal, privacy-first cookies and local storage tokens strictly required for:',
            '• Essential Navigation: Preserving your language preference (EN/ES) and responsive UI states.',
            '• Anonymized Analytics: Measuring aggregated page visit volumes and Core Web Vitals to optimize loading speed without building behavioral advertising profiles.',
            'You can disable or delete cookies at any time via your browser settings. Our website does not gate access if optional analytical cookies are disabled.',
          ],
        },
      ]
    : [
        {
          id: 'responsable',
          num: '01',
          title: 'Responsable del Tratamiento y Contacto',
          summary: 'Identificación de Autonomek y canal directo de protección de datos.',
          content: [
            'AUTONOMEK (en adelante "Autonomek", "nosotros" o "la Empresa") actúa como responsable del tratamiento de los datos personales recopilados a través de este sitio web, nuestros canales oficiales de WhatsApp, formularios de contacto y plataformas de software desarrolladas.',
            'Canal de Privacidad: Para cualquier consulta sobre el tratamiento de tus datos, revocación de autorizaciones o ejercicio de tus derechos legales, puedes escribir directamente a privacidad@autonomek.com o a contacto@autonomek.com.',
            'Marco Legal: Tratamos la información bajo estricto apego a la Ley Estatutaria 1581 de 2012 y su Decreto Reglamentario 1377 de 2013 de la República de Colombia (Régimen de Habeas Data), el Reglamento General de Protección de Datos de la Unión Europea (RGPD 2016/679) y normativas afines en México y los Estados Unidos.',
          ],
        },
        {
          id: 'datos',
          num: '02',
          title: 'Información que Recopilamos',
          summary: 'Datos de contacto comercial, requerimientos técnicos y telemetría anónima.',
          content: [
            'Datos Provistos Voluntariamente: Al comunicarte con nosotros por WhatsApp, solicitar un diagnóstico gratuito, agendar una sesión de arquitectura o contratar un proyecto, recopilamos: nombre y apellido, correo electrónico corporativo, número de WhatsApp o teléfono, nombre de la empresa, ciudad/país y descripción del proyecto.',
            'Información Operativa del Proyecto: Durante el desarrollo de software a medida o agentes de IA, el Cliente puede suministrarnos manuales de producto, listas de precios, políticas de atención o credenciales de conexión bajo estricto acuerdo de confidencialidad.',
            'Datos Técnicos Automatizados: Al navegar por el sitio web recopilamos información técnica anónima (dirección IP enmascarada, tipo de navegador, sistema operativo y tiempos de respuesta) con fines exclusivos de rendimiento y seguridad.',
          ],
        },
        {
          id: 'finalidad',
          num: '03',
          title: 'Finalidades del Tratamiento de Datos',
          summary: 'Desarrollo de servicios, atención de consultas y facturación legal.',
          content: [
            'Diagnóstico Técnico y Cotización: Evaluar las necesidades de tu empresa para formular propuestas de arquitectura, presupuestos cerrados y estimaciones de retorno.',
            'Desarrollo e Implementación: Construir, probar en entorno seguro (staging) y desplegar en vivo tus sitios web, agentes de IA, software a medida e integraciones con APIs.',
            'Soporte Técnico y Garantía: Prestar asistencia post-lanzamiento, resolver incidencias técnicas y notificar actualizaciones críticas de seguridad.',
            'Obligaciones Contables y Fiscales: Emitir facturas electrónicas, gestionar pagos y cumplir con requerimientos tributarios ante las autoridades competentes.',
            'Cero Venta de Datos: Autonomek NUNCA vende, alquila, comercializa ni cede bases de datos de clientes o prospectos a terceros, agencias de publicidad o intermediarios.',
          ],
        },
        {
          id: 'ia-privacidad',
          num: '04',
          title: 'Privacidad en Agentes de IA y Compromiso de Cero Entrenamiento',
          summary: 'Las conversaciones y datos de tu empresa no entrenan modelos públicos de IA.',
          content: [
            'APIs Empresariales Seguras: Las soluciones de Agentes de IA en WhatsApp operan a través de APIs empresariales oficiales (Meta Cloud API, OpenAI API). Conforme a los términos corporativos de estas APIs, los mensajes, consultas y catálogos de tu empresa NO se utilizan para entrenar, reentrenar ni alimentar modelos públicos de inteligencia artificial.',
            'Aislamiento de Vectores (RAG): Las bases de conocimiento vectorizadas se almacenan en esquemas de base de datos aislados y encriptados, con acceso exclusivo para el funcionamiento de tu propio agente.',
            'Audios y Comprobantes: Las notas de voz transcritas y los comprobantes leídos por OCR se procesan en memoria para cumplir la instrucción inmediata del cliente y no se retienen con fines secundarios.',
          ],
        },
        {
          id: 'proveedores',
          num: '05',
          title: 'Proveedores Tecnológicos e Infraestructura en la Nube',
          summary: 'Servidores cloud con certificación internacional SOC 2 y cifrado en tránsito.',
          content: [
            'Para garantizar máxima velocidad, disponibilidad del 99.9% y seguridad de nivel bancario, nos apoyamos en proveedores de infraestructura líderes:',
            '• Alojamiento y Red Edge: Vercel Inc. y Google Cloud Platform (redes mundiales con certificado SSL automático y cifrado TLS 1.3).',
            '• Bases de Datos Seguras: Supabase / PostgreSQL (datos cifrados en reposo mediante AES-256).',
            '• Mensajería Oficial: Meta Platforms Ireland Ltd. / WhatsApp Cloud API (cifrado punto a punto en el transporte).',
            '• Analítica Web: Google Analytics 4 (con anonimización de IP habilitada y sin perfiles publicitarios cruzados).',
          ],
        },
        {
          id: 'derechos',
          num: '06',
          title: 'Derechos del Titular (Habeas Data)',
          summary: 'Acceso, actualización, rectificación y supresión de tus datos personales.',
          content: [
            'Como titular de los datos personales tienes derecho a:',
            '1. Conocer, actualizar y rectificar tus datos personales frente a Autonomek.',
            '2. Solicitar prueba de la autorización otorgada para el tratamiento.',
            '3. Ser informado sobre el uso específico que se ha dado a tu información.',
            '4. Revocar la autorización o solicitar la supresión de tus datos cuando no exista un deber contractual o legal que obligue a conservarlos (ej. facturación tributaria).',
            '5. Acceder de forma gratuita a tus datos personales que hayan sido objeto de tratamiento.',
            'Para ejercer estos derechos, envía un correo a privacidad@autonomek.com con el asunto "Ejercicio de Derechos Habeas Data". Responderemos en un plazo máximo de diez (10) días hábiles.',
          ],
        },
        {
          id: 'cookies',
          num: '07',
          title: 'Política de Cookies y Tecnologías Similares',
          summary: 'Cookies estrictamente necesarias y analítica anónima de rendimiento.',
          content: [
            'Este sitio web utiliza cookies técnicas para recordar tus preferencias de navegación (como idioma) y cookies de rendimiento anónimo para medir velocidad de carga (Core Web Vitals) y páginas más visitadas.',
            'No utilizamos cookies de rastreo publicitario invasivo ni vendemos identificadores de usuario.',
            'Puedes configurar tu navegador para bloquear o eliminar las cookies en cualquier momento sin perder acceso a las funcionalidades esenciales del sitio.',
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
              {isEn ? 'Privacy Policy' : 'Política de Privacidad'}
            </span>
          </div>

          <div className="mb-4 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span>{isEn ? 'Habeas Data & GDPR Compliance' : 'Habeas Data (Ley 1581) y RGPD'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.08]">
            {isEn ? 'Privacy Policy & Data Protection' : 'Política de Privacidad y Tratamiento de Datos'}
          </h1>

          <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-3xl">
            {isEn
              ? 'How Autonomek protects, encrypts, and processes your commercial and project data. We commit to zero sale of personal information and ensure customer conversations never train public AI models.'
              : 'Conoce cómo protegemos, ciframos y tratamos tus datos de contacto y la información de tus proyectos. Cero venta de datos personales y compromiso explícito de que tus conversaciones no entrenan modelos públicos de IA.'}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-muted font-mono border-y border-rule py-3.5">
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-primary" />
              {isEn ? 'Last updated: November 2026' : 'Última actualización: Noviembre 2026'}
            </span>
            <span className="flex items-center gap-1.5">
              <Database size={14} className="text-primary" />
              {isEn ? 'Encrypted Cloud Storage (AES-256)' : 'Cifrado en Reposo AES-256'}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-primary" />
              {isEn ? 'Zero Public AI Model Training' : 'Cero Entrenamiento en Modelos Públicos'}
            </span>
          </div>
        </div>

        {/* Layout: Sidebar + Sections */}
        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Quick Jump Sidebar */}
          <aside className="lg:col-span-4 rounded-[24px] border border-rule bg-surface p-6 sticky top-28 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              {isEn ? 'Privacy Sections' : 'Secciones de Privacidad'}
            </p>
            <nav className="space-y-1">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={() => setActiveSection(sec.id)}
                  className={`flex items-baseline justify-between gap-3 px-3 py-2 rounded-xl text-xs sm:text-sm transition-colors ${
                    activeSection === sec.id
                      ? 'bg-primary/15 text-primary font-semibold'
                      : 'text-muted hover:text-foreground hover:bg-card'
                  }`}
                >
                  <span className="truncate">{sec.title}</span>
                  <span className="font-mono text-[11px] opacity-60">/{sec.num}</span>
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-rule space-y-2">
              <Link
                href={termsHref}
                className="flex items-center justify-between text-xs text-muted hover:text-primary transition-colors py-1"
              >
                <span>{isEn ? 'Terms & Conditions' : 'Términos y Condiciones'}</span>
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

          {/* Privacy Content */}
          <div className="lg:col-span-8 divide-y divide-rule border-t border-rule">
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
              {isEn ? 'Exercise your data rights' : 'Ejerce tus derechos de privacidad'}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {isEn
                ? 'Request a copy of your records, update information, or ask for complete deletion of your data at any time.'
                : 'Solicita una copia de tus registros, actualiza datos o pide la eliminación completa de tu información cuando lo desees.'}
            </p>
          </div>
          <a
            href="mailto:privacidad@autonomek.com"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-ink px-6 py-3 text-sm font-semibold hover:opacity-90 transition shrink-0"
          >
            <Mail size={16} />
            <span>privacidad@autonomek.com</span>
          </a>
        </div>
      </div>
    </main>
  );
}

