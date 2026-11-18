GOAL:    Convencer a dueños de empresa y jefes de operaciones de reemplazar hojas de Excel rotas y licencias por usuario con un sistema propio automatizado por Autonomek.
OUTPUT:  HyperFrames, 1080 x 1920 (9:16 vertical), 30 fps
TIME:    38.0s x 30 fps = 1140 frames; 120 BPM (0.5s beat, 0.25s 8th)
LOOK:    Cartoon 2D industrial / fábrica animada con contornos gruesos #18181B (4px, linejoin/linecap round),
         fondo concreto cálido #F4F4F5 con paneles de acero #E4E4E7/#D4D4D8 y vigas amarillo precaución #FACC15,
         verde hoja de cálculo / esmeralda #16A34A, rojo alarma #EF4444, naranja mecánico #F97316, azul titanio #2563EB.
         Tipografía: Archivo Black (títulos industriales), Outfit (burbujas y etiquetas), JetBrains Mono (errores, USD, 0.3s Sync).
         Sombras duras estilo cómic (offset 6px 6px #18181B sin blur difuso en UI) y márgenes seguros 9:16 (contenido clave en y: 180..1450px).
OBJECTS: Don Martín (casco amarillo, bigote, overol azul, sujetapapeles/billetera/café),
         Monstruo de Excel (tentáculos de celdas verdes, errores #¡REF! y #¡VALOR!),
         Cinta transportadora rota vs cinta automática Autonomek,
         Peaje de Licencias (tragamonedas/parquímetro con ojos, barrera, manguera aspiradora de billetes),
         Grúa magnética y Motor Central Autonomek (engranajes, tuberías luminosas, tubo WhatsApp, 2 brazos robóticos, placa dorada).
MOTION:  Posiciones y props con rebote físico GSAP back.out(1.7) y elastic.out(1, 0.5);
         textos y cifras sin rebote (power3.out / opacidad nítida) para lectura perfecta;
         rotación lineal continua en engranajes y rodillos; fromTo en todas las escenas.
SHOTS:
  1. [0.00s - 8.80s]  (f 0..264)   Gancho Frame 0: Don Martín atrapado por Monstruo de Excel en bodega detenida; cajas chocan, chispas, burbuja cómic.
  2. [8.80s - 16.30s] (f 264..489) Whip-pan a puerta con 5 operarios y Parquímetro Tragamonedas aspirando billetes; billetera vacía con polilla.
  3. [16.30s - 30.10s](f 489..903) Grúa aplasta caos; cae Motor Autonomek (elastic.out); flujo WhatsApp -> Brazo DIAN 0.3s -> Inventario Exacto; placa $0.
  4. [30.10s - 38.00s](f 903..1140)Plano general planta reloj suizo; Don Martín con café; pantalla -85% trabajo manual; cartel CTA autonomek.com.
BANNED:  Fondos negros/neón vacíos, cards planas de dashboard sin personajes, oficinas con escritorio o camas, textos con rebote, repeat:-1, from() sin fromTo().
QA:      Verificar Frame 0.0s (gancho inmediato), 2.5s (chispas), 5.0s (burbuja), 9.2s (whip-pan + fila), 14.2s (billetera/polilla), 18.0s (grúa/motor), 23.0s (brazo factura), 34.5s (planta + CTA en zona segura 9:16).
