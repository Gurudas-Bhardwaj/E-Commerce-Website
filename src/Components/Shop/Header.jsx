import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Header() {


    useEffect(() => {
        AOS.init({
          once: true,
          enable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);


  return (
    <div>
      <div className='w-screen h-96 bg-ShopBackground bg-cover bg-center'>
        <div className=' w-full h-full bg-gradient-to-r from-black/50 via-black/50 to-black/50'>
          <div className='w-full h-full flex flex-col justify-center text-center items-center' data-aos='fade-down-right'>
            <h1 className='font-Pacifico text-3xl md:text-6xl font-bold text-white'>VegeFood 100% Organic.</h1>
            <h1 className='font-Popins text-lg md:text-2xl text-white pt-4'>Shop Our Best Product</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
