import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const [ temperature, setTemperature ] = useState(20);

  function increaseTemperature(): void {
    setTemperature( temperature + 1 );
  }

  function decreaseTemperature(): void {
    setTemperature( temperature - 1);
  }

  function double(): void {
    setCount( count * 2 );
  }

  return (
    <>
      <h1>React Thermostat</h1>
      <h2>{ temperature }<sup>o</sup>C</h2>
      <div>
        <button onClick={increaseTemperature}> + </button>
        <button onClick={decreaseTemperature}> - </button>
      </div>
      <h1>Powers off 2</h1>
      <h2>{ count.toLocaleString() }</h2>
      <button onClick={double}> X2 </button>
    </>
  )
}

export default App
