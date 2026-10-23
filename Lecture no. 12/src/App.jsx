import { createContext, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { ChildA } from './components/ChildA'

const UserContext = createContext();
function App() {
 const [user,setUser]=useState({name:"Aayush"});

  return (
    <div>
      <UserContext.Provider value={user}>
        <ChildA/>
      </UserContext.Provider>
      
    </div>
  )
}

export default App
export {UserContext}
