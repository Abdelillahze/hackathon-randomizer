/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "black",
      "black-50": "#00000080",
      white: "white",
      transparent: "transparent",
      grey: {
        100: "#F8F9FA",
        200: "#E9ECEF",
        300: "#DEE2E6",
        400: "#CED4DA",
        500: "#ADB5BD",
        600: "#6C757D",
        700: "#495057",
        800: "#343A40",
        900: "#212529",
      },
    },
    extend: {},
  },
  plugins: [],
};
