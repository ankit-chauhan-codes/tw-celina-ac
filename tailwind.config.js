/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {

    screens: {
      'xs': '375px',
      'sm': '575px',
      'md': '768px',
      'lg': '980px',
      'xl': '1024px',
      '2xl': '1280px',
      '3xl': '1440px',
      '4xl': '1600px',
    },

    fontFamily: {
      altivo: ['altivo', 'sans-serif'],
      bai: ['bai-jamjuree', 'sans-serif'],
    },

    container: {
      center: true,
      screens: {
        'xs': '302px',
        'sm': '462px',
        'md': '608px',
        // 'lg': '90%',
        // 'xl': '90%',
        '3xl': '1396px',
      },
    },

    extend: {

      colors: {
        'primary': '#7B9645',
        'secondary': '#53514D',
        'light': '#fff',
        'dark': '#201818',
      },

    },
  },
  plugins: [],
}

