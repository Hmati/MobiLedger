/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#fdf8f3',
          100: '#f5ebe0',
          200: '#e8d5c0',
          300: '#d4b896',
          400: '#b8926a',
          500: '#9a6e47',
          600: '#7d5432',
          700: '#5e3e22',
          800: '#3e2a14',
          900: '#1f1409',
        },
        cream: '#fefaf5',
        gold: '#c9a227',
        'gold-light': '#f0d98c',
        'text-dark': '#2d1f0e',
        'text-mid': '#6b4f34',
        'text-light': '#9a7d5a',
        border: '#e8d5c0',
        white: '#ffffff',
        success: '#2d7a4f',
        danger: '#b83232',
        info: '#1a5fa8',
      },
      fontFamily: {
        head: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}