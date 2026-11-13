# SPEC — Cartoon Web Autonomek (9:16)

GOAL:    Un dueño de negocio se reconoce al instante en el dolor de haber pagado por una web llena de telarañas que nadie encuentra, siente alivio cómico con la transformación veloz de Mek y hace clic para pedir su auditoría gratis en autonomek.com.
OUTPUT:  HyperFrames, 1080 x 1920, 60 fps
TIME:    33.0 s x 60 fps = 1980 frames; BGM alegre ~120 BPM (30 frames por pulso), sincronizada a la locución de Álvaro (es-ES-AlvaroNeural, +0%).

LOOK:
  ground:  #FFF8F0 crema cálido de estudio de cómic con textura sutil de puntos halftone (#E2D5C3 al 14%) y vignette cálido 6%; nunca vacío oscuro.
  ink:     #1E293B (contorno cartoon de 4 px redondeado en todos los personajes, muebles, burbujas y props; sombras cel-shading con desplazamiento +6 px, +6 px a #1E293B al 18%).
  accents: #2563EB (azul eléctrico — armadura de Mek, rayos, marca Autonomek),
           #10B981 (verde esmeralda — velocidad 0.6s, WhatsApp, velocímetro 99/100, botón CTA),
           #FF6B6B (rojo coral — factura $1,500, yunque 4.8s, alerta, frustración),
           #FACC15 (amarillo cómic — corona #1, estrellas de Mek, destellos, burbujas de impacto).
  type:    Display: "Archivo Black" (400/900) 44-76 px, tracking -0.02em; Body/Bubbles: "Nunito" (700/800/900) 32-42 px; nunca texto legible menor a 30 px. Dígitos clave ($1,500 USD, 0 CLIENTES, 4.8s, 0.6s, 99/100) siempre nítidos sin rebote elástico sobre los dígitos.
  medium:  Caricatura vectorial SVG 2D estilo cómic moderno con cel-shading, burbujas con cola sólida de borde #1E293B 4px, líneas de velocidad anime y onomatopeyas/destellos geométricos.
  safe:    Banda activa vertical 9:16: contenido clave dentro de x=[80, 1000], y=[190, 1520]; arriba 0-175 px y abajo 1620-1920 px reservados para cielo/decoración/margen seguro.

