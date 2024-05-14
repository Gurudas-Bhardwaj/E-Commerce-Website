import React from 'react'

function CategoryCard(props) {
  return (
    <div>
      <div className={`w-64 flex ${props.Background} bg-cover bg-center justify-end overflow-hidden items-end h-64 bg-black rounded-full`}>
            <h1 className='mb-10 mr-3 pr-6  pl-5 font-Popins text-white font-semibold pt-2 pb-2 border-1 rounded-3xl bg-lime-500 '>{props.Title}</h1>
      </div>
    </div>
  )
}

export default CategoryCard
