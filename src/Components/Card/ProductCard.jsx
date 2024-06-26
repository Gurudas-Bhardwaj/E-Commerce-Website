import React, { useState, useEffect } from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../Redux/Features/CartNumber';
import { add } from '../../Redux/Features/AddToCart';
import { toggleFalse, toggleTrue } from '../../Redux/Features/CartToggle';

export default function Card(props) {
  const Dispatch = useDispatch();

  const [Number, setNumber] = useState(0);
  const [Cart, setCart] = useState(true);

    let Product=[]


  useEffect(() => {
    const storedCart = localStorage.getItem(`cart_${props.id}`);
    const storedNumber = localStorage.getItem(`number_${props.id}`);

    if (storedCart !== null) {
      setCart(JSON.parse(storedCart));
    }

    if (storedNumber !== null) {
      setNumber(JSON.parse(storedNumber));
    }
    
    
    
  }, [props.id]);


  const handleAddToCart = () => {

    const newNumber = Number + 1;
    setNumber(newNumber);

    Dispatch(toggleFalse())

    setCart(false);

    Dispatch(increment());

    
    localStorage.setItem(`cart_${props.id}`, JSON.stringify(false));
    localStorage.setItem(`number_${props.id}`, JSON.stringify(newNumber));

    Product={
      key:props.id,
      id:props.id,
      title: props.Title,
      image: props.Image,
      quantity: props.Quantity,
      price: props.Price,
    };

    Dispatch(add(Product));

    
  };
  
  
  const ChangeToCart = () => {
    
    if (Number <= 1) {
      
      setNumber(0);
      
      setCart(true);
      
      Dispatch(toggleTrue())

      Dispatch(decrement());

      localStorage.setItem(`cart_${props.id}`, JSON.stringify(true));
      localStorage.setItem(`number_${props.id}`, JSON.stringify(0));

    }
    else {
      const newNumber = Number - 1;
      setNumber(newNumber); 
      localStorage.setItem(`number_${props.id}`, JSON.stringify(newNumber));
    }

  };


  const AddToCart = () => {
    if (Number < props.limit) {
      const newNumber = Number + 1;
      setNumber(newNumber);
    }
  };

  return (
    <>
      <div className='w-56 border-2 *:font-Popins border-stone-300 rounded-lg' style={{ maxHeight: "400px" }}>
        <div className='w-full mt-2 mb-2 flex justify-center items-center'>
          <div className='w-52'>
            <div className='absolute z-20 p-2 rounded-full mt-2 ml-2 bg-lime-600 text-white '>{props.DiscountedPercent}</div>
            <img src={props.Image} className='' alt="" />
          </div>
        </div>
        <div>
          <h1 className='text-xl pl-3 font-semibold pt-2 pb-1'>{props.Title}</h1>
        </div>
        <div className='w-full flex '>
          <div className='w mt-2 text-lg pl-3'>{props.Quantity}</div>
        </div>
        <div className='pt-2 pb-3 w-full flex mt-4 gap-3'>
          <h1 className='pl-3 font-sans flex text-lg font-bold pt-'>{props.Price} <span className='text-base pt-1 pl-2 line-through font-normal'>{props.RealPrice}</span> </h1>
          <div className='relative w-full flex justify-center items-center pt-4 pb-5'>
            {Cart && (
              <div className='p-2 absolute w-24 bg-lime-700 cursor-pointer border-2 border-lime-700 ml-2 mr-2 text-white rounded-2xl flex justify-center items-center gap-1' onClick={handleAddToCart}><FaCartArrowDown className='' />Add</div>
            )}
            {!Cart && (
              <div className='p-2 absolute w-24 bg-lime-700 cursor-pointer border-2 border-lime-700 ml-2 mr-2 text-white rounded-2xl flex justify-center items-center gap-1'>
                <span className='pr-3 pl-2' onClick={ChangeToCart}>-</span> {Number} <span onClick={AddToCart} className='pl-2 pr-2'>+</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
