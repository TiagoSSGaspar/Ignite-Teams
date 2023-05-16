/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: '#ffff',
      red: '#F75A68',
      red_dark: '#AA2834',
      green: {
        '700': '#00875F',
        '500': '#00B37E',
      },
      gray: {
        100: '#E1E1E6',
        200: '#C4C4CC',
        300: '#7C7C8A',
        400: '#323238',
        500: '#29292E',
        600: '#202024',
        700: '#121214',
      }
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto Slab", "serif"],
    },
    extend: {},
  },
  plugins: [],
}

/*
SM: 14,
MD: 16,
LG: 18,
XL: 24
*/
