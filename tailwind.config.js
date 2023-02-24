/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        bgColor: '#dce4e3',
        green: '#18c29c',
        lightGreen: '#8ed7c6',
        lightGrey: '#dce4e3',
        textColor: '#084236',
      },

      fontFamily: {
        poppins: 'Poppins',
      },

      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
