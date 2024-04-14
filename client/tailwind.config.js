/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "landing-bg": "url('./static/landing-bg.jpg')"
      }
    },
  },
  plugins: [],
}

