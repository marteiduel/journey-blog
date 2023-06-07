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
      width: {
        tileWidth: "22.5rem",
      },
      screens: {
        mobileS: "320px",
        // => @media (min-width: 320px) { ... }
        mobileM: "375px",
        // => @media (min-width: 375px) { ... }
        mobileL: "425px",
        // => @media (min-width: 425px) { ... }
        tablet: "768px",
        // => @media (min-width: 768px) { ... }
        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }
        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
