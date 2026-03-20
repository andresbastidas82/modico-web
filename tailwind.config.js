/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0c8f8f",
          light: "#10b3b3",
          dark: "#097070",
        },
        dark: {
          DEFAULT: "#0f172a",
          light: "#1e293b",
          lighter: "#334155",
        },
      },
      fontFamily: {
        sans: ["Outfit", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Unbounded", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
