/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: '600px',
        md: '768px',
        lg: '1024px',
        xl: '1240px',
        '2xl': '1350px',
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}

