export interface Project {
  id: number;
  title: string;
  client: string;
  category: 'Web' | 'Automatización' | 'IA';
  url: string | null;
  stack: string[];
  description: string;
  longDescription?: string;
  keyFeatures?: string[];
  highlightPhrase?: string;
  folder: string;
  images: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Plataforma de Alquiler de Equipos Biomédicos',
    client: 'Sector Salud · Equipos Médicos',
    category: 'Web',
    url: null,
    stack: ['TypeScript', 'Node.js', 'n8n', 'Supabase', 'SEO & Analítica'],
    description:
      'Aplicación web full-stack para renta de equipos médicos de ultrasonido en tiempo real. Panel administrativo con control de stock, calendario interactivo de disponibilidad, validación inmediata y notificaciones automáticas por WhatsApp y correo.',
    longDescription:
      'Plataforma desarrollada de punta a punta para digitalizar el alquiler de equipos médicos especializados. Centraliza disponibilidad por equipo, valida fechas ocupadas antes de confirmar, registra automáticamente cada solicitud y mide cada conversión desde buscadores y pauta.',
    highlightPhrase:
      'Convierte cotizaciones dispersas por teléfono en reservas validadas en tiempo real con trazabilidad completa.',
    keyFeatures: [
      'Backend y lógica Full Stack con TypeScript, Node.js, n8n y Supabase en tiempo real',
      'Panel administrativo con control de inventario y disponibilidad mediante calendario interactivo',
      'Formulario de reservas con validación inmediata, registro automático en Google Sheets y alertas por WhatsApp y email',
      'Diseño responsive mobile-first para contratación rápida desde dispositivos móviles',
      'Instrumentación completa: SEO técnico por palabras clave, Google Analytics, Tag Manager, Search Console y mapas de calor Clarity',
    ],
    folder: '',
    images: [],
  },
  {
    id: 2,
    title: 'Ecosistema IA y Automatización CRM para Clínica Médica',
    client: 'Sector Salud · Medicina Especializada',
    category: 'IA',
    url: null,
    stack: ['OpenAI', 'Redis', 'n8n', 'Chatwoot CRM', 'WhatsApp Cloud API'],
    description:
      'Sistema de atención omnicanal con IA (WhatsApp, Instagram, Facebook y Chatwoot) conectado a base RAG propia. Procesa texto, notas de voz y comprobantes de pago con memoria persistente, extracción de datos al CRM y escalado instantáneo a humanos.',
    longDescription:
      'Ecosistema conversacional diseñado para automatizar la recepción de pacientes en clínica especializada. Combina recuperación aumentada (RAG) sobre protocolos y tarifas reales con memoria conversacional en Redis para coordinar agentes IA y asesores humanos sin perder contexto.',
    highlightPhrase:
      'Actúa como una recepción clínica digital 24/7 que comprende audios, valida anticipos y nutre el CRM automáticamente.',
    keyFeatures: [
      'Atención omnicanal automatizada 24/7 integrada en WhatsApp, Instagram, Facebook y CRM Chatwoot',
      'Procesamiento multimodal de texto, notas de voz e imágenes de comprobantes de pago',
      'Gestión de memoria en Redis que resume el historial e integra conversaciones previas de asesores humanos',
      'Escalamiento inmediato a personal médico o comercial con alertas directas por WhatsApp',
      'Flujos de seguimiento automático que filtran prospectos interesados y envían campañas personalizadas',
      'Extracción automática de nombre, email, teléfono y perfil del paciente hacia el CRM',
    ],
    folder: '',
    images: [],
  },
  {
    id: 3,
    title: 'Centro de Mando & Telemetría para Agentes de IA',
    client: 'Operaciones B2B · Supervisión IA',
    category: 'Web',
    url: null,
    stack: ['Next.js', 'TypeScript', 'Node.js', 'n8n Webhooks', 'Chart.js'],
    description:
      'Aplicación web ejecutiva para monitoreo, control y ajuste de agentes de IA en vivo. Dashboard analítico de conversaciones, escalaciones y latencia, análisis de sentimiento y editor de personalidad conectado por webhooks a n8n.',
    longDescription:
      'Panel de gobierno empresarial construido para que equipos no técnicos supervisen y ajusten sus agentes conversacionales sin tocar código. Sincroniza configuraciones, prompts y métricas operativas en tiempo real.',
    highlightPhrase:
      'Visibilidad ejecutiva completa sobre latencia, sentimiento del cliente y desempeño comercial de cada agente.',
    keyFeatures: [
      'Dashboard analítico en tiempo real (conversaciones activas, mensajes, tasa de escalación y tiempo promedio de respuesta)',
      'Módulo automático de análisis de sentimiento sobre interacciones entrantes y resueltas',
      'Panel de configuración para ajustar personalidad, nombre, tono comunicativo y reglas del agente IA',
      'Editor visual de plantillas de respuesta automática (confirmación, recordatorio y escalamiento)',
      'Sincronización bidireccional Full Stack mediante webhooks seguros con flujos en n8n',
    ],
    folder: '',
    images: [],
  },
  {
    id: 4,
    title: 'Plataforma de Reservas Directas con Sincronización Multicanal',
    client: 'Turismo & Hospitalidad · Alojamiento Exclusivo',
    category: 'Web',
    url: null,
    stack: ['Next.js', 'Supabase', 'Tailwind CSS', 'Airbnb & Booking Sync', 'SEO Local'],
    description:
      'Sitio web inmersivo para propiedad turística de descanso con motor de reservas unificado. Sincronización bidireccional en vivo con Airbnb, Booking y VRBO para evitar duplicidades, panel administrativo de fechas y SEO local.',
    longDescription:
      'Plataforma web orientada a captar reservas directas sin depender de comisiones de intermediarios. Combina fotografía y estética arquitectónica de carga ultrarrápida con un backend sincronizado frente a las principales OTAs.',
    highlightPhrase:
      'Reserva directa sin comisiones con calendario unificado en tiempo real entre web propia, Airbnb, Booking y VRBO.',
    keyFeatures: [
      'Arquitectura visual inmersiva en Next.js y Tailwind CSS optimizada para conversión turística',
      'Sincronización automática de disponibilidad con Airbnb, Booking y VRBO eliminando dobles reservas',
      'Panel administrativo privado para bloqueo manual de fechas, tarifas por temporada y seguimiento de huéspedes',
      'Optimización de velocidad y SEO local regional para capturar búsquedas directas de hospedaje',
    ],
    folder: '',
    images: [],
  },
  {
    id: 5,
    title: 'E-Commerce Full-Stack de Moda Urbana & Gestión de Stock',
    client: 'Comercio Minorista · Retail Moda',
    category: 'Web',
    url: null,
    stack: ['Laravel', 'PHP', 'MySQL', 'Pasarela de Pagos', 'Mobile-First'],
    description:
      'Tienda online desarrollada con arquitectura Full Stack en Laravel, PHP y MySQL. Incluye catálogo dinámico de productos, carrito de compras con gestión de pedidos y pagos, panel administrativo completo y UX optimizada para móvil.',
    longDescription:
      'Plataforma de comercio electrónico a medida diseñada para operar catálogo, pedidos, clientes e inventario propio desde una arquitectura escalable sin comisiones por transacción de plataformas SaaS.',
    highlightPhrase:
      'Tienda propia escalable con control completo sobre catálogo, inventario, pedidos y experiencia móvil.',
    keyFeatures: [
      'Backend sólido y escalable desarrollado en PHP y Laravel conectado a base de datos relacional MySQL',
      'Carrito de compras fluido con cálculo de totales, registro de pedidos y flujo de pagos integrado',
      'Panel administrativo integral para creación/edición de productos, gestión de inventario, usuarios y mensajes',
      'Interfaz adaptada a compra rápida desde dispositivos móviles',
    ],
    folder: '',
    images: [],
  },
  {
    id: 6,
    title: 'Portal Comercial B2B & Cotizador Mayorista de GPS',
    client: 'Logística & Telecomunicaciones · Mayorista B2B',
    category: 'Web',
    url: null,
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SEO B2B Nacional'],
    description:
      'Portal comercial B2B en Next.js y TypeScript para distribución mayorista de rastreadores GPS. Catálogo interactivo con más de 5 modelos y especificaciones técnicas, precios al por mayor, cotizador directo y SEO nacional.',
    longDescription:
      'Plataforma corporativa B2B estructurada para captar compradores mayoristas y flotas vehiculares a nivel nacional. Traduce fichas técnicas complejas en un catálogo comparativo claro que alimenta al equipo de ventas con cotizaciones calificadas.',
    highlightPhrase:
      'Arquitectura B2B enfocada en posicionamiento orgánico nacional y calificación inmediata de pedidos mayoristas.',
    keyFeatures: [
      'Catálogo técnico con más de 5 referencias de hardware GPS, fichas comparativas y escalas de precio mayorista',
      'Formulario inteligente de cotización al por mayor conectado al embudo comercial',
      'Implementación en Next.js, TypeScript y Tailwind CSS con tiempos de carga sub-segundo',
      'Estrategia de SEO técnico y semántico orientada a búsquedas B2B de distribución nacional',
    ],
    folder: '',
    images: [],
  },
  {
    id: 7,
    title: 'Sistema de Reservas & Calendario Centralizado para Estancia Privada',
    client: 'Hospitalidad · Propiedad Campestre',
    category: 'Web',
    url: null,
    stack: ['Next.js', 'Supabase', 'Tailwind CSS', 'APIs OTA Sync', 'SEO Local'],
    description:
      'Plataforma web de conversión directa para finca campestre con calendario centralizado sincronizado ante Airbnb, Booking y VRBO. Eliminó recargos de intermediarios con carga ultrarrápida y posicionamiento orgánico local.',
    longDescription:
      'Sistema web hecho a medida para propiedades turísticas de alto ticket que buscan trasladar tráfico de plataformas de terceros hacia reservas directas controladas por el propietario.',
    highlightPhrase:
      'Cero cruces de calendario y flujo de contratación directa desde la web hacia cierre por WhatsApp.',
    keyFeatures: [
      'Diseño visual inmersivo adaptado a la identidad arquitectónica del alojamiento',
      'Integración y sincronización en vivo de calendarios frente a Airbnb, Booking y VRBO',
      'Despliegue optimizado en velocidad Core Web Vitals y SEO geográfico regional',
      'Embudo directo de verificación de fechas y cierre de anticipo sin comisiones de plataforma',
    ],
    folder: '',
    images: [],
  },
  {
    id: 8,
    title: 'Sistema Automatizado de Prospección B2B y Cualificación con IA',
    client: 'Ventas B2B · Generación de Pipeline',
    category: 'Automatización',
    url: null,
    stack: ['Apify', 'Firecrawl', 'OpenAI', 'Google Sheets', 'n8n'],
    description:
      'Motor autónomo de prospección comercial B2B a gran escala. Extrae empresas objetivo con Apify, analiza sus sitios web con Firecrawl, califica prospectos con IA, redacta 3 mensajes personalizados para Instagram y correo y ejecuta seguimiento de 7 días.',
    longDescription:
      'Pipeline outbound completamente automatizado que reemplaza semanas de investigación manual en frío. Identifica negocios por nicho y ciudad, audita su presencia digital real y dispara secuencias personalizadas hiper-relevantes.',
    highlightPhrase:
      'De búsqueda de prospectos a secuencias personalizadas de 7 días ejecutándose en piloto automático.',
    keyFeatures: [
      'Extracción inteligente segmentada por industria y ciudad mediante actores de Apify',
      'Scraping profundo de contenido web empresarial con Firecrawl para entender su oferta actual',
      'Evaluación y puntuación automática de leads con modelos OpenAI según perfil comercial objetivo',
      'Generación de 3 variantes de mensajes hiper-personalizados por empresa para Instagram DM y correo electrónico',
      'Orquestación en n8n con envíos programados durante 7 días y registro de respuestas en Google Sheets',
    ],
    folder: '',
    images: [],
  },
  {
    id: 9,
    title: 'Agente IA Multimodal de Pedidos y Visión de Pagos para Restaurante',
    client: 'Sector Gastronómico · Restaurante',
    category: 'IA',
    url: null,
    stack: ['WhatsApp Cloud API', 'OpenAI Vision', 'PostgreSQL', 'Telegram API'],
    description:
      'Agente de IA conectado a base de datos SQL del menú en tiempo real. Atiende pedidos por audio y texto informal, genera links de pago, valida comprobantes con OpenAI Vision e integra botones interactivos de confirmación en Telegram.',
    longDescription:
      'Arquitectura autónoma de pedidos diseñada para eliminar cuellos de botella en horas pico. Consulta disponibilidad real en PostgreSQL, interpreta pedidos con lenguaje coloquial y permite al personal aprobar comandas con un toque en Telegram.',
    highlightPhrase:
      'Convierte notas de voz y capturas de transferencia en pedidos validados dentro de cocina en segundos.',
    keyFeatures: [
      'Comprensión multimodal de pedidos en lenguaje natural y notas de voz por WhatsApp',
      'Consulta en vivo al menú sobre base de datos SQL PostgreSQL para recomendaciones y stock real',
      'Generación automática de enlaces de pago y verificación de comprobantes mediante OpenAI Vision',
      'Flujo interactivo en Telegram con el detalle del pedido, soporte de pago y botones Aceptar/Rechazar para cocina',
      'Notificación automática instantánea al cliente confirmando preparación o solicitando corrección',
    ],
    folder: '',
    images: [],
  },
  {
    id: 10,
    title: 'Sistema RAG de Conocimiento Empresarial en Tiempo Real',
    client: 'Operaciones Corporativas · Base de Conocimiento IA',
    category: 'Automatización',
    url: null,
    stack: ['OpenAI Embeddings', 'n8n', 'PostgreSQL pgvector', 'Google Drive API'],
    description:
      'Arquitectura de Recuperación Aumentada (RAG) conectada a Google Drive. Monitorea carpetas corporativas, fragmenta documentos con metadata y resumen contextual, vectoriza con OpenAI Embeddings y actualiza Supabase pgvector en vivo.',
    longDescription:
      'Motor de ingesta e indexación documental diseñado para garantizar que los agentes de IA internos y comerciales respondan únicamente con base en políticas, manuales y listas de precios vigentes sin inventar datos.',
    highlightPhrase:
      'Actualiza un PDF o tarifa en Google Drive y todos los agentes de la empresa aprenden el cambio en segundos.',
    keyFeatures: [
      'Monitoreo automático en Google Drive ante creación o modificación de documentos corporativos',
      'Fragmentación inteligente (chunking) con asignación de metadata detallada para trazabilidad total de la fuente',
      'Generación de resúmenes contextuales globales por fragmento para elevar la precisión semántica',
      'Vectorización automática con OpenAI Embeddings e inserción en base vectorial Supabase Postgres (pgvector)',
      'Consultas vectoriales de baja latencia listas para consumo por múltiples agentes de IA',
    ],
    folder: '',
    images: [],
  },
  {
    id: 11,
    title: 'Plataforma Digital Multisede con Enrutamiento de Pedidos a WhatsApp',
    client: 'Sector Gastronómico · Cadena de 5 Sedes',
    category: 'Web',
    url: null,
    stack: ['Next.js', 'Tailwind CSS', 'WhatsApp API', 'Mobile UX'],
    description:
      'Sitio web rápido y minimalista desarrollado en Next.js para cadena gastronómica multicentro. Incluye menú digital estructurado con precios, selector interactivo entre 5 sedes y botón de pedido directo enrutado al WhatsApp de la sede elegida.',
    longDescription:
      'Solución web enfocada en eliminar comisiones de plataformas de domicilios y simplificar el pedido directo desde móvil. El usuario consulta el menú completo, selecciona su ubicación más cercana y envía su orden lista a la sede exacta.',
    highlightPhrase:
      'Menú móvil de carga instantánea que enruta pedidos directos por sede sin intermediarios ni comisiones.',
    keyFeatures: [
      'Interfaz minimalista de alto contraste pensada para lectura rápida del menú desde el celular',
      'Catálogo digital organizado por categorías con precios, adiciones, combos y descripciones claras',
      'Widget interactivo de selección entre 5 sedes físicas',
      'Integración directa con WhatsApp API enrutando la conversación hacia el número operativo de cada sede',
    ],
    folder: '',
    images: [],
  },
  {
    id: 12,
    title: 'Agente IA de Alta Concurrencia para Cadena de Comida Rápida',
    client: 'Sector Gastronómico · Comidas Rápidas',
    category: 'IA',
    url: null,
    stack: ['WhatsApp Cloud API', 'n8n', 'OpenAI Vision', 'SQL + Telegram API'],
    description:
      'Agente de IA especializado en picos nocturnos y fines de semana. Toma pedidos por voz y texto, calcula adiciones y combos contra base SQL, genera links de pago, valida comprobantes por visión y coordina despacho en Telegram.',
    longDescription:
      'Sistema conversacional entrenado para absorber cientos de chats simultáneos sin esperas. Interpreta modismos y notas de voz rápidas, calcula con exactitud matemática precios y domicilios y entrega al equipo operativo órdenes listas para cocina.',
    highlightPhrase:
      'Atiende cientos de pedidos simultáneos 24/7 con cálculo exacto de combos y verificación visual de pagos.',
    keyFeatures: [
      'Atención 24/7 de pedidos de comida rápida con soporte simultáneo sin colas de espera',
      'Interpretación precisa de notas de voz, abreviaturas y lenguaje cotidiano',
      'Cálculo exacto de precios, adiciones, bebidas y zonas desde catálogo SQL en tiempo real',
      'Verificación de transferencias con OpenAI Vision y generación de links de pago automáticos',
      'Despacho interactivo en Telegram con botones de aceptación y alertas de confirmación al comprador',
    ],
    folder: '',
    images: [],
  },
  {
    id: 13,
    title: 'Portal Clínico con Asistente Conversacional de Voz y Texto IA',
    client: 'Sector Salud · Consultorio Especializado',
    category: 'Web',
    url: null,
    stack: ['WordPress', 'ElevenLabs Voice AI', 'SEO Médico Local', 'Analytics + GSC'],
    description:
      'Sitio web integral de conversión médica optimizado para búsquedas locales en Google e instrumentado con Google Analytics y Search Console. Incorpora agente de IA de texto y voz natural en tiempo real mediante ElevenLabs.',
    longDescription:
      'Plataforma digital orientada a pacientes que buscan tratamientos especializados y requieren orientación inmediata sobre procedimientos antes de agendar. Integra posicionamiento orgánico local con atención conversacional por texto y voz 24/7.',
    highlightPhrase:
      'Combina posicionamiento médico local en Google con atención interactiva por voz natural mediante ElevenLabs 24/7.',
    keyFeatures: [
      'Sitio web clínico en WordPress enfocado en claridad médica, confianza y conversión de pacientes',
      'Asistente de IA dual (texto y voz natural vía ElevenLabs) activo 24/7 para resolver dudas clínicas frecuentes',
      'Optimización de SEO local y configuración técnica verificada en Google Search Console',
      'Seguimiento completo de eventos y conversiones de pacientes mediante Google Analytics',
    ],
    folder: '',
    images: [],
  },
  {
    id: 14,
    title: 'Generación y Despacho Automático de Contratos Legales Digitales',
    client: 'Legal & Operaciones · Gestión Documental',
    category: 'Automatización',
    url: null,
    stack: ['n8n', 'Webhooks', 'Gmail API', 'WhatsApp API', 'Google Sheets'],
    description:
      'Flujo automatizado en n8n para expedición y envío multicanal de documentación legal. Toma datos vía Webhook, diligencia contratos dinámicos en segundos, adjunta políticas corporativas y despacha por WhatsApp y correo dejando registro.',
    longDescription:
      'Pipeline de automatización legal-operativa creado para suprimir errores de digitación manual y retrasos entre el cierre comercial y la firma del contrato. Centraliza además el histórico contractual auditable en hojas de control.',
    highlightPhrase:
      'De datos del cierre comercial a contrato diligenciado y entregado al cliente en segundos sin errores humanos.',
    keyFeatures: [
      'Ingesta automática de variables comerciales vía Webhook con llenado instantáneo de plantillas legales',
      'Adjuntado automático de políticas corporativas y términos de servicio vigentes en cada expediente',
      'Despacho multicanal simultáneo hacia el WhatsApp y correo electrónico del cliente vía Gmail y WhatsApp API',
      'Registro centralizado y trazable de cada documento emitido en Google Sheets para auditoría administrativa',
    ],
    folder: '',
    images: [],
  },
  {
    id: 15,
    title: 'Infraestructura de Backup Cloud Redundante para Flujos n8n',
    client: 'Infraestructura TI · Continuidad Operativa',
    category: 'Automatización',
    url: null,
    stack: ['n8n', 'Google Drive API', 'Automatización Cloud', 'Cron Jobs'],
    description:
      'Sistema automatizado de respaldo continuo para flujos críticos en múltiples instancias de n8n. Monitorea y extrae configuraciones de dos servidores independientes, empaqueta copias versionadas y las almacena en Google Drive.',
    longDescription:
      'Solución de resiliencia e infraestructura diseñada para proteger los activos de automatización empresarial frente a fallos de servidor o cambios accidentales, garantizando recuperación rápida en minutos.',
    highlightPhrase:
      'Respaldo automático programado de ecosistemas n8n multi-servidor para garantizar cero pérdida operativa.',
    keyFeatures: [
      'Sincronización dual que consulta y extrae todos los flujos activos de dos instancias independientes de n8n',
      'Empaquetado automático con versionado por fecha y subida segura hacia Google Drive API',
      'Ejecución programada sin intervención humana para continuidad de negocio y restauración inmediata',
    ],
    folder: '',
    images: [],
  },
];

