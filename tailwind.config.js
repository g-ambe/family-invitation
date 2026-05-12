/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Noto Serif JP"', 'serif'],
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      colors: {
        ink: '#1f1f1d',
        paper: '#f7f5f2',
        accent: '#8f7a61',
      },
      letterSpacing: {
        wideplus: '0.14em',
      },
    },
  },
  plugins: [],
}
