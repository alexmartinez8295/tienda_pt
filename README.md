# Tienda PT

Tienda en línea construida desde cero con HTML, CSS y JavaScript puros (sin frameworks), pensada para ser **modular y configurable**: la misma estructura debe poder reutilizarse para distintos giros de negocio cambiando solo variables de diseño y datos, no el código base.

## Estructura de carpetas

```
Tienda_PT/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── img/
│   └── productos/
├── Task_list.txt      → roadmap por fases (retos)
└── README.md
```

---

## HTML — elementos y su función

`index.html` usa **HTML semántico**: en vez de `<div>` genéricos para todo, cada bloque usa la etiqueta que describe su rol. Esto mejora accesibilidad y SEO porque lectores de pantalla y buscadores entienden la jerarquía sin necesidad de clases.

| Elemento | Para qué se usa aquí | Referencia |
|---|---|---|
| `<header>` | Encabezado del sitio: logo, navegación y carrito | [MDN — header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) |
| `<nav>` | Agrupa los enlaces de navegación principal | [MDN — nav](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) |
| `<main>` | Contenido principal único de la página (solo debe haber uno por página) | [MDN — main](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main) |
| `<section>` | Bloques temáticos independientes dentro de `main` (hero, destacados) | [MDN — section](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) |
| `<article>` | Cada tarjeta de producto: contenido que tiene sentido por sí solo, repetible | [MDN — article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) |
| `<footer>` | Pie de página | [MDN — footer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) |
| `<button>` | Botón de hamburguesa del menú móvil (nunca uses `<div>` con `onclick` para esto: `<button>` es enfocable con teclado y accesible por defecto) | [MDN — button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) |
| `<span>` | Texto en línea sin significado propio, usado para el contador del carrito | [MDN — span](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span) |
| `<meta charset>` | Define la codificación de caracteres (necesario para tildes/ñ) | [MDN — meta charset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/charset) |
| `<meta viewport>` | Le dice al navegador móvil que use el ancho real del dispositivo (base de todo diseño responsive) | [MDN — Viewport meta tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) |
| `<link rel="stylesheet">` | Enlaza la hoja de estilos externa | [MDN — link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) |
| `<script src>` | Enlaza el archivo JS. Va al final de `<body>` para que el DOM ya exista cuando el script se ejecute | [MDN — script](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) |
| `aria-label` | Describe el botón de hamburguesa para lectores de pantalla (no tiene texto visible) | [MDN — ARIA: aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) |

### Convención de nombres de clases (BEM)

