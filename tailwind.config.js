/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      width:{
        '1000':'1000px'
      },
      height:{
        '500':'500px'
      }
    },
  },
  plugins: [],
}

