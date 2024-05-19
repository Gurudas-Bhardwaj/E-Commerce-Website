import React from 'react';
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <div>
      <div className='w-screen flex justify-center items-center'>
        <h1 className='text-lg font-Popins pt-4 text-gray-400  md:invisible'>Scroll For More👉</h1>
      </div>
      <div className="w-screen flex justify-center mt-2 font-Popins items-center">
        <div className="w-full px-4 flex md:justify-center overflow-x-auto whitespace-nowrap text-2xl gap-6">
          <NavLink
            to="/Shop"
            end
            className={({ isActive }) =>
              isActive
                ? 'p-2 text-white rounded-md bg-lime-500'
                : 'p-2 text-black rounded-md bg-white'
            }
          >
            Deal Of Day
          </NavLink>
          <NavLink
            to="/Shop/Vegetables"
            className={({ isActive }) =>
              isActive
                ? 'p-2 text-white rounded-md bg-lime-500'
                : 'p-2 text-black rounded-md bg-white'
            }
          >
            Vegetables
          </NavLink>
          <NavLink
            to="/Shop/Fruits"
            className={({ isActive }) =>
              isActive
                ? 'p-2 text-white rounded-md bg-lime-500'
                : 'p-2 text-black rounded-md bg-white'
            }
          >
            Fruits
          </NavLink>
          <NavLink
            to="/Shop/Juices"
            className={({ isActive }) =>
              isActive
                ? 'p-2 text-white rounded-md bg-lime-500'
                : 'p-2 text-black rounded-md bg-white'
            }
          >
            Juices
          </NavLink>
          <NavLink
            to="/Shop/DryFruits"
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
  );
}

export default Category;
