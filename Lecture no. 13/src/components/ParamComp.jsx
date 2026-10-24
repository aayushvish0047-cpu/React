import React from 'react'
import { useParams } from 'react-router-dom'

export function ParamComp() {
    const {id} = useParams();
  return (
    <div>ParamComp:{id}</div>
  )
}
