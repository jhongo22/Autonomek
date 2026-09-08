'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  Bot, 
  Search, 
  Calendar, 
  MessageSquare, 
  Zap, 
  Globe, 
  Sparkles, 
  Check, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  PhoneCall,
  Settings
} from 'lucide-react';

const SERVICES_ES = [
  {
    id: "01",
    title: "Empleado de Ventas IA",
    desc: "Atención comercial continua 24/7 por WhatsApp. Responde preguntas frecuentes sobre tu catálogo, cotiza productos y servicios en tiempo real, agenda citas y envía enlaces de pago de forma autónoma.",
    client: "Clínicas, inmobiliarias, concesionarios, academias, ecommerce y empresas con alto flujo de consultas en WhatsApp.",
    icon: Bot,
    iconColor: "text-[#D62828]",
    iconBg: "bg-[#D62828]/10 border-[#D62828]/20",
    bullets: [
      "Atención 24/7 sin perder clientes fuera de horario.",
      "Cotización y cierre de ventas directo en el chat.",
      "Escalado automático a humanos cuando hace falta."
    ],
    tags: ["WhatsApp 24/7", "Cierre de Ventas", "Atención Autónoma"],
    star: true
  },
  {
    id: "02",
    title: "Prospector IA (B2B)",
    desc: "Tu motor de adquisición corporativa automatizado. Identifica empresas objetivo en tu nicho, extrae teléfonos y correos verificados de tomadores de decisiones, califica el interés y agenda reuniones comerciales.",
    client: "Empresas de servicios, consultoras, firmas profesionales, logística, software y distribuidores B2B.",
    icon: Search,
    iconColor: "text-[#72dbd3]",
    iconBg: "bg-[#72dbd3]/10 border-[#72dbd3]/20",
    bullets: [
      "Extracción masiva de contactos verificados.",
      "Primer contacto personalizado con inteligencia artificial.",
      "Reuniones de negocio agendadas en tu calendario."
    ],
    tags: ["Prospección B2B", "Contactos Verificados", "Agenda Automática"],
    star: false
  },
  {
    id: "03",
    title: "Recepcionista IA",
    desc: "Gestión inteligente de turnos y reservas. Agenda horarios disponibles en tiempo real, procesa cancelaciones o reprogramaciones y envía recordatorios preventivos reduciendo el ausentismo en un 90%.",
    client: "Consultorios médicos, clínicas dentales, spas, centros estéticos, veterinarias y barberías.",
    icon: Calendar,
    iconColor: "text-[#72dbd3]",
    iconBg: "bg-[#72dbd3]/10 border-[#72dbd3]/20",
    bullets: [
      "Reserva de citas conectada a Google Calendar.",
      "Recordatorios automáticos para reducir inasistencias al 90%.",
      "Reprogramaciones y cancelaciones autónomas."
    ],
    tags: ["Reserva 24/7", "Recordatorios WhatsApp", "Cero Inasistencias"],
    star: false
  },
  {
    id: "04",
    title: "Servicio al Cliente IA",
    desc: "Atención omnicanal instantánea con base de conocimientos de tu empresa. Resuelve de forma autónoma el 85% de las dudas recurrentes de tus clientes con respuestas exactas basadas en tus políticas y manuales.",
    client: "Empresas con alto volumen de consultas, soporte posventa, plataformas de servicios y ecommerce.",
    icon: MessageSquare,
    iconColor: "text-white",
    iconBg: "bg-white/10 border-white/20",
    bullets: [
      "Tiempo de primera respuesta reducido a cero segundos.",
      "Respuestas basadas en la documentación oficial de tu negocio.",
      "Transferencia transparente a tu equipo humano con un clic."
    ],
    tags: ["Respuesta Inmediata", "Base de Conocimientos", "Soporte Continuo"],
    star: false
  },
  {
    id: "05",
    title: "Automatización Comercial",
    desc: "Eliminamos las tareas manuales repetitivas conectando tus sistemas. Sincroniza de forma automática formularios web, hojas de cálculo, correos, CRM y facturación sin pérdida de prospectos ni copiado manual.",
    client: "Empresas que pierden horas copiando datos de clientes, enviando recordatorios o gestionando registros manuales.",
    icon: Zap,
    iconColor: "text-[#D62828]",
    iconBg: "bg-[#D62828]/10 border-[#D62828]/20",
    bullets: [
      "Sincronización instantánea de prospectos con tu CRM.",
      "Eliminación total de horas de digitación manual.",
      "Alertas automáticas en WhatsApp o Slack para tu equipo."
    ],
    tags: ["Flujos Autónomos", "Cero Copiado Manual", "Sincronización Total"],
    star: false
  },
  {
    id: "06",
    title: "Desarrollo Web Premium",
    desc: "Páginas web y embudos construidos para captar clientes y posicionar en los primeros resultados de Google. Velocidad de carga instantánea (< 1s), diseño mobile-first y conexión directa a WhatsApp.",
    client: "Empresas que quieren aparecer en los primeros puestos de búsqueda y convertir visitas en clientes reales.",
    icon: Globe,
    iconColor: "text-[#72dbd3]",
    iconBg: "bg-[#72dbd3]/10 border-[#72dbd3]/20",
    bullets: [
      "Optimización SEO semántico para posicionar en Google.",
      "Velocidad de carga de nivel élite (PageSpeed 95-100).",
      "Embudos y botones de contacto diseñados para convertir."
    ],
    tags: ["Posicionamiento Google", "Carga < 1s", "Conversión a Ventas"],
    star: false
  }
];

