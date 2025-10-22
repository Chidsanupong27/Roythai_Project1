import React, { useState } from 'react'

const App = () => {

const [msg,setMsg] = useState('Hello')

const hdlshow = () =>  {
  setMsg('Hello toppo')
}
  return (
    <div>
      {msg}
      <button onClick={numshow} >Jukkru</button>
    </div>
  )
}

export default App    

