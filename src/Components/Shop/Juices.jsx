import React from 'react'
import ProductCard from '../Card/ProductCard'
import Capsicum from '../../Public/Images/Capsicum.jpg'
import Tomato from '../../Public/Images/Tomato.jpg'
import Mint from '../../Public/Images/Mint.jpg'




function Juices() {
  return (
    <div>
      <div className='flex w-screen flex-col md:flex-row justify-evenly'>
      <div className='w-11/12 flex flex-col justify-evenly items-center md:flex-row mt-5 mb-5' data-aos="fade-down-left" >
            <ProductCard Image='https://cdn.pixabay.com/photo/2023/04/13/21/14/ai-generated-7923488_1280.jpg' DiscountedPercent='22%' Title='Orange Juice' Price="₹110" Quantity="1 Ltr" RealPrice='₹140' />
            <ProductCard Image={Tomato} DiscountedPercent='Deal Of Day' Title='Tomato' Price="₹30" Quantity="1kg" RealPrice='₹60' />
            <ProductCard Image={Mint} DiscountedPercent='19%' Title='Mint' Price="₹18" RealPrice='₹22' Quantity="200gm" />
            <ProductCard Image={Mint} DiscountedPercent='19%' Title='Mint' Price="₹18" RealPrice='₹22' Quantity="200gm" />
          </div>
      </div>
    </div>
  )
}

export default Juices
