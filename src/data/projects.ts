export interface Project {
  id: number;
  title: string;
  client: string;
  category: 'Web' | 'Automatización' | 'IA';
  url: string | null;
  stack: string[]; // Ahora contiene capacidades y beneficios clave
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
    title: 'Alquiler de Ecógrafos',
    client: 'Alquiler de Ecógrafos',
    category: 'Web',
    url: 'https://alquilerdeecografos.com/',
    stack: ['Alta Disponibilidad', 'Reservas en Tiempo Real', 'Notificaciones Automáticas'],
    description: 'Plataforma para renta de equipos médicos de ultrasonido. Panel administrativo con calendario interactivo, validación inmediata de disponibilidad y alertas multicanal de confirmación.',
    folder: 'alquiler-ecografos',
    images: ['alquiler-ecografos-medicos-plataforma.webp', 'alquiler-ecografos-calendario-reservas-1.webp', 'alquiler-ecografos-panel-administracion-2.webp', 'alquiler-ecografos-formulario-reserva-3.webp', 'alquiler-ecografos-notificaciones-whatsapp-4.webp', 'alquiler-ecografos-dashboard-stock-5.webp', 'alquiler-ecografos-version-movil-6.webp'],
  },
  {
    id: 2,
    title: 'Atención Inteligente Medicina Regenerativa',
    client: 'Clínica Medicina Regenerativa',
    category: 'IA',
    url: null,
    stack: ['Atención 24/7', 'Agendamiento Autónomo', 'Calificación de Pacientes'],
    description: 'Sistema con atención omnicanal que procesa mensajes de texto, audios y comprobantes de pago. Brinda memoria conversacional, agendamiento de citas y derivación médica automática.',
    longDescription: 'Sistema diseñado para automatizar la atención inicial de pacientes en un consultorio médico. Atiende consultas frecuentes, gestiona citas y mantiene el contexto de cada conversación para ofrecer una atención personalizada y eficiente, permitiendo que el personal médico se enfoque en los tratamientos.',
    highlightPhrase: 'Más que responder mensajes, el asistente actúa como un recepcionista digital de la clínica.',
    keyFeatures: [
      'Atiende pacientes automáticamente por múltiples canales',
      'Responde preguntas frecuentes sobre servicios y procedimientos',
      'Brinda información sobre horarios, disponibilidad y costos',
      'Agenda, reprograma o cancela citas automáticamente',
      'Mantiene contexto de conversaciones anteriores',
      'Reduce en un 70% la carga operativa en recepción'
    ],
    folder: 'ecosistema-ia-medicina',
    images: ['ecosistema-ia-medicina-regenerativa-crm.webp', 'ecosistema-ia-medicina-subflow-escalado.webp', 'ecosistema-ia-medicina-seguimiento-descuentos.webp', 'ecosistema-ia-medicina-extraccion-datos-crm.webp'],
  },
  {
    id: 3,
    title: 'Centro de Mando & Analítica',
    client: 'Dashboard Winners',
    category: 'Web',
    url: null,
    stack: ['Métricas en Tiempo Real', 'Control de Conversaciones', 'KPIs Comerciales'],
    description: 'Panel de monitoreo y gestión de interacción con clientes. Métricas en tiempo real con análisis de conversaciones, tiempos de respuesta y supervisión de satisfacción.',
    folder: 'panel-control-agentes-ia',
    images: ['panel-control-agentes-ia-analytics-1.webp', 'panel-control-agentes-ia-sentimientos-2.webp', 'panel-control-agentes-ia-configuracion-3.webp', 'panel-control-agentes-ia-plantillas-4.webp', 'panel-control-agentes-ia-conversaciones-5.webp', 'panel-control-agentes-ia-metricas-6.webp', 'panel-control-agentes-ia-dashboard-7.webp', 'panel-control-agentes-ia-vista-general-1.webp', 'panel-control-agentes-ia-reportes-2.webp', 'panel-control-agentes-ia-gestion-3.webp', 'panel-control-agentes-ia-monitoreo-4.webp'],
  },
  {
    id: 4,
    title: 'La Juana de Cerro Tusa',
    client: 'Finca Vacacional',
    category: 'Web',
    url: 'https://lajuanacerrotusa.com/',
    stack: ['Sincronización de Reservas', 'Diseño Inmersivo', 'SEO Turístico'],
    description: 'Sitio web para finca de descanso con integración de reservas unificada. Fotografía de gran formato, sincronización con plataformas de alojamiento y posicionamiento en Google.',
    folder: 'lajuana-cerro-tusa',
    images: ['lajuana-cerro-tusa-fachada-principal-1.webp', 'lajuana-cerro-tusa-piscina-jardines-2.webp', 'lajuana-cerro-tusa-interior-colonial-3.webp', 'lajuana-cerro-tusa-habitacion-principal-4.webp', 'lajuana-cerro-tusa-vista-panoramica-5.webp', 'lajuana-cerro-tusa-galeria-6.webp', 'lajuana-cerro-tusa-galeria-7.webp', 'lajuana-cerro-tusa-panel-admin-reservas-1.webp', 'lajuana-cerro-tusa-panel-admin-calendario-2.webp'],
  },
  {
    id: 5,
    title: 'Toxxic',
    client: 'Tienda de Ropa Urbana',
    category: 'Web',
    url: 'https://toxxic.vercel.app/',
    stack: ['E-Commerce Rápido', 'Catálogo Dinámico', 'Pasarela de Pagos'],
    description: 'Tienda online de ropa urbana. Catálogo dinámico con carrito optimizado, panel de inventario y experiencia de compra fluida orientada a dispositivos móviles.',
    folder: 'toxxic-tienda-ropa-urbana',
    images: ['toxxic-tienda-ropa-urbana-main.webp', 'toxxic-tienda-catalogo-productos-1.webp', 'toxxic-tienda-carrito-compras-2.webp', 'toxxic-tienda-panel-admin-3.webp', 'toxxic-tienda-version-movil-4.webp'],
  },
  {
    id: 6,
    title: 'Telocalizo MX',
    client: 'Distribuidora GPS Mayorista',
    category: 'Web',
    url: 'https://telocalizo.mx/',
    stack: ['Generación B2B', 'Cotizador al Mayoreo', 'Posicionamiento Google'],
    description: 'Portal comercial B2B para distribución mayorista de GPS. Catálogo interactivo, cotizaciones automáticas en un clic y captación continua de prospectos empresariales.',
    folder: 'telocalizo-rastreadores-gps',
    images: ['telocalizo-rastreadores-gps-mexico-main-1.webp', 'telocalizo-catalogo-gps-rastreadores-2.webp', 'telocalizo-cotizacion-mayoreo-gps-3.webp', 'telocalizo-landing-page-gps-4.webp'],
  },
  {
    id: 7,
    title: 'Villa Grande La Misia',
    client: 'Finca Vacacional',
    category: 'Web',
    url: null,
    stack: ['Experiencia Visual', 'Calendario Centralizado', 'Conversión Directa'],
    description: 'Plataforma para finca campestre en Llanogrande. Calendario de disponibilidad sincronizado, reservas directas sin comisiones intermedias y diseño enfocado en la exclusividad.',
    folder: 'villa-grande-la-misia',
    images: ['villa-grande-la-misia-fachada-principal-1.webp', 'villa-grande-la-misia-piscina-exterior-2.webp', 'villa-grande-la-misia-salon-principal-3.webp', 'villa-grande-la-misia-habitacion-vip-4.webp', 'villa-grande-la-misia-jardines-vista-5.webp', 'villa-grande-la-misia-cocina-comedor-6.webp', 'villa-grande-la-misia-terraza-atardecer-7.webp', 'villa-grande-la-misia-landing-page-8.webp'],
  },
  {
    id: 8,
    title: 'Sistema de Adquisición B2B',
    client: 'Generación de Pipeline Comercial',
    category: 'Automatización',
    url: null,
    stack: ['Prospección en Piloto Automático', 'Contacto Personalizado', 'Reuniones en Agenda'],
    description: 'Motor automatizado de captación comercial. Identificación de empresas objetivo, validación de tomadores de decisiones y envío de mensajes personalizados que agendan reuniones directamente.',
    folder: 'sistema-prospeccion-leads',
    images: ['sistema-prospeccion-leads-automatizado-main.webp', 'sistema-prospeccion-leads-instagram.webp', 'sistema-prospeccion-leads-email.webp'],
  },
  {
    id: 9,
    title: 'Automatización Gastronómica',
    client: 'Cadena de Comidas',
    category: 'IA',
    url: null,
    stack: ['Toma de Pedidos por Audio', 'Confirmación de Pagos', 'Envío Directo a Cocina'],
    description: 'Atención automática de pedidos por chat. Interpreta audios y texto informal, valida comprobantes de transferencia y despacha órdenes sin error humano.',
    longDescription: 'Sistema que automatiza por completo la atención y toma de órdenes. Interpreta lenguaje cotidiano, calcula totales exactos y sincroniza la orden con el equipo de preparación en segundos.',
    highlightPhrase: 'Convierte mensajes casuales de clientes en pedidos confirmados y pagados.',
    keyFeatures: [
      'Atiende clientes automáticamente 24/7 sin esperas',
      'Entiende notas de voz y mensajes informales',
      'Calcula precios, adiciones y combos al instante',
      'Verifica comprobantes de pago de forma inmediata',
      'Despacha la comanda directamente al área de cocina'
    ],
    folder: 'agente-ia-comidas-rapidas',
    images: ['agente-ia-comidas-rapidas-pedidos.webp', 'agente-ia-comidas-rapidas-gestion-telegram.webp'],
  },
  {
    id: 10,
    title: 'Generación Documental y Legal',
    client: 'Legal & Operaciones',
    category: 'Automatización',
    url: null,
    stack: ['Generación en Segundos', 'Cero Errores Manuales', 'Firma y Envío Automático'],
    description: 'Automatización de expedición de contratos y pólizas. Al recibir la solicitud comercial, redacta el documento personalizado y lo despacha de inmediato con sus anexos correspondientes.',
    folder: 'contratos-digitales',
    images: ['generacion-automatica-contratos-digitales.webp'],
  },
];
