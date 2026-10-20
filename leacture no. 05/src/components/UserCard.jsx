import React from 'react'
import hero from '../assets/hero.jpg'
import './UserCard.css'
export function UserCard(props) {
  return (
    <div className="user-container">
        <p>{props.name}</p>
        <img  id="hero-image" src={hero} alt={props.name} />
        <p>Description: {props.description}</p>
    </div>
  )
}
