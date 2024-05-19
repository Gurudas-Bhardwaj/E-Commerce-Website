import React, { useState } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Card(props) {
  const notify = () => toast("Added To Cart");
  const [Number, setNumber] = useState(0);
  const [showQuantity, setShowQuantity] = useState(false);

  const handleAddToCart = () => {
    if (!showQuantity) {
      setNumber(1);
      setShowQuantity(true);
      notify();
    }
  };

  const handleIncrease = () => {
    if (Number < 10) {
      setNumber(Number + 1);
    }
  };

  const handleDecrease = () => {
    if (Number > 1) {
      setNumber(Number - 1);
    } else {
      setShowQuantity(false);
      setNumber(0);
    }
  };

  return (
    <>
      <div className='w-64 border-2 *:font-Popins border-stone-300 rounded-lg ' style={{maxHeight:"400px"}}>
        <div className='w-full mt-2 mb-2 flex justify-center items-center'>
          <div className='w-60'>
            <div className='absolute z-20 p-2 rounded-full mt-2 ml-2 bg-lime-600 text-white '>{props.DiscountedPercent}</div>
            <img src={props.Image} className='' alt="" />
          </div>
        </div>
        <div>
          <h1 className='text-2xl pl-3 font-semibold pt-2 pb-1'>{props.Title}</h1>
        </div>
        <div className='w-full flex justify-center items-center'>
          <div className='w-11/12 mb-3 mt-2 text-xl font-extrabold border border-md border-stone-300 pl-2'>{props.Quantity}</div>
        </div>
        <div className='pt-2 pb-3 flex flex-col gap-3'>
          <h1 className='pl-3 font-sans flex text-3xl font-bold pt-2'>{props.Price} <span className='text-base self-end pl-2 line-through  font-normal'>{props.RealPrice}</span> </h1>
          <div className='relative w-full flex justify-center items-center pt-4 pb-5'>
            {!showQuantity && (
              <div className='p-2 absolute w-4/5  bg-lime-700 cursor-pointer border-2 border-lime-700 ml-2 mr-2 text-white rounded-2xl flex justify-center items-center gap-1' onClick={handleAddToCart} ><FaCartArrowDown className='' />Add To Cart</div>
            )}
            {showQuantity && (
              <div className='p-2 absolute w-4/5  bg-lime-700 cursor-pointer border-2 border-lime-700 ml-2 mr-2 text-white rounded-2xl flex justify-center items-center gap-5'>
                <span className='p-1 pl-3 pr-3 pb-1' onClick={handleDecrease}>-</span>
                <span>{Number}</span>
                <span className='p-1 pl-3 pr-3 pb-1' onClick={handleIncrease}>+</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
    </>
  )
}