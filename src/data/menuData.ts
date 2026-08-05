import { Cake, Cookie, Grid3x3, Pizza, ListChecks, MessageCircle, MapPin } from 'lucide-react'
import type { MenuItem, OrderStep } from '../types'

export const WHATSAPP_NUMBER = '50489436365'
export const WHATSAPP_DISPLAY = '+504 8943-6365'
export const INSTAGRAM_HANDLE = '@donmerlobakeryhn'
export const INSTAGRAM_URL = 'https://instagram.com/donmerlobakeryhn'

export const menuItems: MenuItem[] = [
  {
    id: 'postres',
    title: 'Postres',
    description: 'Tartas, pasteles y postres de autor, horneados en pequeños lotes.',
    icon: Cake,
    gradient: 'from-rose via-rose to-rose-dark',
    whatsappMessage: 'Hola Don Merlo, quisiera ver el menú de Postres 🍰',
  },
  {
    id: 'galletas',
    title: 'Galletas',
    description: 'Galletas artesanales, crocantes por fuera y suaves por dentro.',
    icon: Cookie,
    gradient: 'from-rose-dark via-rose to-rose',
    whatsappMessage: 'Hola Don Merlo, quisiera ver el menú de Galletas 🍪',
  },
  {
    id: 'waffles',
    title: "Waffle's",
    description: 'Waffles recién hechos, dorados y listos para acompañar.',
    icon: Grid3x3,
    gradient: 'from-rose via-rose-deep to-rose',
    whatsappMessage: "Hola Don Merlo, quisiera ver el menú de Waffle's 🧇",
  },
  {
    id: 'pizzas',
    title: 'Pizzas',
    description: 'Pizzas de masa artesanal con un toque italiano clásico.',
    icon: Pizza,
    gradient: 'from-rose-deep via-rose-dark to-rose',
    whatsappMessage: 'Hola Don Merlo, quisiera ver el menú de Pizzas 🍕',
  },
]

export const orderSteps: OrderStep[] = [
  {
    number: '01',
    title: 'Elige',
    description: 'Explora nuestro menú artesanal.',
    icon: ListChecks,
  },
  {
    number: '02',
    title: 'Ordena',
    description: `Escríbenos al ${WHATSAPP_DISPLAY}.`,
    icon: MessageCircle,
  },
  {
    number: '03',
    title: 'Disfruta',
    description: 'Entregas en Siguatepeque, Comayagua y Otoro.',
    icon: MapPin,
  },
]

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
