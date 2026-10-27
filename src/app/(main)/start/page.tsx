'use client';

import React, { useEffect, Suspense } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';

function StartRedirectContent() {
  const searchParams = useSearchParams();
  const pathname = usePathname() || '/';
  const isEn = pathname === '/en' || pathname.startsWith('/en/') || pathname === '/us' || pathname.startsWith('/us/');

  const channel = searchParams.get('channel');
  const goal = searchParams.get('goal');

  const buildWhatsAppUrl = () => {
    const phone = '573004435894';
    if (isEn) {
      let msg = 'Hello Autonomek, I would like to request a technical diagnosis for my business.';
      if (channel || goal) {
        msg = `Hello Autonomek, I want to optimize my ${channel || 'digital channels'} with a focus on ${goal || 'automation and sales'}.`;
      }
      return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    } else {
      let msg = 'Hola Autonomek, me gustaría solicitar un diagnóstico técnico para mi empresa.';
      if (channel || goal) {
        msg = `Hola Autonomek, quiero optimizar mi canal de ${channel || 'atención digital'} con enfoque en ${goal || 'automatización y ventas'}.`;
      }
      return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    }
  };

  const whatsappUrl = buildWhatsAppUrl();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 350);
    return () => clearTimeout(timer);
  }, [whatsappUrl]);

  return (
    <main className="min-h-screen w-full bg-background text-foreground flex items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-lg w-full bg-surface border border-rule rounded-2xl p-8 sm:p-10 text-center space-y-5">
        <h1 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
          {isEn ? 'Connecting to WhatsApp' : 'Conectando con WhatsApp'}
        </h1>

        <p className="text-muted text-sm leading-relaxed">
          {isEn
            ? 'Redirecting you directly to our engineering team on WhatsApp.'
            : 'Te estamos redirigiendo directamente con nuestro equipo de ingeniería en WhatsApp.'}
        </p>

        <div className="pt-2 flex flex-col gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-11 px-6 rounded-lg bg-primary text-primary-ink font-medium text-sm transition-opacity hover:opacity-90 inline-flex items-center justify-center"
          >
            {isEn ? 'Open WhatsApp now' : 'Abrir WhatsApp ahora'}
          </a>

          <Link
            href={isEn ? '/en' : '/es'}
            className="text-xs text-muted hover:text-foreground transition-colors pt-1"
          >
            {isEn ? 'Return to website' : 'Volver al sitio web'}
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function StartPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <StartRedirectContent />
    </Suspense>
  );
}
