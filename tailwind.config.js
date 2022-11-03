/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'primary-color': '#410136',
      'secondary-color': '#690359',
      'third-color' : '#022658',
      'fourth-color' : '#00132E',
      'white' : '#ffff',
      'err': 'text-red-600',
      'alertm': 'text-yellow-400',
      'valid': 'text-green-500'
    },
    extend: {},
  },
  plugins: [],
}
