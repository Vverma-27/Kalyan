/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [],
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#13347C",
      "primary-dark": "#10202C",
      secondary: "#EAEAEA",
      black: "#0C0C0C",
      white: "#F2F2F2",
      // blue: "#1fb6ff",
      // purple: "#7e5bef",
      // pink: "#ff49db",
      // orange: "#ff7849",
      // green: "#13ce66",
      // yellow: "#ffc82c",
      // "gray-dark": "#273444",
      // gray: "#8492a6",
      // "gray-light": "#d3dce6",
    },
    fontFamily: {
      heading: ["Roboto Condensed", "sans-serif"],
      para: ["Mulish", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
