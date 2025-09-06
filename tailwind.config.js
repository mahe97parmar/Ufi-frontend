/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ufi: {
          primary: "#0ea5e9",
          accent: "#f59e0b",
          dark: "#0f172a"
        }
      }
    },
  },
  plugins: [],
}
