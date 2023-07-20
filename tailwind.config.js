/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Kumbh Sans'
      },
      backgroundImage: {
        'cta-image': 'assets/Image.png'

      },
      colors: {
        'off-white': "#FAF9F7",
        'dark-blue': "#0C111D",
        'brand-color': "#333461",
        'purple-400': '#7567CA',
        'purple-200': '#C0B9EC',
        'complementary-600': '#20AD96',
        'complementary-200': '#d5f7f2',
        'main-text': '#4A556C'
      }
    },
  },
  plugins: [],
}

