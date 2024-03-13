import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home.jsx';
import RootLayout from './pages/RootLayout.jsx';

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
      ]
    }
  ]);
  return (<><RouterProvider router={router}/></>)
}
