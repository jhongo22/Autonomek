# SPEC — AUTONOMEK_ 9:16 Vertical Promo Video (Instagram Reels — 22s, 60fps, 1080×1920)

## 1. Frame & Timing Contract
- **Dimensions**: `1080 × 1920` (9:16 Vertical — Instagram Reels / TikTok / Shorts)
- **Frame Rate**: `60 fps` (`1320` total frames)
- **Total Duration**: `22.0s` (`0.0s – 22.0s`)
   - **Instagram Reels Safe Zone & Caption Band**:
     - Top `168px` reserved for status bar & Reels header (`y >= 176px`)
     - Right `104px` reserved for Instagram action rail (`likes/comments/share` — `x <= 976px`)
     - Left `44px–56px` margin
     - Bottom UI content ends `<= 1300px`; **dynamic captions** sit cleanly in `y: 1358..1542` (`left: 44px; width: 932px; bottom: 378px; height: 184px`), staying well above the bottom Instagram caption/audio HUD (`y >= 1580px`).
- **Audio & Captions**:
  - `assets/voiceover.mp3` (`track-index="3"`): Spanish narrator (`es-CO-GonzaloNeural`, `+10%`, `-16.6 LUFS`, `-2.2 dBTP`).
  - `assets/music-bed.mp3` (`track-index="4"`): 120 BPM tech pulse with >150 Hz presence for mobile phone speakers and RMS VO ducking (`-31.0 LUFS`, `0.6s` fade-out).
  - `assets/sfx-track.mp3` (`track-index="5"`, `data-volume="0.85"`): Aspect-calibrated Reels UI pops & whooshes + `18.00s` CTA riser impact (cursor click removed for tap/mobile UX, `-24.8 LUFS`, zero sine chimes).
  - `compositions/captions.html` (`data-track-kind="captions"`, `z-index: 20`): 18 non-overlapping 2–4 word groups (`0.18s..20.92s`), `Inter 800 42px`, `column-gap: 20px`, Mineral Mint keyword emphasis, hard `visibility: "hidden"` exit cleanup.
- **Motion Blur**: `data-motion-blur="on"` on root composition (`180°` shutter angle)

## 2. Exact Brand Tokens (`Tema 04 · Bosque & Petróleo`)
- `--bg`: `#070d0a`
- `--surface`: `#0d1612`
- `--card`: `#13211b`
- `--fg`: `#ffffff`
- `--muted`: `#b4c8be`
- `--subtle`: `#7a9488`
- `--primary`: `#a5d0b9`
- `--primary-ink`: `#070d0a`
- `--secondary`: `#366367`
- `--accent`: `#73a2b6`
- `--rule`: `rgba(255, 255, 255, 0.12)`
- `--rule-strong`: `rgba(165, 208, 185, 0.35)`

## 3. Vertical Typography Scale (1080×1920)
- **Font Family**: `'Inter'`, `'JetBrains Mono'`
- **Hero Hook Claim (Scene 1)**: `64px`, `weight: 800`, `line-height: 1.06`, `letter-spacing: -0.035em`
- **Scene Section Headline (Scenes 2, 3, 4)**: `56px`, `weight: 800`, `line-height: 1.06`, `letter-spacing: -0.03em`
- **Card Titles**: `32px`, `weight: 700`
- **Body / Chat Bubbles / Node Copy**: `29px–30px`, `weight: 500` (strictly `>= 28px`)
- **Monospace Telemetry & KPIs**: `'JetBrains Mono'`, `28px–30px`, `weight: 600`

## 4. 5-Scene Vertical Architecture (Recomposed for 9:16 Single-Column Stack)
1. **Escena 1 (`0.0s – 3.0s`) — El Gancho / Identidad**:
   - Centered inside safe band (`y: 260..1460`): Eyebrow pill `INGENIERÍA DE SOFTWARE + IA B2B`, Euclidean Keystone `A` + `AUTONOMEK_` lockup, kinetic claim *"Ingeniería de software e Inteligencia Artificial para escalar tu negocio"*, and 3 stacked vertical pillar chips (`01 WEB 99+`, `02 WHATSAPP IA 24/7`, `03 AUTOMATIZACIÓN B2B`).
