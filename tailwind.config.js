/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { colors: [{ primaryBlue: "#0085FF", secondaryBlue: "#0085FF", white: "#ffffff" }] },
  },
  plugins: [],
}
