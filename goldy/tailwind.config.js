/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#0B0C0C',
        darkgray: '#2A2E34',
        lightgray: '#E9EAEC',
        yellow: '#FBE134',
        gold: '#E4B61A',
        white: '#FFFFFF',
      },
    },
    fontFamily: {
      primary: ['Source Sans Pro'], 
      secondary: ['Poppins']
    }
  },
  plugins: [],
}