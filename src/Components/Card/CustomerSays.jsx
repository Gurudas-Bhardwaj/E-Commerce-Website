import React from 'react'

function CustomerSays(props) {
  return (
    <div>
      <div className=' h-56 bg-stone-300 rounded-lg  w-72 md:w-80  flex flex-col'>
            <span className='pl-4 pt-3'>{props.Stars}</span>
            <span className='pl-4 pt-2 font-Popins pr-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi officia eaque blanditiis minus suscipit veniam!</span>
            <div className='pl-4 pt-5 flex gap-3'>
                <img src={props.Image} alt="" className='h-9 w-9 rounded-full' />
                <h1 className='font-Popins pt-1 text-xl '>{props.Title}</h1>
            </div>
      </div>
    </div>
  )
}

export default CustomerSays
