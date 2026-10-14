// import './App.css'
import { useState } from "react";
import Counter from "./components/Counter"
import { Navbar } from "./components/Navbar";
import { Todo } from "./components/Todo";

function App() {
  const [value, setValue]=useState(0);
  function printCountValue(val){
       setValue(val);
  }
  return (
    <div> 
      {/* <Navbar count = {value}/>
      <Counter printCountValue={printCountValue}/> */}
      <Todo />
    </div>
  )
}


export default App
