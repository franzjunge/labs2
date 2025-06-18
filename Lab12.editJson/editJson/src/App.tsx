import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Create from './components/Create'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <h2>Add new records</h2>
        <Create />
      </div>
      <small>
        To run the <strong>json-server</strong>:<br/>
        <code>
          npx json-server --watch data/db.json --port 8000
        </code>
      </small>
    </>
  )
}

export default App
