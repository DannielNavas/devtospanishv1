/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  plugins: [],
  variants: {
    with: ['responsive', 'hover', 'focus', 'active'],
    extend: {
      fontFamily: {
        Monserrat: ['Monserrat', 'sans-serif']
      }
    }
  }
}
