import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  function signup(e){
    e.preventDefault()
    console.log("form submited");
    console.log(name , email, password)
  }
  return (
  <><h1>Form in react</h1>
  <form action="" onSubmit={signup}>
    <label htmlFor="name">Name:</label>
    <input type="text" name='name'  id='name' onInput={(e) => setName(e.target.value)} />
    <br />
    <label htmlFor="email">Email:</label>
    <input type="email" name='email' id='email' onInput={(e) => setEmail(e.target.value)} />
    <br />
    <label htmlFor="password">Password:</label>
    <input type="password" name='password' id='password' onInput={(e) => setPassword(e.target.value)} />
    <br />
    <button>Submit</button>
  </form>

  </>
      
  )
}

export default App
