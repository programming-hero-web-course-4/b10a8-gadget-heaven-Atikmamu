/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "12px",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage:{
         banner: "url('./assets/banner.jpg')"
      },
      colors: {
        primary: "#9538E2",
        cardBlack: "#09080F",
        cardGray: "#09080F99",
        colorWhite: "#FFFFFF",
        GadgetBg: "#ECECEC",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

