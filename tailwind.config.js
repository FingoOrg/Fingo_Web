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
        secondary: "#F5F5DC",
        accent: "#FF4500",
        white: "#FFFFF0",
        black: "#333333"
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}