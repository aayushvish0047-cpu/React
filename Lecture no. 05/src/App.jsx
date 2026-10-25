import { useState } from 'react'
import {UserCard} from './components/UserCard';
import './App.css'
import Aayush from './assets/Aayush.jpeg'
import prince from './assets/prince.jpeg'
import Aayush1 from './assets/Aayush1.jpeg'

function App() {
  return (
    <div className="container">
      hello world!!
      <UserCard name="Aayush" description="Software Engineer" image={Aayush} style={{ "border-radius": "20%" }}/>
      <UserCard name="Prince" description="Product Manager" image={prince}/>
      <UserCard name="Priya" description="Designer" image={Aayush1}/>

    
    </div>
  )
  
}

export default App
