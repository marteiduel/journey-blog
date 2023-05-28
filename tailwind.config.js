/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-main": "#111319",
        "red-main": "#f52225",
      },
      height: {
        tileHeight: "32.5rem",
      },
    },
  },
  plugins: [],
};
