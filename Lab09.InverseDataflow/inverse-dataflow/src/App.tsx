import { useState } from 'react'
import CounterDisplay from './components/CounterDisplay'
import ResetButton from './components/ResetButton'
import IncrementButton from './components/IncrementButton'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleIncrement(): void {
    setCount((previous) => previous + 1);
  }

  function handleReset(): void {
    setCount(0);
  }

  return (
    <>
      <CounterDisplay count={count} />
      <IncrementButton increment={handleIncrement} /> &nbsp;
      <ResetButton reset={handleReset} />
    </>
  )
}

export default App
