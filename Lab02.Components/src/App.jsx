import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './FirstComponent'
import ImageComponent from './ImageComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
          <FirstComponent />
          <ImageComponent />
      </div>
  )
}

export default App
