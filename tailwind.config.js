/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#4F63AC',
        secondary: '#3F4A59',
        accent: '#FCA34D'
      },
      fontFamily: {
        dmregular: ["DMSans-Regular", "sans-serif"],
        dmsemibold: ["DMSans-SemiBold", "sans-serif"],
        mregular: ["Montserrat-Regular", "sans-serif"],
        mbold: ["Montserrat-Bold", "sans-serif"]
      }
    },
  },
  plugins: [],
}

