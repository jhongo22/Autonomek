'use client';

import React, { useState, useEffect } from 'react';
import { Palette, ChevronLeft, ChevronRight, Check, X } from 'lucide-react';

export interface PaletteOption {
  id: 'p1' | 'p2' | 'p3' | 'p4' | 'p5';
  name: string;
  subtitle: string;
  colors: {
    bg: string;
    fg: string;
    primary: string;
    secondary: string;
    accent: string;
  };
}

export const PALETTES: PaletteOption[] = [
  {
    id: 'p1',
    name: '01 · Salvia & Lavanda',
    subtitle: 'Botanical Slate',
    colors: {
      bg: '#060b09',
      fg: '#e9f3ee',
      primary: '#add1bf',
      secondary: '#3f5670',
      accent: '#7982b3',
    },
  },
  {
    id: 'p2',
    name: '02 · Glaciar & Terracota',
    subtitle: 'Abyssal Glacier',
    colors: {
      bg: '#0b1619',
      fg: '#e8f1f5',
      primary: '#98c4d2',
      secondary: '#7a4436',
      accent: '#a0b557',
    },
  },
  {
    id: 'p3',
    name: '03 · Mineral & Jade',
    subtitle: 'Mineral Forest',
    colors: {
      bg: '#050706',
      fg: '#e8e9e9',
      primary: '#a4cebb',
      secondary: '#2c7052',
      accent: '#55d099',
    },
  },
  {
    id: 'p4',
    name: '04 · Bosque & Petróleo',
    subtitle: 'Forest & Fjord',
    colors: {
      bg: '#070d0a',
      fg: '#e7f3ed',
      primary: '#a5d0b9',
      secondary: '#366367',
      accent: '#73a2b6',
    },
  },
  {
    id: 'p5',
    name: '05 · Espresso & Malva',
    subtitle: 'Obsidian Mauve',
    colors: {
      bg: '#0c0709',
      fg: '#f1e9ec',
      primary: '#c9acb6',
      secondary: '#3e5f3f',
      accent: '#77a7a2',
    },
  },
];

export default function PaletteSwitcher() {
  const [activeId, setActiveId] = useState<PaletteOption['id']>('p4');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('autonomek_palette') as PaletteOption['id'] | null;
    if (saved && PALETTES.some((p) => p.id === saved)) {
      setActiveId(saved);
      document.documentElement.setAttribute('data-palette', saved);
    } else {
      document.documentElement.setAttribute('data-palette', 'p4');
    }
  }, []);

  const applyPalette = (id: PaletteOption['id']) => {
    setActiveId(id);
    document.documentElement.setAttribute('data-palette', id);
    localStorage.setItem('autonomek_palette', id);
  };

  const cyclePalette = (dir: -1 | 1) => {
    const currentIndex = PALETTES.findIndex((p) => p.id === activeId);
    const nextIndex = (currentIndex + dir + PALETTES.length) % PALETTES.length;
    applyPalette(PALETTES[nextIndex].id);
  };

  const currentPalette = PALETTES.find((p) => p.id === activeId) || PALETTES[3];

  return (
    <div className="fixed bottom-5 left-4 md:left-6 z-[300] font-sans">
      {/* Expanded Drawer */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Selector de paleta de colores"
          className="mb-3 w-[290px] sm:w-[320px] rounded-2xl bg-surface border border-rule p-3.5 shadow-2xl"
        >
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-rule">
            <span className="text-xs font-medium text-foreground">
              Selector de Tema (5 Paletas)
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 text-muted hover:text-foreground rounded-lg transition-colors"
              aria-label="Cerrar selector de tema"
            >
              <X size={15} />
            </button>
          </div>

          <div className="space-y-1.5">
            {PALETTES.map((palette) => {
              const isSelected = palette.id === activeId;
              return (
                <button
                  key={palette.id}
                  type="button"
                  onClick={() => applyPalette(palette.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-colors border ${
                    isSelected
                      ? 'bg-card border-rule-strong text-foreground'
                      : 'bg-transparent border-transparent hover:bg-card/60 text-muted hover:text-foreground'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="flex items-center -space-x-1 shrink-0">
                      <span
                        className="w-4 h-4 rounded-full border border-white/20"
                        style={{ backgroundColor: palette.colors.bg }}
                      />
                      <span
                        className="w-4 h-4 rounded-full border border-black/40"
                        style={{ backgroundColor: palette.colors.primary }}
                      />
                      <span
                        className="w-4 h-4 rounded-full border border-black/40"
                        style={{ backgroundColor: palette.colors.secondary }}
                      />
                      <span
                        className="w-4 h-4 rounded-full border border-black/40"
                        style={{ backgroundColor: palette.colors.accent }}
                      />
                    </div>
                    <div className="truncate">
                      <p className="text-xs font-medium text-foreground leading-tight truncate">
                        {palette.name}
                      </p>
                      <p className="text-[11px] text-muted leading-tight">
                        {palette.subtitle}
                      </p>
                    </div>
                  </div>
                  {isSelected && <Check size={14} className="text-primary shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Compact Control Pill (Visible on Mobile & Desktop) */}
      <div className="inline-flex items-center rounded-full bg-surface/95 backdrop-blur-md border border-rule shadow-xl p-1">
        <button
          type="button"
          onClick={() => cyclePalette(-1)}
          className="w-8 h-8 rounded-full flex items-center justify-center text-muted hover:text-foreground hover:bg-card transition-colors"
          aria-label="Paleta anterior"
        >
          <ChevronLeft size={15} />
        </button>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center gap-2 px-2.5 py-1.5 rounded-full hover:bg-card transition-colors"
          aria-expanded={isOpen}
        >
          <Palette size={14} className="text-primary shrink-0" />
          <div className="flex items-center -space-x-1">
            <span
              className="w-3 h-3 rounded-full border border-black/40"
              style={{ backgroundColor: currentPalette.colors.primary }}
            />
            <span
              className="w-3 h-3 rounded-full border border-black/40"
              style={{ backgroundColor: currentPalette.colors.secondary }}
            />
            <span
              className="w-3 h-3 rounded-full border border-black/40"
              style={{ backgroundColor: currentPalette.colors.accent }}
            />
          </div>
          <span className="text-xs font-medium text-foreground whitespace-nowrap">
            {currentPalette.name.split(' · ')[0]} · Tema
          </span>
        </button>

        <button
          type="button"
          onClick={() => cyclePalette(1)}
          className="w-8 h-8 rounded-full flex items-center justify-center text-muted hover:text-foreground hover:bg-card transition-colors"
          aria-label="Siguiente paleta"
        >
          <ChevronRight size={15} />
        </button>
      </div>
    </div>
  );
}