2. **Escena 2 (`3.0s – 8.0s`) — Pilar 1: Páginas Web de Alto Impacto**:
   - Top header block (`y: 180..440`): `PILAR 01 // ARQUITECTURA WEB` + **"Páginas Web de Alto Impacto"**.
   - Center stage (`y: 460..1180`): Vertical dark-emerald browser mockup `autonomek.com` assembling in real time with `99/100 Speed`, `0.6s LCP`, and `+3.4x Conversión`.
   - Bottom stack (`y: 1200..1560`): Lighthouse `99/100` gauge card + `#1 Posicionamiento en Google & ChatGPT` card.
3. **Escena 3 (`8.0s – 13.0s`) — Pilar 2: Vendedores con IA en WhatsApp**:
   - Top header block (`y: 180..430`): `PILAR 02 // AGENTES COMERCIALES 24/7` + **"Vendedores con IA en WhatsApp"**.
   - Center stage (`y: 450..1190`): Live WhatsApp Business AI thread (Lead message → IA RAG response in `1.4s` → Link de pago + Cita confirmada **Jueves 10:00 AM**).
   - Bottom stack (`y: 1210..1565`): Agente IA RAG node (`latencia 1.4s`) + CRM Pipeline (`Lead Calificado → Cita Agendada $4,800 USD`).
4. **Escena 4 (`13.0s – 18.0s`) — Pilar 3: Automatización de Procesos**:
   - Top header block (`y: 180..430`): `PILAR 03 // ORQUESTACIÓN B2B` + **"Automatización de Procesos para tu Negocio"**.
   - Center stage (`y: 450..1240`): Vertical B2B Node DAG (`920 × 770`) with travelling SVG light pulses: Top inputs (`Web 99+` & `WhatsApp IA`) → Center Hub (`AUTONOMEK_ AI CORE`) → Bottom outputs (`Factura ERP`, `Contrato PDF`, `CRM & Agenda`).
   - Bottom stack (`y: 1265..1565`): Live terminal log (`2.3s total · 0 humanos`) + ROI (`-85% carga manual`).
5. **Escena 5 (`18.0s – 22.0s`) — Cierre / Call to Action**:
   - Modules converge vertically into the center safe band (`y: 260..1520`): Official `AUTONOMEK_` Euclidean lockup, **"Transforma tu operación hoy"**, illuminated pill **`autonomek.com`**, and 3 pillar badges.


---

## Revisión v2 (2026-11-11) — Ritmo pausado + nuevo diseño sonoro

> Esta sección reemplaza los tiempos y la descripción de audio anteriores (22 s / 120 BPM).

- **Duración**: 34.0 s × 60 fps = 2040 frames. Escenas: Hook 0–6 s · Web 6–13 s · WhatsApp IA 13–20.5 s · Automatización 20.5–28 s · CTA 28–34 s.
- **Animación**: la coreografía de cada escena se estira con un timeline contenedor GSAP (`STRETCH` = 2.0 / 1.4 / 1.5 / 1.5 / 1.5), así que los movimientos son más pausados sin cambiar el diseño.
- **Voz**: `es-CO-GonzaloNeural` a `-5%`, sin compresión `atempo` (antes `+10%` y hasta 1.5× más rápida). Cada frase entra 0.45 s después de que empieza su escena y termina al menos 0.6 s antes del corte.
- **Música**: pad ambiental cálido en Fa mayor (Dm7 → Bbmaj7 → Fmaj7 → Cadd9 → Fadd9) con un arpegio suave estilo felt-piano a 80 BPM. Sin percusión ni barridos de tono (quitamos el bombo con caída de tono y los plucks de corcheas que sonaban como disparos). Ducking bajo la voz.
- **SFX**: transiciones suaves de aire con filtro fijo en 6 / 13 / 20.5 / 28 s, un bloom cálido en acorde para el CTA a los 28 s y un clic suave del cursor a 11.77 s (solo horizontal). Quitamos los pops con caída de tono, los whooshes con barrido y el riser + sub impact.
- **Subtítulos**: se regeneraron los 18 grupos a partir de los nuevos tiempos por palabra (`assets/transcript.json`).
- **Verificación**: `lint` 0/0 · `check` ok: true (0 errores, 0 advertencias) · `snapshot --review` revisado · render 60 fps, 34.0 s · `hyperframes audio`: -17.1 LUFS, true peak ≈ -1.0/-1.1 dBTP, 0 clips, 0 advertencias. El audio se **midió con herramientas, no se escuchó**.
