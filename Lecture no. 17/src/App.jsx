import { useRef, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  let timerRef = useRef(null);

  function startTimer(){
    timerRef.current=setInterval(()=>{
        setTime(time=>time+1);
      },1000)

  }
  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current=null;
  }
  function restTimmer(){
    stopTimer();
    setTime(0);

  }

  return (
    <div>
      <h1>StopWatch : {time} seconds</h1>
      <button onClick={startTimer}> Start </button>
      <br />
      <br />
      <button onClick={stopTimer}> Stop </button>
       <br />
      <br />
      <button onClick={restTimmer}> Reset </button>
    </div>
  )
}

export default App
