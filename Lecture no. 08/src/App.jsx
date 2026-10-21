import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Card } from './components/Card'

function App() {
  const [name, setName] = useState('')

  return (
   <div>
    <Card title="card 1" name={name} setName={setName} />
    <h2>parent component: {name}!!</h2>
    <Card title="card 2" name={name} setName={setName} />

   </div>
  )
}

export default App
