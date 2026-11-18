# REVIEW — Autonomek Intro Vertical (9:16)

## Creative Calls
- **Continuous Spatial Canvas (Virtual Camera Rig)**: Built all 5 stations (`QuiéneSomos`, `Web + #1 Google/ChatGPT`, `WhatsApp 24/7`, `Flujo Ecosistema -85%`, `Flujo Final + Cierre CTA`) on a single `4800×4200` spatial stage (`compositions/world.html`) driven by a 3-plane parallax GSAP camera (`#bg-grid-parallax` at 0.32×, `#world-stage` at 1.0×, `#fg-parallax` at 1.18×) with `expo.inOut` and `power2.inOut` eases and zero hard cuts to black.
- **Orchestration Flow Pipeline (`#flow-hero-card`)**: Designed an architectural hub-and-spoke vector flow shared seamlessly between Scene 4 (`0.50×` panoramic zoom-out with 4 connected outer tool modules) and the final Scene 5 (`0.93×` zoom-in above `#st5-cta-panel`), featuring radial light beams, a 5-avatar client network cluster, paired solid/dashed S-curves with 4 GSAP `getPointAtLength()` animated orbs, a central `AUTONOMEK >` core, and 3D-stacked `ORDEN #131` telemetry bar cards.
- **Natural-Rate Spanish TTS Synchronization**: Generated all 5 scenes using Microsoft `edge-tts` (`es-ES-AlvaroNeural`, `+0%` rate). Measured exact word-boundary timestamps (`scenes_timing.json`, total natural duration `41.5s` including clean breaths and CTA hold instead of rushing/cutting off the voiceover at 32s). Synced camera flights, UI reveals, and word-highlighted captions (`compositions/captions.html`) to the measured audio.
- **Mobile 9:16 Safe Zones & Plain Language**: All essential cards, headlines, phone interactions, flow board, and CTA stay inside `[y: 168..1330]` with `>= 30px` base typography (`>= 28.8px` rendered floor) and zero prohibited jargon (`SEO`, `ERP`, `APIs`, `CRM`, `LCP`). Captions occupy `[x: 44..976, y: 1358..1542]`, clearing both the right-hand Reels/TikTok rail and bottom HUD.

## Measured vs. Observed
- `npx hyperframes check --json`: `ok: true` (`0` layout errors, `0` runtime errors, `65/65` contrast checks passed, `0` craft warnings across 332 samples, `0` audio errors).
- Visual inspection of `review-beats.jpg`, `review-phone.jpg`, `contact-sheet-1.jpg`, `contact-sheet-2.jpg`, and post-fix `contact-sheet.jpg` confirmed crisp typography across deep zoom-ins (`2.55x` emblem, `1.22x` WhatsApp chat) and the `0.50x` panoramic ecosystem zoom-out.
- **Audio Mix Update**: Upgraded the soundscape so Álvaro's voiceover (`-15.2 LUFS`) sits inside a warm, balanced bed instead of feeling empty:
  - `assets/music-bed.mp3`: Re-normalized and sidechain-ducked against `voiceover.mp3` (`-25.6 LUFS` integrated, breathing gently up between phrases and in the CTA).
  - `assets/sfx-track.mp3`: Added 17 subtle, real-sample SFX hits (varied camera whooshes, soft UI pops for badges/WhatsApp messages/payment check/calendar booking, and CTA riser) timed ~1 frame (`0.03s`) after visual triggers (`-25.8 LUFS` integrated).
  - Final rendered MP4 (`autonomek-intro-vertical.mp4`) measured via `ffmpeg ebur128`: `-15.3 LUFS` integrated, `1.6 LU` LRA, `-1.4 dBFS` true peak (no clipping). Measured programmatically, not listened to by ear.

## Weakest Shot & Future Iteration
- The Station 2 -> Station 3 downward camera glide transitions rapidly across a blank vertical gap on the dashed rail; adding subtle intermediate micro-telemetry markers along `#rail-2-3` would enrich that 0.5s flight even further.

## Kept Warnings
- `composition_file_too_large` on `world.html` and `captions.html`: kept intentionally because the continuous spatial camera rig animates all stations inside one unified `#world-stage` coordinate space without iframe cuts, and `captions.html` embeds the 30 synchronized word groups.

