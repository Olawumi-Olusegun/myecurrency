/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#043C50",
        secondary: "##FC5959",
        lightGray: "#21384299",
        accent: "#FBF9F2"
      }
    },
  },
  plugins: [],
}

