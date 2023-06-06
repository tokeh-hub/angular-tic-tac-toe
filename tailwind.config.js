/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif']
      },
      colors: {
        'grey-dark': '#1A2A33',
        'grey-light': '#1F3641',
        'green-light': '#65E9E4',
        'green-dark': '#31C3BD',
        'yellow-light': '#FFC860',
        'yellow-dark': '#F2B137',
        'slate-dark': '#A8BFC9',
        'slate-light': '#DBE8ED',
        'silver': '#A8BFC9',
      },
      boxShadow: {
        'bottom-grey': '0px 10px #10212A',
        'bottom-yellow': '0px 8px #CC8B13',
        'bottom-white': '0px 4px #64748b',
        'bottom-yelo': '0px 4px #CC8B13',
        'bottom-green': '0px 8px #118C87'
      }
    },
  },
  plugins: [],
}