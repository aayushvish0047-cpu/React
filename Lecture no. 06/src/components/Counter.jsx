import React from 'react'
import { useState } from 'react'
import './Counter.css'
export function Counter() {
    const[count,setCount] = useState(0);
    return (
    <div className='counter-container'>
    <p id='para'>Your have clicked {count} times</p>
    <button id="btn" onClick={() => {setCount(count + 1)}}>Click me</button>
    <button id="btn" onClick={() => {setCount(count - 1)}}>Decrement</button>
    </div>
  
  )
}