OBJECTS:
  1. Carlos (Dueño de Negocio): personaje caricaturezco con cabello castaño alborotado, camisa azul claro arremangada con puños doblados, cejas/ojos/boca articulados en SVG, ojeras oscuras en Escenas 1-2 que desaparecen en Escena 4, brazos y manos independientes que sujetan la factura, se agarran la cabeza y chocan los cinco con Mek; gafas de sol oscuras que caen en Escena 4.
  2. Escritorio / Mostrador: tablero de madera cálida (#D97706 / #F59E0B con vetas #1E293B), frente de mostrador azul pizarra/crema, laptop abierta con pantalla orientable, smartphone con pantalla verde/alerta y taza de café con vapor animado en Escena 4.
  3. Telarañas y Araña: telarañas SVG geométricas cubriendo laptop y esquina superior del escritorio con una arañita colgando de un hilo oscilante; planta rodadora del desierto (tumbleweed) hecha de ramas SVG en bucle giratorio.
  4. Factura Gigante: papel arrugado blanco/crema con sello rojo "FACTURA WEB: $1,500 USD" y letrero colgante de madera "6 MESES DESPUÉS: 0 CLIENTES".
  5. Mundo Interior de Laptop (Escena 2): dos clientes caricaturezcos, robot amigable de ChatGPT y lupa gigante de Google con flechas luminosas apuntando a tienda vecina animada ("Tu Competencia"), mientras la tienda de Carlos se hunde bajo un yunque de hierro pesado ("Carga Lenta: 4.8s / Invisible en IA").
  6. Mek (Robot Autonomek): robot flotante geométrico en #2563EB y #10B981, antena con baliza, propulsor inferior, brazos magnéticos de pinza y visor oscuro donde sus ojos cambian entre rayos, estrellas, check verde y sonrisa.
  7. Bloques de Mejora y CTA: piezas tipo Lego (cohete verde "Carga en 0.6s", corona dorada "#1 en Google", megáfono "Recomendado por ChatGPT"), velocímetro circular rojo→verde ("99/100"), burbujas flotantes de WhatsApp ("+1 Nuevo Cliente", "+1 Cita Agendada", "+1 Venta Cerrada"), confeti y cartel final "Audita tu web gratis en / autonomek.com".

MOTION:
  enter:   back.out(1.7) para burbujas, cartel, gafas y props físicos; elastic.out(1, 0.5) para la voltereta de Mek y saltos del teléfono.
  move:    power2.inOut para zoom/paneos de cámara; linear para rotación continua del tumbleweed, hélice/propulsor o líneas de velocidad anime.
  exit:    power3.in en salidas rápidas de cámara (40-50% más cortas que entradas).
  numbers: sin rebote elástico en textos numéricos clave para mantener lectura instantánea.

SHOTS:
  - Escena 1 [0.00s - 7.80s | f0 - f468]: Frame 0.0s ya muestra a Carlos aterrado sosteniendo "FACTURA WEB: $1,500 USD", laptop con telarañas y araña colgante, cartel "6 MESES DESPUÉS: 0 CLIENTES". Tumbleweed cruza rebotando, teléfono tiembla con nubes de polvo, aparece burbuja de cómic "¡Pagué un dineral por mi web y no entra ni mi mamá!". VO1 [0.15s - 7.70s]. SFX: golpe de papel/tambor 0.0s, viento/grillos 1.5s, pop burbuja 3.0s. Transición: zoom rápido hacia la pantalla de la laptop.
  - Escena 2 [7.80s - 16.40s | f468 - f984]: Zoom interior a la pantalla. Clientes preguntan "¿A quién le compro?" a ChatGPT y lupa Google -> flechas apuntan a "Tu Competencia". Yunque "Carga Lenta: 4.8s / Invisible en IA" cae con peso físico aplastando la tienda de Carlos. Carlos en esquina inferior se agarra la cabeza con líneas de choque cómic. VO2 [7.95s - 16.30s]. SFX: whoosh cámara 7.8s (0.0s local), golpe yunque 10.6s, error cómico 13.0s. Transición: destello azul eléctrico hacia Escena 3.
  - Escena 3 [16.40s - 24.60s | f984 - f1476]: Destello azul eléctrico; Mek entra haciendo voltereta (elastic.out) y dispara rayo láser verde/cian que desintegra las telarañas. Líneas anime mientras Mek encaja bloques Lego: cohete "Carga en 0.6s", corona "#1 en Google", megáfono "Recomendado por ChatGPT". Velocímetro salta de rojo a verde "99/100". Burbuja de Mek con ojos de estrella: "¡Activando Ingeniería Autonomek!". VO3 [16.50s - 24.50s]. SFX: destello/láser 16.4s, clics rápidos Lego 18.6s-19.6s, cohete/turbina 21.0s. Transición: pull-back rápido al plano general.
  - Escena 4 [24.60s - 33.00s | f1476 - f1980]: Regreso al escritorio luminoso. Teléfono salta lanzando burbujas WhatsApp ("+1 Nuevo Cliente", "+1 Cita Agendada", "+1 Venta Cerrada") y confeti. Carlos sin ojeras, sonriendo con taza de café humeante, choca los cinco con Mek mientras caen gafas de sol sobre sus ojos (back.out). Aterriza cartel cartoon inferior con logo Autonomek y botón WhatsApp: "Audita tu web gratis en / autonomek.com". VO4 [24.75s - 32.40s]. SFX: cascada pops WhatsApp + caja registradora 25.0s, choque manos 27.6s, acorde triunfal 31.8s.

BANNED:
  - Fondo negro/oscuro vacío con cards planas de dashboard.
  - Fades de entrada en Frame 0.0s (Frame 0 debe ser impacto completo inmediato).
  - Texto pequeño (<30px) o texto fuera de márgenes seguros 9:16.
  - Rebote elástico aplicado a dígitos numéricos legibles.
  - Cualquier referencia o copia de proyectos anteriores.

QA:
  - t=0.0s (Frame 0): Carlos visible, factura "$1,500 USD", telarañas en laptop, araña, cartel "6 MESES DESPUÉS: 0 CLIENTES", cero fondo negro.
  - t=4.2s: Tumbleweed y burbuja de diálogo legibles dentro de márgenes seguros.
  - t=11.5s: ChatGPT, Google lupa, tienda competencia y yunque "4.8s" + Carlos agarrándose la cabeza legibles.
  - t=19.8s: Mek con láser/bloques Lego, cohete "0.6s", corona "#1", velocímetro "99/100".
  - t=28.5s: Carlos con gafas de sol y café chocando los cinco con Mek, burbujas WhatsApp y CTA "autonomek.com" en márgenes seguros.

