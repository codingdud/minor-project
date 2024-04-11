import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home.tsx';
import RootLayout from './pages/RootLayout.tsx';
import Maps from './pages/Maps.jsx'

import './App.css'
import AboutUs from './pages/AboutUs.tsx';

export default function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          index:true,
          element:<Home/>,
        },
        {
          path:'maps',
          element:<Maps/>,
        },
        {
          path:'aboutus',
          element:<AboutUs/>
        }
      ]
    }
  ]);
  return (<><RouterProvider router={router}/></>)
}
