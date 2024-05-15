import React, { useContext, useEffect, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { MdShoppingCart } from 'react-icons/md';
import '../Navbar/Style.css';
import { Context } from '../../Context/Context';
import { NavLink } from 'react-router-dom';


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
            <NavLink to='' className={({isActive})=>`${isActive ? 'text-white':'text-gray-300'}`}  >Home</NavLink>
            <NavLink  to="/Shop" className={({isActive})=>`${isActive ? 'text-white':'text-gray-300'}`} >Shop</NavLink>
            <NavLink className={({isActive})=>`${isActive ? 'text-white':'text-gray-300'}`} >About</NavLink>
            <NavLink className={({isActive})=>`${isActive ? 'text-white':'text-gray-300'}`} >Blog</NavLink>
            <NavLink className={({isActive})=>`${isActive ? 'text-white':'text-gray-300'}`} >Contact</NavLink>
            <NavLink className={({isActive})=> ` text-white flex text-2xl ${isActive ? 'text-gray-300':'text-gray-200'}`} >
              <MdShoppingCart />
              <span className='text-base'>0</span>
            </NavLink>
          </div>
        </div>
        <div className={`flex nav flex-col w-full gap-2 bg-gray-200 *:pl-3 ${click ? 'expand' : 'collapse'}`}>
          <div
            id='anchortag'
            className={`flex flex-col h-full w-full gap-2 *:font-bold *:pl-3 *:text-white bg-black ${click ? 'show' : 'hide'}`}
          >
            <NavLink to='' className={({isActive})=>`${isActive ? 'text-black':'text-gray-700'} mt-3`} onClick={new_click} >
              Home
            </NavLink>
            <NavLink to='/Shop' className={({isActive})=>`${isActive ? 'text-black':'text-gray-700'}`} onClick={new_click}>Shop</NavLink>
            <NavLink   className={({isActive})=>`${isActive ? 'text-black':'text-gray-700'}`} onClick={new_click}>About</NavLink>
            <NavLink className={({isActive})=>`${isActive ? 'text-black':'text-gray-700'}`} onClick={new_click}>Blog</NavLink>
            <p onClick={new_click}>Contact</p>
            <NavLink className={({isActive})=>` text-gray-700 flex text-2xl  ${isActive ? 'text-black':'text-gray-700'}`} onClick={new_click} >
              <MdShoppingCart />
              <span className='text-base'>0</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
