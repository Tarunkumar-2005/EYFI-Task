/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        eyfi: {
          50: '#eef8ff',
          100: '#d8efff',
          200: '#b9e3ff',
          300: '#87d2ff',
          400: '#4fb6ff',
          500: '#2595ff',
          600: '#0f77f5',
          700: '#0a5ee0',
          800: '#0e4cb5',
          900: '#11428e',
          950: '#0a295c',
        },
        brand: {
          dark: '#080C14',
          card: '#111726',
          cardHover: '#161F33',
          border: '#1F293D',
          gold: '#F59E0B',
          silver: '#94A3B8',
          bronze: '#D97706',
          emerald: '#10B981',
          accent: '#6366F1',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px -5px rgba(245, 158, 11, 0.35)',
        'glow-silver': '0 0 25px -5px rgba(148, 163, 184, 0.25)',
        'glow-bronze': '0 0 25px -5px rgba(217, 119, 6, 0.3)',
        'glow-blue': '0 0 30px -5px rgba(37, 149, 255, 0.35)',
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounceSubtle 2.5s infinite ease-in-out',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
