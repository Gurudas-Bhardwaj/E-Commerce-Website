import React from 'react'

export default function Card(props) {
  return (
    <>
      <div className=' border w-3/4 border-gray-400 font-Popins md:w-1/4' style={{maxheight:"500px"}}>
        <img src={props.Image} alt="" className='p-2'/>
        <h1 className='pl-2 text-orange-600 font-semibold text-lg'></h1>
        <h1 className='pt-1 pl-2 text-3xl font-bold '>{props.Title}</h1>
        <h1 className='text-orange-500 pl-2'>{props.given_stars}<span>{props.ungiven}</span><span className='text-gray-700 text-xs italic pl-1'>{props.votes}</span></h1>
        <h1 className='pl-2 pt-4 text-gray-600 pr-3'>{props.description}</h1>
        <button className='h-9 w-36 border-2 border-lime-600 text-xl font-bold mb-3 text-lime-500 mt-4 ml-2'>Add To Cart</button>
      </div>
    </>
  )
}
