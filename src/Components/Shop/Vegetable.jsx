import React from 'react'
import ProductCard from '../Card/ProductCard'
import Capsicum from '../../Public/Images/Capsicum.jpg'
import Tomato from '../../Public/Images/Tomato.jpg'
import Mint from '../../Public/Images/Mint.jpg'
import Potato from '../../Public/Shop/Potato.jpg'
import Caulifower from '../../Public/Shop/Caulifower.jpg'

function Vegetable() {
  return (
    <div>
      <div className='flex w-screen flex-col items-center justify-evenly'>
      <div className='w-11/12 flex flex-col justify-evenly  items-center md:flex-row mt-10 mb-5' data-aos="fade-down-left" >
            <ProductCard Image={Potato} DiscountedPercent='Combo Offer' Title='Potato' Price="₹140" Quantity="5kg" RealPrice='₹190' />
            <ProductCard Image={Tomato} DiscountedPercent='Deal Of Day' Title='Tomato' Price="₹30" Quantity="1kg" RealPrice='₹60' />
            <ProductCard Image={Caulifower} DiscountedPercent='19%' Title='Caulifower' Price="₹40" RealPrice='₹45' Quantity="1kg" />
            <ProductCard Image={Mint} DiscountedPercent='19%' Title='Mint' Price="₹18" RealPrice='₹22' Quantity="200gm" />
        </div>
      <div className='w-11/12 flex flex-col justify-evenly items-center md:flex-row mt-5 mb-5' data-aos="fade-down-left" >
            <ProductCard Image={Capsicum} DiscountedPercent='22%' Title='Orange vegetable' Price="₹60" Quantity="5kg" RealPrice='₹110' />
            <ProductCard Image={Tomato} DiscountedPercent='Deal Of Day' Title='Tomato' Price="₹30" Quantity="1kg" RealPrice='₹60' />
            <ProductCard Image={Mint} DiscountedPercent='19%' Title='Mint' Price="₹18" RealPrice='₹22' Quantity="200gm" />
            <ProductCard Image={Mint} DiscountedPercent='19%' Title='Mint' Price="₹18" RealPrice='₹22' Quantity="200gm" />
        </div>
      <div className='w-11/12 flex flex-col justify-evenly items-center md:flex-row mt-5 mb-5' data-aos="fade-down-left" >
            <ProductCard Image={Capsicum} DiscountedPercent='22%' Title='Orange vegetable' Price="₹60" Quantity="5kg" RealPrice='₹110' />
            <ProductCard Image={Tomato} DiscountedPercent='Deal Of Day' Title='Tomato' Price="₹30" Quantity="1kg" RealPrice='₹60' />
            <ProductCard Image={Mint} DiscountedPercent='19%' Title='Mint' Price="₹18" RealPrice='₹22' Quantity="200gm" />
            <ProductCard Image={Mint} DiscountedPercent='19%' Title='Mint' Price="₹18" RealPrice='₹22' Quantity="200gm" />
        </div>
      </div>
    </div>
  )
}

export default Vegetable
