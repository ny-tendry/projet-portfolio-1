/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        'barre':'21.5rem'
      },
      height: {
        'hauteur1': '95%',
        'hauteur2':'400vh',
        'hauteur3':'3.5rem',
      },
      gap:{
        'distance':'400px'
      },
      rounded:{
        'bord':'120px'
      },
      margin:{
        'margeVert': '10%',
        'margeHorizon': '5%',
        
      },
      fontSize:{
        'font1':'2rem'
      },
      lineHeight:{
        'lineHeight1':'2rem'
      },
      boxShadow: {
        'bottom1': '0 1px 3px -1px rgba(0, 0, 0, 0.1), 0 1px 3px -1px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}

