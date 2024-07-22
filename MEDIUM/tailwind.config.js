/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./global_components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      phonemin: "375px",
      // => @media (min-width: 375px) { ... }

      phonemax: "425px",
      // => @media (min-width: 425px) { ... }

      tabletmin: "640px",
      // => @media (min-width: 640px) { ... }

      tabletmax: "768px",
      // => @media (min-width: 768px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
