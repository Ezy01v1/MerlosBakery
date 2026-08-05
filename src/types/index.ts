import type { LucideIcon } from 'lucide-react'

/** One category card in the menu grid. */
export interface MenuItem {
  id: string
  title: string
  /** Path to a real product photo. Leave undefined to fall back to the icon + gradient placeholder. */
  image?: string
  description: string
  icon: LucideIcon
  /** Tailwind gradient classes used for the placeholder artwork until a real photo is set */
  gradient: string
  whatsappMessage: string
}

export interface OrderStep {
  number: string
  title: string
  description: string
  icon: LucideIcon
}
