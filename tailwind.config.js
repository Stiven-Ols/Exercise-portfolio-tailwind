/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#148e71",
        "gray-color": "#D1D5DB",
        "card-bg": "#0d0d0d"
      }
    },

    fontFamily: {
      "cursiva":['"Dancing Script"', 'cursive']
    }
  },
  plugins: [],
}

