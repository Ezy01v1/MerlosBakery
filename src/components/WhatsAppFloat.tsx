import WhatsAppIcon from './icons/WhatsAppIcon'
import { buildWhatsAppLink } from '../data/menuData'

export default function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppLink('Hola Don Merlo, quisiera hacer un pedido 🍰')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-rose text-cream shadow-soft transition-transform hover:scale-110 sm:bottom-8 sm:right-8"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose opacity-40" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  )
}
