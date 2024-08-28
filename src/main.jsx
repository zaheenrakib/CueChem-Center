import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import { ParallaxProvider } from 'react-scroll-parallax';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto'>
      <ParallaxProvider>
        <RouterProvider router={router} />
      </ParallaxProvider>
    </div>
  </React.StrictMode>,
)
