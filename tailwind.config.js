/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soundbook-blue': '#1E3A5F',
        'soundbook-light-blue': '#6287FF',
        'soundbook-purple': '#6B46C1',
        'soundbook-dark': '#0F172A',
      },
      fontFamily: {
        sans: ['MODERNIZ', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