export const PROJECTS_EN: Project[] = [
  {
    id: 1,
    title: 'Biomedical & Ultrasound Equipment Rental Platform',
    client: 'Healthcare · Biomedical Equipment',
    category: 'Web',
    url: null,
    stack: ['TypeScript', 'Node.js', 'n8n', 'Supabase', 'SEO & Analytics'],
    description:
      'Full-stack web application for real-time medical ultrasound equipment rental. Features an admin panel with live stock tracking, interactive availability calendar, automated Google Sheets logging, and instant WhatsApp and email alerts.',
    longDescription:
      'End-to-end digital rental platform engineered to replace manual spreadsheet scheduling. Validates live inventory per unit before booking confirmation, logs requests automatically, and tracks every acquisition channel.',
    highlightPhrase:
      'Turns manual phone inquiries into validated real-time equipment bookings with full operational traceability.',
    keyFeatures: [
      'Full-stack engineering built on TypeScript, Node.js, n8n, and real-time Supabase database',
      'Administrative dashboard with stock management and interactive availability calendar',
      'Booking engine with live conflict prevention, Google Sheets sync, and automated WhatsApp/email alerts',
      'Mobile-first responsive interface optimized for doctors booking from smartphones',
      'Full telemetry & search stack: technical keyword SEO, Google Analytics, Tag Manager, Search Console, and Clarity heatmaps',
    ],
    folder: '',
    images: [],
  },
  {
    id: 2,
    title: 'Omnichannel AI Reception & CRM Ecosystem for Medical Clinic',
    client: 'Healthcare · Specialized Medical Clinic',
    category: 'IA',
    url: null,
    stack: ['OpenAI', 'Redis', 'n8n', 'Chatwoot CRM', 'WhatsApp Cloud API'],
    description:
      'Omnichannel AI agent across WhatsApp, Instagram, Facebook, and Chatwoot CRM backed by proprietary RAG. Processes text, voice notes, and payment receipts with Redis conversational memory, CRM data extraction, and instant human handoff.',
    longDescription:
      'Conversational automation system built for specialized clinical intake. Combines Retrieval-Augmented Generation (RAG) over verified procedures and fees with Redis memory summarizing context seamlessly across AI and human staff.',
    highlightPhrase:
      'Operates as a 24/7 digital clinic receptionist that processes voice notes, validates receipts, and populates the CRM.',
    keyFeatures: [
      '24/7 automated omnichannel patient care integrated across WhatsApp, Instagram, Facebook, and Chatwoot CRM',
      'Multimodal processing of text inquiries, voice notes, and transfer receipt images',
      'Redis conversational memory summarizing history and merging human agent conversations smoothly',
      'Instant escalation to medical/sales specialists with real-time WhatsApp alerts',
      'Automated marketing follow-up flows filtering high-intent leads and dispatching targeted offers',
      'Automatic extraction of patient name, email, phone, and summary bio straight into CRM records',
    ],
    folder: '',
    images: [],
  },
  {
    id: 3,
    title: 'Real-Time AI Agent Command Center & Telemetry Dashboard',
    client: 'B2B Operations · AI Supervision',
    category: 'Web',
    url: null,
    stack: ['Next.js', 'TypeScript', 'Node.js', 'n8n Webhooks', 'Chart.js'],
    description:
      'Executive web application for live monitoring and governance of conversational AI agents. Displays real-time KPIs (conversations, escalations, response latency), sentiment analysis, and an editable personality/template panel synced via n8n webhooks.',
    longDescription:
      'Enterprise control plane built so non-technical operations teams can monitor, audit, and tune AI assistant behavior, tone, and automated templates without touching source code.',
    highlightPhrase:
      'Full operational visibility over response latency, customer sentiment, and conversion metrics in real time.',
    keyFeatures: [
      'Live analytics dashboard tracking conversations, message volume, escalations, and average reply latency',
      'Automated customer sentiment analysis across active and resolved threads',
      'Live settings panel to configure AI personality, assistant name, tone of voice, and phrasing rules',
      'Editable automated message templates (confirmations, reminders, and escalation notices) from the UI',
      'Full-stack webhook synchronization directly integrated with production n8n orchestration pipelines',
    ],
    folder: '',
    images: [],
  },
  {
    id: 4,
    title: 'Direct Hospitality Booking Platform with Multi-Channel OTA Sync',
    client: 'Hospitality & Tourism · Luxury Lodging',
    category: 'Web',
    url: null,
    stack: ['Next.js', 'Supabase', 'Tailwind CSS', 'Airbnb & Booking Sync', 'Local SEO'],
    description:
      'High-speed hospitality web platform featuring two-way real-time calendar synchronization with Airbnb, Booking, and VRBO to eliminate double bookings, plus an admin calendar panel and regional local SEO.',
    longDescription:
      'Custom direct-booking web architecture engineered for private hospitality properties to drive commission-free bookings while keeping external OTA availability strictly synchronized.',
    highlightPhrase:
      'Commission-free direct bookings backed by automated two-way calendar sync across Airbnb, Booking, and VRBO.',
    keyFeatures: [
      'High-conversion Next.js and Tailwind CSS frontend crafted around large-format visual presentation',
      'Two-way calendar integration with Airbnb, Booking, and VRBO preventing overlapping dates',
      'Private administrative panel for manual date holds, seasonal pricing, and booking oversight',
      'Sub-second mobile load performance and local geographic SEO targeting high-intent travelers',
    ],
    folder: '',
    images: [],
  },
  {
    id: 5,
    title: 'Full-Stack Streetwear E-Commerce & Inventory System',
    client: 'Retail E-Commerce · Urban Apparel',
    category: 'Web',
    url: null,
    stack: ['Laravel', 'PHP', 'MySQL', 'Payment Checkout', 'Mobile-First'],
    description:
      'Custom online retail store built on a full-stack Laravel, PHP, and MySQL architecture. Includes dynamic product catalog, shopping cart and order/payment management, comprehensive admin portal, and mobile-optimized checkout.',
    longDescription:
      'Proprietary e-commerce engine engineered for full operational control over catalog variants, stock movement, customer inquiries, and checkout without third-party SaaS transaction fees.',
    highlightPhrase:
      'Scalable custom online storefront with complete ownership of catalog, inventory, and order fulfillment.',
    keyFeatures: [
      'Robust Laravel and PHP backend backed by relational MySQL inventory and order schema',
      'Full shopping cart, order tracking, and integrated payment workflow',
      'Centralized admin panel for product CRUD, stock control, user accounts, and customer messages',
      'Responsive UI engineered specifically for frictionless mobile checkout conversions',
    ],
    folder: '',
    images: [],
  },
  {
    id: 6,
    title: 'B2B Wholesale GPS Hardware Portal & Volume Quoter',
    client: 'Logistics & Telecom · B2B Wholesale',
    category: 'Web',
    url: null,
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'National B2B SEO'],
    description:
      'B2B commercial portal built on Next.js and TypeScript for wholesale 4G GPS tracker distribution. Features a technical catalog with 5+ models, wholesale pricing tiers, volume quote builder, and national organic SEO architecture.',
    longDescription:
      'Corporate B2B lead-generation platform built for fleet and hardware distributors. Presents detailed hardware specs clearly so wholesale buyers submit structured volume quote requests immediately.',
    highlightPhrase:
      'Engineered to dominate national B2B search rankings and qualify wholesale fleet hardware deals automatically.',
    keyFeatures: [
      'Interactive technical catalog showcasing 5+ GPS tracker models, specifications, and wholesale tiers',
      'Structured B2B quote intake routing qualified enterprise leads straight to sales engineers',
      'Modern Next.js, TypeScript, and Tailwind CSS architecture with sub-second page rendering',
      'Technical and semantic SEO structured for national B2B wholesale buyer intent',
    ],
    folder: '',
    images: [],
  },
  {
    id: 7,
    title: 'Direct Booking Engine & Centralized Calendar for Country Estate',
    client: 'Hospitality · Private Country Estate',
    category: 'Web',
    url: null,
    stack: ['Next.js', 'Supabase', 'Tailwind CSS', 'OTA API Sync', 'Local SEO'],
    description:
      'Direct-conversion booking site for a private country estate featuring a centralized availability calendar synced across Airbnb, Booking, and VRBO, sub-second Edge loading, and direct WhatsApp confirmation without intermediary fees.',
    longDescription:
      'Bespoke hospitality booking portal engineered to convert organic search visitors directly without losing 15–20% margin to third-party OTA commissions.',
    highlightPhrase:
      'Zero double-booking conflicts and direct high-ticket reservations flowing straight to property owners.',
    keyFeatures: [
      'Immersive editorial layout tailored to highlight estate amenities and group capacity',
      'Live multi-platform calendar synchronization against Airbnb, Booking, and VRBO',
      'Edge-deployed Next.js speed optimization with regional geographic SEO',
      'Direct availability verification and commission-free WhatsApp reservation closing flow',
    ],
    folder: '',
    images: [],
  },
  {
    id: 8,
    title: 'Autonomous B2B Lead Prospecting & AI Qualification Engine',
    client: 'B2B Sales · Outbound Demand Generation',
    category: 'Automatización',
    url: null,
    stack: ['Apify', 'Firecrawl', 'OpenAI', 'Google Sheets', 'n8n'],
    description:
      'Large-scale automated B2B prospecting pipeline. Extracts target businesses via Apify, scrapes websites deeply with Firecrawl, scores fit using OpenAI, drafts 3 tailored Instagram and email outreach variants, and runs 7-day automated follow-ups.',
    longDescription:
      'End-to-end outbound automation system replacing manual cold prospect research. Audits each target company website before generating individualized sales messages.',
    highlightPhrase:
      'From niche prospect discovery to 7-day personalized multi-channel outreach running on autopilot.',
    keyFeatures: [
      'Targeted B2B company discovery by industry and city using automated Apify runs',
      'Deep website crawling via Firecrawl to extract service offerings and digital maturity signals',
      'AI qualification scoring powered by OpenAI to filter high-fit enterprise leads',
      'Automatic generation of 3 custom message variants per company for Instagram DM and cold email',
      'Scheduled 7-day n8n email sequence and centralized response tracking in Google Sheets',
    ],
    folder: '',
    images: [],
  },
  {
    id: 9,
    title: 'Multimodal AI Ordering & Payment Vision Agent for Restaurant',
    client: 'Food & Beverage · Restaurant Operations',
    category: 'IA',
    url: null,
    stack: ['WhatsApp Cloud API', 'OpenAI Vision', 'PostgreSQL', 'Telegram API'],
    description:
      'Conversational WhatsApp AI ordering agent connected to a live PostgreSQL menu. Understands voice notes and natural text, generates payment links, validates transfer screenshots with OpenAI Vision, and routes interactive orders to Telegram.',
    longDescription:
      'Full ordering automation designed to eliminate phone bottlenecks during dinner rush. Queries real-time menu availability from SQL and lets kitchen staff accept or reject orders in one click on Telegram.',
    highlightPhrase:
      'Converts casual voice notes and transfer screenshots into verified kitchen orders in seconds.',
    keyFeatures: [
      'Multimodal order intake understanding voice notes, colloquial expressions, and custom modifiers',
      'Real-time PostgreSQL menu queries supporting live stock checks and smart item suggestions',
      'Automated checkout link generation and receipt validation via OpenAI Vision OCR',
      'Interactive Telegram staff dashboard displaying order summaries, receipts, and Accept/Reject buttons',
      'Instant automated WhatsApp notifications updating the customer on confirmation or payment status',
    ],
    folder: '',
    images: [],
  },
  {
    id: 10,
    title: 'Real-Time Enterprise RAG Knowledge Base System',
    client: 'Enterprise Operations · AI Knowledge Base',
    category: 'Automatización',
    url: null,
    stack: ['OpenAI Embeddings', 'n8n', 'PostgreSQL pgvector', 'Google Drive API'],
    description:
      'Dynamic Retrieval-Augmented Generation (RAG) ingestion pipeline linked to Google Drive. Monitors corporate folders, chunks documents with traceability metadata and global context summaries, vectorizes with OpenAI Embeddings, and updates Supabase pgvector.',
    longDescription:
      'Zero-hallucination corporate knowledge pipeline built so company AI assistants always answer from up-to-date SOPs, manuals, and verified pricing sheets.',
    highlightPhrase:
      'Update a single file in Google Drive and every company AI assistant reflects the update in seconds.',
    keyFeatures: [
      'Real-time Google Drive folder watcher triggering automatically on new or edited files',
      'Smart text chunking assigning structured metadata for complete source citation and traceability',
      'Contextual document-level summaries embedded per chunk to maximize retrieval precision',
      'Automated vectorization with OpenAI Embeddings stored inside Supabase PostgreSQL (pgvector)',
      'Sub-second semantic retrieval layer shared cleanly across internal and customer-facing AI agents',
    ],
    folder: '',
    images: [],
  },
  {
    id: 11,
    title: 'Multi-Branch Digital Menu & WhatsApp Order Routing Platform',
    client: 'Food & Beverage · 5-Branch Chain',
    category: 'Web',
    url: null,
    stack: ['Next.js', 'Tailwind CSS', 'WhatsApp API', 'Mobile UX'],
    description:
      'Fast, minimalist Next.js digital menu and ordering site built for a 5-location restaurant chain. Includes categorized menu pricing, an interactive 5-branch selector, and direct WhatsApp order routing straight to the chosen kitchen branch.',
    longDescription:
      'Commission-free direct ordering web experience built for high mobile conversion, routing customers straight from an instant-loading menu to the exact store fulfilling delivery.',
    highlightPhrase:
      'Instant mobile menu routing structured direct orders to the exact branch without third-party delivery fees.',
    keyFeatures: [
      'Clean, high-contrast mobile UI engineered for rapid browsing on cellular connections',
      'Complete digital catalog covering burgers, sides, drinks, descriptions, and updated prices',
      'Interactive branch selector widget choosing cleanly across 5 physical restaurant locations',
      'One-tap WhatsApp API handoff routing each order directly to the selected branch',
    ],
    folder: '',
    images: [],
  },
  {
    id: 12,
    title: 'High-Concurrency Fast Food WhatsApp Ordering AI Agent',
    client: 'Food & Beverage · Fast Food Chain',
    category: 'IA',
    url: null,
    stack: ['WhatsApp Cloud API', 'n8n', 'OpenAI Vision', 'SQL + Telegram API'],
    description:
      'High-volume WhatsApp AI agent built for weekend rush hours. Handles simultaneous voice and text orders 24/7, computes combos and add-ons against a live SQL menu, validates payment receipts via vision AI, and dispatches tickets via Telegram.',
    longDescription:
      'Production ordering engine designed to serve hundreds of concurrent fast-food shoppers with zero queue time, exact pricing math, and automated payment verification.',
    highlightPhrase:
      'Serves concurrent weekend peak demand 24/7 with accurate combo math and AI receipt verification.',
    keyFeatures: [
      '24/7 simultaneous WhatsApp order handling with zero human queue bottlenecks',
      'Accurate transcription and parsing of voice notes, slang, and combo customizations',
      'Live SQL database calculations for item pricing, toppings, combos, and delivery zones',
      'Automated payment link creation plus instant bank transfer screenshot validation via OpenAI Vision',
      'Interactive Telegram kitchen approval buttons triggering real-time customer confirmation messages',
    ],
    folder: '',
    images: [],
  },
  {
    id: 13,
    title: 'Medical Practice Portal with 24/7 ElevenLabs Voice & Text AI',
    client: 'Healthcare · Specialized Medical Practice',
    category: 'Web',
    url: null,
    stack: ['WordPress', 'ElevenLabs Voice AI', 'Local Medical SEO', 'Analytics + GSC'],
    description:
      'Conversion-focused clinical website integrated with a 24/7 conversational AI assistant supporting both text chat and realistic ElevenLabs voice responses. Fully instrumented for local medical SEO, Search Console, and Google Analytics.',
    longDescription:
      'Patient acquisition portal pairing high-trust medical content and local search visibility with an interactive voice-enabled AI orientation assistant.',
    highlightPhrase:
      'Pairs top local medical search visibility with natural 24/7 ElevenLabs voice and text patient guidance.',
    keyFeatures: [
      'Conversion-engineered WordPress website structured around treatment clarity and patient trust',
      'Integrated 24/7 text and natural voice AI assistant powered by ElevenLabs for procedure orientation',
      'Verified local medical SEO and technical indexing monitored in Google Search Console',
      'End-to-end Google Analytics event tracking measuring patient inquiry conversions',
    ],
    folder: '',
    images: [],
  },
  {
    id: 14,
    title: 'Automated Legal Contract Drafting & Multi-Channel Dispatch',
    client: 'Legal & Operations · Document Automation',
    category: 'Automatización',
    url: null,
    stack: ['n8n', 'Webhooks', 'Gmail API', 'WhatsApp API', 'Google Sheets'],
    description:
      'End-to-end n8n legal automation workflow that receives client data via Webhook, auto-fills custom digital contracts in seconds, attaches corporate policies and terms, dispatches via WhatsApp and email, and logs audit trails in Google Sheets.',
    longDescription:
      'Legal-ops automation built to eliminate manual copy-paste contract preparation and speed up onboarding immediately after commercial approval.',
    highlightPhrase:
      'Turns incoming webhook deal payloads into signed-ready legal contracts delivered across WhatsApp and email.',
    keyFeatures: [
      'Real-time Webhook trigger populating dynamic legal contract variables with zero typos',
      'Automatic attachment of corporate privacy policies and service terms to every packet',
      'Dual-channel automated delivery straight to the client via WhatsApp API and Gmail API',
      'Centralized administrative audit ledger recording every issued contract in Google Sheets',
    ],
    folder: '',
    images: [],
  },
  {
    id: 15,
    title: 'Redundant Dual-Instance n8n Cloud Backup Infrastructure',
    client: 'IT Infrastructure · Business Continuity',
    category: 'Automatización',
    url: null,
    stack: ['n8n', 'Google Drive API', 'Cloud Automation', 'Cron Jobs'],
    description:
      'Automated continuity pipeline monitoring and extracting workflows across two independent production n8n servers. Packages versioned backups on a fixed schedule and archives them automatically to Google Drive.',
    longDescription:
      'Operational resilience automation safeguarding mission-critical n8n workflows across multiple environments for rapid point-in-time disaster recovery.',
    highlightPhrase:
      'Scheduled multi-server backup automation ensuring zero automation loss and rapid recovery.',
    keyFeatures: [
      'Dual synchronization querying and extracting workflow JSON definitions from two separate n8n hosts',
      'Automated packaging and encrypted upload of timestamped snapshots via Google Drive API',
      'Hands-free scheduled continuity protection enabling rapid restoration after any server failure',
    ],
    folder: '',
    images: [],
  },
];