const SERVICES_EN = [
  {
    id: "01",
    title: "AI Sales Agent",
    desc: "Continuous 24/7 commercial attention via WhatsApp. Answers catalog FAQs, provides real-time quotes, books appointments, and sends secure payment links autonomously.",
    client: "Clinics, real estate, dealerships, academies, ecommerce, and high-inquiry businesses.",
    icon: Bot,
    iconColor: "text-[#D62828]",
    iconBg: "bg-[#D62828]/10 border-[#D62828]/20",
    bullets: [
      "24/7 engagement without losing after-hours leads.",
      "Direct quoting and sales closing inside WhatsApp.",
      "Automatic seamless escalation to human agents."
    ],
    tags: ["WhatsApp 24/7", "Sales Closing", "Autonomous AI"],
    star: true
  },
  {
    id: "02",
    title: "AI B2B Prospector",
    desc: "Your automated corporate client acquisition engine. Scans target businesses in your niche, extracts verified decision-maker emails and phones, qualifies interest, and books calendar meetings.",
    client: "B2B service providers, consultants, software, logistics, and wholesale distributors.",
    icon: Search,
    iconColor: "text-[#72dbd3]",
    iconBg: "bg-[#72dbd3]/10 border-[#72dbd3]/20",
    bullets: [
      "Verified executive contact data extraction.",
      "Hyper-personalized outreach sequences powered by AI.",
      "Qualified discovery meetings booked directly on your calendar."
    ],
    tags: ["B2B Acquisition", "Verified Contacts", "Auto Booking"],
    star: false
  },
  {
    id: "03",
    title: "AI Receptionist",
    desc: "Smart reservation and appointment management. Books available slots in real time, processes reschedules and cancellations, and sends automated WhatsApp reminders to eliminate no-shows.",
    client: "Medical clinics, dental offices, spas, aesthetic centers, veterinarians, and barbershops.",
    icon: Calendar,
    iconColor: "text-[#72dbd3]",
    iconBg: "bg-[#72dbd3]/10 border-[#72dbd3]/20",
    bullets: [
      "Real-time slot booking synced with your calendar.",
      "Automated WhatsApp reminders slashing no-shows by 90%.",
      "Autonomous reschedule and cancellation handling."
    ],
    tags: ["24/7 Booking", "WhatsApp Reminders", "Zero No-Shows"],
    star: false
  },
  {
    id: "04",
    title: "Customer Support Agent",
    desc: "Instant omnichannel customer support powered by your company's knowledge base. Autonomously resolves 85% of recurring doubts with accurate answers based on your official documentation.",
    client: "High-volume inquiry companies, post-sales support, service platforms, and ecommerce.",
    icon: MessageSquare,
    iconColor: "text-white",
    iconBg: "bg-white/10 border-white/20",
    bullets: [
      "First response time slashed to zero seconds.",
      "Accurate answers grounded in your business documentation.",
      "One-click handover to your human team when needed."
    ],
    tags: ["Zero-Second Response", "Knowledge Base", "24/7 Support"],
    star: false
  },
  {
    id: "05",
    title: "Workflow Automation",
    desc: "Eliminate hours of repetitive manual data entry. We connect your web forms, spreadsheets, inboxes, CRM, and billing systems into an automated flow with zero human errors.",
    client: "Businesses losing productive hours copy-pasting customer records and processing manual invoices.",
    icon: Zap,
    iconColor: "text-[#D62828]",
    iconBg: "bg-[#D62828]/10 border-[#D62828]/20",
    bullets: [
      "Instant synchronization of qualified leads into your CRM.",
      "Complete elimination of manual data entry hours.",
      "Automated alerts on WhatsApp or Slack for your sales reps."
    ],
    tags: ["Autonomous Flows", "Zero Manual Tasks", "Full Integration"],
    star: false
  },
  {
    id: "06",
    title: "High-Performance Web",
    desc: "Websites and funnels engineered to convert visitors and rank in Google's top results. Blazing load speeds (< 1s), mobile-first design, and seamless WhatsApp integration.",
    client: "Businesses looking for Google search authority, brand positioning, and higher visitor-to-client conversion.",
    icon: Globe,
    iconColor: "text-[#72dbd3]",
    iconBg: "bg-[#72dbd3]/10 border-[#72dbd3]/20",
    bullets: [
      "Semantic SEO optimization to rank on Google searches.",
      "Elite speed score (PageSpeed 95-100) to maximize retention.",
      "Built-in conversion funnels and WhatsApp contact points."
    ],
    tags: ["Google SEO", "< 1s Speed", "Sales Conversion"],
    star: false
  }
];

