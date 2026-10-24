import React from 'react'
import { useNavigate } from 'react-router-dom'

export  function Home() {
  const navigate = useNavigate();
  function handleClick(){
    navigate('/about');
  }
  return (
    <div>Home Page:
      
      <button onClick={handleClick}>
        Move to about page 
      </button>
    </div>
  )
}
