/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height:{
        100: '600px',
      },
      width:{
        100: '500px'
      }
    },
  },
  plugins: [],
}