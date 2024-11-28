/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/swiper/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"), // DaisyUI'yi buraya ekleyin
  ],
}
