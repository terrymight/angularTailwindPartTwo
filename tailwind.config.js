/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors:{
      "theme":"hsl(240, 100%, 50%)",
      "white":"rgb(255, 255, 255)",
      "hover":"hsl(315, 100%, 60%)"
    },
    extend: {},
  },
  plugins: [],
}

