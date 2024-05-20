import React, { useState } from 'react'
import Empty from '../../Public/Images/EmptyCart.png'


function Cart() {
    const [EmptyCart,SetEmptyCart]=useState(true);

  return (
    <div>
      <div className=' w-screen flex font-Popins flex-col justify-center items-center'>
        <div>
            <img src={Empty} alt="" className='h-40 mt-20' />
        </div>
        <div>
            <h1 className='text-5xl pt-10 pb-4 font-bold'>Your Cart Is Empty</h1>
        </div>
        <div>
            <h3 className='text-lg pb-4'>Add Something To make me Happy :)</h3>
        </div>
        <div>
            <button className='h-12 w-44 text-xl font-Pacifico font-bold border-2 border-black rounded-3xl text-white bg-lime-500 '>Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
