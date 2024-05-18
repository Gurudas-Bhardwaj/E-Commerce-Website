import React from 'react'
import { NavLink } from 'react-router-dom'


function Category() {
  return (
    <div>
      <div className='w-screen h-20 flex justify-center mt-10 font-Popins items-center '>
        <div className='w-3/5 h-full flex text-2xl justify-center items-center gap-6'>
        <NavLink
            to='Deal'
            className={({ isActive }) =>
              isActive
                ? 'p-2 text-white rounded-md bg-lime-500'
                : 'p-2 text-black rounded-md bg-white'
            }
          >
            Deal Of Day
          </NavLink>
        <NavLink
            to='Vegetables'
            className={({ isActive }) =>
              isActive
                ? 'p-2 text-white rounded-md bg-lime-500'
                : 'p-2 text-black rounded-md bg-white'
            }
          >
            Vegetables
          </NavLink>
          <NavLink
            to='Fruits'
            className={({ isActive }) =>
              isActive
                ? 'p-2 text-white rounded-md bg-lime-500'
                : 'p-2 text-black rounded-md bg-white'
            }
          >
            Fruits
          </NavLink>
          <NavLink
            to='Juices'
            className={({ isActive }) =>
              isActive
                ? 'p-2 text-white rounded-md bg-lime-500'
                : 'p-2 text-black rounded-md bg-white'
            }
          >
            Juices
          </NavLink>
          <NavLink
            to='DryFruits'
            className={({ isActive }) =>
              isActive
                ? 'p-2 text-white rounded-md bg-lime-500'
                : 'p-2 text-black rounded-md bg-white'
            }
          >
            Dry Fruits
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Category
