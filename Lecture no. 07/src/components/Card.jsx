import React from 'react'

export function Card(props) {
  return (
    <div>
        <button onClick={props.handleClickI}>
            <h1>{props.count}</h1>
        </button>

        <p>{props.name}</p>
        this is card component
        {props.children}
    </div>
  )
}
