/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-gray': '-10px -10px 30px 4px rgba(128, 128, 128, 0.1), 10px 10px 30px 4px rgba(64, 64, 64, 0.15)',
      },
    },
  },
  plugins: [],
}
