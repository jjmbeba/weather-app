/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'raleway':"Raleway"
      },
      boxShadow:{
        'my-location':'0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      backgroundImage:{
        'cloud-pattern':'url("/clouds-bg.png")'
      }
    },
  },
  plugins: [],
}
