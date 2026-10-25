import { useState } from 'react'

import './App.css'

function App() {


  return (
    <div className='container'>
      <button onClick={handleIncrementClick}>+</button>
      <p>count:{}</p>
      <button onClick={handleDecrementClick}>-</button>      
    </div>
  )
}

export default App
