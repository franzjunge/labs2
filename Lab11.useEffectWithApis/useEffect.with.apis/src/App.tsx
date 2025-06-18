import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const apiUrl = "https://dog.ceo/api/breeds/image/random";
  const [count, setCount] = useState(0)
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setImageUrl(data.message))
    ;
  }, []);
  
  return (
    <>
      <main>
        <h1>Go Fetch</h1>
          <img Width={300} src={imageUrl} alt="" />
      </main>
    </>
  )
}

export default App
