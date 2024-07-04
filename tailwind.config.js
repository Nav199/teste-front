/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        button_criar:{
          100:'rgba(13, 71, 185, 0.9)'
        },
        background:{
          100:'rgba(21, 25, 41, 1)'
        }
      }
    },
  },
  plugins: [],
}

