# Review: Cartoon 2D Vertical Video — Autonomek (`cartoon-web-autonomek.mp4`)

## 1. Isolation Verification
- Built completely from scratch in independent project directory `cartoon-web-autonomek/`.
- Zero files, styles, assets, scripts, or references were read, listed, inspected, or copied from `video-autonomek-intro`, `video-autonomek-web-invisible`, or any previous workspace project.

## 2. Spec & Visual Review
- **Format & Resolution**: `1080x1920` (9:16 vertical), `60 fps`, `33.00s` (`1980` frames), warm cream `#FFF8F0` ground with cel-shaded 2D SVG cartoon strokes (`#1E293B`, `4px`) and high-contrast palette (`#2563EB`, `#10B981`, `#FF6B6B`, `#FACC15`).
- **Frame `0.0s` Hook**: Immediate cold-open without fade-in showing Carlos panicked holding `"FACTURA WEB $1,500 USD"`, cobwebbed laptop with `"404 SIN VISITAS"` + swinging spider, dusty phone (`0`), `"MI NEGOCIO"` counter, and hanging `"6 MESES DESPUÉS: 0 CLIENTES"` sign.
- **Scene Transitions & Camera Motion**:
  - Scene 1 (`0.0s–7.8s`): Tumbleweed roll/bounce across desk, phone dust shake, speech bubble (`back.out`), and dynamic zoom into the laptop screen (`scale: 2.75`) at `7.25s`.
  - Scene 2 (`7.8s–16.4s`): Zoomed-in browser view with ChatGPT robot & Google magnifying glass recommending `"Tu Competencia"`, while heavy anvil drops onto `"Carga Lenta: 4.8s / Invisible en IA"` and panicked Carlos grabs his head.
  - Scene 3 (`16.4s–24.6s`): Electric-blue flash entrance, anime speed rays, Mek robotic somersault (`elastic.out`), laser zap clearing cobwebs, star eyes + `"¡Activando Ingeniería Autonomek!"`, 3 stacked Lego feature blocks (`"Carga en 0.6s"`, `"#1 en Google"`, `"Recomendado por ChatGPT"`), and speedometer sweeping smoothly to `99/100`.
  - Scene 4 (`24.6s–33.0s`): Wide desk pullback, jumping WhatsApp phone launching 3 client alerts, falling vector confetti, Carlos smiling with steaming coffee, high-five with Mek + clap burst, sunglasses drop, and clean bottom safe-zone CTA (`"AUTONOMEK / Audita tu web gratis en / autonomek.com"`).

## 3. Technical & Preflight Checks
- **`npx hyperframes check --strict --json`**: Passed with `ok: true`, `0` lint errors/warnings (5 files scanned), `0` runtime errors, `0` layout errors across all 9 time samples, `19/19` WCAG contrast checks passed, `0` craft warnings across `264` frames (`0.125s` step), `0` audio errors/warnings.
- **SVG Transform Origin Fixes Applied & Verified**: Switched SVG group rotation pivots (`#s1-spider`, `#s1-phone`, `#s3-mek-arm-l`, `#s3-needle`, `#s3-eyes-star`, `#s4-carlos-highfive-arm`, `#s4-mek-arm-l`, `#s4-clap-burst`, `#s4-sunglasses`) to explicit GSAP `svgOrigin` while preserving CSS `transform-origin` for `#s3-mek`'s full-body somersault/float, and moved `#s1-bubble-inner` border styling inside `.s1-bubble` so the speech tail joins cleanly without a top stroke crease.
- **Rendered MP4 Verification (`cartoon-web-autonomek.mp4`)**:
  - **`ffprobe`**: `1080x1920`, H.264 `60/1 fps`, AAC `48000 Hz` stereo, `33.000000 s`, `10,173,470` bytes (`~2.47 Mbps`).
  - **Decoded MP4 Frame Inspection**: Extracted `0.0s`, `3.5s`, `10.8s`, `19.8s`, and `28.8s` directly from `cartoon-web-autonomek.mp4` via `ffmpeg`; all 5 keyframes match composition states cleanly with zero frozen sub-compositions or clipping.

## 4. Audio Mix Verification (Measured, Not Heard)
> Audio properties below were measured programmatically via `ffprobe`, `ffmpeg -af ebur128=peak=true`, and `npx hyperframes audio` — not audited via speakers/listening.

- **Voiceover (`edge-tts` `es-ES-AlvaroNeural`, `+0%`)**: 4 Spanish voiceover clips (`7.510s`, `8.346s`, `8.033s`, `7.664s`), trimmed cleanly and placed within each scene slot (`0.15s`, `7.95s`, `16.50s`, `25.00s`).
- **BGM & Voiceover Carve**: Loopable upbeat background music carved (`carve.mjs`) across 6 spectral bands with automatic ducking envelope down to `-19.2 dB` under Alvaro's narration.
- **Synchronized SFX**: Bundled HyperFrames UI/whoosh/pop effects + trimmed Openverse CC0/CC-BY Foley (`crickets.mp3`, `anvil.mp3`, `laser.mp3`, `rocket.mp3`, `cash.mp3`, `highfive.mp3`, `fanfare.mp3`), attributions documented in `assets/audio/CREDITS.md`.
- **Final MP4 EBU R128 Measurement**:
  - Integrated Loudness: `-16.7 LUFS` (`LRA: 4.9 LU`)
  - True Peak: `-1.0 dBFS` (within `-1.0 dBTP` headroom ceiling)

## 5. Honest Weakest-Spot Note
- Scene 3's speedometer (`99/100`) arrives at `20.3s` (`3.9s` local) and holds until `24.6s`; in fast-motion scrub (`19.8s`), only the top two Lego cards are visible yet, while by `21.5s` all three cards and the sweeping speedometer sit cleanly in frame. Also, voice/music tonal balance is verified solely through EBU R128 / spectral envelope telemetry rather than human listening.

