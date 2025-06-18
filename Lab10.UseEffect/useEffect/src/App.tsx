import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import addConfetti from './AddConfetti'

function App() {
  const [count, setCount] = useState(0)
  const [isConettiEnabled, setIsConfettiEnabled] = useState(true);

  useEffect(() => {
    if (isConettiEnabled) {
      addConfetti( {text: count.toString()} );
    }
  }, [count])

  return (
    <>
      <main>
        <h1>Confetti Counter</h1>
        <button onClick={() => setIsConfettiEnabled((prev) => !prev)}>
          Confetti { isConettiEnabled ? "On" : "Off" }
        </button>
        <h2>{count}</h2>
        <button onClick={() => setCount((prev) => prev+1)}>+1</button>
      </main>
    </>
  )
}

export default App
