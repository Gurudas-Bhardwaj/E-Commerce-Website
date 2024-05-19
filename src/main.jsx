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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
