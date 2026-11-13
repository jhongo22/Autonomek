# Review — Cartoon: Adiós Excel & Licencias (Autonomek)

## 1. Creative Calls & Isolation
- **Strict Isolation**: Built 100% from scratch inside `cartoon-adios-excel-autonomek/` without reading, listing, or reusing any files or SVGs from other folders in the workspace.
- **Duration & Voiceover Pacing (38.0s / 1140 frames @ 30fps)**: Spanish voiceover was generated with `edge-tts` using `es-ES-AlvaroNeural` at natural `--rate="+0%"`, dead silence trimmed, and long pauses clamped to ~0.40s (`vo_1_sync.mp3`: 8.30s, `vo_2_sync.mp3`: 6.83s, `vo_3_sync.mp3`: 12.93s, `vo_4_sync.mp3`: 7.18s). Extending the composition to 38.0s prevented clipping Álvaro's natural delivery while preserving cartoon action beats across all 4 scenes.
- **2D Cartoon Industrial Look**: Bold `#18181B` ink outlines (4px–5px) on a warm concrete `#F4F4F5` warehouse backdrop with `#FACC15` caution beams, conveyor rollers, pipes, Don Martín (yellow hardhat, mustache, clipboard/empty wallet + moth/coffee mug), Excel Spreadsheet Monster (`#¡REF!`, `#¡VALOR!`), Orange Slot Machine License Toll (`-$13,500 USD AL AÑO`), and Autonomek's Crane + Titanium Blue/Emerald Central Engine (`100% PROPIEDAD TUYA · $0 EN LICENCIAS`).
- **SFX & BGM Sourcing**: Openverse API failed TLS behind the local corporate proxy (`SELF_SIGNED_CERT_IN_CHAIN`) and HeyGen CLI was unsigned, so all 22 SFX and the 120 BPM factory groove (`factory_groove.mp3`) were sourced from HyperFrames' bundled SFX pack plus locally synthesized foley accents (`sfx_siren.mp3`, `sfx_crate_crash.mp3`, `sfx_sparks.mp3`, `sfx_coins_suck.mp3`, `sfx_hydraulic_slam.mp3`, `sfx_turbine_start.mp3`, `sfx_pneumatic_stamp.mp3`, `sfx_final_chord.mp3`).

## 2. Verification: Looked At vs. Measured vs. Unverified
- **Measured (`npx hyperframes check --json`)**: Report `e684761c-d966-48f6-a80f-6065d5113099.json` exited 0 (`lint`, `runtime`, `layout`, `contrast`, `craft`, `audio` all `ok: true`, 0 errors, 0 craft warnings, 0 audio warnings).
- **Measured Final Render (`cartoon-adios-excel-autonomek.mp4`)**:
  - `ffprobe`: `h264` `1080x1920` `30/1 fps`, `aac` `48000 Hz` stereo, `38.000000s` (`1140` frames), `10,671,411` bytes (`10.2 MB`).
  - `npx hyperframes audio cartoon-adios-excel-autonomek.mp4 --json`: `warnings: []`, `lufsIntegrated: -12.9`, `lufsShortTermMax: -11.1`, `samplePeakDb: -1`, `truePeakDb: -1`, `clipping: { count: 0 }`, `silence: []`.
- **Looked At (Rendered Snapshots & Decoded MP4 Frames)**:
  - `review-beats.jpg`, `review-seam-02.jpg`, `review-seam-04.jpg`
  - `contact-sheet.jpg` (`0s`, `13s`, `22.8s`, `37.75s`) confirming immediate Frame 0.0s hook (Don Martín tangled in Excel tentacles + `#¡REF!` + flashing siren), Scene 2 slot machine toll, Scene 3 Autonomek Central Engine with gears/arms, and Scene 4 coffee close + CTA inside 9:16 safe zones (`168..1330px`).
  - `contact-sheet.jpg` (`8.55s`, `8.65s`, `37.75s`) confirming seamless transparent-root `whip-pan` from Scene 1 to Scene 2 without exposing an opaque stage jump.
  - Decoded MP4 frames via `ffmpeg` (`0.0s`, `22.8s`, `36.0s`) visually confirmed crisp vector ink strokes, typography, character acting, and CTA readability in the encoded output.
- **Measured Audio (Not Heard)**: Sound levels, ducking, and voiceover carve are verified programmatically via `check --json` and `npx hyperframes audio cartoon-adios-excel-autonomek.mp4 --json` rather than human playback listening.

## 3. Intentional Non-Blocking Contrast Warnings
- `check --json` (`contrast: ok: true, errorCount: 0`) flagged 3 non-blocking warnings where the automated DOM sampler picked up the SVG warehouse wall behind solid-background HTML overlays (`.s3-header`, `.s3-step3`, `.s4-cta-btn`). Visual inspection of snapshots confirms crisp white text over solid `#2563EB` and `#16A34A` fills.

## 4. Weakest Shot & Future Polish
- Scene 1's crate collision could push even further with extra secondary debris particles if expanded beyond 38s, and Openverse/live studio foley could replace synthesized metallic clangs once proxy certs are trusted.
