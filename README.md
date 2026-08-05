# Don Merlo Bakery — Landing Page

Landing page premium para Don Merlo Bakery: repostería boutique y pizzería en línea en Siguatepeque, Comayagua y Otoro, Honduras.

## Stack

- React 18 + TypeScript
- Tailwind CSS
- Vite
- Framer Motion (fade-ins, scroll reveals, micro-interacciones)
- lucide-react (íconos)

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre el link que te muestre la terminal (normalmente `http://localhost:5173`).

Para producción:

```bash
npm run build
npm run preview
```

Los archivos listos para subir a hosting quedan en `dist/`.

## Estructura

```
src/
  components/
    Navbar.tsx          Barra fija con backdrop-blur, logo centrado y CTA de WhatsApp
    Hero.tsx             Sección de inicio: eslogan, textura de papel sutil, animaciones de entrada
    MenuGrid.tsx          Grid de las 4 categorías (1 col móvil / 2 tablet / 4 desktop)
    HowItWorks.tsx        "Cómo Funciona": Elige / Ordena / Disfruta
    Footer.tsx             Pie de página con contacto y ubicaciones
    WhatsAppFloat.tsx    Botón flotante de WhatsApp
    SectionDivider.tsx  Divisor decorativo (motivo de gota del logo)
    icons/WhatsAppIcon.tsx  Ícono de WhatsApp (no está en Lucide/Heroicons)
  data/
    menuData.ts          Contenido editable: items del menú, pasos, WhatsApp e Instagram
  types/
    index.ts              Interface MenuItem (id, title, image, description) y OrderStep
```

## Cosas para personalizar antes de publicar

1. **Fotos reales de los productos**: no tuve acceso a un banco de imágenes desde este entorno, así que cada tarjeta usa un degradado + ícono como placeholder. La interfaz `MenuItem` en `src/types/index.ts` ya tiene un campo `image` opcional:
   - Coloca tus fotos en `public/images/`.
   - En `src/data/menuData.ts`, agrégale `image: '/images/postres.jpg'` al item que corresponda — `MenuGrid.tsx` ya detecta ese campo y muestra la foto con el zoom al hover en vez del placeholder, sin tocar nada más.
2. **Número de WhatsApp / Instagram**: centralizados en `src/data/menuData.ts`.
3. **Textos del menú y pasos**: edita `menuItems` y `orderSteps` en `src/data/menuData.ts`.
4. **Colores**: tokens de marca en `tailwind.config.ts` (`rose`, `cream`, `ink`, `espresso`, `gold`).
5. **Copyright**: el footer usa el año actual automáticamente en vez de un año fijo, para que nunca quede desactualizado.

## Despliegue

`npm run build` genera archivos estáticos en `dist/`, listos para Netlify, Vercel, GitHub Pages o cualquier hosting estático.
