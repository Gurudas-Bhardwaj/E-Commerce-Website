import React, { useContext, useEffect, useState } from 'react';
import { TfiMenu } from "react-icons/tfi";
import { FaBagShopping } from "react-icons/fa6";
import '../Navbar/Style.css';
import { Context } from '../../Context/Context';
import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";


function Navbar() {
  
  const windowScroll = useContext(Context);
  

  return (
    <>
    <header>
        <div className='*:font-Popins  w-screen h-24 md:h-28 flex  items-center '>
          <div className=' w-4/5 md:w-2/5  flex pl-3 md:pl-0 md:justify-center items-center'>
            <h1 className='text-4xl md:text-5xl p-3 text-lime-500 font-bold '>VegeFoods</h1>
          </div>
          <div className='flex w-3/5 Navlink'>
            <div className='flex gap-16 text-lg pt-1'>
              <NavLink to='' className={({isActive})=>` ${isActive?"text-lime-400":"text-gray-600"}`} >
                Home
              </NavLink>
              <NavLink to="/Shop" className={({isActive})=>` ${isActive?"text-lime-400":"text-gray-600"} `}>
                Shop
              </NavLink>
              <NavLink to="/dsf" className={({isActive})=>` ${isActive?"text-lime-400":"text-gray-600"} `}>
                About Us
              </NavLink>
              <NavLink to="/p" className={({isActive})=>` ${isActive?"text-lime-400":"text-gray-600"} `}>
                Contact Us
              </NavLink>
            </div>
            <div className='flex gap-8' style={{paddingLeft:"17%"}}>
              <NavLink className={'relative'}><FaBagShopping className=' h-9 w-9 text-lime-500'/><span className='absolute z-10  w-6 h-6 flex justify-center border rounded-full bg-lime-500 text-white' style={{right:"-25%",top:"-26%"}}>0</span></NavLink>
              <NavLink><FaRegUserCircle className= ' h-9 w-9 text-lime-500'/></NavLink>

            </div>
          </div>
            <div className='hamburg ' style={{marginLeft:""}}><TfiMenu className='h-10 text-lime-500 font-bold w-10' /></div>
        </div>
        <div className='w-screen  '>
            <div className='flex flex-col text-lg pl-6 gap-2'>
            <NavLink to='' className={({isActive})=>` ${isActive?"text-lime-400":"text-gray-600"} `} >
                Home
              </NavLink>
              <NavLink to="/Shop" className={({isActive})=>` ${isActive?"text-lime-400":"text-gray-600"} `}>
                Shop
              </NavLink>
              <NavLink to="/dsf" className={({isActive})=>` ${isActive?"text-lime-400":"text-gray-600"} `}>
                About Us
              </NavLink>
              <NavLink to="/p" className={({isActive})=>` ${isActive?"text-lime-400":"text-gray-600"} pb-7 `}>
                Contact Us
              </NavLink>
            </div>
            <div className='flex pl-5 gap-6 pb-5'>
            <NavLink className={'relative'}><FaBagShopping className=' h-9 w-9 text-lime-500'/><span className='absolute z-10  w-6 h-6 flex justify-center border rounded-full bg-lime-500 text-white' style={{right:"-25%",top:"-26%"}}>0</span></NavLink>
              <NavLink><FaRegUserCircle className= ' h-9 w-9 text-lime-500'/></NavLink>
            </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
