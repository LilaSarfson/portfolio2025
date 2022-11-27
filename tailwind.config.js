/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'lila':'rgb(160, 175, 229)',
        'amarillo':'rgb(251, 223, 64)',
        'verde':'rgb(12, 175, 107)',
        'rosa':'rgb(246, 142, 178)',
        'rojo':'rgb(245, 49, 11)',
        'azul':'rgb(203, 231, 233)',
        'azul-css':	'rgb(30,144,255)'
      },
    },
  },
  plugins: [],
}
