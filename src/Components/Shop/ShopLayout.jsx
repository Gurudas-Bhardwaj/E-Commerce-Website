import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Category from './Category'

function ShopLayout() {

  return (
    <div>
        <Header/>
        <Category/>
        <Outlet/>
    </div>  
  )
}

export default ShopLayout
