import React from 'react'
import ProductCard from '../Card/ProductCard'

function Fruits() {
  return (
    <div>
      <div className='flex w-screen flex-col items-center justify-evenly'>
      <div className='w-11/12 flex flex-col justify-evenly items-center md:flex-row mt-5 mb-5' data-aos="fade-down-right" >
            <ProductCard Image='https://cdn.pixabay.com/photo/2023/12/08/10/56/mandarins-8437425_1280.jpg' DiscountedPercent='10%' Title='Oranges' Price="₹50" Quantity="1kg" RealPrice='₹60' />
            <ProductCard Image='https://cdn.pixabay.com/photo/2018/09/24/20/12/bananas-3700718_1280.jpg' DiscountedPercent='Great Deal' Title='Banana' Price="₹50" Quantity="12pcs - Large size" RealPrice='₹70' />
            <ProductCard Image='https://cdn.pixabay.com/photo/2016/11/21/15/46/watermelon-1846051_960_720.jpg' DiscountedPercent='19%' Title='Watermelon' Price="₹40" RealPrice='₹60' Quantity="1.5kg - 2kg" />
            <ProductCard Image='https://cdn.pixabay.com/photo/2016/04/10/15/13/mangoes-1320111_1280.jpg' DiscountedPercent='30%' Title='Mango Alphonso' Price="₹70" RealPrice='₹100' Quantity="1kg" />
          </div>
      <div className='w-11/12 flex flex-col justify-evenly items-center md:flex-row mt-5 mb-5' data-aos="fade-down-left" >
            <ProductCard Image='https://cdn.pixabay.com/photo/2023/12/08/10/56/mandarins-8437425_1280.jpg' DiscountedPercent='10%' Title='Oranges' Price="₹50" Quantity="1kg" RealPrice='₹60' />
            <ProductCard Image='https://cdn.pixabay.com/photo/2018/09/24/20/12/bananas-3700718_1280.jpg' DiscountedPercent='Great Deal' Title='Banana' Price="₹50" Quantity="12pcs - Large size" RealPrice='₹70' />
            <ProductCard Image='https://cdn.pixabay.com/photo/2016/11/21/15/46/watermelon-1846051_960_720.jpg' DiscountedPercent='19%' Title='Watermelon' Price="₹40" RealPrice='₹60' Quantity="1.5kg - 2kg" />
            <ProductCard Image='https://cdn.pixabay.com/photo/2016/04/10/15/13/mangoes-1320111_1280.jpg' DiscountedPercent='30%' Title='Mango Alphonso' Price="₹70" RealPrice='₹100' Quantity="1kg" />
          </div>
      <div className='w-11/12 flex flex-col justify-evenly items-center md:flex-row mt-5 mb-5' data-aos="fade-down-right" >
            <ProductCard Image='https://cdn.pixabay.com/photo/2023/12/08/10/56/mandarins-8437425_1280.jpg' DiscountedPercent='10%' Title='Oranges' Price="₹50" Quantity="1kg" RealPrice='₹60' />
            <ProductCard Image='https://cdn.pixabay.com/photo/2018/09/24/20/12/bananas-3700718_1280.jpg' DiscountedPercent='Great Deal' Title='Banana' Price="₹50" Quantity="12pcs - Large size" RealPrice='₹70' />
            <ProductCard Image='https://cdn.pixabay.com/photo/2016/11/21/15/46/watermelon-1846051_960_720.jpg' DiscountedPercent='19%' Title='Watermelon' Price="₹40" RealPrice='₹60' Quantity="1.5kg - 2kg" />
            <ProductCard Image='https://cdn.pixabay.com/photo/2016/04/10/15/13/mangoes-1320111_1280.jpg' DiscountedPercent='30%' Title='Mango Alphonso' Price="₹70" RealPrice='₹100' Quantity="1kg" />
          </div>
      </div>
    </div>
  )
}

export default Fruits
