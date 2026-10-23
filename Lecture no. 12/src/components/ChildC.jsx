import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../App'

export  function ChildC() {
    const user = useContext(UserContext);
  return (
    <div>
        data : {user.name}
    </div>
  )
}
