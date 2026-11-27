GOAL:    Clinic owners immediately feel the relief of replacing chaotic manual messaging with a 24/7 AI Agent and click "Solicita una demo".
OUTPUT:  HyperFrames, 1080 x 1920 (9:16 vertical), 60 fps, MP4 ("clinica-agente-ia.mp4")
TIME:    40.0s x 60fps = 2400 frames; 112 BPM (4 beats = 2.143s) for Scenes 2-5 after 8.0s tense minimal pulse.
LOOK:    Modern SaaS / HealthTech Flat 2D Vector Motion Graphics.
         Grounds: Clinical White `#F8FAFC`, Soft Slate Gray `#EEF2F6` (Scenes 1-4); Deep Navy `#0F172A` (Scene 5).
         Ink: Deep Navy `#0F172A` (primary), Slate `#475569` (secondary), White `#FFFFFF` on dark surfaces.
         Accents: Scene 1 Alert Coral `#DC2626` / `#EF4444` and Amber `#F59E0B`; Scenes 2-5 Tech Turquoise `#06B6D4` (`#0891B2` for white-text pills) and Mint Green `#10B981` (`#059669` for white-text badges).
         Typography: Inter (700/800/900 display 48-68px, -0.025em tracking; 500/600/700 UI body 28-36px; tabular-nums for all counters).
         Surfaces: Border-radius `20px`, 1.5px `#E2E8F0` borders, soft elevation shadow `0 18px 44px rgba(15, 23, 42, 0.08)`.
         Safe Zones: All focal UI cards and readable text strictly inside x=60..940 (leaving 120px+ right margin free) and y=255..1495 (leaving top 250px and bottom 420px free). Dynamic karaoke captions centered at y~1370..1455 (470px from bottom, max-width 780px so x stays inside 150..930).
OBJECTS: 1. Mobile Clinic Inbox (Scene 1): Flat 2D smartphone card with channel-badged patient bubbles (WhatsApp, Instagram, Web), live unread counter (`12` -> `248 sin leer`), spinning red/amber vector clock, and `"Espera: 4+ horas"` alert pill.
         2. Geometric AI Agent Emblem (Scene 2): Rounded turquoise squircle chat mark with 4-point sparkle and rotating orbital ring, morphing messy chat rows into an ordered 24/7 queue.
         3. Interactive Solution Cards (Scene 3): Card 1 Live Chat (`"Respondido en 3 seg"`), Card 2 Mini Vector Calendar (`"Cita confirmada"` with animated SVG check), Card 3 Parallel 3-Chat Matrix with Sun-to-Moon (`02:14 AM`) morph.
         4. Clinic Receptionist & Odometer Metrics (Scene 4): Calm flat-2D receptionist at tidy clinic monitor behind 3 stacked Mint/Turquoise odometer metric cards (`0 mensajes sin responder`, `< 5 seg`, `+3x`).
         5. End Card (Scene 5): Deep Navy `#0F172A` wipe, `[TU LOGO AQUÍ]` dashed vector slot, `"Automatiza tu clínica hoy."`, and pulsing `"Solicita una demo"` turquoise button.
MOTION:  Arrival eases `power4.out` / `expo.out` (18-28 frames), UI spring entrances `back.out(1.45)`, color/wipe floods `power3.inOut`, continuous clock/orbit rotation `linear` (never `repeat: -1`), exits 40% shorter `power3.in`. Zero bounce on digits/text.
SHOTS:   - Scene 1 (`scene1-caos`, 0.0-8.0s, frames 0-480): Immediate inbox hook, 6 stacked chat bubbles, counter 12->248, spinning clock + `"Espera: 4+ horas"`. VO: `vo-1.mp3` (0.35-6.63s).
         - Scene 2 (`scene2-activacion`, 8.0-14.0s, frames 480-840): Turquoise radial pulse clears red chaos, AI Agent orbital emblem lands, unordered messages snap into clean vertical stack. VO: `vo-2.mp3` (8.15-13.84s).
         - Scene 3 (`scene3-accion`, 14.0-26.0s, frames 840-1560): 3 slide-up cards: Live Chat (14-18s, `vo-3a`), Calendar Booking (18-22s, `vo-3b`), Parallel Night Chats + Sun->Moon (22-26s, `vo-3c`).
         - Scene 4 (`scene4-resultados`, 26.0-34.0s, frames 1560-2040): Calm receptionist 2D illustration + 3 odometer KPI cards (`0`, `< 5 seg`, `+3x`). VO: `vo-4.mp3` (26.40-31.32s).
         - Scene 5 (`scene5-cta`, 34.0-40.0s, frames 2040-2400): Deep navy upward wipe, `[TU LOGO AQUÍ]`, `"Automatiza tu clínica hoy."`, `"Solicita una demo"` button + pulse. VO: `vo-5.mp3` (34.40-39.29s).
         - Captions (`captions`, 0.0-40.0s): 2-4 word groups in `#0F172A` 88% pill at bottom 470px, word-by-word `#06B6D4`/`#10B981` karaoke pop (1.0 -> 1.08).
BANNED:  Dark void in Scenes 1-4, neon glow/lens flares/floating particles, glassmorphism blur cards, serif fonts, monospace `01 / 02` decorative labels, corner HUD brackets, docked corner logos, text under 28px, bounce on numeric readouts, CSS/GSAP transform conflicts, `repeat: -1`, `Math.random()`, `Date.now()`.
QA:      Snapshot 0.0s (Frame 0 hook), 4.5s (248 unread + spinning clock), 8.5s (turquoise sweep + AI icon), 12.2s (ordered queue), 16.0s (Chat card + 3s badge), 20.0s (Calendar check), 24.8s (Night parallel chats + moon), 30.5s (3 metric odometers + receptionist), 37.8s (CTA end card), plus `check --json`, `snapshot --review`, and `audio` loudness check.
