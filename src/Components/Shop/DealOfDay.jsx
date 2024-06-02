import React from 'react'
import ProductCard from '../Card/ProductCard'
import Capsicum from '../../Public/Images/Capsicum.jpg'
import Tomato from '../../Public/Images/Tomato.jpg'
import Strawberry from '../../Public/Images/CardStrawberry.jpg'


function Juices() {
  const Details=[
    {
      id:1,
      limit:10,
      title:"Blue Berry",
      Image:'https://cdn.pixabay.com/photo/2018/06/14/13/20/blueberries-3474854_1280.jpg',
      DiscountedPercent:"Best",
      Price:'₹60',
      Quantity:"500gm",
      RealPrice:"₹100"
    },
    {
      id:2,
      limit:14,
      title:"Capsicum",
      Image:Capsicum,
      DiscountedPercent:"New",
      Price:'₹70',
      Quantity:"500gm",
      RealPrice:"₹110"
    },
    {
      id:3,
      limit:9,
      title:"Strawberry",
      Image:Strawberry,
      DiscountedPercent:"30%",
      Price:'₹70',
      Quantity:"500gm",
      RealPrice:"₹100"
    },
    {
      id:4,
      limit:23,
      title:"Tomato (Hybrid)",
      Image:Tomato,
      DiscountedPercent:"Combo offer",
      Price:'₹60',
      Quantity:"500gm",
      RealPrice:"₹100"
    },
    {
      id:5,
      limit:34,
      title:"Blue Berry",
      Image:'https://cdn.pixabay.com/photo/2018/06/14/13/20/blueberries-3474854_1280.jpg',
      DiscountedPercent:"Combo offer",
      Price:'₹60',
      Quantity:"500gm",
      RealPrice:"₹100"
    },
    {
      id:6,
      limit:11,
      title:"Blue Berry",
      Image:'https://cdn.pixabay.com/photo/2018/06/14/13/20/blueberries-3474854_1280.jpg',
      DiscountedPercent:"Best",
      Price:'₹60',
      Quantity:"500gm",
      RealPrice:"₹100"
    },
    {
      id:7,
      limit:10,
      title:"Capsicum",
      Image:Capsicum,
      DiscountedPercent:"New",
      Price:'₹70',
      Quantity:"500gm",
      RealPrice:"₹110"
    },
    {
      id:8,
      limit:2,
      title:"Strawberry",
      Image:Strawberry,
      DiscountedPercent:"30%",
      Price:'₹70',
      Quantity:"500gm",
      RealPrice:"₹100"
    },
    {
      id:9,
      limit:19,
      title:"Tomato (Hybrid)",
      Image:Tomato,
      DiscountedPercent:"Combo offer",
      Price:'₹60',
      Quantity:"500gm",
      RealPrice:"₹100"
    },
    {
      id:10,
      limit:11,
      title:"Blue Berry",
      Image:'https://cdn.pixabay.com/photo/2018/06/14/13/20/blueberries-3474854_1280.jpg',
      DiscountedPercent:"Combo offer",
      Price:'₹60',
      Quantity:"500gm",
      RealPrice:"₹100"
    },
  ]
  return (
    <div>
      <div className='flex w-screen flex-col mt-10 md:flex-row justify-evenly'>
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

export default Juices
