import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Pokemons from './views/Pokemons'
import PokeDetail from './components/PokeDetail'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemons/:name" element={<PokeDetail />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
