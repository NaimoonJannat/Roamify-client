/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
'barlow': ['"Barlow", sans-serif;'],
'poppins':['"Poppins", sans-serif;']
    },
    extend: {
      colors:{
        primary:'#2095ae',
      }
    },
  },
 }