# Autonomek — Manual de Identidad Visual (Keystone A Integrado)

> Documento de referencia para diseño, desarrollo web, producto e impresión. Construido a partir de geometría euclidiana pura (`60°`, `45°`) y sincronizado con los 5 temas oficiales de la plataforma en [`globals.css`](../../src/app/globals.css) y [`PaletteSwitcher.tsx`](../../src/components/widgets/PaletteSwitcher.tsx).

---

## 1. Idea y Construcción Geométrica

- **Concepto**: **Keystone A** — Una «A» arquitectónica monolítica a `60°` apoyada en plintos verticales firmes, atravesada desde su núcleo por un conducto continuo en espacio negativo (`22u`). En el logotipo completo, **la Keystone A funciona directamente como la «A» inicial integrada de `AUTONOMEK`**, evitando por completo la redundancia visual de una doble «AA».
- **Trazado artesanal**:
  - **Grilla base (`Keystone A`)**: Lienzo `256 × 256`, piernas exteriores a `60°`, altura de mayúscula exacta `186.88u` (`y=34.12 .. 221.0`), grosor perpendicular constante de `38u`, corona plana de `40u` y travesaño aligerado a `35u`.
  - **Corte óptico pequeño (`16 px – 24 px`)**: Disponible en `source/autonomek-symbol-small.svg` y en `digital/web-icons/`. Amplía el conducto de `22u` a `26u` y reduce los trazos a `35u` para evitar saturación o cierre por irradiación sobre fondos oscuros.
  - **Logotipo integrado (`[Keystone A]UTONOMEK`)**: Los caracteres `U-T-O-N-O-M-E-K` comparten exactamente la misma altura de mayúscula (`186.88u`), línea base (`y=221.0`) y peso visual equilibrado (`st = 18%` de la altura cap), con corrección óptica (`+2.5%` overshoot en `O`/`U`), barras horizontales compensadas al `88%` y diagonales exactas a `60°` (`N`, `M`) y `45°` (`K`). Nunca reconstruir tecleando texto plano como sustituto del logotipo.
  - **Versión apilada (`[Keystone A]UTO / NOMEK`)**: Composición en dos niveles (`540 × 320`, proporción `1.69:1`) donde Keystone A corona la primera sílaba sin duplicar ninguna «A».

---

## 2. Versiones Oficiales

| Versión | Cuándo usarla | Directorio / Archivo |
|---|---|---|
| **Horizontal** (principal) | Barra de navegación, encabezados web, documentos corporativos, firmas y presentaciones (`1592 × 256`). | `digital/themes/<tema>/autonomek-horizontal-*` |
| **Apilada (`AUTO / NOMEK`)** | Contenedores cuadrados/verticales, tarjetas apiladas, insignias, credenciales y señalética (`540 × 320`). | `digital/themes/<tema>/autonomek-stacked-*` |
| **Isotipo solo (`Keystone A`)** | Favicon, app icon, avatar social, marcas de agua y espacios `< 96 px` de ancho (`256 × 256`). | `digital/themes/<tema>/autonomek-symbol-*` |
| **Wordmark recorte ajustado** | Lockup compacto de recorte estrecho (`1592 × 228`) con márgenes ceñidos a la caja tipográfica. | `source/autonomek-wordmark.svg` |
| **Monocromo y Web Icons** | Impresión 1 tinta (`print/`), sellos en negro/blanco puro (`digital/monochrome/`), favicons `.ico`/`.svg`/PWA (`digital/web-icons/`). | `digital/monochrome/`, `digital/web-icons/`, `print/` |

---

## 3. Área de Respeto y Tamaños Mínimos

### Área de respeto (Clear Space)
Reserva un margen libre mínimo equivalente a **`1 × a`** alrededor de todo el contorno del logotipo, donde **`a` = ancho de asta de una pierna (`38u` en escala `256`)** o **`0.35 × altura de cap`** en usos digitales/editoriales ampliados. Ningún texto, botón, borde o elemento gráfico debe invadir esta zona.

### Tamaños mínimos
| Versión | Pantalla (Digital) | Impresión | Notas |
|---|---|---|---|
| **Horizontal** | `120 px` de ancho | `30 mm` de ancho | Por debajo de `120 px`, usar apilado o isotipo solo. |
| **Apilada (`AUTO / NOMEK`)** | `76 px` de ancho | `20 mm` de ancho | Mantener proporción intacta `540:320`. |
| **Isotipo (`symbol`)** | `24 px` de alto | `7 mm` de alto | Versión estándar `22u`. |
| **Isotipo (`symbol-small`)** | `16 px` de alto | `5 mm` de alto | **Obligatorio** usar `autonomek-symbol-small.svg` / `favicon.svg` entre `16–24 px`. |

---

## 4. Sistema Cromático — 5 Temas Oficiales Web

