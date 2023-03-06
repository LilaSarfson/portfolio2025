/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      width: {
        '10p': '10%',
        '60p':'60%'
      },
      variants: {
        animation: ["motion-safe"]
      },
      colors:{
        'lila':'rgb(160, 175, 229)',
        'amarillo':'rgb(251, 223, 64)',
        'verde':'rgb(12, 175, 107)',
        'rosa':'rgb(246, 142, 178)',
        'rojo':'rgb(245, 49, 11)',
        'azul':'rgb(203, 231, 233)',
        'azul-css':	'rgb(30,144,255)',
        'oscuro':'rgb(245, 221, 69)'
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      
    },
  },
  plugins: [],
}
