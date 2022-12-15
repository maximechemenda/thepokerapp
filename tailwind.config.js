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
          "action_strong": "#CFF80B",
          "red": "FF2257",
          "header_color": "#7A7A7E",
          "black": "#000000",
          "grey": "grey"
      }
    },
    plugins: [],
  }