import React, { useEffect, useState } from 'react'
import './Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Organic from '../../Public/Images/Organic.png'
import Delivery from '../../Public/Images/FastestDelivery.png'
import Support from '../../Public/Images/24Hrs.png'
import HighQuality from '../../Public/Images/HighQuality.png'
import CategoryCard from '../Card/CategoryCard.jsx';
import ProductCard from '../Card/ProductCard'
import Capsicum from '../../Public/Images/Capsicum.jpg'
import Tomato from '../../Public/Images/Tomato.jpg'
import Mint from '../../Public/Images/Mint.jpg'
import CustomerSays from '../Card/CustomerSays.jsx';
import { FaChevronCircleLeft,FaChevronCircleRight } from "react-icons/fa";


function Home() {
    const [Vegetable,SwitchVegetable]=useState("bg-VegetableImageOne")


    useEffect(() => {
      AOS.init({
        once: true,
        enable: "phone",
        duration: 700,
        easing: "ease-out-cubic",
      });
    }, []);


    useEffect(() => {
      const interval = setInterval(() => {
        SwitchVegetable(prevVegetable => (
          prevVegetable === "bg-VegetableImageTwo" ? "bg-VegetableImageOne" : "bg-VegetableImageTwo"
        ));
      }, 2000);
  
      return () => clearInterval(interval);
    }, []);
    
    useEffect(()=>{
      const Slider=document.getElementById("Slider");
      let Checker=0
      let Checker2=true

      const interval=setInterval(() => {
        if(window.innerWidth>1000){
            if(Checker2){
              Slider.scrollLeft+=1170;
              Checker2=false
            }
            else{
              Slider.scrollLeft-=1170;
              Checker2=true

            }
        }
        else{
          if(Checker<8){
            Slider.scrollLeft+=300
            ++Checker
          }else if(Checker>=8){
            Slider.scrollLeft-=300
            ++Checker
            if(Checker==16){
              Checker=0;
            }
          }
        }
      }, 2000);

      return () => clearInterval(interval);
    },[])


   

  return (
    <div>
      <div >
        <div className={`${Vegetable} trans bg-cover h-screen  bg-center`}  >
            <div className='w-full h-full BgGradient flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center w-screen' data-aos="fade-down-right">
                    <span className='font-Pacifico text-3xl  md:text-6xl text-white font-bold text-center'>We Serve Fresh Vegetables & Fruits</span>
                    <span className='text-center font-Popins text-white pt-2 md:pt-10  text-base md:text-2xl'>We Deliver Fresh & Organic Vegetables</span>
                    <button className='h-12 font-Pacifico text-white text-2xl w-36 bg-green-400 font-semibold mt-8 rounded-3xl'>Shop Now</button>
                </div>
            </div>
        </div>
      </div>
      <div className='w-screen mt-10 mb-20 '>
        <div className='flex flex-col md:flex-row justify-evenly items-center' data-aos="fade-right">
          <div className='flex flex-col items-center pt-5 md:pt-0'>
            <img src={Organic} alt="" className='w-24 md:w-40' />
            <h1 className='font-Pacifico text-xl pt-2'>100% Organic</h1>
          </div>
          <div className='flex flex-col items-center pt-5 md:pt-0'>
            <img src={Delivery} alt="" className='w-24 md:w-40' />
            <h1 className='font-Pacifico text-xl pt-2'>Fastest Delivery</h1>
          </div>
          <div className='flex flex-col items-center pt-5 md:pt-0'>
            <img src={Support} alt="" className='w-24 md:w-40' />
            <h1 className='font-Pacifico text-xl pt-2'>24/7 Support</h1>
          </div>
          <div className='flex flex-col items-center pt-5 md:pt-0'>
            <img src={HighQuality} alt="" className='w-24 md:w-40' />
            <h1 className='font-Pacifico text-xl pt-2'>100% Organic</h1>
          </div>
        </div>
      </div>
      <div className='flex mt-10 mb-10  justify-center items-center w-screen' data-aos="fade-up">
        <div className=" flex gap-10 flex-col md:flex-row  items-center" style={{width:"80%"}}>
          <div className=' w-72 md:w-80 ' >
            <div className='w-full  bg-VegetableImageOne bg-cover bg-center flex items-end' style={{height:"250px"}}>
              <h1 className='font-Popins p-2 text-white bg-lime-500 text-xl'>Vegetable</h1>
            </div>
            <div className='w-full flex items-end  bg-Strawberry bg-cover bg-center mt-8' style={{height:"250px"}}>
            <h1 className='font-Popins p-2 text-white bg-lime-500 text-xl'>Fruits</h1>
            </div>
          </div>
          <div className='  w-72 md:w-80 ' >
            <div className='w-full  bg-MiddleCard bg-cover bg-center flex flex-col items-center text-center ' style={{height:"530px"}}>
                <span className='text-3xl font-Pacifico pt-4  font-semibold'>VegeFood</span>
                <span className='font-Popins text-lg pt-3 '>Protect The Health of Every Home</span>
                <button className='h-10 w-28 font-Popins font-bold bg-lime-400 border-2 border-black mt-3 rounded-3xl'>Shop Now</button>
            </div>
          </div>
            <div className='  w-72 md:w-80  ' >
              <div className='w-full  flex items-end bg-CardJuice bg-cover bg-center ' style={{height:"250px"}}>
              <h1 className='font-Popins p-2  text-white bg-lime-500 text-xl'>Juices</h1>
              </div>
              <div className='w-full  flex items-end bg-DryFruits bg-cover bg-center mt-8' style={{height:"250px"}}>
              <h1 className='font-Popins p-2 text-white bg-lime-500 text-xl'>Dry Fruits</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-5 pb-5 w-screen  flex flex-col items-center justify-center'>
          <div className='p'>
            <h1 className='font-Pacifico text-3xl  md:text-5xl text-lime-500' data-aos='zoom-in'>Shop By Category</h1>
          </div>
            <div className='flex justify-evenl w-screen scroll-smooth mt-16 overflow-auto gap-10' id='Slider' style={{width:"89%",scrollbarWidth:"none"}} data-aos="flip-down">
              <CategoryCard Background="bg-CardVegetable" Title="Vegetable"/>
              <CategoryCard Background="bg-Fruits" Title="Fruits"/>
              <CategoryCard Background="bg-Almonds" Title="Dry Fruits"/>
              <CategoryCard Background="bg-Juice" Title="Fruits"/>
              <CategoryCard Background="bg-CardVegetable" Title="Vegetable"/>
              <CategoryCard Background="bg-Fruits" Title="Fruits"/>
              <CategoryCard Background="bg-Almonds" Title="Dry Fruits"/>
              <CategoryCard Background="bg-Juice" Title="Fruits"/>
            </div>
        </div>
        <div className='w-screen flex flex-col items-center justify-center'>
          <div className='mt-10 mb-5 w-screen flex flex-col justify-center items-center'>
            <span className='font-Pacifico pb-3 text-lime-500 pt-14 text-center text-4xl md:text-6xl' data-aos="fade-down-right">Great Deal Section</span>
          </div>
          <div className=' flex flex-col justify-evenly items-center md:flex-row mt-5 mb-5' data-aos="fade-down-left" style={{width:"85%"}}>
            <ProductCard Image={Capsicum} DiscountedPercent='22%' Title='Orange Paprika' DiscountedPrice="₹60/Kg" RealPrice='₹110' />
            <ProductCard Image={Tomato} DiscountedPercent='Deal Of Day' Title='Tomato' DiscountedPrice="₹30/Kg" RealPrice='₹60' />
            <ProductCard Image={Mint} DiscountedPercent='19%' Title='Mint' DiscountedPrice="₹18/100gm" RealPrice='₹22' />
          </div>
          <div className=' flex flex-col md:justify-evenly items-center md:flex-row mt-5 mb-5' data-aos="fade-down-right" style={{width:"85%"}}>
            <ProductCard Image={Capsicum} DiscountedPercent='22%' Title='Orange Paprika' DiscountedPrice="₹60/Kg" RealPrice='₹110' />
            <ProductCard Image={Tomato} DiscountedPercent='Deal Of Day' Title='Tomato' DiscountedPrice="₹30/Kg" RealPrice='₹60' />
            <ProductCard Image={Mint} DiscountedPercent='19%' Title='Mint' DiscountedPrice="₹18/100gm" RealPrice='₹22' />
          </div>
        </div>
        <div className=' w-screen  flex mt-14 flex-col  items-center'>
          <div className='w-screen pt-5 pb-14 flex justify-center items-center text-center'>
              <h1 className='font-Pacifico text-lime-500 text-2xl md:text-5xl pb-3 pt-3'>See What Our Customer Says</h1>
          </div> 
          <div className='w-screen relative flex flex-col gap-14  justify-center items-center'>
            
            <div className='flex gap-10  overflow-auto scroll-smooth' style={{width:"78%",scrollbarWidth:"none"}} id='CustomerSlider ' data-aos="flip-up">
                <CustomerSays Stars="⭐⭐⭐⭐⭐" Title="Monkey D.Luffy" Image="https://vignette.wikia.nocookie.net/fairypirates/images/5/5f/Monkey_D._Luffy.png/revision/latest?cb=20161022094701"/>  
                <CustomerSays Stars="⭐⭐⭐⭐⭐" Title="Yuji Itadori" Image="https://i.pinimg.com/736x/07/17/bc/0717bc375b5d1e10d18bb12bf4b3fb01.jpg"/>  
                <CustomerSays Stars="⭐⭐⭐⭐⭐" Title="Akira Tendo" Image="https://i.pinimg.com/originals/64/fa/02/64fa02f67a1d8386b85136e5636f5351.jpg"/>    
              </div>
            <div className='flex gap-10  pb-16 overflow-auto  scroll-smooth' style={{width:"78%",scrollbarWidth:"none"}} id='CustomerSlider' data-aos="flip-up">
                <CustomerSays Stars="⭐⭐⭐⭐⭐" Title="Monkey D.Luffy" Image="https://vignette.wikia.nocookie.net/fairypirates/images/5/5f/Monkey_D._Luffy.png/revision/latest?cb=20161022094701"/>  
                <CustomerSays Stars="⭐⭐⭐⭐⭐" Title="Yuji Itadori" Image="https://i.pinimg.com/736x/07/17/bc/0717bc375b5d1e10d18bb12bf4b3fb01.jpg"/>  
                <CustomerSays Stars="⭐⭐⭐⭐⭐" Title="Akira Tendo" Image="https://i.pinimg.com/originals/64/fa/02/64fa02f67a1d8386b85136e5636f5351.jpg"/>    
              </div>
            </div>
        </div>
            <div className='w-screen h-56 font-Popins flex text-center items-center flex-col justify-center  md:flex-row mt-4  bg-stone-300 gap-8 md:gap-20'>
              <div className='flex flex-col '>
                  <h1 className='text-2xl md:text-left font-medium'>Subcribe to our Newsletter</h1>
                  <h4 className='text-base md:text-left'>Get e-mail updates about our latest shops and special offers</h4>
              </div>
              <div className='flex'>
                  <input type="text" className='h-8  w-52 md:w-72'/>
                  <button className='h-8 w-24 md:w-36 bg-lime-500 text-lg '>Subcribe</button>
              </div>
            </div>


    </div>
  )
}

export default Home
