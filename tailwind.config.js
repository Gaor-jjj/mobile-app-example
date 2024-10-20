/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#4F63AC',
        secondary: '#3F4A59',
        accent: '#FCA34D',
        gray: '#8D9BB5',
        lgray: '#DADADA'
      },
      fontFamily: {
        dmregular: ["DMSans-Regular", "sans-serif"],
        dmsemibold: ["DMSans-SemiBold", "sans-serif"],
        mregular: ["Montserrat-Regular", "sans-serif"],
        mmedium: ["Montserrat-Medium", "sans-serif"],
        mbold: ["Montserrat-Bold", "sans-serif"]
      }
    },
  },
  plugins: [],
}

