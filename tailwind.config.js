/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060B18',
          900: '#0B132B',
          800: '#1C2541',
          700: '#2A3454',
          600: '#3D4A75',
          500: '#5C6C9C',
        },
        electric: {
          500: '#3A86FF',
          400: '#609BFF',
          300: '#85B2FF',
          600: '#1A6BFF',
        },
        accent: {
          teal: '#00F5D4',
          violet: '#7B2CBF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
