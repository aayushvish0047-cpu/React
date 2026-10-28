import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput]= useState(0);
  function handleIncremnet(){
    setCount(count+1);
  }
  function expensiveTask(num){
    console.log("your are inside the Expensive task")
    for(let i = 0 ;i<=1000000000;i++){}
    return num*2;
  }
  let doubleValue = useMemo(()=>expensiveTask(input),[input]);




  return (
   <div>
    <button onClick={handleIncremnet}> Increment</button>
    <br />
    <p>Count of Increment is : {count}</p>
    <input type="number" placeholder='Enter a number' value={input} onChange={(e)=>setInput(e.target.value)} />
    <div>
      Double:{doubleValue}
    </div>
   </div>
  )
}

export default App
