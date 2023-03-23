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
    fontSize: {
      "h-xl": ["3rem", "4.5rem"], // 48px
      "h-lg": ["2rem", "3rem"], // 32px
      "h-md": ["1.5rem", "2.25rem"], // 24px
      "h-sm": ["1.25rem", "1.875rem"], // 20px
      "b-xl": ["1.125rem", "2rem"], // 18px
      "b-lg": ["1rem", "1.75rem"], // 16px
      "b-md": ["0.875rem", "1.5rem"], // 14px
      "b-sm": ["0.75rem", "1.3rem"], // 12px
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