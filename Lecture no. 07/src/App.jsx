import { useState } from 'react'

import './App.css'
import { Card } from './components/Card'
function App() {
  const [count, setCount] =useState(0);
  function handleClick(){
    setCount(count+1);
  }
  const [count2, setCount2] =useState(0);
  function handleClick2(){
    setCount2(count2+1);
  }
 

  return (
    <div>
      {/* <Button/> */}

      <Card name = "Aayush is here " handleClickI = {handleClick} count = {count}>
        <h1>this is written in the card</h1>
      </Card>
      <Card name = "johan the done is here " handleClickI = {handleClick2} count = {count2}>
        <h1>Hello jee tho kasie ho app log</h1>
      </Card>
    </div>
      
  )
}

export default App
