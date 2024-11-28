/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/swiper/**/*.js'],
  theme: {
    extend: {},
  },
  darkMode: false, // Koyu modu tamamen devre dışı bırak
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#570DF8', // Tema renklerini özelleştirebilirsiniz
          secondary: '#F000B8',
          accent: '#37CDBE',
          neutral: '#3D4451',
          'base-100': '#FFFFFF', // Arka plan rengini her zaman beyaz yap
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
    darkTheme: false, // DaisyUI'nin koyu modunu kapat
  },
}
