const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const typography = require('@tailwindcss/typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{ts,tsx}'],
  darkMode: 'class',
  plugins: [typography],
  theme: {
    colors: {
      black: colors.black,
      primary: colors.stone,
      secondary: colors.yellow,
      white: colors.white,
      transparent: colors.transparent,
    },
    fontFamily: {
      mono: ['NB International Pro Mono', ...defaultTheme.fontFamily.mono],
      sans: ['Lausanne', ...defaultTheme.fontFamily.sans],
      icon: ['Icons'],
    },
  },
}
