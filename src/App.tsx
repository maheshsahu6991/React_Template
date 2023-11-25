import React from 'react'
import './styles.css'
import IMAGE from './react.png'

function App() {
  return (
    <div>
      <h1>This is app build from webpack</h1>
      <img src={IMAGE} alt="React Logo" width="300" height="200" />
    </div>
  )
}

export default App
