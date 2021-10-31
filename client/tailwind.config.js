module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height:{
        'image':'665px',
      }
    },
  },
  variants: {
    extend: {
      textColor: ['visited']
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
