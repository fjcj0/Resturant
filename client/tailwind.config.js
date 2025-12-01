/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#AB274F',
        'primary-hover': '#660000',
        'secondary': '#FF004F',
        'text-primary': '#909D99',
        'text-primary-active': 'black',
        'text-primary-unactive': '#848E89',
        'active-status-color': '#F1F9F5',
        'pending-status-color': '#FEF9EC',
        'cancelled-status-color': '#f9f1ec',
        'bg-color': '#e8eaec',
      },
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif'],
      },
      fontWeight: {
        'extra-bold': 900,
      }
    },
  },
  plugins: [],
}