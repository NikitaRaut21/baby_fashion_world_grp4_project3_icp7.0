import React from 'react'
import "./Button.css"
function Button({text}) {
  return (
    <div>
      <button className='Home-Button'>
        {text}
        </button>
    </div>
  )
}

export default Button