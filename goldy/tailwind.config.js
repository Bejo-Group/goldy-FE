/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#0B0C0C",
        darkgray: "#2A2E34",
        lightgray: "#E9EAEC",
        yellow: "#FBE134",
        gold: "#E4B61A",
        white: "#FFFFFF",
      },
    },
    fontFamily: {
      primary: ["Source Sans Pro"],
      secondary: ["Poppins"],
    },
    screens: {
      xm: "350px",
      // => @media (min-width: 350px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "913px",
      // => @media (min-width: 913px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
