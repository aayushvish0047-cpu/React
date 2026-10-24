import { useState } from 'react'

import './App.css'
import{createBrowserRouter, RouterProvider} from "react-router-dom"
import { Home } from './components/Home'
import { About } from './components/About'
import Dashboard from './components/Dashboard'
import { Navbar } from './components/Navbar'
import { ParamComp } from './components/ParamComp'
import Courses from './components/Courses'
import MockTest from './components/MockTest'
import Reports from './components/Reports'
import NotFound from './components/NotFound'
const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <div>
        <Home/>
        <Navbar/>
      </div>

    },
    {
      path:"/about",
      element:<div>
        <About/>
        <Navbar/>
      </div>

    },
    {
      path:"/dashboard",
      element:<div>
        <Dashboard/>
        <Navbar/>
      </div>,
      children:[
        {
          path:'courses',
          element:<Courses/>

        },
        {
          path:'mock-tests',
          element:<MockTest/>
        },
        {
          path:'reports',
          element:<Reports/>
        }
      ]
    },
    {
      path:"/student/:id",
      element:<ParamComp/>
    },{
      path:'*',
      element:<NotFound/>
    }
  ]
);
function App() {


  return (
   <div>
    <RouterProvider router={router}/>

   </div>
  )
}

export default App
// export {router}
