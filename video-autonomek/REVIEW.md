# Review — AUTONOMEK_ Promotional Motion Graphics Film (22s · 60fps)

## 1. Creative Calls & Unbuilt Storylines
- **Chosen Storyline (#1 — Cadena Continua de Producto)**: Built an object-to-object product progression connecting all 5 requested scenes (`0–3s` Hook `AUTONOMEK_`, `3–8s` Webs de Alto Impacto 99/100, `8–13s` Vendedores con IA en WhatsApp + CRM, `13–18s` Automatización de Procesos B2B con nodos y pulsos de luz, `18–22s` Cierre CTA `autonomek.com`) using the exact `autonomek.com` design system (`Tema 04 · Bosque & Petróleo`: `--bg: #070d0a`, `--surface: #0d1612`, `--card: #13211b`, `--primary: #a5d0b9`, `--secondary: #366367`, `--accent: #73a2b6`, `--fg: #ffffff`, `Inter` + `JetBrains Mono`) and the official integrated Euclidean `Keystone A` SVG lockup.
- **Unbuilt Storylines**:
  - *#2 (Antes vs. Después — Operación Manual vs. Ingeniería Autonomek)*: Split-screen comparison of manual midnight delays vs. automated response.
  - *#3 (Manifiesto Tipográfico + Telemetría en Vivo)*: Hard-cut kinetic typography manifesto over full-bleed analytics curves.

## 2. Measured vs. Visually Inspected
- **Measured (`npx hyperframes check --json`)**:
  - `lint`: 0 errors, 0 warnings across all 7 composition files (including `compositions/captions.html` and 3 `<audio>` tracks).
  - `runtime`: 0 errors, 0 warnings (deterministic GSAP timelines at 60 FPS with `data-motion-blur="on"`).
  - `layout`: 0 errors, 0 warnings across all sampled timepoints and overlap checks.
  - `contrast`: `139/139` pass (100% WCAG contrast pass on `#070d0a` / `#0d1612` / `#13211b`).
  - `craft`: `176/176` samples — `0` errors, `0` warnings (`0` `film_silent`, `0` `text_below_floor`, `0` `line_unread`, `0` `dead_stretch`, `0` `first_frame_empty`).
- **Measured Audio (`ffprobe` + `npx hyperframes audio renders/autonomek-promo-60fps.mp4 --json`)**:
  - Video stream: `h264`, `1920×1080`, `60/1` fps, `22.000s`. Audio stream: `aac`, `48000 Hz`, stereo, `22.000s`.
  - Integrated loudness: `-16.6 LUFS`, short-term max `-15.6 LUFS`, true peak `-1.9 dBTP`, `0` clipping (`clipping.count = 0`), `warnings: []`, trailing music fade-out silence strictly isolated to `21.765s–22.000s`.
  - Onset telemetry confirms transition whooshes, UI membrane pops, CTA cursor click at `7.135s` (1 frame after visual click at `7.12s`), and `18.028s` CTA riser impact.
- **Visually Inspected (`npx hyperframes snapshot --review`)**:
  - Inspected `review-beats.jpg` (10 beat frames), `review-phone.jpg` (360 px mobile legibility sheet), and `review-seam-01.jpg` through `review-seam-04.jpg` plus full-resolution beat frames (`beat-02`, `beat-06`, `beat-08`, `beat-10`).
  - Caught and fixed defects across review passes:
    1. `t=3.3s..20.0s · #web-main-title, #wa-main-title, #auto-main-title, #cta-headline · data-var-text duplicated text → removed parent data-var-text`.
    2. `t=3.0s..18.0s · scene seams · 1-frame dark dip → kept incoming stage visible at t=0`.
    3. `t=0.0s..22.0s · captions.html · active scale(1.07) caused wide accented words like autonomek.com. to touch preceding words ("enautonomek.com.") → widened column-gap to 22px and refined active emphasis to scale(1.025) + y:-3px`.
    4. `t=8.3s..17.8s · scene-whatsapp & scene-automation headers · header titles wrapped an orphan last word when camera bottom padding was increased for captions → tuned header font size and nowrap KPI pills onto one crisp line`.
- **Unchecked by Ear (Mandatory Disclosure)**:
  - Audio presence, timing onsets, loudness (`-16.6 LUFS`), true peak headroom (`-1.9 dBTP`), and zero-clipping were **measured via `npx hyperframes audio` and `ffprobe`, not heard**.

## 3. Weakest Shot & Future Polish
- **Weakest Shot**: Scene 4 (`13.0s–18.0s`, `scene-automation`) packs 6 nodes plus the live execution log into the `AppWindow` canvas; with additional duration (e.g., a 30s cut), the camera could punch in 1.6x on the central `Orquestador IA` node before pulling out to the full 6-node graph.

## 4. Intentional Warnings Kept
- None (`0 errors, 0 warnings` across `lint`, `check`, and `audio`).


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
