import React from 'react'
import './Box.css'
export function Box(props) {
  return (
    <div className="Box" style={props.style}>
        <img src={props.image} alt="" />
        <section>
          <h1>{props.title}</h1>
          <p>{props.price}</p>
          <section className="quantity">
            <button id='btn' onClick={props.handleCountD}>-</button>
            <p>{props.count}</p>
            <button id='btn' onClick={props.handleCountI}>+</button>
          </section>
          <button id='cart-btn' onClick={props.handleCountI}>Add to Cart</button>
        </section>
    </div>
  )
}
