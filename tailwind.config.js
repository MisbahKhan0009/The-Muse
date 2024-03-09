/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#aa8453",
        darkBg: "#222222",
        offWhite: "#adadad",
        offWhiteBg: "#F8F5F0",
      },
      fontFamily: {
        Barlow: ["Barlow", "sans-serif"],
        BarlowCondensed: ["Barlow Condensed", "sans-serif"],
        GildaDisplay: ["Gilda Display", "sans-serif"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("preline/plugin")],
};
