import React,{useEffect, useState} from 'react'
import Man from '../../Public/Images/ProfileMan.png'
import {  NavLink } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';



function Profile() {

  const [Login,SetLogin]=useState(false)
  

  useEffect(() => {
    AOS.init({
      once: true,
      enable: "phone",
      duration: 600,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <main>
      {!Login && (
      <div data-aos="zoom-in-up">
        <div className='w-screen  flex flex-col justify-center items-center'>
          <div >
            <img src={Man} className='h-44 mt-16' alt=""  />
          </div>
          <div>
            <h1 className=' text-2xl sm:text-4xl md:text-5xl font-Popins pb-2 text-center font-bold mt-10 '>Seems Like You haven't Login yet</h1>
            <h2 className='text-center pt-3 text-base md:text-2xl font-Popins'>Login or Create Account.</h2>
          </div>
          <div className='flex flex-col sm:flex-row items-center justify-center mt-8 w-screen gap-5 '>
            <NavLink to='/Login'>
              <button className='h-10  w-40 text-2xl text-white font-Popins bg-lime-500 rounded-2xl'>Login</button>
            </NavLink>
            <NavLink to='/Create-Account'>
              <button className='h-10 w-40 text-2xl text-white font-Popins bg-lime-500 rounded-2xl'>Create</button>
            </NavLink>
          </div>
        </div>
      </div>)
      }
      {Login && (
        <h1>Hi</h1>
      )

      }
    </main>
  )
}

export default Profile
