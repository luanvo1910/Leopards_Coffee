/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A4947",  // Xám đậm
        secondary: "#B17457", // Nâu nhạt
        accent: "#D8D2C2",    // Be
        background: "#FAF7F0" // Kem nhạt
      },
      boxShadow: {
        'loginForm': '5px 5px 10px #000000'
      }
    },
  },
  plugins: [],
}
