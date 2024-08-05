/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        sarala: ['Sarala', 'sans-serif'],
      },
      colors: {
        primaryColor: '#042826',
        secondaryColor: '#EBEBEB',
        textPrimaryColor: '#042826',
      },
    },
  },
  plugins: [],
};
