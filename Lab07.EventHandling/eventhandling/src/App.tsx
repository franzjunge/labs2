import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import addConfetti from './AddConfetti'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>The confetti button</h1>
        <button onClick={addConfetti}>Confetti Time</button>
      </div>
    </>
  )
}

export default App
