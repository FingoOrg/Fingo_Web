/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#228B22',
        secondary: '#F5F5DC',
        accent: '#FFA500',
        white: '#FFFFF0',
        black: '#333333',
      },
      boxShadow: {
        'inner-lg': 'inset 0 0.5px 0px rgba(0, 0, 0, 0.25)', // Customize the values here
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
