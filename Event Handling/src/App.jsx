import { useState , useEffect} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Box } from './components/Box'
import product1 from './assets/product1.webp'
import product2 from './assets/product2.webp'
import product3 from './assets/product3.webp'
import product4 from './assets/product4.webp'


function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  // box1
  function increment1(){
    setCount1(count1+1);
  }
  function decrement1(){
    setCount1(count1-1);

  }
  //box2
  function increment2(){
    setCount2(count2+1);
  }
  function decrement2(){
    setCount2(count2-1);
  }
  //box3
  function increment3(){
    setCount3(count3+1);
  }
  function decrement3(){
    setCount3(count3-1);

  }
  // box 4
  function increment4(){
    setCount4(count4+1);
  }
  function decrement4(){
    setCount4(count4-1);

  }

  function getRandomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    
    return `rgb(${r},${g},${b})`;
  }

  const [color1, setColor1] = useState(getRandomColor());
  const [color2, setColor2] = useState(getRandomColor());
  const [color3, setColor3] = useState(getRandomColor());
  const [color4, setColor4] = useState(getRandomColor());

   useEffect(() => {
    const interval = setInterval(() => {
      setColor1(getRandomColor());
      setColor2(getRandomColor());
      setColor3(getRandomColor());
      setColor4(getRandomColor());
    }, 2000); 

    // Clean up the interval if the component unmounts
    return () => clearInterval(interval);
  }, []); 



  return (
    <div className="Hero">
      <Box title="Nike - air" image={product1} price="$19.99" count={count1} setCount={setCount1} handleCountI = {increment1} handleCountD ={decrement1}  style={{ backgroundColor: color1}}/>
      <Box title="PUMA " image={product2} price="$29.99" count={count2} setCount={setCount2} handleCountI = {increment2} handleCountD ={decrement2}  style={{ backgroundColor: color2}} />
      <Box title="CAMPUS " image={product3} price="$39.99" count={count3} setCount={setCount3} handleCountI = {increment3} handleCountD ={decrement3} style={{ backgroundColor: color3}} />
      <Box title="ASIAN" image={product4} price="$49.99" count={count4} setCount={setCount4} handleCountI = {increment4} handleCountD ={decrement4} style={{ backgroundColor:color4}} />
    </div>
  )
}

export default App
