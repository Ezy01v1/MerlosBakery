import { motion } from 'framer-motion'
import { ClipboardList } from 'lucide-react'
import WhatsAppIcon from './icons/WhatsAppIcon'
import { buildWhatsAppLink } from '../data/menuData'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-rose">
      {/* Subtle artisanal paper texture */}
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]">
        <filter id="paperTexture">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paperTexture)" />
      </svg>

      {/* Oversized drip watermark echoing the logo's monogram accent */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 240"
        className="pointer-events-none absolute -right-16 -top-10 h-64 w-56 text-rose-dark/40 sm:h-80 sm:w-72 lg:h-[26rem] lg:w-96"
      >
        <path d="M100 10c40 55 66 90 66 130a66 66 0 1 1-132 0c0-40 26-75 66-130z" fill="currentColor" />
      </svg>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:py-40">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-script text-2xl italic text-cream/90 sm:text-3xl"
        >
          ✨ Buoni dolci, buona vita ✨
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl lg:text-6xl"
        >
          Repostería artesanal,
          <br className="hidden sm:block" /> hecha con amor
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-xl font-sans text-base leading-relaxed text-cream/90 sm:text-lg"
        >
          Repostería artesanal en línea. Postres, galletas, waffles y pizzas hechas con amor.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          href={buildWhatsAppLink('Hola Don Merlo, quisiera hacer un pedido 🍰')}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-cream px-8 py-4 font-sans text-sm font-semibold uppercase tracking-wide text-rose-deep shadow-soft transition-colors duration-300"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Haz tu pedido ahora
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4 flex items-center gap-2 font-sans text-sm text-cream/80"
        >
          <ClipboardList size={16} />
          Trabajamos solo bajo pedidos
        </motion.p>
      </div>
    </section>
  )
}
