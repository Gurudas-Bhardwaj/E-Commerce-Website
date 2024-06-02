import React from 'react'
import ProductCard from '../Card/ProductCard'
import Almonds from '../../Public/Images/Almonds.jpg'




function DryFruits() {

  const Details=[
    {
      id:1,
      limit:5,
      Title:"Pistachio",
      DiscountedPercent:'20%',
      Price:'₹400',
      RealPrice:'₹500',
      Quantity:'500 gm',
      Image:"https://cdn.pixabay.com/photo/2022/11/06/14/40/pistachio-7574180_960_720.jpg",
    },
    {
      id:2,
      limit:7,
      Title:"Almonds",
      DiscountedPercent:'12%',
      Price:'₹450',
      RealPrice:'₹550',
      Quantity:'500 gm',
      Image:Almonds,
    },
    {
      id:3,
      limit:10,
      Title:"Cashew",
      DiscountedPercent:'9%',
      Price:'₹350',
      RealPrice:'₹390',
      Quantity:'500 gm',
      Image:"https://cdn.pixabay.com/photo/2015/10/01/20/23/cashew-nuts-967650_960_720.jpg",
    },
    {
      id:4,
      limit:4,
      Title:"Walnut",
      DiscountedPercent:'22%',
      Price:'₹550',
      RealPrice:'₹600',
      Quantity:'500 gm',
      Image:"https://cdn.pixabay.com/photo/2023/10/15/13/59/walnuts-8316999_1280.jpg",
    },
    {
      id:5,
      limit:6,
      Title:"Pistachio",
      DiscountedPercent:'20%',
      Price:'₹400',
      RealPrice:'₹500',
      Quantity:'500 gm',
      Image:"https://cdn.pixabay.com/photo/2022/11/06/14/40/pistachio-7574180_960_720.jpg",
    },
    {
      id:6,
      limit:7,
      Title:"Almonds",
      DiscountedPercent:'12%',
      Price:'₹450',
      RealPrice:'₹550',
      Quantity:'500 gm',
      Image:Almonds,
    },
    {
      id:7,
      limit:10,
      Title:"Cashew",
      DiscountedPercent:'9%',
      Price:'₹350',
      RealPrice:'₹390',
      Quantity:'500 gm',
      Image:"https://cdn.pixabay.com/photo/2015/10/01/20/23/cashew-nuts-967650_960_720.jpg",
    },
    {
      id:8,
      limit:4,
      Title:"Walnut",
      DiscountedPercent:'22%',
      Price:'₹550',
      RealPrice:'₹600',
      Quantity:'500 gm',
      Image:"https://cdn.pixabay.com/photo/2023/10/15/13/59/walnuts-8316999_1280.jpg",
    },
  ]


  return (
    <div>
      <div className='flex w-screen flex-col md:flex-row justify-evenly'>
      <div className='w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  place-items-center  gap-5   overflow-auto  mt-10 mb-5'  >
              {
                Details.map((Details)=>(
                  <ProductCard
                    key={Details.id}
                    id={Details.id}
                    limit={Details.limit}
                    Title={Details.Title}
                    Quantity={Details.Quantity}
                    RealPrice={Details.RealPrice}
                    Price={Details.Price}
                    Image={Details.Image}
                    DiscountedPercent={Details.DiscountedPercent}
                  />
                ))
              }
          </div>
      </div>
    </div>
  )
}

export default DryFruits
