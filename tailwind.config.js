/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    screens:{
      'phone': {max: '600px'},
    },

    extend: {
      backgroundImage:{
        'header-bg': "url(/img/header/header-bg.png)",
        'home-bg' : "url(/img/home/home-bg.png)"
      }
    },

  },
  plugins: [],
}

