/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bodyBackground: "hsl(218deg, 23%, 16%)",
        boxBackground: "hsl(217deg, 19%, 24%)",
        diceBackground: "hsl(150, 100%, 66%)",
        cyan: "hsl(193, 38%, 86%)",
      }
    },
  },
  plugins: [],
}
