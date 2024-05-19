import React, { useContext, useEffect, useState } from 'react';
import { TfiMenu } from "react-icons/tfi";
import { FaBagShopping } from "react-icons/fa6";
import '../Navbar/Style.css';
import { Context } from '../../Context/Context';
import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";

function Navbar() {
  const windowScroll = useContext(Context);
  const [toggle, setToggle] = useState('minimize');

  const clickFunction = () => {
    setToggle(toggle === 'minimize' ? 'expand' : 'minimize');
  };

  const handleNavLinkClick = () => {
    setToggle('minimize');
  };
  
  const [Position,setPosition]=useState("sticky")

  useEffect(()=>{
    if(windowScroll>=400){
      setPosition("fixed")
    }else if(windowScroll<500){
      setPosition("sticky")

    }
  },[windowScroll])


  return (
    <>
      <header className={`  ${Position} z-50`}>
        <div className={`*:font-Popins w-screen h-24 bg-black flex items-center`}>
          <div className="w-4/5 md:w-2/6 flex pl-3 md:pl-0 md:justify-center items-center">
            <h1 className="text-3xl md:text-5xl p-3 text-lime-500 font-bold">VegeFoods</h1>
          </div>
          <div className="flex w-3/5 Navlink">
            <div className="flex gap-16 text-lg pt-1">
              <NavLink to="" className={({ isActive }) => `${isActive ? "text-lime-400" : "text-white"}`} onClick={handleNavLinkClick}>
                Home
              </NavLink>
              <NavLink to="/Shop" className={({ isActive }) => `${isActive ? "text-lime-400" : "text-white"}`} onClick={handleNavLinkClick}>
                Shop
              </NavLink>
              <NavLink to="/dsf" className={({ isActive }) => `${isActive ? "text-lime-400" : "text-white"}`} onClick={handleNavLinkClick}>
                About Us
              </NavLink>
              <NavLink to="/p" className={({ isActive }) => `${isActive ? "text-lime-400" : "text-white"}`} onClick={handleNavLinkClick}>
                Contact Us
              </NavLink>
            </div>
            <div className="flex gap-8" style={{ paddingLeft: "20%" }}>
              <NavLink className="relative" onClick={handleNavLinkClick}>
                <FaBagShopping className="h-9 w-9 text-lime-500" />
                <span className="absolute z-10 w-6 h-6 flex justify-center border rounded-full bg-lime-500 text-white" style={{ right: "-25%", top: "-26%" }}>0</span>
              </NavLink>
              <NavLink onClick={handleNavLinkClick}>
                <FaRegUserCircle className="h-9 w-9 text-lime-500" />
              </NavLink>
            </div>
          </div>
          <div className="hamburg" onClick={clickFunction}>
            <TfiMenu className="h-7 w-7 md:ml-96 md:h-10 text-lime-500 font-bold md:w-10" />
          </div>
        </div>
        <div className={`w-screen transition-all bg-black duration-300 ease-in-out  ${toggle}`}>
          <div className="flex flex-col text-lg pl-6  gap-2">
            <NavLink to="" className={({ isActive }) => `${isActive ? "text-lime-400" : "text-white"} pt-5`} onClick={handleNavLinkClick}>
              Home
            </NavLink>
            <NavLink to="/Shop" className={({ isActive }) => `${isActive ? "text-lime-400" : "text-white"}`} onClick={handleNavLinkClick}>
              Shop
            </NavLink>
            <NavLink to="/dsf" className={({ isActive }) => `${isActive ? "text-lime-400" : "text-white"}`} onClick={handleNavLinkClick}>
              About Us
            </NavLink>
            <NavLink to="/p" className={({ isActive }) => `${isActive ? "text-lime-400" : "text-white"} pb-7`} onClick={handleNavLinkClick}>
              Contact Us
            </NavLink>
          </div>
          <div className="flex pl-5 gap-6 pb-5">
            <NavLink className="relative" onClick={handleNavLinkClick}>
              <FaBagShopping className="h-9 w-9 text-lime-500" />
              <span className="absolute z-10 w-6 h-6 flex justify-center border border-lime-400 rounded-full bg-lime-500 text-white" style={{ right: "-25%", top: "-26%" }}>3</span>
            </NavLink>
            <NavLink onClick={handleNavLinkClick}>
              <FaRegUserCircle className="h-9 w-9 text-lime-500" />
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
