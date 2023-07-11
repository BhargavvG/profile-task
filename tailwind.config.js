/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      extend: {
        colors:{
          'primary-500' : "#7d78f9",
        },
        width : {
          'percent-18' : "18%"
        }
      }
    },
  },
  plugins: [],
}
