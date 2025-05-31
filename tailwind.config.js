/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Define your custom color palette here
      colors: {
        'primary-blue': '#1A3E6A', // A deep, trustworthy blue (was blue-800)
        'secondary-blue': '#2A5C9A', // A vibrant medium blue (was blue-600/700)
        'accent-light': '#6DD5ED', // A light, modern teal/sky blue for highlights
        'accent-dark': '#0E2A4A', // Very dark blue, almost black, for deep backgrounds/text
        'neutral-light': '#F8FAFC', // A clean, off-white for light backgrounds (was gray-50)
        'neutral-medium': '#E2E8F0', // A soft light gray
        'text-dark': '#334155', // A dark gray for body text (was gray-800)
        'text-light': '#F1F5F9', // A very light gray for text on dark backgrounds
      },
      // Define your custom font families here
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // For headings (e.g., h1, h2)
        opensans: ['Open Sans', 'sans-serif'], // For body text (paragraphs, links)
      },
    },
  },
  plugins: [],
}