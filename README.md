# Backline Pro

Landing page profesional para una empresa de arriendo de equipos de backline musical. Construida con **Astro 5**, **React 19**, **TypeScript** y **Tailwind CSS v4**.

Sitio estático de 5 páginas con animaciones, galería interactiva, filtro de catálogo, formulario de contacto, datos estructurados SEO y transiciones de página fluidas.

---

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework web | [Astro 5](https://astro.build) (static output) |
| UI interactiva | [React 19](https://react.dev) (islands) |
| Lenguaje | [TypeScript 5](https://www.typescriptlang.org) (strict) |
| Estilos | [Tailwind CSS v4](https://tailwindcss.com) + `@tailwindcss/vite` |
| Animaciones | [Motion](https://motion.dev) (ex-Framer Motion) v12 |
| Formulario | [Formspree](https://formspree.io) (POST sin backend) |
| SEO | JSON-LD (`LocalBusiness`, `FAQPage`) + `@astrojs/sitemap` |
| Transiciones | [`astro:transitions`](https://docs.astro.build/en/guides/view-transitions/) |

---

## Estructura

```
src/
├── components/
│   ├── islands/        # Componentes React interactivos (islands)
│   │   ├── ContactForm.tsx        # Formulario con estados loading/error/success
│   │   ├── EquipmentFilter.tsx    # Filtro de catálogo por categoría
│   │   ├── FadeInView.tsx         # Wrapper de animación scroll (Motion)
│   │   ├── ImageGallery.tsx       # Galería con lightbox, teclado, focus trap
│   │   └── TestimonialCarousel.tsx # Carrusel de testimonios
│   ├── layout/
│   │   ├── BaseLayout.astro       # Layout global + ViewTransitions
│   │   ├── Footer.astro           # Pie de página
│   │   ├── Header.astro           # Nav responsive con menú móvil accesible
│   │   └── SEO.astro              # Meta tags + Open Graph
│   ├── sections/                  # Secciones de página reutilizables
│   │   ├── BrandBar.astro
│   │   ├── FAQ.astro
│   │   ├── FinalCTA.astro
│   │   ├── Hero.astro
│   │   └── HowItWorks.astro
│   └── ui/                        # Componentes atómicos
│       ├── Button.astro
│       └── Card.astro
├── data/
│   ├── constants.ts   # Configuración del sitio, redes sociales, nav
│   ├── equipos.ts     # Catálogo de equipos con tipos estrictos
│   ├── faqs.ts        # Preguntas frecuentes
│   ├── marcas.ts      # Marcas representadas
│   ├── servicios.ts   # Servicios ofrecidos
│   └── testimonios.ts # Testimonios de clientes
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── 404.astro
│   ├── catalogo.astro
│   ├── index.astro     # Landing principal
│   ├── inversiones.astro
│   └── servicios.astro
└── styles/
    └── globals.css     # Tailwind v4 import
```

---

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Landing: hero, marcas, servicios destacados, testimonios, galería, cómo funciona, FAQ, formulario |
| `/servicios` | Todos los servicios con descripción detallada y CTA |
| `/catalogo` | Catálogo completo de equipos con filtro por categoría |
| `/inversiones` | Página de oportunidad de inversión con métricas y pitch |
| `/*` | Página 404 personalizada |

---

## Empezar

```bash
pnpm install
pnpm dev              # Servidor de desarrollo
pnpm build            # Build producción → dist/
pnpm preview          # Vista previa del build
```

### Formulario de contacto

1. Regístrate en [formspree.io](https://formspree.io) y crea un formulario
2. Copia el ID del formulario en `src/data/constants.ts`:

```ts
export const FORMSPREE_FORM_ID = "tu-form-id-aqui";
```

---

## Decisiones técnicas

### Astro + React islands

Se eligió Astro con React islands en vez de una SPA completa porque:
- Landing page con contenido mayormente estático → cero JS en la carga inicial
- Solo los componentes interactivos (galería, filtro, formulario, carrusel) se hidratan como React
- Cada island usa `client:visible` para hidratarse solo cuando entra al viewport, minimizando JS inicial

### Motion para animaciones

Motion (ex Framer Motion) se usa exclusivamente en `FadeInView` para animaciones por scroll con `whileInView`. El bundle compartido es de ~40 KB gzip.

### Formspree (sin backend)

No se requiere servidor. El formulario envía POST directamente a Formspree, que reenvía por email. Ideal para sitios estáticos sin backend.

### Tipado estricto

- `tsconfig` hereda de `astro/tsconfigs/strict`
- Interfaces explícitas en todos los componentes
- Tipo `Categoria` inferido de `as const` para filtrar catálogo (union type, no `string`)
- `error: string | null` en lugar de `error: boolean` en el formulario

---

## Accesibilidad

- Menú móvil con `aria-expanded` y `aria-controls`
- Modal de galería con focus trap (Tab/Shift+Tab cíclico)
- Cierre con tecla Escape, navegación con flechas izquierda/derecha
- Atributos `alt` descriptivos en todas las imágenes
- Roles ARIA semánticos (`navigation`, `banner`, `main`)

---

## SEO

- Meta tags + Open Graph via `SEO.astro`
- JSON-LD `LocalBusiness` en todas las páginas (layout global)
- JSON-LD `FAQPage` en la página de inicio
- Sitemap generado automáticamente con `@astrojs/sitemap`
- Imágenes con lazy loading y dimensiones implícitas

---

## Despliegue

El sitio genera una carpeta `dist/` con HTML estático. Compatible con:

- [Cloudflare Pages](https://pages.cloudflare.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)

No requiere adaptadores adicionales gracias al output `static` por defecto de Astro.

---

## Licencia

Proyecto privado — todos los derechos reservados.
