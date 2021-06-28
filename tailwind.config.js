const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {

  purge: { content: ['./index.html','./dist/**/*.html', './public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0272B1',
        secondary:'#3CBFBD',
        sky: colors.sky,
        teal: colors.teal,
      },
      fontFamily: {
        sans: ['Lato', 'Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
