import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aviso Legal, Privacidad y Cookies | Autonomek',
  description: 'Términos legales, política de privacidad y uso de cookies de Autonomek Web & IA.',
  alternates: {
    canonical: 'https://www.autonomek.com/legal',
    languages: {
      'es': 'https://www.autonomek.com/es/legal',
      'es-CO': 'https://www.autonomek.com/legal',
      'en': 'https://www.autonomek.com/en/legal',
      'en-US': 'https://www.autonomek.com/us/legal',
      'x-default': 'https://www.autonomek.com/legal',
    },
  },
};

const sections = [
  {
    id: 'privacidad',
    title: 'Política de privacidad',
    content: `
      En AUTONOMEK WEB & IA, tratamos tus datos personales con total transparencia y seguridad, cumpliendo con la Ley 1581 de 2012 (Colombia) y el Reglamento General de Protección de Datos (RGPD) de la Unión Europea.

      Recopilamos información como nombre, correo electrónico y número de teléfono cuando nos contactas a través de WhatsApp o nuestro asistente en vivo. Estos datos son utilizados exclusivamente para:

      - Responder a tus solicitudes de información y cotizaciones técnicas.
      - Prestarte nuestros servicios de desarrollo web, agentes IA y automatización B2B.
      - Enviarte comunicaciones relacionadas con tu proyecto (facturación, soporte, actualizaciones).

      No compartimos tus datos personales con terceros sin tu consentimiento explícito, salvo obligación legal. Tus datos se almacenan en servidores seguros con acceso restringido.

      Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición escribiéndonos a contacto@autonomek.com.
    `,
  },
  {
    id: 'terminos',
    title: 'Términos y condiciones',
    content: `
      Al contratar los servicios de AUTONOMEK WEB & IA, aceptas los siguientes términos:

      1. Alcance del servicio: Cada proyecto se define en una propuesta escrita con alcance, entregables, plazos y costos acordados mutuamente antes del inicio.

      2. Propiedad intelectual: Una vez pagado en su totalidad, el código fuente y los activos digitales desarrollados son propiedad del cliente. AUTONOMEK se reserva el derecho de mostrar el trabajo en su portafolio corporativo.

      3. Pagos: Se requiere un anticipo del 50% para iniciar los proyectos. El 50% restante se paga contra entrega. Los planes de mantenimiento se facturan mensualmente.

      4. Confidencialidad: Toda la información compartida durante el desarrollo del proyecto se mantiene estrictamente confidencial bajo acuerdos NDA.

      5. Soporte: El soporte técnico incluido cubre fallos del sistema desarrollado. No incluye modificaciones de alcance no contempladas en la propuesta inicial.
    `,
  },
  {
    id: 'cookies',
    title: 'Política de cookies',
    content: `
      Este sitio web utiliza cookies propias y de terceros para mejorar tu experiencia de navegación y analizar el tráfico.

      Cookies utilizadas:

      - Google Analytics (GA4): Utilizamos la cookie _ga para analizar cómo los usuarios interactúan con el sitio, lo que nos permite mejorar continuamente. Es una cookie de análisis anónima.

      - Cookies técnicas: Necesarias para el funcionamiento básico, preferencia de idioma y seguridad del sitio.

      Puedes configurar tu navegador para rechazar todas las cookies o indicar cuándo se envía una. Al continuar navegando, aceptas el uso de estas cookies.
    `,
  },
];

export default function LegalPage() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground pt-28 md:pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="mb-10">
          <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors">
            Volver al inicio
          </Link>
        </div>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4 text-foreground">
          Marco legal y privacidad
        </h1>
        <p className="text-muted text-base mb-14 max-w-[60ch]">
          Información legal, política de privacidad y términos corporativos de uso de Autonomek Web & IA.
        </p>

        <div className="divide-y divide-rule border-y border-rule">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="py-12">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                {section.title}
              </h2>
              <div className="text-muted text-sm sm:text-base leading-relaxed space-y-4">
                {section.content
                  .split('\n')
                  .filter(Boolean)
                  .map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
