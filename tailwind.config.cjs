/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        casablanca: {
          50: "#fefbf6",
          100: "#fef7ed",
          200: "#fcecd2",
          300: "#f9e0b7",
          400: "#f5c980",
          500: "#f1b24a",
          600: "#d9a043",
          700: "#b58638",
          800: "#916b2c",
          900: "#765724",
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
