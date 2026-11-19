'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ShieldCheck,
  Scale,
  Lock,
  ArrowUpRight,
  Mail,
  Phone,
  Instagram,
  Globe2,
  Users2,
  CheckCircle2,
} from 'lucide-react';
import { AutonomekLockup } from '../brand/AutonomekLogo';
import { BLOG_POSTS } from '@/data/blog';

export default function Footer() {
  const pathname = usePathname() || '/';
  const isEn =
    pathname === '/en' ||
    pathname.startsWith('/en/') ||
    pathname === '/us' ||
    pathname.startsWith('/us/');
  const prefix = isEn ? '/en' : '';
  const homeHref = isEn ? '/en' : '/';

  const termsHref = isEn ? '/en/terms' : '/terminos';
  const privacyHref = isEn ? '/en/privacy' : '/privacidad';
  const aboutHref = isEn ? '/en/about' : '/nosotros';
  const legalHubHref = `${prefix}/legal`;
  const blogHref = `${prefix}/blog`;
  const startHref = `${prefix}/start`;
  const servicesHref = isEn ? '/en/services' : '/servicios';
  const projectsHref = isEn ? '/en/projects' : '/proyectos';

  return (
    <footer className="w-full bg-background border-t border-rule text-foreground pt-16 pb-20 selection:bg-primary selection:text-primary-ink">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Main Grid: 5 Columns for balanced, comprehensive hierarchy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-rule text-sm">
          {/* Brand & Trust Column (4 cols) */}
          <div className="min-w-0 lg:col-span-4 space-y-4">
            <Link href={homeHref} className="inline-flex flex-col leading-none group">
              <AutonomekLockup className="h-[22px] w-auto text-foreground transition-transform duration-200 group-hover:scale-[1.015]" />
              <span className="sr-only">AUTONOMEK</span>
              <span className="mt-2 text-[9px] font-medium tracking-[0.28em] text-primary uppercase">
                {isEn ? 'SOFTWARE & AI ENGINEERING' : 'INGENIERÍA DE SOFTWARE & IA'}
              </span>
            </Link>
            <p className="text-muted leading-relaxed max-w-[38ch] text-xs sm:text-sm">
              {isEn
                ? 'We engineer custom software, 0.6s websites, and 24/7 WhatsApp AI sales assistants. Technology that brings you clients and runs your operation with 100% code ownership.'
                : 'Desarrollamos software a medida, sitios web que cargan en 0.6s y agentes de IA en WhatsApp 24/7. Tecnología que atrae clientes con código 100% propiedad de tu empresa.'}
            </p>

            {/* Direct Contact */}
            <div className="space-y-1.5 text-xs text-muted pt-1">
              <p>
                <a
                  href="mailto:contacto@autonomek.com"
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Mail size={13} className="text-primary shrink-0" />
                  <span>contacto@autonomek.com</span>
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/573010147443"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Phone size={13} className="text-primary shrink-0" />
                  <span>
                    +57 301 014 7443 ({isEn ? 'Official WhatsApp' : 'WhatsApp Oficial'})
                  </span>
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/autonomek?psln=bzJtYXI0NzhuZW42"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Instagram size={13} className="text-primary shrink-0" />
                  <span>
                    @autonomek (Instagram)
                  </span>
                </a>
              </p>
            </div>

            {/* Trust badge */}
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-rule bg-surface/60 px-3 py-1 font-mono text-[11px] text-muted">
                <ShieldCheck size={12} className="text-primary" />
                {isEn ? 'SOC 2 Cloud · Official Meta API' : 'Infraestructura Cloud · API Meta Oficial'}
              </span>
            </div>
          </div>

          {/* Solutions Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
              {isEn ? 'Solutions' : 'Soluciones'}
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-muted">
              <li>
                <Link
                  href={
                    isEn
                      ? '/en/services/ai-agents'
                      : '/servicios/agentes-inteligencia-artificial'
                  }
                  className="hover:text-foreground underline decoration-rule hover:decoration-primary underline-offset-4 transition-colors"
                >
                  {isEn ? 'WhatsApp AI Agents' : 'Agentes de IA WhatsApp'}
                </Link>
              </li>
              <li>
                <Link
                  href={
                    isEn
                      ? '/en/services/high-performance-websites'
                      : '/servicios/paginas-web-alto-rendimiento'
                  }
                  className="hover:text-foreground underline decoration-rule hover:decoration-primary underline-offset-4 transition-colors"
                >
                  {isEn ? 'Websites & SEO/GEO' : 'Sitios Web y SEO'}
                </Link>
              </li>
              <li>
                <Link
                  href={
                    isEn
                      ? '/en/services/custom-software'
                      : '/servicios/software-a-medida'
                  }
                  className="hover:text-foreground underline decoration-rule hover:decoration-primary underline-offset-4 transition-colors"
                >
                  {isEn ? 'Custom Software' : 'Software a Medida'}
                </Link>
              </li>
              <li>
                <Link
                  href={
                    isEn
                      ? '/en/services/process-automation'
                      : '/servicios/automatizacion-de-procesos'
                  }
                  className="hover:text-foreground underline decoration-rule hover:decoration-primary underline-offset-4 transition-colors"
                >
                  {isEn ? 'Process Automation' : 'Automatización de Procesos'}
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href={servicesHref}
                  className="inline-flex items-center gap-1 text-primary underline decoration-primary/60 hover:decoration-primary underline-offset-4 font-medium"
                >
                  <span>{isEn ? 'All solutions' : 'Ver las 4 soluciones'}</span>
                  <ArrowUpRight size={13} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
              Autonomek
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-muted">
              <li>
                <Link
                  href={homeHref}
                  className="hover:text-foreground underline decoration-rule hover:decoration-primary underline-offset-4 transition-colors font-medium text-foreground/90"
                >
                  {isEn ? 'Home — Autonomek' : 'Inicio — Autonomek'}
                </Link>
              </li>
              <li>
                <Link
                  href={aboutHref}
                  className="hover:text-foreground underline decoration-rule hover:decoration-primary underline-offset-4 transition-colors"
                >
                  {isEn ? 'About Us' : 'Sobre nosotros'}
                </Link>
              </li>
              <li>
                <Link
                  href={blogHref}
                  className="hover:text-foreground underline decoration-rule hover:decoration-primary underline-offset-4 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={projectsHref}
                  className="hover:text-foreground underline decoration-rule hover:decoration-primary underline-offset-4 transition-colors"
                >
                  {isEn ? 'Case studies (15)' : 'Casos reales (15)'}
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
                  href={`${homeHref}#preguntas`}
                  className="hover:text-foreground transition-colors"
                >
                  {isEn ? 'FAQ' : 'Preguntas frecuentes'}
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href={startHref}
                  className="inline-flex items-center gap-1 text-primary underline decoration-primary/60 hover:decoration-primary underline-offset-4 font-medium"
                >
                  <span>{isEn ? 'Start a project' : 'Iniciar proyecto'}</span>
                  <ArrowUpRight size={13} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
              {isEn ? 'Legal & Trust' : 'Legal y Confianza'}
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-muted">
              <li>
                <Link
                  href={termsHref}
                  className="hover:text-foreground transition-colors"
                >
                  {isEn ? 'Terms & Conditions' : 'Términos y Condiciones'}
                </Link>
              </li>
              <li>
                <Link
                  href={privacyHref}
                  className="hover:text-foreground transition-colors"
                >
                  {isEn ? 'Privacy & Data (1581)' : 'Política de Privacidad'}
                </Link>
              </li>
              <li>
                <Link
                  href={legalHubHref}
                  className="hover:text-foreground transition-colors font-medium text-primary"
                >
                  {isEn ? 'Legal Center' : 'Centro Legal'}
                </Link>
              </li>
              <li className="pt-1 text-[11px] text-subtle leading-snug">
                {isEn
                  ? 'Zero public AI training. 100% code ownership guaranteed.'
                  : 'Cero entrenamiento en modelos públicos. Propiedad total del código.'}
              </li>
            </ul>
          </div>

          {/* Guides & Canonical Language Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
              {isEn ? 'Guides & Edition' : 'Guías & Idioma'}
            </p>
            <ul className="space-y-2 text-xs text-muted">
              {BLOG_POSTS.slice(0, 4).map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`${blogHref}/${isEn ? post.slugEn : post.slug}`}
                    className="hover:text-foreground underline decoration-rule hover:decoration-primary underline-offset-4 transition-colors line-clamp-1"
                  >
                    {isEn ? post.categoryLabelEn : post.categoryLabel}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-rule flex items-center gap-3">
                <Link
                  href="/"
                  hrefLang="es"
                  className={`font-medium transition-colors ${
                    !isEn ? 'text-primary underline underline-offset-4' : 'hover:text-foreground'
                  }`}
                >
                  Español
                </Link>
                <span className="text-rule">·</span>
                <Link
                  href="/en"
                  hrefLang="en"
                  className={`font-medium transition-colors ${
                    isEn ? 'text-primary underline underline-offset-4' : 'hover:text-foreground'
                  }`}
                >
                  English
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-subtle">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p>
              © {new Date().getFullYear()} AUTONOMEK.{' '}
              {isEn ? 'All rights reserved.' : 'Todos los derechos reservados.'}
            </p>
            <span className="hidden sm:inline text-rule">•</span>
            <span className="text-muted">
              {isEn
                ? 'Registered engineering studio · Colombia & International'
                : 'Estudio de ingeniería digital · Operación Colombia e Internacional'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-muted font-medium">
            <Link href={privacyHref} className="hover:text-foreground transition-colors">
              {isEn ? 'Privacy' : 'Privacidad'}
            </Link>
            <span>•</span>
            <Link href={termsHref} className="hover:text-foreground transition-colors">
              {isEn ? 'Terms' : 'Términos'}
            </Link>
            <span>•</span>
            <Link href={aboutHref} className="hover:text-foreground transition-colors">
              {isEn ? 'About' : 'Nosotros'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
