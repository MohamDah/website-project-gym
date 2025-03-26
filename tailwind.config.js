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
        primarybg: "#EFECEA",
      },
      screens: {
        xs: "340px"
      }
    },
  },
  plugins: [],
};
