import React from 'react'
import { useState } from 'react';
function ControlledComponet() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  
  const [form , setForm] =useState({name :"" , email:"",password:""});
  function signup(e){
    e.preventDefault()
    console.log("form submited");
    console.log(form)
  }

  function handleInput(e){
    // let value= e.target.value;
    // let name =e.target.value;
    const {value,name} = e.target;
    setForm((prev) => ({...prev,[name] : value}))


  }

  return (
  <><h1>Form in react</h1>
  <form action="" onSubmit={signup}>
    <label htmlFor="name">Name:</label>
    <input type="text" name='name'  id='name' onInput={handleInput} />
    <br />
    <label htmlFor="email">Email:</label>
    <input type="email" name='email' id='email' onInput={handleInput} />
    <br />
    <label htmlFor="password">Password:</label>
    <input type="password" name='password' id='password' onInput={handleInput} />
    <br />
    <button>Submit</button>
  </form>

  </>
      
  )
}

export default ControlledComponet;
