"use client";

import React, { useState, useEffect } from "react";
import {
  Check,
  Mic,
  FileCheck,
  Calendar,
  Search,
  RotateCw,
  Play,
  Sliders,
  ArrowUpRight,
  MessageSquare,
  Globe,
  Database,
  FileText,
  Receipt,
  Package,
  BarChart3,
  Users,
} from "lucide-react";

const mix = (token: string, pct: number) =>
  `color-mix(in srgb, var(--${token}) ${pct}%, transparent)`;

/* ========================================================================== */
/* 1. WHATSAPP AI WORKBENCH BENTO (For /servicios/agentes-inteligencia-art...)*/
/* ========================================================================== */

export function WhatsAppAiWorkbenchBento({ isEn = false }: { isEn?: boolean }) {
  const [activeCase, setActiveCase] = useState(0);
  const [step, setStep] = useState(3);

  const cases = isEn
    ? [
        {
          id: "clinic",
          label: "Medical Clinic",
          client: "Regenerative Medicine Clinic",
          latency: "1.1s",
          messages: [
            {
              from: "user",
              type: "audio",
              text: "0:14 · “Hi, do you have appointments available this Thursday morning and how much is the evaluation?”",
              time: "09:14 AM",
            },
            {
              from: "ai",
              type: "text",
              text: "Hello! The specialist evaluation is $120. This Thursday we have 9:30 AM and 11:00 AM open. Which slot works best for you?",
              time: "09:14 AM",
            },
            {
              from: "user",
              type: "text",
              text: "9:30 AM works great. My name is Valeria Mejía.",
              time: "09:15 AM",
            },
            {
              from: "ai",
              type: "text",
              text: "Confirmed, Valeria. Your appointment is booked for Thursday at 9:30 AM. I just sent the location and preparation guide.",
              time: "09:15 AM",
            },
          ],
          extraction: [
            { k: "Detected intent", v: "Appointment booking + pricing" },
            { k: "Voice note transcription", v: "99.4% confidence · ES-CO" },
            { k: "Knowledge source", v: "Tarifas_Clinica_2026.pdf" },
            { k: "Calendar action", v: "Slot locked · Thu 09:30 AM" },
          ],
          slots: [
            { day: "Thu 09:30", status: "Booked · Valeria M.", active: true },
            { day: "Thu 11:00", status: "Available", active: false },
            { day: "Thu 15:00", status: "Available", active: false },
          ],
          savedHours: "42 hrs/wk",
        },
        {
          id: "food",
          label: "Restaurant & Orders",
          client: "Multi-Branch Fast Food",
          latency: "0.9s",
          messages: [
            {
              from: "user",
              type: "text",
              text: "Hi! 2 double bacon burgers, 1 large fries and 2 colas to Calle 10 #43-12.",
              time: "11:42 PM",
            },
            {
              from: "ai",
              type: "text",
              text: "Got it! 2x Double Bacon + 1x Large Fries + 2x Drinks + Delivery = $34.50. Send your transfer receipt here to dispatch to kitchen.",
              time: "11:42 PM",
            },
            {
              from: "user",
              type: "receipt",
              text: "Transfer_Bancolombia_3450.jpg",
              time: "11:43 PM",
            },
            {
              from: "ai",
              type: "text",
              text: "Payment of $34.50 verified (#884920). Order #412 is now cooking at our Poblado branch!",
              time: "11:43 PM",
            },
          ],
          extraction: [
            { k: "Detected intent", v: "Night order + receipt vision" },
            { k: "Vision OCR check", v: "$34.50 · Ref #884920 · Valid" },
            { k: "Menu calculation", v: "3 items + delivery zone 2" },
            { k: "Kitchen dispatch", v: "Ticket #412 printed in 1.2s" },
          ],
          slots: [
            { day: "Order #412", status: "Paid & In Kitchen", active: true },
            { day: "Order #411", status: "Out for delivery", active: false },
            { day: "Order #410", status: "Delivered", active: false },
          ],
          savedHours: "24/7 Sales",
        },
        {
          id: "estate",
          label: "Hospitality & Rentals",
          client: "La Juana de Cerro Tusa",
          latency: "1.0s",
          messages: [
            {
              from: "user",
              type: "text",
              text: "Is the estate available for 10 guests from Nov 14 to Nov 17?",
              time: "08:20 PM",
            },
            {
              from: "ai",
              type: "text",
              text: "Yes! Nov 14–17 (3 nights) is available for 10 guests. Total rate is $1,850 including private pool and staff. Shall I reserve it?",
              time: "08:20 PM",
            },
            {
              from: "user",
              type: "text",
              text: "Yes please, send me the booking link and contract.",
              time: "08:21 PM",
            },
            {
              from: "ai",
              type: "text",
              text: "Dates pre-blocked in our calendar and synced with Airbnb. Here is your PDF contract and payment link.",
              time: "08:21 PM",
            },
          ],
          extraction: [
            { k: "Detected intent", v: "Date check · 10 guests · 3 nights" },
            { k: "Calendar sync", v: "Airbnb & Booking checked live" },
            { k: "Dynamic quote", v: "$1,850 · High-season weekend" },
            { k: "Document generated", v: "Contrato_Reserva_114.pdf" },
          ],
          slots: [
            { day: "Nov 14–17", status: "Pre-blocked · 10 pax", active: true },
            { day: "Nov 21–23", status: "Available", active: false },
            { day: "Nov 28–30", status: "Booked (Airbnb)", active: false },
          ],
          savedHours: "-80% manual",
        },
      ]
    : [
        {
          id: "clinic",
          label: "Clínica Médica",
          client: "Clínica Medicina Regenerativa",
          latency: "1.1s",
          messages: [
            {
              from: "user",
              type: "audio",
              text: "0:14 · “Hola, ¿tienen cita disponible para este jueves en la mañana y qué valor tiene la valoración?”",
              time: "09:14 a. m.",
            },
            {
              from: "ai",
              type: "text",
              text: "¡Hola! La valoración médica especializada tiene un valor de $180.000. Este jueves tenemos cupo a las 9:30 a. m. y 11:00 a. m. ¿Cuál prefieres?",
              time: "09:14 a. m.",
            },
            {
              from: "user",
              type: "text",
              text: "A las 9:30 a. m. me queda perfecto. Mi nombre es Valeria Mejía.",
              time: "09:15 a. m.",
            },
            {
              from: "ai",
              type: "text",
              text: "Confirmado, Valeria. Tu cita quedó agendada para el jueves a las 9:30 a. m. Ya te envié la ubicación y recomendaciones.",
              time: "09:15 a. m.",
            },
          ],
          extraction: [
            { k: "Intención detectada", v: "Agendamiento + consulta tarifa" },
            { k: "Transcripción de audio", v: "99.4% precisión · Español CO" },
            { k: "Fuente consultada", v: "Protocolos_y_Tarifas_2026.pdf" },
            { k: "Acción en agenda", v: "Cupo bloqueado · Jue 09:30 a. m." },
          ],
          slots: [
            { day: "Jue 09:30", status: "Agendada · Valeria M.", active: true },
            { day: "Jue 11:00", status: "Disponible", active: false },
            { day: "Jue 15:00", status: "Disponible", active: false },
          ],
          savedHours: "-70% recepción",
        },
        {
          id: "food",
          label: "Restaurante 24/7",
          client: "Agente IA Comidas Rápidas",
          latency: "0.9s",
          messages: [
            {
              from: "user",
              type: "text",
              text: "Hola, regálame 2 hamburguesas dobles con tocineta, 1 papa grande y 2 gaseosas para la Calle 10 #43-12.",
              time: "11:42 p. m.",
            },
            {
              from: "ai",
              type: "text",
              text: "¡Claro! 2x Doble Tocineta + 1x Papa Grande + 2x Gaseosas + Domicilio = $78.000. Envíame el comprobante por aquí para pasarlo a cocina.",
              time: "11:42 p. m.",
            },
            {
              from: "user",
              type: "receipt",
              text: "Comprobante_Transferencia_78000.jpg",
              time: "11:43 p. m.",
            },
            {
              from: "ai",
              type: "text",
              text: "Comprobante por $78.000 validado (Ref #884920). ¡Tu pedido #412 ya entró a preparación en sede Poblado!",
              time: "11:43 p. m.",
            },
          ],
          extraction: [
            { k: "Intención detectada", v: "Pedido nocturno + validación pago" },
            { k: "Visión artificial (OCR)", v: "$78.000 · Ref #884920 · Válido" },
            { k: "Cálculo de menú", v: "3 productos + zona domicilio 2" },
            { k: "Despacho a cocina", v: "Comanda #412 emitida en 1.2s" },
          ],
          slots: [
            { day: "Orden #412", status: "Pagada · En cocina", active: true },
            { day: "Orden #411", status: "En camino", active: false },
            { day: "Orden #410", status: "Entregada", active: false },
          ],
          savedHours: "Ventas 24/7",
        },
        {
          id: "estate",
          label: "Fincas y Reservas",
          client: "La Juana de Cerro Tusa",
          latency: "1.0s",
          messages: [
            {
              from: "user",
              type: "text",
              text: "¿Tienen disponibilidad de la finca para 10 personas del 14 al 17 de noviembre?",
              time: "08:20 p. m.",
            },
            {
              from: "ai",
              type: "text",
              text: "¡Sí! Del 14 al 17 de noviembre (3 noches) está disponible para 10 huéspedes. El valor total es $4.800.000. ¿Te bloqueo las fechas?",
              time: "08:20 p. m.",
            },
            {
              from: "user",
              type: "text",
              text: "Sí por favor, envíame los datos para reservar.",
              time: "08:21 p. m.",
            },
            {
              from: "ai",
              type: "text",
              text: "Fechas pre-reservadas y sincronizadas con Airbnb. Aquí tienes el contrato PDF y los datos de anticipo.",
              time: "08:21 p. m.",
            },
          ],
          extraction: [
            { k: "Intención detectada", v: "Consulta fechas · 10 pax · 3 noches" },
            { k: "Sincronización calendario", v: "Airbnb y Booking verificados" },
            { k: "Cotización dinámica", v: "$4.800.000 · Puente festivo" },
            { k: "Documento generado", v: "Contrato_Reserva_114.pdf" },
          ],
          slots: [
            { day: "14–17 Nov", status: "Pre-reserva · 10 pax", active: true },
            { day: "21–23 Nov", status: "Disponible", active: false },
            { day: "28–30 Nov", status: "Reservado (Airbnb)", active: false },
          ],
          savedHours: "-80% carga",
        },
      ];

  const current = cases[activeCase];

  useEffect(() => {
    setStep(1);
    const t1 = setTimeout(() => setStep(2), 450);
    const t2 = setTimeout(() => setStep(3), 950);
    const t3 = setTimeout(() => setStep(4), 1450);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [activeCase]);

  return (
    <div className="rounded-[28px] border border-rule bg-surface p-4 sm:p-6 lg:p-8 shadow-2xl shadow-black/30">
      {/* Top Workbench Bar: Scenario Switcher + Live Latency */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-rule">
        <div className="flex flex-wrap items-center gap-2">
          {cases.map((c, idx) => {
            const active = idx === activeCase;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCase(idx)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  active
                    ? "bg-primary text-primary-ink font-semibold"
                    : "bg-background text-muted hover:text-foreground border border-rule"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-4 text-xs">
          <span className="text-muted hidden sm:inline">{current.client}</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-background border border-rule px-3 py-1.5 font-mono text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {isEn ? "Reply:" : "Respuesta:"} {current.latency}
          </span>
        </div>
      </div>

      {/* 3-Column Bento Grid inside Workbench */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Column 1 (5 cols): Live WhatsApp Conversation */}
        <div className="min-w-0 lg:col-span-5 rounded-2xl border border-rule bg-background flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between border-b border-rule bg-card px-4 py-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-ink">
                AI
              </span>
              <div>
                <p className="text-xs font-semibold text-foreground">{current.client}</p>
                <p className="text-[11px] text-primary">
                  {isEn ? "WhatsApp Business · Online 24/7" : "WhatsApp Business · En línea 24/7"}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setStep(1);
                setTimeout(() => setStep(4), 600);
              }}
              className="inline-flex items-center gap-1 rounded-lg border border-rule bg-background px-2.5 py-1 text-[11px] text-muted hover:text-foreground transition-colors cursor-pointer"
            >
              <RotateCw size={11} />
              <span>{isEn ? "Replay" : "Repetir"}</span>
            </button>
          </div>

          <div className="p-4 space-y-3 min-h-[280px] flex flex-col justify-end">
            {current.messages.slice(0, step).map((m, i) => (
              <div
                key={`${current.id}-${i}`}
                className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                  m.from === "user"
                    ? "ml-auto rounded-tr-sm border border-primary/30 text-foreground"
                    : "mr-auto rounded-tl-sm border border-rule bg-card text-foreground"
                }`}
                style={
                  m.from === "user" ? { background: mix("primary", 16) } : undefined
                }
              >
                {m.type === "audio" ? (
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-primary font-mono text-[11px]">
                      <Mic size={13} />
                      <div className="flex items-end gap-0.5 h-3">
                        {[4, 9, 6, 11, 7, 10, 5, 8, 11, 6, 4, 8].map((h, k) => (
                          <span
                            key={k}
                            className="w-0.5 rounded-full bg-primary"
                            style={{ height: `${h}px` }}
                          />
                        ))}
                      </div>
                      <span>{isEn ? "Voice note" : "Nota de voz"}</span>
                    </div>
                    <p className="text-muted text-[11px]">{m.text}</p>
                  </div>
                ) : m.type === "receipt" ? (
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-background border border-rule text-primary">
                      <FileCheck size={15} />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">{m.text}</p>
                      <p className="text-[10px] text-primary">
                        {isEn ? "Verified by AI Vision ✓" : "Verificado por Visión IA ✓"}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p>{m.text}</p>
                )}
                <p className="mt-1 text-right text-[10px] text-subtle">{m.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 (4 cols): Real-Time AI Reasoning & Extraction */}
        <div className="min-w-0 lg:col-span-4 rounded-2xl border border-rule bg-background p-4 sm:p-5 flex flex-col justify-between gap-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-rule">
              <span className="text-xs font-semibold text-foreground">
                {isEn ? "AI Processing & Memory" : "Procesamiento del Agente IA"}
              </span>
              <span className="font-mono text-[11px] text-primary">RAG + Vision</span>
            </div>

            <dl className="mt-4 space-y-3">
              {current.extraction.map((item) => (
                <div
                  key={item.k}
                  className="rounded-xl border border-rule bg-surface px-3.5 py-2.5"
                >
                  <dt className="text-[11px] text-muted">{item.k}</dt>
                  <dd className="text-xs font-semibold text-foreground mt-0.5">
                    {item.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-xl border border-primary/30 bg-primary/10 px-3.5 py-2.5 flex items-center justify-between text-xs">
            <span className="text-muted">
              {isEn ? "Human handoff summary" : "Resumen a asesor humano"}
            </span>
            <span className="font-semibold text-primary">
              {isEn ? "Ready in 1 click" : "Listo en 1 clic"}
            </span>
          </div>
        </div>

        {/* Column 3 (3 cols): Live Calendar & CRM Impact */}
        <div className="min-w-0 lg:col-span-3 rounded-2xl border border-rule bg-background p-4 sm:p-5 flex flex-col justify-between gap-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-rule">
              <span className="text-xs font-semibold text-foreground">
                {isEn ? "Calendar & CRM" : "Agenda y CRM en Vivo"}
              </span>
              <Calendar size={14} className="text-primary" />
            </div>

            <div className="mt-4 space-y-2.5">
              {current.slots.map((s) => (
                <div
                  key={s.day}
                  className={`rounded-xl border px-3 py-2.5 text-xs ${
                    s.active
                      ? "border-primary bg-primary/15 text-foreground"
                      : "border-rule bg-surface text-muted"
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span>{s.day}</span>
                    {s.active && <Check size={12} className="text-primary" />}
                  </div>
                  <p className="font-medium mt-0.5 text-foreground">{s.status}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-rule flex items-baseline justify-between">
            <span className="text-xs text-muted">
              {isEn ? "Measured impact" : "Impacto medido"}
            </span>
            <span className="font-mono text-lg font-semibold text-primary">
              {current.savedHours}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================== */
/* 2. WEB PERFORMANCE & GEO BENTO (For /servicios/paginas-web-alto-rend...)   */
/* ========================================================================== */

export function WebPerformanceBento({ isEn = false }: { isEn?: boolean }) {
  const [queryIdx, setQueryIdx] = useState(0);
  const [engine, setEngine] = useState<"google" | "ai">("google");
  const [raceRun, setRaceRun] = useState(0);

  const searchDemos = isEn
    ? [
        {
          query: "ultrasound equipment rental colombia",
          domain: "alquilerdeecografos.com",
          title: "Alquiler de Ecógrafos — Medical Ultrasound Rental & Immediate Delivery",
          snippet:
            "Real-time availability calendar, portable & 4D ultrasound machines, and direct WhatsApp technical support across Colombia.",
          aiAnswer:
            "Based on verified availability and technical support in Colombia, Alquiler de Ecógrafos (alquilerdeecografos.com) is the top-ranked provider offering real-time online reservation and immediate nationwide dispatch.",
        },
        {
          query: "luxury vacation estate cerro tusa",
          domain: "lajuanacerrotusa.com",
          title: "La Juana de Cerro Tusa — Private Luxury Estate & Direct Booking",
          snippet:
            "Colonial architecture, private pool with panoramic views of Cerro Tusa, and commission-free direct reservations.",
          aiAnswer:
            "For a private luxury stay in Venecia near Cerro Tusa, La Juana de Cerro Tusa (lajuanacerrotusa.com) offers direct booking without intermediary fees, synchronized availability, and panoramic mountain views.",
        },
        {
          query: "wholesale gps trackers mexico",
          domain: "telocalizo.mx",
          title: "Telocalizo MX — Wholesale GPS Trackers & B2B Fleet Hardware",
          snippet:
            "National B2B distributor of 4G GPS hardware in Mexico. Interactive catalog and instant volume quoting.",
          aiAnswer:
            "Telocalizo MX (telocalizo.mx) leads wholesale GPS distribution in Mexico, offering homologated 4G devices and one-click B2B volume quotes.",
        },
      ]
    : [
        {
          query: "alquiler de ecógrafos en colombia",
          domain: "alquilerdeecografos.com",
          title: "Alquiler de Ecógrafos — Renta de Equipos Médicos con Reserva en Vivo",
          snippet:
            "Disponibilidad inmediata por días o meses, calendario en tiempo real y soporte biomédico directo por WhatsApp en toda Colombia.",
          aiAnswer:
            "En Colombia, Alquiler de Ecógrafos (alquilerdeecografos.com) destaca como la plataforma líder con validación de disponibilidad en tiempo real, equipos de última generación y contratación directa sin intermediarios.",
        },
        {
          query: "finca de lujo en cerro tusa",
          domain: "lajuanacerrotusa.com",
          title: "La Juana de Cerro Tusa — Finca Exclusiva con Reserva Directa",
          snippet:
            "Arquitectura colonial frente a Cerro Tusa, piscina privada y calendario sincronizado para reservar directo sin comisiones.",
          aiAnswer:
            "Para hospedaje exclusivo frente a Cerro Tusa, La Juana de Cerro Tusa (lajuanacerrotusa.com) permite consultar fechas libres en tiempo real y reservar directamente con los propietarios sin recargos de plataformas.",
        },
        {
          query: "distribuidor mayorista gps méxico",
          domain: "telocalizo.mx",
          title: "Telocalizo MX — Distribuidora Mayorista de Equipos GPS 4G",
          snippet:
            "Catálogo B2B con cotizador automático por volumen, envíos a todo México y asesoría técnica directa.",
          aiAnswer:
            "Telocalizo MX (telocalizo.mx) es el portal B2B de referencia en México para compra mayorista de rastreadores GPS 4G, con cotización inmediata por volumen.",
        },
      ];

  const activeSearch = searchDemos[queryIdx];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left 7 Cols: Live Load Speed & Conversion Curve */}
      <div className="min-w-0 lg:col-span-7 rounded-[28px] border border-rule bg-surface p-4 sm:p-8 flex flex-col justify-between gap-6 shadow-2xl shadow-black/25">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium text-primary">
              {isEn ? "Real Load Speed Benchmark" : "Comparativa Real de Velocidad"}
            </p>
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-1">
              {isEn
                ? "0.6s Custom Next.js vs. 4.8s Traditional Template"
                : "0.6s Ingeniería Autonomek vs. 4.8s Plantilla Tradicional"}
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setRaceRun((r) => r + 1)}
            className="inline-flex items-center gap-1.5 rounded-full border border-rule bg-background px-3.5 py-1.5 text-xs font-semibold text-foreground hover:border-primary transition-colors cursor-pointer"
          >
            <RotateCw size={12} />
            <span>{isEn ? "Test speed" : "Simular carga"}</span>
          </button>
        </div>

        {/* Speed Bars Comparison */}
        <div key={raceRun} className="space-y-4">
          <div className="rounded-2xl border border-primary/40 bg-background p-4 space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-1 text-xs">
              <span className="font-semibold text-foreground">
                {isEn
                  ? "Autonomek Website (Next.js + Edge)"
                  : "Sitio Web Autonomek (Next.js a medida)"}
              </span>
              <span className="font-mono font-bold text-primary">
                0.6 seg · 98% {isEn ? "retained" : "visitas retenidas"}
              </span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-surface overflow-hidden">
              <div className="h-full w-[16%] rounded-full bg-primary" />
            </div>
          </div>

          <div className="rounded-2xl border border-rule bg-background p-4 space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-1 text-xs">
              <span className="font-medium text-muted">
                {isEn
                  ? "Standard WordPress / Heavy Template"
                  : "Página en Plantilla Lenta (WordPress / Wix)"}
              </span>
              <span className="font-mono text-muted">
                4.8 seg · -53% {isEn ? "visitors lost" : "abandonan antes de abrir"}
              </span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-surface overflow-hidden">
              <div className="h-full w-[88%] rounded-full bg-rule-strong" />
            </div>
          </div>
        </div>

        {/* Bottom 4 Core Web Vitals Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-rule">
          {[
            { k: "Performance", v: "99 / 100" },
            { k: "Google SEO", v: "100 / 100" },
            { k: "First Paint", v: "0.6 seg" },
            { k: "AI Search (GEO)", v: "Schema + llms.txt" },
          ].map((m) => (
            <div
              key={m.k}
              className="rounded-xl border border-rule bg-background px-3.5 py-2.5"
            >
              <p className="text-[11px] text-muted">{m.k}</p>
              <p className="font-mono text-sm font-semibold text-primary mt-0.5">
                {m.v}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right 5 Cols: Interactive Google #1 & ChatGPT Search Simulator */}
      <div className="min-w-0 lg:col-span-5 rounded-[28px] border border-rule bg-surface p-4 sm:p-8 flex flex-col justify-between gap-5 shadow-2xl shadow-black/25">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-medium text-primary">
              {isEn ? "Search Visibility Engine" : "Posicionamiento en Buscadores"}
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-1">
              {isEn ? "Google #1 & ChatGPT Citations" : "Primero en Google y ChatGPT"}
            </h3>
          </div>

          <div className="inline-flex rounded-full border border-rule bg-background p-1 text-xs">
            <button
              type="button"
              onClick={() => setEngine("google")}
              className={`rounded-full px-3 py-1 font-medium transition-colors cursor-pointer ${
                engine === "google"
                  ? "bg-primary text-primary-ink font-semibold"
                  : "text-muted hover:text-foreground"
              }`}
            >
              Google
            </button>
            <button
              type="button"
              onClick={() => setEngine("ai")}
              className={`rounded-full px-3 py-1 font-medium transition-colors cursor-pointer ${
                engine === "ai"
                  ? "bg-primary text-primary-ink font-semibold"
                  : "text-muted hover:text-foreground"
              }`}
            >
              ChatGPT / IA
            </button>
          </div>
        </div>

        {/* Query selector pills */}
        <div className="flex flex-wrap gap-1.5">
          {searchDemos.map((d, i) => (
            <button
              key={d.domain}
              type="button"
              onClick={() => setQueryIdx(i)}
              className={`rounded-full px-3 py-1 text-[11px] transition-colors cursor-pointer ${
                queryIdx === i
                  ? "bg-card border border-primary text-primary font-semibold"
                  : "bg-background border border-rule text-muted hover:text-foreground"
              }`}
            >
              {d.domain}
            </button>
          ))}
        </div>

        {/* Simulated Search Result Box */}
        <div className="rounded-2xl border border-rule bg-background p-4 space-y-3">
          <div className="flex items-center gap-2 rounded-full border border-rule bg-surface px-3 py-1.5 text-xs text-foreground">
            <Search size={13} className="text-primary shrink-0" />
            <span className="truncate">{activeSearch.query}</span>
          </div>

          {engine === "google" ? (
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center gap-2 text-[11px] text-muted">
                <span className="rounded bg-primary px-1.5 py-0.5 font-mono text-[10px] font-bold text-primary-ink">
                  #1
                </span>
                <span className="text-primary font-medium">
                  https://{activeSearch.domain}
                </span>
              </div>
              <p className="text-sm font-semibold text-foreground">
                {activeSearch.title}
              </p>
              <p className="text-xs text-muted leading-relaxed">
                {activeSearch.snippet}
              </p>
            </div>
          ) : (
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-semibold text-primary">
                  {isEn ? "AI Answer Engine Citation" : "Respuesta Recomendada por IA"}
                </span>
                <span className="font-mono text-muted">Schema + GEO</span>
              </div>
              <p className="text-xs text-foreground leading-relaxed">
                “{activeSearch.aiAnswer}”
              </p>
              <div className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] text-primary">
                <Globe size={11} />
                <span>
                  {isEn ? "Cited source:" : "Fuente citada:"} {activeSearch.domain}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ========================================================================== */
/* 3. CUSTOM SOFTWARE WORKBENCH + LICENSE ROI CALCULATOR                      */
/* ========================================================================== */

export function CustomSoftwareWorkbenchBento({ isEn = false }: { isEn?: boolean }) {
  const [activeMod, setActiveMod] = useState(0);
  const [teamSize, setTeamSize] = useState(25);

  const annualSavings = teamSize * 45 * 12;

  const modules = isEn
    ? [
        {
          name: "Bookings & Rentals",
          icon: Calendar,
          url: "panel.tuempresa.com/reservas",
          kpis: [
            { l: "Active bookings", v: "38" },
            { l: "Fleet occupancy", v: "91%" },
            { l: "Double bookings", v: "0" },
          ],
          rows: [
            { id: "EQ-104", item: "Portable Ultrasound Mindray · Dr. Gómez", state: "Dispatched" },
            { id: "EQ-105", item: "4D Console · Clínica del Prado (15 days)", state: "Reserved" },
            { id: "EQ-106", item: "Linear Transducer Kit · Medellín", state: "Available" },
          ],
        },
        {
          name: "B2B Client Portal",
          icon: Users,
          url: "portal.tuempresa.com/mayoristas",
          kpis: [
            { l: "Active distributors", v: "142" },
            { l: "Wholesale orders", v: "$48.2k" },
            { l: "Quote speed", v: "Instant" },
          ],
          rows: [
            { id: "PO-882", item: "50x GPS Tracker 4G · Logística Norte", state: "Approved" },
            { id: "PO-881", item: "25x Fleet Relay Kit · Monterrey", state: "Invoiced" },
            { id: "PO-880", item: "100x SIM Telemetry Plan · CDMX", state: "Active" },
          ],
        },
        {
          name: "Multi-Branch Stock",
          icon: Package,
          url: "panel.tuempresa.com/inventario",
          kpis: [
            { l: "Warehouses synced", v: "4 / 4" },
            { l: "Units tracked", v: "3,420" },
            { l: "Stockout alerts", v: "0" },
          ],
          rows: [
            { id: "BOD-01", item: "Main Warehouse Medellín · 1,480 units", state: "Synced" },
            { id: "BOD-02", item: "Bogotá Distribution Hub · 1,120 units", state: "Synced" },
            { id: "BOD-03", item: "Online Store Catalog · Real-time stock", state: "Live" },
          ],
        },
      ]
    : [
        {
          name: "Reservas y Alquiler",
          icon: Calendar,
          url: "panel.tuempresa.com/reservas",
          kpis: [
            { l: "Reservas activas", v: "38" },
            { l: "Ocupación de equipos", v: "91%" },
            { l: "Cruces de agenda", v: "0" },
          ],
          rows: [
            { id: "EQ-104", item: "Ecógrafo Portátil Mindray · Dr. Gómez", state: "En alquiler" },
            { id: "EQ-105", item: "Consola 4D · Clínica del Prado (15 días)", state: "Reservado" },
            { id: "EQ-106", item: "Kit Transductor Lineal · Sede Poblado", state: "Disponible" },
          ],
        },
        {
          name: "Portal B2B Clientes",
          icon: Users,
          url: "portal.tuempresa.com/mayoristas",
          kpis: [
            { l: "Clientes activos", v: "142" },
            { l: "Pedidos del mes", v: "$64.8M" },
            { l: "Cotizaciones PDF", v: "En 1 clic" },
          ],
          rows: [
            { id: "OC-882", item: "50x Rastreadores GPS 4G · Flota Norte", state: "Aprobado" },
            { id: "OC-881", item: "25x Kit Telemetría · Distribuidora Sur", state: "Facturado" },
            { id: "OC-880", item: "Renovación Portal Corporativo · 120 uds", state: "Activo" },
          ],
        },
        {
          name: "Inventario Multisede",
          icon: Package,
          url: "panel.tuempresa.com/inventario",
          kpis: [
            { l: "Bodegas conectadas", v: "4 / 4" },
            { l: "Referencias en vivo", v: "3,420" },
            { l: "Errores de stock", v: "0" },
          ],
          rows: [
            { id: "BOD-01", item: "Bodega Principal Medellín · 1,480 uds", state: "Sincronizado" },
            { id: "BOD-02", item: "Centro Logístico Bogotá · 1,120 uds", state: "Sincronizado" },
            { id: "BOD-03", item: "Catálogo Web en Línea · Stock real", state: "En vivo" },
          ],
        },
      ];

  const cur = modules[activeMod];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left 8 Cols: Interactive Custom Platform Preview */}
      <div className="min-w-0 lg:col-span-8 rounded-[28px] border border-rule bg-surface p-4 sm:p-8 flex flex-col justify-between gap-6 shadow-2xl shadow-black/25">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-rule">
          <div className="flex flex-wrap gap-2">
            {modules.map((m, i) => {
              const Icon = m.icon;
              const active = i === activeMod;
              return (
                <button
                  key={m.name}
                  type="button"
                  onClick={() => setActiveMod(i)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                    active
                      ? "bg-primary text-primary-ink"
                      : "bg-background text-muted hover:text-foreground border border-rule"
                  }`}
                >
                  <Icon size={14} />
                  <span>{m.name}</span>
                </button>
              );
            })}
          </div>
          <span className="font-mono text-xs text-muted">{cur.url}</span>
        </div>

        {/* KPIs inside module */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {cur.kpis.map((k) => (
            <div
              key={k.l}
              className="min-w-0 rounded-2xl border border-rule bg-background p-2.5 sm:p-4"
            >
              <p className="text-[11px] sm:text-xs text-muted truncate">{k.l}</p>
              <p className="font-mono text-base sm:text-2xl font-semibold text-foreground mt-1 truncate">
                {k.v}
              </p>
            </div>
          ))}
        </div>

        {/* Live Records Table */}
        <div className="space-y-2.5">
          {cur.rows.map((r) => (
            <div
              key={r.id}
              className="rounded-xl border border-rule bg-background px-4 py-3 flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="font-mono text-xs font-semibold text-primary shrink-0">
                  {r.id}
                </span>
                <span className="text-xs sm:text-sm text-foreground truncate">
                  {r.item}
                </span>
              </div>
              <span className="rounded-full bg-primary/15 border border-primary/25 px-3 py-0.5 text-[11px] font-semibold text-primary shrink-0">
                {r.state}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right 4 Cols: Interactive $0 Per-User License Savings Calculator */}
      <div className="min-w-0 lg:col-span-4 rounded-[28px] border border-rule bg-surface p-4 sm:p-8 flex flex-col justify-between gap-6 shadow-2xl shadow-black/25">
        <div>
          <p className="text-xs font-medium text-primary">
            {isEn ? "100% Code Ownership" : "Propiedad Total sin Mensualidades"}
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-1">
            {isEn
              ? "Calculate your savings vs. rented SaaS"
              : "Ahorro frente a licencias por usuario"}
          </h3>
          <p className="text-xs text-muted mt-2 leading-relaxed">
            {isEn
              ? "Generic SaaS platforms charge $35–$60 USD per user every month. With Autonomek, your platform is 100% yours."
              : "El software alquilado cobra entre $35 y $60 USD mensuales por cada empleado. Con Autonomek la plataforma es 100% tuya."}
          </p>
        </div>

        {/* Slider Control */}
        <div className="rounded-2xl border border-rule bg-background p-4 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted">
              {isEn ? "Users in your company:" : "Usuarios en tu empresa:"}
            </span>
            <span className="font-mono text-base font-bold text-primary">
              {teamSize} {isEn ? "users" : "usuarios"}
            </span>
          </div>
          <input
            type="range"
            min={5}
            max={100}
            step={5}
            value={teamSize}
            onChange={(e) => setTeamSize(Number(e.target.value))}
            aria-label={isEn ? "Number of users" : "Número de usuarios"}
            className="w-full accent-[var(--primary)] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-mono text-subtle">
            <span>5</span>
            <span>25</span>
            <span>50</span>
            <span>100+</span>
          </div>
        </div>

        {/* Comparison readout */}
        <div className="space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs px-1">
            <span className="text-muted">
              {isEn ? "Rented SaaS cost / year:" : "Costo anual en licencias SaaS:"}
            </span>
            <span className="font-mono text-muted line-through">
              ${annualSavings.toLocaleString("en-US")} USD / {isEn ? "yr" : "año"}
            </span>
          </div>
          <div className="rounded-2xl border border-primary/40 bg-primary/10 p-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-xs font-semibold text-foreground">
                {isEn ? "Autonomek Monthly License" : "Licencia Mensual Autonomek"}
              </p>
              <p className="text-[11px] text-primary">
                {isEn ? "Unlimited users & branches" : "Usuarios y sedes ilimitados"}
              </p>
            </div>
            <span className="font-mono text-2xl font-bold text-primary">$0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================== */
/* 4. AUTOMATION PIPELINE BENTO (For /servicios/automatizacion-de-procesos)   */
/* ========================================================================== */

export function AutomationPipelineBento({ isEn = false }: { isEn?: boolean }) {
  const [flowIdx, setFlowIdx] = useState(0);
  const [activeStep, setActiveStep] = useState(3);

  const pipelines = isEn
    ? [
        {
          name: "Sale → Invoice & CRM",
          trigger: "Payment confirmed on WhatsApp / Web",
          time: "1.4 seg",
          saved: "18 hrs / week",
          nodes: [
            { title: "1. Webhook Trigger", sub: "Payment or transfer verified", out: "Order #4092 · $480.00" },
            { title: "2. Customer & Tax Lookup", sub: "Validates tax ID & client profile", out: "Client NIT 901.442.109" },
            { title: "3. Electronic Invoice Issued", sub: "Creates official invoice in ERP/DIAN", out: "Invoice #FE-9921.pdf" },
            { title: "4. WhatsApp & Team Dispatch", sub: "Sends PDF to client & updates CRM", out: "Delivered · 0 manual typing" },
          ],
        },
        {
          name: "Approved Deal → PDF Contract",
          trigger: "Advisor approves deal in CRM",
          time: "2.1 seg",
          saved: "30 min / contract",
          nodes: [
            { title: "1. Commercial Approval", sub: "Client data & service terms captured", out: "Deal #B2B-118" },
            { title: "2. Dynamic Contract Drafting", sub: "Populates clauses, rates & annexes", out: "Contrato_2026_118.pdf" },
            { title: "3. Cloud Archive", sub: "Creates client folder in Google Drive", out: "/Clientes/2026/B2B-118/" },
            { title: "4. Multi-Channel Delivery", sub: "Dispatches via WhatsApp & Email", out: "Sent for e-signature ✓" },
          ],
        },
        {
          name: "Multi-Channel Calendar Sync",
          trigger: "New booking on Web, Airbnb or WhatsApp",
          time: "0.8 seg",
          saved: "0 double-bookings",
          nodes: [
            { title: "1. Reservation Event", sub: "Dates selected on any sales channel", out: "Nov 14–17 · 10 guests" },
            { title: "2. Availability Lock", sub: "Blocks dates across Website & OTAs", out: "Airbnb + Booking + Web locked" },
            { title: "3. Operations Checklist", sub: "Schedules cleaning & staff tasks", out: "Staff notified on Telegram/WA" },
            { title: "4. Guest Onboarding", sub: "Sends arrival guide & location pin", out: "Automated reminder scheduled" },
          ],
        },
      ]
    : [
        {
          name: "Venta → Factura y CRM",
          trigger: "Pago confirmado en WhatsApp o Web",
          time: "1.4 seg",
          saved: "18 hrs / semana",
          nodes: [
            { title: "1. Disparo Automático", sub: "Se confirma pago por pasarela o transferencia", out: "Orden #4092 · $1.850.000" },
            { title: "2. Validación Contable", sub: "Verifica o crea el tercero con RUT/NIT", out: "Cliente NIT 901.442.109" },
            { title: "3. Emisión de Factura", sub: "Genera factura electrónica en tu sistema", out: "Factura #FE-9921.pdf" },
            { title: "4. Envío y Registro CRM", sub: "Envía el PDF al cliente y avisa al equipo", out: "Completado · 0 digitación" },
          ],
        },
        {
          name: "Cierre → Contrato PDF en 3s",
          trigger: "Aprobación comercial o formulario",
          time: "2.1 seg",
          saved: "30 min / contrato",
          nodes: [
            { title: "1. Solicitud Comercial", sub: "Captura datos del cliente y condiciones", out: "Negocio #B2B-118" },
            { title: "2. Redacción de Contrato PDF", sub: "Completa cláusulas, tarifas y anexos", out: "Contrato_2026_118.pdf" },
            { title: "3. Archivo en la Nube", sub: "Crea carpeta ordenada en Google Drive", out: "/Clientes/2026/B2B-118/" },
            { title: "4. Despacho por WhatsApp y Correo", sub: "Envía documentos listos para firma", out: "Entregado sin errores ✓" },
          ],
        },
        {
          name: "Sincronización de Agendas",
          trigger: "Reserva en Web, Airbnb o WhatsApp",
          time: "0.8 seg",
          saved: "0 cruces de horario",
          nodes: [
            { title: "1. Nueva Reserva o Cita", sub: "Ingresa por cualquier canal de atención", out: "14–17 Nov · Confirmada" },
            { title: "2. Bloqueo Multicanal", sub: "Actualiza Web, Google Calendar y OTAs", out: "Calendarios sincronizados" },
            { title: "3. Orden Operativa", sub: "Notifica a logística o personal encargado", out: "Alerta enviada al equipo" },
            { title: "4. Confirmación al Cliente", sub: "Envía soporte, ubicación y recordatorio", out: "Seguimiento programado" },
          ],
        },
      ];

  const pipe = pipelines[flowIdx];

  const replayFlow = () => {
    setActiveStep(0);
    setTimeout(() => setActiveStep(1), 350);
    setTimeout(() => setActiveStep(2), 700);
    setTimeout(() => setActiveStep(3), 1050);
  };

  return (
    <div className="rounded-[28px] border border-rule bg-surface p-5 sm:p-8 shadow-2xl shadow-black/25 space-y-6">
      {/* Top Bar: Pipeline Selector + Run Button */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-rule">
        <div className="flex flex-wrap gap-2">
          {pipelines.map((p, idx) => (
            <button
              key={p.name}
              type="button"
              onClick={() => {
                setFlowIdx(idx);
                replayFlow();
              }}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                flowIdx === idx
                  ? "bg-primary text-primary-ink"
                  : "bg-background text-muted hover:text-foreground border border-rule"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs text-primary">
            {isEn ? "Execution:" : "Tiempo total:"} {pipe.time}
          </span>
          <button
            type="button"
            onClick={replayFlow}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-ink px-4 py-1.5 text-xs font-semibold hover:opacity-90 transition cursor-pointer"
          >
            <Play size={11} />
            <span>{isEn ? "Simulate run" : "Simular flujo"}</span>
          </button>
        </div>
      </div>

      {/* 4 Connected Pipeline Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pipe.nodes.map((node, i) => {
          const reached = i <= activeStep;
          return (
            <div
              key={node.title}
              className={`rounded-2xl border p-4 flex flex-col justify-between gap-4 transition-colors duration-300 ${
                reached
                  ? "border-primary/50 bg-background"
                  : "border-rule bg-background/50 opacity-60"
              }`}
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-semibold text-primary">
                    STEP 0{i + 1}
                  </span>
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${
                      reached
                        ? "bg-primary text-primary-ink"
                        : "border border-rule text-muted"
                    }`}
                  >
                    <Check size={11} />
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-foreground">
                  {node.title}
                </h4>
                <p className="text-xs text-muted leading-relaxed">{node.sub}</p>
              </div>

              <div className="rounded-lg border border-rule bg-surface px-3 py-2 font-mono text-[11px] text-primary truncate">
                {node.out}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Summary Strip */}
      <div className="pt-4 border-t border-rule flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
        <span>
          <strong className="text-foreground">
            {isEn ? "Trigger:" : "Disparador:"}
          </strong>{" "}
          {pipe.trigger}
        </span>
        <span className="font-mono text-primary font-semibold">
          {isEn ? "Impact:" : "Ahorro real:"} {pipe.saved}
        </span>
      </div>
    </div>
  );
}

