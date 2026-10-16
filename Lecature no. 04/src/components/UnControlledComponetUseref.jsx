import React from 'react'
import { useState } from 'react';
function UnControlledComponetUseref() {

    const nameref= React.useRef("Aayush");
    
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  
  const [form , setForm] =useState({name :"" , email:"",password:""});
  function signup(e){
    e.preventDefault()
    console.log(e.target);
    const formData = new FormData(e.target);//bowreser ka feature hai
    console.log(Object.fromEntries(formData));
    nameref.current.style.color = "red";
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
    <input ref={nameref} type="text" value={form.name} name='name'  id='name' onInput={handleInput} />
    <br />
    <label  htmlFor="email">Email:</label>
    <input type="email" value={form.email} name='email' id='email' onInput={handleInput} />
    <br />
    <label htmlFor="password">Password:</label>
    <input type="password" value={form.password} name='password' id='password' onInput={handleInput} />
    <br />
    <button>Submit</button>
  </form>

  </>
      
  )
}

export default UnControlledComponetUseref;
