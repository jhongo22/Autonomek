'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname() || '/';
  const isEn =
    pathname === '/en' ||
    pathname.startsWith('/en/') ||
    pathname === '/us' ||
    pathname.startsWith('/us/');
  const isEsPrefix = pathname === '/es' || pathname.startsWith('/es/');
  const enBase = pathname === '/us' || pathname.startsWith('/us/') ? '/us' : '/en';
  const esBase = isEsPrefix ? '/es' : '';
  const homeHref = isEn ? enBase : isEsPrefix ? '/es' : '/';

  return (
    <footer className="w-full bg-background border-t border-rule text-foreground pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-rule text-sm">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href={homeHref} className="inline-flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight text-foreground">
                AUTONOMEK
              </span>
              <span className="mt-1 text-[9px] font-medium tracking-[0.28em] text-primary uppercase">
                {isEn ? 'SOFTWARE & AI' : 'SOFTWARE & IA'}
              </span>
            </Link>
            <p className="text-muted leading-relaxed max-w-[38ch]">
              {isEn
                ? 'We design and build custom software, websites, and WhatsApp AI agents to organize your operations and grow your business. Solutions your team actually uses.'
                : 'Diseñamos y desarrollamos software, sitios web y agentes de IA a medida para ordenar tu operación y hacer crecer tu negocio. Soluciones que tu equipo realmente usa.'}
            </p>
            <div className="space-y-1 text-muted pt-1">
              <p>
                <a
                  href="mailto:contacto@autonomek.com"
                  className="hover:text-foreground transition-colors"
                >
                  contacto@autonomek.com
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/573004435894"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  +57 300 443 5894
                </a>
              </p>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-semibold text-foreground">
              {isEn ? 'Services' : 'Servicios'}
            </p>
            <ul className="space-y-2.5 text-muted">
              <li>
                <Link
                  href={
                    isEn
                      ? `${enBase}/services/ai-agents`
                      : `${esBase}/servicios/agentes-inteligencia-artificial`
                  }
                  className="hover:text-foreground transition-colors"
                >
                  {isEn ? 'WhatsApp AI Agents' : 'Agentes de IA en WhatsApp'}
                </Link>
              </li>
              <li>
                <Link
                  href={
                    isEn
                      ? `${enBase}/services/high-performance-websites`
                      : `${esBase}/servicios/paginas-web-alto-rendimiento`
                  }
                  className="hover:text-foreground transition-colors"
                >
                  {isEn ? 'Websites & SEO' : 'Sitios web'}
                </Link>
              </li>
              <li>
                <Link
                  href={
                    isEn
                      ? `${enBase}/services/process-automation`
                      : `${esBase}/servicios/automatizacion-de-procesos`
                  }
                  className="hover:text-foreground transition-colors"
                >
                  {isEn ? 'Process Automation' : 'Automatizaciones'}
                </Link>
              </li>
              <li>
                <Link
                  href={
                    isEn
                      ? `${enBase}/services/custom-software`
                      : `${esBase}/servicios/software-a-medida`
                  }
                  className="hover:text-foreground transition-colors"
                >
                  {isEn ? 'Custom Software' : 'Software a medida'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-semibold text-foreground">Autonomek</p>
            <ul className="space-y-2.5 text-muted">
              <li>
                <Link
                  href={`${homeHref}#flujos`}
                  className="hover:text-foreground transition-colors"
                >
                  {isEn ? 'Automated workflows' : 'Flujos automáticos'}
                </Link>
              </li>
              <li>
                <Link
                  href={`${homeHref}#proceso`}
                  className="hover:text-foreground transition-colors"
                >
                  {isEn ? 'How we work' : 'Cómo trabajamos'}
                </Link>
              </li>
              <li>
                <Link
                  href={isEn ? `${enBase}/projects` : `${esBase}/proyectos`}
                  className="hover:text-foreground transition-colors"
                >
                  {isEn ? 'Real projects' : 'Proyectos realizados'}
                </Link>
              </li>
              <li>
                <Link
                  href={`${homeHref}#preguntas`}
                  className="hover:text-foreground transition-colors"
                >
                  {isEn ? 'FAQ' : 'Preguntas frecuentes'}
                </Link>
              </li>
              <li>
                <Link
                  href={`${homeHref}#contacto`}
                  className="hover:text-foreground transition-colors"
                >
                  {isEn ? 'Contact us' : 'Contáctanos'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Editions Column */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-semibold text-foreground">
              {isEn ? 'Legal & Editions' : 'Legal y regiones'}
            </p>
            <ul className="space-y-2.5 text-muted">
              <li>
                <Link
                  href={isEn ? `${enBase}/legal` : `${esBase}/legal`}
                  className="hover:text-foreground transition-colors"
                >
                  {isEn ? 'Privacy & terms' : 'Política de privacidad'}
                </Link>
              </li>
              <li>
                <Link href="/" hrefLang="es-CO" className="hover:text-foreground transition-colors">
                  Colombia (ES)
                </Link>
              </li>
              <li>
                <Link href="/mx" hrefLang="es-MX" className="hover:text-foreground transition-colors">
                  México (ES)
                </Link>
              </li>
              <li>
                <Link href="/es" hrefLang="es-ES" className="hover:text-foreground transition-colors">
                  España (ES)
                </Link>
              </li>
              <li>
                <Link href="/us" hrefLang="en-US" className="hover:text-foreground transition-colors">
                  United States (EN)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-subtle">
          <p>
            © {new Date().getFullYear()} Autonomek.{' '}
            {isEn ? 'All rights reserved.' : 'Todos los derechos reservados.'}
          </p>
          <p className="text-muted font-medium">
            {isEn ? 'Make the complex simple.' : 'Haz simple lo complejo.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
