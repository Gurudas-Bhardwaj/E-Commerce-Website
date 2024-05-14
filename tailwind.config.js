/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Popins: ["Poppins", "sans-serif"],
        Pacifico:["Pacifico", "cursive"]
      },
      backgroundImage:{
        VegetableImageOne:'url("../src/Public/Images/HomePageBackground1.jpg")',
        VegetableImageTwo:"url('./src/Public/Images/HomePageBackground2.jpg')",
        Strawberry:"url('../src/Public/Images/CardStrawberry.jpg')",
        CardJuice:"url('../src/Public/Images/CardJuices.jpg')",
        DryFruits:"url('../src/Public/Images/DryFruits.jpg')",
        MiddleCard:"url('../src/Public/Images/MiddleCard.jpg')",
        Fruits:"url('../src/Public/Images/Fruits.jpg')",
        CardVegetable:"url('../src/Public/Images/CardVegetable.jpg')",
        Juice:"url('../src/Public/Images/Juice.jpg')",
        Almonds:"url('/./src/Public/Images/Almonds.jpg')",
      }
    },
  },
  plugins: [],
}