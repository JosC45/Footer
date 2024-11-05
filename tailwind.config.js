/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./src/styles/**/*.{css}",// Asegúrate de que Tailwind busque en los archivos de tu carpeta src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
