/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['El Messiri', 'sans-serif'],
      },
      colors: {
        primary: '#8e44ad',
        accent: '#9b59b6',
        danger: '#e74c3c',
        darkbg: '#1b1b1b',
      },
      animation: {
        fadeIn: 'fadeIn 0.9s forwards',
        slideDown: 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideDown: {
          'from': { opacity: '0', transform: 'translateY(-10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}