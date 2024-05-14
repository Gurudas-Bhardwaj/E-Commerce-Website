import React from 'react'
import { FaCartPlus } from "react-icons/fa";


function ShoppingCard(props) {
  return (
    <div >
        <div className="relative  flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <button className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" >
    <img className="object-cover" src={props.Image} alt="product image" />
    <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{props.DiscountedPercent}</span>
  </button>
  <div className="mt-4 px-5 pb-5">
    <button href="#">
      <h5 className="text-xl tracking-tight text-slate-900">{props.Title}</h5>
    </button>
    <div className="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span className="text-3xl font-bold text-slate-900">{props.DiscountedPrice}</span>
        <span className="text-sm text-slate-900 line-through">{props.RealPrice}</span>
      </p>
      <div className="flex items-center font-Popins">
        <span>⭐⭐⭐⭐⭐</span>
      </div>
    </div>
    
    <button href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      
    <span className='text-2xl pr-2'><FaCartPlus /></span>Add to cart</button>
    
  </div>
</div>

    </div>
  )
}

export default ShoppingCard
