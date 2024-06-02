import React from 'react'
import ProductCard from '../Card/ProductCard'
import Tomato from '../../Public/Images/Tomato.jpg'
import Mint from '../../Public/Images/Mint.jpg'
import Potato from '../../Public/Shop/Potato.jpg'
import Caulifower from '../../Public/Shop/Caulifower.jpg'

function Vegetable() {
  const Details=[
    {
      id:1,
      limit:5,
      title:"Potato",
      Image:Potato,
      DiscountedPercent:"Combo offer",
      Price:'₹140',
      Quantity:"5kg",
      RealPrice:"₹190"
    },
    {
      id:2,
      limit:10,
      title:"Tomato",
      Image:Tomato,
      DiscountedPercent:"Deal of Day",
      Price:'₹30',
      Quantity:"1kg",
      RealPrice:"₹50"
    },
    {
      id:3,
      limit:8,
      title:"Caulifower",
      Image:Caulifower,
      DiscountedPercent:"10%",
      Price:'₹45',
      Quantity:"1kg",
      RealPrice:"₹50"
    },
    {
      id:4,
      limit:50,
      title:"Mint",
      Image:Mint,
      DiscountedPercent:"22%",
      Price:'₹10',
      Quantity:"100gm",
      RealPrice:"₹14"
    },
    {
      id:5,
      limit:50,
      title:"Mint",
      Image:Mint,
      DiscountedPercent:"22%",
      Price:'₹10',
      Quantity:"100gm",
      RealPrice:"₹14"
    },
    {
      id:6,
      limit:50,
      title:"Mint",
      Image:Mint,
      DiscountedPercent:"22%",
      Price:'₹10',
      Quantity:"100gm",
      RealPrice:"₹14"
    },
    {
      id:7,
      limit:50,
      title:"Mint",
      Image:Mint,
      DiscountedPercent:"22%",
      Price:'₹10',
      Quantity:"100gm",
      RealPrice:"₹14"
    },
    {
      id:8,
      limit:50,
      title:"Mint",
      Image:Mint,
      DiscountedPercent:"22%",
      Price:'₹10',
      Quantity:"100gm",
      RealPrice:"₹14"
    },
  ]

  return (
    <div>
      <div className='flex w-screen  gap-1 md:gap-0  items-center justify-evenly'>
      <div className='w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  place-items-center  gap-5   overflow-auto  mt-10 mb-5'  >
        {
          Details.map((details)=>(
            
              <ProductCard 
              key={details.id}
              id={details.id}
              limit={details.limit}
              Title={details.title}
              Image={details.Image}
              Price={details.Price}
              RealPrice={details.RealPrice}
              DiscountedPercent={details.DiscountedPercent}
              Quantity={details.Quantity}
              />
          ))}
      </div>
            
      </div>
    </div>
  )
}

export default Vegetable
