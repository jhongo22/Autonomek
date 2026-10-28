'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  useReducedMotion,
} from 'framer-motion';
import Link from 'next/link';
import { X, ArrowUpRight, ChevronDown, MessageCircle } from 'lucide-react';
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
        strokeWidth="1.4"
      />
      <path
        d="M4.5 9.6 16 15.9l11.5-6.3M16 15.9v12.6"
        stroke="currentColor"
        strokeWidth="1.1"
        opacity="0.55"
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
  const systemsHref = isEn ? `${enBase}/services` : `${esBase}/servicios`;
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

  const ctaText = isEn ? 'Talk on WhatsApp' : 'Hablar por WhatsApp';
  const whatsappHref = isEn
    ? 'https://wa.me/573004435894?text=Hello%20Autonomek%2C%20I%20would%20like%20to%20request%20a%20technical%20diagnosis%20for%20my%20company.'
    : 'https://wa.me/573004435894?text=Hola%20Autonomek%2C%20me%20gustar%C3%ADa%20solicitar%20un%20diagn%C3%B3stico%20t%C3%A9cnico%20para%20mi%20empresa.';

  const isHomeActive = ['/', '/es', '/mx', '/en', '/us'].includes(pathname);
  const isSystemsActive =
    pathname.includes('/servicios') || pathname.includes('/services');
  const isProjectsActive =
    pathname.includes('/proyectos') || pathname.includes('/projects');

  const primaryNav = [
    {
      name: isEn ? 'Overview' : 'Inicio',
      href: homeHref,
      active: isHomeActive,
      panel: false,
    },
    {
      name: isEn ? 'Systems' : 'Sistemas',
      href: systemsHref,
      active: isSystemsActive,
      panel: true,
    },
    {
      name: isEn ? 'Case studies' : 'Casos',
      href: projectsHref,
      active: isProjectsActive,
      panel: false,
    },
  ];

  const systems = isEn
    ? [
        {
          name: 'WhatsApp AI agents',
          desc: 'Qualification, voice and 24/7 booking',
          metric: '1.1 s',
          note: 'response',
          href: agentsHref,
        },
        {
          name: 'High-performance websites',
          desc: 'Next.js, Core Web Vitals and technical SEO',
          metric: '0.6 s',
          note: 'load',
          href: webHref,
        },
        {
          name: 'Process automation',
          desc: 'n8n, CRM, ERP and billing',
          metric: '420 ms',
          note: 'execution',
          href: automationHref,
        },
        {
          name: 'Custom software',
          desc: 'Cloud platforms and operational dashboards',
          metric: '99.9%',
          note: 'uptime',
          href: softwareHref,
        },
      ]
    : [
        {
          name: 'Agentes IA en WhatsApp',
          desc: 'Calificación, voz y agendamiento 24/7',
          metric: '1.1 s',
          note: 'respuesta',
          href: agentsHref,
        },
        {
          name: 'Web de alto rendimiento',
          desc: 'Next.js, Core Web Vitals y SEO técnico',
          metric: '0.6 s',
          note: 'carga',
          href: webHref,
        },
        {
          name: 'Automatización de procesos',
          desc: 'n8n, CRM, ERP y facturación',
          metric: '420 ms',
          note: 'ejecución',
          href: automationHref,
        },
        {
          name: 'Software a medida',
          desc: 'Plataformas cloud y paneles operativos',
          metric: '99.9%',
          note: 'uptime',
          href: softwareHref,
        },
      ];

  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [systemsOpen, setSystemsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 160 && !isOpen && !systemsOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    setIsOpen(false);
    setSystemsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setSystemsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!systemsOpen) return;
    const handlePointerDown = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setSystemsOpen(false);
      }
    };
    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, [systemsOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const panelTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.24, ease: [0.16, 1, 0.3, 1] };

  const mobileListVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.045,
        delayChildren: reduceMotion ? 0 : 0.04,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.26, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <>
      <motion.header
        ref={headerRef}
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[150] w-full bg-background/85 backdrop-blur-xl border-b border-rule"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 h-16 md:h-[72px] flex items-center justify-between gap-4">
          {/* WORDMARK */}
          <Link
            href={homeHref}
            onClick={() => setIsOpen(false)}
            aria-label="Autonomek"
            className="group flex-shrink-0 flex items-center gap-2.5 py-2"
          >
            <CubeMark className="h-7 w-7 text-primary transition-transform duration-500 group-hover:rotate-[12deg]" />
            <span className="flex flex-col leading-none">
              <span className="font-brand text-lg font-bold tracking-tight text-foreground">
                Autonomek
              </span>
              <span className="hidden xl:block text-[10px] text-muted mt-1.5">
                {isEn ? 'Autonomous systems engineering' : 'Ingeniería de sistemas autónomos'}
              </span>
            </span>
          </Link>

          {/* DESKTOP INDEX */}
          <nav
            aria-label={isEn ? 'Primary navigation' : 'Navegación principal'}
            className="hidden xl:flex items-stretch self-stretch ml-6"
          >
            {primaryNav.map((item) => {
              if (item.panel) {
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setSystemsOpen((open) => !open)}
                    aria-expanded={systemsOpen}
                    aria-controls="systems-panel"
                    className={`relative flex items-center gap-1.5 px-4 text-[15px] font-medium transition-colors ${
                      item.active || systemsOpen
                        ? 'text-foreground'
                        : 'text-muted hover:text-foreground'
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        systemsOpen ? 'rotate-180' : ''
                      }`}
                    />
                    {item.active && (
                      <span className="absolute inset-x-4 bottom-0 h-0.5 bg-primary" />
                    )}
                  </button>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  className={`relative flex items-center px-4 text-[15px] font-medium transition-colors ${
                    item.active
                      ? 'text-foreground'
                      : 'text-muted hover:text-foreground'
                  }`}
                >
                  {item.name}
                  {item.active && (
                    <span className="absolute inset-x-4 bottom-0 h-0.5 bg-primary" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: LOCALE, DIAGNOSIS, MOBILE INDEX */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              role="group"
              aria-label={isEn ? 'Language switcher' : 'Selector de idioma'}
              className="hidden md:inline-flex items-center rounded-lg bg-surface border border-rule p-0.5 text-xs"
            >
              <Link
                href={targetEsHref}
                hrefLang="es"
                onClick={() => setIsOpen(false)}
                aria-current={!isEn ? 'true' : undefined}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                  !isEn
                    ? 'bg-primary text-primary-ink'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                es
              </Link>
              <Link
                href={targetEnHref}
                hrefLang="en"
                onClick={() => setIsOpen(false)}
                aria-current={isEn ? 'true' : undefined}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                  isEn
                    ? 'bg-primary text-primary-ink'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                en
              </Link>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center justify-center h-10 px-4 rounded-lg bg-primary text-primary-ink font-medium text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              {ctaText}
            </a>

            <button
              type="button"
              onClick={() => {
                setIsOpen(!isOpen);
                setSystemsOpen(false);
              }}
              className="flex xl:hidden h-10 items-center gap-2 border border-rule bg-surface px-3 text-xs font-medium text-foreground transition-colors hover:border-rule-strong"
              aria-label={
                isOpen
                  ? isEn
                    ? 'Close menu'
                    : 'Cerrar menú'
                  : isEn
                  ? 'Open menu'
                  : 'Abrir menú'
              }
              aria-expanded={isOpen}
              aria-controls="mobile-index"
            >
              {isOpen ? (
                <X size={16} />
              ) : (
                <span className="grid h-3.5 w-3.5 grid-cols-2 gap-[2px]" aria-hidden="true">
                  <span className="bg-current" />
                  <span className="bg-current" />
                  <span className="bg-current" />
                  <span className="bg-current" />
                </span>
              )}
              <span>{isOpen ? (isEn ? 'Close' : 'Cerrar') : isEn ? 'Index' : 'Índice'}</span>
            </button>
          </div>
        </div>

        {/* DESKTOP SYSTEMS PANEL */}
        <AnimatePresence>
          {systemsOpen && (
            <motion.div
              id="systems-panel"
              initial={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
              transition={panelTransition}
              className="absolute inset-x-0 top-full border-b border-rule bg-surface shadow-[0_28px_70px_rgba(0,0,0,0.5)]"
            >
              <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-8 grid grid-cols-12 gap-10">
                <div className="col-span-4 flex flex-col justify-between gap-8 border-r border-rule pr-8">
                  <div className="space-y-3">
                    <h2 className="font-brand text-2xl font-semibold tracking-tight text-foreground">
                      {isEn ? 'Systems index' : 'Índice de sistemas'}
                    </h2>
                    <p className="text-sm text-muted leading-relaxed max-w-[36ch]">
                      {isEn
                        ? 'Four engineering lines that replace manual work with systems that run on their own.'
                        : 'Cuatro líneas de ingeniería que sustituyen trabajo manual por sistemas que operan solos.'}
                    </p>
                  </div>
                  <Link
                    href={systemsHref}
                    onClick={() => setSystemsOpen(false)}
                    className="inline-flex w-fit items-center gap-2 border-b border-primary/40 pb-1 text-sm font-medium text-primary transition-colors hover:border-primary"
                  >
                    {isEn ? 'View the full index' : 'Ver el índice completo'}
                    <ArrowUpRight size={14} />
                  </Link>
                </div>

                <div className="col-span-8">
                  <ul className="border-t border-rule">
                    {systems.map((system) => (
                      <li key={system.name}>
                        <Link
                          href={system.href}
                          onClick={() => setSystemsOpen(false)}
                          className="group -mx-3 grid grid-cols-[84px_1fr_auto] items-center gap-4 border-b border-rule px-3 py-3.5 transition-colors hover:bg-card/40"
                        >
                          <div>
                            <p className="font-brand text-base font-semibold text-primary tabular-nums leading-none">
                              {system.metric}
                            </p>
                            <p className="mt-1 text-[10px] text-subtle">{system.note}</p>
                          </div>
                          <div className="min-w-0">
                            <p className="text-[15px] font-medium text-foreground transition-colors group-hover:text-primary">
                              {system.name}
                            </p>
                            <p className="mt-0.5 truncate text-xs text-muted">{system.desc}</p>
                          </div>
                          <ArrowUpRight
                            size={16}
                            className="text-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between gap-4 pt-4">
                    <span className="text-[11px] text-muted">
                      {isEn ? 'Technical diagnosis at no cost' : 'Diagnóstico técnico sin costo'}
                    </span>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary transition-colors hover:text-foreground"
                    >
                      {isEn ? 'Open WhatsApp' : 'Abrir WhatsApp'}
                      <MessageCircle size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* MOBILE INDEX */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-index"
            role="dialog"
            aria-modal="true"
            aria-label={isEn ? 'Site index' : 'Índice del sitio'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="fixed inset-x-0 bottom-0 top-16 md:top-[72px] z-[140] xl:hidden overflow-y-auto bg-background"
          >
            <div className="flex min-h-full flex-col">
              <motion.nav
                aria-label={isEn ? 'Mobile navigation' : 'Navegación móvil'}
                variants={mobileListVariants}
                initial="hidden"
                animate="show"
                className="flex-1 px-5 sm:px-8 py-8 w-full max-w-2xl mx-auto"
              >
                <ul className="border-y border-rule">
                  {primaryNav.map((item) => (
                    <motion.li key={item.name} variants={mobileItemVariants}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        aria-current={item.active ? 'page' : undefined}
                        className="group flex items-center justify-between border-b border-rule py-4 last:border-b-0"
                      >
                        <span
                          className={`font-brand text-2xl font-semibold tracking-tight transition-colors ${
                            item.active
                              ? 'text-primary'
                              : 'text-foreground group-hover:text-primary'
                          }`}
                        >
                          {item.name}
                        </span>
                        {item.active ? (
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        ) : (
                          <ArrowUpRight
                            size={18}
                            className="text-subtle transition-colors group-hover:text-primary"
                          />
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <motion.div variants={mobileItemVariants} className="mt-10">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h2 className="font-brand text-base font-semibold text-foreground">
                      {isEn ? 'Engineering lines' : 'Líneas de ingeniería'}
                    </h2>
                    <Link
                      href={systemsHref}
                      onClick={() => setIsOpen(false)}
                      className="border-b border-primary/40 pb-0.5 text-xs font-medium text-primary"
                    >
                      {isEn ? 'View all' : 'Ver todas'}
                    </Link>
                  </div>
                  <ul className="border-t border-rule">
                    {systems.map((system) => (
                      <motion.li key={system.name} variants={mobileItemVariants}>
                        <Link
                          href={system.href}
                          onClick={() => setIsOpen(false)}
                          className="group grid grid-cols-[56px_1fr_auto] items-center gap-3 border-b border-rule py-3.5"
                        >
                          <div>
                            <p className="font-brand text-sm font-semibold text-primary tabular-nums leading-none">
                              {system.metric}
                            </p>
                            <p className="mt-1 text-[10px] text-subtle">{system.note}</p>
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                              {system.name}
                            </p>
                            <p className="mt-0.5 text-[11px] text-muted leading-snug">
                              {system.desc}
                            </p>
                          </div>
                          <ArrowUpRight size={15} className="text-subtle" />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: reduceMotion ? 0 : 0.16, duration: reduceMotion ? 0 : 0.2 }}
                className="border-t border-rule bg-surface px-5 sm:px-8 py-5"
              >
                <div className="w-full max-w-2xl mx-auto space-y-4">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-primary px-6 text-base font-medium text-primary-ink transition-opacity hover:opacity-90"
                  >
                    {ctaText}
                  </a>
                  <div className="flex items-center justify-between gap-4">
                    <div
                      role="group"
                      aria-label={isEn ? 'Language switcher' : 'Selector de idioma'}
                      className="inline-flex items-center rounded-lg bg-background border border-rule p-0.5 text-xs"
                    >
                      <Link
                        href={targetEsHref}
                        hrefLang="es"
                        onClick={() => setIsOpen(false)}
                        className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                          !isEn
                            ? 'bg-primary text-primary-ink'
                            : 'text-muted hover:text-foreground'
                        }`}
                      >
                        es
                      </Link>
                      <Link
                        href={targetEnHref}
                        hrefLang="en"
                        onClick={() => setIsOpen(false)}
                        className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                          isEn
                            ? 'bg-primary text-primary-ink'
                            : 'text-muted hover:text-foreground'
                        }`}
                      >
                        en
                      </Link>
                    </div>
                    <span className="flex items-center gap-2 text-[11px] text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {isEn ? 'Available for new projects' : 'Disponible para nuevos proyectos'}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
