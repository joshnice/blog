/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        "preview": "350px 300px 300px",
      }
    },
    keyframes: {
      leftToRight: {
        '0%': { left: '-20%' },
        '100%': { left: '100%' },
      }
    },
    animation: {
      'loading': 'leftToRight 1.5s linear infinite',
    },
  },
  plugins: [],
}

