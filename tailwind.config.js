/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./views/**/*.ejs",
        "./partials/**/*.ejs"
    ],
  theme: {
    extend: {
        colors: {
            'oyster': '#ede8de',
            'taupe': '#e2dbd2',
            'highlighter': '#ffde59',
            'moss': '#686046'
        },
        fontFamily: {
            'serif': ['"Cormorant Garamond"', 'Garamond', 'ui-system-serif']
        }
    },
  },
  plugins: [],
}