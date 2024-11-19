/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out forwards',
        'shine': 'shine 1s ease-in-out infinite',
        'border-flow': 'border-flow 3s linear infinite',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '50%, 100%': { transform: 'translateX(100%)' }
        },
        'border-flow': {
          '0%, 100%': {
            borderImage: 'linear-gradient(to right, transparent, #4f46e5, transparent) 1',
            opacity: '0.7'
          },
          '50%': {
            borderImage: 'linear-gradient(to right, #4f46e5, transparent, #4f46e5) 1',
            opacity: '1'
          }
        }
      },
      transitionProperty: {
        'opacity': 'opacity',
      },
    },
  },
  plugins: [],
}