'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

const ES_TO_EN_MAP: Record<string, string> = {
  '/': '/en',
  '/es': '/en',
  '/mx': '/en',
  '/servicios': '/en/services',
  '/es/servicios': '/en/services',
  '/servicios/paginas-web-alto-rendimiento': '/en/services/high-performance-websites',
  '/es/servicios/paginas-web-alto-rendimiento': '/en/services/high-performance-websites',
  '/servicios/agentes-inteligencia-artificial': '/en/services/ai-agents',
  '/es/servicios/agentes-inteligencia-artificial': '/en/services/ai-agents',
  '/servicios/automatizacion-de-procesos': '/en/services/process-automation',
  '/es/servicios/automatizacion-de-procesos': '/en/services/process-automation',
  '/servicios/software-a-medida': '/en/services/custom-software',
  '/es/servicios/software-a-medida': '/en/services/custom-software',
  '/proyectos': '/en/projects',
  '/es/proyectos': '/en/projects',
  '/legal': '/en/legal',
  '/es/legal': '/en/legal',
  '/start': '/en/start',
  '/es/start': '/en/start',
};

const EN_TO_ES_MAP: Record<string, string> = {
  '/en': '/es',
  '/us': '/es',
  '/en/services': '/es/servicios',
  '/us/services': '/es/servicios',
  '/en/services/high-performance-websites': '/es/servicios/paginas-web-alto-rendimiento',
  '/us/services/high-performance-websites': '/es/servicios/paginas-web-alto-rendimiento',
  '/en/services/ai-agents': '/es/servicios/agentes-inteligencia-artificial',
  '/us/services/ai-agents': '/es/servicios/agentes-inteligencia-artificial',
  '/en/services/process-automation': '/es/servicios/automatizacion-de-procesos',
  '/us/services/process-automation': '/es/servicios/automatizacion-de-procesos',
  '/en/services/custom-software': '/es/servicios/software-a-medida',
  '/us/services/custom-software': '/es/servicios/software-a-medida',
  '/en/projects': '/es/proyectos',
  '/us/projects': '/es/proyectos',
  '/en/legal': '/es/legal',
  '/us/legal': '/es/legal',
  '/en/start': '/es/start',
  '/us/start': '/es/start',
};

function CubeMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path
        d="M16 3.5 27.5 9.6v12.8L16 28.5 4.5 22.4V9.6L16 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4.5 9.6 16 15.9l11.5-6.3M16 15.9v12.6"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.6"
      />
      <circle cx="16" cy="15.9" r="2.2" fill="currentColor" />
    </svg>
  );
}

