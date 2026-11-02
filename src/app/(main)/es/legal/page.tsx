import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Scale, Lock, Users, ArrowUpRight } from 'lucide-react';

export default function EsLegalHub() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground pt-28 md:pt-36 pb-28 selection:bg-primary selection:text-primary-ink">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="mb-8">
          <Link href="/es" className="text-sm text-muted hover:text-foreground transition-colors">
            ← Volver al inicio
          </Link>
        </div>

        <div className="mb-5 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span>Marco Legal, Privacidad y Compromiso Corporativo</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.08]">
          Centro Legal y Transparencia
        </h1>

        <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
          Consulta las políticas de protección de datos, términos contractuales y principios de ingeniería con los que protegemos a tu empresa y garantizamos la propiedad de tu tecnología.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Términos y Condiciones */}
          <Link
            href="/es/terminos"
            className="group rounded-[24px] border border-rule bg-surface p-7 flex flex-col justify-between gap-6 hover:border-primary transition-all hover:-translate-y-0.5 shadow-lg shadow-black/20"
          >
            <div className="space-y-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Scale size={20} />
              </span>
              <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Términos y Condiciones
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Propiedad del código fuente al 100%, esquemas de pago 50/50, garantía técnica de 30 días, entregas por etapas y delimitación de responsabilidad.
              </p>
            </div>
            <div className="pt-4 border-t border-rule flex items-center justify-between text-xs font-semibold text-primary">
              <span>Leer términos completos</span>
              <ArrowUpRight size={14} />
            </div>
          </Link>

          {/* Card 2: Política de Privacidad */}
          <Link
            href="/es/privacidad"
            className="group rounded-[24px] border border-rule bg-surface p-7 flex flex-col justify-between gap-6 hover:border-primary transition-all hover:-translate-y-0.5 shadow-lg shadow-black/20"
          >
            <div className="space-y-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Lock size={20} />
              </span>
              <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Política de Privacidad
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Cumplimiento de la Ley 1581 (Habeas Data) y RGPD. Cero venta de datos personales y compromiso de no entrenar modelos públicos de IA con datos de tu negocio.
              </p>
            </div>
            <div className="pt-4 border-t border-rule flex items-center justify-between text-xs font-semibold text-primary">
              <span>Leer política de privacidad</span>
              <ArrowUpRight size={14} />
            </div>
          </Link>

          {/* Card 3: Sobre Nosotros */}
          <Link
            href="/es/nosotros"
            className="group rounded-[24px] border border-rule bg-surface p-7 flex flex-col justify-between gap-6 hover:border-primary transition-all hover:-translate-y-0.5 shadow-lg shadow-black/20"
          >
            <div className="space-y-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Users size={20} />
              </span>
              <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Sobre Nosotros
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Conoce nuestros principios de ingeniería, estándares de velocidad, casos de producción reales y por qué trabajamos con trato directo sin intermediarios.
              </p>
            </div>
            <div className="pt-4 border-t border-rule flex items-center justify-between text-xs font-semibold text-primary">
              <span>Conocer Autonomek</span>
              <ArrowUpRight size={14} />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
