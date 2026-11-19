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
    stack: ['Reservas en Vivo', 'Panel Administrativo', 'Alertas WhatsApp', 'SEO & Analítica'],
    description:
      'Plataforma web a medida para renta de equipos médicos de ultrasonido en tiempo real. Panel administrativo con control de stock, calendario interactivo de disponibilidad, validación inmediata y notificaciones automáticas por WhatsApp y correo.',
    longDescription:
      'Plataforma desarrollada de punta a punta para digitalizar el alquiler de equipos médicos especializados. Centraliza disponibilidad por equipo, valida fechas ocupadas antes de confirmar, registra automáticamente cada solicitud y mide cada conversión desde buscadores y pauta.',
    highlightPhrase:
      'Convierte cotizaciones dispersas por teléfono en reservas validadas en tiempo real con trazabilidad completa.',
    keyFeatures: [
      'Plataforma web propia con base de datos en tiempo real y sincronización automática',
      'Panel administrativo con control de inventario y disponibilidad mediante calendario interactivo',
      'Formulario de reservas con validación inmediata, registro automático en Google Sheets y alertas por WhatsApp y email',
      'Diseño adaptado a móviles para contratación rápida desde cualquier celular',
      'Instrumentación completa de SEO por palabras clave, analítica web y seguimiento de conversiones',
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
    stack: ['Agente IA 24/7', 'Omnicanal', 'CRM Integrado', 'Validación de Pagos'],
    description:
      'Sistema de atención omnicanal con IA (WhatsApp, Instagram, Facebook y CRM) conectado al catálogo y protocolos de la clínica. Procesa texto, notas de voz y comprobantes de pago con memoria conversacional, registro automático en CRM y escalado instantáneo a humanos.',
    longDescription:
      'Ecosistema conversacional diseñado para automatizar la recepción de pacientes en clínica especializada. Combina respuestas verificadas sobre procedimientos y tarifas reales con memoria conversacional para coordinar agentes de IA y asesores humanos sin perder contexto.',
    highlightPhrase:
      'Actúa como una recepción clínica digital 24/7 que comprende audios, valida anticipos y nutre el CRM automáticamente.',
    keyFeatures: [
      'Atención omnicanal automatizada 24/7 integrada en WhatsApp, Instagram, Facebook y CRM centralizado',
      'Procesamiento inteligente de texto, notas de voz e imágenes de comprobantes de pago',
      'Memoria conversacional que resume el historial e integra conversaciones previas de asesores humanos',
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
    stack: ['Panel Ejecutivo', 'Métricas en Vivo', 'Análisis de Sentimiento', 'Control de Agentes'],
    description:
      'Aplicación web ejecutiva para monitoreo, control y ajuste de agentes de IA en vivo. Dashboard analítico de conversaciones, escalaciones y tiempos de respuesta, análisis de sentimiento y editor de personalidad sincronizado en tiempo real.',
    longDescription:
      'Panel de gobierno empresarial construido para que equipos no técnicos supervisen y ajusten sus agentes conversacionales sin tocar código. Sincroniza configuraciones, tono de atención y métricas operativas en tiempo real.',
    highlightPhrase:
      'Visibilidad ejecutiva completa sobre tiempos de respuesta, sentimiento del cliente y desempeño comercial de cada agente.',
    keyFeatures: [
      'Dashboard analítico en tiempo real (conversaciones activas, mensajes, tasa de escalación y tiempo promedio de respuesta)',
      'Módulo automático de análisis de sentimiento sobre interacciones entrantes y resueltas',
      'Panel de configuración para ajustar personalidad, nombre, tono comunicativo y reglas del agente IA',
      'Editor visual de plantillas de respuesta automática (confirmación, recordatorio y escalamiento)',
      'Sincronización bidireccional en vivo con toda la operación de atención automatizada',
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
    stack: ['Reservas Directas', 'Airbnb & Booking Sync', 'Panel de Fechas', 'SEO Local'],
    description:
      'Sitio web inmersivo para propiedad turística de descanso con motor de reservas unificado. Sincronización bidireccional en vivo con Airbnb, Booking y VRBO para evitar duplicidades, panel administrativo de fechas y SEO local.',
    longDescription:
      'Plataforma web orientada a captar reservas directas sin depender de comisiones de intermediarios. Combina fotografía y estética arquitectónica de carga ultrarrápida con un calendario sincronizado frente a las principales plataformas de alojamiento.',
    highlightPhrase:
      'Reserva directa sin comisiones con calendario unificado en tiempo real entre web propia, Airbnb, Booking y VRBO.',
    keyFeatures: [
      'Diseño visual inmersivo de carga ultrarrápida optimizado para conversión turística',
      'Sincronización automática de disponibilidad con Airbnb, Booking y VRBO eliminando dobles reservas',
      'Panel administrativo privado para bloqueo manual de fechas, tarifas por temporada y seguimiento de huéspedes',
      'Optimización de velocidad y SEO local regional para capturar búsquedas directas de hospedaje',
    ],
    folder: '',
    images: [],
  },
  {
    id: 5,
    title: 'Tienda Online Propia de Moda Urbana & Gestión de Stock',
    client: 'Comercio Minorista · Retail Moda',
    category: 'Web',
    url: null,
    stack: ['E-Commerce Propio', 'Control de Inventario', 'Pasarela de Pagos', 'Compra Móvil'],
    description:
      'Tienda online a medida con catálogo dinámico de productos, carrito de compras con gestión de pedidos y pagos, panel administrativo completo y experiencia optimizada para comprar rápido desde el celular.',
    longDescription:
      'Plataforma de comercio electrónico a medida diseñada para operar catálogo, pedidos, clientes e inventario propio sin pagar comisiones por transacción ni mensualidades crecientes a plataformas de terceros.',
    highlightPhrase:
      'Tienda propia escalable con control completo sobre catálogo, inventario, pedidos y experiencia móvil.',
    keyFeatures: [
      'Plataforma de comercio electrónico propia con gestión centralizada de inventario y pedidos',
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
    stack: ['Portal B2B', 'Catálogo Mayorista', 'Cotizador Directo', 'SEO Nacional'],
    description:
      'Portal comercial B2B para distribución mayorista de rastreadores GPS. Catálogo interactivo con más de 5 modelos y especificaciones técnicas, precios al por mayor, cotizador directo y posicionamiento SEO nacional.',
    longDescription:
      'Plataforma corporativa B2B estructurada para captar compradores mayoristas y flotas vehiculares a nivel nacional. Traduce fichas técnicas complejas en un catálogo comparativo claro que alimenta al equipo de ventas con cotizaciones calificadas.',
    highlightPhrase:
      'Enfocado en posicionamiento orgánico nacional y calificación inmediata de pedidos mayoristas.',
    keyFeatures: [
      'Catálogo técnico con más de 5 referencias de equipos GPS, fichas comparativas y escalas de precio mayorista',
      'Formulario inteligente de cotización al por mayor conectado al embudo comercial',
      'Carga instantánea en menos de un segundo optimizada para retener compradores desde cualquier dispositivo',
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
    stack: ['Reservas Directas', 'Sincronización OTAs', 'Cierre WhatsApp', 'SEO Local'],
    description:
      'Plataforma web de conversión directa para finca campestre con calendario centralizado sincronizado ante Airbnb, Booking y VRBO. Eliminó recargos de intermediarios con carga ultrarrápida y posicionamiento orgánico local.',
    longDescription:
      'Sistema web hecho a medida para propiedades turísticas de alto ticket que buscan trasladar tráfico de plataformas de terceros hacia reservas directas controladas por el propietario.',
    highlightPhrase:
      'Cero cruces de calendario y flujo de contratación directa desde la web hacia cierre por WhatsApp.',
    keyFeatures: [
      'Diseño visual inmersivo adaptado a la identidad arquitectónica del alojamiento',
      'Integración y sincronización en vivo de calendarios frente a Airbnb, Booking y VRBO',
      'Optimización de velocidad móvil y SEO geográfico regional para captar reservas orgánicas',
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
    stack: ['Prospección B2B', 'Cualificación IA', 'Seguimiento 7 Días', 'Google Sheets'],
    description:
      'Motor autónomo de prospección comercial B2B a gran escala. Identifica empresas objetivo por nicho y ciudad, analiza sus sitios web, califica prospectos con IA, redacta 3 mensajes personalizados para Instagram y correo y ejecuta seguimiento automático de 7 días.',
    longDescription:
      'Sistema de prospección completamente automatizado que reemplaza semanas de investigación manual en frío. Identifica negocios por nicho y ciudad, audita su presencia digital real y dispara secuencias personalizadas hiper-relevantes.',
    highlightPhrase:
      'De búsqueda de prospectos a secuencias personalizadas de 7 días ejecutándose en piloto automático.',
    keyFeatures: [
      'Búsqueda inteligente de empresas objetivo segmentada por industria y ciudad',
      'Análisis automático del sitio web de cada empresa para entender su oferta comercial actual',
      'Evaluación y puntuación automática de prospectos con IA según perfil de cliente ideal',
      'Generación de 3 variantes de mensajes hiper-personalizados por empresa para Instagram DM y correo electrónico',
      'Secuencia programada de seguimiento durante 7 días con registro centralizado de respuestas en Google Sheets',
    ],
    folder: '',
    images: [],
  },
  {
    id: 9,
    title: 'Agente IA Multimodal de Pedidos y Validación de Pagos para Restaurante',
    client: 'Sector Gastronómico · Restaurante',
    category: 'IA',
    url: null,
    stack: ['Pedidos WhatsApp', 'Notas de Voz IA', 'Validación de Pagos', 'Control Cocina'],
    description:
      'Agente de IA conectado al menú y disponibilidad del restaurante en tiempo real. Atiende pedidos por audio y texto informal, genera links de pago, valida comprobantes de transferencia automáticamente y envía comandas con botones de confirmación a cocina.',
    longDescription:
      'Sistema autónomo de pedidos diseñado para eliminar cuellos de botella en horas pico. Consulta disponibilidad real del menú, interpreta pedidos con lenguaje coloquial y permite al personal aprobar comandas con un toque en Telegram.',
    highlightPhrase:
      'Convierte notas de voz y capturas de transferencia en pedidos validados dentro de cocina en segundos.',
    keyFeatures: [
      'Comprensión multimodal de pedidos en lenguaje natural y notas de voz por WhatsApp',
      'Consulta en vivo al menú y disponibilidad para hacer recomendaciones y validar stock real',
      'Generación automática de enlaces de pago y verificación visual de comprobantes de transferencia',
      'Flujo interactivo en Telegram con el detalle del pedido, soporte de pago y botones Aceptar/Rechazar para cocina',
      'Notificación automática instantánea al cliente confirmando preparación o solicitando corrección',
    ],
    folder: '',
    images: [],
  },
  {
    id: 10,
    title: 'Base de Conocimiento Empresarial Conectada a IA en Tiempo Real',
    client: 'Operaciones Corporativas · Conocimiento IA',
    category: 'Automatización',
    url: null,
    stack: ['Conocimiento IA', 'Sincronización Drive', 'Cero Alucinaciones', 'Actualización en Vivo'],
    description:
      'Sistema inteligente de conocimiento conectado a Google Drive. Monitorea carpetas corporativas, procesa documentos, manuales y listas de precios y mantiene actualizados a todos los agentes de IA de la empresa en segundos.',
    longDescription:
      'Motor de actualización documental diseñado para garantizar que los agentes de IA internos y comerciales respondan únicamente con base en políticas, manuales y listas de precios vigentes sin inventar datos.',
    highlightPhrase:
      'Actualiza un PDF o tarifa en Google Drive y todos los agentes de la empresa aprenden el cambio en segundos.',
    keyFeatures: [
      'Monitoreo automático en Google Drive ante creación o modificación de documentos corporativos',
      'Procesamiento estructurado de documentos con trazabilidad total de la fuente original',
      'Comprensión contextual de manuales, tarifas y políticas para respuestas precisas',
      'Actualización automática en tiempo real sin intervención técnica del equipo',
      'Consultas instantáneas listas para consumo simultáneo por múltiples agentes de IA',
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
    stack: ['Menú Digital Rápido', 'Selector 5 Sedes', 'Pedidos WhatsApp', 'UX Móvil'],
    description:
      'Sitio web rápido y minimalista para cadena gastronómica multicentro. Incluye menú digital estructurado con precios, selector interactivo entre 5 sedes y botón de pedido directo enrutado al WhatsApp de la sede elegida.',
    longDescription:
      'Solución web enfocada en eliminar comisiones de plataformas de domicilios y simplificar el pedido directo desde móvil. El usuario consulta el menú completo, selecciona su ubicación más cercana y envía su orden lista a la sede exacta.',
    highlightPhrase:
      'Menú móvil de carga instantánea que enruta pedidos directos por sede sin intermediarios ni comisiones.',
    keyFeatures: [
      'Interfaz minimalista de alto contraste pensada para lectura rápida del menú desde el celular',
      'Catálogo digital organizado por categorías con precios, adiciones, combos y descripciones claras',
      'Selector interactivo entre las 5 sedes físicas',
      'Integración directa con WhatsApp enrutando la conversación hacia el número operativo de cada sede',
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
    stack: ['Atención 24/7', 'Pedidos por Voz', 'Cálculo de Combos', 'Verificación de Pagos'],
    description:
      'Agente de IA especializado en picos nocturnos y fines de semana. Toma pedidos por voz y texto, calcula adiciones y combos en tiempo real, genera links de pago, valida comprobantes automáticamente y coordina el despacho con cocina.',
    longDescription:
      'Sistema conversacional entrenado para absorber cientos de chats simultáneos sin esperas. Interpreta modismos y notas de voz rápidas, calcula con exactitud matemática precios y domicilios y entrega al equipo operativo órdenes listas para cocina.',
    highlightPhrase:
      'Atiende cientos de pedidos simultáneos 24/7 con cálculo exacto de combos y verificación visual de pagos.',
    keyFeatures: [
      'Atención 24/7 de pedidos de comida rápida con soporte simultáneo sin colas de espera',
      'Interpretación precisa de notas de voz, abreviaturas y lenguaje cotidiano',
      'Cálculo exacto de precios, adiciones, bebidas y zonas de domicilio en tiempo real',
      'Verificación automática de comprobantes de transferencia y generación de links de pago',
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
    stack: ['Portal Médico', 'Asistente de Voz IA', 'SEO Médico Local', 'Analítica de Pacientes'],
    description:
      'Sitio web integral de conversión médica optimizado para búsquedas locales en Google y medición de pacientes. Incorpora un asistente de IA de texto y voz natural en tiempo real disponible 24/7.',
    longDescription:
      'Plataforma digital orientada a pacientes que buscan tratamientos especializados y requieren orientación inmediata sobre procedimientos antes de agendar. Integra posicionamiento orgánico local con atención conversacional por texto y voz 24/7.',
    highlightPhrase:
      'Combina posicionamiento médico local en Google con atención interactiva por voz natural y texto 24/7.',
    keyFeatures: [
      'Sitio web clínico enfocado en claridad médica, confianza y conversión de pacientes',
      'Asistente de IA dual (texto y voz natural) activo 24/7 para resolver dudas clínicas frecuentes',
      'Optimización de SEO local y visibilidad verificada en buscadores',
      'Seguimiento completo de consultas y conversiones de pacientes',
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
    stack: ['Contratos Automáticos', 'Envío WhatsApp y Email', 'Cero Errores', 'Auditoría en Vivo'],
    description:
      'Flujo automatizado para expedición y envío multicanal de documentación legal. Toma los datos del cierre comercial, diligencia contratos dinámicos en segundos, adjunta políticas corporativas y despacha por WhatsApp y correo dejando registro.',
    longDescription:
      'Sistema de automatización legal-operativa creado para suprimir errores de digitación manual y retrasos entre el cierre comercial y la firma del contrato. Centraliza además el histórico contractual auditable en hojas de control.',
    highlightPhrase:
      'De datos del cierre comercial a contrato diligenciado y entregado al cliente en segundos sin errores humanos.',
    keyFeatures: [
      'Captura automática de datos comerciales con llenado instantáneo de plantillas legales sin errores de digitación',
      'Adjuntado automático de políticas corporativas y términos de servicio vigentes en cada expediente',
      'Despacho multicanal simultáneo hacia el WhatsApp y correo electrónico del cliente',
      'Registro centralizado y trazable de cada documento emitido en Google Sheets para auditoría administrativa',
    ],
    folder: '',
    images: [],
  },
  {
    id: 15,
    title: 'Sistema de Respaldo Automático en la Nube para Flujos Críticos',
    client: 'Infraestructura TI · Continuidad Operativa',
    category: 'Automatización',
    url: null,
    stack: ['Respaldo Automático', 'Continuidad Operativa', 'Copias Versionadas', 'Google Drive'],
    description:
      'Sistema automatizado de respaldo continuo para flujos críticos en múltiples servidores. Monitorea y extrae configuraciones de forma programada, empaqueta copias versionadas y las almacena automáticamente en Google Drive.',
    longDescription:
      'Solución de resiliencia y continuidad operativa diseñada para proteger los procesos automatizados de la empresa frente a fallos de servidor o cambios accidentales, garantizando recuperación rápida en minutos.',
    highlightPhrase:
      'Respaldo automático programado multi-servidor para garantizar cero pérdida operativa.',
    keyFeatures: [
      'Sincronización dual que respalda automáticamente todos los flujos activos en múltiples servidores',
      'Empaquetado automático con versionado por fecha y almacenamiento seguro en Google Drive',
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
    stack: ['Live Bookings', 'Admin Dashboard', 'WhatsApp Alerts', 'SEO & Analytics'],
    description:
      'Custom web platform for real-time medical ultrasound equipment rental. Features an admin panel with live stock tracking, interactive availability calendar, automated Google Sheets logging, and instant WhatsApp and email alerts.',
    longDescription:
      'End-to-end digital rental platform built to replace manual spreadsheet scheduling. Validates live inventory per unit before booking confirmation, logs requests automatically, and tracks every acquisition channel.',
    highlightPhrase:
      'Turns manual phone inquiries into validated real-time equipment bookings with full operational traceability.',
    keyFeatures: [
      'Custom web platform backed by a real-time database and automated workflows',
      'Administrative dashboard with stock management and interactive availability calendar',
      'Booking engine with live conflict prevention, Google Sheets sync, and automated WhatsApp/email alerts',
      'Mobile-first responsive interface optimized for doctors booking from smartphones',
      'Full search and conversion tracking setup across Google search and ad channels',
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
    stack: ['24/7 AI Agent', 'Omnichannel', 'CRM Sync', 'Payment Verification'],
    description:
      'Omnichannel AI agent across WhatsApp, Instagram, Facebook, and CRM backed by verified clinical protocols. Processes text, voice notes, and payment receipts with conversational memory, automatic CRM data capture, and instant human handoff.',
    longDescription:
      'Conversational automation system built for specialized clinical intake. Combines verified procedure and fee knowledge with conversational memory summarizing context seamlessly across AI and human staff.',
    highlightPhrase:
      'Operates as a 24/7 digital clinic receptionist that processes voice notes, validates receipts, and populates the CRM.',
    keyFeatures: [
      '24/7 automated omnichannel patient care integrated across WhatsApp, Instagram, Facebook, and central CRM',
      'Multimodal processing of text inquiries, voice notes, and transfer receipt images',
      'Smart conversational memory summarizing history and merging human agent conversations smoothly',
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
    stack: ['Executive Panel', 'Live Metrics', 'Sentiment Analysis', 'Agent Controls'],
    description:
      'Executive web application for live monitoring and governance of conversational AI agents. Displays real-time KPIs (conversations, escalations, response speed), sentiment analysis, and an editable personality/template panel synced live.',
    longDescription:
      'Enterprise control panel built so non-technical operations teams can monitor, audit, and tune AI assistant behavior, tone, and automated templates without touching code.',
    highlightPhrase:
      'Full operational visibility over response speed, customer sentiment, and conversion metrics in real time.',
    keyFeatures: [
      'Live analytics dashboard tracking conversations, message volume, escalations, and average reply speed',
      'Automated customer sentiment analysis across active and resolved threads',
      'Live settings panel to configure AI personality, assistant name, tone of voice, and phrasing rules',
      'Editable automated message templates (confirmations, reminders, and escalation notices) from the UI',
      'Real-time two-way synchronization with live automated customer service operations',
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
    stack: ['Direct Bookings', 'Airbnb & Booking Sync', 'Calendar Panel', 'Local SEO'],
    description:
      'High-speed hospitality web platform featuring two-way real-time calendar synchronization with Airbnb, Booking, and VRBO to eliminate double bookings, plus an admin calendar panel and regional local SEO.',
    longDescription:
      'Custom direct-booking web platform built for private hospitality properties to drive commission-free bookings while keeping external OTA availability strictly synchronized.',
    highlightPhrase:
      'Commission-free direct bookings backed by automated two-way calendar sync across Airbnb, Booking, and VRBO.',
    keyFeatures: [
      'High-conversion, fast-loading visual storefront crafted around large-format photography',
      'Two-way calendar integration with Airbnb, Booking, and VRBO preventing overlapping dates',
      'Private administrative panel for manual date holds, seasonal pricing, and booking oversight',
      'Sub-second mobile load performance and local geographic SEO targeting high-intent travelers',
    ],
    folder: '',
    images: [],
  },
  {
    id: 5,
    title: 'Custom Streetwear E-Commerce & Inventory System',
    client: 'Retail E-Commerce · Urban Apparel',
    category: 'Web',
    url: null,
    stack: ['Custom E-Commerce', 'Inventory Control', 'Payment Checkout', 'Mobile-First'],
    description:
      'Custom online retail store built around dynamic product catalogs, shopping cart and order/payment management, a comprehensive admin portal, and mobile-optimized checkout.',
    longDescription:
      'Proprietary e-commerce platform built for full operational control over catalog variants, stock movement, customer inquiries, and checkout without third-party SaaS transaction fees.',
    highlightPhrase:
      'Scalable custom online storefront with complete ownership of catalog, inventory, and order fulfillment.',
    keyFeatures: [
      'Custom e-commerce platform with centralized inventory and order management',
      'Full shopping cart, order tracking, and integrated payment workflow',
      'Centralized admin panel for product updates, stock control, user accounts, and customer messages',
      'Responsive UI built specifically for frictionless mobile checkout conversions',
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
    stack: ['B2B Portal', 'Wholesale Catalog', 'Volume Quoter', 'National SEO'],
    description:
      'B2B commercial portal for wholesale 4G GPS tracker distribution. Features a technical catalog with 5+ models, wholesale pricing tiers, volume quote builder, and national organic SEO.',
    longDescription:
      'Corporate B2B lead-generation platform built for fleet and hardware distributors. Presents detailed hardware specs clearly so wholesale buyers submit structured volume quote requests immediately.',
    highlightPhrase:
      'Built to dominate national B2B search rankings and qualify wholesale fleet hardware deals automatically.',
    keyFeatures: [
      'Interactive technical catalog showcasing 5+ GPS tracker models, specifications, and wholesale tiers',
      'Structured B2B quote intake routing qualified enterprise leads straight to sales advisors',
      'Sub-second page rendering designed to retain high-intent buyers on mobile and desktop',
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
    stack: ['Direct Bookings', 'OTA Calendar Sync', 'WhatsApp Closing', 'Local SEO'],
    description:
      'Direct-conversion booking site for a private country estate featuring a centralized availability calendar synced across Airbnb, Booking, and VRBO, sub-second loading, and direct WhatsApp confirmation without intermediary fees.',
    longDescription:
      'Bespoke hospitality booking portal built to convert organic search visitors directly without losing 15–20% margin to third-party OTA commissions.',
    highlightPhrase:
      'Zero double-booking conflicts and direct high-ticket reservations flowing straight to property owners.',
    keyFeatures: [
      'Immersive editorial layout tailored to highlight estate amenities and group capacity',
      'Live multi-platform calendar synchronization against Airbnb, Booking, and VRBO',
      'Instant mobile load optimization paired with regional geographic SEO',
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
    stack: ['B2B Prospecting', 'AI Scoring', '7-Day Follow-Up', 'Google Sheets'],
    description:
      'Large-scale automated B2B prospecting system. Discovers target businesses by industry and city, analyzes their websites, scores fit using AI, drafts 3 tailored Instagram and email outreach variants, and runs 7-day automated follow-ups.',
    longDescription:
      'End-to-end outbound automation system replacing manual cold prospect research. Audits each target company website before generating individualized sales messages.',
    highlightPhrase:
      'From niche prospect discovery to 7-day personalized multi-channel outreach running on autopilot.',
    keyFeatures: [
      'Targeted B2B company discovery by industry and city on autopilot',
      'Automated website analysis to understand each prospect’s offer and digital maturity',
      'AI qualification scoring to filter high-fit enterprise leads automatically',
      'Automatic generation of 3 custom message variants per company for Instagram DM and cold email',
      'Scheduled 7-day email sequence and centralized response tracking in Google Sheets',
    ],
    folder: '',
    images: [],
  },
  {
    id: 9,
    title: 'Multimodal AI Ordering & Payment Verification Agent for Restaurant',
    client: 'Food & Beverage · Restaurant Operations',
    category: 'IA',
    url: null,
    stack: ['WhatsApp Orders', 'Voice Note AI', 'Payment Verification', 'Kitchen Dispatch'],
    description:
      'Conversational WhatsApp AI ordering agent connected to a live restaurant menu. Understands voice notes and natural text, generates payment links, validates transfer screenshots automatically, and routes interactive orders to kitchen staff.',
    longDescription:
      'Full ordering automation designed to eliminate phone bottlenecks during dinner rush. Queries real-time menu availability and lets kitchen staff accept or reject orders in one click on Telegram.',
    highlightPhrase:
      'Converts casual voice notes and transfer screenshots into verified kitchen orders in seconds.',
    keyFeatures: [
      'Multimodal order intake understanding voice notes, colloquial expressions, and custom modifiers',
      'Real-time menu queries supporting live stock checks and smart item suggestions',
      'Automated checkout link generation and visual bank transfer receipt validation',
      'Interactive Telegram staff dashboard displaying order summaries, receipts, and Accept/Reject buttons',
      'Instant automated WhatsApp notifications updating the customer on confirmation or payment status',
    ],
    folder: '',
    images: [],
  },
  {
    id: 10,
    title: 'Real-Time Enterprise AI Knowledge Base System',
    client: 'Enterprise Operations · AI Knowledge Base',
    category: 'Automatización',
    url: null,
    stack: ['AI Knowledge Base', 'Google Drive Sync', 'Zero Hallucinations', 'Live Updates'],
    description:
      'Dynamic corporate knowledge system linked to Google Drive. Monitors company folders, processes updated manuals, policies, and pricing sheets, and updates every company AI assistant in seconds.',
    longDescription:
      'Zero-hallucination corporate knowledge pipeline built so company AI assistants always answer from up-to-date SOPs, manuals, and verified pricing sheets.',
    highlightPhrase:
      'Update a single file in Google Drive and every company AI assistant reflects the update in seconds.',
    keyFeatures: [
      'Real-time Google Drive folder watcher triggering automatically on new or edited files',
      'Structured document processing with full source traceability',
      'Contextual comprehension of manuals, policies, and pricing tables for accurate answers',
      'Automatic live updates without requiring technical intervention from your team',
      'Sub-second retrieval shared cleanly across internal and customer-facing AI agents',
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
    stack: ['Fast Digital Menu', '5-Branch Selector', 'WhatsApp Orders', 'Mobile UX'],
    description:
      'Fast, minimalist digital menu and ordering site built for a 5-location restaurant chain. Includes categorized menu pricing, an interactive 5-branch selector, and direct WhatsApp order routing straight to the chosen kitchen branch.',
    longDescription:
      'Commission-free direct ordering web experience built for high mobile conversion, routing customers straight from an instant-loading menu to the exact store fulfilling delivery.',
    highlightPhrase:
      'Instant mobile menu routing structured direct orders to the exact branch without third-party delivery fees.',
    keyFeatures: [
      'Clean, high-contrast mobile UI built for rapid browsing on cellular connections',
      'Complete digital catalog covering burgers, sides, drinks, descriptions, and updated prices',
      'Interactive branch selector widget choosing cleanly across 5 physical restaurant locations',
      'One-tap WhatsApp handoff routing each order directly to the selected branch',
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
    stack: ['24/7 Service', 'Voice Orders', 'Combo Pricing', 'Payment Verification'],
    description:
      'High-volume WhatsApp AI agent built for weekend rush hours. Handles simultaneous voice and text orders 24/7, computes combos and add-ons against a live menu, validates payment receipts automatically, and dispatches tickets to kitchen staff.',
    longDescription:
      'Production ordering engine designed to serve hundreds of concurrent fast-food shoppers with zero queue time, exact pricing math, and automated payment verification.',
    highlightPhrase:
      'Serves concurrent weekend peak demand 24/7 with accurate combo math and AI receipt verification.',
    keyFeatures: [
      '24/7 simultaneous WhatsApp order handling with zero human queue bottlenecks',
      'Accurate transcription and parsing of voice notes, slang, and combo customizations',
      'Live menu calculations for item pricing, toppings, combos, and delivery zones',
      'Automated payment link creation plus instant visual bank transfer screenshot validation',
      'Interactive Telegram kitchen approval buttons triggering real-time customer confirmation messages',
    ],
    folder: '',
    images: [],
  },
  {
    id: 13,
    title: 'Medical Practice Portal with 24/7 Voice & Text AI Assistant',
    client: 'Healthcare · Specialized Medical Practice',
    category: 'Web',
    url: null,
    stack: ['Clinical Portal', 'Voice AI Assistant', 'Local Medical SEO', 'Patient Analytics'],
    description:
      'Conversion-focused clinical website integrated with a 24/7 conversational AI assistant supporting both text chat and realistic natural voice responses. Fully optimized for local medical SEO and patient tracking.',
    longDescription:
      'Patient acquisition portal pairing high-trust medical content and local search visibility with an interactive voice-enabled AI orientation assistant.',
    highlightPhrase:
      'Pairs top local medical search visibility with natural 24/7 voice and text patient guidance.',
    keyFeatures: [
      'Conversion-focused clinical website structured around treatment clarity and patient trust',
      'Integrated 24/7 text and natural voice AI assistant for procedure orientation',
      'Verified local medical SEO and search indexing setup',
      'End-to-end conversion tracking measuring patient inquiry sources',
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
    stack: ['Auto Contracts', 'WhatsApp & Email', 'Zero Typos', 'Live Audit Log'],
    description:
      'End-to-end legal automation workflow that receives deal data, auto-fills custom digital contracts in seconds, attaches corporate policies and terms, dispatches via WhatsApp and email, and logs audit trails in Google Sheets.',
    longDescription:
      'Legal-ops automation built to eliminate manual copy-paste contract preparation and speed up onboarding immediately after commercial approval.',
    highlightPhrase:
      'Turns incoming deal data into signed-ready legal contracts delivered across WhatsApp and email.',
    keyFeatures: [
      'Real-time deal capture populating dynamic legal contract variables with zero typos',
      'Automatic attachment of corporate privacy policies and service terms to every packet',
      'Dual-channel automated delivery straight to the client via WhatsApp and email',
      'Centralized administrative audit ledger recording every issued contract in Google Sheets',
    ],
    folder: '',
    images: [],
  },
  {
    id: 15,
    title: 'Automated Cloud Backup System for Critical Business Workflows',
    client: 'IT Infrastructure · Business Continuity',
    category: 'Automatización',
    url: null,
    stack: ['Auto Backups', 'Business Continuity', 'Versioned Copies', 'Google Drive'],
    description:
      'Automated continuity pipeline monitoring and backing up critical workflows across multiple servers. Packages versioned backups on a fixed schedule and archives them automatically to Google Drive.',
    longDescription:
      'Operational resilience automation safeguarding mission-critical business workflows across multiple environments for rapid point-in-time disaster recovery.',
    highlightPhrase:
      'Scheduled multi-server backup automation ensuring zero operational loss and rapid recovery.',
    keyFeatures: [
      'Dual synchronization backing up all active workflows across separate servers automatically',
      'Automated packaging and secure upload of timestamped snapshots to Google Drive',
      'Hands-free scheduled continuity protection enabling rapid restoration after any server failure',
    ],
    folder: '',
    images: [],
  },
];
