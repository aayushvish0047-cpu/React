import React from 'react'

export function Card(props) {
  return (
    <div>
        <input type="text" onChange={(e) => props.setName(e.target.value)} />
        <h2> child component :{props.name}</h2>

    </div>
  )
}
