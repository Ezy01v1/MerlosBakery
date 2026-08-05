import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import WhatsAppIcon from './icons/WhatsAppIcon'
import { buildWhatsAppLink } from '../data/menuData'

const navLinks = [
  { label: 'Menú', href: '#menu' },
  { label: 'Cómo Pedir', href: '#como-pedir' },
  { label: 'Ubicaciones', href: '#ubicaciones' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cream/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center">
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="text-rose-deep transition-transform duration-300 hover:scale-105 md:hidden"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          <nav className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-medium uppercase tracking-wide text-rose-deep transition-colors duration-300 hover:text-rose"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <a href="#top" className="flex-shrink-0 text-center">
          <span className="font-display text-xl font-semibold tracking-wide text-rose sm:text-2xl">
            Don Merlo <span className="italic">Bakery</span>
          </span>
        </a>

        <div className="flex flex-1 justify-end">
          <a
            href={buildWhatsAppLink('Hola Don Merlo, quisiera hacer un pedido 🍰')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-rose px-4 py-2 text-sm font-semibold text-cream shadow-soft transition-transform duration-300 hover:scale-105 sm:flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Pedir por WhatsApp
          </a>
          <a
            href={buildWhatsAppLink('Hola Don Merlo, quisiera hacer un pedido 🍰')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full bg-rose p-2 text-cream transition-transform duration-300 hover:scale-105 sm:hidden"
            aria-label="Pedir por WhatsApp"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      {isOpen && (
        <nav className="border-t border-rose/20 bg-cream md:hidden">
          <div className="flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-2 py-3 font-sans text-sm font-medium uppercase tracking-wide text-rose-deep hover:bg-rose/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href={buildWhatsAppLink('Hola Don Merlo, quisiera hacer un pedido 🍰')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-rose px-4 py-3 text-sm font-semibold text-cream"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Pedir por WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
