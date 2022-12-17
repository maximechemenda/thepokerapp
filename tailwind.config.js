/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
    theme: {
    extend: {},
      colors: {
          "background": "#111111",
          "sub_background": "#1e1e1e",
          "white": "#FFFFFF",
        //   "action_strong": "#2d62ea", //blue
          "action_strong": "#CFF80B", // yellow/green (original one)
        //   "action_strong": "#ed450f", // orange
        //   "action_strong": "#00FFA4", // green
          "red": "#FF2257",
          "header_color": "#7A7A7E",
          "black": "#000000",
          "grey": "grey",
          "secondary-grey": "#505050"
      }
    },
    plugins: [],
  }