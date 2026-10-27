'use client';

import React, { useState } from 'react';

interface HeroIsometricGraphicProps {
  isEn?: boolean;
}

export default function HeroIsometricGraphic({ isEn = false }: HeroIsometricGraphicProps) {
  const [activeLayer, setActiveLayer] = useState<0 | 1 | 2>(0);

  const layers = isEn
    ? [
        {
          index: '01',
          shortLabel: '01 / Web & SEO',
          cubeLabel: '01 / Web & SEO',
          title: 'High-performance Next.js & technical SEO',
          spec: 'Edge SSR · Schema.org JSON-LD · Bilingual hreflang',
          metricLabel: 'Load latency (LCP)',
          metricValue: '0.6s',
        },
        {
          index: '02',
          shortLabel: '02 / 24/7 AI Agents',
          cubeLabel: '02 / 24/7 AI Agents',
          title: 'Conversational AI sales & booking agents',
          spec: 'WhatsApp Cloud API · OpenAI RAG · Audio & Vision',
          metricLabel: 'First response time',
          metricValue: '1.1s',
        },
        {
          index: '03',
          shortLabel: '03 / Automation',
          cubeLabel: '03 / Automation',
          title: 'Autonomous CRM, billing & ERP workflows',
          spec: 'n8n · REST Webhooks · HubSpot · Stripe · SQL',
          metricLabel: 'Pipeline execution',
          metricValue: '420ms',
        },
      ]
    : [
        {
          index: '01',
          shortLabel: '01 / Web y SEO',
          cubeLabel: '01 / Web y SEO',
          title: 'Plataformas Next.js y posicionamiento SEO',
          spec: 'Renderizado Edge · Schema.org JSON-LD · GEO/AEO',
          metricLabel: 'Velocidad de carga (LCP)',
          metricValue: '0.6s',
        },
        {
          index: '02',
          shortLabel: '02 / Agentes IA 24/7',
          cubeLabel: '02 / Agentes IA 24/7',
          title: 'Calificación y agendamiento en WhatsApp',
          spec: 'WhatsApp Cloud API · OpenAI RAG · Audio y Visión',
          metricLabel: 'Tiempo de respuesta',
          metricValue: '1.1s',
        },
        {
          index: '03',
          shortLabel: '03 / Automatización',
          cubeLabel: '03 / Automatización',
          title: 'Orquestación autónoma de CRM y facturación',
          spec: 'n8n · Webhooks · HubSpot · Contabilidad · SQL',
          metricLabel: 'Sincronización de datos',
          metricValue: '420ms',
        },
      ];

  const current = layers[activeLayer];

  return (
    <div className="w-full rounded-2xl bg-surface border border-rule p-5 sm:p-7 flex flex-col justify-between gap-6">
      {/* Stage Header: Active Layer Title & Live Metric */}
      <div className="flex items-start justify-between gap-4 pb-4 border-b border-rule">
        <div className="space-y-1 min-w-0">
          <p className="text-xs text-primary font-medium">
            {isEn ? `Architecture layer ${current.index}` : `Capa de arquitectura ${current.index}`}
          </p>
          <h2 className="text-base sm:text-lg font-semibold text-foreground leading-snug">
            {current.title}
          </h2>
        </div>
        <div className="text-right shrink-0 pl-3 border-l border-rule">
          <p className="text-[11px] text-muted">{current.metricLabel}</p>
          <p className="text-xl sm:text-2xl font-semibold text-primary tabular-nums">
            {current.metricValue}
          </p>
        </div>
      </div>

      {/* Center Stage: Interactive 3D Isometric Cube (iso-stack) */}
      <div className="relative w-full h-[270px] sm:h-[300px] rounded-xl bg-background border border-rule flex items-center justify-center overflow-hidden">
        <div
          className="iso-scene"
          aria-label={
            isEn
              ? 'Interactive 3D three-layer architecture stack'
              : 'Arquitectura 3D interactiva de tres capas'
          }
        >
          <div className="iso-stack" data-active-layer={activeLayer}>
            {/* Layer 1: Top — Web & SEO */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => setActiveLayer(0)}
              onMouseEnter={() => setActiveLayer(0)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveLayer(0);
                }
              }}
              className="iso-layer iso-layer-1"
            >
              <div className="iso-grid">
                <span className="text-[11px] font-mono text-primary font-semibold px-2 py-0.5 rounded bg-background/80 border border-rule">
                  98 / 100 CWV
                </span>
              </div>
              <span className="iso-label">{layers[0].cubeLabel}</span>
            </div>

            {/* Layer 2: Middle — 24/7 AI Agents */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => setActiveLayer(1)}
              onMouseEnter={() => setActiveLayer(1)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveLayer(1);
                }
              }}
              className="iso-layer iso-layer-2"
            >
              <div className="iso-core" />
              <span className="iso-label">{layers[1].cubeLabel}</span>
            </div>

            {/* Layer 3: Bottom — Process Automation */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => setActiveLayer(2)}
              onMouseEnter={() => setActiveLayer(2)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveLayer(2);
                }
              }}
              className="iso-layer iso-layer-3"
            >
              <div className="iso-bars">
                <span style={{ height: '45%' }} />
                <span style={{ height: '75%' }} />
                <span style={{ height: '60%' }} />
                <span style={{ height: '95%' }} />
              </div>
              <span className="iso-label">{layers[2].cubeLabel}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stage Footer: Layer Controls & Stack Specification */}
      <div className="space-y-3 pt-1">
        <div
          role="tablist"
          aria-label={isEn ? 'Select architecture layer' : 'Seleccionar capa de arquitectura'}
          className="grid grid-cols-3 gap-2"
        >
          {layers.map((layer, idx) => {
            const isSelected = activeLayer === idx;
            return (
              <button
                key={layer.index}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveLayer(idx as 0 | 1 | 2)}
                className={`h-9 px-2.5 rounded-lg text-xs font-medium transition-colors truncate ${
                  isSelected
                    ? 'bg-primary text-primary-ink'
                    : 'bg-background text-muted hover:text-foreground border border-rule'
                }`}
              >
                {layer.shortLabel}
              </button>
            );
          })}
        </div>

        <p className="text-xs font-mono text-subtle truncate">{current.spec}</p>
      </div>
    </div>
  );
}
