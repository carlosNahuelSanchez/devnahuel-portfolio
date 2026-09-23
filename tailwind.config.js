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
        void: '#050507',
        surface: '#0a0a0d',
        card: '#101015',
        'card-hover': '#15151c',
        panel: '#0d0d12',
        hairline: 'rgba(255, 255, 255, 0.14)',
        bright: 'rgba(255, 255, 255, 0.28)',
        highlight: 'rgba(255, 255, 255, 0.55)',
        chrome: '#e4e4e7',
        'status-emerald': '#10b981',
      },
      fontFamily: {
        display: ['Syncopate', 'sans-serif'],
        heading: ['Familjen Grotesk', 'sans-serif'],
        body: ['Chivo', 'sans-serif'],
        mono: ['Red Hat Mono', 'monospace'],
      },
      lineHeight: {
        tight: '1.32',
        heading: '1.35',
      },
      borderRadius: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
