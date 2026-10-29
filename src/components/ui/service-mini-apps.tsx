'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Bell,
  Bot,
  Calendar,
  Check,
  CheckCheck,
  FileCheck,
  FileText,
  Gauge as GaugeIcon,
  Globe,
  LayoutDashboard,
  Lock,
  MessageCircle,
  Mic,
  Package,
  Play,
  Plus,
  Receipt,
  RotateCw,
  Search,
  Settings,
  Users,
  Database,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Service Mini Apps: 4 interactive live miniature apps (dashboard, website  */
/*  + PageSpeed audit, WhatsApp AI agent + CRM, automation canvas). Fully     */
/*  responsive: desktop preserves side-by-side split; mobile adapts seamlessly */
/* -------------------------------------------------------------------------- */

interface MiniAppProps {
  id: string;
  isEn?: boolean;
}

const mix = (token: string, pct: number) =>
  `color-mix(in srgb, var(--${token}) ${pct}%, transparent)`;

/** Runs intervals only while the app is visible on screen. */
function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.25,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, inView] as const;
}

/* ------------------------------ window chrome ----------------------------- */

function AppWindow({
  address,
  icon,
  right,
  children,
  innerRef,
}: {
  address: string;
  icon?: React.ReactNode;
  right?: React.ReactNode;
  children: React.ReactNode;
  innerRef?: React.Ref<HTMLDivElement>;
}) {
  return (
    <div
      ref={innerRef}
      className="relative w-full overflow-hidden rounded-2xl border border-rule-strong bg-background shadow-2xl shadow-black/30 select-none"
    >
      <div className="flex items-center gap-2 sm:gap-3 border-b border-rule bg-card px-2.5 sm:px-3 py-2">
        <div className="flex shrink-0 items-center gap-1 sm:gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full" style={{ background: '#ff5f57' }} />
          <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full" style={{ background: '#febc2e' }} />
          <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full" style={{ background: '#28c840' }} />
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-md border border-rule bg-background px-2 sm:px-2.5 py-1 text-[9px] sm:text-[10px] font-mono text-muted">
          {icon}
          <span className="truncate">{address}</span>
        </div>
        {right && <div className="shrink-0">{right}</div>}
      </div>
      <div className="relative h-[295px] sm:h-[305px]">{children}</div>
    </div>
  );
}

const LivePill = ({ label }: { label: string }) => (
  <span
    className="inline-flex items-center gap-1 rounded-full px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold text-primary"
    style={{ background: mix('primary', 14) }}
  >
    <span className="relative flex h-1.5 w-1.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
    </span>
    <span className="truncate">{label}</span>
  </span>
);

