import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'

export  function ChildC() {
    const {theme,setTheme} = useContext(ThemeContext);
    function handleClick(){
      if (theme ==='Light'){
        setTheme('Dark')
      }
      else{
        setTheme('Light')
      }
    }
  return (
    <div>
        <button onClick={handleClick}>
            Change Theme
        </button>
    </div>
  )
}
