/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'latest-bg': '#D72050',
        'brk-news-bg': '#F3F3F3',
        'pri-text': '#403F3F',
        'sec-text': '#706F6F',
      }
    },
  },
  plugins: [require("daisyui")],
});