export default function Navigation() {
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
  const servicesPageHref = isEn ? `${enBase}/services` : `${esBase}/servicios`;
  const projectsHref = isEn ? `${enBase}/projects` : `${esBase}/proyectos`;
  const agentsHref = isEn
    ? `${enBase}/services/ai-agents`
    : `${esBase}/servicios/agentes-inteligencia-artificial`;
  const webHref = isEn
    ? `${enBase}/services/high-performance-websites`
    : `${esBase}/servicios/paginas-web-alto-rendimiento`;
  const automationHref = isEn
    ? `${enBase}/services/process-automation`
    : `${esBase}/servicios/automatizacion-de-procesos`;
  const softwareHref = isEn
    ? `${enBase}/services/custom-software`
    : `${esBase}/servicios/software-a-medida`;

  const targetEsHref = isEn ? EN_TO_ES_MAP[pathname] || '/es' : pathname;
  const targetEnHref = !isEn ? ES_TO_EN_MAP[pathname] || '/en' : pathname;

  const whatsappHref = isEn
    ? 'https://wa.me/573004435894?text=Hello%20Autonomek%2C%20I%20would%20like%20to%20talk%20about%20a%20project%20for%20my%20business.'
    : 'https://wa.me/573004435894?text=Hola%20Autonomek%2C%20quiero%20conversar%20sobre%20un%20proyecto%20para%20mi%20empresa.';

  const navItems = [
    { name: isEn ? 'Home' : 'Inicio', href: `${homeHref}#inicio` },
    { name: isEn ? 'Services' : 'Servicios', href: `${homeHref}#servicios`, hasDropdown: true },
    { name: isEn ? 'Workflows' : 'Flujos', href: `${homeHref}#flujos` },
    { name: isEn ? 'Projects' : 'Proyectos', href: projectsHref },
    { name: isEn ? 'Process' : 'Proceso', href: `${homeHref}#proceso` },
    { name: isEn ? 'FAQ' : 'Preguntas', href: `${homeHref}#preguntas` },
  ];

  const serviceLinks = isEn
    ? [
        {
          name: 'WhatsApp AI Agents 24/7',
          desc: 'Automatic customer service, quotes, and calendar booking',
          href: agentsHref,
        },
        {
          name: 'Websites & SEO',
          desc: 'Fast, clear websites built to convert and rank on Google & AI',
          href: webHref,
        },
        {
          name: 'Process Automation',
          desc: 'Connect your tools and eliminate repetitive manual tasks',
          href: automationHref,
        },
        {
          name: 'Custom Software',
          desc: 'Platforms and control panels tailored to how your team works',
          href: softwareHref,
        },
      ]
    : [
        {
          name: 'Agentes de IA en WhatsApp',
          desc: 'Atención, cotizaciones y agendamiento de citas 24/7',
          href: agentsHref,
        },
        {
          name: 'Sitios web y SEO',
          desc: 'Páginas rápidas, claras y listas para posicionar en Google e IA',
          href: webHref,
        },
        {
          name: 'Automatización de procesos',
          desc: 'Conectamos tus herramientas para eliminar tareas manuales',
          href: automationHref,
        },
        {
          name: 'Software a medida',
          desc: 'Plataformas y paneles construidos alrededor de tu operación',
          href: softwareHref,
        },
      ];

  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-[150] bg-background/85 backdrop-blur-xl border-b border-rule transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link
          href={homeHref}
          onClick={() => setIsOpen(false)}
          aria-label="Autonomek, ir al inicio"
          className="inline-flex items-center gap-2.5 shrink-0"
        >
          <CubeMark className="h-8 w-8 text-primary" />
          <span className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-foreground">
              Autonomek
            </span>
            <span className="mt-1 text-[10px] font-medium tracking-wider text-primary uppercase">
              {isEn ? 'Web · AI · Software' : 'Web · IA · Software'}
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label={isEn ? 'Primary navigation' : 'Navegación principal'}
          className="hidden lg:flex items-center gap-6 xl:gap-8"
        >
          {navItems.map((item) => {
            if (item.hasDropdown) {
              return (
                <div
                  key={item.name}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="flex items-center gap-1">
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-muted hover:text-foreground transition-colors py-2"
                    >
                      {item.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setServicesOpen((prev) => !prev)}
                      aria-label={isEn ? 'Toggle services menu' : 'Ver menú de servicios'}
                      aria-expanded={servicesOpen}
                      className="p-1 text-muted hover:text-foreground transition-colors"
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          servicesOpen ? 'rotate-180 text-primary' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {servicesOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[340px]">
                      <div className="rounded-2xl border border-rule bg-surface p-3 shadow-2xl shadow-black/50 space-y-1">
                        {serviceLinks.map((srv) => (
                          <Link
                            key={srv.href}
                            href={srv.href}
                            onClick={() => setServicesOpen(false)}
                            className="group flex items-start justify-between gap-3 rounded-xl p-3 hover:bg-card transition-colors"
                          >
                            <div>
                              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                {srv.name}
                              </p>
                              <p className="text-xs text-muted mt-0.5 leading-snug">{srv.desc}</p>
                            </div>
                            <ArrowUpRight
                              size={15}
                              className="text-subtle group-hover:text-primary shrink-0 mt-0.5"
                            />
                          </Link>
                        ))}
                        <div className="pt-2 mt-1 border-t border-rule px-3 pb-1 flex items-center justify-between">
                          <Link
                            href={servicesPageHref}
                            onClick={() => setServicesOpen(false)}
                            className="text-xs font-medium text-primary hover:underline"
                          >
                            {isEn ? 'View all services →' : 'Ver todos los servicios →'}
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <div
            role="group"
            aria-label={isEn ? 'Language switcher' : 'Selector de idioma'}
            className="hidden sm:inline-flex items-center rounded-full bg-surface border border-rule p-0.5 text-xs"
          >
            <Link
              href={targetEsHref}
              hrefLang="es"
              onClick={() => setIsOpen(false)}
              className={`px-2.5 py-1 rounded-full font-medium transition-colors ${
                !isEn ? 'bg-primary text-primary-ink' : 'text-muted hover:text-foreground'
              }`}
            >
              ES
            </Link>
            <Link
              href={targetEnHref}
              hrefLang="en"
              onClick={() => setIsOpen(false)}
              className={`px-2.5 py-1 rounded-full font-medium transition-colors ${
                isEn ? 'bg-primary text-primary-ink' : 'text-muted hover:text-foreground'
              }`}
            >
              EN
            </Link>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-primary text-primary-ink px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            {isEn ? 'Contact us' : 'Contáctanos'}
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex lg:hidden h-11 w-11 items-center justify-center rounded-xl border border-rule bg-surface text-foreground"
            aria-expanded={isOpen}
            aria-controls="menu-movil"
            aria-label={
              isOpen
                ? isEn
                  ? 'Close menu'
                  : 'Cerrar menú'
                : isEn
                ? 'Open menu'
                : 'Abrir menú'
            }
          >
            {isOpen ? (
              <X size={20} />
            ) : (
              <span className="relative block h-4 w-5">
                <span className="absolute left-0 top-0.5 h-0.5 w-5 bg-current" />
                <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-current" />
                <span className="absolute left-0 bottom-0.5 h-0.5 w-5 bg-current" />
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="menu-movil"
          className="fixed inset-x-0 top-16 md:top-20 bottom-0 z-[140] bg-background lg:hidden overflow-y-auto border-t border-rule"
        >
          <div className="px-6 py-8 flex flex-col justify-between min-h-full space-y-8">
            <nav className="space-y-6">
              <ul className="space-y-3 border-b border-rule pb-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-2xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                  {isEn ? 'Our Services' : 'Nuestros Servicios'}
                </p>
                <ul className="grid gap-2.5">
                  {serviceLinks.map((srv) => (
                    <li key={srv.href}>
                      <Link
                        href={srv.href}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-xl border border-rule bg-surface p-3.5 hover:border-primary transition-colors"
                      >
                        <p className="text-sm font-medium text-foreground">{srv.name}</p>
                        <p className="text-xs text-muted mt-0.5">{srv.desc}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            <div className="space-y-4 pt-4 border-t border-rule">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-primary text-primary-ink py-3.5 px-6 text-base font-semibold"
              >
                {isEn ? 'Contact us on WhatsApp' : 'Contáctanos por WhatsApp'}
              </a>

              <div className="flex items-center justify-between">
                <div className="inline-flex items-center rounded-full bg-surface border border-rule p-0.5 text-xs">
                  <Link
                    href={targetEsHref}
                    hrefLang="es"
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-1 rounded-full font-medium ${
                      !isEn ? 'bg-primary text-primary-ink' : 'text-muted'
                    }`}
                  >
                    Español
                  </Link>
                  <Link
                    href={targetEnHref}
                    hrefLang="en"
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-1 rounded-full font-medium ${
                      isEn ? 'bg-primary text-primary-ink' : 'text-muted'
                    }`}
                  >
                    English
                  </Link>
                </div>
                <span className="text-xs text-muted">WhatsApp: +57 300 443 5894</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
