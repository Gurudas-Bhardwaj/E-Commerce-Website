import React from 'react'
import ProductCard from '../Card/ProductCard'
import Capsicum from '../../Public/Images/Capsicum.jpg'
import Tomato from '../../Public/Images/Tomato.jpg'
import Mint from '../../Public/Images/Mint.jpg'
import Potato from '../../Public/Shop/Potato.jpg'
import Caulifower from '../../Public/Shop/Caulifower.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Vegetable() {
  const notify = () => toast("Succesfully Subcribe");
  const Details=[
    {
      id:1,
      title:"Potato",
      Image:Potato,
      DiscountedPercent:"Combo offer",
      Price:'₹140',
      Quantity:"5kg",
      RealPrice:"₹190"
    },
    {
      id:2,
      title:"Tomato",
      Image:Tomato,
      DiscountedPercent:"Deal of Day",
      Price:'₹30',
      Quantity:"1kg",
      RealPrice:"₹50"
    },
    {
      id:3,
      title:"Caulifower",
      Image:Caulifower,
      DiscountedPercent:"10%",
      Price:'₹45',
      Quantity:"1kg",
      RealPrice:"₹50"
    },
    {
      id:4,
      title:"Mint",
      Image:Mint,
      DiscountedPercent:"22%",
      Price:'₹10',
      Quantity:"100gm",
      RealPrice:"₹14"
    },
    {
      id:4,
      title:"Mint",
      Image:Mint,
      DiscountedPercent:"22%",
      Price:'₹10',
      Quantity:"100gm",
      RealPrice:"₹14"
    },
    {
      id:4,
      title:"Mint",
      Image:Mint,
      DiscountedPercent:"22%",
      Price:'₹10',
      Quantity:"100gm",
      RealPrice:"₹14"
    },
    {
      id:4,
      title:"Mint",
      Image:Mint,
      DiscountedPercent:"22%",
      Price:'₹10',
      Quantity:"100gm",
      RealPrice:"₹14"
    },
    {
      id:4,
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
      <div className='flex w-screen flex-col gap-1 md:gap-0  items-center justify-evenly'>
      <div className='w-11/12 grid grid-cols-1 md:grid-cols-4 gap-5 place-content-center   overflow-auto  mt-10 mb-5' data-aos="fade-down-right" >
        {
          Details.map((details)=>(
            
              <ProductCard 
              key={details.id}
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
