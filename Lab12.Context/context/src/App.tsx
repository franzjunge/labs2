import React from 'react'
import CartList from './components/CartList'
import ItemList from './components/ItemList'
import { CartProvider } from './cart-context'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>React Fruit Market</h1>
      <CartProvider>
        <CartList />
        <ItemList />
      </CartProvider>


    </main>
  )
}

export default App
