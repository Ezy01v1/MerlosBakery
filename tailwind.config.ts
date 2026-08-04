import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rose: {
          DEFAULT: '#C17779',
          dark: '#9C5658',
          deep: '#7D4547',
        },
        cream: {
          DEFAULT: '#EBE5D9',
          light: '#F7F3EA',
        },
        ink: '#2B211C',
        espresso: '#33241F',
        gold: '#C79A46',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        script: ['"Cormorant Garamond"', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 30px -12px rgba(43, 33, 28, 0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config
