import React, { useContext, useEffect, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { MdShoppingCart } from 'react-icons/md';
import '../Navbar/Style.css';
import { Context } from '../../Context/Context';

function Navbar() {
  
  const windowScroll = useContext(Context);
  const [click, setClick] = useState(false);
  

  const [Position,SetPosition]=useState('')
  useEffect(()=>{
    if (windowScroll<600){
      SetPosition("sticky")
    }else if(windowScroll>=600){
      SetPosition("fixed")
    }
    
  },[windowScroll])
  

  const clickFunction = () => {
    setClick((prevState) => !prevState);
  };

  const new_click = () => {
    setClick((prevState) => !prevState);
  };

  return (
    <>
     <div className={`Position overflow-hidden ${Position} transition-all duration-300 ease-in-out trans`}>

        <div className='*:font-Popins h-16 bg-black   top-0 left-0  w-screen border-2 border-black flex '>
          <div className='h-full  w-3/4 md:w-2/6 flex pl-2 md:justify-center items-center trans'>
            <h1 className='text-2xl font-bold text-lime-500'>VEGEFOOD </h1>
          </div>
          <div className='h-full flex w-10 hamburg items-center' style={{ marginLeft: '10%' }}>
            <IoMenu className='text-white text-4xl ' onClick={clickFunction} />
          </div>
          <div
            className='flex Navlink w-3/5 justify-evenly items-center text-white font-bold text-lg z-50'
            style={{ marginLeft: '6%' }}
          >
            <a href=''>Home</a>
            <a href=''>Shop</a>
            <a href=''>About</a>
            <a href=''>Blog</a>
            <a href=''>Contact</a>
            <a href='' className='text-white flex text-2xl'>
              <MdShoppingCart />
              <span className='text-base'>0</span>
            </a>
          </div>
        </div>
        <div className={`flex nav flex-col w-full gap-2 bg-gray-200 *:pl-3 ${click ? 'expand' : 'collapse'}`}>
          <div
            id='anchortag'
            className={`flex flex-col h-full w-full gap-2 *:font-bold *:pl-3 *:text-white bg-black ${click ? 'show' : 'hide'}`}
          >
            <a href='' onClick={new_click} className='mt-3 '>
              Home
            </a>
            <a href='' onClick={new_click}>Shop</a>
            <a href='' onClick={new_click}>About</a>
            <a href='' onClick={new_click}>Blog</a>
            <p onClick={new_click}>Contact</p>
            <a onClick={new_click} className='text-gray-700 flex text-2xl '>
              <MdShoppingCart />
              <span className='text-base'>0</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