Todos los colores derivan directamente de las variables CSS de la aplicación web. En modo **dark-first** (interfaz estándar de Autonomek), la **`Keystone A`** inicial usa el tono mineral **`--primary`** (contraste AAA `> 8.9:1` sobre `--bg`) conectada directamente con **`UTONOMEK`** (o `UTO / NOMEK`) en **blanco puro (`#ffffff`)**. Sobre **fondo claro (`#ffffff`)**, `Keystone A` usa **`--secondary`** (contraste AA/AAA `≥ 6.1:1`) y el resto del nombre usa **`--bg`** como tinta profunda.

> *Nota de reproducción*: Las equivalencias CMYK y Pantone® indicadas abajo son aproximaciones de referencia; verifícalas contra una guía física Pantone® Solid Coated/Uncoated antes de enviar tirajes a prensa.

### Tema 04 · Bosque & Petróleo *(Principal / Default `p4` — Forest Night & Fjord Petrol)*
| Rol | Variable CSS | HEX | RGB | CMYK (aprox.) | Pantone® (aprox.) | Uso |
|---|---|---|---|---|---|---|
| Mineral Menta | `--primary` | `#A5D0B9` | `165 208 185` | `36 0 26 18` | `557 C` | Keystone A en modo oscuro, acento UI |
| Petróleo Fiordo | `--secondary` | `#366367` | `54 99 103` | `76 34 38 42` | `5473 C` | Keystone A sobre blanco, tile secundario, impresión |
| Noche Bosque | `--bg` | `#070D0A` | `7 13 10` | `80 62 72 88` | `Black C` / Rich Black | Fondo web, app-icon tile, tinta en fondo claro |
| Glaciar Acero | `--accent` | `#73A2B6` | `115 162 182` | `56 20 18 8` | `5425 C` | Acentos secundarios de sistema y telemetría |

### Tema 01 · Salvia & Lavanda (`p1` — Botanical Slate & Lavender)
| Rol | Variable CSS | HEX | RGB | CMYK (aprox.) | Pantone® (aprox.) | Uso |
|---|---|---|---|---|---|---|
| Salvia Mineral | `--primary` | `#ADD1BF` | `173 209 191` | `32 0 22 18` | `558 C` | Keystone A en oscuro |
| Pizarra Profunda | `--secondary` | `#3F5670` | `63 86 112` | `72 44 16 40` | `5405 C` | Keystone A sobre blanco / tile |
| Obsidiana Botánica | `--bg` | `#060B09` | `6 11 9` | `82 62 72 88` | `Neutral Black` | Fondo oscuro y texto sobre blanco |
| Lavanda Técnica | `--accent` | `#7982B3` | `121 130 179` | `56 44 6 0` | `7668 C` | Acento de apoyo |

### Tema 02 · Glaciar & Terracota (`p2` — Abyssal Glacier & Terracotta)
| Rol | Variable CSS | HEX | RGB | CMYK (aprox.) | Pantone® (aprox.) | Uso |
|---|---|---|---|---|---|---|
| Azul Glaciar | `--primary` | `#98C4D2` | `152 196 210` | `40 8 10 12` | `549 C` | Keystone A en oscuro |
| Terracota Mineral | `--secondary` | `#7A4436` | `122 68 54` | `28 68 72 42` | `7594 C` | Keystone A sobre blanco / tile |
| Abismo Polar | `--bg` | `#0B1619` | `11 22 25` | `84 62 56 80` | `532 C` / Rich Black | Fondo oscuro y texto sobre blanco |
| Oliva Técnico | `--accent` | `#A0B557` | `160 181 87` | `40 12 78 2` | `583 C` | Acento de apoyo |

### Tema 03 · Mineral & Jade (`p3` — Mineral Forest & Jade)
| Rol | Variable CSS | HEX | RGB | CMYK (aprox.) | Pantone® (aprox.) | Uso |
|---|---|---|---|---|---|---|
| Jade Pálido | `--primary` | `#A4CEBB` | `164 206 187` | `36 0 24 18` | `557 C` | Keystone A en oscuro |
| Esmeralda Bosque | `--secondary` | `#2C7052` | `44 112 82` | `80 28 68 38` | `5545 C` | Keystone A sobre blanco / tile |
| Grafito Carbón | `--bg` | `#050706` | `5 7 6` | `80 65 72 90` | `Black 6 C` | Fondo oscuro y texto sobre blanco |
| Jade Eléctrico Sobrio | `--accent` | `#55D099` | `85 208 153` | `62 0 52 0` | `3385 C` | Acento de apoyo |

