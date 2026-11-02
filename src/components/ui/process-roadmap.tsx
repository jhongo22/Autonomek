"use client";

import React from "react";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  ArrowRight,
  ArrowDown,
  LucideIcon,
} from "lucide-react";

export interface ProcessStepItem {
  num: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

const DEFAULT_STEPS_ES: ProcessStepItem[] = [
  {
    num: "01",
    title: "Diagnóstico inicial gratis",
    desc: "Conversamos sobre cómo opera tu negocio hoy, identificamos qué te quita tiempo y definimos qué necesita tu proyecto.",
    icon: Search,
  },
  {
    num: "02",
    title: "Propuesta clara y precio fijo",
    desc: "Te entregamos el plan de trabajo con pantallas claras, tiempos de entrega definidos y presupuesto cerrado sin sorpresas.",
    icon: PenTool,
  },
  {
    num: "03",
    title: "Desarrollo ágil por etapas",
    desc: "Construimos tu web, agente de IA o software mostrándote avances reales cada semana para que los pruebes antes del lanzamiento.",
    icon: Code2,
  },
  {
    num: "04",
    title: "Puesta en marcha y respaldo",
    desc: "Lanzamos tu solución en vivo, capacitamos a tu equipo para usarla con facilidad y te acompañamos con soporte directo.",
    icon: Rocket,
  },
];

const DEFAULT_STEPS_EN: ProcessStepItem[] = [
  {
    num: "01",
    title: "Free initial diagnosis",
    desc: "We review how your business operates today, identify what takes up your time, and define the exact solution you need.",
    icon: Search,
  },
  {
    num: "02",
    title: "Clear plan & closed price",
    desc: "We present the visual design, prioritized features, delivery timeline, and a fixed budget with zero hidden fees.",
    icon: PenTool,
  },
  {
    num: "03",
    title: "Fast staged development",
    desc: "We build your website, AI agent, or platform showing you functional progress every week so you can test and give feedback.",
    icon: Code2,
  },
  {
    num: "04",
    title: "Testing & launch with support",
    desc: "We verify speed and security, launch to production, train your team, and accompany you with direct engineering support.",
    icon: Rocket,
  },
];

export function ProcessRoadmap({
  isEn = false,
  steps,
}: {
  isEn?: boolean;
  steps?: ProcessStepItem[];
}) {
  const list = steps ?? (isEn ? DEFAULT_STEPS_EN : DEFAULT_STEPS_ES);

  return (
    <div className="relative">
      {/* ================================================================== */}
      {/* DESKTOP TOP CIRCUIT PIPELINE (Connects 01 -> 02 -> 03 -> 04)       */}
      {/* ================================================================== */}
      <div className="hidden lg:block relative mb-3 px-4" aria-hidden="true">
        {/* Continuous horizontal track between center of col 1 and center of col 4 */}
        <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-5 -translate-y-1/2 h-[2px] bg-rule overflow-hidden rounded-full">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30" />
          <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent animate-flow-beam" />
        </div>

        {/* 4 Station Nodes aligned with the 4 columns */}
        <div className="grid grid-cols-4 gap-6 relative z-10">
          {list.map((step) => (
            <div key={step.num} className="flex flex-col items-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background px-3.5 py-1.5 text-xs font-mono font-semibold text-primary shadow-[0_0_20px_rgba(165,208,185,0.18)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span>
                  {isEn ? "STEP" : "PASO"} {step.num}
                </span>
              </div>
              {/* Vertical stem dropping into the top of the card */}
              <div className="h-5 w-[2px] bg-gradient-to-b from-primary/60 to-primary/20" />
            </div>
          ))}
        </div>
      </div>

      {/* ================================================================== */}
      {/* 4 CONNECTED CARDS WITH HORIZONTAL & VERTICAL BRIDGE LINES          */}
      {/* ================================================================== */}
      <div className="relative">
        {/* Continuous horizontal line passing behind all 4 cards on Desktop */}
        <div
          aria-hidden="true"
          className="hidden lg:block pointer-events-none absolute left-10 right-10 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-primary/25 via-primary/60 to-primary/25 z-0"
        />

        <ol className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((step, index) => {
            const IconComponent = step.icon;
            const isLast = index === list.length - 1;

            return (
              <li key={step.num} className="relative flex flex-col">
                {/* Minimalist Card matching standard website cards */}
                <div className="group relative h-full rounded-[24px] border border-rule bg-surface hover:border-rule-strong hover:bg-card/40 transition-colors duration-300 p-6 flex flex-col shadow-lg shadow-black/20 overflow-hidden">
                  {/* Top glowing accent bar + connection port dot */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-75 group-hover:opacity-100 transition-opacity"
                  />
                  <span
                    aria-hidden="true"
                    className="hidden lg:block pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-surface"
                  />

                  {/* Header: Icon + Step number */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/25">
                      <IconComponent size={20} />
                    </span>
                    <span className="font-mono text-xs font-semibold text-primary">
                      {step.num}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {step.desc}
                  </p>
                </div>

                {/* Desktop Bridge Node between Card i and Card i+1 */}
                {!isLast && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:flex absolute -right-[25px] top-1/2 -translate-y-1/2 z-20 items-center justify-center w-[26px]"
                  >
                    <div className="h-[2px] w-full bg-primary/60" />
                    <span className="absolute flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-background text-primary shadow-[0_0_14px_rgba(165,208,185,0.35)]">
                      <ArrowRight size={12} />
                    </span>
                  </div>
                )}

                {/* Mobile Connector Bridge between Card i and Card i+1 */}
                {!isLast && (
                  <div
                    aria-hidden="true"
                    className="flex sm:hidden flex-col items-center -my-3 z-20 pointer-events-none"
                  >
                    <div className="h-3 w-[2px] bg-primary/50" />
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-background text-primary shadow-md">
                      <ArrowDown size={12} />
                    </span>
                    <div className="h-3 w-[2px] bg-primary/50" />
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
