/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fondo: '#ffffff',
        texto: '#111827',
        dorado: '#d4af37',
        grisClaro: '#f3f4f6',
        grisMedio: '#9ca3af',
        amarillo: '#eab308',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
