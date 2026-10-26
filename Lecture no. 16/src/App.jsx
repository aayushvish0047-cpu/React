import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const [count, setCount] = useState(0);
  let value = useRef(0);
  let btnRef = useRef();
  function handleClick(){
    value.current = value.current+1;
    console.log("value of val:",value.current);
    setCount(count+1);
  }
  function changeColor(){
    btnRef.current.style.backgroundColor = 'red';

  }
  useEffect(() => {
    
    console.log("Meh firse render ho gya hu")
  })
  
  return (
    <div>
      <button onClick={handleClick} ref={btnRef} className='countBtn'>ckicks:{count}</button>
      <br />
      <br />

      <button onClick={changeColor}> change color of first button</button>
    </div>
  )
}

export default App
