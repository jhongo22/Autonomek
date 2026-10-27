'use client';

import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';
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

export default function Navigation() {
  const pathname = usePathname() || '/';
  const isEn = pathname === '/en' || pathname.startsWith('/en/') || pathname === '/us' || pathname.startsWith('/us/');
  const isEsPrefix = pathname === '/es' || pathname.startsWith('/es/');
  const enBase = pathname === '/us' || pathname.startsWith('/us/') ? '/us' : '/en';
  const esBase = isEsPrefix ? '/es' : '';

  const navItems = isEn
    ? [
        { name: 'Overview', href: enBase },
        { name: 'Systems', href: `${enBase}/services` },
        { name: 'Web & SEO', href: `${enBase}/services/high-performance-websites` },
        { name: 'AI Agents', href: `${enBase}/services/ai-agents` },
        { name: 'Automation', href: `${enBase}/services/process-automation` },
        { name: 'Custom Software', href: `${enBase}/services/custom-software` },
        { name: 'Case Studies', href: `${enBase}/projects` },
      ]
    : [
        { name: 'Inicio', href: isEsPrefix ? '/es' : '/' },
        { name: 'Sistemas', href: `${esBase}/servicios` },
        { name: 'Páginas web', href: `${esBase}/servicios/paginas-web-alto-rendimiento` },
        { name: 'Agentes IA', href: `${esBase}/servicios/agentes-inteligencia-artificial` },
        { name: 'Automatización', href: `${esBase}/servicios/automatizacion-de-procesos` },
        { name: 'Software a medida', href: `${esBase}/servicios/software-a-medida` },
        { name: 'Casos de estudio', href: `${esBase}/proyectos` },
      ];

  const targetEsHref = isEn ? (EN_TO_ES_MAP[pathname] || '/es') : pathname;
  const targetEnHref = !isEn ? (ES_TO_EN_MAP[pathname] || '/en') : pathname;

  const ctaText = isEn ? 'Talk on WhatsApp' : 'Hablar por WhatsApp';
  const whatsappHref = isEn
    ? 'https://wa.me/573004435894?text=Hello%20Autonomek%2C%20I%20would%20like%20to%20request%20a%20technical%20diagnosis%20for%20my%20company.'
    : 'https://wa.me/573004435894?text=Hola%20Autonomek%2C%20me%20gustar%C3%ADa%20solicitar%20un%20diagn%C3%B3stico%20t%C3%A9cnico%20para%20mi%20empresa.';

  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 160 && !isOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[150] w-full bg-background/90 backdrop-blur-md border-b border-rule"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 h-16 md:h-[72px] flex items-center justify-between gap-4">
          {/* WORDMARK */}
          <Link
            href={isEn ? enBase : isEsPrefix ? '/es' : '/'}
            onClick={() => setIsOpen(false)}
            aria-label="Autonomek"
            className="flex-shrink-0 flex items-center gap-2 py-2"
          >
            <span className="font-sans font-bold text-base sm:text-lg tracking-tight text-foreground">
              Autonomek
            </span>
          </Link>

          {/* DESKTOP NAVIGATION — Sentence case, untracked, single weight */}
          <nav aria-label={isEn ? 'Primary navigation' : 'Navegación principal'} className="hidden xl:flex items-center">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`px-3.5 py-2 rounded-lg text-sm font-normal transition-colors whitespace-nowrap ${
                        isActive
                          ? 'text-foreground bg-card'
                          : 'text-muted hover:text-foreground hover:bg-surface'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* RIGHT ACTIONS: LANGUAGE SWITCHER + WHATSAPP CTA */}
          <div className="flex items-center gap-3">
            <div
              className="inline-flex items-center rounded-lg bg-surface border border-rule p-0.5 text-xs"
              role="group"
              aria-label={isEn ? 'Language switcher' : 'Selector de idioma'}
            >
              <Link
                href={targetEsHref}
                onClick={() => setIsOpen(false)}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                  !isEn
                    ? 'bg-primary text-primary-ink'
                    : 'text-muted hover:text-foreground'
                }`}
                hrefLang="es"
              >
                es
              </Link>
              <Link
                href={targetEnHref}
                onClick={() => setIsOpen(false)}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                  isEn
                    ? 'bg-primary text-primary-ink'
                    : 'text-muted hover:text-foreground'
                }`}
                hrefLang="en"
              >
                en
              </Link>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center h-10 px-4 rounded-lg bg-primary text-primary-ink font-medium text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              {ctaText}
            </a>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex xl:hidden items-center justify-center w-10 h-10 rounded-lg bg-surface border border-rule text-foreground hover:bg-card transition-colors"
              aria-label={isOpen ? (isEn ? 'Close menu' : 'Cerrar menú') : (isEn ? 'Open menu' : 'Abrir menú')}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background z-[140] flex flex-col justify-between pt-24 pb-24 px-6 xl:hidden overflow-y-auto"
          >
            <nav aria-label={isEn ? 'Mobile navigation' : 'Navegación móvil'} className="w-full max-w-lg mx-auto">
              <ul className="divide-y divide-rule border-y border-rule">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between py-4 text-lg transition-colors ${
                          isActive ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
                        }`}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 flex flex-col gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center h-12 px-6 rounded-lg bg-primary text-primary-ink font-medium text-base hover:opacity-90 transition-opacity"
                >
                  {ctaText}
                </a>
                <div className="flex items-center justify-center gap-4 text-sm text-muted pt-2">
                  <Link href={targetEsHref} onClick={() => setIsOpen(false)} className={!isEn ? 'text-foreground font-medium underline' : 'hover:text-foreground'}>
                    Español (/es)
                  </Link>
                  <Link href={targetEnHref} onClick={() => setIsOpen(false)} className={isEn ? 'text-foreground font-medium underline' : 'hover:text-foreground'}>
                    English (/en)
                  </Link>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
