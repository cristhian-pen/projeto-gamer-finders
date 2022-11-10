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
      'slate': '#6b7280',
      'slate-400': '#9ca3af',
      'slate-900': '#0f172a',
      'white' : '#ffff',
      'err': '#b91c1c',
      'alertm': 'text-yellow-400',
      'valid': '#15803d'
    },
    fontWeight: {
      'hairline': '100',
      'extra-light': '100',
      'thin': '200',
      'light': '300',
      'normal': '400',
      'medium': '500',
      'semibold': '600',
      'bold': '700',
      'extrabold': '800',
      'extra-bold': '800',
      'black': '900',
    },
    extend: {},
  },
  plugins: [],
}
