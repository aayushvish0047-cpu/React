import React from 'react'
import { useNavigate } from 'react-router-dom'

export  function About() {
  const navigate = useNavigate();
  function handleClick(){
    navigate('/dashboard')

  }
  return (
    <div>About Page : 
      <button onClick={handleClick}>
        Move To DashBoard
      </button>
    </div>
  )
}
