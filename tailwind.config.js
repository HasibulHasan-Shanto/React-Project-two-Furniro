/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        menuColor: '#000000',
        bannerColor: '#FFF3E3',
        textColor: '#333333',
        btnColor: '#B88E2F',
        paraColor: '#666666',
        productColor: '#F4F5F7',
        hoverparaColor: '#898989',
        Bobo: '#B0B0B0',
        badge: '#E97171',
        badge1: '#2EC1AC',
        explorebg: '#FCF8F3',
        detailColor: '#9F9F9F',
        overly: 'rgba(58, 58, 58, 0.7)',
      },
      fontFamily:{
        pop: ['Poppins'],
      },
      backgroundImage: {
        Banner: "url('/src/assets/banner.jpg')",
      }
    },
  },
  plugins: [],
}


