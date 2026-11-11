# SPEC — AUTONOMEK_ Promotional Motion Graphics Film

GOAL:    Make B2B decision-makers feel the speed, precision, and authority of AUTONOMEK_ and visit autonomek.com to automate their sales and operations.
OUTPUT:  HyperFrames, 1920 x 1080, 60 fps
TIME:    22 seconds x 60 fps = 1320 frames (120 BPM visual grid = 30 frames per beat)
LOOK:    Ground: Forest Night #070d0a with subtle 1px architectural grid (rgba(255,255,255,0.05)) and radial engineering dot matrix (rgba(165,208,185,0.22) 1px at 24px spacing);
         Surfaces: Elevated surface #0d1612, internal cards/chrome #13211b, borders 1px rgba(255,255,255,0.12) and strong active border rgba(165,208,185,0.35);
         Ink: Pure white #ffffff primary, muted #b4c8be secondary, subtle #7a9488 captions;
         Accents: Mineral Mint #a5d0b9 (primary brand & active states, ink #070d0a), Fjord Petrol #366367 (secondary depth), Steel Glacier #73a2b6 (telemetry/chart accent), semantic #28c840 (PageSpeed 99-100), #25d366 (WhatsApp live), #34b7f1 (WhatsApp read check);
         Display face: Inter 700-800, 56px-88px, tracking -0.03em;
         Body face: Inter 400-600, 26px-32px;
         Mono face: JetBrains Mono 500-700, 22px-28px, tabular-nums;
         Light & depth: 24px border-radius on bento containers, 0 24px 60px rgba(0,0,0,0.55) contact shadow.
