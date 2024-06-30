import React from 'react'
import ShoppingCartCard from './ShoppingCartCard'
import { useSelector } from 'react-redux'
import AddToCart from '../../Redux/Features/AddToCart'

function ShoppingCart() {
  let CartArray=useSelector((state) => state.AddtoCart.myArray)

  return (
    <div className='w-screen flex flex-col justify-center items-center  bg-stone-100'>
        <div className='w-5/6 sm:w-5/6 md:w-4/5 lg:w-3/5    flex mt-5 mb-5 flex-col gap-4'>
        {
          CartArray.map((product)=>(

            <ShoppingCartCard
              key={product.id}
              id={product.id}
              Title={product.title}
              Quantity={product.quantity}
              Image={product.image}
            /> 
          ))
        }
        </div>

        <div className='flex flex-col items-center'>
            <div className='mt-5 mb-5 shadow-2xl  bg-white' style={{width :'30vw',height:"350px"}}>
                <div className='h-12 font-Popins flex items-center w-full border-b border-b-gray-200'>
                  <h1 className='pl-3 text-xl font-medium text-gray-600'>PRICE DETAILS</h1>
                </div>
                <div className='w-full flex flex-col items-center'>
                    <div className='w-full pt-6  text-lg flex justify-between '>
                        <h1 className='pl-6'>Price (2 items)</h1>
                        <h1 className='pr-5'>$1000</h1>
                    </div>
                    <div className='w-full pt-4 text-lg flex justify-between'>
                        <h1 className='pl-6'>Discount</h1>
                        <h1 className=' pr-5 text-lime-600' >-$1000</h1>
                    </div>
                    <div className='w-full pt-4 text-lg flex justify-between'>
                        <h1 className='pl-6'>Delivery Charges</h1>
                        <h1 className=' pr-6 text-lime-500' >FREE</h1>
                    </div>
                    <div className='w-11/12 mt-7 border border-dashed border-gray-500'></div>
                </div>
                <div className='w-full flex pt-5 justify-between'>
                  <h1 className='text-2xl  pl-6'>Total Amount</h1>
                  <h1 className='text-2xl pr-6'>$1000</h1>
                </div>
                <div className='w-11/12 mt-6 border border-dashed ml-5 border-gray-500'></div>
              <div className='w-full '>
                <h1 className='pl-5 pt-3 text-lg font-semibold text-green-700'>You will save $1000 on this order</h1>
              </div>
            </div>
            <div>
              <button className='w-56 h-16 text-2xl text-white rounded-3xl mt-10 bg-lime-500'>Place Order</button>
            </div>
        </div>
    </div>
  )
}

export default ShoppingCart
