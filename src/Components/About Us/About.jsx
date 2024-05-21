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
      <div>
        <div className='pt-16 pb-4 w-screen flex flex-col justify-center items-center'>
          <h1 className='text-3xl text-center md:text-5xl pt-2 pb-5 font-Pacifico font-bold text-lime-700'  data-aos='zoom-in-down'>Know More About your VegeFood </h1>
        </div>
        <div className='w-screen flex mt-12 justify-center items-center'>
          <div className='w-4/5 grid gap-12 grid-cols-1 md:grid-cols-2' >
            
            
            <div className='shadow-2xl flex flex-col md:flex-row' data-aos='flip-right'>
              <div className='h-20 mt-6 md:mt-1 ml-4 w-20 rounded-md bg-amber-300 text-center flex  justify-center  font-Pacifico text-6xl self-center'>1</div>
              <div className='h-full w-full md:w-4/5 flex flex-col  justify-center '>
                <h1 className='font-Pacifico text-3xl pl-5 text-lime-500 text-center pt-5 md:pt-0 font-bold'>Organic Food</h1>
                <p className='font-Popins pt-4 pb-4 md:pb-10 text-center pr-5 pl-5'>Our organic Food are freshly harvested, pesticide-free, and grown with sustainable farming practices, offering exceptional taste, rich nutrients, and a healthy choice for your family's meals.</p>
              </div>
            </div>
            <div className='shadow-2xl flex flex-col md:flex-row' data-aos='flip-right' >
              <div className='h-20 mt-6 md:mt-1 ml-4 w-20 rounded-md bg-cyan-300 text-center flex  justify-center font-Pacifico text-6xl self-center'>2</div>
              <div className='h-full w-full md:w-4/5 flex flex-col  justify-center '>
                <h1 className='font-Pacifico text-3xl pl-5 text-lime-500 pt-5 md:pt-0 pb-2 text-center font-bold'>Best Quality</h1>
                <p className='font-Popins pt-4 pb-4 md:pb-0 text-center pr-5 pl-5'>Our vegetables are grown with utmost care and ensuring top-notch quality and freshness, delivering exceptional taste and nutritional value straight from our fields to your table.</p>
              </div>
            </div>
            <div className='shadow-2xl flex flex-col md:flex-row' data-aos='flip-right' >
              <div className='h-20 mt-6 md:mt-1 ml-4 w-20 rounded-md bg-orange-300 text- flex  justify-center  font-Pacifico text-6xl self-center'>3</div>
              <div className='h-full w-full md:w-4/5 flex flex-col  justify-center '>
                <h1 className='font-Pacifico text-3xl pl-5 pt-5 md:pt-5 text-lime-500 text-center font-bold '>Fastest Delivery</h1>
                <p className='font-Popins pt-4 pb-4 md:pb-12 text-center pr-5 pl-5'>Our fast delivery service ensures you receive the freshest vegetables at your doorstep, saving you time and guaranteeing quality produce for your meals every day.</p>
              </div>
            </div>
            <div className='shadow-2xl flex flex-col md:flex-row' data-aos='flip-right' >
              <div className='h-20 mt-6 md:mt-1 ml-4 w-20 rounded-md bg-red-300 text- flex  justify-center items font-Pacifico text-6xl self-center'>4</div>
              <div className='h-full w-full md:w-4/5 flex flex-col  justify-center '>
                <h1 className='font-Pacifico text-3xl pl-5 pt-5 md:pt-5 text-lime-500 text-center font-bold'>Best Price</h1>
                <p className='font-Popins pt-4 pb-4 md:pb- text-center pr-5 pl-5'>Discover the freshest vegetables at unbeatable prices, offering top-quality produce that brings flavor and nutrition to your meals. Shop our selection today and enjoy exceptional value with every purchase.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen h-56 font-Popins flex text-center items-center flex-col justify-center  md:flex-row mt-20  bg-stone-300 gap-8  md:gap-20'>
        <div className='flex flex-col ' data-aos="fade-right">
            <h1 className='text-2xl md:text-left font-medium md:pb-2'>Subcribe to our Newsletter</h1>
            <h4 className='text-base md:text-left'>Get e-mail updates about our latest shops and special offers</h4>
        </div>
        <div className='flex' data-aos="fade-left">
            <input type="text" required className='h-8 pl-2 w-52 md:w-72'/>
            <button className='h-8 w-24 md:w-36 bg-lime-500 text-lg ' >Subcribe</button>
        </div>
      </div>
      <div className='w-screen pt-10 flex justify-center'>
          <h1 className='font-Pacifico pt-10 pb-10 text-lime-600 text-6xl'>Our Gallery</h1>
      </div>

    </div>
  )
}

export default About
