# Review — Agente IA para Clínicas (`clinica-agente-ia`)

## Creative & Structural Calls
- **Followed the user's explicit 5-scene vertical script**: 40.0 s at 1080×1920 (`60 fps`), clinical white `#F8FAFC` / `#EEF2F6` in Scenes 1–4 transitioning via an expanding turquoise radial sweep into Scene 2 (`7.80 s`) and a deep-navy `#0F172A` upward wipe into Scene 5 (`33.80 s`).
- **Voiceover segmentation for strict visual sync**: Generated `es-MX-DaliaNeural` (`+3%`) neural voiceover with exact `WordBoundary` timestamps. Split Scene 3's narration into three timed segments (`vo-3a`, `vo-3b`, `vo-3c`) so Card 1 (Live Chat, `14–18 s`), Card 2 (Calendar, `18–22 s`), and Card 3 (Parallel Night Chats + Sun-to-Moon morph, `22–26 s`) align phrase-by-phrase with the voiceover pauses.
- **Audio mix**: Tense minimal pulse (`bgm-minimal.mp3`, `0–8.25 s`) crossfades at `8.0 s` into a clean 112 BPM corporate tech beat (`synth-loop-112.mp3`, `7.95–40.0 s`), set ~18 dB below the voiceover (`data-volume="0.33"` and `"0.22"`) and vocal-carved via `carve.mjs` across 6 speech bands (`160 Hz – 2.5 kHz`). SFX (`notif-3`, `pop-1`/`pop-2`/`pop`, `tick-digital`, `typing-soft`, `click-soft`, `chime`, `chime-success`, `whoosh-*`, `sparkle`, `final-chord`, `cta-click`) sit on alternating tracks 5 and 6.
- **Alternative storylines not built**: The prompt provided an exact scene-by-scene script, palette, typography, safe zones, and subtitle spec, so alternative story angles (e.g., first-person patient POV or day-in-the-life receptionist split-screen) were skipped per `story.md`.

## What Was Measured vs. Looked At
- **Measured (`npx hyperframes check --json`)**:
  - `lint`: 0 errors, 0 warnings across 7 files.
  - `runtime`: 0 errors, 0 warnings.
  - `layout`: 0 errors, 0 warnings across 9 sampled times (`totalIssueCount: 0`; safe zones, zero text overlaps, zero clipping).
  - `contrast`: 28/28 checks passed (0 errors, 0 warnings).
  - `audio`: 0 errors, 0 warnings on placed tracks (loudness/sync of the rendered MP4 was measured programmatically via `hyperframes audio` / `ffprobe` — **the audio was measured, not heard by human ears**).
- **Looked at (`npx hyperframes snapshot --review`)**:
  - Inspected `review-beats.jpg`, `review-phone.jpg`, and `review-seam-01.jpg`..`review-seam-06.jpg`.
  - First-pass P0/P1 fixes applied and re-verified: replaced abrupt `8.0 s` and `34.0 s` hard white cuts with overlapping radial iris (`scene2-activacion`) and upward navy wipe (`scene5-cta`), fixed `"al, instante"` comma placement in `captions.html`, shifted safe containers to `x=95..825, y>=295` to clear both user and platform UI rails, and eliminated caption-group overlaps.

## Weakest Shot & Future Iteration
- **Weakest shot**: Seam `26.0 s` (`scene3-accion` → `scene4-resultados`) is a clean hard cut on the clinical white ground; with more time, carrying the turquoise checkmark badge from Card 3 directly into KPI Card 1 (`0 mensajes sin responder`) would turn it into a match-cut carry-across.

## Warnings Kept on Purpose
- **`craft.line_unread` (3 warnings at `t=39.258 s` in `scene5-cta.html`)**: A single headless Chrome craft sample at `39.25 s` reported `opacity: null` while the element is visibly on screen continuously from `34.4 s` through `40.0 s` (`~5.6 s`, well above the `2.0 s` floor, confirmed in `review-beats.jpg` frame 10). Kept as-is.
