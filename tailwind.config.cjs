/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0cad3c",

          "secondary": "#34930b",

          "accent": "#f77d67",

          "neutral": "#1E2C38",

          "base-100": "#E5E2E9",

          "info": "#90BEEA",

          "success": "#1A746A",

          "warning": "#EDA154",

          "error": "#ED2121",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
