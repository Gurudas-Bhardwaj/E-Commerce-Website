import React, { useState } from 'react'
import Empty from '../../Public/Images/EmptyCart.png'
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';

function Cart() {
    const [EmptyCart,SetEmptyCart]=useState(true);

  return (
    <div>
      {EmptyCart &&(
      <div className=' w-screen flex font-Popins flex-col justify-center items-center'>
        <div>
            <img src={Empty} alt="" className='h-40 mt-20' />
        </div>
        <div>
            <h1 className='text-3xl md:text-5xl text-center pt-10 pb-4 font-bold'>Your Cart Is Empty</h1>
        </div>
        <div>
            <h3 className='text-lg text-center pb-4'>Add Something To make me Happy :)</h3>
        </div>
        <div>
           <Link to='/Shop'> <button className='h-12 w-44 text-xl font-Pacifico font-bold border-2 border-black rounded-3xl text-white bg-lime-500 '>Shop Now</button></Link>
        </div>
      </div>
      )}
      {!EmptyCart && (
        <div>
          <div className='w-screen mt-10 flex justify-center items-center'>
            <h1 className='font-Popins  text-3xl md:text-5xl font-bold text-center '>Shopping Cart</h1>
          </div>
          <div className='w-screen mt-10 flex flex-col justify-center items-center'>
            <ShoppingCart/>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
