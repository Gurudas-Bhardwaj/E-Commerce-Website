import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function About() {

    useEffect(() => {
        AOS.init({
          once: true,
          enable: "phone",
          duration: 600,
          easing: "ease-out-cubic",
        });
      }, []);

  return (
    <div>
        <div className='bg-Aboutbackground  w-screen bg-center bg-cover' style={{height:"420px"}}>
            <div className='w-full h-full  flex  justify-center items-center bg-gradient-to-r from-black/50 via-black/50 to-black/50'>
                <div className='w-full h-full flex flex-col gap-6 justify-center items-center' data-aos="fade-down-right">
                    <h1 className='font-Pacifico font-bold text-4xl md:text-6xl text-center text-white'>Know More About Us!</h1>
                    <h1 className='font-Popins text-base text-center md:text-2xl text-white '>Live the Life We are Living.</h1>
                </div>
            </div>
      </div>

    </div>
  )
}

export default About
