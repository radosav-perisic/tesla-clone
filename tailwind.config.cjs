/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      html: {
        scrollBehavior: 'smooth',
       height : '100%'
      },
    },
  },
  plugins: [],
}
