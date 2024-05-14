import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";


function TopNavbar() {
  return (
    
    <div className='w-screen   h-24 md:h-12 *:font-Popins '>
      
            <div className='w-full h-24 md:h-12 bg-lime-600 flex flex-col md:flex-row *:text-white md:gap-10 md:justify-evenly md:items-center' >
                <p className='flex pt-2 pl-4'><FaPhoneAlt /><span className='pl-2'>+01119383473</span></p>
                <p className='flex pt-2 pl-4'><FaTelegramPlane /><span className='pl-2'>Vegefood.order@gmail.com</span></p>
                <p className='flex pt-2 pl-4'><TbTruckDelivery className='text-xl'/><span className='pl-2'>Fast Delivery and Easy Return</span></p>
            </div>
        </div>
  )
}

export default TopNavbar