const T = {
  es: {
    heroTag: "SOLUCIONES Y SISTEMAS LLAVE EN MANO",
    heroTitle1: "Infraestructura &",
    heroTitle2: "Sistemas que Venden.",
    heroSub: "No vendemos código genérico ni plantillas. Diseñamos e implementamos sistemas de software, agentes de inteligencia artificial y desarrollo web estratégico enfocados 100% en retorno comercial y ahorro de tiempo para tu negocio.",
    heroCtaPrimary: "Diseñar Mi Sistema",
    heroCtaSecondary: "Hablar por WhatsApp",
    idealFor: "Ideal Para",
    starProduct: "Producto Estrella",
    serviceCta: "Cotizar esta Solución",
    
    // Process
    processTag: "/ Metodología de Implementación",
    processTitle1: "Del Diagnóstico al",
    processTitle2: "Sistema Operando.",
    processSub: "Un proceso ágil y transparente en 3 etapas para integrar tecnología en tu empresa sin interrumpir tu operación diaria.",
    steps: [
      {
        num: "01",
        title: "Diagnóstico & Arquitectura",
        desc: "Analizamos a fondo los cuellos de botella de tu empresa, canales de atención y tareas manuales para definir la solución exacta con el mayor retorno de inversión."
      },
      {
        num: "02",
        title: "Desarrollo e Integración",
        desc: "Construimos y entrenamos tu agente o sistema con la información oficial, catálogo y políticas de tu negocio en un plazo ágil de 2 a 4 semanas."
      },
      {
        num: "03",
        title: "Lanzamiento & Operación 24/7",
        desc: "Desplegamos la solución llave en mano, verificamos cada canal de respuesta y te brindamos 30 días de garantía de estabilidad y soporte técnico continuo."
      }
    ],

    // Trust items
    trust: [
      { label: "Diagnóstico sin costo", desc: "Evaluación inicial de procesos sin compromiso" },
      { label: "Garantía de 30 días", desc: "Soporte técnico y calibración post-lanzamiento" },
      { label: "Sin permanencia", desc: "Control total de tus datos y plataformas" },
      { label: "Retorno medible", desc: "Enfoque 100% en ventas y horas recuperadas" }
    ],

    // Final CTA
    finalCtaTag: "/ Inicia Tu Proyecto",
    finalCtaTitle: "Diseñemos el sistema que tu empresa necesita.",
    finalCtaDesc: "Cuéntanos cómo opera tu negocio hoy. Te mostraremos exactamente qué partes puedes automatizar para dejar de perder ventas y recuperar tiempo productivo.",
    finalCtaPrimary: "Comenzar Diagnóstico",
    finalCtaSecondary: "Hablar con un Especialista"
  },
  en: {
    heroTag: "TURNKEY SOLUTIONS & SYSTEMS",
    heroTitle1: "Infrastructure &",
    heroTitle2: "Systems that Sell.",
    heroSub: "We don't sell generic templates or abstract code. We build custom software systems, artificial intelligence agents, and strategic web development focused 100% on commercial return and operational time savings.",
    heroCtaPrimary: "Design My System",
    heroCtaSecondary: "Chat on WhatsApp",
    idealFor: "Ideal For",
    starProduct: "Star Product",
    serviceCta: "Quote this Solution",
    
    // Process
    processTag: "/ Implementation Methodology",
    processTitle1: "From Diagnosis to",
    processTitle2: "Autonomous Operation.",
    processSub: "An agile, transparent 3-step process to deploy technology in your business without interrupting your daily commercial routine.",
    steps: [
      {
        num: "01",
        title: "Discovery & Architecture",
        desc: "We analyze your business bottlenecks, communication channels, and repetitive workflows to define the exact system that yields the highest return."
      },
      {
        num: "02",
        title: "Development & Integration",
        desc: "We build and train your AI agent or workflow with your official business data, catalogs, and service rules in an agile 2 to 4-week timeframe."
      },
      {
        num: "03",
        title: "Deployment & 24/7 Uptime",
        desc: "We deploy the turnkey solution, verify all communication channels, and provide a 30-day stability guarantee with ongoing technical support."
      }
    ],

    // Trust items
    trust: [
      { label: "Free Process Audit", desc: "Initial workflow evaluation with zero commitment" },
      { label: "30-Day Guarantee", desc: "Full post-launch stability support and fine-tuning" },
      { label: "No Lock-In", desc: "Full ownership of your systems and customer data" },
      { label: "Measurable ROI", desc: "100% focused on sales growth and recovered hours" }
    ],

    // Final CTA
    finalCtaTag: "/ Start Your Project",
    finalCtaTitle: "Let's design the system your business needs.",
    finalCtaDesc: "Tell us how your business operates today. We will demonstrate exactly which workflows can be automated to stop losing leads and recover hundreds of hours.",
    finalCtaPrimary: "Start Free Discovery",
    finalCtaSecondary: "Speak to a Specialist"
  }
};

