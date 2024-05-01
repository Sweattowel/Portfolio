/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  theme: {
    colors: {
      'BLACK': '#000000',
      'WHITE': '#ffffff',
      'DARK': '#1d3c45',
      'HIGHLIGHT': '#d2601a',
      'LIGHT': '#fff1e1',
    },
    extend: {},
  },
  plugins: [],
}

