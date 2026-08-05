import { Instagram, MapPin } from 'lucide-react'
import WhatsAppIcon from './icons/WhatsAppIcon'
import { WHATSAPP_DISPLAY, INSTAGRAM_HANDLE, INSTAGRAM_URL, buildWhatsAppLink } from '../data/menuData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="ubicaciones" className="bg-espresso px-4 py-14 text-cream sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        <span className="font-display text-2xl font-semibold tracking-wide">
          Don Merlo <span className="italic">Bakery</span>
        </span>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm text-cream/85 transition-colors duration-300 hover:text-gold"
          >
            <Instagram size={18} />
            {INSTAGRAM_HANDLE}
          </a>
          <a
            href={buildWhatsAppLink('Hola Don Merlo, quisiera hacer un pedido 🍰')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm text-cream/85 transition-colors duration-300 hover:text-gold"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {WHATSAPP_DISPLAY}
          </a>
          <span className="inline-flex items-center gap-2 font-sans text-sm text-cream/85">
            <MapPin size={18} />
            Siguatepeque, Comayagua &amp; Otoro
          </span>
        </div>

        <div className="h-px w-24 bg-cream/20" />

        <p className="font-sans text-xs text-cream/60">
          © {year} Don Merlo Bakery. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
