'use client';

import React from 'react';

/* -------------------------------------------------------------------------- */
/* 1. 3D ISOMETRIC BAR CHART COMPARATOR (Section 2: Operational Diagnosis)    */
/* -------------------------------------------------------------------------- */
export function BottleneckPrismFigure({
  activeLeak = 0,
  scrollProgress = 0,
  onSelectLeak,
  isEn = false,
}: {
  activeLeak: number;
  scrollProgress?: number;
  onSelectLeak?: (idx: number) => void;
  isEn?: boolean;
}) {
  const leaks = isEn
    ? [
        {
          id: '01',
          tag: '01 / Response Latency',
          beforeLabel: 'Human reply (4 hrs)',
          beforeVal: '32%',
          beforeHeight: '76px',
          midVal: '58%',
          midHeight: '110px',
          afterLabel: 'Autonomek AI (1.1s)',
          afterVal: '94%',
          afterHeight: '164px',
          caption: 'Lead conversion retention by response speed',
        },
        {
          id: '02',
          tag: '02 / Manual Data Entry',
          beforeLabel: 'Manual copy-paste',
          beforeVal: '18h/wk',
          beforeHeight: '158px',
          midVal: '6h/wk',
          midHeight: '96px',
          afterLabel: 'n8n Webhook sync',
          afterVal: '0.4s',
          afterHeight: '132px',
          caption: 'Weekly operational capacity recovered per sales rep',
        },
        {
          id: '03',
          tag: '03 / Web & SEO Speed',
          beforeLabel: 'Legacy template',
          beforeVal: '4.5s',
          beforeHeight: '152px',
          midVal: '2.1s',
          midHeight: '104px',
          afterLabel: 'Next.js Edge SSR',
          afterVal: '0.6s',
          afterHeight: '168px',
          caption: 'Core Web Vitals score & visitor retention',
        },
      ]
    : [
        {
          id: '01',
          tag: '01 / Latencia de respuesta',
          beforeLabel: 'Respuesta humana (4h)',
          beforeVal: '32%',
          beforeHeight: '76px',
          midVal: '58%',
          midHeight: '110px',
          afterLabel: 'Agente IA (1.1s)',
          afterVal: '94%',
          afterHeight: '164px',
          caption: 'Retención de prospectos según velocidad de atención',
        },
        {
          id: '02',
          tag: '02 / Digitación manual',
          beforeLabel: 'Copiado manual a Excel',
          beforeVal: '18h/sem',
          beforeHeight: '158px',
          midVal: '6h/sem',
          midHeight: '96px',
          afterLabel: 'Sincronización n8n',
          afterVal: '0.4s',
          afterHeight: '132px',
          caption: 'Tiempo operativo consumido vs ejecución automática',
        },
        {
          id: '03',
          tag: '03 / Velocidad Web y SEO',
          beforeLabel: 'Plantilla tradicional',
          beforeVal: '4.5s',
          beforeHeight: '152px',
          midVal: '2.1s',
          midHeight: '104px',
          afterLabel: 'Next.js Edge SSR',
          afterVal: '0.6s',
          afterHeight: '168px',
          caption: 'Tiempo de apertura y puntaje Core Web Vitals (98/100)',
        },
      ];

  const current = leaks[activeLeak] || leaks[0];

  return (
    <div className="w-full rounded-2xl bg-background border border-rule p-4 sm:p-6 space-y-3.5 sm:space-y-5">
      <div className="flex items-center justify-between border-b border-rule pb-2.5 sm:pb-3.5">
        <span className="text-xs font-medium text-primary">{current.tag}</span>
        <span className="text-xs font-mono text-muted">
          {isEn ? '3D Telemetry Model' : 'Gráfico 3D de impacto'}
        </span>
      </div>

      {/* 3D Isometric Bar Chart Stage */}
      <div className="iso-stage-box relative h-[195px] sm:h-[250px] w-full rounded-xl bg-surface border border-rule overflow-hidden">
        <div
          className="relative w-[210px] h-[200px] scale-[0.84] sm:scale-100 transition-transform duration-200 ease-out"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${56 - scrollProgress * 6}deg) rotateZ(${-40 + scrollProgress * 18}deg)`,
          }}
        >
          {/* Bottom Base Grid */}
          <div
            className="absolute inset-0 rounded-2xl border border-rule"
            style={{
              background: 'var(--cube-bot)',
              transform: 'translateZ(-36px)',
              backgroundImage:
                'linear-gradient(to right, var(--rule) 1px, transparent 1px), linear-gradient(to bottom, var(--rule) 1px, transparent 1px)',
              backgroundSize: '18px 18px',
            }}
          />

          {/* Bar 1: Legacy Bottleneck (Left) */}
          <div
            className="absolute left-3 bottom-3 w-[54px] rounded-xl p-2 flex flex-col justify-between transition-all duration-500"
            style={{
              height: current.beforeHeight,
              background: 'var(--cube-mid)',
              border: '1.5px solid var(--secondary)',
              transform: 'translateZ(4px)',
              boxShadow: '0 14px 28px rgba(0,0,0,0.45)',
            }}
          >
            <span className="text-[9px] font-mono text-muted truncate">
              {isEn ? 'Legacy' : 'Manual'}
            </span>
            <span className="text-xs font-semibold text-foreground tabular-nums">
              {current.beforeVal}
            </span>
          </div>

          {/* Bar 2: Industry Average (Middle) */}
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-3 w-[54px] rounded-xl p-2 flex flex-col justify-between transition-all duration-500"
            style={{
              height: current.midHeight,
              background: 'var(--cube-bot)',
              border: '1.5px solid var(--accent)',
              transform: 'translateZ(20px)',
              boxShadow: '0 16px 30px rgba(0,0,0,0.48)',
            }}
          >
            <span className="text-[9px] font-mono text-muted truncate">
              {isEn ? 'Partial' : 'Parcial'}
            </span>
            <span className="text-xs font-semibold text-foreground tabular-nums">
              {current.midVal}
            </span>
          </div>

          {/* Bar 3: Autonomek Optimized Architecture (Right, Elevated Primary) */}
          <div
            className="absolute right-3 bottom-3 w-[58px] rounded-xl p-2.5 flex flex-col justify-between transition-all duration-500"
            style={{
              height: current.afterHeight,
              background: 'var(--cube-top)',
              border: '1.5px solid var(--primary)',
              transform: 'translateZ(44px)',
              boxShadow: '0 22px 38px rgba(0,0,0,0.58)',
            }}
          >
            <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
            <div>
              <span className="block text-[9px] font-mono text-primary">Autonomek</span>
              <span className="text-sm font-semibold text-foreground tabular-nums">
                {current.afterVal}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Selector Pills */}
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onSelectLeak?.(idx)}
              className={`h-8 rounded-lg text-xs font-medium transition-colors ${
                activeLeak === idx
                  ? 'bg-primary text-primary-ink'
                  : 'bg-surface text-muted hover:text-foreground border border-rule'
              }`}
            >
              {isEn ? `Leak 0${idx + 1}` : `Fuga 0${idx + 1}`}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted text-center">{current.caption}</p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. HEXAGON-TO-GYROSCOPE CIRCUIT SCHEMATIC (Section 3: System Workbench)    */
/*    Geometry: Curved SVG Conduit Schematic + Rotating Octagon Gyroscope     */
/* -------------------------------------------------------------------------- */
export function PipelineNodesFigure({
  mode,
  isEn = false,
}: {
  mode: 'whatsapp' | 'web' | 'crm';
  isEn?: boolean;
}) {
  const nodes =
    mode === 'whatsapp'
      ? [
          { code: 'WA', label: 'WhatsApp API', sub: 'Audio / Text' },
          { code: 'RAG', label: 'OpenAI Engine', sub: '1.1s Vector' },
          { code: 'CRM', label: 'HubSpot + Cal', sub: 'Booked' },
        ]
      : mode === 'web'
      ? [
          { code: 'GEO', label: 'Google & AI', sub: 'JSON-LD' },
          { code: 'SSR', label: 'Next.js Edge', sub: '0.6s LCP' },
          { code: 'WA', label: 'Direct Lead', sub: 'Converted' },
        ]
      : [
          { code: 'HOOK', label: 'Stripe / Bank', sub: 'Validated' },
          { code: 'N8N', label: 'n8n Workflow', sub: '420ms Run' },
          { code: 'ERP', label: 'PDF & Invoice', sub: 'Dispatched' },
        ];

  return (
    <div className="relative w-full h-[185px] rounded-xl bg-background border border-rule p-4 flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between text-[11px] font-mono text-muted">
        <span>{isEn ? 'SIGNAL TOPOLOGY' : 'CIRCUITO DE SEÑAL'}</span>
        <span className="text-primary">{mode.toUpperCase()} · ONLINE</span>
      </div>

      {/* SVG Circuit Conduits + 3 Distinct Geometric Nodes */}
      <div className="relative flex-1 flex items-center justify-between px-2 sm:px-6">
        {/* Background Curved SVG Paths */}
        <svg
          viewBox="0 0 360 90"
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
        >
          <path
            d="M 55 45 C 105 15, 130 75, 180 45 C 230 15, 255 75, 305 45"
            fill="none"
            stroke="var(--rule-strong)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <line
            x1="55"
            y1="45"
            x2="305"
            y2="45"
            stroke="var(--primary)"
            strokeWidth="1.5"
            strokeOpacity="0.55"
          />
        </svg>

        {/* Node 1: Hexagon Input */}
        <div className="relative z-10 flex flex-col items-center gap-1.5">
          <div className="w-14 h-14 rounded-xl rotate-45 bg-surface border border-accent flex items-center justify-center shadow-lg">
            <span className="-rotate-45 text-xs font-mono font-semibold text-foreground">
              {nodes[0].code}
            </span>
          </div>
          <span className="text-[11px] font-medium text-foreground mt-1">{nodes[0].label}</span>
          <span className="text-[10px] font-mono text-muted">{nodes[0].sub}</span>
        </div>

        {/* Node 2: Central Rotating Gyroscope Circle */}
        <div className="relative z-10 flex flex-col items-center gap-1.5">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <div
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary"
              style={{ animation: 'spin 14s linear infinite' }}
            />
            <div className="w-12 h-12 rounded-full bg-card border border-primary flex items-center justify-center shadow-[0_0_24px_var(--cube-top)]">
              <span className="text-xs font-mono font-semibold text-primary">
                {nodes[1].code}
              </span>
            </div>
          </div>
          <span className="text-[11px] font-semibold text-primary">{nodes[1].label}</span>
          <span className="text-[10px] font-mono text-muted">{nodes[1].sub}</span>
        </div>

        {/* Node 3: Cylindrical Database Stack */}
        <div className="relative z-10 flex flex-col items-center gap-1.5">
          <div className="w-14 h-14 rounded-2xl bg-surface border border-primary/60 flex flex-col items-center justify-center p-1.5 gap-1 shadow-lg">
            <div className="w-8 h-1.5 rounded-full bg-primary/80" />
            <span className="text-[11px] font-mono font-semibold text-foreground">
              {nodes[2].code}
            </span>
            <div className="w-8 h-1.5 rounded-full bg-accent/80" />
          </div>
          <span className="text-[11px] font-medium text-foreground mt-1">{nodes[2].label}</span>
          <span className="text-[10px] font-mono text-muted">{nodes[2].sub}</span>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. FOUR RADICALLY DISTINCT GEOMETRIC SCULPTURES (Section 4 & Services)     */
/*    01: 3D Atomic Gyroscope Sphere (AI Agents)                              */
/*    02: Radial Lighthouse Speedometer & Sonar (Web & SEO)                   */
/*    03: Interlocking Mechanical Planetary Gears (Automation)                */
/*    04: Harmonic Sine-Wave Equalizer & Polyhedron Matrix (Custom Software)  */
/* -------------------------------------------------------------------------- */
export function BlueprintSculptureFigure({
  activeIndex = 0,
  onSelect,
  isEn = false,
}: {
  activeIndex: number;
  onSelect?: (idx: number) => void;
  isEn?: boolean;
}) {
  const specs = isEn
    ? [
        {
          id: '01',
          name: 'Atomic Neural Gyroscope',
          sub: 'Multimodal OpenAI RAG + WhatsApp Cloud API',
          stat: '1.1s',
        },
        {
          id: '02',
          name: 'Core Web Vitals Radar',
          sub: 'Next.js 15 Edge SSR + JSON-LD + Hreflang',
          stat: '98/100',
        },
        {
          id: '03',
          name: 'Planetary Webhook Gears',
          sub: 'Synchronous n8n + CRM + Billing pipelines',
          stat: '420ms',
        },
        {
          id: '04',
          name: 'Harmonic Data Cluster',
          sub: 'TypeScript + PostgreSQL + Multi-tenant BI',
          stat: '99.9%',
        },
      ]
    : [
        {
          id: '01',
          name: 'Giroscopio Neural RAG',
          sub: 'Memoria vectorial + WhatsApp Cloud API',
          stat: '1.1s',
        },
        {
          id: '02',
          name: 'Radar Core Web Vitals',
          sub: 'Next.js 15 Edge + Schema.org + Hreflang',
          stat: '98/100',
        },
        {
          id: '03',
          name: 'Engranajes Planetarios n8n',
          sub: 'Sincronización continua CRM + ERP + Pagos',
          stat: '420ms',
        },
        {
          id: '04',
          name: 'Matriz Armónica de Datos',
          sub: 'TypeScript + PostgreSQL + Paneles BI en vivo',
          stat: '99.9%',
        },
      ];

  const current = specs[activeIndex] || specs[0];

  return (
    <div className="w-full rounded-2xl bg-background border border-rule p-5 sm:p-6 space-y-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 border-b border-rule pb-4">
        <div>
          <p className="text-xs font-medium text-primary">
            {isEn ? `Architecture 0${activeIndex + 1}` : `Geometría de sistema 0${activeIndex + 1}`}
          </p>
          <h3 className="text-lg font-semibold text-foreground mt-0.5">{current.name}</h3>
          <p className="text-xs text-muted mt-0.5">{current.sub}</p>
        </div>
        <div className="text-right shrink-0 pl-3 border-l border-rule">
          <span className="text-[11px] text-muted block">{isEn ? 'Benchmark' : 'Métrica'}</span>
          <span className="text-xl font-semibold text-primary tabular-nums">{current.stat}</span>
        </div>
      </div>

      {/* Multi-Geometry Stage */}
      <div className="relative h-[250px] w-full rounded-xl bg-surface border border-rule flex items-center justify-center overflow-hidden p-4">
        {/* ---------------------------------------------------------------- */}
        {/* FIGURE 01: 3D ATOMIC GYROSCOPE SPHERE (3 Intersecting Orbits)     */}
        {/* ---------------------------------------------------------------- */}
        {activeIndex === 0 && (
          <div
            className="relative w-[210px] h-[210px] flex items-center justify-center"
            style={{ perspective: '900px' }}
          >
            {/* Orbit Ring 1 (Tilted X + Y) */}
            <div
              className="absolute w-[184px] h-[184px] rounded-full border-[1.5px] border-primary/70"
              style={{
                transform: 'rotateX(68deg) rotateY(22deg)',
                boxShadow: 'inset 0 0 20px var(--cube-top)',
              }}
            />
            {/* Orbit Ring 2 (Counter-tilted X - Y) */}
            <div
              className="absolute w-[184px] h-[184px] rounded-full border-[1.5px] border-accent/80"
              style={{
                transform: 'rotateX(68deg) rotateY(-28deg)',
              }}
            />
            {/* Orbit Ring 3 (Equatorial Dashed Ring) */}
            <div
              className="absolute w-[148px] h-[148px] rounded-full border border-dashed border-primary"
              style={{ animation: 'spin 18s linear infinite' }}
            />
            {/* Satellite Nodes */}
            <span className="absolute top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-background border border-rule text-[10px] font-mono text-primary">
              RAG Vector
            </span>
            <span className="absolute bottom-3 left-6 px-2 py-0.5 rounded-full bg-background border border-rule text-[10px] font-mono text-foreground">
              Audio / Voz
            </span>
            <span className="absolute bottom-3 right-6 px-2 py-0.5 rounded-full bg-background border border-rule text-[10px] font-mono text-foreground">
              Visión IA
            </span>

            {/* Central Spherical Nucleus */}
            <div
              className="relative z-10 w-16 h-16 rounded-full flex flex-col items-center justify-center"
              style={{
                background: 'radial-gradient(circle at 30% 30%, var(--primary), var(--secondary))',
                boxShadow: '0 0 32px var(--cube-top)',
              }}
            >
              <span className="text-xs font-mono font-bold text-primary-ink">24/7</span>
            </div>
          </div>
        )}

        {/* ---------------------------------------------------------------- */}
        {/* FIGURE 02: LIGHTHOUSE RADIAL SPEEDOMETER & SONAR GAUGE           */}
        {/* ---------------------------------------------------------------- */}
        {activeIndex === 1 && (
          <div className="w-full h-full flex items-center justify-around gap-4">
            {/* Circular Lighthouse Gauge */}
            <div className="relative w-[156px] h-[156px] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="var(--rule)"
                  strokeWidth="8"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="314"
                  strokeDashoffset="10"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="38"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-semibold text-foreground tabular-nums">98</span>
                <span className="text-[10px] font-mono text-primary">CWV SCORE</span>
              </div>
            </div>

            {/* Live Telemetry Bars */}
            <div className="flex-1 max-w-[160px] space-y-3">
              {[
                { label: 'LCP (0.6s)', pct: '98%' },
                { label: 'SEO / GEO', pct: '100%' },
                { label: 'CLS (0.00)', pct: '100%' },
              ].map((bar) => (
                <div key={bar.label} className="space-y-1">
                  <div className="flex justify-between text-[11px] font-mono">
                    <span className="text-foreground">{bar.label}</span>
                    <span className="text-primary">{bar.pct}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-background border border-rule overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: bar.pct }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ---------------------------------------------------------------- */}
        {/* FIGURE 03: INTERLOCKING PLANETARY GEARS (SVG Clockwork Mesh)      */}
        {/* ---------------------------------------------------------------- */}
        {activeIndex === 2 && (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Central Primary Gear */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-primary"
                style={{ animation: 'spin 16s linear infinite' }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="34"
                  fill="var(--cube-top)"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeDasharray="8 8"
                />
              </svg>
              <span className="absolute text-xs font-mono font-semibold text-foreground">
                n8n API
              </span>
            </div>

            {/* Top-Right Satellite Gear */}
            <div className="relative -ml-3 -mt-14 w-20 h-20 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-accent"
                style={{ animation: 'spin 11s linear infinite reverse' }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="32"
                  fill="var(--cube-mid)"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeDasharray="10 10"
                />
              </svg>
              <span className="absolute text-[10px] font-mono font-semibold text-foreground">
                CRM
              </span>
            </div>

            {/* Bottom-Right Satellite Gear */}
            <div className="relative -ml-12 mt-16 w-20 h-20 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-primary"
                style={{ animation: 'spin 11s linear infinite reverse' }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="32"
                  fill="var(--cube-bot)"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeDasharray="10 10"
                />
              </svg>
              <span className="absolute text-[10px] font-mono font-semibold text-foreground">
                ERP
              </span>
            </div>
          </div>
        )}

        {/* ---------------------------------------------------------------- */}
        {/* FIGURE 04: HARMONIC EQUALIZER & CONSTELLATION MATRIX             */}
        {/* ---------------------------------------------------------------- */}
        {activeIndex === 3 && (
          <div className="w-full h-full flex flex-col justify-between p-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-muted">
              <span>CLUSTER: POSTGRESQL + SUPABASE</span>
              <span className="text-primary">RLS ACTIVE</span>
            </div>

            {/* Harmonic Equalizer Pillars */}
            <div className="flex-1 flex items-end justify-between gap-2.5 pt-4 pb-2 px-2">
              {[42, 78, 56, 94, 68, 88, 50, 96, 72, 84].map((h, i) => (
                <div key={i} className="flex-1 h-full flex flex-col justify-end items-center gap-1.5">
                  <div
                    className="w-full rounded-t-md transition-all duration-500"
                    style={{
                      height: `${h}%`,
                      background: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
                      opacity: i % 3 === 0 ? 0.95 : 0.65,
                    }}
                  />
                  <span className="text-[9px] font-mono text-subtle">0{i}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-foreground border-t border-rule pt-2">
              <span>Multi-Tenant Auth</span>
              <span>Real-time WebSockets</span>
              <span>BI Telemetry</span>
            </div>
          </div>
        )}
      </div>

      {/* Selector Buttons */}
      {onSelect && (
        <div className="grid grid-cols-4 gap-2">
          {[0, 1, 2, 3].map((idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onSelect(idx)}
              className={`h-8 rounded-lg text-xs font-mono font-medium transition-colors ${
                activeIndex === idx
                  ? 'bg-primary text-primary-ink'
                  : 'bg-surface text-muted hover:text-foreground border border-rule'
              }`}
            >
              0{idx + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 4. ACOUSTIC SONAR COMPASS DISH (Section 6: Direct Engineering FAQ)         */
/*    Geometry: Concentric Sonar Ripple Circles + Crosshair Axis              */
/* -------------------------------------------------------------------------- */
export function SlaTransceiverFigure({ isEn = false }: { isEn?: boolean }) {
  return (
    <div className="w-full rounded-2xl bg-background border border-rule p-5 space-y-4">
      <div className="flex items-center justify-between border-b border-rule pb-3">
        <span className="text-xs font-medium text-primary">
          {isEn ? 'Direct Engineering Radar' : 'Radar de soporte e ingeniería'}
        </span>
        <span className="text-xs font-mono text-foreground">SLA 99.9%</span>
      </div>

      {/* Circular Sonar Radar */}
      <div className="relative h-[180px] w-full rounded-xl bg-surface border border-rule flex items-center justify-center overflow-hidden">
        {/* Crosshair Axes */}
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-rule" />
        <div className="absolute inset-y-0 left-1/2 w-[1px] bg-rule" />

        {/* Concentric Sonar Rings */}
        <div className="w-40 h-40 rounded-full border border-rule flex items-center justify-center">
          <div className="w-28 h-28 rounded-full border border-dashed border-accent flex items-center justify-center">
            <div
              className="w-16 h-16 rounded-full border border-primary flex flex-col items-center justify-center text-center"
              style={{
                background: 'var(--cube-top)',
                boxShadow: '0 0 24px var(--cube-top)',
              }}
            >
              <span className="text-[10px] font-mono font-semibold text-primary">&lt; 5m</span>
              <span className="text-[10px] font-medium text-foreground">Directo</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
        <div className="p-2.5 rounded-lg bg-surface border border-rule">
          <span className="text-muted block text-[11px]">
            {isEn ? 'Diagnostic cost' : 'Costo de diagnóstico'}
          </span>
          <span className="font-semibold text-foreground">
            {isEn ? '$0 USD (Free)' : '$0 USD (Sin costo)'}
          </span>
        </div>
        <div className="p-2.5 rounded-lg bg-surface border border-rule">
          <span className="text-muted block text-[11px]">
            {isEn ? 'Delivery warranty' : 'Garantía técnica'}
          </span>
          <span className="font-semibold text-foreground">
            {isEn ? 'Closed contract' : 'Alcance cerrado'}
          </span>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 5. 4-STAGE ARCHITECTURAL STEPPED HELIX (Methodology: Del Caos al Orden)    */
/* -------------------------------------------------------------------------- */
export function MethodologyHelixFigure({
  activeStep = 0,
  onSelectStep,
  isEn = false,
}: {
  activeStep: number;
  onSelectStep?: (idx: number) => void;
  isEn?: boolean;
}) {
  const steps = isEn
    ? [
        { num: '01', name: 'Discovery & Bottleneck Audit', kpi: 'Day 1–3' },
        { num: '02', name: 'Closed Scope & ROI Blueprint', kpi: 'Day 4–5' },
        { num: '03', name: 'Engineering & API Deployment', kpi: 'Week 2–4' },
        { num: '04', name: '24/7 Monitoring & Optimization', kpi: 'Continuous' },
      ]
    : [
        { num: '01', name: 'Diagnóstico de cuellos de botella', kpi: 'Día 1–3' },
        { num: '02', name: 'Propuesta y alcance cerrado', kpi: 'Día 4–5' },
        { num: '03', name: 'Desarrollo e integración API', kpi: 'Semana 2–4' },
        { num: '04', name: 'Monitoreo y optimización 24/7', kpi: 'Continuo' },
      ];

  const current = steps[activeStep] || steps[0];

  return (
    <div className="w-full rounded-2xl bg-background border border-rule p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between border-b border-rule pb-3">
        <div>
          <span className="text-xs font-mono text-primary block">
            {isEn ? `PHASE ${current.num} / 04` : `FASE ${current.num} / 04`}
          </span>
          <span className="text-sm font-semibold text-foreground">{current.name}</span>
        </div>
        <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-surface border border-rule text-primary">
          {current.kpi}
        </span>
      </div>

      {/* 3D Stepped Diamond / Concentric Pyramid Stage */}
      <div className="iso-stage-box relative h-[220px] w-full rounded-xl bg-surface border border-rule overflow-hidden">
        <div
          className="relative w-[190px] h-[190px] transition-transform duration-500"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(58deg) rotateZ(${-45 + activeStep * 15}deg)`,
          }}
        >
          {[0, 1, 2, 3].map((idx) => {
            const isActive = activeStep === idx;
            const size = 180 - idx * 32;
            const offset = (190 - size) / 2;
            const z = idx * 22 - 20;
            return (
              <div
                key={idx}
                onClick={() => onSelectStep?.(idx)}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${offset}px`,
                  top: `${offset}px`,
                  transform: `translateZ(${isActive ? z + 12 : z}px)`,
                  background: isActive ? 'var(--cube-top)' : 'var(--cube-mid)',
                  borderColor: isActive ? 'var(--primary)' : 'var(--rule-strong)',
                  boxShadow: isActive
                    ? '0 16px 32px rgba(0,0,0,0.55), 0 0 20px var(--cube-top)'
                    : '0 8px 18px rgba(0,0,0,0.35)',
                }}
                className="absolute rounded-2xl border-[1.5px] transition-all duration-500 cursor-pointer flex items-end justify-between p-2.5"
              >
                <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-background/90 border border-rule text-foreground">
                  0{idx + 1}
                </span>
                {isActive && (
                  <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {steps.map((s, idx) => (
          <button
            key={s.num}
            type="button"
            onClick={() => onSelectStep?.(idx)}
            className={`h-8 rounded-lg text-xs font-mono font-medium transition-colors ${
              activeStep === idx
                ? 'bg-primary text-primary-ink'
                : 'bg-surface text-muted hover:text-foreground border border-rule'
            }`}
          >
            {s.num}
          </button>
        ))}
      </div>
    </div>
  );
}