OBJECTS: 1. Official Euclidean Keystone A + AUTONOMEK_ lockup (from AutonomekLogo.tsx / branding/04-bosque-petroleo) with blinking terminal underscore `_`.
         2. AppWindow chrome (macOS traffic lights #ff5f57, #febc2e, #28c840 + centered lock address bar `tuempresa.com`, `WhatsApp Business · Agente IA`, `automatizaciones / nueva-venta`).
         3. WebsiteSeoApp & AnalyticsBento: Live hero assembly, 4 circular SVG PageSpeed gauges (99 Rendimiento, 100 Accesibilidad, 100 Prácticas, 100 SEO), Google/ChatGPT #1 citation card, and interactive cursor clicking `Cotizar por WhatsApp`.
         4. WhatsAppAgentApp: Audio waveform message (`0:12`), instant 1.1s AI reply, booking confirmation (`Listo ✅ Mañana 10:00 a. m.`), and synchronized `CRM · Lead Pipeline` filling `Laura M. · Consulta · Mañana 10:00 · Agendado ✓`.
         5. AutomationCanvasApp: 5 connected B2B nodes (`WhatsApp Pedido` -> `Agente IA Valida` -> `Factura DIAN / ERP`, `Contrato PDF`, `CRM Actualizado`) with travelling light pulses on SVG cubic-bezier edges and live execution log (`129 procesos · 0 errores`).
MOTION:  Enter: `expo.out` / `power4.out` (0.35s-0.55s) with blur(8px -> 0px) and word stagger (0.065s);
         Springs: `back.out(1.5)` and `elastic.out(1, 0.75)` (damping ~0.78) on UI cards, badges, chat bubbles, and node checkmarks (never on opacity);
         Camera / Morph: `power3.inOut` (0.45s-0.65s) 2.5D scale/translate transitions connecting scene objects;
         Exit: `power3.in` (0.25s-0.32s) with motion blur `data-motion-blur="on"` on root.
SHOTS:   - Shot 1 (f0-f180 / 0.0s-3.0s, `scene-hook`): Frame 0 opens with architectural grid, Keystone A badge and kinetic reveal of `AUTONOMEK_` + concept *"Ingeniería de software e Inteligencia Artificial para escalar tu negocio"* and 3 pillar telemetry pills (`0.6s Web`, `1.1s IA WhatsApp`, `24/7 Automatización`). Camera zooms through the Web pillar pill at 2.65s.
         - Shot 2 (f180-f480 / 3.0s-8.0s, `scene-web`): Spatial zoom opens `tuempresa.com` AppWindow; UI components assemble with spring physics while PageSpeed SVG rings animate to `99 Rendimiento / 100 SEO`, `0.6s LCP` badge pulses, Google & ChatGPT #1 citation locks in, and title **"Páginas Web de Alto Impacto"** holds clear. At 7.5s the cursor clicks `Cotizar por WhatsApp` (#25d366), morphing the container.
         - Shot 3 (f480-f780 / 8.0s-13.0s, `scene-whatsapp`): Morph lands inside `WhatsApp Business · Agente IA` + `CRM · Lead Pipeline`. Client voice note (`0:12`) arrives, AI node processes in `1.1s`, replies and confirms appointment (`Listo ✅ Mañana 10:00 a. m.`), while CRM pipeline auto-checks `Nuevo -> Calificado -> Agendado ✓` (`148 atendidos hoy`). Key title: **"Vendedores con IA en WhatsApp"**. At 12.5s camera pulls back from the chat window into the node canvas.
         - Shot 4 (f780-f1080 / 13.0s-18.0s, `scene-automation`): Camera pullback reveals the Web & WhatsApp chat wired as trigger nodes into the B2B ecosystem (`Agente IA` -> `Factura DIAN / ERP`, `Contrato PDF`, `CRM Actualizado`). Travelling light pulses (`#a5d0b9` & `#73a2b6`) race along SVG bezier paths, nodes light up with spring checkmarks, and the live terminal logs `Flujo completado · 0 pasos manuales`. Key title: **"Automatización de Procesos para tu Negocio"**.
         - Shot 5 (f1080-f1320 / 18.0s-22.0s, `scene-cta`): All 3 module cards converge toward the center core and crystallize into the official `AUTONOMEK_` Keystone lockup, the glowing CTA pill **`autonomek.com`** (`+57 300 443 5894`), and the closing headline *"Transforma tu operación hoy"* held rock-steady until 22.0s.
BANNED:  Linear fade-ins; purple/blue neon cyberpunk gradients; invented generic dashboards unrelated to autonomek.com; double-AA logo (`AAUTONOMEK`); small unreadable text (< 26px for key copy); floating titles that drift after landing; empty frame 0.
MOOD / AUDIO:
         - Voiceover (`voiceover.mp3`, track 3): Spanish B2B narrator (`es-CO-GonzaloNeural`, `+10%` pace, normalized `-16.6 LUFS`, `-2.2 dBTP`, 62 timed word cues in `assets/transcript.json`).
         - Music Bed (`music-bed.mp3`, track 4): Dark-emerald 120 BPM electronic pulse with mid-presence > 150 Hz (phone-speaker audible) and RMS sidechain ducking under voiceover (`-31.0 LUFS`, `-15.9 dBTP`, `-14.4 LU` under VO, 0.6s fade-out).
         - Sound Effects (`sfx-track.mp3`, track 5, `data-volume="0.85"`): Airy filtered transition whooshes at 3s/8s/13s, damped membrane UI pops (`+1` frame post-hit), dry switch click on `Cotizar por WhatsApp` at `7.12s`, and single air riser + sub impact at `18.00s` CTA (`-24.9 LUFS`, `-3.8 dBTP`, zero sine chimes/tings).
CAPTIONS: Mounted via `#captions` (`data-track-kind="captions"`, `compositions/captions.html`) on `z-index: 20`. 18 strictly non-overlapping 2–4 word groups (`cg-0..cg-17`, `0.18s..20.92s`) in `Inter 800 40px` (`column-gap: 22px`, Mineral Mint `#a5d0b9` keyword highlights, hard `visibility: "hidden"` exits). Bottom clear zone reserved below `y=924px` (`captions-safe-band` at `bottom: 42px; height: 96px`).
QA:      t=0.1s (non-empty hook frame), t=1.5s (Hook settled + caption), t=5.5s (Web + 99 PageSpeed + caption), t=10.5s (WhatsApp AI + CRM + caption), t=15.5s (Automation node graph + caption), t=20.0s (CTA lockup + autonomek.com + caption), t=21.2s (captions hidden, CTA clean end state).
         Final MP4 (`autonomek-promo-60fps.mp4`): 1920×1080 @ 60fps, AAC stereo 48 kHz, measured `-16.6 LUFS` integrated (`-15.6` short-term max), `-1.9 dBTP` true peak, `0` clipping.


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
