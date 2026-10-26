import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment ,incrementByAmount,reset} from './features/counter/counterSlice'
import './App.css'
import { useState } from 'react'

function App() {
  const [amount, setAmount] = useState(0)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  function handleIncremeantAmountClick(){
    dispatch(incrementByAmount(amount));
  }
  return (
    <div className='container'>
      <button onClick={() => dispatch(increment())}>+</button>
      <p>count: {count}</p>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <br />
      <button onClick={()=> dispatch(reset())}> Reset count </button>
      <br />
      <br />
      <input type="number" value={amount} placeholder='Enter Amount' onChange={(e)=>setAmount(e.target.value)} />
      <br />
      <br />
      <button onClick={handleIncremeantAmountClick}> Increament by </button>
    </div>
  )
}

export default App
