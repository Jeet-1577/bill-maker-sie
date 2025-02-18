/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../templates/**/*.html',
    '../../**/templates/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          DEFAULT: '#1a1a1a',
          50: '#2d2d2d',
          100: '#262626',
          200: '#1f1f1f',
          300: '#171717',
          400: '#121212',
          500: '#0a0a0a',
        },
        'accent': {
          DEFAULT: '#3b82f6',
          hover: '#2563eb',
        },
        'neon': {
          blue: '#00f2fe',
          purple: '#4a4eff',
          pink: '#ff00e5'
        }
      }
    },
  },
  plugins: [],
}
