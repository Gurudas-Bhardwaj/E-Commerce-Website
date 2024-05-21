import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import ShopLayout from './Components/Shop/ShopLayout.jsx';
import Layout from './Layout.jsx';
import Vegetable from './Components/Shop/Vegetable.jsx';
import Juices from './Components/Shop/Juices.jsx';
import Fruits from './Components/Shop/Fruits.jsx';
import DryFruits from './Components/Shop/DryFruits.jsx';
import DealOfDay from './Components/Shop/DealOfDay.jsx';
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About Us/About.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Login from './Components/Profile/Login.jsx';
import CreateAccount from './Components/Profile/CreateAccount.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: 'Shop',
        element: <ShopLayout />,
        children: [
          { path: '', element: <DealOfDay /> },
          { path: 'Vegetables', element: <Vegetable /> },
          { path: 'Fruits', element: <Fruits /> },
          { path: 'Juices', element: <Juices /> },
          { path: 'DryFruits', element: <DryFruits /> },
        ],
      },
      {
        path:"Contact-us",
        element:<Contact/>
      },
      {
        path:"About-us",
        element:<About/>
      },
      {
        path:"Cart",
        element:<Cart/>
      },
      {
        path:"Profile",
        element:<Profile/>,
      },
      {
        path:"Login",
        element:<Login/>
      },
      {
        path:"Create-Account",
        element:<CreateAccount/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