export default function ServiciosClient({ locale = 'es' }: { locale?: 'es' | 'en' }) {
  const isEn = locale === 'en';
  const t = T[locale];
  const SERVICES = isEn ? SERVICES_EN : SERVICES_ES;
  const startUrl = isEn ? "/us/start" : "/start";
  const whatsappUrl = "https://wa.me/573004435894?text=Hola%20Autonomek%2C%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto.";

  return (
    <main className="min-h-screen w-full bg-[#080808] text-white pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
      {/* Background ambient glow (brand red & cyan only, zero blue) */}
      <div className="absolute top-[8%] left-[-5%] w-[45vw] h-[45vh] bg-[radial-gradient(circle,rgba(214,40,40,0.12)_0%,transparent_70%)] blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-[35%] right-[-10%] w-[45vw] h-[45vh] bg-[radial-gradient(circle,rgba(114,219,211,0.06)_0%,transparent_70%)] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-[10%] left-[15%] w-[40vw] h-[40vh] bg-[radial-gradient(circle,rgba(214,40,40,0.08)_0%,transparent_70%)] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* HERO HEADER */}
        <div className="max-w-4xl mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="w-8 md:w-12 h-[1px] bg-[#72dbd3]" />
            <p className="font-mono text-[#72dbd3] text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold">
              {t.heroTag}
            </p>
          </motion.div>

          <h1 className="font-display text-[clamp(2.4rem,6vw,5.5rem)] leading-[1.04] font-black tracking-tighter text-white uppercase relative mb-8">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block"
            >
              {t.heroTitle1}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block text-[#D62828]"
            >
              {t.heroTitle2}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/65 font-sans text-base md:text-xl font-light leading-relaxed max-w-2xl mb-10"
          >
            {t.heroSub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch sm:items-center"
          >
            <Link 
              href={startUrl} 
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D62828] hover:bg-[#b01c1c] text-white font-bold text-xs tracking-widest uppercase transition-all duration-300 rounded-xl shadow-[0_0_30px_rgba(214,40,40,0.35)] active:scale-95 text-center"
            >
              <span>{t.heroCtaPrimary}</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 text-white font-medium text-xs tracking-widest uppercase border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#72dbd3]/50 transition-all duration-300 rounded-xl active:scale-95 text-center"
            >
              <span>{t.heroCtaSecondary}</span>
              <span className="w-5 h-[1px] bg-[#72dbd3] group-hover:w-7 transition-all" />
            </a>
          </motion.div>
        </div>

        {/* SERVICES GRID (6 SOLUTIONS) */}
        <div className="mb-28 md:mb-36">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="font-mono text-[#72dbd3] text-xs tracking-[0.25em] uppercase font-bold mb-2">/ Catálogo de Soluciones</p>
              <h2 className="font-display text-2xl md:text-4xl font-black uppercase text-white tracking-tight">Sistemas de Alto Retorno</h2>
            </div>
            <div className="hidden md:block w-32 h-[1px] bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="h-full"
                >
                  <div className="group p-8 bg-[#111111] border border-white/10 hover:border-[#D62828]/50 transition-all duration-300 rounded-3xl relative overflow-hidden h-full flex flex-col justify-between hover:shadow-[0_15px_40px_rgba(214,40,40,0.12)] hover:-translate-y-1">
                    
                    {/* Background ID number */}
                    <div className="absolute top-2 right-4 p-4 text-white/[0.03] group-hover:text-[#D62828]/10 transition-colors pointer-events-none select-none">
                      <span className="font-display text-7xl md:text-8xl font-black">{service.id}</span>
                    </div>

                    <div className="relative z-10 flex-1">
                      {/* Top: Star Badge or Category Tag */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-12 h-12 rounded-2xl ${service.iconBg} border flex items-center justify-center ${service.iconColor} transition-transform duration-300 group-hover:scale-110 shadow-inner`}>
                          <Icon size={22} />
                        </div>

                        {service.star ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider bg-[#D62828]/15 text-[#D62828] border border-[#D62828]/30 uppercase">
                            <Sparkles size={11} /> {t.starProduct}
                          </span>
                        ) : (
                          <span className="font-mono text-xs text-white/30 font-bold tracking-widest group-hover:text-[#72dbd3] transition-colors">
                            {service.id}
                          </span>
                        )}
                      </div>

                      {/* Title & Description */}
                      <h3 className="font-display text-2xl font-black uppercase text-white tracking-tight mb-3 group-hover:text-[#72dbd3] transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-white/60 text-xs sm:text-sm font-sans font-light leading-relaxed mb-6">
                        {service.desc}
                      </p>

                      {/* Key Outcome Bullets */}
                      <div className="space-y-2.5 border-t border-white/5 pt-5 mb-6">
                        {service.bullets.map((b, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 text-xs text-white/80 font-sans">
                            <Check size={14} className="text-[#72dbd3] shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>

                      {/* Ideal For Target Box */}
                      <div className="mb-6 bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                        <span className="block font-mono text-[9px] text-[#72dbd3] uppercase tracking-wider mb-1 font-bold">
                          {t.idealFor}
                        </span>
                        <p className="text-white/65 text-xs leading-normal font-sans font-light">
                          {service.client}
                        </p>
                      </div>
                    </div>

                    <div className="relative z-10 mt-auto pt-4 border-t border-white/5">
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {service.tags.map(tag => (
                          <span key={tag} className="px-2.5 py-1 bg-white/[0.03] rounded-md font-mono text-[9px] uppercase tracking-wider text-white/40 border border-white/5">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link 
                        href={startUrl} 
                        className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-white/[0.02] border border-white/10 group-hover:border-[#D62828]/40 group-hover:bg-[#D62828]/10 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300"
                      >
                        <span className="group-hover:text-white transition-colors">{t.serviceCta}</span>
                        <ArrowRight size={14} className="text-[#D62828] group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* PROCESS / METHODOLOGY SECTION (REPLACES PRICING) */}
        <section className="mb-28 md:mb-36">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-mono text-[#72dbd3] text-xs tracking-[0.3em] uppercase mb-4 font-bold">
              {t.processTag}
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
              {t.processTitle1} <span className="text-[#D62828]">{t.processTitle2}</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#72dbd3] mx-auto mt-4 mb-6" />
            <p className="text-white/60 text-sm sm:text-base font-sans font-light leading-relaxed">
              {t.processSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {t.steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 bg-[#111111] border border-white/10 hover:border-white/20 rounded-3xl relative overflow-hidden flex flex-col justify-between group transition-all"
              >
                <div>
                  <span className="font-display text-5xl font-black text-[#D62828] block mb-6 group-hover:scale-105 transition-transform origin-left">
                    {step.num}
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase text-white mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm font-sans font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-white/30">
                  <span className="size-1.5 rounded-full bg-[#72dbd3]" />
                  <span>Fase {idx + 1} de 3</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TRUST & GUARANTEES STRIP */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-28 md:mb-36"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 bg-[#111111] border border-white/10 rounded-3xl">
            {t.trust.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-3">
                <div className="w-11 h-11 rounded-2xl bg-[#D62828]/10 border border-[#D62828]/20 flex items-center justify-center mb-3 text-[#D62828]">
                  {i === 0 ? <Clock size={20} /> : i === 1 ? <ShieldCheck size={20} /> : i === 2 ? <Settings size={20} /> : <TrendingUp size={20} />}
                </div>
                <p className="text-white font-bold text-xs uppercase tracking-wider">{item.label}</p>
                <p className="text-white/50 text-[11px] font-sans font-light mt-1 max-w-[180px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* FINAL CTA CARD (DARK LUXURY AUTONOMEK STYLE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl md:rounded-[3rem] bg-[#111111] border border-[#D62828]/30 p-8 sm:p-12 md:p-20 overflow-hidden text-center shadow-[0_0_60px_rgba(214,40,40,0.15)]"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#D62828]/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="font-mono text-[#72dbd3] text-xs tracking-[0.3em] uppercase mb-4 font-bold">
              {t.finalCtaTag}
            </p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-6 leading-tight tracking-tight">
              {t.finalCtaTitle}
            </h2>
            <p className="text-white/60 text-sm md:text-base mb-10 max-w-lg mx-auto leading-relaxed font-sans font-light">
              {t.finalCtaDesc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href={startUrl} 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D62828] hover:bg-[#b01c1c] text-white font-bold text-xs tracking-widest uppercase transition-all duration-300 rounded-xl shadow-[0_0_30px_rgba(214,40,40,0.4)] active:scale-95 text-center"
              >
                <span>{t.finalCtaPrimary}</span>
                <ArrowRight size={15} />
              </Link>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-white font-medium text-xs tracking-widest uppercase border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#72dbd3]/50 transition-all duration-300 rounded-xl active:scale-95 text-center"
              >
                <span>{t.finalCtaSecondary}</span>
                <span className="w-5 h-[1px] bg-[#72dbd3]" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
