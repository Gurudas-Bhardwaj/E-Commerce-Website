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
        VegetableImageOne:'url("./src/Components/Assests/HomePageImage/HomePageBackground1.jpg")',
        VegetableImageTwo:"url('./src/Components/Assests/HomePageImage/HomePageBackground2.jpg')",
        Strawberry:"url('../src/Components/Assests/HomePageImage/CardStrawberry.jpg')",
        CardJuice:"url('./src/Components/Assests/HomePageImage/CardJuices.jpg')",
        DryFruits:"url('./src/Components/Assests/HomePageImage/DryFruits.jpg')",
        MiddleCard:"url('./src/Components/Assests/HomePageImage/MiddleCard.jpg')",
        Fruits:"url('./src/Components/Assests/HomePageImage/Fruits.jpg')",
        CardVegetable:"url('./src/Components/Assests/HomePageImage/CardVegetable.jpg')",
        Juice:"url('./src/Components/Assests/HomePageImage/Juice.jpg')",
        Almonds:"url('./src/Components/Assests/HomePageImage/Almonds.jpg')",
      }
    },
  },
  plugins: [],
}