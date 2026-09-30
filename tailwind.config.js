/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        espresso: '#2B1710',
        champagne: '#E9DCC9',
        cream: '#F7EFE3',
        mutedGold: '#B08D57',
        goldHover: '#987743',
        darkOverlay: 'rgba(43, 23, 16, 0.85)',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        garamond: ['Cormorant Garamond', 'serif'],
        script: ['Great Vibes', 'cursive'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
