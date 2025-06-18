import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';

import './App.css'
import ShopPage from './pages/ShopPage';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/checkout" element={<CheckoutPage/>} />
            <Route path="/shop" element={<ShopPage/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