### Tema 05 · Espresso & Malva (`p5` — Obsidian Espresso & Dusty Mauve)
| Rol | Variable CSS | HEX | RGB | CMYK (aprox.) | Pantone® (aprox.) | Uso |
|---|---|---|---|---|---|---|
| Malva Polvo | `--primary` | `#C9ACB6` | `201 172 182` | `16 32 16 14` | `5155 C` | Keystone A en oscuro |
| Musgo Profundo | `--secondary` | `#3E5F3F` | `62 95 63` | `70 32 72 44` | `5615 C` | Keystone A sobre blanco / tile |
| Espresso Obsidiana | `--bg` | `#0C0709` | `12 7 9` | `68 78 68 88` | `Black 5 C` | Fondo oscuro y texto sobre blanco |
| Aguamarina Apagada | `--accent` | `#77A7A2` | `119 167 162` | `54 14 34 6` | `5493 C` | Acento de apoyo |

### Estándares Monocromo (Universal)
- **Positivo**: `#000000` (`K=100` en impresión) sobre blanco puro o papel claro.
- **Reverso**: `#FFFFFF` sobre negro, fotografía oscura o cualquiera de los tiles `--bg` / `--secondary`.

---

## 5. Combinaciones Aprobadas y Usos Incorrectos

### Fondos aprobados
1. Versión `-dark.svg` (`--primary` en Keystone A + `#FFFFFF` en `UTONOMEK`) sobre `--bg`, `--surface`, `--card` o fotografía oscura de bajo contraste.
2. Versión `-light.svg` (`--secondary` en Keystone A + `--bg` en `UTONOMEK`) sobre `#FFFFFF` o papel claro (`#F7F7F4`).
3. Monocromo `#000000` sobre papel/blanco, o `#FFFFFF` sobre `--secondary` / negro.

### Qué NO hacer
- **No duplicar la «A»**: Nunca anteponer el isotipo `Keystone A` al texto `"AUTONOMEK"` ni repetir `"AA"` en horizontal o apilado; `Keystone A` **es** la primera letra del nombre.
- **No** estirar, aplastar o sesgar las proporciones del `viewBox`.
- **No** rotar el isotipo (el ángulo de `60°` y el conducto horizontal derecho son invariables).
- **No** añadir sombras paralelas, brillos neón, degradados arbitrarios ni contornos (`stroke`) sobre el trazo relleno.
- **No** usar `--primary` clara directamente sobre blanco; utilizar `--secondary` o `#000000`.
- **No** alterar el kerning o altura de cap entre `Keystone A` y `UTONOMEK` / `AUTO NOMEK`.

---

## 6. Sistema Tipográfico

- **Títulos y Display UI**: `Inter` (`font-display`, weights `600–800`, letter-spacing `-0.03em`, licencia SIL OFL / Google Fonts).
- **Identidad de Marca UI**: `Syne` (`--font-syne`, `font-brand` en Tailwind, reservado para rótulos editoriales expresivos).
- **Cuerpo y Microcopy**: `Inter` (`400–500`), stack respaldo `system-ui, -apple-system, sans-serif`.
- **Telemetría y Métricas**: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` con `tabular-nums`.

---

## 7. Guía Rápida de Archivos (`design/autonomek-brand/`)

```text
design/autonomek-brand/
├── BRAND-GUIDELINES.md               ← Este manual
├── source/                           ← SVGs vectoriales maestros auditados (sin doble AA)
│   ├── autonomek-symbol.svg          ← Isotipo estándar 22u (256×256)
│   ├── autonomek-symbol-small.svg    ← Corte óptico 16–24 px, 26u (256×256)
│   ├── autonomek-horizontal.svg      ← Logotipo integrado [Keystone A]UTONOMEK (1592×256)
│   ├── autonomek-stacked.svg         ← Logotipo apilado AUTO / NOMEK (540×320)
│   └── autonomek-wordmark.svg        ← Recorte tipográfico ceñido [Keystone A]UTONOMEK (1592×228)
├── digital/
│   ├── themes/                       ← Las 5 paletas de la web (SVG + PNG 512/800/1200)
│   │   ├── p1-salvia-lavanda/
│   │   ├── p2-glaciar-terracota/
│   │   ├── p3-mineral-jade/
│   │   ├── p4-bosque-petroleo/       ← Paleta principal por defecto
│   │   └── p5-espresso-malva/
│   ├── monochrome/                   ← Variantes negro, blanco, mono, 512/1024/1200 px
│   └── web-icons/                    ← favicon.ico, favicon.svg, PNGs 16–512, maskable, manifest
├── print/                            ← Maestros 1 tinta (#000000 y #366367 petróleo)
├── social/                           ← Avatares circulares 1024 px para los 5 temas
└── presentation/                     ← Tablero final (HTML/PNG) y lámina comparativa de 5 temas
```

*(Nota legal: este sistema no sustituye una búsqueda formal de antecedentes marcarios ni verificación de imagen inversa previa al registro comercial).*
