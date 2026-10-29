import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Paste from './components/paste'
import ViewPaste from './components/ViewPaste'

function App() {
  const router = createBrowserRouter(
    [
    {
      path:'/home',
      element: <div>
        <Navbar/>
        <Home/>
        
      </div>
    },
    {
      path:'/paste',
      element: <div>
        <Navbar/>
        <Paste/>
        
      </div>
    },
    {
      path:'/paste/:id',
      element: <div>
        <Navbar/>
        <ViewPaste/>
        
      </div>
    }
  ]

  )
  

  return (
   <div>
    <RouterProvider router={router}/>
    <Home/>
   </div>
  )
}

export default App
