/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmregular: ["DMSans-Regular", "sans-serif"],
        dmsemibold: ["DMSans-SemiBold", "sans-serif"]
      }
    },
  },
  plugins: [],
}

