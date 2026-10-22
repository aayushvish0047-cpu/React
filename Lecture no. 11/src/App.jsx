import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count,setCount] = useState(0);
  const [total,setTotal] =useState(1);

  //firt -> side-effect function
  //second -> clean up function
  // third -> coma separated dep listed

  // variation:1
  // runs on every render
  // useEffect(() => {
  //   alert("i will run on each render!")
  
  // })
  function handleClick(){
    setCount(count+1)
  }
  function handleClickT(){
    setTotal(total+1)
  }

  //varation 2
  //That runs on only first render
  // useEffect(() => {
  //   alert("I will run on only 1st render");
  
   
  // }, [])

  // vartaion no 3

// useEffect(() => {
//     alert("I will run every time when count is update ");
  
   
//   }, [count])

// vartion no 04
// multiple usestate
// useEffect(() => {
//   alert("I will run every time when count or total is updated")
// }, [count,total])

  // Varation 05
  // now let add cleanup function

  useEffect(() => {
    alert("Count is Updated")
  
    return () => {
      alert("Count is Unmounted form UI")
    }
  }, [count])
  


  return (
    <div>
      <button onClick={handleClick}>
        update count 
      </button>
      <br />
      Count is  :{count}
      <br />
      <button onClick={handleClickT}>
        update total 
      </button>
      <br />
      Total is  :{total}
    </div>
  )
}

export default App
