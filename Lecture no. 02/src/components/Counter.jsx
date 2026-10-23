import React from 'react'
import { useState } from 'react';


function Counter({printCountValue}) {
//    const result = useState("Aayush here") // this retruns array of length 2
//     const value  = result[0];
//     const setValue = result[i];
    let [Value , setValue]=useState(0);
    // const [theme , setheme]=useState(0);3
    console.log(Value)
    printCountValue(Value);
    // let count=0; //normal variable

    function incremeant(){
        // setValue((prev) =>prev+1);
        setValue(Value = Value + 1); 
        // printCountValue(Value);
        // iske jagha hum ++value karte to bhi one click me run karta 
        // setValue(Value++); ye post increment kar raha hai phile bhejta hai fir update kar rah hai ,
        // iske liye double click pe update ho rh tha

    }
    function decremeant(){
        setValue(Value  = Value - 1);
    }
  return (
    <div>Counter , i have access from another componets that i have build within <div>Quanitity</div>
        <button onClick={incremeant}>+</button>
        <div>{Value}</div>
        <button onClick={decremeant}>-</button>
    </div>
  )
}

export default Counter