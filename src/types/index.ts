import type { LucideIcon } from 'lucide-react'

export interface MenuCategory {
  id: string
  name: string
  description: string
  icon: LucideIcon
  /** Tailwind gradient classes used for the placeholder artwork until real photos are uploaded */
  gradient: string
  whatsappMessage: string
}

export interface OrderStep {
  number: string
  title: string
  description: string
  icon: LucideIcon
}
