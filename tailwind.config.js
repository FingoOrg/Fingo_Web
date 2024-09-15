/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#228B22",
        secondary: "#FFFCF3",
        accent: "#FF4500",
        white: "#FFFFFF",
        black: "#333333"
      }
    },
  },
  plugins: [],
}