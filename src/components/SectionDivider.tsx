interface SectionDividerProps {
  /** Color that sits above the divider (the section ending) */
  fromColor: string
  /** Color that sits below the divider (the section starting) */
  toColor: string
  flip?: boolean
}

/**
 * A row of teardrop shapes echoing the drip beneath the "M" in the
 * Don Merlo monogram — used as the brand's signature transition between
 * sections instead of a plain straight edge.
 */
export default function SectionDivider({ fromColor, toColor, flip = false }: SectionDividerProps) {
  const drips = Array.from({ length: 14 })

  return (
    <div
      aria-hidden="true"
      className="relative h-10 sm:h-14 w-full overflow-hidden"
      style={{ backgroundColor: toColor, transform: flip ? 'scaleY(-1)' : undefined }}
    >
      <svg
        viewBox="0 0 700 60"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <rect width="700" height="60" fill={toColor} />
        {drips.map((_, i) => {
          const x = (700 / drips.length) * i + 700 / drips.length / 2
          return (
            <path
              key={i}
              d={`M ${x} 0 C ${x - 16} 18, ${x - 16} 34, ${x} 40 C ${x + 16} 34, ${x + 16} 18, ${x} 0 Z`}
              fill={fromColor}
            />
          )
        })}
      </svg>
    </div>
  )
}
