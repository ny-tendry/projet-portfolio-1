/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 60px rgba(0, 0, 0, 0.3)',
        '4xl': '0 0 80px rgba(0, 0, 0, 0.25)',
        '5xl': '0 0 100px rgba(0, 0, 0, 0.8)',
        'giant': '0 0 150px rgba(0, 0, 0, 400)'
      },
      width: {
        'longueur': '90%',
      },
      height: {
        'hauteur': '95%',
      },
      gap:{
        'distance':'400px'
      },
      rounded:{
        'bord':'120px'
      }
      
      
    },
  },
  plugins: [],
}

