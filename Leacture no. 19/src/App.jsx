import { useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent'
import { useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // function handleClick(){
  //   setCount(count+1);
  // }
  const handleClick = useCallback(()=> {
    setCount(count+1);
},[count]);


  return (
    <div>
      <div>
        count:{count}
      </div>
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
      <br />
      <div>
        <ChildComponent buttonName="Fuckk me ahhh" handleClick={handleClick} /> 
      </div>
    </div>
  )
}

export default App
