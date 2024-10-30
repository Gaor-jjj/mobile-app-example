/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#4F63AC',
        secondary: '#3F4A59',
        accent: '#FCA34D',
        gray: {
          ...require('tailwindcss/colors').gray, // Keep the default gray tones
          DEFAULT: '#8D9BB5', // Custom gray as the default gray
        },
      },
      fontFamily: {
        dmregular: ["DMSans-Regular", "sans-serif"],
        dmsemibold: ["DMSans-SemiBold", "sans-serif"],
        mregular: ["Montserrat-Regular", "sans-serif"],
        mmedium: ["Montserrat-Medium", "sans-serif"],
        mbold: ["Montserrat-Bold", "sans-serif"],
        nregular: ["NunitoSans-Regular", "sans-serif"],
        nbold: ["NunitoSans-Bold", "sans-serif"]
      }
    },
  },
  plugins: [],
}

