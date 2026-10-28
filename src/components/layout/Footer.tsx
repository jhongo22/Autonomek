'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname() || '/';
  const isEn = pathname === '/en' || pathname.startsWith('/en/') || pathname === '/us' || pathname.startsWith('/us/');
  const isEsPrefix = pathname === '/es' || pathname.startsWith('/es/');
  const enBase = pathname === '/us' || pathname.startsWith('/us/') ? '/us' : '/en';
  const esBase = isEsPrefix ? '/es' : '';

  const whatsappHref = isEn
    ? 'https://wa.me/573004435894?text=Hello%20Autonomek%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20an%20architect.'
    : 'https://wa.me/573004435894?text=Hola%20Autonomek%2C%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto%20con%20un%20arquitecto.';

  return (
    <footer className="w-full bg-background border-t border-rule text-foreground pt-16 pb-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Top Row: Statement + Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-rule items-end">
          <div className="lg:col-span-8">
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground mb-3">
              {isEn
                ? 'Talk directly with the engineer who builds your system.'
                : 'Habla directamente con el ingeniero que construye tu sistema.'}
            </h2>
            <p className="text-muted text-base max-w-[60ch]">
              {isEn
                ? 'No account executives or multi-step forms. Message us on WhatsApp and receive a technical architecture and closed-price quote.'
                : 'Sin ejecutivos intermediarios ni formularios eternos. Escríbenos por WhatsApp y recibe el diseño de arquitectura con presupuesto cerrado.'}
            </p>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-primary text-primary-ink font-medium text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              {isEn ? 'Start conversation on WhatsApp' : 'Iniciar conversación en WhatsApp'}
            </a>
          </div>
        </div>

        {/* Middle Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-14 border-b border-rule text-sm">
          <div className="lg:col-span-4 space-y-3">
            <Link
              href={isEn ? enBase : isEsPrefix ? '/es' : '/'}
              className="font-semibold text-base text-foreground inline-block"
            >
              Autonomek
            </Link>
            <p className="text-muted leading-relaxed max-w-[36ch]">
              {isEn
                ? 'Software engineering, autonomous WhatsApp AI agents, and n8n workflow orchestration for companies in the US, Spain, Mexico, and Colombia.'
                : 'Ingeniería de software, agentes autónomos de IA en WhatsApp y orquestación de procesos con n8n para empresas en Colombia, México, España y EE. UU.'}
            </p>
            <p className="text-subtle text-xs pt-1">
              Medellín, Colombia — contacto@autonomek.com
            </p>
          </div>

          <div className="lg:col-span-3 space-y-2.5">
            <p className="font-medium text-foreground mb-3">
              {isEn ? 'Engineering systems' : 'Sistemas de ingeniería'}
            </p>
            <ul className="space-y-2 text-muted">
              <li>
                <Link href={isEn ? `${enBase}/services/ai-agents` : `${esBase}/servicios/agentes-inteligencia-artificial`} className="hover:text-foreground transition-colors">
                  {isEn ? '24/7 WhatsApp AI Sales Agents' : 'Vendedor IA en WhatsApp 24/7'}
                </Link>
              </li>
              <li>
                <Link href={isEn ? `${enBase}/services/high-performance-websites` : `${esBase}/servicios/paginas-web-alto-rendimiento`} className="hover:text-foreground transition-colors">
                  {isEn ? 'High-Authority Web & Google/AI SEO' : 'Webs Rápidas & Posicionamiento (Google e IA)'}
                </Link>
              </li>
              <li>
                <Link href={isEn ? `${enBase}/services/process-automation` : `${esBase}/servicios/automatizacion-de-procesos`} className="hover:text-foreground transition-colors">
                  {isEn ? 'Autonomous Process Automation (n8n)' : 'Operación en Piloto Automático (n8n)'}
                </Link>
              </li>
              <li>
                <Link href={isEn ? `${enBase}/services/custom-software` : `${esBase}/servicios/software-a-medida`} className="hover:text-foreground transition-colors">
                  {isEn ? 'Custom Software & Cloud Platforms' : 'Plataformas y Software a Medida'}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-2.5">
            <p className="font-medium text-foreground mb-3">
              {isEn ? 'Navigation' : 'Navegación'}
            </p>
            <ul className="space-y-2 text-muted">
              <li>
                <Link href={isEn ? `${enBase}/projects` : `${esBase}/proyectos`} className="hover:text-foreground transition-colors">
                  {isEn ? 'Production case studies' : 'Casos de estudio en producción'}
                </Link>
              </li>
              <li>
                <Link href={isEn ? `${enBase}/services` : `${esBase}/servicios`} className="hover:text-foreground transition-colors">
                  {isEn ? 'All capabilities' : 'Catálogo de sistemas'}
                </Link>
              </li>
              <li>
                <Link href={isEn ? `${enBase}/legal` : `${esBase}/legal`} className="hover:text-foreground transition-colors">
                  {isEn ? 'Privacy & legal terms' : 'Privacidad y aviso legal'}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-2.5">
            <p className="font-medium text-foreground mb-3">
              {isEn ? 'Editions' : 'Ediciones'}
            </p>
            <ul className="space-y-2 text-muted">
              <li>
                <Link href="/es" hrefLang="es" className="hover:text-foreground transition-colors">
                  Español (/es)
                </Link>
              </li>
              <li>
                <Link href="/en" hrefLang="en" className="hover:text-foreground transition-colors">
                  English (/en)
                </Link>
              </li>
              <li>
                <Link href="/" hrefLang="es-CO" className="hover:text-foreground transition-colors">
                  Colombia (/)
                </Link>
              </li>
              <li>
                <Link href="/mx" hrefLang="es-MX" className="hover:text-foreground transition-colors">
                  México (/mx)
                </Link>
              </li>
              <li>
                <Link href="/us" hrefLang="en-US" className="hover:text-foreground transition-colors">
                  United States (/us)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-subtle">
          <p>© {new Date().getFullYear()} Autonomek Web & IA.</p>
          <p>WhatsApp Directo: +57 300 443 5894</p>
        </div>
      </div>
    </footer>
  );
}
