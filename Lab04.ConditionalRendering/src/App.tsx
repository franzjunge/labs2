import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Card name='Fred' age={30} role='Alpha' isActive={true} />
        <Card name='Barney' age={33} role='Neighbour' isActive={false}/>
        <Card name='Wilma' age={22} role='Looker after' isActive={true} />      
      </div>
    </>
  )
}

export default App
