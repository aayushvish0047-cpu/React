import { useState } from 'react'
import './App.css'
import Product, { Key } from '../componets/Key';

function Counter(){
   const [count , setCount]=useState(0);
   return (
    <div>
     <h1>{count}</h1>
      <button on onClick={()=> setCount(prev=> prev+1)}>Increment</button>
    </div>  
   )
}


function App() { 
const [changeTag , setChangeTag]= useState(false);
  return (
    <div>
      {/* <Product/> */}
      <Key/>
      {/* <h1>High</h1>
      <h2>low</h2> */}
      {/* <h3>
        Hello
      </h3> */}
      {/* {changeTag? (
        <div>
      <p>Div Tag</p>
      <Counter/>
        </div>)
        :(
          <section>
            <p>Section Tag</p>
            <Counter/>
          </section>
        )
      } */}

      {/* <div class={changeTag ? "Active":"Inative"}>
        <Counter/>
      </div> */}
      {changeTag ?<Counter/> : <Counter/>}

      <button on onClick={()=>setChangeTag((prev)=>!prev)}> change Tag</button>
    </div>
  )
}
console.log(
  <h1> this is aayush here <p>this is paraGraph</p><p>i will be good developer one day </p> </h1>
)
export default App
