/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/renderer/index.html",
    "./src/renderer/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#D97D55',       
        'main-dark': '#C36F4A',  
        'cream': '#F4E9D7',      
        'sage': '#B8C4A9',      
        'dark-text': '#3C3633',   
        'nav-bg': '#6FA4AF',   
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      keyframes: {
        'bounce-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      },
      animation: {
        'bounce-in': 'bounce-in 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}