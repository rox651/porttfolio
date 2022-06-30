/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        128: "32rem",
        150: "45rem",
      },
      colors: {
        newblue: {
          DEFAULT: "#1D92C8",
          50: "#AADCF3",
          100: "#98D4F0",
          200: "#74C6EB",
          300: "#51B7E6",
          400: "#2DA8E1",
          500: "#1D92C8",
          600: "#166E97",
          700: "#0F4A66",
          800: "#082735",
          850: "#212121",
          900: "#010304",
        },
      },
    },
  },
  plugins: [],
};