/* ========================================================================== */
/* 01. SOFTWARE A MEDIDA: admin dashboard with sidebar, KPIs, chart and table */
/* ========================================================================== */
function SoftwareDashboardApp({ isEn = false }: { isEn?: boolean }) {
  const [tab, setTab] = useState(0);
  const [boost, setBoost] = useState(0);
  const [hover, setHover] = useState<number | null>(null);

  const days = isEn ? ['M', 'T', 'W', 'T', 'F', 'S', 'S'] : ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  const views = [
    {
      nav: isEn ? 'Bookings' : 'Reservas',
      icon: Calendar,
      bars: [18, 24, 21, 30, 27, 34, 28],
      unit: isEn ? 'bookings' : 'reservas',
      kpis: [
        { label: isEn ? 'Today' : 'Hoy', value: `${28 + boost}`, delta: '+18%' },
        { label: isEn ? 'Occupancy' : 'Ocupación', value: `${Math.min(99, 86 + boost * 2)}%`, delta: '+6%' },
        { label: isEn ? 'Licenses' : 'Licencias', value: '$0', delta: isEn ? 'yours' : 'tuyo' },
      ],
      rows: isEn
        ? [
            { code: 'RS-410', name: 'Corporate suite · 4 days', status: 'Confirmed' },
            { code: 'RS-409', name: 'Equipment rental · Bogotá', status: 'In progress' },
          ]
        : [
            { code: 'RS-410', name: 'Reserva corporativa · 4 días', status: 'Confirmada' },
            { code: 'RS-409', name: 'Alquiler equipos · Medellín', status: 'En curso' },
          ],
    },
    {
      nav: isEn ? 'Inventory' : 'Inventario',
      icon: Package,
      bars: [120, 138, 131, 152, 149, 160, 142],
      unit: isEn ? 'units' : 'unidades',
      kpis: [
        { label: isEn ? 'Dispatched' : 'Despachos', value: `${142 + boost * 3}`, delta: '+24%' },
        { label: isEn ? 'Alerts' : 'Alertas', value: '0', delta: isEn ? 'ok' : 'ok' },
        { label: isEn ? 'Warehouses' : 'Bodegas', value: '4/4', delta: '0.2s' },
      ],
      rows: isEn
        ? [
            { code: 'IN-883', name: 'Wholesale order · validated', status: 'Dispatched' },
            { code: 'IN-882', name: 'Main catalog · 320 units', status: 'Synced' },
          ]
        : [
            { code: 'IN-883', name: 'Pedido mayorista · validado', status: 'Despachado' },
            { code: 'IN-882', name: 'Catálogo principal · 320 uds', status: 'Sincronizado' },
          ],
    },
    {
      nav: isEn ? 'Clients' : 'Clientes',
      icon: Users,
      bars: [8, 11, 9, 14, 13, 17, 15],
      unit: isEn ? 'new clients' : 'clientes nuevos',
      kpis: [
        { label: isEn ? 'Users' : 'Usuarios', value: `${64 + boost * 2}`, delta: isEn ? 'no limit' : 'sin límite' },
        { label: isEn ? 'Orders' : 'Pedidos', value: `$${(12.4 + boost * 0.6).toFixed(1)}k`, delta: '+31%' },
        { label: isEn ? 'Per seat' : 'Por usuario', value: '$0', delta: isEn ? 'owned' : 'propio' },
      ],
      rows: [
        { code: 'VIP-02', name: 'Clínica Especializada Sur', status: isEn ? 'Active portal' : 'Portal activo' },
        { code: 'VIP-01', name: 'Grupo Empresarial Andino', status: isEn ? 'Self-service' : 'Autogestión' },
      ],
    },
  ];

  const v = views[tab];
  const bars = v.bars.map((b, i) => (i === v.bars.length - 1 ? b + boost * Math.max(1, Math.round(b / 12)) : b));
  const max = Math.max(...bars) * 1.1;

  return (
    <AppWindow
      address="app.tuempresa.com/panel"
      icon={<Lock size={9} className="shrink-0 text-primary" />}
    >
      <div className="flex h-full">
        {/* Sidebar */}
        <aside className="flex w-9 sm:w-11 shrink-0 flex-col items-center gap-1.5 border-r border-rule bg-card py-2.5 sm:py-3">
          <span className="mb-1 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg bg-primary text-[10px] sm:text-[11px] font-bold text-primary-ink">
            A
          </span>
          {views.map((item, i) => {
            const Icon = item.icon;
            const active = tab === i;
            return (
              <button
                key={item.nav}
                type="button"
                title={item.nav}
                aria-label={item.nav}
                onClick={() => setTab(i)}
                className={`flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg transition-colors ${
                  active ? 'text-primary' : 'text-muted hover:text-foreground'
                }`}
                style={active ? { background: mix('primary', 16) } : undefined}
              >
                <Icon size={13} className="sm:size-[14px]" />
              </button>
            );
          })}
          <span className="mt-auto flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center text-muted">
            <Settings size={12} className="sm:size-[13px]" />
          </span>
        </aside>

        {/* Main */}
        <div className="flex min-w-0 flex-1 flex-col gap-2 sm:gap-2.5 p-2 sm:p-3">
          <div className="flex items-center justify-between gap-1.5 sm:gap-2">
            <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
              <LayoutDashboard size={12} className="shrink-0 text-primary sm:size-[13px]" />
              <span className="truncate text-[11px] sm:text-xs font-semibold text-foreground">{v.nav}</span>
              <LivePill label={isEn ? 'Live' : 'En vivo'} />
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="hidden h-6 w-6 items-center justify-center rounded-md border border-rule text-muted sm:flex">
                <Bell size={11} />
              </span>
              <button
                type="button"
                onClick={() => setBoost((b) => b + 1)}
                className="inline-flex items-center gap-1 rounded-md bg-primary px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-semibold text-primary-ink transition-opacity hover:opacity-90"
              >
                <Plus size={10} />
                <span>{isEn ? 'New' : 'Nuevo'}</span>
              </button>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            {v.kpis.map((k) => (
              <div key={k.label} className="rounded-lg border border-rule bg-surface p-1.5 sm:px-2 sm:py-1.5">
                <p className="truncate text-[8px] sm:text-[9px] uppercase tracking-wider text-muted">{k.label}</p>
                <div className="mt-0.5 flex items-baseline justify-between gap-0.5 sm:gap-1">
                  <span className="font-mono text-xs sm:text-sm font-semibold text-foreground truncate">{k.value}</span>
                  <span className="truncate text-[8px] sm:text-[9px] font-semibold text-primary">{k.delta}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="flex min-h-0 flex-1 flex-col rounded-lg border border-rule bg-surface px-2 sm:px-2.5 pb-1 sm:pb-1.5 pt-1.5 sm:pt-2">
            <div className="flex items-center justify-between text-[8px] sm:text-[9px] text-muted">
              <span>{isEn ? 'Last 7 days' : 'Últimos 7 días'}</span>
              <span className="font-mono text-foreground truncate">
                {hover !== null ? `${bars[hover]} ${v.unit}` : `${bars.reduce((a, b) => a + b, 0)} ${v.unit}`}
              </span>
            </div>
            <div className="mt-1 flex min-h-0 flex-1 items-end gap-1 sm:gap-1.5">
              {bars.map((b, i) => {
                const isLast = i === bars.length - 1;
                const active = hover === i || (hover === null && isLast);
                return (
                  <div
                    key={i}
                    className="flex h-full flex-1 flex-col items-center justify-end gap-0.5 sm:gap-1"
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(null)}
                  >
                    <div
                      className="w-full rounded-[3px] sm:rounded-[4px] transition-all duration-500 ease-out"
                      style={{
                        height: `${Math.max(12, (b / max) * 100)}%`,
                        background: active ? 'var(--primary)' : mix('primary', 28),
                      }}
                    />
                    <span className="text-[7.5px] sm:text-[8px] leading-none text-muted">{days[i]}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Table */}
          <div className="space-y-1">
            {v.rows.map((r) => (
              <div
                key={r.code}
                className="flex items-center justify-between gap-1.5 sm:gap-2 rounded-md border border-rule bg-card px-1.5 sm:px-2 py-0.5 sm:py-1"
              >
                <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
                  <span className="font-mono text-[8.5px] sm:text-[9px] text-primary">{r.code}</span>
                  <span className="truncate text-[9px] sm:text-[10px] text-foreground">{r.name}</span>
                </div>
                <span
                  className="shrink-0 rounded-full px-1.5 py-px text-[8px] sm:text-[9px] font-semibold text-primary"
                  style={{ background: mix('primary', 14) }}
                >
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppWindow>
  );
}

/* ========================================================================== */
/* 02. SITIOS WEB: live website preview + PageSpeed gauges + Google result    */
/* ========================================================================== */
function GaugeCircle({ score, label, run }: { score: number; label: string; run: number }) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    setShown(0);
    const t = setTimeout(() => setShown(score), 120);
    return () => clearTimeout(t);
  }, [score, run]);
  const c = 2 * Math.PI * 15;
  return (
    <div className="flex flex-col items-center gap-0.5 sm:gap-1">
      <div className="relative h-10 w-10 sm:h-11 sm:w-11">
        <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
          <circle cx="18" cy="18" r="15" fill="none" stroke="var(--rule)" strokeWidth="3" />
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="#28c840"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={c - (c * shown) / 100}
            style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(.2,.9,.25,1)' }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-mono text-[10px] sm:text-[11px] font-bold" style={{ color: '#28c840' }}>
          {shown === 0 ? '–' : score}
        </span>
      </div>
      <span className="text-center text-[8px] sm:text-[8.5px] leading-tight text-muted">{label}</span>
    </div>
  );
}

function WebsiteSeoApp({ isEn = false }: { isEn?: boolean }) {
  const [run, setRun] = useState(0);
  const [q, setQ] = useState(0);
  const [mobileTab, setMobileTab] = useState<'web' | 'audit'>('web');

  const queries = isEn
    ? ['custom software agency', 'booking system for clinics', 'fast website for my business']
    : ['software a medida colombia', 'sistema de reservas clínica', 'página web rápida empresa'];

  const gauges = isEn
    ? [
        { s: 99, l: 'Performance' },
        { s: 100, l: 'Accessibility' },
        { s: 100, l: 'Best practices' },
        { s: 100, l: 'SEO' },
      ]
    : [
        { s: 99, l: 'Rendimiento' },
        { s: 100, l: 'Accesibilidad' },
        { s: 100, l: 'Prácticas' },
        { s: 100, l: 'SEO' },
      ];

  return (
    <AppWindow
      address="tuempresa.com"
      icon={<Lock size={9} className="shrink-0 text-primary" />}
      right={
        <div className="flex items-center gap-1.5">
          {/* Mobile switcher: Web vs PageSpeed (hidden on desktop) */}
          <div className="flex items-center gap-0.5 rounded-md bg-surface p-0.5 border border-rule sm:hidden">
            <button
              type="button"
              onClick={() => setMobileTab('web')}
              className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[9px] font-medium transition-colors ${
                mobileTab === 'web'
                  ? 'bg-primary text-primary-ink shadow-sm'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              <Globe size={9} />
              <span>Web</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileTab('audit')}
              className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[9px] font-medium transition-colors ${
                mobileTab === 'audit'
                  ? 'bg-primary text-primary-ink shadow-sm'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              <GaugeIcon size={9} />
              <span>99</span>
            </button>
          </div>

          {/* Analyze button (visible on desktop and in mobile audit tab) */}
          <button
            type="button"
            onClick={() => {
              setRun((r) => r + 1);
              setQ((x) => (x + 1) % queries.length);
            }}
            className="inline-flex items-center gap-1 rounded-md border border-rule bg-background px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-semibold text-foreground transition-colors hover:border-primary"
          >
            <RotateCw size={10} />
            <span className="hidden sm:inline">{isEn ? 'Analyze' : 'Analizar'}</span>
          </button>
        </div>
      }
    >
      {/* Desktop: side-by-side grid. Mobile: selected tab view */}
      <div className="h-full sm:grid sm:grid-cols-[1.25fr_1fr]">
        {/* Left: Website preview (always visible on desktop, tab-controlled on mobile) */}
        <div
          className={`relative min-w-0 flex-col overflow-hidden p-2.5 sm:p-3 h-full ${
            mobileTab === 'web' ? 'flex' : 'hidden sm:flex'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span className="h-3.5 w-3.5 rounded bg-primary" />
              <span className="text-[10px] font-semibold text-foreground">Tu Empresa</span>
            </span>
            <span className="hidden gap-2 sm:flex">
              {[0, 1, 2].map((i) => (
                <span key={i} className="h-1.5 w-6 rounded-full bg-rule-strong" />
              ))}
            </span>
          </div>

          <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
            <span
              className="inline-block rounded-full px-2 py-0.5 text-[8.5px] font-semibold text-primary"
              style={{ background: mix('primary', 14) }}
            >
              {isEn ? 'Loads in 0.6s' : 'Carga en 0.6s'}
            </span>
            <p className="text-[13px] sm:text-[15px] font-semibold leading-tight tracking-tight text-foreground">
              {isEn ? 'Solutions that grow your business' : 'Soluciones que hacen crecer tu negocio'}
            </p>
            <div className="space-y-1">
              <span className="block h-1.5 w-11/12 rounded-full bg-rule-strong" />
              <span className="block h-1.5 w-8/12 rounded-full bg-rule-strong" />
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="rounded-full bg-primary px-2.5 py-1 text-[9px] font-semibold text-primary-ink">
                {isEn ? 'Quote on WhatsApp' : 'Cotizar por WhatsApp'}
              </span>
              <span className="hidden rounded-full border border-rule px-2.5 py-1 text-[9px] text-foreground sm:inline">
                {isEn ? 'Catalog' : 'Catálogo'}
              </span>
            </div>
          </div>

          <div className="mt-auto grid grid-cols-3 gap-1.5">
            {[22, 34, 16].map((p, i) => (
              <div key={i} className="rounded-md border border-rule bg-surface p-1">
                <div className="h-7 sm:h-8 rounded" style={{ background: mix('primary', p) }} />
                <span className="mt-1 block h-1 w-3/4 rounded-full bg-rule-strong" />
              </div>
            ))}
          </div>

          <span
            className="absolute bottom-12 sm:bottom-14 right-3 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full text-white shadow-lg"
            style={{ background: '#25d366' }}
          >
            <MessageCircle size={12} className="sm:size-[13px]" />
          </span>
        </div>

        {/* Right: PageSpeed panel (always visible on desktop, tab-controlled on mobile) */}
        <div
          className={`min-w-0 flex-col gap-2 sm:gap-2.5 bg-card p-2.5 sm:p-2.5 h-full sm:border-l border-rule ${
            mobileTab === 'audit' ? 'flex' : 'hidden sm:flex'
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="text-[8.5px] sm:text-[9px] font-semibold uppercase tracking-wider text-muted">PageSpeed Audit</p>
            <LivePill label="0.6s LCP" />
          </div>

          <div className="grid grid-cols-2 gap-x-1 gap-y-1.5 sm:gap-y-2">
            {gauges.map((g) => (
              <GaugeCircle key={g.l} score={g.s} label={g.l} run={run} />
            ))}
          </div>

          <div className="mt-auto rounded-lg border border-rule bg-background p-2">
            <div className="flex items-center gap-1 rounded-full border border-rule px-1.5 py-0.5">
              <Search size={8} className="shrink-0 text-muted" />
              <span key={q} className="truncate text-[8px] sm:text-[8.5px] text-foreground">
                {queries[q]}
              </span>
            </div>
            <div className="mt-1.5 flex items-center gap-1">
              <span className="rounded bg-primary px-1 font-mono text-[7.5px] sm:text-[8px] font-bold text-primary-ink">#1</span>
              <span className="truncate text-[8.5px] sm:text-[9px] font-semibold text-primary">Tu Empresa — Sitio oficial</span>
            </div>
            <p className="mt-0.5 truncate text-[8px] sm:text-[8.5px] text-muted">
              {isEn ? 'Also cited by ChatGPT & Perplexity' : 'También citado por ChatGPT y Perplexity'}
            </p>
          </div>
        </div>
      </div>
    </AppWindow>
  );
}

/* ========================================================================== */
/* 03. AGENTE IA WHATSAPP: animated chat + CRM lead card filling in real time */
/* ========================================================================== */
type Msg = { from: 'user' | 'bot'; text: string; kind?: 'audio' | 'image' };

function WhatsAppAgentApp({ isEn = false }: { isEn?: boolean }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [scenario, setScenario] = useState(0);
  const [step, setStep] = useState(1);
  const [mobileTab, setMobileTab] = useState<'chat' | 'crm'>('chat');

  const scenarios: { tab: string; icon: typeof Mic; msgs: Msg[]; crm: { k: string; v: string; at: number }[]; stage: string }[] = isEn
    ? [
        {
          tab: 'Voice',
          icon: Mic,
          msgs: [
            { from: 'user', text: '0:12', kind: 'audio' },
            { from: 'bot', text: 'Hi Laura! Yes, we have a spot tomorrow. 10:00 AM works?' },
            { from: 'user', text: 'Perfect, book me in 🙌' },
            { from: 'bot', text: 'Done ✅ Tomorrow 10:00 AM. Reminder sent.' },
          ],
          crm: [
            { k: 'Name', v: 'Laura M.', at: 1 },
            { k: 'Interest', v: 'Consultation', at: 2 },
            { k: 'Booking', v: 'Tomorrow 10:00', at: 4 },
          ],
          stage: 'Booked',
        },
        {
          tab: 'Quote',
          icon: FileText,
          msgs: [
            { from: 'user', text: 'Price for 10 units of the Pro plan?' },
            { from: 'bot', text: '10 units = $4,200 with 15% corporate discount.' },
            { from: 'user', text: 'Send it to me, please' },
            { from: 'bot', text: 'Quote #Q-218 sent as PDF 📄' },
          ],
          crm: [
            { k: 'Name', v: 'Andrés P.', at: 1 },
            { k: 'Interest', v: 'Pro plan x10', at: 2 },
            { k: 'Quote', v: '$4,200', at: 4 },
          ],
          stage: 'Quoted',
        },
        {
          tab: 'Payment',
          icon: Receipt,
          msgs: [
            { from: 'user', text: 'Transfer_receipt.jpg', kind: 'image' },
            { from: 'bot', text: 'Payment of $480 verified ✅' },
            { from: 'user', text: 'When does it ship?' },
            { from: 'bot', text: 'Order #409 ships today. Tracking sent.' },
          ],
          crm: [
            { k: 'Name', v: 'Camila R.', at: 1 },
            { k: 'Payment', v: '$480 ✓', at: 2 },
            { k: 'Order', v: '#409 shipped', at: 4 },
          ],
          stage: 'Paid',
        },
      ]
    : [
        {
          tab: 'Audio',
          icon: Mic,
          msgs: [
            { from: 'user', text: '0:12', kind: 'audio' },
            { from: 'bot', text: '¡Hola Laura! Sí hay cupo mañana. ¿Te sirve a las 10:00 a. m.?' },
            { from: 'user', text: 'Perfecto, agéndame 🙌' },
            { from: 'bot', text: 'Listo ✅ Mañana 10:00 a. m. Te envié el recordatorio.' },
          ],
          crm: [
            { k: 'Nombre', v: 'Laura M.', at: 1 },
            { k: 'Interés', v: 'Consulta', at: 2 },
            { k: 'Cita', v: 'Mañana 10:00', at: 4 },
          ],
          stage: 'Agendado',
        },
        {
          tab: 'Cotizar',
          icon: FileText,
          msgs: [
            { from: 'user', text: '¿Precio de 10 unidades del plan Pro?' },
            { from: 'bot', text: '10 unidades = $4.200.000 con 15% de descuento.' },
            { from: 'user', text: 'Envíamela por favor' },
            { from: 'bot', text: 'Cotización #Q-218 enviada en PDF 📄' },
          ],
          crm: [
            { k: 'Nombre', v: 'Andrés P.', at: 1 },
            { k: 'Interés', v: 'Plan Pro x10', at: 2 },
            { k: 'Cotización', v: '$4,2 M', at: 4 },
          ],
          stage: 'Cotizado',
        },
        {
          tab: 'Pago',
          icon: Receipt,
          msgs: [
            { from: 'user', text: 'Comprobante.jpg', kind: 'image' },
            { from: 'bot', text: 'Pago de $480.000 verificado ✅' },
            { from: 'user', text: '¿Cuándo despachan?' },
            { from: 'bot', text: 'Pedido #409 sale hoy. Te envié la guía.' },
          ],
          crm: [
            { k: 'Nombre', v: 'Camila R.', at: 1 },
            { k: 'Pago', v: '$480.000 ✓', at: 2 },
            { k: 'Pedido', v: '#409 enviado', at: 4 },
          ],
          stage: 'Pagado',
        },
      ];

  const sc = scenarios[scenario];
  const total = sc.msgs.length;

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(
      () => {
        if (step >= total + 2) {
          setScenario((s) => (s + 1) % scenarios.length);
          setStep(1);
        } else {
          setStep((s) => s + 1);
        }
      },
      step >= total ? 1600 : 1400
    );
    return () => clearTimeout(t);
  }, [step, inView, total, scenarios.length]);

  const visible = sc.msgs.slice(0, Math.min(step, total));
  const nextIsBot = step < total && sc.msgs[step]?.from === 'bot';
  const filled = Math.min(step, total);

  return (
    <AppWindow
      innerRef={ref}
      address={isEn ? 'WhatsApp Business · AI agent' : 'WhatsApp Business · Agente IA'}
      icon={<Bot size={10} className="shrink-0 text-primary" />}
      right={
        /* Mobile switcher: Chat vs CRM (hidden on desktop) */
        <div className="flex items-center gap-0.5 rounded-md bg-surface p-0.5 border border-rule sm:hidden">
          <button
            type="button"
            onClick={() => setMobileTab('chat')}
            className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[9px] font-medium transition-colors ${
              mobileTab === 'chat'
                ? 'bg-primary text-primary-ink shadow-sm'
                : 'text-muted hover:text-foreground'
            }`}
          >
            <MessageCircle size={9} />
            <span>Chat</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileTab('crm')}
            className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[9px] font-medium transition-colors ${
              mobileTab === 'crm'
                ? 'bg-primary text-primary-ink shadow-sm'
                : 'text-muted hover:text-foreground'
            }`}
          >
            <Users size={9} />
            <span>CRM</span>
          </button>
        </div>
      }
    >
      <div className="h-full sm:grid sm:grid-cols-[1.35fr_1fr]">
        {/* Chat (visible on desktop, tab-controlled on mobile) */}
        <div
          className={`min-w-0 flex-col h-full ${
            mobileTab === 'chat' ? 'flex' : 'hidden sm:flex'
          }`}
        >
          <div className="flex items-center justify-between gap-2 border-b border-rule bg-card px-2.5 sm:px-3 py-1.5 sm:py-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-primary text-[10px] sm:text-[11px] font-bold text-primary-ink">
                A
              </span>
              <div className="min-w-0 leading-tight">
                <p className="truncate text-[10.5px] sm:text-[11px] font-semibold text-foreground">Tu Empresa</p>
                <p className="text-[8.5px] sm:text-[9px]" style={{ color: '#25d366' }}>
                  {nextIsBot ? (isEn ? 'typing…' : 'escribiendo…') : isEn ? 'online' : 'en línea'}
                </p>
              </div>
            </div>
            {/* Live stage badge visible inside chat header */}
            <span
              className="rounded-full px-2 py-0.5 text-[8.5px] sm:text-[9px] font-semibold text-primary shrink-0"
              style={{ background: mix('primary', 14) }}
            >
              {sc.stage} ✓
            </span>
          </div>

          <div
            className="flex min-h-0 flex-1 flex-col justify-end gap-1.5 overflow-hidden px-2.5 sm:px-3 py-2"
            style={{ background: mix('surface', 70) }}
          >
            {visible.map((m, i) => (
              <div
                key={`${scenario}-${i}`}
                className={`max-w-[85%] rounded-xl px-2.5 py-1.5 text-[10px] sm:text-[10.5px] leading-snug text-foreground shadow-sm ${
                  m.from === 'user' ? 'ml-auto rounded-tr-sm' : 'mr-auto rounded-tl-sm border border-rule bg-card'
                }`}
                style={
                  m.from === 'user'
                    ? { background: mix('primary', 22), animation: 'miniapp-pop .35s ease-out' }
                    : { animation: 'miniapp-pop .35s ease-out' }
                }
              >
                {m.kind === 'audio' ? (
                  <span className="flex items-center gap-1.5">
                    <Mic size={11} className="text-primary" />
                    <span className="flex items-end gap-[2px]" aria-hidden="true">
                      {[4, 8, 5, 10, 6, 9, 4, 7, 5, 8, 3].map((h, k) => (
                        <span key={k} className="w-[2px] rounded-full bg-primary" style={{ height: h }} />
                      ))}
                    </span>
                    <span className="font-mono text-[9px] text-muted">{m.text}</span>
                  </span>
                ) : m.kind === 'image' ? (
                  <span className="flex items-center gap-1.5">
                    <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded bg-background">
                      <FileCheck size={12} className="text-primary" />
                    </span>
                    <span className="truncate">{m.text}</span>
                  </span>
                ) : (
                  m.text
                )}
                {m.from === 'user' && (
                  <CheckCheck size={10} className="ml-1 inline align-[-1px]" style={{ color: '#34b7f1' }} />
                )}
              </div>
            ))}
            {nextIsBot && (
              <div className="mr-auto flex gap-1 rounded-xl rounded-tl-sm border border-rule bg-card px-2.5 py-1.5 sm:py-2">
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted"
                    style={{ animationDelay: `${d * 0.15}s` }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-1 border-t border-rule bg-card px-2 py-1.5">
            {scenarios.map((s, i) => {
              const Icon = s.icon;
              const active = scenario === i;
              return (
                <button
                  key={s.tab}
                  type="button"
                  onClick={() => {
                    setScenario(i);
                    setStep(1);
                  }}
                  className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[9px] sm:text-[9.5px] font-medium transition-colors ${
                    active ? 'border-primary bg-primary text-primary-ink' : 'border-rule text-muted hover:text-foreground'
                  }`}
                >
                  <Icon size={9} />
                  <span>{s.tab}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CRM panel (always visible on desktop, tab-controlled on mobile) */}
        <div
          className={`min-w-0 flex-col gap-2 bg-card p-2.5 h-full sm:border-l border-rule ${
            mobileTab === 'crm' ? 'flex' : 'hidden sm:flex'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-[8.5px] sm:text-[9px] font-semibold uppercase tracking-wider text-muted">CRM · Lead Pipeline</span>
            <LivePill label="0.9s sync" />
          </div>

          <div className="space-y-1.5 rounded-lg border border-rule bg-background p-2">
            {sc.crm.map((f) => {
              const done = filled >= f.at;
              return (
                <div key={f.k} className="flex items-center justify-between gap-2">
                  <span className="text-[8.5px] sm:text-[9px] text-muted">{f.k}</span>
                  {done ? (
                    <span className="truncate text-[9.5px] sm:text-[10px] font-semibold text-foreground" style={{ animation: 'miniapp-pop .35s ease-out' }}>
                      {f.v}
                    </span>
                  ) : (
                    <span className="h-1.5 w-12 animate-pulse rounded-full bg-rule-strong" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="space-y-1">
            {[isEn ? 'New' : 'Nuevo', isEn ? 'Qualified' : 'Calificado', sc.stage].map((st, i) => {
              const reached = filled >= [1, 2, 4][i];
              return (
                <div key={st} className="flex items-center gap-1.5">
                  <span
                    className={`flex h-3.5 w-3.5 items-center justify-center rounded-full border ${
                      reached ? 'border-primary bg-primary text-primary-ink' : 'border-rule-strong text-transparent'
                    } transition-colors`}
                  >
                    <Check size={8} />
                  </span>
                  <span className={`text-[9.5px] sm:text-[10px] ${reached ? 'text-foreground' : 'text-muted'}`}>{st}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-auto rounded-lg p-2" style={{ background: mix('primary', 12) }}>
            <p className="text-[8.5px] sm:text-[9px] text-muted">{isEn ? 'Handled today' : 'Atendidos hoy'}</p>
            <p className="font-mono text-sm sm:text-base font-semibold text-foreground">{148 + scenario * 3}</p>
          </div>
        </div>
      </div>
    </AppWindow>
  );
}

/* ========================================================================== */
/* 04. AUTOMATIZACIÓN: node canvas (n8n style) + live execution log           */
/* ========================================================================== */
function AutomationCanvasApp({ isEn = false }: { isEn?: boolean }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [phase, setPhase] = useState(0); // 0 trigger · 1 agent · 2 outputs · 3 done
  const [runs, setRuns] = useState(128);
  const [clock, setClock] = useState(0);
  const [log, setLog] = useState<{ t: number; text: string }[]>([]);

  const order = 1041 + runs - 128;
  const phaseLog = isEn
    ? [
        `Order #A-${order} received on WhatsApp`,
        'AI agent validated payment & data',
        'Invoice, contract and CRM updated',
        'Flow completed · 0 manual steps',
      ]
    : [
        `Pedido #A-${order} recibido por WhatsApp`,
        'Agente IA validó pago y datos',
        'Factura, contrato y CRM actualizados',
        'Flujo completado · 0 pasos manuales',
      ];

  const advance = () => {
    setPhase((p) => {
      const next = (p + 1) % 4;
      if (next === 0) setRuns((r) => r + 1);
      return next;
    });
    setClock((c) => c + 1);
  };

  useEffect(() => {
    setLog((l) => (l.some((x) => x.t === clock) ? l : [...l.slice(-3), { t: clock, text: phaseLog[phase] }]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, clock]);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(advance, 1500);
    return () => clearInterval(id);
  }, [inView]);

  const time = (s: number) => {
    const total = 9 * 3600 + 41 * 60 + s * 2;
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const sec = total % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };

  const nodes = [
    { key: 'wa', x: 2, y: 38, icon: MessageCircle, name: 'WhatsApp', sub: isEn ? 'New order' : 'Nuevo pedido', at: 0, color: '#25d366' },
    { key: 'ai', x: 36, y: 38, icon: Bot, name: isEn ? 'AI agent' : 'Agente IA', sub: isEn ? 'Validates' : 'Valida', at: 1 },
    { key: 'inv', x: 70, y: 4, icon: Receipt, name: isEn ? 'Invoice' : 'Factura', sub: 'DIAN / ERP', at: 2 },
    { key: 'pdf', x: 70, y: 38, icon: FileText, name: isEn ? 'Contract' : 'Contrato', sub: 'PDF', at: 2 },
    { key: 'crm', x: 70, y: 72, icon: Database, name: 'CRM', sub: isEn ? 'Updated' : 'Actualizado', at: 2 },
  ];

  const edges = [
    { d: 'M30,50 L36,50', at: 1 },
    { d: 'M64,50 C67,50 67,16 70,16', at: 2 },
    { d: 'M64,50 L70,50', at: 2 },
    { d: 'M64,50 C67,50 67,84 70,84', at: 2 },
  ];

  return (
    <AppWindow
      innerRef={ref}
      address={isEn ? 'automations / new-sale' : 'automatizaciones / nueva-venta'}
      icon={<span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />}
      right={
        <button
          type="button"
          onClick={advance}
          className="inline-flex items-center gap-1 rounded-md bg-primary px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-semibold text-primary-ink transition-opacity hover:opacity-90"
        >
          <Play size={9} />
          <span className="hidden sm:inline">{isEn ? 'Run' : 'Ejecutar'}</span>
        </button>
      }
    >
      <div className="flex h-full flex-col">
        {/* Canvas */}
        <div
          className="relative min-h-0 flex-1"
          style={{
            backgroundImage: 'radial-gradient(var(--rule-strong) 1px, transparent 1px)',
            backgroundSize: '14px 14px',
          }}
        >
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
            {edges.map((e, i) => {
              const active = phase === e.at;
              const done = phase > e.at;
              return (
                <path
                  key={i}
                  d={e.d}
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                  stroke={active || done ? 'var(--primary)' : 'var(--rule-strong)'}
                  strokeWidth={active ? 2 : 1.5}
                  strokeDasharray={active ? '5 4' : undefined}
                  style={active ? { animation: 'miniapp-dash .6s linear infinite' } : undefined}
                />
              );
            })}
          </svg>

          {nodes.map((n) => {
            const Icon = n.icon;
            const active = phase === n.at;
            const done = phase > n.at;
            return (
              <div
                key={n.key}
                className={`absolute flex h-[24%] w-[29%] sm:w-[28%] items-center gap-1 sm:gap-1.5 rounded-lg border bg-card px-1 sm:px-2 transition-all duration-300 ${
                  active ? 'border-primary shadow-lg' : 'border-rule'
                }`}
                style={{
                  left: `${n.x}%`,
                  top: `${n.y}%`,
                  boxShadow: active ? `0 0 0 3px ${mix('primary', 20)}` : undefined,
                }}
              >
                <span
                  className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-md"
                  style={{ background: n.color ? n.color : mix('primary', 18), color: n.color ? '#fff' : 'var(--primary)' }}
                >
                  <Icon size={11} className="sm:size-[12px]" />
                </span>
                <div className="min-w-0 leading-tight">
                  <p className="truncate text-[9.5px] sm:text-[10px] font-semibold text-foreground">{n.name}</p>
                  <p className="hidden truncate text-[8.5px] text-muted sm:block">{n.sub}</p>
                </div>
                <span
                  className={`absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full text-primary-ink transition-opacity ${
                    done || phase === 3 ? 'bg-primary opacity-100' : 'opacity-0'
                  }`}
                >
                  <Check size={8} />
                </span>
              </div>
            );
          })}
        </div>

        {/* Execution log */}
        <div className="border-t border-rule bg-card px-2.5 sm:px-3 py-1.5 sm:py-2">
          <div className="mb-1 flex items-center justify-between text-[8.5px] sm:text-[9px]">
            <span className="font-semibold uppercase tracking-wider text-muted">{isEn ? 'Execution log' : 'Registro en vivo'}</span>
            <span className="font-mono text-primary truncate ml-1">
              {runs} {isEn ? 'runs today' : 'procesos'} · 0 {isEn ? 'errors' : 'errores'}
            </span>
          </div>
          <div className="h-[52px] sm:h-[60px] space-y-0.5 overflow-hidden font-mono text-[8.5px] sm:text-[9.5px]">
            {log.map((l, i) => (
              <p
                key={`${l.t}-${i}`}
                className={`truncate ${i === log.length - 1 ? 'text-foreground' : 'text-muted'}`}
              >
                <span className="text-muted">{time(l.t)}</span> <span className="text-primary">✓</span> {l.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </AppWindow>
  );
}

/* ========================================================================== */
/* EXPORTED DISPATCHER (accepts home ids and /servicios numeric ids)          */
/* ========================================================================== */
export function ServiceMiniApp({ id, isEn = false }: MiniAppProps) {
  return (
    <>
      <style>{`
        @keyframes miniapp-pop { from { opacity: 0; transform: translateY(6px) scale(.98); } to { opacity: 1; transform: none; } }
        @keyframes miniapp-dash { to { stroke-dashoffset: -9; } }
        @media (prefers-reduced-motion: reduce) { [style*="miniapp-"] { animation: none !important; } }
      `}</style>
      {(() => {
        switch (id) {
          case '01':
          case 'software':
            return <SoftwareDashboardApp isEn={isEn} />;
          case '02':
          case 'web':
            return <WebsiteSeoApp isEn={isEn} />;
          case '03':
          case 'agents':
            return <WhatsAppAgentApp isEn={isEn} />;
          case '04':
          case 'automation':
          default:
            return <AutomationCanvasApp isEn={isEn} />;
        }
      })()}
    </>
  );
}
