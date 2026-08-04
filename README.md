# Don Merlo Bakery — Landing Page

Landing page para Don Merlo Bakery: repostería boutique y pizzería en línea en Siguatepeque y Otoro, Honduras.

## Stack

- React 18 + TypeScript
- Tailwind CSS
- Vite
- lucide-react (íconos)

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre el link que te muestre la terminal (normalmente `http://localhost:5173`).

Para generar la versión de producción:

```bash
npm run build
npm run preview
```

Los archivos listos para subir a hosting quedan en la carpeta `dist/`.

## Estructura

```
src/
  components/
    Header.tsx        Barra de navegación fija con logo centrado y CTA de WhatsApp
    Hero.tsx           Sección de inicio con el eslogan
    Menu.tsx            Grid de las 4 categorías del menú
    HowItWorks.tsx      Sección "Cómo Funciona" (3 pasos)
    Footer.tsx           Pie de página con contacto y ubicaciones
    WhatsAppFloat.tsx  Botón flotante de WhatsApp
    SectionDivider.tsx Divisor decorativo entre secciones (motivo de gota del logo)
    icons/WhatsAppIcon.tsx  Ícono de WhatsApp (no incluido en Lucide/Heroicons)
  data/
    menuData.ts        Todo el contenido editable: categorías del menú, pasos, número de WhatsApp e Instagram
  types/
    index.ts           Tipos compartidos
```

## Cosas para personalizar antes de publicar

1. **Fotos reales de los productos**: por ahora cada tarjeta del menú usa un fondo con degradado + ícono como placeholder (no tuve acceso a un banco de imágenes real). Para poner tus fotos:
   - Coloca las imágenes en `public/images/` (crea la carpeta).
   - En `src/components/Menu.tsx`, agrega una capa `<img>` (o cambia el `<div>` de fondo por `background-image`) dentro de cada tarjeta, usando la ruta de tu imagen.
   - El campo `gradient` en `src/data/menuData.ts` puedes dejarlo como fallback mientras subes las fotos.
2. **Número de WhatsApp / Instagram**: están centralizados en `src/data/menuData.ts` (`WHATSAPP_NUMBER`, `INSTAGRAM_HANDLE`).
3. **Textos del menú**: edita `menuCategories` en `src/data/menuData.ts`.
4. **Colores**: los tokens de marca están en `tailwind.config.ts` (`rose`, `cream`, `ink`, `espresso`, `gold`).

## Despliegue

El proyecto genera archivos estáticos (`npm run build` → carpeta `dist/`), listos para Netlify, Vercel, GitHub Pages o cualquier hosting estático.
