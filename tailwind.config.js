/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {

    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    fontFamily: {
      altivo: ['altivo', 'sans-serif'],
      bai: ['bai-jamjuree', 'sans-serif'],
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

