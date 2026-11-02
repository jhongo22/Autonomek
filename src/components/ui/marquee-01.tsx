"use client";

import React from "react";
import { Star, BadgeCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee-01-utils/marquee";

export interface ReviewItem {
  id: string;
  name: string;
  username: string;
  role: string;
  body: string;
  metric: string;
  profile: string;
}

const REVIEWS_ES: ReviewItem[] = [
  {
    id: "mateo-toxxic",
    name: "Mateo Gómez",
    username: "@toxxic_store",
    role: "Fundador · Toxxic",
    metric: "2x ventas en 30 días",
    body: "“Duplicamos nuestras ventas en el primer mes de lanzar el sitio web con integración directa a WhatsApp. La velocidad de carga y el catálogo móvil cambiaron todo.”",
    profile:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "carolina-misia",
    name: "Carolina Rojas",
    username: "@villagrandelamisia",
    role: "Administradora · Villa Grande La Misia",
    metric: "-80% carga manual",
    body: "“Antes pasábamos todo el día respondiendo disponibilidades. Con el sistema y asistente de reservas, las fechas se agendan solas y redujimos el trabajo manual un 80%.”",
    profile:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "sofia-comidas",
    name: "Sofía Medina",
    username: "@sabrositas_ia",
    role: "Gerente · Cadena Gastronómica",
    metric: "Pedidos 24/7 con IA",
    body: "“El agente de IA en WhatsApp escucha audios, valida comprobantes de pago y pasa la orden a cocina a medianoche sin errores. No volvimos a perder ventas nocturnas.”",
    profile:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "andres-ecografos",
    name: "Dr. Andrés Mejía",
    username: "@alquilerecografos",
    role: "Director · Alquiler de Ecógrafos",
    metric: "Reservas en tiempo real",
    body: "“Pasamos de manejar agendas en hojas sueltas a una plataforma con calendario en vivo, control de inventario médico y alertas automáticas por WhatsApp.”",
    profile:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "valeria-clinica",
    name: "Dra. Valeria Toro",
    username: "@medicinaregenerativa",
    role: "Directora · Clínica Regenerativa",
    metric: "-70% carga en recepción",
    body: "“El recepcionista de IA atiende pacientes en 1 segundo, responde dudas sobre procedimientos y agenda valoración médica directamente en nuestro calendario.”",
    profile:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "ricardo-telocalizo",
    name: "Ricardo Herrera",
    username: "@telocalizomx",
    role: "Director Comercial · Telocalizo MX",
    metric: "#1 en SEO B2B",
    body: "“Nuestro portal B2B posicionó en los primeros lugares de Google en México y el cotizador mayorista nos entrega prospectos calificados todas las semanas.”",
    profile:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "laura-lajuana",
    name: "Laura Restrepo",
    username: "@lajuanacerrotusa",
    role: "Propietaria · La Juana de Cerro Tusa",
    metric: "0% comisiones OTA",
    body: "“La web transmite toda la exclusividad de la finca y sincroniza calendarios con Airbnb y Booking automáticamente. Hoy la mayoría de reservas entran directo.”",
    profile:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "camilo-legal",
    name: "Camilo Vargas",
    username: "@operaciones_legal",
    role: "Socio · Legal & Operaciones",
    metric: "Contratos en 3 seg",
    body: "“Automatizamos la generación y envío de contratos en PDF. Lo que antes nos tomaba media hora de digitación por cliente ahora ocurre en segundos sin un solo error.”",
    profile:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80",
  },
];

const REVIEWS_EN: ReviewItem[] = [
  {
    id: "mateo-toxxic",
    name: "Mateo Gómez",
    username: "@toxxic_store",
    role: "Founder · Toxxic",
    metric: "2x sales in 30 days",
    body: "“We doubled our sales in the first month after launching the website with direct WhatsApp integration. The sub-second load speed and mobile catalog changed everything.”",
    profile:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "carolina-misia",
    name: "Carolina Rojas",
    username: "@villagrandelamisia",
    role: "Manager · Villa Grande La Misia",
    metric: "-80% manual workload",
    body: "“We used to spend all day answering availability inquiries. With the automated booking system, dates are reserved on their own and manual work dropped by 80%.”",
    profile:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "sofia-comidas",
    name: "Sofía Medina",
    username: "@sabrositas_ai",
    role: "Manager · Restaurant Chain",
    metric: "24/7 AI orders",
    body: "“The WhatsApp AI agent listens to voice notes, verifies payment receipts, and dispatches orders to the kitchen at midnight with zero errors. We never miss a night sale.”",
    profile:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "andres-ecografos",
    name: "Dr. Andrés Mejía",
    username: "@alquilerecografos",
    role: "Director · Ultrasound Rentals",
    metric: "Real-time booking",
    body: "“We went from managing schedules on spreadsheets to a custom platform with live availability, medical stock tracking, and instant WhatsApp confirmations.”",
    profile:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "valeria-clinica",
    name: "Dr. Valeria Toro",
    username: "@regenerativeclinic",
    role: "Director · Regenerative Clinic",
    metric: "-70% front-desk load",
    body: "“Our AI receptionist replies to patients in 1 second, answers procedure questions accurately, and books medical evaluations straight into our calendar.”",
    profile:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "ricardo-telocalizo",
    name: "Ricardo Herrera",
    username: "@telocalizomx",
    role: "Commercial Director · Telocalizo MX",
    metric: "#1 B2B SEO rank",
    body: "“Our B2B portal ranked at the top of Google in Mexico and the automated wholesale quoter delivers qualified enterprise leads every single week.”",
    profile:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "laura-lajuana",
    name: "Laura Restrepo",
    username: "@lajuanacerrotusa",
    role: "Owner · La Juana de Cerro Tusa",
    metric: "0% OTA commissions",
    body: "“The website captures the luxury of our estate and syncs calendars with Airbnb and Booking automatically. Most of our bookings now come in directly.”",
    profile:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "camilo-legal",
    name: "Camilo Vargas",
    username: "@legal_ops",
    role: "Partner · Legal & Operations",
    metric: "Contracts in 3 sec",
    body: "“We automated PDF contract drafting and delivery. What used to take 30 minutes of manual typing per client now happens in seconds without a single error.”",
    profile:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80",
  },
];

const ReviewCard = ({
  profile,
  name,
  username,
  role,
  metric,
  body,
}: ReviewItem) => {
  return (
    <Card className="group/card relative h-full w-[310px] sm:w-[360px] cursor-pointer overflow-hidden rounded-[22px] border border-rule bg-surface/90 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 shadow-lg shadow-black/20 p-5">
      <CardContent className="p-0 flex flex-col justify-between h-full gap-3.5">
        {/* Top bar: metric pill + 5 stars */}
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 border border-primary/25 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
            {metric}
          </span>
          <div className="flex items-center gap-0.5 text-primary" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={12} className="fill-primary text-primary" />
            ))}
          </div>
        </div>

        {/* Review body */}
        <p className="text-xs sm:text-sm leading-relaxed text-foreground/95 line-clamp-3">
          {body}
        </p>

        {/* Author footer */}
        <div className="flex flex-row items-center gap-3 pt-2.5 border-t border-rule">
          <img
            className="h-9 w-9 rounded-full object-cover border border-primary/40 shrink-0"
            width="36"
            height="36"
            alt={name}
            loading="lazy"
            decoding="async"
            src={profile}
          />
          <div className="flex flex-col min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <p className="text-sm font-semibold text-foreground truncate">{name}</p>
              <BadgeCheck size={14} className="text-primary shrink-0" />
            </div>
            <p className="text-xs font-medium text-muted-foreground truncate">
              {role} <span className="text-subtle">· {username}</span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function TestimonialMarqueeDemo({
  isEn = false,
  reviews,
}: {
  isEn?: boolean;
  reviews?: ReviewItem[];
}) {
  const list = reviews ?? (isEn ? REVIEWS_EN : REVIEWS_ES);
  const half = Math.ceil(list.length / 2);
  const firstRow = list.slice(0, half);
  const secondRow = list.slice(half);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <Marquee pauseOnHover className="[--duration:34s] [--gap:1.25rem]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:34s] [--gap:1.25rem] mt-2">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-1/6 bg-gradient-to-r" />
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-1/6 bg-gradient-to-l" />
    </div>
  );
}

