import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
