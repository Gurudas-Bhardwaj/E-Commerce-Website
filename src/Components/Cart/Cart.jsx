import React, { useState,useEffect } from 'react'
import Empty from '../../Public/Images/EmptyCart.png'
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Cart() {
    const [EmptyCart,SetEmptyCart]=useState(false);

    useEffect(() => {
      AOS.init({
        once: true,
        enable: "phone",
        duration: 600,
        easing: "ease-out-cubic",
      });
    }, []);

  return (
    <div data-aos="zoom-out-down">
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
          <ShoppingCart/>
          
        </div>
      )}
    </div>
  )
}

export default Cart