Clases como `.header__logo`, `.nav__lista`, `.header__toggle` siguen la convención **BEM** (Bloque\_\_Elemento--Modificador): el bloque es el componente (`header`), `__` separa un elemento hijo (`logo`), y `--` (que aún no usas, pero verás en retos futuros) marcaría una variante (`--activo`). Sirve para que las clases no choquen entre sí sin necesidad de anidar selectores CSS.
Referencia: [getbem.com](https://getbem.com/)

---

## CSS — conceptos y estructura

`css/style.css` sigue este orden, que es una convención común (menos específico → más específico):

1. **Reset** → 2. **Variables (`:root`)** → 3. **Estilos base (`body`)** → 4. **Componentes** → 5. **Media queries**

| Concepto | Dónde está en tu archivo | Qué hace | Referencia |
|---|---|---|---|
| `@import url(...)` | Línea 1 | Importa recursos externos, típicamente una fuente de Google Fonts, al inicio del archivo | [MDN — @import](https://developer.mozilla.org/en-US/docs/Web/CSS/@import) |
| Reset (`* { margin:0; padding:0; }`) | Líneas 4-8 | Elimina estilos por defecto que cada navegador aplica distinto, para partir de una base predecible | [MDN — box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) |
| Custom properties (variables) | Bloque `:root { --color-primary: ... }` | Variables reutilizables en todo el archivo con `var(--nombre)`. Es la base de tu sistema "configurable": cambiar un valor aquí cambia toda la página | [MDN — Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) |
| `var(--color-primary, #2563eb)` | `.nav__lista a:hover` | Segundo argumento de `var()` es un **valor de respaldo** si la variable no existe | [MDN — var()](https://developer.mozilla.org/en-US/docs/Web/CSS/var) |
| Flexbox (`display:flex`) | `.header`, `.nav__lista`, `.hero` | Modelo de layout en una dimensión (fila o columna). `justify-content` alinea en el eje principal, `align-items` en el eje cruzado | [MDN — Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout) |
| Grid (`display:grid`) | `#grid-productos` | Layout en dos dimensiones. `repeat(auto-fit, minmax(250px, 1fr))` crea tantas columnas de mínimo 250px como quepan, sin media queries | [MDN — CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) |
| `position: sticky` | `.header` | El elemento se comporta como estático hasta que el scroll lo alcanza, y ahí se "pega" | [MDN — position](https://developer.mozilla.org/en-US/docs/Web/CSS/position) |
| `z-index` | `.header` | Controla el orden de apilado (qué elemento queda encima de cuál) | [MDN — z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) |
| Pseudo-elementos `::before` / `::after` | `.hamburger` | Generan contenido/elementos visuales extra sin agregar HTML — así armas las 3 líneas del ícono hamburguesa con un solo `<span>` | [MDN — ::before](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) |
| `transition` | `.hamburger`, `.header__nav` | Anima el cambio entre dos estados de una propiedad (ej: `transform`, `opacity`) en vez de que salte instantáneo | [MDN — transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) |
| `transform: translateX() / rotate()` | `.header__nav`, `.hamburger::before/after` | Mueve o rota un elemento sin afectar el layout de los demás (más performante que animar `left`/`top`) | [MDN — transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) |
| Media query `@media (max-width: 767px)` | Bloque responsive | Aplica un bloque de CSS solo cuando el ancho de pantalla cumple la condición — la base del diseño responsive | [MDN — Media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) |
| `calc()` | `height: calc(100vh - 60px)` | Permite mezclar unidades distintas en una sola operación (viewport height menos píxeles fijos del header) | [MDN — calc()](https://developer.mozilla.org/en-US/docs/Web/CSS/calc) |

### ⚠️ Pendientes detectados en el CSS actual
- Línea 1: `@import url("https://googleapis.com")` no es una URL válida de Google Fonts (falta la ruta con la familia tipográfica, algo como `https://fonts.googleapis.com/css2?family=...`). Tal como está, no importa ninguna fuente.
- `body` (línea 44-48) usa `var(--color-texto)` y `var(--color-fondo)`, pero esas variables ya no existen — las renombraste a `--color-text-main` y `--color-bg-body`. Al no encontrarlas, el navegador no aplica ningún color ahí.

---

## JavaScript — conceptos y estructura

`js/main.js` tiene dos partes: **datos** (el array `productos`) y **lógica de renderizado** (la función que los pinta en el DOM). Esta separación es la que vas a formalizar en la Fase 3 del roadmap.

| Concepto | Dónde está | Qué hace | Referencia |
|---|---|---|---|
| `const` | Declaración de `productos` y de `grid` | Declara una variable cuya referencia no puede reasignarse (aunque si es un array/objeto, su contenido sí es mutable) | [MDN — const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) |
| Array de objetos | `productos` | Estructura de datos: una lista donde cada ítem es un objeto con las mismas propiedades (`id`, `nombre`, `precio`, `imagen`) | [MDN — Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) |
| `function` declarada | `renderizarProductos()` | Función con nombre, reutilizable, que se "hoistea" (existe antes de ejecutarse el código que la sigue) | [MDN — function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function) |
| `document.getElementById()` | Dentro de `renderizarProductos` | Busca en el DOM el elemento con ese `id` exacto y lo devuelve (o `null` si no existe) | [MDN — getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) |
| Guard clause (`if (!grid) return;`) | Misma función | Corta la ejecución temprano si la condición necesaria no se cumple, evita errores al intentar usar `null` | [MDN — return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return) |
| `Array.prototype.map()` | `productos.map(...)` | Transforma cada elemento del array en algo nuevo (aquí, cada producto se convierte en un string de HTML) y devuelve un array nuevo del mismo tamaño | [MDN — Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) |
| Arrow function | `producto => \`...\`` | Sintaxis corta para funciones, muy común como argumento de `map`/`filter`/`forEach` | [MDN — Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) |
| Template literals | `` `<article>...${producto.nombre}...</article>` `` | Strings entre backticks que permiten interpolar variables con `${...}` y saltos de línea reales | [MDN — Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) |
| `Array.prototype.join()` | `.join("")` | Une todos los strings del array generado por `map` en uno solo (sin esto, `innerHTML` recibiría un array, no un string) | [MDN — Array.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) |
| `Element.innerHTML` | `grid.innerHTML = ...` | Reemplaza todo el contenido HTML interno de un elemento. Ojo: si el contenido viniera de un usuario (no es el caso aquí, son datos propios) esto sería riesgo de XSS | [MDN — innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) |
| `Number.prototype.toLocaleString()` | `producto.precio.toLocaleString("es-CO")` | Formatea un número según configuración regional (separadores de miles, moneda) | [MDN — toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString) |
| Llamada inmediata `renderizarProductos();` | Última línea | Ejecuta la función apenas se carga el script (por eso el `<script>` va al final del `<body>`, para que el DOM ya exista) | — |

---

## Roadmap

El plan de trabajo por fases (retos) está en [`Task_list.txt`](Task_list.txt). Progreso actual: Fase 0 (tokens) y Fase 1 (header responsive) en curso — ver pendientes arriba antes de darlas por cerradas.
