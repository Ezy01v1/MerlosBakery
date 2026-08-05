import { motion } from 'framer-motion'
import { Store, ClipboardCheck } from 'lucide-react'
import { orderSteps } from '../data/menuData'
import SectionDivider from './SectionDivider'

export default function HowItWorks() {
  return (
    <>
      <SectionDivider fromColor="#F7F3EA" toColor="#C17779" />

      <section id="como-pedir" className="bg-rose px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-cream/70">
              Paso a paso
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-cream sm:text-4xl">
              Cómo Funciona
            </h2>
          </motion.div>

          <ol className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
            {orderSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.li
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="flex flex-col items-center text-center"
                >
                  <span className="font-display text-sm font-semibold text-gold">{step.number}</span>
                  <span className="mt-3 flex h-16 w-16 items-center justify-center rounded-full bg-cream/10 text-cream">
                    <Icon size={26} strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-cream">{step.title}</h3>
                  <p className="mt-2 max-w-[16rem] font-sans text-sm text-cream/80">{step.description}</p>
                </motion.li>
              )
            })}
          </ol>

          <div className="mx-auto mt-16 flex max-w-xl flex-col items-center gap-3 border-t border-cream/20 pt-8 text-center sm:flex-row sm:justify-center sm:gap-6">
            <span className="inline-flex items-center gap-2 font-sans text-sm text-cream/90">
              <Store size={16} />
              Tienda en línea
            </span>
            <span className="hidden h-4 w-px bg-cream/30 sm:block" />
            <span className="inline-flex items-center gap-2 font-sans text-sm text-cream/90">
              <ClipboardCheck size={16} />
              Solo bajo pedidos
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
