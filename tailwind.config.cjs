// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      nav: "#202123",
      "background-main": "#10172a",
      primary: "#FD9935",
    },
    extend: {
      colors: {
        slate: colors.slate,
        white: colors.white,
      },
    },
  },
  plugins: [],
};
