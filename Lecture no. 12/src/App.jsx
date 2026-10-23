import { createContext, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { ChildA } from './components/ChildA'
const ThemeContext = createContext();
// const UserContext = createContext();
function App() {
//  const [user,setUser]=useState({name:"Aayush"});
const [theme, setTheme]=useState('Light');
  return (
      <ThemeContext.Provider value={{theme,setTheme}}>
       <div className='Conatiner' style={{backgroundColor:theme==='Light'? "palegoldenrod":"black"}} >
         <ChildA/> 
       </div>
      </ThemeContext.Provider>
    




      // {/* <UserContext.Provider value={user}>
      //   <ChildA/>
      // </UserContext.Provider>
      //  */}
    
  )
}

export default App
export {ThemeContext}
