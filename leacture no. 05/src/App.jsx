import { useState } from 'react'
import {UserCard} from './components/UserCard';
import './App.css'

function App() {
  return (
    <div className="container">
      hello world!!
      <UserCard name="Aayush" description="Software Engineer"/>
      <UserCard name="Prince" description="Product Manager"/>
      <UserCard name="Priya" description="Designer"/>

    
    </div>
  )
  
}

export default App
