/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#F5C518',
          blue: '#0F172A',
        },
      },
    },
  },
  plugins: [],
}




