/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  variants : {
    display: ['group-hover']
  }
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}