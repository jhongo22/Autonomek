# REVIEW — AUTONOMEK_ 9:16 Vertical Promo Video (Instagram Reels — 22s, 60fps, 1080×1920)

## 1. Storyline & Vertical Recomposition
- **Selected Storyline (#1)**: *El Sistema Operativo del Crecimiento B2B (The Unified Growth Engine)* — recomposed natively for **9:16 Vertical (`1080×1920`)** Instagram Reels, TikTok, and Shorts.
- **Alternative Storylines**:
  - **#2 (*Anatomía de un Lead en Tiempo Real*)**: Un único lead recorre la web, WhatsApp IA y nodos ERP/CRM en tiempo real de principio a fin.
  - **#3 (*Manifiesto de Ingeniería de Precisión*)**: Enfoque editorial geométrico donde el símbolo Keystone `A` se despliega en los 3 módulos técnicos.

## 2. Instagram Reels Safe Zone & Caption Placement Audit (`1080×1920`)
- **Top Safe Margin (`y >= 176px`)**: Respeta los `168px` superiores reservados para barra de estado y cabecera de Reels.
- **Right Action Rail Margin (`x <= 976px`)**: Respeta `104px` a la derecha para la columna de íconos de Instagram Reels (likes, comentarios, compartir, audio), tanto en escenas (`x <= 976px`) como en subtítulos (`left: 44px; width: 932px → x <= 976px`).
- **Dynamic Caption & Bottom HUD Clear Zone**: Todo card y texto de las 5 escenas fue compactado por encima de `y <= 1300px`; los subtítulos karaoke (`compositions/captions.html`, `42px` Inter Extrabold) ocupan `y: 1358..1542`, dejando `> 378px` libres debajo para el usuario, descripción y pista de audio de Instagram.
- **Single-Column Vertical Stack**: Ninguna escena fue comprimida desde 16:9; las 5 escenas fueron re-arquitecturadas en columna vertical (`920px` de ancho útil) con tipografía escalada (`>= 28px` en todo texto legible).

## 3. Verification, Visual Review & Audio Measurements
- **Measured (`npx hyperframes check --json`)**: `ok: true` (`lint: 0/0` across 7 files, `runtime: 0/0`, `layout: 0/0`, `contrast: 127/127 pass`, `craft: 176/176` with `0` warnings and `0` errors).
- **Measured Audio (`ffprobe` + `npx hyperframes audio renders/autonomek-reels-9x16-60fps.mp4 --json`)**:
  - Video stream: `h264`, `1080×1920`, `60/1` fps, `22.000s`. Audio stream: `aac`, `48000 Hz`, stereo, `22.000s`.
  - Mix levels: `-16.6 LUFS` integrated (`-15.6 LUFS` short-term max), `-2.0 dBTP` true peak, `0` clipping, `warnings: []`.
  - Mandatory disclosure: Audio mix balance, LUFS loudness, and onset timing were **measured programmatically via `npx hyperframes audio`, not heard**.
- **Visually Inspected (`npx hyperframes snapshot --review`)**:
  - Inspected `review-beats.jpg`, `review-phone.jpg` (`360 px` preview), `review-seam-01.jpg`..`04.jpg`, and full-resolution `beat-10-at-20s.png`.
  - Fixed active-word flex scaling collision (`"enautonomek.com."`) by increasing `.cap-line` `column-gap` to `20px` and tuning keyword emphasis to `scale(1.025) + y:-3px`.
- **Weakest Shot**: Scene 4 (`scene-automation`) has dense 6-node vertical cabling inside the `730px` board; adding an intermediate camera zoom into `AUTONOMEK_ AI CORE` in a longer cut would spotlight the central orchestrator even more.
- **Intentional Warnings Kept**: None (`0 errors, 0 warnings`).


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
