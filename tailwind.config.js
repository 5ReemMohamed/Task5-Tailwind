/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html"
  ],
  theme: {

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors:{
      Moderateviolet: "hsl(263, 55%, 52%)",
      Verydarkgrayishblue: "hsl(217, 19%, 35%)",
      Verydarkblackishblue: "hsl(219, 29%, 14%)", 
      White: "hsl(0, 0%, 100%)",
      Lightgray: "hsl(0, 0%, 81%)", 
      Lightgrayishblue: "hsl(210, 46%, 95%)"
    },
    fontSize:{
      pargraphsize:"13px",
      large:"24px"
    },

    fontWeight:{
      Medium:"500",
      SemiBold:"600"
    },

    fontFamily:{
      font:"Barlow"
    },
    extend: {},
  },
  plugins: [],
}

