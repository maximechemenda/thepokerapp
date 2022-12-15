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
          "sub-background": "#1e1e1e",
          "white": "#FFFFFF",
          "action-strong": "CFF80B",
          "red": "FF2257"
      }
    },
    plugins: [],
  }