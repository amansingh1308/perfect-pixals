/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
        brygada: ["Brygada 1918", "serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}