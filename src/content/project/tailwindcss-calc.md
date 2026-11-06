---
title: 'Tailwind CSS Calc'
description: 'Plugin de Tailwind CSS v4, escrito 100% en CSS, que convierte los píxeles del mockup en utilidades que escalan con el viewport usando calc() y clamp().'
tagline: 'Utilidades que escalan con el viewport'
createAt: 'December 21 2025'
kind: 'library'
website: 'https://tailwindcss-calc.pages.dev'
github: 'https://github.com/oswaldohuillca/tailwindcss-calc'
install: 'npm install tailwindcss-calc'
registry: 'npm'
tags: ["tailwindcss", "css", "plugin", "npm"]
---

## Introducción

Cuando recibes un diseño de *Figma* con medidas exactas, la traducción a CSS suele
terminar en una escalera de breakpoints: `w-24 md:w-32 lg:w-40`, y lo mismo para
cada padding y cada tamaño de texto. **Tailwind CSS Calc** invierte el problema:
escribes el valor en píxeles que ves en el mockup — `w-100`, `p-20`, `text-32` — y
la utilidad escala sola con el ancho de la ventana.

Es la evolución de [UnoCSS preset calc](https://github.com/oswaldohuillca/unocss-preset-calc),
la herramienta que hice antes con la misma idea, ahora reescrita para Tailwind v4.

## Metodología y herramientas

El plugin no lleva una sola línea de JavaScript: es CSS puro apoyado en `calc()` y
`clamp()`. Todas las utilidades se reducen a la misma fórmula, centralizada en una
única variable `--calc-ratio`:

```css
calc(value * clamp(0px, 100vw, max-width) / base-width)
```

Toda la configuración son dos referencias de diseño — el mockup móvil y el de
escritorio — declaradas como variables:

```css
@import "tailwindcss";
@import "tailwindcss-calc";

@layer theme {
  :root {
    --window-width: 375; /* mockup móvil */
  }

  @variant md {
    :root {
      --window-width: 1440; /* mockup escritorio */
    }
  }
}
```

Con esos valores por defecto puedes omitir el bloque entero. Un solo breakpoint
(`md`) cambia la referencia base; no hace falta ninguna escalera `md:` para los
tamaños.

```html
<div class="w-500 h-300 p-20 m-10">
  <h1 class="text-32 mb-20">Hello World</h1>
  <p class="text-16 leading-24">Responsive content</p>
</div>
```

Cubre ancho y alto, `size`, mínimos y máximos, paddings, márgenes, tipografía,
interlineado y posicionamiento.
