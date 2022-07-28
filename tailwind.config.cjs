/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          lg: '900px',
          xl: '900px',
          '2xl': '900px'
        }
      }
    },
    fontFamily: {
      sans: "'Lexend Deca', sans-serif"
    }
  },
  plugins: []
}
