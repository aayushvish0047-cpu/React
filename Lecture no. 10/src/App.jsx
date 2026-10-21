import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  function handleClick(){
    alert("You clicked me !!");
  }
  function handleMouseOver(){
    alert("You are hovering over the paragraph !!");
  }
  function handlechange(e){
    console.log("value till now :",e.target.value);

  }
  function handleSubmit(e){
    e.preventDefault();
    alert("Form Submitted !!");
  }

  return (
   <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handlechange} placeholder="Tumhari maa ka bosda"/>
      <button type="submit">Submit</button>
    </form>
    <p onMouseOver={handleMouseOver} style={{color:'red', border:"1px solid red"}}>
      Hello , don't move cursor from me 
    </p>
    <button onClick={()=>alert("you clicked me  fahhhh")}>
      Don't click me!!
    </button>
    <button onClick={handleClick}>
      Don't click me!!
    </button>
   </div>
  )
}

export default App
