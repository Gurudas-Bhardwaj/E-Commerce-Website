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
  return (
    <div>
      <div className='flex w-screen flex-col gap-1 md:gap-0  items-center justify-evenly'>
      <div className='w-11/12 flex gap-5 md:gap-0 flex-col justify-evenly overflow-auto items-center md:flex-row mt-10 mb-5' data-aos="fade-down-right" >
            <ProductCard Image={Potato} DiscountedPercent='Combo Offer' Title='Potato' Price="₹140" Quantity="5kg" RealPrice='₹190' />
            <ProductCard Image={Tomato} DiscountedPercent='Deal Of Day' Title='Tomato' Price="₹30" Quantity="1kg" RealPrice='₹60' />
            <ProductCard Image={Caulifower} DiscountedPercent='10%' Title='Caulifower' Price="₹40" RealPrice='₹45' Quantity="1kg" />
            <ProductCard Image={Mint} DiscountedPercent='19%' Title='Mint' Price="₹14" RealPrice='₹22' Quantity="200gm" />
        </div>
      <div className='w-11/12 flex flex-col gap-5 md:gap-0 justify-evenly items-center md:flex-row mt-5 mb-5' data-aos="fade-down-left" >
            <ProductCard Image={Capsicum} DiscountedPercent='22%' Title='Orange Paprika' Price="₹60" Quantity="1kg" RealPrice='₹70' />
            <ProductCard Image='https://cdn.pixabay.com/photo/2016/07/11/00/18/carrots-1508847_1280.jpg' DiscountedPercent='13%' Title='Carrot' Price="₹87" Quantity="2kg" RealPrice='₹100' />
            <ProductCard Image='https://cdn.pixabay.com/photo/2021/08/15/18/50/lady-finger-6548609_960_720.jpg' DiscountedPercent='19%' Title='Lady Finger' Price="₹18" RealPrice='₹22' Quantity="200gm" />
            <ProductCard Image='https://cdn.pixabay.com/photo/2016/07/05/15/41/cabbage-1498842_1280.jpg' DiscountedPercent='6%' Title='Cabbage' Price="₹38" RealPrice='₹40' Quantity="200gm" />
        </div>
      <div className='w-11/12 flex flex-col justify-evenly gap-5 md:gap-0 items-center md:flex-row mt-10 mb-5' data-aos="fade-down-right" >
            <ProductCard Image={Potato} DiscountedPercent='Combo Offer' Title='Potato' Price="₹140" Quantity="5kg" RealPrice='₹190' />
            <ProductCard Image={Tomato} DiscountedPercent='Deal Of Day' Title='Tomato' Price="₹30" Quantity="1kg" RealPrice='₹60' />
            <ProductCard Image={Caulifower} DiscountedPercent='10%' Title='Caulifower' Price="₹40" RealPrice='₹45' Quantity="1kg" />
            <ProductCard Image={Mint} DiscountedPercent='19%' Title='Mint' Price="₹14" RealPrice='₹22' Quantity="200gm" />
        </div>
      <div className='w-11/12 flex flex-col justify-evenly gap-5 md:gap-0 items-center md:flex-row mt-5 mb-5' data-aos="fade-down-left" >
            <ProductCard Image={Capsicum} DiscountedPercent='22%' Title='Orange Paprika' Price="₹60" Quantity="1kg" RealPrice='₹70' />
            <ProductCard Image='https://cdn.pixabay.com/photo/2016/07/11/00/18/carrots-1508847_1280.jpg' DiscountedPercent='13%' Title='Carrot' Price="₹87" Quantity="2kg" RealPrice='₹100' />
            <ProductCard Image='https://cdn.pixabay.com/photo/2021/08/15/18/50/lady-finger-6548609_960_720.jpg' DiscountedPercent='19%' Title='Lady Finger' Price="₹18" RealPrice='₹22' Quantity="200gm" />
            <ProductCard Image='https://cdn.pixabay.com/photo/2016/07/05/15/41/cabbage-1498842_1280.jpg' DiscountedPercent='6%' Title='Cabbage' Price="₹38" RealPrice='₹40' Quantity="200gm" />
        </div>
      
      </div>
    </div>
  )
}

export default Vegetable
