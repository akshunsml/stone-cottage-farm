/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        'farm-green': '#2C5530',
        'farm-brown': '#8B4513',
        'cream': '#F5F5DC',
      },
    },
  },
  plugins: [],
}