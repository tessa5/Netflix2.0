/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  variants : {
    
  }
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}