/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-img': "url('./public/banner.jpeg')",
        'section-bg': "url('./public/sectionbg.png')",
        'addcoffee-img': "url('./public/addcoffeebg.png')",
      },
    },
  },
  plugins: [require("daisyui")],  
}

