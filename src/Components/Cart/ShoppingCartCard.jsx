import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../Redux/Features/CartNumber';
import { remove } from '../../Redux/Features/AddToCart';

const ShoppingCartCard = (props) => {

  let cartNumber=useSelector((state) => state.CartNumber.value);
  const dispatch=useDispatch();
  let incr=()=>{
    dispatch(increment())
  }
  let dicr=()=>{
    dispatch(decrement())
  }
  let handleRemove=()=>{
    // console.log(props.id);
    dispatch(remove(props.id))
  }



  return (
    <div>
      <div className='h-44 font-Popins shadow-2xl rounded-xl w-full flex  bg-white' >
        <div className='h-full flex justify-center items-center'>
          <div className='h-28 pl-5'>
            <img src={props.Image} className='h-full rounded w-full' alt="" />
          </div>
        </div>
        <div className='flex justify-between w-4/6'>
          <div className='flex flex-col'>
            <div className='h-4/6 flex flex-col  justify-center pl-5 '>
              <input className='text-2xl font-medium' value={props.Title} disabled/>
              <input className='pt-1 text-sm  text-gray-400' disabled value={`${props.Quantity} × 2`}/>
            </div>
            <div className=' flex ml-0'>
              <div className='ml-0 mt-1 flex items-center justify-evenly w-32'>
                <button className='w-8 h-8 rounded-full bg-lime-400' onClick={incr}>+</button>
                <span className='text-lg'>{cartNumber}</span>
                <button className='w-8 h-8 rounded-full bg-lime-400' onClick={dicr}>-</button>
              </div>
              <button className='h-10 w-28 ml-2 rounded-2xl  text-white text-lg bg-lime-500' onClick={handleRemove}>Remove</button>
            </div>
          </div>
          <div className='mt-8 text-center flex flex-col'>
            <h1>Deliver in 2 days</h1>
            <div className='mt-16'>
              <h1 className='flex text-lg'>Total Amount=<span className='text-gray-800 font-bold'>₹1000</span></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCartCard
