# Scraping y Extracción Detallada: MergeOn (mergeon.dev)

Documento de extracción exhaustiva de contenidos, arquitectura web, propuesta comunicativa y especificaciones funcionales del sitio [https://www.mergeon.dev/](https://www.mergeon.dev/).

---

## 1. Identidad de Marca y Posicionamiento

* **URL Principal:** `https://www.mergeon.dev/`
* **Claim Principal:** *"Tu vendedor estrella de IA que atiende, cotiza y cierra ventas 24/7 en WhatsApp e Instagram."*
* **Subtítulo / Propuesta de Valor:** Plataforma que convierte conversaciones en ventas automatizadas conectando catálogos de productos, calendarios de citas y sistemas de pago sin requerir conocimientos técnicos de programación.
* **Tono de Marca:** Cercano, enfocado en el comerciante / emprendedor / PYME, práctico, orientado a resultados inmediatos y eliminación de tareas operativas tediosas.
* **Target / Audiencia:**
  1. *E-commerce y tiendas minoristas:* Negocios con catálogos de productos que reciben decenas o cientos de preguntas diarias por chat.
  2. *Profesionales de servicios:* Clínicas, odontólogos, abogados, consultores, agencias y expertos que dependen del agendamiento de citas.
  3. *Equipos de ventas colapsados:* Empresas cuyos asesores humanos no dan abasto para responder rápidamente en horario nocturno o fines de semana.

---

## 2. Desglose Estructural de Secciones de la Web

### Seccion 1: Hero Section (Encabezado Principal)
* **Titular Principal:** Automatiza tus ventas en WhatsApp e Instagram con Agentes de Inteligencia Artificial.
* **Mensaje Clave:** No pierdas más ventas por tardar en responder. Nuestro agente atiende a tus clientes en segundos, resuelve dudas con tu catálogo actualizado y cierra pedidos directamente en el chat.
* **Call to Action (CTA) Principal:** Probar Demo / Hablar con un Asesor por WhatsApp.
* **Social Proof / Credenciales:** Integración verificada con la API oficial de WhatsApp Cloud de Meta y conexión certificada con WooCommerce.

---

### Seccion 2: Problema vs. Solución
La web contrasta directamente los dolores típicos del comercio conversacional tradicional:

| El Problema Actual del Negocio | La Solución con MergeOn |
|---|---|
| Clientes que escriben de noche o fines de semana y se van a la competencia al no recibir respuesta inmediata. | **Atención 24/7 en segundos:** La IA responde al instante con información precisa de producto, precios y tiempos de entrega. |
| Asesores humanos que repiten 50 veces al día los mismos precios, tallas y cuentas bancarias. | **Liberación de carga operativa:** La IA se encarga de las preguntas frecuentes y cotizaciones repetitivas. |
| Pérdida de ventas por clientes que dejan el chat a medias. | **Seguimiento inteligente:** Recordatorios y recuperación de conversaciones abandonadas para incentivar el cierre. |
| Miedo a perder el número de WhatsApp o los chats previos al cambiar a una API. | **Coexistencia exclusiva:** Uso simultáneo de la aplicación de WhatsApp Business en el móvil y la IA en la nube. |

---

### Seccion 3: Casos de Uso y Módulos de Producto

#### Módulo A: "MergeOn Seller" — Especialista en Tiendas y E-commerce
* **Lectura Inteligente de Catálogo:** Comprende categorías, variaciones (color, talla, modelo), precios y disponibilidad.
* **Muestra Visual de Productos:** Envío de imágenes, fichas técnicas y detalles del producto solicitado en el contexto de la charla.
* **Manejo de Objeciones:** Respuestas contextuales a dudas sobre envíos, garantías, tiempos de entrega y políticas de cambio.
* **Recolección de Datos de Envío:** Pide dirección, ciudad, teléfono y nombre completo de forma estructurada.
* **Generación de Checkout / Pago:** Emisión de enlaces de pago seguros o instrucciones para transferencias directas (PSE, Bancolombia, Nequi, Tarjetas).
* **Confirmación de Pedido:** Notificación automática al sistema interno y confirmación inmediata al comprador.

#### Módulo B: "MergeOn Agendamiento" — Servicios y Citas Médicas/Profesionales
* **Filtro y Cualificación:** Hace las preguntas de descarte necesarias para determinar si el cliente califica para la consulta.
* **Disponibilidad en Tiempo Real:** Revisa los huecos libres en el calendario para ofrecer fechas y horas exactas.
* **Confirmación Inmediata:** Reserva el espacio sin doble asignación (*no double-booking*).
* **Recordatorios Previos:** Envía mensajes 24h y 2h antes de la cita para confirmar asistencia y reducir ausencias.

#### Módulo C: "Asistente Interno para el Dueño del Negocio"
* Canal de comunicación interno exclusivo en WhatsApp para administradores.
* **Comandos en lenguaje natural:**
  - *"¿Cuántas ventas cerramos hoy?"*
  - *"¿Cuáles fueron los productos más pedidos esta semana?"*
  - *"Marca el producto 'Camiseta Negra Talla L' como agotado."*
* Permite gestionar aspectos clave del negocio sobre la marcha sin ingresar a paneles administrativos complicados.

---

### Seccion 4: Integraciones del Ecosistema

1. **Meta WhatsApp Business Cloud API:**
   - Enlace directo a través de la infraestructura oficial de Meta.
   - Posibilidad de mantener la app instalada en el dispositivo móvil con la función de Coexistencia.
2. **Instagram Direct & Comments:**
   - Respuestas instantáneas a mensajes directos de prospectos que vienen de reels, stories o pauta.
   - Automatización de comentarios en publicaciones ("Comenta 'QUIERO' y te enviamos el catálogo por DM").
3. **WooCommerce:**
   - Plugin nativo de conexión rápida.
   - Sincronización continua de inventario, atributos y precios.
   - Creación directa de pedidos en el panel de WordPress.
4. **Meta Conversions API (CAPI):**
   - Transmisión de eventos de compra y conversión generados en WhatsApp de vuelta a Meta Ads Manager.
   - Optimización de las campañas de publicidad pagada hacia compras reales, no solo clics.
5. **Webhooks y Enlaces Personalizados:**
   - Conexión con CRMs (HubSpot, Zoho, Pipedrive).
   - Conexión con plataformas logísticas y de fulfillment.

---

### Seccion 5: Preguntas Frecuentes Extraídas (FAQs)

* **¿La IA puede equivocarse o dar descuentos no autorizados?**  
  *Respuesta:* No. La IA opera bajo estrictas reglas de negocio y restricciones definidas durante el setup. No inventa precios ni aplica descuentos que no estén contemplados en sus instrucciones.

* **¿Tengo que programar o saber de código para usar MergeOn?**  
  *Respuesta:* No. El sistema se configura con lenguaje natural (instrucciones claras) o notas de voz donde explicas el funcionamiento de tu negocio. El equipo de soporte también asiste en el proceso de carga.

* **¿Qué pasa si un cliente pide hablar con una persona?**  
  *Respuesta:* La IA identifica la solicitud, detiene su intervención en esa conversación y notifica al equipo humano para que un asesor tome el control manual inmediatamente.

* **¿Cuánto tarda en estar listo?**  
  *Respuesta:* La implementación inicial suele completarse entre 3 y 7 días hábiles, incluyendo la carga de catálogo y las pruebas de validación conversacional.

* **¿Pierdo mi número de WhatsApp actual?**  
  *Respuesta:* No. Gracias a la tecnología de coexistencia, puedes mantener tu número habitual y seguir abriendo tu WhatsApp Business en tu celular mientras la IA trabaja en paralelo.

---

## 3. Matriz de Hallazgos Técnicos y Arquitectura

```
                        ┌────────────────────────────────────────────────────────┐
                        │                     MERGEON PLATFORM                   │
                        │                                                        │
┌──────────────┐        │   ┌────────────────────┐      ┌────────────────────┐   │        ┌─────────────────────────┐
│              │        │   │                    │      │                    │   │        │                         │
│   WhatsApp   ├───────►│   │  MergeOn Seller    │      │ Asistente Interno  │   │◄──────►│ WooCommerce Store       │
│  Cloud API   │◄───────┤   │  (Venta & Citas)   │      │ (Admin WhatsApp)   │   │        │ (Catálogo, Stock, Orders)│
│              │        │   │                    │      │                    │   │        │                         │
└──────────────┘        │   └─────────┬──────────┘      └─────────┬──────────┘   │        └─────────────────────────┘
                        │             │                           │              │
┌──────────────┐        │             ▼                           ▼              │        ┌─────────────────────────┐
│              │        │   ┌────────────────────────────────────────────────┐   │        │                         │
│  Instagram   ├───────►│   │     Motor de IA Conversacional (LLM Prompting) │   │◄──────►│ Meta Conversions API    │
│  DM/Comments │◄───────┤   │     Reglas de Negocio + Filtros Antialucinación│   │        │ (CAPI para Optimización)│
│              │        │   └────────────────────────────────────────────────┘   │        │                         │
└──────────────┘        │                                                        │        └─────────────────────────┘
                        └────────────────────────────────────────────────────────┘
```

---

## 4. Conclusiones para la Estrategia de Autonomek

1. **Mensaje a emular:** La claridad en la promesa (*"vende 24/7 en WhatsApp sin que tus asesores colapsen"*) es muy efectiva para convencer al decisor PYME.
2. **Diferenciador a explotar:** La coexistencia de WhatsApp es un argumento de venta de alto impacto que Autonomek puede incorporar en sus proyectos de agentes comerciales.
3. **Ventaja de Autonomek:** Mientras MergeOn es un software rígido limitado a chat, Autonomek diseña el stack completo: Landing de conversión ultra-rápida + Web app + Automatización de operaciones con n8n + Agente IA, ofreciendo una solución que es activo propio de la empresa y no un alquiler perpetuo de licencias.
