/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": "480px"
      },
      fontFamily:{
        nunito: ['Nunito', 'sans-serif']
      },
      spacing: {
        "big": "48rem"
      }
    },
  },
  plugins: [],
}