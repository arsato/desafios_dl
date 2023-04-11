import './App.css'
import Navbar from './components/Navbar'
import { useContext, useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Pizza from './views/Pizza'
import Carrito from './views/Carrito'
import MyContext from './MyContext'

function App() {
  const [carrito, setCarrito] = useState([]);

  const estadoCarrito = {carrito, setCarrito}

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <MyContext.Provider value={estadoCarrito}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/carrito" element={<Carrito />} />
      </Routes>
      </MyContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App