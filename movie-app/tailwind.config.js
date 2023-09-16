/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rose: "#BE123C",
        grey: "#9CA3AF",
        grey300: "#D1D5DB",
        pink: "#FFC7C3",
        lightblack: "rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        dmsans: "'DM Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
