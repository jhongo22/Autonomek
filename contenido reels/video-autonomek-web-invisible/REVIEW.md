# Review — Autonomek: La Web Invisible

- **Entregable final**: `autonomek-web-invisible.mp4` (`1080×1920`, `30 fps`, `41.50 s`, `7.76 MB` / `7.4 MB`, `H.264 + AAC 48 kHz`).
- **Motivo de duración real (`41.50 s`)**: El habla real medida con `edge-tts` (`es-ES-AlvaroNeural`, ritmo `+0%`) suma `38.01 s` efectivos entre los 4 beats (`7.10s + 10.76s + 11.80s + 8.35s`), por lo que la línea de tiempo se ajustó a `41.50 s` para respetar respiros y cierres de frase sin acelerar ni cortar la locución.

## Verificación de Checks (`hyperframes check --json` + `lint`)
- **Lint (`index.html`, `compositions/world.html`)**: `0` errores, `2` avisos informativos de longitud de archivo.
- **Runtime**: `0` errores, `0` avisos.
- **Contrast**: `42/42` comprobaciones superadas.
- **Craft / Layout / Audio checks**: `0` errores, `0` avisos (`dead_stretch` resuelto en `21.40s` con pre-barrido diagnóstico de velocidad; `text_below_floor` resuelto garantizando texto legible `>= 28 px` efectivos en zoom `0.78x`; `2` avisos `info` intencionados de scroll bajo barra fija de Google).

## Verificación Visual (`snapshot --review`, `--at`, frames MP4)
- **Frame 0 (`0.0s`)**: Recibo `FACTURA SITIO WEB / HACE 6 MESES / PAGADO: $1,500 USD`, contador rojo en `0 CLIENTES NUEVOS` y gráfico `0 visitas hoy / Mes 1` visibles de inmediato sin fade-in.
- **Beat 1 (`0.0s – 7.70s`)**: Tarjetas estáticas al aterrizar; reloj avanza `Mes 1` a `Mes 6`, línea plana roja dibuja el trazo plano y la cámara ejecuta `expo.out` hacia el `0`.
- **Beat 2 (`7.70s – 19.20s`)**: `whip-pan` de `0.3s` hacia ChatGPT con escritura en vivo, sello `Tu web: No recomendada por IA`, pan vertical hacia Google (`Página 4 de Google (Nadie llega aquí)`) y spinner congelado en `4.8s Carga Lenta / -53% abandonan`.
- **Beat 3 (`19.20s – 32.00s`)**: `cinematic-zoom` de `0.4s` hacia estética esmeralda/petróleo de Autonomek, tarjeta `mk-progress-stat` subiendo en vivo a `99/100` y `0.6s Carga Instantánea`, tarjetas `Puesto #1 en Google` y `Citado primero por ChatGPT` conectadas por pulsos de luz al flujo de WhatsApp (`+1`, `+2`, `+3 Clientes`).
- **Beat 4 (`32.00s – 41.50s`)**: Alejamiento panorámico (`power2.inOut`, `0.78x`) mostrando el logotipo SVG oficial de Autonomek centrado encima sin colisiones, insignias en una línea (`✓ Auditoría Gratis` / `✓ Código 100% Tuyo`) y botón WhatsApp en zona segura (`Audita tu web gratis en autonomek.com`).

## Verificación de Mezcla de Audio (`hyperframes audio` + `ffmpeg ebur128`)
- **Loudness integrado**: `-15.9 LUFS` (dentro del rango objetivo `-16` a `-14 LUFS`).
- **Rango dinámico (`LRA`)**: `3.2 LU`.
- **Pico verdadero (`True peak`)**: `-1.1 dBFS` (sin clipping, bajo `-1.0 dBTP`).
- **Carve & Cierre**: Cama musical electrónica (`bgm-minimal.mp3`, `loop`, normalizada a `-24 LUFS` < `-18 dB`) tallada con `carve.mjs` bajo las 4 pistas de `es-ES-AlvaroNeural`, SFX sincronizados a milisegundos en pistas sin solape (`tracks 4–6`) y cierre intencional (`data-fade-out="0.30"`, atenuando limpiamente a `-39.0 LUFS` en `41.50s`).
