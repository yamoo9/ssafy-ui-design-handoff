/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './pages/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary))',
        'achromatic-50': 'rgb(var(--color-gray-50))',
        'achromatic-100': 'rgb(var(--color-gray-100))',
        'achromatic-200': 'rgb(var(--color-gray-200))',
        'achromatic-300': 'rgb(var(--color-gray-300))',
        'achromatic-400': 'rgb(var(--color-gray-400))',
        'achromatic-500': 'rgb(var(--color-gray-500))',
        'achromatic-600': 'rgb(var(--color-gray-600))',
        'achromatic-700': 'rgb(var(--color-gray-700))',
        'achromatic-800': 'rgb(var(--color-gray-800))',
        'achromatic-900': 'rgb(var(--color-gray-900))',
        'achromatic-950': 'rgb(var(--color-gray-950))',
      }
    },
  },
  plugins: [],
}

