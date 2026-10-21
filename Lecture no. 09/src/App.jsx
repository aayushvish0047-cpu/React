import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Login } from './components/Login'
import { Logout } from './components/Logout'

function App() {
  const [isloggedin , setIsLoggedin]=useState(false);
  return (
    <div>
      {isloggedin ? <Login/>:<Logout/>}
    </div>
  )
  // if (isloggedin){
  //   return <Login/>

  // }
  // else {
  //   return <Logout/>
  // }
}

export default App
