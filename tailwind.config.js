/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.html"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['"Outfit"', "sans-serif"],
      },
      colors: {
        darkgreen: "#00672E",
      },
    },
  },
  plugins: [],
};
