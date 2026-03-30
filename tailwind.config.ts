import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          50:  '#f0fdf9',
          100: '#ccfbee',
          200: '#99f6da',
          300: '#5cedc0',
          400: '#2dd4a0',
          500: '#14b884',
          600: '#0d9468',
          700: '#0e7656',
          800: '#115e46',
          900: '#114e3b',
          DEFAULT: '#0d9468',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config
