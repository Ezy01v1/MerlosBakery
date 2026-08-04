import { ArrowRight } from 'lucide-react'
import { menuCategories, buildWhatsAppLink } from '../data/menuData'
import SectionDivider from './SectionDivider'

export default function Menu() {
  return (
    <>
      <SectionDivider fromColor="#C17779" toColor="#F7F3EA" />

      <section id="menu" className="bg-cream-light px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-rose">
              Hecho a mano, bajo pedido
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Nuestro Menú
            </h2>
            <p className="mt-4 font-sans text-ink/70">
              Cuatro categorías, una misma promesa: ingredientes honestos y horneado del día.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {menuCategories.map((category) => {
              const Icon = category.icon
              return (
                <a
                  key={category.id}
                  href={buildWhatsAppLink(category.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br ${category.gradient} shadow-soft`}
                >
                  {/* Icon-driven placeholder artwork, ready to be swapped for a real photo */}
                  <Icon
                    aria-hidden="true"
                    className="absolute right-6 top-6 h-20 w-20 text-cream/25 transition-transform duration-500 group-hover:scale-110 sm:h-28 sm:w-28"
                    strokeWidth={1.25}
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/40" />

                  <div className="relative flex flex-col items-start gap-3 p-6 sm:p-8">
                    <h3 className="font-display text-2xl font-semibold text-cream sm:text-3xl">
                      {category.name}
                    </h3>
                    <p className="max-w-xs font-sans text-sm text-cream/85">
                      {category.description}
                    </p>
                    <span className="mt-2 inline-flex translate-y-2 items-center gap-2 rounded-full bg-cream px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wide text-rose-deep opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      Ver opciones
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
